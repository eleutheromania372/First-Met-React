import React, { useState } from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count-1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;

// 초기 count값을 받아 count라는 state를 생성
// count 증감을 편리하게 조작할 수 있는 기능 제공