var weight = 0.5
var input = 2
var goal_prediction = 0.8
var alpha = 0.01


for(var i = 35; i > 0; i--){

	var pred = input * weight;
    var error = (pred - goal_prediction) ** 2;
    var delta = input * (pred - goal_prediction)
    var weight_delta = input * delta
   	 weight = weight - (alpha * weight_delta)
   


    console.log("Error:" +error + " prediction:" + pred);
}
    
   
   
