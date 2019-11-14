const Event = require(`../models/event.model`);

exports.test = function(req, res, next)
{
    res.send(`You hit the test route.`);
}

exports.create = function(req, res, next) 
{
    const event = new Event(req.body);
    
    event.save((err, result) => {
        if (err) 
        {
            return next(err);
        }
        console.log(`Create result: `, result);
        res.send(`Event created successfully.`);
    });
}
exports.getEvent = function(req, res, next)
{
    const query = {};
    Event.find(query, (err, results) => {
        if (err)
        {
            return next (err);
        }
        console.log(`get event results: `, results);
        res.send(results);
    });
}

exports.getEventById = function(req, res, next) 
{
    const query = {
        _id: req.params.id
    };
    Event.find(query, (err, results) => {
        if (err)
        {
            return next (err);
        }
        console.log(`getEventById results: `, results);
        res.send(results);
    });
};

exports.updateEvent = function(req, res, next) 
{
    const query = {
        _id: req.params.id
    };
    const update = {
        $set: req.body
    };
    Event.findByIdAndUpdate(query, update, (err, result) => {
        if (err) 
        {
            return next(err);
        }
        res.send(result);
    });
}

exports.deleteEvent = function(req, res, next)
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