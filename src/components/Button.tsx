import { ButtonProps } from "./Props.type"

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.handleclick(event, 1)}>Click</button>
    )
}