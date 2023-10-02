function Card(props){
    const {title, backgroundColor, children} = props;

    return (
        <div
            style={{
                margin : 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children} 
        </div>
    );

}

export default Card;

// 하위 컴포넌트를 감싸서 Card 형태로 보여줌
//{title && <h1>{title}</h1>} //specialization을 사용한 부분
// {children} //containment를 사용한 부분

//backgroundColor: backgroundColor || "white", //specailization을 사용한 부분
// 범용적으로 재사용 가능