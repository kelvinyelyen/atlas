import React, {useContext} from 'react';
import { DataContext } from '../contexts/DataContext';


const Widgets = () => {
    const {updates} = useContext(DataContext);
    return (
        <div className="MainWidget">
            <p>{updates.current}</p>
        </div>
    );
}

export default Widgets;