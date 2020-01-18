const totalMoney = 0;

let initialState = {
    totalMoneyTL: 0,
    activities: [],
    user: {
        name: '',
        lastName: '',
        email: '',
    },
    exchangeRate: {
        dolar: 0,
        euro: 0
    },
    token: false,
    error: ''
}

const operations = (state = initialState, action) => {
    const { activityInfo, amount, user, exchangeRate } = action;

    switch (action.type) {
        case 'INVESTMENT':
            return {
                ...state,
                totalMoneyTL: state.totalMoneyTL + Number(amount),
                activities: [...state.activities, activityInfo]
            }  //[state = Number(state) + Number(action.amount)]
        case 'WITHDRAW':
            return {
                ...state,
                totalMoneyTL: state.totalMoneyTL - Number(amount),
                activities: [...state.activities, activityInfo]
            }
        case 'SHOW_ACTIVITIES':
            return { activities }
        case 'SAVE_USER':
            return { ...state, user }
        case 'EXCHANGE_RATE':
            return { ...state, exchangeRate }
        case 'AUTH_REQUEST':
            return { ...state, action }
        case 'AUTH_SUCCESS':
            return { ...state, token: action.payload }
        case 'AUTH_FAILURE':
            return { ...state, error: action.error }
        default: return state
    }
}


export default operations