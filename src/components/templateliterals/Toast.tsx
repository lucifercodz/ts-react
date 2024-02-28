type HorizontalPostion = 'left' | 'Right' | 'center'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: 
    | Exclude<`${HorizontalPostion}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}