import { ActionTypes } from "../../actions/action-types"

const initialState = {
    movies : [
        {
            name : 'hello world'
        }
    ],
    movie : {}
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.FETCH_MOVIES : return {
            ...state,
            movies : payload
        }

        case ActionTypes.SELECTED_MOVIES : return {
            ...state,
            movie : payload
        }

        default : return state
    }
}