export default async function EditStudent(){
    return(
        <>
        <h1>Editar Estudante</h1>
        <form action="">
                <input type="text" name="name" placeholder="Digite o nome do Estudate" />
                <input type="text" name="email" placeholder="Digite o Email do Estudate" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button type="submit" className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}