import { FunctionComponent, JSX } from "preact"

type PropsComponenteBoton = JSX.HTMLAttributes<HTMLButtonElement> & {
  //variant es el atributo que no existe en el boton por defecto y que nosotros le queremos añadir.
  variant: "Ciudad" | "Perro";
}

const Button: FunctionComponent<PropsComponenteBoton> = (props) => {
  const {variant, children, ...rest} = props
  return(
    <button class={`${variant}`} {...rest}> {children} </button>
  )
}

export default Button