import NumberForm from './NumberForm/NumberForm';
import './App.css';
import { useState } from 'react';
let numArray = [];
function App() {
  const [setNumber, setSetNumber] = useState('')
  const [create, setCreate] = useState({ item: [] })



const NumberHandler = (value) =>{
  setSetNumber(value);
}

const clickHandler = (event) => {
  event.preventDefault();
  console.log(create);

}

const inputEvent = [];

  for (let x = 0; x < setNumber; x++) {
    numArray.push(x)
    inputEvent.push(<p key = {x}>{x+1}: <input onChange = {event => setCreate({item: event.target.value}) }/></p>);
  }
  return (
    <div className="App">

      <NumberForm numberTransfer = {NumberHandler}/>
      <br/>
     <div>
       <form onSubmit = {clickHandler}>
         {inputEvent}
         { setNumber !=='' && 
            <button>Submit</button>
         }
        
       </form>
     
     </div>
    </div>
  );
}

export default App;
