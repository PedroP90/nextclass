import { IProveedor } from "@/interfaces/iProveedores";
import { FC } from "react";


interface Props {
    proveedores: IProveedor[];
}

export const ProvTable:FC<Props> = ({proveedores}) => {

    
    return (
        <>
        
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg pl-6 pr-6">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        CIF
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        NOMBRE
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        CP
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        PAÍS
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        TELEFONO
                                    </th>
                                </tr>
                            </thead>
                            {
                                proveedores.map( (proveedor) => (    
                                    <tbody key={proveedor.cif}>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4">
                                                {proveedor.cif}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {proveedor.nombre}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {proveedor.codigo_postal}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {proveedor.pais}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {proveedor.telefono}
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