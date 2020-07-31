import { parseISO } from "date-fns";

import HolidayMobileService from "../src/services/HolidayMobileService";

test("Easter 2020", () => {
  const myDate = "2020-01-01";

  const easter = HolidayMobileService.createEaster(myDate);

  expect(easter.holiday).toStrictEqual(parseISO("2020-04-12"));
});

test('Carnaval 2020', ()=>{
    const myDate = "2020-01-01";

    const carnaval = HolidayMobileService.createCarnaval(myDate);

    expect(carnaval.holiday).toStrictEqual(parseISO("2020-02-25"));
})

test("Corpus Christi 2020", ()=>{

    const myDate = "2020-01-01";

    const corpusChristi = HolidayMobileService.createCorpusCristi(myDate);

    expect(corpusChristi.holiday).toStrictEqual(parseISO("2020-06-11"));

})

test("Good Friday 2020", ()=>{

    const myDate = "2020-01-01";

    const goodFriday = HolidayMobileService.createGoodFriday(myDate);

    expect(goodFriday.holiday).toStrictEqual(parseISO("2020-04-10"));

})