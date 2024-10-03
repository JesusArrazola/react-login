//Simulando el consumo de una API, retrasando la respuesta aprox. un segundo.

const clientes = [
  {
    id: "0123",
    nombre: "Ignacio",
    aPaterno: "López",
    aMaterno: "Chávez",
  },
  {
    id: "0124",
    nombre: "María",
    aPaterno: "González",
    aMaterno: "Martínez",
  },
  {
    id: "0125",
    nombre: "Carlos",
    aPaterno: "Pérez",
    aMaterno: "Hernández",
  },
  {
    id: "0126",
    nombre: "Ana",
    aPaterno: "Ramírez",
    aMaterno: "Díaz",
  },
  {
    id: "0127",
    nombre: "Luis",
    aPaterno: "Fernández",
    aMaterno: "Mendoza",
  },
  {
    id: "0128",
    nombre: "Sofía",
    aPaterno: "Morales",
    aMaterno: "Torres",
  },
];

function encontrarClientePorId(id) {
  return clientes.find((cliente) => cliente.id === id) || null;
}

export default function getClienteById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const clienteEncontrado = encontrarClientePorId(id);
      resolve(clienteEncontrado);
    }, 1000);
  });
}
