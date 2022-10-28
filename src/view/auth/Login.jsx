import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import LoginForm from "../../components/auth/LoginForm";
import { CircularProgress } from "@mui/material";
import { loginApi } from "../../service/authParam";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      loginApi
        .login(values)
        .then((res) => {
          toast.success("success    ");
          navigate("/pages");
        })
        .catch((error) => setError(error.response.data))
        .finally(() => setLoading(false));
    },
  });

  return (
    <section className="container-reg">
      <div className="reg-content">
        <LoginForm formik={formik} error={error} loading={loading} />
      </div>
    </section>
  );
};

export default Login;
