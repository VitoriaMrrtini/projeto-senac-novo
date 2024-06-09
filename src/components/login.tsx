import axios from 'axios';
import './login.css';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SCA_API_URL } from '../utils/ApiConfig';
import Modal from '../components/Modal.tsx';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal

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

        if (user === usr && password === pass) {
          setShowModal(true); // Exibir o modal
          localStorage.setItem("userID", id);
          navigate("/SiteInicio");
        } else {
          setUser("");
          setPassword("");
          alert("usuário ou senha errados")
        }
      }).catch((err) => {
        alert(err);
      })
  }

  // Lidar com o fechamento do modal
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <input onChange={handleUserOnchange} type="text" name="username" placeholder="Usuário" />
        <input onChange={handlePasswordOnChange} type="password" name="password" placeholder="Senha" />
        <input onClick={handleOnclick} type="submit" value="Entrar" />
        <Modal show={showModal} onClose={handleModalClose} />
      </div>
    </div>
  );
}

export default Login;
