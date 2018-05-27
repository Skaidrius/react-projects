import React, {Component} from 'react';
import MeaningsList from './MeaningsList';
import './Cross.css';

class Cross extends Component {
    render() {
        return (<div className="card">
                    <h2 className="name">Ancient Cross Ankh - the Symbol of infinite life</h2>
                    <img style={{ width: "500px;"}}
                            src="../images/eye-of-ra-ankh-ojo-de-ra-ankh.jpg" 
                            alt="Cross Ankh" />
                    <h5 style={{fontSize: "2em", margin: "2px"}}>Meanings</h5>
                    < MeaningsList />
                </div>
        );
    }
}

export default Cross;