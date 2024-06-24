import axios from "axios";
import "./login.css";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SCA_API_URL } from "../utils/ApiConfig";
import CustomAlert from "./CustomAlert";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  const navigate = useNavigate();

  const handleUserOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnclick = () => {
    axios
      .get(`${SCA_API_URL}/users?nome=${user}`)
      .then((res) => {
        const id = res.data[0].id;
        const usr = res.data[0].nome;
        const pass = res.data[0].senha;

        if (user === usr && password === pass) {
          Swal.fire({
            title: "Bem vindo!",
            text: "Aproveite o quanto quiser!",
            icon: "success",
          });
          localStorage.setItem("userID", id);
          navigate("/SiteInicio");
        } else {
          setUser("");
          setPassword("");
          Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Senha ou Usuário incorreto!",
          });
        }
      })
      .catch((err) => {
        alert(err);
        console.error(err);
      });
  };

  return (
    <div className="fundoLogin">
      <div className="container">
        <div className="login-form">
          <h2>Login</h2>
          <input
            onChange={handleUserOnchange}
            type="text"
            name="username"
            placeholder="Usuário"
            value={user}
          />
          <input
            onChange={handlePasswordOnChange}
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
          />
          <input onClick={handleOnclick} type="submit" value="Entrar" />
          <div className="Alert">
            {showAlert && (
              <CustomAlert
                message={
                  <>
                    Não possui login? Entre <Link to="/">aqui!</Link>
                  </>
                }
                type="success"
                onClose={() => setShowAlert(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
