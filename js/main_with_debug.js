// This function is connected to the index.html which is
//		in the folder above this .js file and will run the 'cities' function
// 		I built below.

//initialize function called when the script loads
function initialize(){
		cities();
};

// This 'cities' function is built to create a table with cities names and their populations
function cities(){

// Here we combine the city data and population data into one
// 		condensed data set, using the least amount of code while
// 		functioning the same as example2.3.
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

// The next step is to add table elements to the existing data.
		$("#mydiv").append("<table>");
// Next we add a header to the table.
		$("table").append("<tr>");
// Then we added the labels of 'City' and 'Population.''
		$("tr").append("<th>City</th><th>Population</th>");
		//loop to add a new row for each city
  	for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};
// The addColumns and addEvents will be the two functions we will be calling.
addColumns(cityPop);
addEvents();

// Below is the addColumns function, which was called two lines above this comment.
function addColumns(cityPop){

    $('tr').each(function(i)){
// Here we use an if/else statement
    	if (i == 0){
// This line is saying that if i is exactly 0, then go to the line directly below.
// If i is not equal to zero, continue through the conditional statements one at a time.
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

    		$(this).append('<td' + citySize + '</td>');
    	};
    });
};
//Here below is the addEvents function that was called above.
function addEvents(){
// As the mouse of the user pans over the text, the color will change to a random color.
	$("table").mouseover(function(){

		var color = "rgb";

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

//This function will tell the user after they click on the table that 'Hey,
// you clicked me!' in a popup small window.
function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
