import { parseISO, format } from "date-fns";

import Holiday from "../models/Holiday";
import CityService from "../services/CityService";
import State from "../models/State";

class HolidayController {
  async get(req, res) {
    const { ibge_code, holiday_date } = req.params;

    const holidayDate = parseISO(holiday_date);

    const mobileHoliday = req.mobilesHolidays.find(
      (mh) =>
        format(mh.holiday, "yyyy-MM-dd") === format(holidayDate, "yyyy-MM-dd")
    );

    if (mobileHoliday) {
      return res.json({ name: mobileHoliday.name });
    }

    const city = CityService.findByIbgeCode(ibge_code);
    const state = await State.findOne({ where: { ibge_code } });

    if (!state && !city) {
      return res.status(404).json({ msg: "Codigo IBGE não encontrado" });
    }

    const holiday = await Holiday.findOne({
      where: {
        day_holiday: format(holidayDate, "dd"),
        month_holiday: format(holidayDate, "MM"),
      },
    });

    if (!holiday) {
      return res.status(404).json({ msg: "Feriado não cadastrado" });
    }

    const { name } = holiday;

    return res.json({ name });
  }

  async store(req, res) {
    const { ibge_code, holiday_date } = req.params;

    const holidayDate = parseISO(`2020-${holiday_date}`);

    const city = CityService.findByIbgeCode(ibge_code);
    const state = await State.findOne({ where: { ibge_code } });

    if (!state && !city) {
      return res.status(404).json({ msg: "Codigo IBGE não encontrado" });
    }

    const holiday = await Holiday.findOne({
      where: {
        day_holiday: format(holidayDate, "dd"),
        month_holiday: format(holidayDate, "MM"),
      },
    });

    const { name } = req.body;

    if (holiday) {
      if (holiday.fixed) {
        return res.json({ name });
      }

      await holiday.update({ name });

      return res.json({ name });
    }

    const newHoliday = {
      day_holiday: format(holidayDate, "dd"),
      month_holiday: format(holidayDate, "MM"),
      name,
    };

    if (city) {
      newHoliday.city_id = city.id;
    }

    if (state) {
      newHoliday.state_id = state.id;
    }

    await Holiday.create(newHoliday);

    return res.json({ name });
  }

  async delete(req, res) {
    const { ibge_code, holiday_date } = req.params;

    const holidayDate = parseISO(`2020-${holiday_date}`);

    const fixedHoliday = await Holiday.findOne({
      where: {
        day_holiday: format(holidayDate, "dd"),
        month_holiday: format(holidayDate, "MM"),
        fixed: true
      },
    });

    if (fixedHoliday){
      return res
        .status(403)
        .json({ msg: "Não é possível remover feriado fixo" });
    }

    const city = CityService.findByIbgeCode(ibge_code);
    const state = await State.findOne({
      where: {
        ibge_code: ibge_code.length > 2 ? ibge_code.slice(0, 2) : ibge_code,
      },
    });

    if (!state && !city) {
      return res.status(404).json({ msg: "Codigo IBGE não encontrado" });
    }

    const where = {
      where: {
        day_holiday: format(holidayDate, "dd"),
        month_holiday: format(holidayDate, "MM"),
      },
    };

    if (city) where.where.city_id = city.id;
    if (state && ibge_code.length < 3) where.where.state_id = state.id;

    const holiday = await Holiday.findOne(where);

    if (ibge_code.length > 2) {
      const stateHoliday = await Holiday.findOne({
        where: {
          day_holiday: format(holidayDate, "dd"),
          month_holiday: format(holidayDate, "MM"),
          state_id: state.id,
        },
      });

      if (stateHoliday) {
        return res.status(403).json({
          msg:
            "Não é possível excluir um feriado estadual através de um município",
        });
      }
    }

    if (!holiday) {
      return res.status(404).json({ msg: "Feriado não cadastrado" });
    }

    await holiday.destroy();

    return res.status(204).send();
  }
}

export default new HolidayController();
