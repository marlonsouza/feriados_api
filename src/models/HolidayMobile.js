import { Model, DataTypes } from "sequelize";

class HolidayMobile extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        ibge_code: DataTypes.STRING,
        holiday_code: DataTypes.INTEGER
      },
      { sequelize }
    );

    return this;
  }
}

export default HolidayMobile;
