import axios from "axios";

const client = axios.create({ baseURL: 'http://localhost:4000' })

export const request = ({...options}) => {
    client.defaults.headers.common.Authorization = `Bearer token123`
    const onSuccess = response => response
    const onError = error => {
        // redirect to login etc
        return error
    }

    return client(options).then(onSuccess).catch(onError)
}
