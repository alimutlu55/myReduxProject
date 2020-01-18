const url = 'http://myreduxproject.herokuapp.com/kayitGetir'
import { INVALID_PASSWORD } from '../actions/actionTypes'


function* _getUserInformation(action) {
    console.log("Apiye geldi" + JSON.stringify(action.user.email))
    const response = yield fetch(url,
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

export { _getUserInformation }
