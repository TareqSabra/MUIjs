import React,{useState,useEffect,createContext} from 'react';

export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
   
     const[isLight,setisLight]=useState(true)
    
     const[themeValue,SetthemeValue] = useState({
        Darksrc:"Dark Mode",
        Lightsrc:"Light Mode",});
        useEffect(()=>{
            localStorage.setItem("theme",JSON.stringify(isLight))
        },[isLight])       
        const toggelTheme =()=>{
            setisLight(!isLight);
        }
 
    return ( 
        <ThemeContext.Provider value={{themeValue,isLight,SetthemeValue,setisLight,toggelTheme}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;
