import { FunctionComponent } from "preact";

//Los parámetros que recibe este componente
type micomponenteCiudad = {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
}
const Ciudad: FunctionComponent<micomponenteCiudad> = (props) => {
    const {name, latitude, longitude, country} = props
    
    return (
        <div class="FondoPantalla">
            <p class={"Texto"}> {name} </p>
            <hr/>
            <p> Latitud: {latitude} </p>
            <p> Longitud: {longitude} </p>
            <p> Pais: {country} </p>
        </div>
    )
}

export default Ciudad