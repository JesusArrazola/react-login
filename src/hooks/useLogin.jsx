import { useState } from "react";
import { useForm } from "react-hook-form";
import login from "../services/login";

export default function useLogin({ setIsLoggedIn, history }) {
  const [authStatus, setAuthStatus] = useState({
    status: "idle", // 'idle', 'loading', 'error'
    failedLoginAttempts: 0,
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
    setAuthStatus({
      status: "loading",
      failedLoginAttempts: authStatus.failedLoginAttempts,
    });

    const success = await login(data.username, data.password);

    if (success) {
      console.log("Logged in successfully");
      setIsLoggedIn(true);
      history.push("/form");
      setAuthStatus({ status: "idle", failedLoginAttempts: 0 });
    } else {
      handleLoginError();
    }
  };

  const handleLoginError = () => {
    setAuthStatus((state) => ({
      status: "error",
      failedLoginAttempts: state.failedLoginAttempts + 1,
    }));

    if (authStatus.failedLoginAttempts >= 2) {
      console.log("Contraseña incorrecta");
    }
  };

  const onError = (data) => {
    console.log("Error: ", data);
  };

  const submit = handleSubmit(onSubmit, onError);

  return {
    register,
    submit,
    errors,
    authStatus,
  };
}
