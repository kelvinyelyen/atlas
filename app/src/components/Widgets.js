import React, {useContext} from 'react';
import { DataContext } from '../contexts/DataContext';


const Widgets = () => {
    const {updates} = useContext(DataContext);
    return (
        {
            updates && () => {
            const {condition, temp_c, temp_f} = updates;
            return (
                <div className="MainWidget">
                    <h1>{temp_c}</h1>
                    <div>{condition}</div>
                </div>
            )
            }  
        }

    );
}

export default Widgets;