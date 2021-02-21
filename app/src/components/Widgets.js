import React, {useContext} from 'react';
import { DataContext } from '../contexts/DataContext';


const Widgets = () => {
    const {updates} = useContext(DataContext);
    return (  
        <div>
        {updates &&(
              <div className="MainWidget">
                  <img height="200px" width="200px" src={updates.condition.icon} alt="icon"/>
                  <h1>{updates.temp_c}</h1>
                  <h5>{updates.condition.text}</h5>
              </div>)
        }
        </div>
        );
}

export default Widgets;