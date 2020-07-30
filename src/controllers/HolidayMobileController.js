import HolidayMobile from "../models/HolidayMobile";
import City from "../models/City";
import State from "../models/State";

class HolidayMobileController {
  store(mobileHoliday) {
    return async (req, res) => {
      const { ibge_code } = req.params;

      const city = await City.findOne({ where: { ibge_code } });
      const state = await State.findOne({ where: { ibge_code } });

      if (!state && !city) {
        return res.status(404).json({ msg: "Codigo IBGE não encontrado" });
      }

      const mobiHoliday = await HolidayMobile.findOne({
        where: {
          holiday_code: mobileHoliday.holiday_code,
          ibge_code,
        },
      });

      if (mobiHoliday) {
        return res.json({ name: mobileHoliday.name });
      } else {
        await HolidayMobile.create({
          name: mobileHoliday.name,
          holiday_code: mobileHoliday.holiday_code,
          ibge_code,
        });
      }

      return res.json({ name: mobileHoliday.name });
    };
  }

  delete(mobileHoliday) {
    return async (req, res) => {

      const { ibge_code } = req.params;
  
      const city = await City.findOne({ where: { ibge_code } });
      const state = await State.findOne({ where: { ibge_code } });
  
      if (!state && !city) {
        return res.status(404).json({ msg: "Codigo IBGE não encontrado" });
      }
  
      if (state && state.ibge_code !== ibge_code) {
        return res.status(403).json({
          msg:
            "Não é possível excluir um feriado estadual através de um município",
        });
      }
  
      const mobiHoliday = await HolidayMobile.findOne({
        where: {
          holiday_code: mobileHoliday.holiday_code,
          ibge_code,
        },
      });

      if (!mobiHoliday) {
        return res.status(404).json({ msg: "Feriado não cadastrado" });
      }

      await mobiHoliday.destroy();

      return res.status(204).send();
    }


  }
}

export default new HolidayMobileController();
