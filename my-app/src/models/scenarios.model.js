const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ScenarioSchema = new Schema({
    name: { type: String, require: true, unique: true },
    weather: { type: String, required: true },
    event: { type: ObjectId, require: false },
    description: { type: String, require: true }
});

module.exports = mongoose.model(`Scenario`, ScenarioSchema);