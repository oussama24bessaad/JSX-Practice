// import logo from './logo.svg';
import './App.css';
import './style.css';
import React , {Component} from 'react';

class App extends Component{
  render() {
  return (
  
    <div className="App">
      <header className="App-header">
      <div style={{border : 'solid 1px black', maxWidth:'100vw'}} >

<h1 className="title_red">Oussama</h1>

<br />

<img src="media/ess.svg.png" width={100} height={100} alt='ESS'/>

<br />

<img src="media/tun.svg.png" width={100} height={100} alt='ESS' />

</div>

<video width="320" height="240" loop muted autoPlay controls = ''>

<source src="media/ess.mp4" type="video/mp4"/>

</video>
      </header>
    </div>
    
  );
}}

export default App;
