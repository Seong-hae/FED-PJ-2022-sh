// DC 메인 페이지 컴포넌트
import React from "react";
import Ban from "./modules/Ban";
import MenuBtn from "./modules/MenuBtn";
import VidIntro from "./modules/VidIntro";
import VidSwipe from "./modules/VidSwipe";

const Main = () => {
    return(
        <>
            {/* 1. 배너모듈 */}
            <Ban cat="main"/>
            {/* 2. 메뉴버튼모듈 */}
            <MenuBtn />
            {/* 3. 비디오소개 모듈 */}
            <VidIntro pg="main" mm=""/>
            {/* 4. 비디오 스와이프 모듈 */}
            <VidSwipe pg="main" tit="LATEST TRAILERS, CLIPS & MORE "/>
        </>
    );
}; /////////////////// Main /////////////////

export default Main;