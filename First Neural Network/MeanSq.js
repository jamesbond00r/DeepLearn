var knob_weight = 0.5
var input = 0.5
var goal_pred = 0.8

var pred = input * knob_weight;

var error = (pred - goal_pred) ** 2;

console.log(error);


//Mean Squared Errora