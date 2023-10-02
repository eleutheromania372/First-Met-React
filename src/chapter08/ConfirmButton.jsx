import React, { useState } from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨":"확인하기"}
        </button>
    );
}

export default ConfirmButton;

//button의 onclick 이벤트를 처리하기 위해 eventhandler로 handleConfirm을 추가
