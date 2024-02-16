import { GreetPropes } from "./Props.type"

export const Greet = (props: GreetPropes) => {
    let { message = 5} = props
    return (
        <div>
            <h1>
                {
                    props.Islogin 
                    ? `Welcome ${props.name} bantai! you recived ${message} messages, faat say phad leee`
                    : 'Wlcome Guest' 
                }
            </h1>
        </div>
    )
}
