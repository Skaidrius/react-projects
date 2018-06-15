import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>
        Hobbies: {props.hobbies.join(", ")}
      </h4>
    </li>
  );
};

InstructorItem.PropTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(()=> {
      const randomInstrNo = Math.floor(
        Math.random() * 
        this.state.instructors.length
      );
      const randomHobby = Math.floor(
        Math.random() * 
        this.state.instructors[randomInstrNo].length
      );
      const instructors = this.state.instructors.map((instr, i) => {
        if (i === randomInstrNo) {
          const hobbies = [...instr.hobbies];
          hobbies.splice(randomHobby, 1);
          return {
            ...instr,
            hobbies
          };
        }
        
        return instr;
      });
      // const instructors = this.state.instructors.slice();
      // instructors[randomInstrNo] = Object.assign({}, instructors[randomInstrNo]);
      // instructors[randomInstrNo].hobbies = instructors[randomInstrNo].hobbies.slice();
      // instructors[randomInstrNo].hobbies.splice(randomHobby, 1);
      this.setState({instructors});
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem 
        key={index}
        name={instructor.name}
        hobbies = {instructor.hobbies}
      />
    ));
    return (
      <div className="App">
        <h4>After 5 secs 1 of instructors hobby will randomly dissapear</h4>
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;