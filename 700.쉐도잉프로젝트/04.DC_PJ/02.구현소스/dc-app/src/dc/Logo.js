// DC로고 컴포넌트
import React from "react";
import isrc from "./ImgSrc";

const Logo = (props) => {
    // props.gb : 상단,하단구분코드

    //객체형 스타일적용: 속성명이 틀리면 아예 출력되지 않는다!
    const mystyle = {
        top: {
            width: "45px",
            height: "45px",
            marginRight: "30px",
            borderRadius: "50%",
            // outline:"3px solid lime"
        },
        bottom: {
            height: "80px",
        },
    };

    let istyle = {
        top: "45px",
        bottom: "80px",
    };

    return (
        <h1 style={mystyle[props.gb]}>
            <img src={isrc.logo} style={{ width: istyle[props.gb] }} />
        </h1>
    );
}; //////////// Logo ////////////////

export default Logo;