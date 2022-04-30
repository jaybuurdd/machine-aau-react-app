module.exports = (sequelize, DataTypes) => {
    const Coaches = sequelize.define("Coaches", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Coach: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Team: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Team2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        BioContent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ImgLoc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Coaches;
}