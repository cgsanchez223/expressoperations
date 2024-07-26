const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { numsArray, findMean, findMedian, findMode } = require('./operations');

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Bad Request, need list of numberss', 400)
    }
    let numStrings = req.query.nums.split(',');
    let nums = numsArray(numStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
    }

    return res.send(result);
});
// ex use:
// /mean?nums=1,3,5,7 
// {"operation":"mean","result":4}


app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Bad request, need list of numbers", 400)
    }
    let numStrings = req.query.nums.split(',');
    let nums = numsArray(numStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
    }

    return res.send(result);
});
// ex use:
// /median?nums=1,3,5,7 
// {"operation":"median","result":4}


app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Bad request, need list of numbers', 400)
    }
    let numStrings = req.query.nums.split(',');
    let nums = numsArray(numStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.send(result);
});
// ex use:
// /mode?nums=1,3,5,7
// {"operation":"mode","result":1}



// Both app.use commands are to handle errors
app.use(function(req, res, next) {
    const err = new ExpressError("Not Found", 404);

    return next(err);
});


app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});
// ex errors
// /mean?nums=foo,2,3
// {"error":{"message":"The value 'foo' at index 0 is not a valid number"},"message":"The value 'foo' at index 0 is not a valid number"}

// /mean
// {"error":{"message":"Bad Request, need list of numberss","status":400},"message":"Bad Request, need list of numberss"}

app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
})