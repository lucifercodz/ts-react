type GenListProps<Typo> = {
    items: Typo[]
    onClick: (value: Typo) => void
}

// type GenListProps = {
//     items: string[] | number[]
//     onClick: (value: string | number) => void
// }

export const GenList = <Typo extends {id: number, first: string, last: string}>({items, onClick}: GenListProps<Typo>) => {
    return(
        <div>
            <h2>List of items</h2>
            {items.map((item, index)=>{
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.first}
                    </div>
                )
            })}
        </div>
    )
}