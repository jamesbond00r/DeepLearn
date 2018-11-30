var weight = 0.1
var alpha = 0.01

function neural_network(input, weight){
    var prediction = input * weight;
    return prediction;
}
  var number_of_toes = [8.5];
  var win_or_lose_binary = [1];
  
 var input = number_of_toes[0];
  var goal_pred = win_or_lose_binary[0];

var pred = neural_network(input,weight);

var error = (pred - goal_pred) ** 2;

var delta = pred - goal_pred;

var weight_delta = input * delta;

weight = weight_delta * alpha;

console.log("ERROR:" + error + " Prediction:" + pred);
