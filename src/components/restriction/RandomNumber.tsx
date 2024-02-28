type RandomNumberType = {
    value: number
}

type PositiveNum = RandomNumberType & {
    ispositive: boolean
    isnegative?: never
    iszero?: never
}

type NegativeNum = RandomNumberType & {
    isnegative: boolean
    ispositive?: never
    iszero?: never
}

type ZeroNum = RandomNumberType & {
    iszero: boolean
    ispositive?: never
    isnegative?: never
}

type RandomNumberProps = PositiveNum | NegativeNum | ZeroNum

export const RandomNumber = ({
    value,
    ispositive,
    isnegative,
    iszero
}: RandomNumberProps) => {
    return (
        <div>
            {value} 
            {ispositive && 'Positive'}
            {isnegative && 'Negative'}
            {iszero && 'Zero'}
        </div>
    )
}