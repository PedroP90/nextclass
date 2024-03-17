import { CatTable } from "@/components/public/categorias/CatTable";
import apiCategorias from "@/model/categorias/apiCategorias";


const CategoriasPage = async () => {

  const categorias = await apiCategorias.listar();

  return (
    <>
      <section className="p-6">
        <CatTable categorias={categorias}/>
      </section>
    </>
  )
}



export default CategoriasPage;