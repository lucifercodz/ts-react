import { HeadingProps } from "./Props.type"

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>
}