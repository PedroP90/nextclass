export async function getProductos() {

    try{
        const res = await fetch('http://192.168.1.224:3001/tienda/productos', {cache: 'no-store'})
        return res.json()
    }catch(error){
            throw new Error('Failed to fetch data')
    }
}