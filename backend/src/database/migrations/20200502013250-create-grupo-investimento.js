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
      prompt: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      objective: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contributionAmountMonth: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      expirationDay: {
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
