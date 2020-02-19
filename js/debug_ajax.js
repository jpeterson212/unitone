function debugCallback(response){

	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

function debugAjax(){

	var mydata;

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){

			debugCallback(mydata);
		}
	});

	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));

//Moved the mydata variable out of the function to make accessible
// globally.
var mydata;
$.ajax("map.geojson", {
	dataType: "json",
	success: function(response){
		mydata = response;
	}
});

// Insert intialize_2 function
function initialize_2(){
		debugAjax();
};
function debugCallback(response){
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};
function debugAjax(){
			debugCallback(mydata);
	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};
$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));

// Called the initialize_2 function to execute and print the data.
$(document).ready(initialize_2);
