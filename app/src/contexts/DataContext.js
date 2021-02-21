import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [updates, setUpdates] = useState();
    const url = "https://api.weatherapi.com/v1/current.json?key=931701d0de0c4d05b0b34936203011&q=London";

    useEffect(() => {
        axios.get(url)
         .then(res => {
             setUpdates(res.data.current)
         })
         .catch(err => {
             console.log(err)
         })
    })
    console.log(updates);
    return (
        <div>
            <DataContext.Provider value={{updates}}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}


export default DataContextProvider;
