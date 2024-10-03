//Simulando el consumo de una API, retrasando la respuesta aprox. un segundo.

const user = {
  username: "azteca",
  password: "12345",
};

export default function login(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isAuthenticated =
        username === user.username && password === user.password;
      resolve(isAuthenticated);
    }, 1000);
  });
}
