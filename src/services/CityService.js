import csv from "csv-load-sync";
import path from 'path';

class CityService {
  constructor() {
    const municipiosPath = path.resolve(
      __dirname,
      "..",
      "..",
      "assets",
      "municipios-2019.csv"
    );

    const municipiosCsv = csv(municipiosPath);

    this.cities = municipiosCsv.map((r, i) => {
      return {
        id: i + 1,
        ibgeCode: r.codigo_ibge,
        name: r.nome
      };
    });
  }

  findByIbgeCode(ibgeCode){
      return this.cities.find(c => c.ibgeCode === ibgeCode);
  }
}

export default new CityService();
