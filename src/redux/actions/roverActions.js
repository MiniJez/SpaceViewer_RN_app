import { GET_ROVER_IMAGE_REQUEST, GET_ROVER_IMAGE_SUCCESS, GET_ROVER_IMAGE_FAILURE } from "../actionType"

export const getRoverImage = (rover, sol, page) => ({
    type: GET_ROVER_IMAGE_REQUEST,
    payload: {
        rover,
        sol,
        page
    }
});

export const getRoverImageSuccess = (photos) => ({
    type: GET_ROVER_IMAGE_SUCCESS,
    payload: {
        photos
    }
});


export const getRoverImageFailure = (error) => ({
    type: GET_ROVER_IMAGE_FAILURE,
    payload: {
        error
    }
});