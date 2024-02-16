import { PersonListProps } from "./Props.type"

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props && props.names.map((name) => {
                return (
                    <h3 key={name.first}>
                        {name.first} 
                        {name.last} 
                        {name.age}
                    </h3>
                )
            })}
        </div>
    )
}