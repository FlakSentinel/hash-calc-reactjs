import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
import SHA1 from './pages/SHA1'
import SHA256 from './pages/SHA256';
import MD5 from './pages/MD5';
import SHA512 from './pages/SHA512';


class App extends React.Component {

render(){
  
  return (
    <Router>
      <>
        <h1>Hashing Calculator</h1>
        <i>Enter text to be converted into a hash value.</i>
        <h2>Select hashing function:</h2>
        <ul>
          <li><Link to='/sha1'>SHA-1</Link></li>
          <li><Link to='/sha256'>SHA-256</Link></li>
          <li><Link to='/sha512'>SHA-512</Link></li>
          <li><Link to='/md5'>MD5</Link></li>
        </ul>
        <Routes>
        <Route path='/sha1' element={<SHA1/>}/>
        <Route path='/sha256' element={<SHA256/>}/>
        <Route path='/sha512' element={<SHA512/>}/>
        <Route path='/md5' element={<MD5/>}/>
        </Routes>
      </>
    </Router>
  );
}
}

export default App;
