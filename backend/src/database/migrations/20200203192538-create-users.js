module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allownNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allownNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allownNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allownNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allownNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
