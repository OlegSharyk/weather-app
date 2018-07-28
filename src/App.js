import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

import "./App.css"

const API_KEY = 'f1f1997d03a81e7003f2bae80482bf7d';


class App extends React.Component {
  // constructor(){
  //   this.getWeather = this.getWeather.bind(this)
  // }

  // !!!depricated in react 16!!!!
  // constructor(props){
  //   super(props){
  //     this.state = {

  //     }
  //   }
  // }

  state = {
    temperature: undefined,
    city: '',
    country: '',
    himidity: undefined,
    description:'',
    error: ''
  }

  componentDidMount(){
    console.log('get coords')
    this.getMyLocation();
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation
    
    if (location) {
      location.getCurrentPosition((position) => {
        console.log(position)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

  
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
        city: '',
        country: '',
        himidity: undefined,
        description:'',
        error: 'Please entry the value.'
      })
    }   
  }
  
  render(){

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles/>
                </div>

                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature = {this.state.temperature} 
                    city = {this.state.city} 
                    country = {this.state.country} 
                    humidity = {this.state.humidity} 
                    description = {this.state.description} 
                    error = {this.state.error}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}

export default App;

