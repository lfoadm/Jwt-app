import AppStorage from '@/helpers/AppStorage';

class Token {
    isValid(token) {
        const payload = this.payload(token);
        // console.log('payload aqui:', payload.exp)
        // console.log('token aqui:', token)
        // console.log(Date.now() )

        if (payload.exp < Date.now() / 1000) {
            AppStorage.clear()
        } else {
            if(payload) {
                return payload.iss == "http://localhost:8000/api/auth/login" || "http://localhost:8000/api/auth/signup" ? true : false
            }
        }
        return false            

    }
    payload(token) {
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload) {
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()