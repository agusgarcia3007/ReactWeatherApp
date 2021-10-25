import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {

    const {name, main, weather} = result;

    if(!name){return null;}

    //kelvin temperature
    const kelvin = 273.15;

    const icon =  `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{name} Forecast:</h2>
                <p className='icon'>
                    {weather[0].description} <span><img src={icon} alt='icon'/></span>
                </p>
                <p className="temperature">
                    {Math.round(main.temp - kelvin).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>
                    Min: {Math.round(main.temp_min - kelvin).toFixed(2)} <span> &#x2103; </span> - Max: {Math.round(main.temp_max - kelvin).toFixed(2)} <span> &#x2103; </span>
                </p>
                
            </div>
        </div>
     );
}

Weather.propTypes={
    result:PropTypes.object.isRequired
}
 
export default Weather;