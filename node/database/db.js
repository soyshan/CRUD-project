import {Sequelize} from 'sequelize'

const db = new Sequelize('recetas_database','root','Misql123123.',{
   host:'localhost',
   dialect:'mysql'
});

export default db

//  conexion a la base de datos
