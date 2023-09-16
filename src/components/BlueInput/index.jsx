import { useDispatch } from "react-redux";
import { TEST_SET_DATA } from "../../reducers/types";
import { useState } from "react";


function BlueInput(){
    const [fromInput, setFromInput] = useState('');
    const getInputValue = (ev) => {
        setFromInput(ev.target.value);
    }
    const dispatch = useDispatch();
    const sendTestData = () =>{
        
        const action = {
            type: TEST_SET_DATA,
            payload: {data: fromInput}
        };
        dispatch(action);
    };

    return (
        <div>
            <p>Ziben</p>
            <input type="text" name="inputText" onChange={getInputValue}/>
            <br/><button onClick={sendTestData}>Send!</button>
        </div>
    );
};

export default BlueInput;