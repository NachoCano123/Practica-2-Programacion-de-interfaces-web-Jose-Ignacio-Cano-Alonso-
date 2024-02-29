import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import axios from "npm:axios"
import Perro from "../components/Perro.tsx";
import { perro } from "./Types.ts"  
import Button from "../components/Button.tsx";

export const handler: Handlers = {
    GET: async (req:Request, ctx:FreshContext<unknown, perro>) => { 
        try {
            const url = new URL (req.url)
            const search = url.searchParams.get("search")

            if(!search) 
            {
                return ctx.render({image_link: "", name: "", max_height_male: 0, max_height_female: 0, max_weight_male: 0,
                 max_weight_female: 0, good_with_strangers: 0, good_with_children: 0, good_with_other_dogs: 0, })
            }
            
            const response = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${search}`,  
            {method: 'GET', headers: {"X-Api-Key": '9Mj3sRnV9rgz0i+k0bg5HQ==F9fycqPPvNcm0JJV'},})

            if(response.status !== 200)
            {
                return ctx.render({image_link: "", name: "", max_height_male: 0, max_height_female: 0, max_weight_male: 0,
                 max_weight_female: 0, good_with_strangers: 0, good_with_children: 0, good_with_other_dogs: 0, })
            }
            
            const data = await response.json()

            const dataperro = {
                image_link: data[0].image_link,
                name: data[0].name,
                max_height_male: data[0].max_height_male,
                max_height_female: data[0].max_height_female,
                max_weight_male: data[0].max_weight_male,
                max_weight_female: data[0].max_weight_female,
                good_with_strangers: data[0].good_with_strangers,
                good_with_children: data[0].good_with_children,
                good_with_other_dogs: data[0].good_with_other_dogs,
            }
            return ctx.render(dataperro)
        }
        catch (e)
        {
            return ctx.render({image_link: "", name: "El perro no existe en la base de datos", max_height_male: 0, max_height_female: 0, max_weight_male: 0,
                 max_weight_female: 0, good_with_strangers: 0, good_with_children: 0, good_with_other_dogs: 0, })
        }
    } 
}

const miPagina = (props: PageProps<perro>) => {
    return (
        <div>
            <form method="get" action="/dog"> 
                Introduce el perro que quieres buscar: <input type= "text" name= "search" ></input>
                <Button variant = "Perro"> Buscar </Button>
            </form>
            <Perro image_link={props.data.image_link} name={props.data.name} max_height_male={props.data.max_height_male} max_height_female={props.data.max_height_female} 
            max_weight_male={props.data.max_weight_male} max_weight_female={props.data.max_weight_female} good_with_strangers={props.data.good_with_strangers}
            good_with_children={props.data.good_with_children} good_with_other_dogs={props.data.good_with_other_dogs}/>
        </div>
    )
}

export default miPagina