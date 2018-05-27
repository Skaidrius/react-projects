import React, {Component} from 'react';

class MeaningsList extends Component{
    render(){
        const meanings = ['Infinite life', "Rebirth", 'Youth'];
        const style = { fontSize: '1.5em' };
        return(                    
            <ul>
                {meanings.map((h, i)=> {
                    return <li key = {i} style={style}>{h}</li>;
                })}
            </ul>
        );
    }
}

export default MeaningsList;