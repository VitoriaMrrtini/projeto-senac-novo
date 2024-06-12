import axios from "axios";
import "./Cadastro.css";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SCA_API_URL } from "../utils/ApiConfig";
import CustomAlert from "./CustomAlert";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

function Cadastro() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  const navigate = useNavigate();

  const handleUserOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAgeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(e.target.value, 10));
  };

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleOnclick = async () => {
    // e.preventDefault();
  
    if (!user || !password || !email || age === null || !gender) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Por favor, preencha todos os campos!"
      });
      return;
    }
  
    if (age < 0) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Idade não pode ser negativa!"
      });
      return;
    }
  
    const newUser = {
      nome: user,
      senha: password,
      email: email,
      idade: age,
      genero: gender
    };

    if (user && email && password && age && gender) {
      try{
          const response = await axios.post(`${SCA_API_URL}/users/verificarcadastro`, newUser);
          console.log(response.data);
          Swal.fire({
            title: "Cadastro realizado com sucesso!",
            text: "Você agora pode fazer login.",
            icon: "success"
          });
          // // localStorage.setItem("userID", id);
          navigate("/SiteInicio");
        }
        catch (error){
          Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Ocorreu um erro ao cadastrar. Por favor, tente novamente."
          });
        };
    }
  };

  return (
    <div className="cadastro-container">
      <form className="cadastro-form" onSubmit={handleOnclick}>
        <h2>Cadastro</h2>
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
        <input
          onChange={handleEmailOnChange}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={handleAgeOnChange}
          type="number"
          name="age"
          placeholder="Idade"
          value={age !== null ? age : ""}
        />
        <div>
          <label>
            <input
              type="radio"
              value="masculino"
              checked={gender === 'masculino'}
              onChange={handleGenderChange}
            />
            Masculino
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="feminino"
              checked={gender === 'feminino'}
              onChange={handleGenderChange}
            />
            Feminino
          </label>
        </div>
        <input type="submit" value="Cadastrar" />
        <div className="Alert">
          {showAlert && (
            <CustomAlert
              message={
                <>
                  Já possui login? Entre <Link to="/Login">aqui!</Link>
                </>
              }
              type="success"
              onClose={() => setShowAlert(false)}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
