'use strict';

function weatherLookup(){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var apiKey = '76620e8e37430cfee35ba39ff6116591';
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var httpRequest; // global variable to call information from Open Weather Map
    makeRequest();

    // create and send an XHR request
    function makeRequest() {
        httpRequest = new XMLHttpRequest(); // instantiating JS object
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + city + ',' + state + '&appid=' + apiKey); // create unique URL with API key
        httpRequest.send();
    }

    // handle XHR response
    function responseMethod() {
        if (httpRequest.readyState === 4) {
            console.log(httpRequest.responseText); // this is the response from the server with the JSON string
            if (httpRequest.status === 200) {
                updateUISuccess(httpRequest.responseText); // if successful response from server for data, run this function to parse JSON string
            } else {
                updateUIError();
            }
        }
    }

    // handle XHR success
    function updateUISuccess(responseText){
        var response = JSON.parse(httpRequest.responseText);
        var condition = response.weather[0].main;
        var degC = response.main.temp - 273.15;
        var degCInt = Math.floor(degC);
        var degF = degC * 1.8 + 32;
        var degFInt = Math.floor(degF);
        var weatherBox = document.getElementById('weather');
        weatherBox.innerHTML = "<div>" + degCInt + "&#176; C / " + degFInt + "&#176; F</div><div>" + condition + "</div>";
    }

    // handle XHR failure
    function updateUIError() {
        var weatherBox = document.getElementById('weather');
        weatherBox.className = 'hidden';
    }
};