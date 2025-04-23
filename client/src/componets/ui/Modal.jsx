import {createPortal} from 'react-dom'
import { useEffect, useRef } from 'react'

function Modal( {children, open, onClose, classNa = null} ){
    const dialoge = useRef()

    useEffect(() => {
        const modalDialoge = dialoge.current
        if (open){
            modalDialoge.showModal()
        }
        return () => modalDialoge.close()
    }, [open])

    return createPortal(
        <dialog ref={dialoge} className={`modal ${classNa}`} onClose={onClose}  > {children} </dialog>,
        document.getElementById('modal') )
}

export default Modal