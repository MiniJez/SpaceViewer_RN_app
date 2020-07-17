import { switchMap, map, catchError, tap } from 'rxjs/operators'
import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import AsyncStorage from '@react-native-community/async-storage'
const axios = require('axios').default;
import { GET_ROVER_IMAGE_REQUEST } from "../actionType";
import { getRoverImageSuccess, getRoverImageFailure } from '../actions/roverActions'
import { NASA_API_KEY } from '../../env'

export const getRoverImageEpic = (action$, state$) => action$.pipe(
    ofType(GET_ROVER_IMAGE_REQUEST),
    switchMap(({rover, date, camera, page}) => {
        console.log(rover, date, camera, page)
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&page=${page}&api_key=${NASA_API_KEY}`
        return from(axios.get(url)).pipe(
            // tap(res => {
            //     AsyncStorage.getItem('schedule').then(
            //         (response) => {
            //             let schedule = JSON.parse(response)
            //             if(schedule == null) schedule = {}
            //             let weekNum = getWeekNumber(new Date(date))
            //             schedule[weekNum] = res.data
            //             AsyncStorage.setItem('schedule', JSON.stringify(schedule))
            //         }
            //     )
            // }),
            map(res => getRoverImageSuccess(res.data)),
            catchError(error => of(getRoverImageFailure(error)))
        )
    })
)