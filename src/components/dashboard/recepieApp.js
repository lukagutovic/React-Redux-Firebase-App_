import React, { useState, useEffect} from 'react';
import CreateRecipes from '../projects/CreateRecipes';


const RecepieApp = () => {
    const APP_ID = "b6cf2a44";
    const APP_KEY = "e9fb7288b1711a3c1ae245230172f7bf";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState(""); 
    const [query, setQuery] = useState('chicken');


     useEffect( () => {
        getRecipes();
    },[query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }


    return(
        <div className="RecepieApp">
                <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                    <button className="search-button" type="submit">
                        Search...
                    </button>
                </form>
                <div className="recipes">
                {recipes.map(recipe =>(
                    <CreateRecipes 
                    key = {recipe.recipe.label}
                    label = {recipe.recipe.label}
                    calories = {recipe.recipe.calories}
                    image = {recipe.recipe.image}
                    ingredients = {recipe.recipe.ingredients}
                    />
                ))}
                </div>
            
        </div>
    )
}

export default RecepieApp;