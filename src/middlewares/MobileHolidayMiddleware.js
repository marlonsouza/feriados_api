import HolidayMobile from "../models/HolidayMobile";
import HolidayMobileService from "../services/HolidayMobileService";

export default async (req, res, next) => {
  const { ibge_code, holiday_date } = req.params;

  const mobiles = await HolidayMobile.findAll({ where: { ibge_code } });
  const mobilesHolidays = [];

  for (const mobile of mobiles) {
    const mh = HolidayMobileService.fromHolidayCode(mobile.holiday_code);

    const { holiday } = mh.generateDate(holiday_date);

    mh.holiday = holiday;

    mobilesHolidays.push(mh);
  }

  req.mobilesHolidays = mobilesHolidays;

  return next();
};
