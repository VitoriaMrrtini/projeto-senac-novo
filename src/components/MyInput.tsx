import { ChangeEvent } from 'react';
import './MyInput.css';

interface Props{
    type: string;
    placeholder?:string;
    bgColor?: string;
    value?: string;

    OnChange?:(e : ChangeEvent<HTMLInputElement>) => void;

}

function MyInput(props: Props){
    return(
        <input
        type={props.type}
        placeholder={props.placeholder}
        style={{backgroundColor: `${props.bgColor}`}}
        onChange={props.OnChange}
        value={props.value}
        />
    )
}

export default MyInput;