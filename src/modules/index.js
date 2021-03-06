import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import counter, { counterSaga } from './counter'
import todos from './todos'
import sample, { sampleSaga } from './sample'
import loading from './loading'

const rootReducer = combineReducers({
    counter,
    todos,
    sample,
    loading
})

export function* rootSaga() {
    yield all([counterSaga(), sampleSaga()])
}

export default rootReducer