import {QueryInterface} from 'sequelize';

module.exports = {
	// tslint:disable-next-line:variable-name
	up: async (queryInterface: QueryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.createTable('Users', {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					type: Sequelize.STRING,
				},
				lastName: {
					type: Sequelize.STRING,
				},
				email: {
					type: Sequelize.STRING,
				},
				password: {
					type: Sequelize.STRING,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			}),
		]);
	},

	// tslint:disable-next-line:variable-name
	down: async (queryInterface: QueryInterface, Sequelize) => {
		return Promise.all([queryInterface.dropTable('Users')]);
	},
};
