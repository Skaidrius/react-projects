import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
          {
            title: "Pasta", 
            ingredients: ['Flour', 'Water'], 
            instructions: "Mix ingredients", 
            img: './spaghetti.jpg'
          }, 
          {
            title: "Ice cream", 
            ingredients: ['Milk', 'Sugar', 'Cacao'], 
            instructions: "Mix ingredients and leave cold", 
            img: './icecream.jpeg'
          },           {
            title: "Pancakes", 
            ingredients: ['Milk', 'Sugar', 'Flour'], 
            instructions: "Mix ingredients and bake", 
            img: './pancakes.jpeg'
          }
        ]
    }
    
    static PropTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const recipes = this.props.recipes.map((r, index)=>(
            <Recipe key={index}{...r} />
        ));
    
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;