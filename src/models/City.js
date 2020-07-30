import { Model, DataTypes } from 'sequelize';

class City extends Model{
    static init(sequelize){
        super.init({
            ibge_code: DataTypes.STRING,
            name: DataTypes.STRING
        },{
            sequelize
        });

        return this;
    }
}

export default City;