import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS, INVALID_PASSWORD, SAVE_USER, EXCHANGE_RATE_REQUEST, EXCHANGE_RATE_SUCCESS } from '../actions/actionTypes'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { _getUserInformation, _getExchangeRates } from './api'

const getUserInformation = function* (action) {
    try {
        const token = yield _getUserInformation(action)
        if (token) {
            yield put({ type: INVALID_PASSWORD, payload: false })
            yield put({ type: AUTH_SUCCESS, payload: true })
            yield put({ type: SAVE_USER, payload: token })
            getExchangeRate;
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
}

const getExchangeRate = function* () {
    try {
        const exchangeRate = yield _getExchangeRates()
        if (exchangeRate) {
            yield put({ type: EXCHANGE_RATE_SUCCESS, payload: exchangeRate })
        }

    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: EXCHANGE_RATE_REQUEST, payload: message });
    }
}

export function* watchGetExchangeRate() {
    yield takeLatest(EXCHANGE_RATE_REQUEST, getExchangeRate)
}