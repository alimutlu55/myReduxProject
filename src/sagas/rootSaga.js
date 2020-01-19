import { delay } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'


import { watchInvestment, watchWithdraw } from './operationSagas'
import { watchGetUserInformation, watchGetExchangeRate } from './serviceSagas'

export default function* rootSaga() {
    yield all([
        fork(watchInvestment),
        fork(watchWithdraw),
        fork(watchGetUserInformation),
        fork(watchGetExchangeRate)
    ])


}