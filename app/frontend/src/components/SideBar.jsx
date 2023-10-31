import React, { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";
import { useHistory } from "react-router-dom";

function SideBar() {
  const { userName } = useContext(UserInfoContext);
  const history = useHistory();

  return (
    <div className="sidebar bg-blue-500 text-white text-center h-screen overflow-y-auto">
      <div className="logo text-center my-8 flex justify-center items-center">
        <img
          src="https://i.ibb.co/BrM33Cg/Design-sem-nome.png"
          className="m-1"
          alt="Logo"
          width={76}
        />
      </div>
      <div className="username text-center my-4">
        <p className="text-2xl font-semibold">{userName}</p>
      </div>
      <nav className="navbar mt-4">
        <ul>
          <li>
            <a
              onClick={() => history.push("/home")}
              className="block py-2 px-4 text-lg hover:bg-blue-600 hover:transition hover:duration-300 hover:bg-white hover:text-blue-500 cursor-pointer my-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => history.push("/earnings")}
              className="block py-2 px-4 text-lg hover:bg-blue-600 hover:transition hover:duration-300 hover:bg-white hover:text-blue-500 cursor-pointer my-2"
            >
              Entrada
            </a>
          </li>
          <li>
            <a
              onClick={() => history.push("/bills")}
              className="block py-2 px-4 text-lg hover:bg-blue-600 hover:transition hover:duration-300 hover:bg-white hover:text-blue-500 cursor-pointer my-2"
            >
              Saída
            </a>
          </li>
          <li>
            <a
              onClick={() => history.push("/")}
              className="block py-2 px-4 text-lg hover:bg-blue-600 hover:transition hover:duration-300 hover:bg-white hover:text-blue-500 cursor-pointer my-2"
            >
              Logoff
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
