const url = 'http://myreduxproject.herokuapp.com/kayitGetir'
import axios from 'axios'

function* _getUserInformation(action) {
    

    console.log("Apiye geldi" + JSON.stringify(action.user.email))
    axios.post('http://myreduxproject.herokuapp.com/kayitGetir', { // BU EMAİL DAHA ÖNCE KULLANILMIŞ MI KONTROLÜ
        email: action.user.email
    }).then((response) => {
        if (response.data[0] == undefined) {
            alert('Bu emaile kayıtlı bir kullanıcı bulunmamaktadır.')
        } else {
            if (action.user.password == response.data[0].password) {
                console.log(response.status)
                return (response.status === 200)
            } else {
                alert('Yanlş şifre.Tekrar deneyiniz.')
            }
        }
    }).catch((error) => {
        alert(error);
    });
}

export { _getUserInformation }
