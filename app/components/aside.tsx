export default function Aside() {
    return (
        <ul className="w-64 bg-slate-100">
            <li> <a href="/admin/">Home</a></li>
            <li> <a href="/admin/student/new">Cadastrar Estudantes</a></li>
            <li><a href="/admin/student">Listar Estudantes</a> </li>
            <li><a href="/admin/professor">Cadastrar Professores</a></li>
        </ul>
    )
}