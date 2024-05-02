import { createContext ,useState } from "react"; //1

export const GlobalContext = createContext(null);
//export context w default value null //2

//3 create global state
function GlobalState({children}){

        const [theme,setTheme] = useState('light');

    return <GlobalContext.Provider value={{theme,setTheme}}> {children}</GlobalContext.Provider>
}
//4 
export default GlobalState;