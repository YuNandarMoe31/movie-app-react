import { ActionTypes } from "../action-types"

export const fetchMovies = (movies) => {
    return {
        type : ActionTypes.FETCH_MOVIES,
        payload : movies
    }
}

export const selectedMovies = (movie) => {
    return {
        type : ActionTypes.SELECTED_MOVIES,
        payload : movie
    }
}