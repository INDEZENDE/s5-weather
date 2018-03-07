var proxy = 'https://cors-anywhere.herokuapp.com/';//por el error proxy is not defined
var urlDs = "https://api.darksky.net/forecast/18ec6aa827606a859cfcf55f80be703b/19.2464696,-99.1013497999999/?units=ca&?lang=es";
//https://api.darksky.net/forecast/18ec6aa827606a859cfcf55f80be703b/37.8267,-122.4233



$.ajax({
  url: proxy + urlDs,
}).done(handleResponse).done(paintWeekWeather).fail(handleFailure)

function handleResponse(data) {

  $temperature=document.querySelector("#temperature").textContent=(data.currently.temperature+"°");
  $wind=document.querySelector("#wind").textContent=(data.currently.windSpeed+"m/s");
  $humidity=document.querySelector("#humidity").textContent=(data.currently.humidity+"%");
  $uvIndex=document.querySelector("#uvIndex").textContent=(data.currently.uvIndex);
  $pressure=document.querySelector("#pressure").textContent=(data.currently.pressure+"hPa");
  $('#card2').hide();
  $('#btn-week').click(function(data){
    $('#card2').show();
  });
}



function paintWeekWeather  (data) {
     $('#monday').text((data['daily']['data'][0]['temperatureMin']) + '°' + ' - ' + (data['daily']['data'][0]['temperatureMax']) + '°');
     $('#tuesday').text((data['daily']['data'][1]['temperatureMin']) + '°' + ' - ' + (data['daily']['data'][1]['temperatureMax']) + '°');
     $('#wednesday').text((data['daily']['data'][2]['temperatureMin']) + '°' + ' - ' + (data['daily']['data'][2]['temperatureMax']) + '°');
     $('#thursday').text((data['daily']['data'][3]['temperatureMin']) + '°' + ' - ' + (data['daily']['data'][3]['temperatureMax']) + '°');
     $('#friday').text((data['daily']['data'][4]['temperatureMin']) + '°' + ' - ' + (data['daily']['data'][4]['temperatureMax']) + '°');
     $('#saturday').text((data['daily']['data'][5]['temperatureMin']) + '°' + ' - ' + (data['daily']['data'][5]['temperatureMax']) + '°');
     $('#sunday').text((data['daily']['data'][6]['temperatureMin']) + '°' + ' - ' + (data['daily']['data'][6]['temperatureMax']) + '°');
}

function  handleFailure(){
  console.log("falla");
}
