'use client'
import { IChildren } from "@/interfaces/iChildren";
import { Aside } from "./components/Aside";
import { Header } from "./components/Header";


export default function AdminLayout({children}: IChildren){

    return (
        <>
            <Header />
            <Aside />
            <div className="p-4 sm:ml-64">
                {children }
            </div>
        </>
    )
}