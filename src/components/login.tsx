import axios from 'axios';
import './login.css';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SCA_API_URL } from '../utils/ApiConfig';



function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUserOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }

  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnclick = () => {
    axios.get(`${SCA_API_URL}/users?nome=${user}`)
      .then((res) => {

        const id = res.data[0].id;
        const usr = res.data[0].nome;
        const pass = res.data[0].senha;

        if(user === usr && password === pass){
            alert("Login bem-sucedido");
            localStorage.setItem("userID", id);
            navigate("/SiteInicio");
        }else{
            setUser("");
            setPassword("");
            alert("usuario ou senha errados")
        }
      }).catch((err) => {
        alert(err);
      })
  }

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <input onChange={handleUserOnchange} type="text" name="username" placeholder="Usuário" />
        <input onChange={handlePasswordOnChange} type="password" name="password" placeholder="Senha" />
        <input onClick={handleOnclick} type="submit" value="Entrar" />
      </div>
    </div>
  );
}

export default Login;