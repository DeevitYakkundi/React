import React,{useState, useEffect} from "react";

export function UseEffect(){
    const [initialCount,setCount] = useState(0);
    const [showText,setShowText] = useState(false); //1


    function handleClick(){
        setCount(initialCount => initialCount + 1);
    }
    useEffect(()=> {
        if(initialCount === 5){
            setShowText(true);
        }
    },[initialCount]);

    // useEffect(()=> {

    // },[])

    async function fetchData(){
        try{

        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <p>Execution of different processes. Click the Below button 5 times.</p>
                <b>Click Count: {initialCount}</b> <br />
            </div> <br />
            <button onClick={handleClick}>Click Me</button>
            {/* //2 */}
            <div>
                { showText ?
                    <p><i>(This text is rendered as a effect of precessing the button 5 times.)</i></p>
                : null}
            </div>
            

        </div>
    )
}