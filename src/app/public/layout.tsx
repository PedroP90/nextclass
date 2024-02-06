import { Menu } from "@/components/public/Menu";
import { MenuLink } from "@/components/public/MenuLink";
import { IChildren } from "@/interfaces/iChildren";


export default function PublicLayout({children}: IChildren){
    return (
        <>
            <header>
                <h1>Header del Frontend</h1>
                {/* <Menu/> */}
                <MenuLink/>
            </header>
            <main>
                { children }
            </main>
        </>
    )
}