import { GET_ROVER_IMAGE_FAILURE, GET_ROVER_IMAGE_SUCCESS, GET_ROVER_IMAGE_REQUEST } from '../actionType'

const initialState = {
    photos: [],
    error: null
}

const roverReducer = (state = initialState, action) => {
    let nextState

    switch (action.type) {
        case GET_ROVER_IMAGE_SUCCESS:
            nextState = {
                ...state,
                photos: action.payload.photos
            }

            return nextState

        case GET_ROVER_IMAGE_FAILURE:
            nextState = {
                ...state,
                error: action.payload.error
            }

            return nextState

        default:
            return state
    }
}

export default roverReducer