import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import Button from "../components/Button.tsx";
import Ciudad from "../components/Ciudad.tsx";
import { ciudad } from "./Types.ts"

export const handler: Handlers = {
    GET: async (req:Request, ctx:FreshContext<unknown, ciudad>) => { 
        try {
            const url = new URL (req.url)
            const search = url.searchParams.get("search")
            if(!search) 
        {
            return ctx.render({name: "Proporciona una ciudad", latitude: 0, longitude: 0, country: ""})
        }

        const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${search}`,  
        {method: 'GET', headers: {"X-Api-Key": '9Mj3sRnV9rgz0i+k0bg5HQ==F9fycqPPvNcm0JJV'},})

        if(response.status !== 200)
        {
            return ctx.render({name: "", latitude: 0, longitude: 0, country: ""})
        }

        const data = await response.json()

        const dataciudad = {
            name: data[0].name,
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            country: data[0].country
        }
        return ctx.render(dataciudad)
        }
        catch (e)
        {
            return ctx.render({name: "Esta ciudad no existe en la api", latitude: 0, longitude: 0, country: ""})
        }
    } 
}

const miPagina = (props: PageProps<ciudad>) => {
    return (
        <div>
            <form method="get" action="/city"> 
                Introduce la cuidad que quieres buscar: <input type= "text" name= "search" ></input>
                <Button variant = "Ciudad"> <i class="fa-regular fa-map"></i> Buscar </Button>
            </form>
            <Ciudad name={props.data.name} latitude={props.data.latitude} 
            longitude={props.data.longitude} country={props.data.country}/>
        </div>
    )
}

export default miPagina