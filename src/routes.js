import { Router } from "express";

import HolidayController from "./controllers/HolidayController";
import HolidayMobileController from "./controllers/HolidayMobileController";

import MobileHolidayMiddleware from "./middlewares/MobileHolidayMiddleware";
import AllMiddleware from './middlewares/AllMiddleware';

import HolidayMobileService from "./services/HolidayMobileService";

const routes = new Router();

routes.use(AllMiddleware);

routes.get("/feriados/:ibge_code/:holiday_date(\\d{4}-\\d{2}-\\d{2}$)", MobileHolidayMiddleware, HolidayController.get);
routes.put("/feriados/:ibge_code/:holiday_date(\\d{2}-\\d{2}$)", HolidayController.store);
routes.delete("/feriados/:ibge_code/:holiday_date(\\d{2}-\\d{2}$)", HolidayController.delete);

routes.put(
  "/feriados/:ibge_code/pascoa",
  HolidayMobileController.store(HolidayMobileService.EASTER)
);


routes.put(
  "/feriados/:ibge_code/corpus-christi/",
  HolidayMobileController.store(HolidayMobileService.CORPUS_CHRISTI)
);

routes.put(
  "/feriados/:ibge_code/carnaval",
  HolidayMobileController.store(HolidayMobileService.CARNAVAL)
);

routes.put(
  "/feriados/:ibge_code/sexta_feira_santa",
  HolidayMobileController.store(HolidayMobileService.GOOD_FRIDAY)
);

routes.delete(
  "/feriados/:ibge_code/pascoa",
  HolidayMobileController.delete(HolidayMobileService.EASTER)
);

routes.delete(
  "/feriados/:ibge_code/corpus_christi",
  HolidayMobileController.delete(HolidayMobileService.CORPUS_CHRISTI)
);

routes.delete(
  "/feriados/:ibge_code/carnaval",
  HolidayMobileController.delete(HolidayMobileService.CARNAVAL)
);

routes.delete(
  "/feriados/:ibge_code/sexta_feira_santa",
  HolidayMobileController.delete(HolidayMobileService.GOOD_FRIDAY)
);

export default routes;
