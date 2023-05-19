import React, { useReducer} from 'react'

const reducer =(state , action)=>{
    if (action.type === "INCR") {
        state++;
    }
    if (state > 0 && action.type === "DECR") {
        state--;
    }
    return state;
}
function Usereducer() {
    const [state, dispatch] = useReducer(reducer , 0);
    return (
        <>
            <div className="dd">
            <div className="item">{state}</div>
                <div className="btn">
                    <button onClick={()=>dispatch({type: "INCR"})}>Incr</button>
                    <button onClick={()=>dispatch({type:"DECR"})}>Decr</button>
                </div>  
            </div>
        </>
    )
}

export default Usereducer