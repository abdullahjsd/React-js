import Navbar from './components/Navbar';
import User from './components/user';



import './App.css';

function App() {
    
  return (
    <div className="App container mt-4">
      <Navbar title=" Navbar app"/>
      <hr/>
      <User
      ad = " Abdullah"
      soyad =" SAZAN"
      maaş= " 5000"
      />
      <hr/>
      <User
      ad = " hasan"
      soyad =" SAZAN"
      maaş= " 5000"
      
      />
    
     
    





   
    </div>
  );
}

export default App;
