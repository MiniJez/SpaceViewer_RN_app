import { GET_ROVER_IMAGE_REQUEST, GET_ROVER_IMAGE_SUCCESS, GET_ROVER_IMAGE_FAILURE } from "../actionType"

export const getRoverImage = (rover, date, camera, page) => ({
    type: GET_ROVER_IMAGE_REQUEST,
    payload: {
        rover,
        date,
        camera,
        page
    }
});

export const getRoverImageSuccess = (image) => ({
    type: GET_ROVER_IMAGE_SUCCESS,
    payload: {
        image
    }
});


export const getRoverImageFailure = (error) => ({
    type: GET_ROVER_IMAGE_FAILURE,
    payload: {
        error
    }
});