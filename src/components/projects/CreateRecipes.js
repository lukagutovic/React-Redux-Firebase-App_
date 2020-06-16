import React from 'react';
import style from './recipe.module.css';

const CreateRecipes  = ({label, calories, image, ingredients}) => {
  
        return (
            <div className={style.recipe}>
                <h1>{label}</h1>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                    
                </ol>
                <p>{calories} kcal</p>
                <img className={style.image} src={image} alt="" />
            </div>
          );
    
}
 
export default CreateRecipes;