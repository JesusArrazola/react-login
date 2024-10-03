import React from "react";
import { Link } from "react-router-dom";
import useClientForm from "../hooks/useClientForm";
export default function Form({ isLoggedIn }) {
  if (!isLoggedIn)
    return (
      <>
        <p>No has iniciado sesión</p>
        <Link to="/" className="underline text-green-600">
          Iniciar sesión
        </Link>
      </>
    );

  const { register, errors, submit, queryStatus, user } = useClientForm();

  return (
    <>
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        {queryStatus.status === "error" && (
          <div className="bg-red-500 text-white p-2 text-center rounded-md mb-8">
            {queryStatus.message}
          </div>
        )}
        <form>
          <div className="flex flex-row gap-2 items-end">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">ID</label>
              <input
                ref={register({ required: "Campo requerido" })}
                name="id"
                type="number"
                className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent ${
                  errors?.id ? "outline-red-600" : "outline-green-600"
                } transition-all`}
                placeholder="Ingresa el ID"
              />
            </div>
            <button
              type="button"
              disabled={queryStatus.status === "loading"}
              onClick={submit}
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 focus:outline-none"
            >
              {queryStatus.status === "loading" ? "Un momento..." : "Aceptar"}
            </button>
            <span className="text-xs text-red-500">{errors?.id?.message}</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Nombre</label>
              <input
                disabled
                value={user.nombre}
                name="nombre"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-green-500 transition-all"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Apellido Paterno
              </label>
              <input
                disabled
                value={user.aPaterno}
                name="aPaterno"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-green-500 transition-all"
                placeholder="Apellido paterno"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Apellido Materno
              </label>
              <input
                disabled
                value={user.aMaterno}
                name="aMaterno"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-green-500 transition-all"
                placeholder="Apellido materno"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
