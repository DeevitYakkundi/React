import { useContext } from "react"
import { GlobalContext } from "."

function UseContextHook(){

        const getContextValue = useContext(GlobalContext);
        console.log(getContextValue);

    return(
        <div>
            <h1>Use Context</h1>
            <button>Change Theme</button>
        </div>
    )
}
export default UseContextHook;