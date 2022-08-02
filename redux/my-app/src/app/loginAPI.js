import axios from 'axios'

const URL = "http://127.0.0.1:8000/api/token/"
// async(2)
export function signin() {

    return new Promise((resolve) =>
        axios.post(URL, { username: 'eyal', password: '123' }).then((res) => resolve({ data: res.data }))
    );
}
