// Added comments above exisitng comments provided.

// This function is connected to the index.html which is
//		in the folder above this .js file and will run the 'cities' function
// 		I built below.

//initialize function called when the script loads
function initialize(){
		cities();
};

//function to create a table with cities and their populations
function cities(){

// Here we combine the city data and population data into one
// 		condensed data set, using the least amount of code while
// 		functioning the same as example2.3.
	//define two arrays for cities and population
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

		//append the table element to the div
		$("#mydiv").append("<table>");

		//append a header row to the table
		$("table").append("<tr>");

		//add the "City" and "Population" columns to the header row
		$("tr").append("<th>City</th><th>Population</th>");

		//loop to add a new row for each city
  	for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
//This above is using the main.js code that we did in lab to
// 			structure our table into rows and columns 
    addColumns(cityPop);
    addEvents();
};

function addColumns(cityPop){

    $('tr').each(function(i){

    	if (i == 0){

    		$(this).apend('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$this.append('<td' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	$('#table').mouseover(function(){

		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";

			} else {
				color += ")";
		};

		$(this).css('color', color);
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
