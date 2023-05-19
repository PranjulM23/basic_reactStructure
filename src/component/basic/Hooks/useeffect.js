import React, {useState, useEffect} from 'react'

function Useeffect() {
    const [menudata, setdata] = useState(0)
    useEffect(() => {
        document.title = `Chat ${menudata}`
    },)
    
    return (
        <>
            <div className="dd">
            <div className="item">{menudata}</div>
                <div className="btn">
                    <button onClick={()=>(menudata+1)}>Incr</button>
                    <button onClick={()=> menudata > 0? setdata(menudata-1):setdata(0)}>Decr</button>
                </div>  
            </div>
        </>
    )
}

export default Useeffect