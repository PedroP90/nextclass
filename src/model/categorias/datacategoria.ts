'use client'
export async function getCategorias() {

    try{
        const res = await fetch('http://3.89.177.61:3001/tienda/categorias', {cache: 'no-store'})
        return res.json()
    }catch(error){
            throw new Error('Failed to fetch data')
    }
}