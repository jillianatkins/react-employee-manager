import React from 'react';

// Has 2 parts: Provider and Consumer
const AuthContext = React.createContext()

const AuthProvider = (props)=>{
    return (
        <AuthContext.Provider value={{role:'admin', uid:null, isUser:false}}>
            
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}

export default AuthContext