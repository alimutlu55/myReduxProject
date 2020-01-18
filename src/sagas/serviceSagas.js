import { AUTH_REQUEST } from '../actions/actionTypes'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { _getUserInformation } from './api'

const getUserInformation = function* (action) {
    console.log("FONKSİYONA geldi")
    console.log(action)
    try {
        console.log("try catche geldi")
        const token = yield _getUserInformation(action)
        console.log(token)
        console.log("result döndü")
        if (token === true) {
            console.log('burda')
            yield put({ type: AUTH_SUCCESS, payload: token })
        }
    } catch (error) {
        console.log("errora düştü")
    }
}

export function* watchGetUserInformation() {
    yield takeLatest(AUTH_REQUEST, getUserInformation)
    console.log("WatchUsere geldi")
}