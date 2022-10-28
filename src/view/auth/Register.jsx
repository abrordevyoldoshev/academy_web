import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import RegForm from "../../components/auth/RegForm";
import { authParam } from "../../service/authParam";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userData } from "../../redux/reducer/userReducer";
const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      authParam
        .register(values)
        .then((res) => {
          dispatch(userData(res));
          navigate("/");
          toast.success("success");
        })
        .catch((err) => setErr(err.response.data))
        .finally(() => setLoading(false));
    },
    validate: () => {},
  });
  return (
    <section className="container-reg">
      <div className="reg-content">
        <RegForm formik={formik} err={err} loading={loading} />
      </div>
    </section>
  );
};

export default Register;
