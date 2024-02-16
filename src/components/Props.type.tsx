import React from "react"

export type personProps = {
    name : {
        first: string,
        last: string,
    }
}

export type GreetPropes = {
    name: string,
    message?:number,
    Islogin:boolean
}

export type PersonListProps = {
    names : {
        first: string,
        last: string,
        age: number,
    }[]
}

export type StatusProps = {
    status : 'loading' | 'success' | 'error'
}

export type HeadingProps = {
    children: string
}

export type OscarProps = {
    children: React.ReactNode
}

export type ButtonProps = {
    handleclick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
