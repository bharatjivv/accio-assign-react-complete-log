import React, { createContext } from 'react'

export const UserData = createContext();

const UserDataContext = ({ children }) => {
    const data = {
        name: "John",
        age: 25
    };

    return <UserData.Provider value={{data}}>
        {children}
    </UserData.Provider>
}

export default UserDataContext;