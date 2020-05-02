module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('investment_groups', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      term: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      goal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contribution: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      expiration_day: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('investment_groups');
  },
};
