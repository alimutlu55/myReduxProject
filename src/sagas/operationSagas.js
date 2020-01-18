import { INVESTMENT, WITHDRAW, SHOW_ACTIVITIES, SAVE_USER, EXCHANGE_RATE } from '../actions/actionTypes'

import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export function* sayHello() {
    console.log('Hello saga')
}

function* investment() {
    console.log('Para yatırıldı.(SAGA)')
} 

export function* watchInvestment() {
    console.log('Invest saga')
    yield takeEvery(INVESTMENT, investment)
}

function* withdraw() {
    console.log('Para çekildi.(SAGA)')
} 

export function* watchWithdraw() {
    console.log('Withdraw saga')
    yield takeEvery(WITHDRAW, withdraw)
} 