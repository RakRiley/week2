import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.components';
import Footer from './Components/Footer.components';
import Calculator from './Components/Calculator.components';
import { BrowserRouter,Switch,Route,NavLink,Rediect} from 'react-router-dom';
import { Home,BasicRouting,Blocking,Miss,NoMatch,QueryParams,Recursive,Login,ProtectedPage } from './Components';
import fakeAuth from './Auth';

class App extends Component {
  constructor(){
    super();
    this.state= {name : "Rak Riley",age : 22};
  }
  getVal(){
    return "getVal";
  }
  onClick(){
    this.setState({name :"Man"});
  }
  setage(e){
    const age = e.target.value;
    this.setState({age : age});
  }
  render() {
    const myname = 'KiTTIN';
   
    
   
    return (
      <div>
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <ul>
          <li><NavLink to="/"activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/BasicRouting"activeClassName="active">BasicRouting</NavLink></li>
          <li><NavLink to="/Blocking"activeClassName="active">Blocking</NavLink></li>
          <li><NavLink to="/Miss"activeClassName="active">Miss</NavLink></li>
          <li><NavLink to="/NoMatch"activeClassName="active">NoMatch</NavLink></li>
          <li><NavLink to="/QueryParams"activeClassName="active">QueryParams</NavLink></li>
          <li><NavLink to="/Recursive"activeClassName="active">Recursive</NavLink></li>
          <li><NavLink to = "/ProtectedPage" activeclassName="active">ProtectedPage</NavLink></li>
          </ul>  

        <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/BasicRouting" component={BasicRouting}/>
        <Route path="/Blocking" component={Blocking}/>
        <Route path="/Miss" component={Miss}/>
        <Route path="/QueryParams" component={QueryParams}/>
        <Route path="/Recursive" component={Recursive}/>
        <Route path="/Login" component={ Login } />
        <Route path="/ProtectedPage" component={ ProtectedPage } />

        <Route path="/NoMatch" component={NoMatch}/>
        </Switch>

        
   
    {/*
        <p>CMD</p>
        <div>ajjggh </div>
     
      <div>
        
      </div>
        <div>hello {myname}</div>
        <div> calculate 3 + 2 = {3+2}. </div>
        <div>call function {(()=> {return 1234})()}</div>
        <div>call getVal method:{this.getVal()}</div>
        <div>age : {this.age} </div>
    
        <Footer />
        <div>myname is {this.state.name}</div>
        <div>age:{this.state.age}</div>
        <button onClick={this.onClick.bind(this)}> Click mj</button>
        <input onChange={this.setage.bind(this)}/>
        <Header title="Test title มาแล้ว" name="Deer"/>
        <Header title={this.state.name}/>
        <Calculator/>
        */}
        </div>     
          
        </BrowserRouter>
        
        </div>
    );
  }
}

export default App;
