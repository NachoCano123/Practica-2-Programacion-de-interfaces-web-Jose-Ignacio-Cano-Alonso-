import { FunctionComponent } from "preact";

//Los parámetros que recibe este componente
type micomponentePerro = {
    image_link: string;
    name: string;
    max_height_male: number;
    max_height_female: number;
    max_weight_male: number;
    max_weight_female: number;
    good_with_strangers: number;
    good_with_children: number;
    good_with_other_dogs: number;
}
const Perro: FunctionComponent<micomponentePerro> = (props) => {
    const {image_link, name, max_height_male, max_height_female, max_weight_male, max_weight_female, good_with_strangers, good_with_children, good_with_other_dogs} = props
    
    return (
        <div class="FondoPerro">
            <image class= "Imagen" src={image_link} />
            <ul class="AlineamientoLista">
                <li> Nombre: {name} </li>
                <li> Altura máxima macho: {max_height_male} </li>
                <li> Altura máxima hembra: {max_height_female} </li>
                <li> Peso máximo macho: {max_weight_male} </li>
                <li> Peso máximo hembra: {max_weight_female} </li>
                <li> Bueno con extraños: {good_with_strangers} </li>
                <li> Bueno con niños: {good_with_children} </li>
                <li> Bueno con perros: {good_with_other_dogs} </li>
            </ul>
        </div>
    )
}

export default Perro