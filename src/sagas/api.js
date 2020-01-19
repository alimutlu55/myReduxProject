const urlKayirGetir = 'http://myreduxproject.herokuapp.com/kayitGetir'
const urlDövizGetir = 'https://www.doviz.gen.tr/doviz_json.asp'
import { INVALID_PASSWORD } from '../actions/actionTypes'


function* _getUserInformation(action) {
    const response = yield fetch(urlKayirGetir,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: action.user.email,
            })
        })
    let data = yield response.json();
    if (response.status === 200) {
        if (data[0].password == action.user.password) {
            return yield (data[0])
        } else {
            return false
        }
    }
}

function* _getExchangeRates() {
    const response = yield fetch(urlDövizGetir, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    let data = yield response.json();
    console.log(data.dolar)
    if (response.status === 200) {
        return yield (data)
    } else {
        return (false)
    }
}


export { _getUserInformation, _getExchangeRates }
