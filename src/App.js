import  React from 'react' 
import LastName from './LastName'
function App(props) {
  return (
    <div>
    <h1>Hello from Wahhaj {props.lastName}</h1>
     <LastName data = "Nisar"/>
     </div>
    );
}

export default App;
