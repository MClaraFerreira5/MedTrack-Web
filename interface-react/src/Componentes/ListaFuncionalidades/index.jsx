import { Link } from "react-router-dom";
import { ClipboardList, Box, Bolt, Calendar, Home } from "lucide-react";


const ListaFuncionalidades = ({type, usuarioId}) => {
  const rota1 = {rota: "/lista_dependentes", label: "LISTA DE DEPENDENTES"}
  const rota2 = {rota: `/perfil_usuario/${usuarioId}`, label: "PERFIL"}
  const rota3 =  "/relatorios"
  const rota4 = `/historico_medicacoes/${usuarioId}`

  const home = "/home"
  const config = "/configuracoes"


  return (
    <nav className="sm:p-2 text-white">
      
      <ul className="w-100 flex sm:flex-col space-y-4 sm:justify-start justify-center sm:gap-10 gap-[40px] md:space-y-0">
        <li className="pt-4">
          <Link to={home} className=" flex items-center gap-2 hover:bg-gray-700 rounded">
            <Home size={30} />
            <span className="hidden sm:inline ml-2">HOME</span>
          </Link>
        </li>
        <li>
          <Link to={type ? rota1.rota : rota2.rota} className="flex items-center gap-2 hover:bg-gray-700 rounded">
            <ClipboardList size={30} />
            <span className="hidden sm:inline ml-2">{type? rota1.label : rota2.label}</span>
          </Link>
        </li>
        <li>
          <Link to={type? rota3 : rota4} className="flex items-center gap-2 hover:bg-gray-700 rounded">
            <Box size={30}  />
            <span className="hidden sm:inline ml-2">RELATÓRIOS</span>
          </Link>
        </li>
        <li>
          <Link to={config} className="flex items-center gap-2 hover:bg-gray-700 rounded">
            <Bolt size={30}  />
            <span className="hidden sm:inline ml-2">CONFIGURAÇÕES</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center gap-2 hover:bg-gray-700 rounded">
            <Calendar size={30}  />
            <span className="hidden sm:inline ml-2">LOGOUT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ListaFuncionalidades;
