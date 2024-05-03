import { ReactNode } from "react"
import './MyButton.css'

interface Props{
    children: ReactNode; //ReacNode - tem retorno
    onClick: () => void; //void - não tem retorno // (?) serve para quando é opicional
}

function MyButton(props: Props){
    return(
        <button onClick={props.onClick}>{props.children}</button>
    )
}

export default MyButton