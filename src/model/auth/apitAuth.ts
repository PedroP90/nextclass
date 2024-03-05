import { ILogin, IRespLogin } from "@/interfaces/ILogin";
import axios from 'axios';

const apiBD = 'http://192.168.1.224:3001/tienda';

const apiAuth = {

    login: async (login: ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`, login)
        return data
    }
}

export default apiAuth