import React from "react"

type containerProps = {
    styles: React.CSSProperties
}

export const Container = (props: containerProps) => {
    return (
        <div style={props.styles}>
            Text Content goes here
        </div>
    )
}