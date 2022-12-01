import axios from "axios";

export const login = async (email, password) => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/post', {
            email: email,
            password: password
        })
        localStorage.setItem('userProfile', res.token)
        return true;
    }
    catch (err) {
        console.log(err);
        //fake test API https://jsonplaceholder.typicode.com/post
        return true;
    }
}