///  CatSwipe 모듈 - CatSwipe.js
import $ from "jquery";
import "../css/catswipe.css";
import SwiperCat from "../plugin/SwiperCat";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function CatSwipe(props) {
    // props.pg - 페이지별 데이터구분
    // propt.tit - 모듈타이틀
    return (
        <>
            {/* 모듈코드 */}
            <section className="catswbox">
                {/* 1. 모듈타이틀 */}
                <h2 className="tit">{props.tit}</h2>
                {/* 2. 스와이퍼 컴포넌트 */}
                <SwiperCat name="나는" />

                {/* 3. 비디오 재생창 */}
                <section className="catbx">
                    {/* 비디오중앙박스 */}
                    <div className="playcat">
                        {/* 비디오타이틀 */}
                        <h2 className="ifrtit"></h2>
                        {/* 아이프레임 */}
                        <iframe src="" allow="autoplay"></iframe>
                        {/* 닫기버튼 */}
                        <button className="cbtn">×</button>
                    </div>
                </section>
            </section>

            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default VidSwipe;