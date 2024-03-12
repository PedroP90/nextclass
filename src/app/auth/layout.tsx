import { IChildren } from "@/interfaces/iChildren";

export default function AuthLayout({children}: IChildren){

    return (
        <>
            {/* <header className='bg-orange-300'>
                <h2>Zona de autenticación</h2>
            </header> */}
            <main className='container mx-auto'>
                { children }
            </main>
        </>
    )
}