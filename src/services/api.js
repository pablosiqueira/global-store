import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/pablosiqueira/products-server/products'
})


export default {
    all() {
        return api.get()
    },
    product(id) {
        return api.get(`/${id}`)
    },
    category(ctg){
        return api.get(`?category=${ctg}`)
    },
    fulltextsearch(codes){
        return api.get(`?q=${codes}`)
    }
}