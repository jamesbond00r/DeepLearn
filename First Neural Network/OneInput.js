
var weight = 0.1;

function neural_network(input, weight){
	var prediction = input * weight;
	return prediction
}

var number_of_toes = [8.5, 9.5, 10, 9];

var input = number_of_toes[0];

var pred = neural_network(input, weight);

console.log(pred);