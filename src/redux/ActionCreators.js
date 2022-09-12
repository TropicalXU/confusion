import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/Dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//fetchDishes(is a thunk) function returns dispatch function used by redux thunk
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true)); //returns a function(dishesLoading)as true

    setTimeout(() => {
        dispatch(addDishes(DISHES)); //dispatch returns a function returning all dishes into state of our store
    }, 2000);
}

//dishesLoading - func returns an action(ActionTypes.DISHES_LOADING)
//will inform that dishes will be loaded
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

//dishesFailed func takes errMsg as a param - func that will return an action object
export const dishesFailed = (errMsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMsg //errMsg returns a payload that will return a string when passed in
});

//addDishes - func that returns an action - returns dishes as a func
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES, // addDishes takes DISHES^ as a param - creates acting of the type ADD_DISHES
    payload: dishes //passes dishes^ as the payload
});

//these 3 different Action.Types are going to effect only the 
//-dishes part of the state
//-that action should all be in (redux)dishes.js file