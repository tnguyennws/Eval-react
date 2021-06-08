//import React from 'react';

var url1 =  "//api.nasa.gov/insight_weather/?api_key=leXxpfCMBTjk5yHkf3QqSUOL7OfPS3smcb2Mx4Gs&feedtype=json&ver=1.0";
var url2 = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0";

/*const App = () => {
    return <div className='App' id='App'></div>
};*/

function fetchAPI(url){
    fetch(url).then(function(response) {
      console.log(response);
        return response.json();
    });
}

var json1 = fetchAPI(url1);
var json2 = fetchAPI(url2);

/*ReactDOM.render(
  element1,
  document.getElementById('test1')
);

ReactDOM.render(
  element2,
  document.getElementById('test2')
);*/
