import * as ActionTypes from './ActionTypes';

//3 different actions need to be interpreted by the reducer func
export const Dishes = (state = {//state takes 3 different parameters
    isLoading: true, //set to true initially as dishes is an empty array - need to load dishes until dishes become available
    errMsg: null,// if not error occurs - DISHES_FAILED action will be called
    dishes: []// dishes initally set to empty array - if dishes load - then that info will be passed through using ADD_DISHES action
}, action) => {
    switch(action.type) { //can switch between action types
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMsg: null, dishes: action.payload };//return current value of state & return the new state
            //(returns action.payload which is set to dishes in ActionCreators.js file)

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMsg: null, dishes: [] };

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, dishes: [] };

        default:
            return state;
    }
}