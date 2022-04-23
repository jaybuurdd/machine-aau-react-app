module.exports = (sequelize, DataTypes) => {
    const Alumnae = sequelize.define("Alumnae", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Player: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        School: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ImgLoc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Alumnae;
}