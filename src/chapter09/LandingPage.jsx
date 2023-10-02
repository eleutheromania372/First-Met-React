import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return(
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div style={{padding: 16}}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;

//사용자 로그인 여부에 따라 Toolbar에 적절한 인터페이스가 표시되도록 함