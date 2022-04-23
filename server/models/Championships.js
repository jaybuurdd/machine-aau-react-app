module.exports = (sequelize, DataTypes) => {
    const Championships = sequelize.define("Championships", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Event: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Certification: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Championships;
}