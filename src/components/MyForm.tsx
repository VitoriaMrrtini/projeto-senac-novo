import { ChangeEvent } from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";

interface Props{
    onClick: () => void;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
}

function MyForm(props: Props){
    return(
        <>
        <MyInput 
            type="text" 
            placeholder='Digite algo'
            bgColor='#ffffff'
            OnChange={props.onInputChange}
            value={props.inputValue}
            
        /> 
        <MyInput 
            type="password" 
            placeholder='Digite algo'
            bgColor='#ffffff'
            OnChange={props.onInputChange}
            value={props.inputValue}
            
        /> 
        <MyButton onClick={props.onClick}><h4>adicionar</h4></MyButton> 
        </>
    )
}

export default MyForm;