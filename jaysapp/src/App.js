
import './App.css';
import facebook from './facebook.png';
import apppic from './apppic.png';

function moreInfo() {
  return window.alert('This function rocks')
}
function App (){
  return(
  <div className="App"> 
      <h1>Creating with React</h1>
        <p>Creating Apps and Dapps is fun!</p>
        
        
         <img src={apppic} className='app-logo' alt="pic"/>
         <br/>
         <br/>
         <button onClick={moreInfo} className="button" >More Info</button>
         <br/>
         <br/>
      <div className="footer">
          <h1 className="footerTitle" >Social Links</h1>
          <a  target="blank" href ="https://www.facebook.com/"><img src={facebook} className='git-logo' alt="pic"/></a>          
      </div>
  </div>)
      
  }


export default App;
