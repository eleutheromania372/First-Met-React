import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black":"white",
            }}  
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;
//ThemeContext 값을 받아와 화면에 렌더링
//테마변경 버튼을 클릭할 경우 hook을 통해 themecontext 값을 변경