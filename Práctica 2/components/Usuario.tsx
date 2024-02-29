import { FunctionComponent } from "preact";

//Los parámetros que recibe este componente
type micomponenteUsuario = {
    username: string;
    email: string;
    sex: string;
    address: string;
}
const Usuario: FunctionComponent<micomponenteUsuario> = (props) => {
    const {username, email, sex, address} = props
    
    return (
        <div class="FondoPantalla">
            <p class={"Texto"}> {username} </p>
            <hr/>
            <p class={"Subtexto"}> {email} </p>
            <p class={"Subtexto"}> {sex} </p>
            <p class={"Subtexto"}> {address} </p>
        </div>
    )
}

export default Usuario