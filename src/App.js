import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form"; 
import Weather from "./components/Weather";

const API_KEY = "EmBIohasipfAmTyNLcU9MvvLtzn1";

class App extends React.Component {
  state = {
    description: undefined,
    batting: undefined,
    playing: undefined,
    matches: undefined,
    runs: undefined,
    error: undefined
  }
  getStats = async (e) => {
    e.preventDefault();
   // const city = e.target.elements.city.value;
    const name = e.target.elements.name.value;
    const api_call = await fetch(`https://cricapi.com/api/playerFinder?apikey=${API_KEY}&name=${name}`);
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    const data = await api_call.json();
    const api_call_b = await fetch(`https://cricapi.com/api/playerStats?apikey=${API_KEY}&pid=${data.data[0].pid}`);
    const datab = await api_call_b.json();
    if (name) {
      this.setState({
        description: datab.profile,
        batting: datab.battingStyle,
        playing: datab.playingRole,
        matches: +datab.data.batting.ODIs.Mat +  +datab.data.batting.T20Is.Mat +  +datab.data.batting.tests.Mat ,
        runs: +datab.data.batting.ODIs.Runs +  +datab.data.batting.T20Is.Runs +  +datab.data.batting.tests.Runs,
        error: ""
      });
    } else {
      this.setState({
        description: undefined,
        batting: undefined,
        playing: undefined,
        matches: undefined,
        runs: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getStats={this.getStats} />
                  <Weather 
                    description={this.state.description} 
                    batting={this.state.batting}
                    playing={this.state.playing}
                    matches={this.state.matches}
                    runs={this.state.runs}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;