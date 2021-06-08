import React from 'react';

const App = () => {
    return <div className='App' id='App'></div>
};

class BlocJour extends React.Component {
    render() {
      return <h1>Bonjour, {this.props.name}</h1>;
    }
  }

function APINasa(){

    var url1 =  "//api.nasa.gov/insight_weather/?api_key=leXxpfCMBTjk5yHkf3QqSUOL7OfPS3smcb2Mx4Gs&feedtype=json&ver=1.0";
    var url2 = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0";
    fetch(url1).then(function(response) {
        return response.json();
    });
    document.getElementById('App') = "test";
}

APINasa();

export default App;

