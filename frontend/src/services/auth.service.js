import { api } from "./config"


export async function login (email, password) {
    try {
        const {data} = await api.post('/auth/login', {
            email: email,
            password: password
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function signup (name, email, password) {
    try {
        const { data } = await api.post('/auth/signup', {
            name: name,
            email: email,
            password: password
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}