import { Model, DataTypes, Sequelize } from "sequelize";

class Holiday extends Model {
  static init(sequelize) {
    super.init(
      {
        day_holiday: DataTypes.INTEGER,
        month_holiday: DataTypes.INTEGER,
        name: DataTypes.STRING,
        fixed: DataTypes.BOOLEAN
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.City, {
      foreignKey: "city_id",
      as: "city",
    });

    this.belongsTo(models.State, {
      foreignKey: "state_id",
      as: "state",
    });
  }
}

export default Holiday;