var weight = 0.5
var input = 0.5
var goal_prediction = 0.8

for(var i = 20; i>0; i--){

    var pred = input * weight;
    var error = (pred - goal_prediction) ** 2;
    var direction_and_amount = (pred - goal_prediction) * input;
    var weight = weight - direction_and_amount;
    
    console.log("Error:" + error+ " prediction:" + pred);
}
