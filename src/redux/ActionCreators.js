import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            const error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMsg = new Error(error.message);
        throw errMsg;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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

export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                const error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMsg = new Error(error.message);
            throw errMsg;
        })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errMsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMsg 
});


export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS, 
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true)); 

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                const error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMsg = new Error(error.message);
            throw errMsg;
        })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errMsg) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMsg
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS, 
    payload: promos
});