import { Model, DataTypes } from "sequelize";

class State extends Model {
  static init(sequelize) {
    super.init(
      {
        ibge_code: DataTypes.STRING,
        initials: DataTypes.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default State;
