import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

const App = () =>{

  const [data, setData] = useState({
    city:'',
    country:'',
    error:false
  });
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState({});

  
  const {city, country, error} = data;

  useEffect(() => {
    const fetchApi = async () => {

      if(fetching){
        const appId = 'b27651485ea5c20cf3633dafbdfb9aa6';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
        const resp = await fetch(url);
        const result = await resp.json();
        setResult(result);
        setFetching(false);

        if(result.cod === '404'){
          setData({error:true})
        }else{
          setData({error:false})
        }
      }
     
    }
    fetchApi();

    //eslint-disable-next-line
  }, [fetching]);


  let component;

  if(error){
    component= <Error message='No Results found'/>
  }else{
    component= <Weather 
                  result={result}
                />
  }

  

  return(
    <>
      <Header 
        title='React Weather App'
      />

      <div className="formContainer">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                data={data}
                setData={setData}
                setFetching={setFetching}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;