const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Tareas = sequelize.define('Tareas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  categoria: { // ESTO SE REFIERE A LA ESTANCIA EN LA QUE SE HACE LA TAREA. EJ: COCINA, BAÑO, ETC
    type: DataTypes.STRING(50),
    allowNull: false
  },
  fecha_vencimiento: {
    type: DataTypes.DATE
  },
  prioridad: {
    type: DataTypes.ENUM('baja', 'media', 'alta')
    
  },
  estado: {
    type: DataTypes.BOOLEAN,
    default: false
  },
 
}, {
  tableName: 'Tareas',
});

module.exports = Tareas;