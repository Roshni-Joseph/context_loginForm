import React, {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [username,setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            setIsLoggedIn(true);
        } else {
            alert("Please enter a username!");
        }
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
      };

    return (
        <AuthContext.Provider value={{ username, setUsername, handleSubmit, isLoggedIn, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}