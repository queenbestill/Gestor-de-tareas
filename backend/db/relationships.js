const User = require("../api/models/user.model");
const Tareas = require("../api/models/tarea.model");
const UnidadFamiliar = require("../api/models/unidadFamiliar.model");
const Estancia = require("../api/models/estancia.model");
const Miembro = require("../api/models/miembro.model");

const initRelationships = () => {
  console.log("ESTO FUNCIONAAAA");
};

User.hasMany(Tareas);
Tareas.belongsTo(User);

UnidadFamiliar.hasMany(Tareas);
Tareas.belongsTo(UnidadFamiliar);

UnidadFamiliar.hasMany(User, { onUpdate: "CASCADE", onDelete: "CASCADE" });
User.belongsTo(UnidadFamiliar);

UnidadFamiliar.hasMany(Estancia, { onUpdate: "CASCADE", onDelete: "CASCADE" });
Estancia.belongsTo(UnidadFamiliar);

UnidadFamiliar.hasMany(Miembro, { onUpdate: "CASCADE", onDelete: "CASCADE" });
Miembro.belongsTo(UnidadFamiliar);

module.exports = {
  initRelationships,
};
