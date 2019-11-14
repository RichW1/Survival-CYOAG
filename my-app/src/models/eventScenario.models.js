const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const eventScenarioSchema = new Schema({
    name: { type: String, require: true, unique: true },
    description: { type: String, require: true },
});

module.exports = mongoose.model(`Event`, eventScenarioSchema);