import { useEffect } from "react";

export function useOutsiteClick(ref, callback, isOpen) {
    useEffect(() => {
        function handleClickOutside(event) {
            if(!isOpen) document.removeEventListener('mousedown', handleClickOutside)

            if(ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, isOpen, callback])
}