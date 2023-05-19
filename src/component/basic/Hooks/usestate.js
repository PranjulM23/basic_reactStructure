import React, { useState } from 'react'

function Usestate() {
    const [menudata, setdata] = useState(0)
    return (
        <>
            <div className="dd">
            <div className="item">{menudata}</div>
                <div className="btn">
                    <button onClick={()=>setdata(menudata+1)}>Incr</button>
                    <button onClick={()=> menudata > 0? setdata(menudata-1):setdata(0)}>Decr</button>
                </div>  
            </div>
        </>
    )
}

export default Usestate