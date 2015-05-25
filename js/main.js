//Nom : Serck
//Timothee : Timothée
//class : 2TID2
//source : http://www.dynamicguru.com/jquery/get-weather-info-free-api-jquery-ajax/
// credit : 2

$( document ).ready(function() {
//set the varriable to the element with the class container
var container = $('.container');
//set the varriable to the element with the class wind
var wind = $('.wind');
//set the varriable to the element with the class temperature
var temperature = $('.temperature');
//set the varriable to the element with the class name
var name = $('.name');
//set the varriable to the element with the class humidity_box
var humidity_box = $('.humidity_box');
// options :
//set the variable city with the ip address
var my_city=myip;
//set the key of the api
var my_key="512358837ae8b362029ea7b95f9c7";
//set the number of day to keep in json
var no_of_days=2;
// build URI:
var uri="http://api.worldweatheronline.com/free/v2/weather.ashx?q="+my_city+"&key="+my_key+"&format=json&no_of_days="+no_of_days+"&includeLocation=yes";
// uri-encode it to prevent errors :
uri=encodeURI(uri); 

	// reset the function each 3s
	setInterval(function(){  
		jQuery.get(uri,function(r)
		{
		  	   // no error
		   // do normal stuff

		     // Name of nearest area :
		 	 nearest_area    =r.data.nearest_area[0].region[0].value;


		    
		    // Name of country :
		    country         =r.data.nearest_area[0].country[0].value;
		    
		    // but the ip adress and the result of the api country to html
		    name.text( myip + " ( "+ nearest_area + " "+ country + " ) ");

		    // Current temperature in fahrenheit and celsius:
		    current_temp_F  =r.data.current_condition[0].temp_F;
		    current_temp_C  =r.data.current_condition[0].temp_C;

		    // set to html the current tempeture in celcius to html
		    temperature.text(current_temp_C+" celcius");
		    
		    // A short description of current  weather conditions:
		    current_condition=r.data.current_condition[0].weatherDesc[0].value;
		    


		    // Max/Min temperature in fahrenheit
		    max_temp_F      =r.data.weather[0].tempMaxF;
		    min_temp_F      =r.data.weather[0].tempMinF;
		    
		    // Max/min temperature in celsius:
		    max_temp_C      =r.data.weather[0].tempMaxC;
		    min_temp_C      =r.data.weather[0].tempMinC;
		    
		    //set the current Humidity in %
		    humidity =r.data.current_condition[0].humidity;
		    //give the height to the div humidity_box
		    humidity_box.height(parseInt(humidity)+'%');
		    //give to the html the % of humidity 
		    humidity_box.text(parseInt(humidity)+'% of humidity');


		    
		    // Precipitation in mm :
		    precipitation   =r.data.current_condition[0].precipMM;

		    
		    
		    // Pressure in millibars:
		    pressure        =r.data.current_condition[0].pressure;
		    
		    // Wind speed in kmph
		    wind_speed_kmph =r.data.current_condition[0].windspeedKmph;
		    
		    // Wind speed in mph
		    wind_speed_mph  =r.data.current_condition[0].windspeedMiles;
		    
		    // Wind direction degree (0 degree corresponds with North)
		    wind_dir        =r.data.current_condition[0].winddirDegree;


		  	// triangle vent direcîon
		  	//set to variable the direction of the wind
		  	var deg = parseInt(wind_dir);
		  	//make the rotation of the element with the direction of the wind 
		  	wind.css(transform,'rotate('+deg+'deg)'); 

		},"jsonp"); // end jQuery.get()
	}, 3000);
});
