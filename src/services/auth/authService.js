import axios from "axios";

export const postMethod = async (email, password) => {
    try {
        console.log('submit form');
        const res = await axios.post('https://jsonplaceholder.typicode.com/post', {
            email: email,
            password: password
        })
        localStorage.setItem('userProfile', res.token)
        alert('Login Success')
    }
    catch (err) {
        console.log(err)
        alert('Login failed')
    }
}