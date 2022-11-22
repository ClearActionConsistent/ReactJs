import axios from "axios";

export const postMethod = async (email, password) => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/post', {
            email: email,
            password: password
        })
        localStorage.setItem('userProfile', res.token)
    }
    catch (err) {
        console.log(err);
    }
}