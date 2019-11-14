const Scenario = require(`../models/scenarios.model`);

exports.test = function(req, res, next)
{
    res.send(`You hit the test route.`);
}

exports.create = function(req, res, next) 
{
    const scenario = new Scenario(req.body);
    
    scenario.save((err, result) => {
        if (err) 
        {
            return next(err);
        }
        console.log(`Create result: `, result);
        res.send(`Scenario created successfully.`);
    });
}
exports.getScenarios = function(req, res, next)
{
    const query = {};
    Scenario.find(query, (err, results) => {
        if (err)
        {
            return next (err);
        }
        console.log(`get scenario results: `, results);
        res.send(results);
    });
}

exports.getScenarioById = function(req, res, next) 
{
    const query = {
        _id: req.params.id
    };
    Scenario.find(query, (err, results) => {
        if (err)
        {
            return next (err);
        }
        console.log(`getScenarioById results: `, results);
        res.send(results);
    });
};

exports.updateScenario = function(req, res, next) 
{
    const query = {
        _id: req.params.id
    };
    const update = {
        $set: req.body
    };
    Scenario.findByIdAndUpdate(query, update, (err, result) => {
        if (err) 
        {
            return next(err);
        }
        res.send(result);
    });
}

exports.deleteScenario = function(req, res, next)
{
    const query = {
        _id: req.params.id
    };
    Scenario.findByIdAndDelete(query, (err, result) => {
        if (err) {
            return next(err);
        }
    })
}