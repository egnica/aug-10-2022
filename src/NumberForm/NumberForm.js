import { useState } from "react";

const NumberForm = (props) => {

    const [numberInput, setNumberInput] = useState(0);

    const ClickHandler = () => {
        props.numberTransfer(numberInput);
    }

    return(
        <div>
            <br/>
            <label>Enter number of Inputs: </label>
            <input type='number' onChange = {event => setNumberInput(event.target.value)} value = {numberInput}/>
            <button onClick = {ClickHandler}>Submit</button>
        </div>
    )
}
export default NumberForm;