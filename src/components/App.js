import React from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {

  return (
    <div id="main">
      <div>
        {/* add input elememnts inside here */}
        <input id ="contentInput">hello world</input>
        <input type ="number" id="fontSizeInput" value="10"></input>
        <input type ="number" id="paddingInput" value="5"></input>
      </div>
 
 {/* render Preview component here */}
      <Preview />
    </div>
  )
}


export default App;
