import { ILogin, IRespLogin } from "@/interfaces/ILogin";
import axios from 'axios';

const apiBD = 'http://3.89.177.61:3001/tienda';

const apiAuth = {

    login: async (login: ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`, login)
        return data
    }
}

export default apiAuth