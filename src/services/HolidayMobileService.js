import { format, addDays, subDays, parseISO } from "date-fns";

class HolidayMobileService {
  constructor() {
    this.EASTER = {
      holiday_code: 1,
      name: "Páscoa",
      generateDate: (holiday) => this.createEaster(holiday),
    };

    this.CORPUS_CHRISTI = {
      holiday_code: 2,
      name: "Corpus Christi",
      generateDate: (holiday) => this.createCorpusCristi(holiday),
    };

    this.CARNAVAL = {
      holiday_code: 3,
      name: "Carnaval",
      generateDate: (holiday) => this.createCarnaval(holiday),
    };
    this.GOOD_FRIDAY = {
      holiday_code: 4,
      name: "Sexta-Feira Santa",
      generateDate: (holiday) => this.createGoodFriday(holiday),
    };

    this.HOLIDAYS = [
      this.EASTER,
      this.CORPUS_CHRISTI,
      this.CARNAVAL,
      this.GOOD_FRIDAY,
    ];
  }

  fromHolidayCode(holidayCode) {
    return this.HOLIDAYS.find((h) => h.holiday_code === holidayCode);
  }

  createGoodFriday(mobileHoliday) {
    const easter = this.createEaster(mobileHoliday);
    const holiday = subDays(easter.holiday, 2);
    const { name, holiday_code: holidayCode } = this.GOOD_FRIDAY;

    return {
      name,
      holiday,
      holidayCode,
    };
  }

  createCarnaval(mobileHoliday) {
    const easter = this.createEaster(mobileHoliday);

    const holiday = subDays(easter.holiday, 47);
    const { name, holiday_code: holidayCode } = this.CARNAVAL;

    return {
      name,
      holiday,
      holidayCode,
    };
  }

  createCorpusCristi(mobileHoliday) {
    const easter = this.createEaster(mobileHoliday);
    const holiday = addDays(easter.holiday, 60);

    const { name, holiday_code: holidayCode } = this.CORPUS_CHRISTI;

    return {
      name,
      holiday,
      holidayCode,
    };
  }

  createEaster(mobileHoliday) {
    const mh = parseISO(mobileHoliday);
    const year = parseInt(format(mh, "yyyy"));

    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);

    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = 1 + ((h + l - 7 * m + 114) % 31);

    const formatTwoDigits = (s) => s.slice(-2);

    const holiday = parseISO(
      `${year}-${formatTwoDigits("00" + month)}-${formatTwoDigits("00" + day)}`
    );

    const { name, holiday_code: holidayCode } = this.EASTER;

    return {
      holiday,
      name,
      holidayCode,
    };
  }
}

export default new HolidayMobileService();
