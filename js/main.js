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
// this...
