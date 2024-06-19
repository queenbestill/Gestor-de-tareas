const User = require("../api/models/user.model");
const Tareas = require("../api/models/tarea.model");
const UnidadFamiliar = require("../api/models/unidadFamiliar.model");

const initRelationships = () => {
  console.log("ESTO FUNCIONAAAA");
};


User.hasMany(Tareas)
Tareas.belongsTo(User)

UnidadFamiliar.hasMany(Tareas)
Tareas.belongsTo(UnidadFamiliar)


UnidadFamiliar.hasMany(User, {onUpdate: 'CASCADE', onDelete: 'CASCADE'})
User.belongsTo(UnidadFamiliar)

module.exports = {
  initRelationships,
};
