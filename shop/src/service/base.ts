import Axios from "axios";
import { DEFAULT_API_URL } from '../service/constants'

class Service {
    async get(url: string, params: any) {
        return await Axios.get(DEFAULT_API_URL + url)
    }

    async post(url: string, params: any) {
        return await Axios.post(DEFAULT_API_URL + url)
    }
}

export default new Service();