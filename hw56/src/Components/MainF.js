import React, { useState } from "react";
import getData from "../store/Store";
import MealList from "./MealList";
import MealWithComments from "./MealWithComments";

export const MealContext=React.createContext();

const MainF=()=>{
const [meals, setMeals]=useState(getMealsFromJson());
const [currentMeal, setCurrentMeals]=useState(null)

const changeCurrentMeal=(id)=>{
    const newMeals=[...meals]
    const index=newMeals.findIndex(meal=>meal.idMeal ===id);
    const meal={...newMeals[index]};
    setCurrentMeals(meal);
    }

    const showMeals=()=>{
        setCurrentMeals(null)
    }
    
    const addComment=(id, comment)=>{       
            const newMeals=[...meals]
            const index=newMeals.findIndex(meal=>meal.idMeal ===id);
            const meal={...newMeals[index]};
            const newComments=[...meal.comments];
            newComments.push({...comment, id: Date.now(), note: +comment.note})
            meal.comments=newComments;
            meal.rate=(newComments.reduce((sum, comment)=>sum+=comment.note, 0)/newComments.length).toFixed(2);
            newMeals[index]=meal;
            setMeals(newMeals);
            setCurrentMeals(meal);
    }

    function getMealsFromJson(){
        const meals=JSON.parse(getData()).meals;
        //console.log(meals)
        meals.forEach(el=>{
            el.comments=[];
            el.rate=0;
        })
        //console.log(meals)
        return meals
    }

    return(
        <MealContext.Provider value={{
            changeCurrentMeal : changeCurrentMeal,
            addComment: addComment
        }}>
        <div className='container'>
            {currentMeal ? <MealWithComments meal={currentMeal}
                                                        showMeals={showMeals}/>:
            <MealList meals={meals}/>}    
        </div>
        </MealContext.Provider>
    )

}

export default MainF



