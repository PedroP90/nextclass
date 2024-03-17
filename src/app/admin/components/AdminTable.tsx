'use client'
import { IProducto } from "@/interfaces/IProductos";
import { FC, useState, useEffect } from "react";
import ProductModal from "./ProductModal";
import axios from "axios";
import { useSearchParams } from 'next/navigation';


interface Props {
    productos: IProducto[];
}

export const AdminTable:FC<Props> = ({productos}) => {

    const [deletedProduct, setDeletedProduct] = useState<string | null>(null);


    // Función para manejar el evento de clic en el botón "Borrar"
    const handleDelete = async (id_producto: string) => {
        try {
        // Realiza una solicitud DELETE a tu API Nest para eliminar la moto
        await axios.delete(`http://3.89.177.61:3001/tienda/productos/${id_producto}`);
        // Actualiza el estado si la solicitud es exitosa
        setDeletedProduct(id_producto);
        // Recarga la página automáticamente después de eliminar
        window.location.reload();
        } catch (error) {
        console.error('Error al borrar la moto:', error);
        }
    };

    // Función para mostrar una confirmación antes de borrar
    const confirmDelete = (id_producto: string) => {
        if (window.confirm('¿Estás seguro de que quieres borrar este producto?')) {
        handleDelete(id_producto);
        }
    };






    return (
        <>
        
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Producto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Marca
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {/* <button type="button" id="createProductModalButton" data-modal-target="createProductModal" data-modal-toggle="createProductModal" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                                </svg>
                                                Add product
                                        </button> */}
                                        <ProductModal/>
                                    </th>
                                    
                                </tr>
                            </thead>
                            {
                                productos.map( (producto) => (    
                                    <tbody key={producto.id_producto}>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4">
                                                <img src={producto.img} className="w-16 md:w-32 max-w-full max-h-full" alt={producto.nombre}/>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {producto.nombre}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {producto.marca}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {producto.precio}€
                                            </td>
                                            <td className="px-6 py-4">
                                                <button type="button" onClick={() => confirmDelete(producto.id_producto)} className="text-white bg-gradient-to-r from-red-500 via-red-700 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                                    Borrar
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    
                                ))
                            }    
                        </table>
                    </div>

        </>
    
    )
}