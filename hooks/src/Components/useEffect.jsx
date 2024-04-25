import React,{useState, useEffect} from "react";

export function UseEffect(){
    const [initialCount,setCount] = useState(0);
    const [showText,setShowText] = useState(false);
    const [productList,setProductList] = useState([]);
    const [showText2, setShowText2] = useState(false);
    

    function handleClick(){
        setCount(initialCount => initialCount + 1);
    }
    function handleClick2(){
        setProductList([]);
    }
    async function fetchAllProducts (){
        try{
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();
            if(result && result.products){
                setProductList(result.products);
            }
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        if(initialCount === 5){
            setShowText(true);
        }
        if(initialCount === 10){
        fetchAllProducts();};
        if(initialCount === 7){
            setShowText2(true);
        }
    },[initialCount])
    
    return (
        <div>
            <div>
                <p>Execution of different processes. Click the Below button 5 times.</p>
                <b>Click Count: {initialCount}</b> <br />
            </div> <br />
            <button onClick={handleClick}>Click Me</button>
            {/* //2 */}
            <div>
                {
                    showText ? (
                      <div>
                        <p><i>(This text is rendered as an effect of processing the button 5 times.)</i></p>
                        <b>Now click the button 5 more times until count 10.</b>
                      </div>
                    ) : null
                }
                <div>
                    {
                        showText2 ? (
                        <div>
                            <h3>(Product list)</h3>
                            <i>(This list is fetched from a dummyJSON website)</i>
                        </ div>
                    ) : null
                    }
                    <ul>
                        {productList && productList.slice(0,10).map((item) => 
                            <li>
                                <b>Product Name:</b> {item.title},<b> Description: </b>{item.description} 
                            </li>)}
                    </ul>
                    {
                        productList.length>0?(
                        <button onClick={handleClick2}>Close List</button>):null
                    }
                </div>
            </div> 
        </div>
    )
}