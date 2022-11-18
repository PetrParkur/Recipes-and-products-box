module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Storages', [
      {
        name: 'Нут',
        weight: '200',
        unit: 'г',
        userid: 1,
      },
      {
        name: 'Лимонный сок',
        weight: '10',
        unit: 'г',
        userid: 1,
      },
      {
        name: 'Оливковое масло',
        weight: '40',
        unit: 'г',
        userid: 1,
      },
      {
        name: 'Соль',
        weight: '10',
        unit: 'г',
        userid: 1,
      },
      {
        name: 'Зира',
        weight: '10',
        unit: 'г',
        userid: 1,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Storages', null, {});
  },
};
