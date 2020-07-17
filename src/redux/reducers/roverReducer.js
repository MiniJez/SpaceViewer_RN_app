import { GET_ROVER_IMAGE_FAILURE, GET_ROVER_IMAGE_SUCCESS } from '../actionType'

const initialState = {
    image: null,
    error: null
}

const roverReducer = (state = initialState, action) => {
    let nextState

    switch (action.type) {
        case GET_ROVER_IMAGE_SUCCESS:
            nextState = {
                ...state,
                image: action.payload.image
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