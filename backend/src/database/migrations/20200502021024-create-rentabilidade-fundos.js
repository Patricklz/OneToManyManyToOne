module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('profitabilityOfFunds', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      profitabilityMonth: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('profitabilityOfFunds');
  },
};
