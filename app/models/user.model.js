module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    'user',
    {
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.ENUM({
          values: ['male', 'female'],
        }),
      },
      phone: {
        type: Sequelize.STRING,
      },
    }
    /*
      {
        defaultScope: {
          attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
        },
      }*/
  );
};
