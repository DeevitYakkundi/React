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
                Click Count: {initialCount} <br />
            </div>
            <button onClick={handleClick}>Click Me</button>
            {/* //2 */}
            <div>
                { showText ?
                    <p>This text is rendered as a effect of precessing the button 5 times.</p>
                : null}
            </div>
            <p>
                    The process of calling an API
                    <ol>
                        <li>Create a async functional method component
                            <p>Which returns proimse.</p>
                            <p>try & catch method is used to access them.</p>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>

                    </ol>
            </p>

        </div>
    )
}