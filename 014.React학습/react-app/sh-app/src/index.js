// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./dc/Layout";
import "./index.css";

/********************************************* 
    [ 리액트 라우터 ]
    -> 컴포넌트를 연결하여 특정 이벤트에 모듈을
    변경해주는 중계역할을 함
    1. <BrowserRouter> - 라우터 Root
    2. <Routes> - 개별 라우터를 묶어주는 역할
    3. <Route> - 개별 라우터
        (속성)
            (1) path : 경로를 지정함
                    (Link의 to속성 경로와 일치함!)
            (2) element : 연결할 컴포넌트 지정

        (하위 라우트 만들기)
            <Route path="/">
                <Route />
                <Route />
                <Route />
            </Route>
    4. 라우터를 구성하는 컴포넌트는 자체적으로
    내보내기 셋팅을 해야한다!
    -> export default 라우터 컴포넌트
*********************************************/

// 라우터구성 컴포넌트 : 스스로 내보내기셋팅 필수!
// 레이아웃 컴포넌트를 라우터에 입혀서 화면에
// 출력해야하기 때문에 스스로 내보내기를 셋팅하는것임!
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
               {/* 중요!!!:레이아웃 컴포넌트를 루트로 잡아준다!!! */} 
               <Route path="/" element={<Layout />}>
                    {/* 하위라우트 셋팅 */}

               </Route>

            </Routes>
        </BrowserRouter>
    );
} //////////////// App 컴포넌트 //////////////////


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);