interface Usuarios {
  nombre: string;
  password: string;
}

const users: Usuarios[] = [
  {
    nombre: "Alex",
    password: "12345678A",
  },
  {
    nombre: "Perez",
    password: "12345678P",
  },
];

const login = (nombre: string, password: string): string => {
  if (password === "" || nombre === "") return `nombre o contraseña vacios`;
  if (password.length < 8) return `Contraseña muy corta`;
  let userExist =  users.find((user)=> user.nombre === nombre);
  if (!userExist) return `Credenciales invalidas`
  if(userExist.password != password) return "Contraseña invalida"
  return "Ingreso Existoso";

};
