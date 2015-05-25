need to have the API Key and the request address


my configuration is :

var my_key="512358837ae8b362029ea7b95f9c7";
//set the number of day to keep in json
var no_of_days=2;
// build URI:
var uri="http://api.worldweatheronline.com/free/v2/weather.ashx?q="+my_city+"&key="+my_key+"&format=json&no_of_days="+no_of_days+"&includeLocation=yes";