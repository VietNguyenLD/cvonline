import { useState } from "react";

const useModal = () => {
    const [isShow, setIsShow] = useState(false);

    const toggle = () => {
        setIsShow(!isShow);
    }

    return {
        isShow,
        toggle
    }
}

export default useModal;