import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { getRoverImageEpic } from './epics/roverEpic'
import roverReducer from './reducers/roverReducer'

const rootEpic = combineEpics(getRoverImageEpic);

const rootReducer = combineReducers({
    rover: roverReducer
})

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;