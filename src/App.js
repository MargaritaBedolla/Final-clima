import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getAuth, signInAnonymously} from 'firebase/auth';
import {getToken, onMessage} from "firebase/messaging";
import {messaging} from "./firebase";
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';

function App() {
  const login = ()=>{
    signInAnonymously(getAuth()).then(usuario=> console.log
      (usuario));
  }

  //NUEVO METODO

  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = async () => {
    const cities = ['Mexicali', 'Hermosillo', 'Culiacan', 'Mexicali', 'Sonora'];
    const apiKey = '583bbfe23e0ea8f6d4b9d7f2c8efa77d'; 
    const units = 'metric';
    const promises = cities.map(async city => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
      const data = await response.json();
      return data;
    });
    const data = await Promise.all(promises);
    setWeatherData (data);
  };

  const WeatherBox = ({ data }) => (
    <div className="text-center">
      <div className="card" style={{"width" : "18rem"}}>
        <img className="card-img-top p-2 mx-auto" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" style={{float : 'left', paddingRight : '10px'}} alt="Title"/>
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
          <p>{data.main.temp} °C</p>
          <br></br>
      </div>
    </div>
    
  );

  const weatherBoxes = weatherData.map((data, index) => <WeatherBox key={index} data={data} />);

  const activarMensajes = async ()=>{
    const token = await getToken(messaging, {
      vapidKey:"BCiaLQ7emLIRMJWXa-WvwtIsG4HeHC7aX7AufvuKB_eLWxZzNOsFI61CHJUCnOgNNIGBtIXKOMyN7yayx0t0MHI"
    }).catch(error => console.log("error al generar el token paps"));

    if(token) console.log("Este es tu token: "+ token);
    if(!token) console.log("No tienes token paps")
  }

  React.useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("Tu mensaje: ", message);
      toast(message.notification.title);
    })

  }, []);
  
  return (
    <div>
      {/* <h1>Hola mundo limon </h1>
      <ToastContainer/>
      <button onClick={login
      }>Logearse</button>
      <button onClick={
        activarMensajes
      }>Generar token</button> */}

<head>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
    <title>App Clima</title>

</head>
<body>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <a className="navbar-brand" href="#">Mi App De Clima</a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            
            <button onClick={login}>Logearse</button>

            <button onClick={activarMensajes}>Generar token</button>
            
        </div>
        
    </nav>

    <div className="p-2 mb-4 bg-light rounded-3">
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 p-2">
                                <div className="card text-start">
                                  <img className="card-img-top mx-auto p-2" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" style={{width: "50%"}} alt="Title"/>
                                  <div className="card-body">
                                    <h4 className="card-title text-center">Cuidad 1</h4>
                                    <p className="card-text text-center">Parametros</p>
                                  </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card text-start">
                                  <img className="card-img-top mx-auto p-2" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" style={{width: "50%"}} alt="Title" />
                                  <div className="card-body">
                                    <h4 className="card-title text-center">Cuidad 2</h4>
                                    <p className="card-text text-center">Parametros</p>
                                  </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card text-start">
                                  <img className="card-img-top mx-auto p-2" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" style={{width: "50%"}} alt="Title"/>
                                  <div className="card-body">
                                    <h4 className="card-title text-center">Cuidad 3</h4>
                                    <p className="card-text text-center">Parametros</p>
                                  </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card text-start">
                                  <img className="card-img-top mx-auto p-2" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" style={{width: "50%"}} alt="Title"/>
                                  <div className="card-body">
                                    <h4 className="card-title text-center">Cuidad 4</h4>
                                    <p className="card-text text-center">Parametros</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <img className="card-img-top p-2 mx-auto" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" style={{width: "50%"}} alt="Title"/>
                        <div className="card-body">
                            <h4 className="card-title text-center">Cuidad 5</h4>
                            <p className="card-text text-center">Parametros</p>
                        </div>
                    </div>
                    <br/>
                    <a type="button" className="btn btn-primary d-block mx-auto ">Obtener Diferentes</a>
                </div>


              //botoon 
                <div>
                    <button onClick={getWeatherData} type="button" className="btn btn-primary d-block mx-auto">Obtener Climas</button>
                    {weatherBoxes}
                  </div>

            
            </div>

    </div>
    </div>

</body>

    </div>
  );
}

// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

isPushNotificationSupported()

export default App;