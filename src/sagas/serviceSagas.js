import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS, INVALID_PASSWORD, SAVE_USER } from '../actions/actionTypes'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { _getUserInformation } from './api'

const getUserInformation = function* (action) {
    console.log("FONKSİYONA geldi")
    console.log(action)
    try {
        console.log("try catche geldi")
        const token = yield _getUserInformation(action)
        console.log('sfasfsa')
        console.log(token)
        console.log("result döndü")
        if (token) {
            console.log('burda')
            yield put({ type: INVALID_PASSWORD, payload: false })
            yield put({ type: AUTH_SUCCESS, payload: true })
            yield put({ type: SAVE_USER, payload: token })
        } else {
            yield put({ type: INVALID_PASSWORD, payload: true })
        }
    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: AUTH_FAILURE, payload: message });
    }
}

export function* watchGetUserInformation() {
    yield takeLatest(AUTH_REQUEST, getUserInformation)
    console.log("WatchUsere geldi")
}