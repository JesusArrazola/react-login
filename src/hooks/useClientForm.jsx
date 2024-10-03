import { useForm } from "react-hook-form";
import { useState } from "react";
import getClienteById from "../services/clientes";

export default function useClientForm() {
  const [queryStatus, setQueryStatus] = useState({
    status: "idle", // 'idle', 'loading', 'error'
    message: "",
  });
  const [user, setUser] = useState({
    nombre: "",
    aPaterno: "",
    aMaterno: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "azteca",
      password: "",
    },
    criteriaMode: "all",
  });

  const onSubmit = async (data) => {
    setQueryStatus({ status: "loading" });
    const user_ = await getClienteById(data.id);

    if (user_ === null) {
      setQueryStatus({ status: "error", message: "Usuario no encontrado" });
      setUser({
        nombre: "",
        aPaterno: "",
        aMaterno: "",
      });
    } else {
      setQueryStatus({ status: "ok", message: "usuario encontrado" });
      const { nombre, aPaterno, aMaterno } = user_;
      setUser({ nombre, aPaterno, aMaterno });
    }
  };
  const onError = (data) => {};
  const submit = handleSubmit(onSubmit, onError);

  return {
    register,
    queryStatus,
    errors,
    submit,
    user,
  };
}
