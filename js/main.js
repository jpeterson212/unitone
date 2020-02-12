function initialize(){
		cities();
};

// Here we create the table with city and population data.
function cities(){

		var cityPop = [
				{
						city: 'Madison',
						population: 233209
				},
				{
						city: 'Milwaukee',
						population: 594833
				},
				{
						city: 'Green Bay',
						population: 104057
				},
				{
						city: 'Superior',
						population: 27244
				}
		];


		$("#mydiv").append("<table>");

		$("table").append("<tr>");

		$("tr").append("<th>City</th><th>Population</th>");

  	for (var i = 0; i < cityPop.length; i++){

        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";

        $("table").append(rowHtml);
    };

		addColumns(cityPop);
		addEvents();

};


// This function adds the 'city size' column and ranks the cities into either
// small, medium, or large.
function addColumns(cityPop){
		console.log("City Pop!")
    $('tr').each(function(i){

    	if (i == 0){
    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};
// This function creates random color as a mouse is dragged over the texts,
// changing the color to a random rgb value.
function addEvents(){
	console.log("Add events!")

	$("table").mouseover(function(){

		var color = "rgb(";

		for (var i=0; i<3; i++){
			console.log("here");
			var random = Math.round(Math.random() * 255);

			color += random;
			console.log(color);

			// color = color + "random"


			if (i<2){
				color += ",";

			} else {
				color += ")";
		};
		}

		$(this).css('color', color);
	});

// This function will run when the user clicks on the text.
// There will be a pop up box that will alert the user with a message.
function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);

//console.log('Hi, this is a test')
// this... is from example 2.3

function jsAjax(){
    // Step 1: Create the request
    var ajaxRequest = new XMLHttpRequest();

    //Step 2: Create an event handler to send received data to a callback function
    ajaxRequest.onreadystatechange = function(){
        if (ajaxRequest.readyState == 4){
            callback(ajaxRequest.response);
        };
    };

    //Step 3: Open the server connection
    ajaxRequest.open('GET', 'map.geojson', true);

    //Step 4: Set the response data type
    ajaxRequest.responseType = "json";

    //Step 5: Send the request
    ajaxRequest.send();
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(JSON.stringify(response));
    console.log(response);
};

window.onload = jsAjax();



//This from example 2.5
//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.get("map.geojson", callback, "json");
      //  dataType: "json",
      //  success: callback

};

//define callback function
function callback(response, status, jqXHRobject){
    //tasks using the data go here
    console.log(JSON.stringify(response));
		console.log(response);
};

$(document).ready(jQueryAjax);
