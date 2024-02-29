import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import axios from "npm:axios"
import Usuario from "../components/Usuario.tsx";
import { usuario } from "./Types.ts"

export const handler: Handlers = {
    GET: async (_req:Request, ctx:FreshContext<unknown, usuario>) => { 
        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/randomuser",  
            {method: 'GET', headers: {"X-Api-Key": '9Mj3sRnV9rgz0i+k0bg5HQ==F9fycqPPvNcm0JJV'},})

            if(response.status !== 200)
            {
                throw new Error("Ha habido un error")
            }
            
            return ctx.render(response.data)
        }
        catch (e)
        {
            throw new Error("Ha habido un error")
        }
    } 
}

const miPagina = (props: PageProps<usuario>) => {
    return (
        <div>
            <Usuario username={props.data.username} email={props.data.email} 
            sex={props.data.sex} address={props.data.address}/>
        </div>
    )
}

export default miPagina