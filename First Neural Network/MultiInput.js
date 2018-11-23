var weights = [0.1, 0.2, 0]

function neural_network(input, weights){
	var pred = w_sum(input, weights);
	return pred;
}
	

/* This dataset is the current status at the beginning of each game
for the first 4 games in a season.

toes = current number of toes
wlrec = current games won (percent)
nfans = fan count (in millions) */


var toes = [8.5, 9.5, 9.9, 9.0]
var wlrec = [0.65, 0.8, 0.8, 0.9]
var nfans = [1.2, 1.3, 0.5, 1.0]

// input corresponds to every entry
// for the first game of the season

var input = [toes[0], wlrec[0], nfans[0]]

var pred = neural_network(input, weights)

function w_sum(a,b){ 

	if(a.length == b.length){
		  var output = 0;
	}

	for (var i =0; i< a.length; i++){
		output += (a[i] * b[i]);
	}
	return output
}
	
console.log(pred);
