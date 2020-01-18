import {
    INVESTMENT,
    WITHDRAW,
    SHOW_ACTIVITIES,
    SAVE_USER,
    EXCHANGE_RATE,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE
} from './actionTypes'
let value;

export const investMoney = (amount) => ({
    type: INVESTMENT,
    amount,
    activityInfo: {
        id: value++,
        type: "PARA_YATIRMA",
        amount
    }
})
export const withdrawMoney = (amount) => ({
    type: WITHDRAW,
    amount,
    activityInfo: {
        id: value++,
        type: "PARA_ÇEKME",
        amount
    }
})
export const fetchUser = (user) => ({
    type: AUTH_REQUEST,
    user
})
export const viewActivity = () => ({
    type: SHOW_ACTIVITIES,
})
export const saveUser = (user) => ({
    type: SAVE_USER,
    user
})
export const fetchExchangeRate = (exchangeRate) => ({
    type: EXCHANGE_RATE,
    exchangeRate
})
