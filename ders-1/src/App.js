import Navbar from './components/Navbar';
import User from './components/user';


import './App.css';

function App() {

  return (
    <div className="App">
      
    <div className="container mt-4">
      <Navbar title="user app"/>
      <hr/>

      <User
      name = "Abdullah"
      salary="5000"
      department ="bilişim"
      
      />
        <User
      name = "hazel"
      salary="5000"
      department ="bilişim"
      
      />
    </div>
    





   
    </div>
  );
}

export default App;
