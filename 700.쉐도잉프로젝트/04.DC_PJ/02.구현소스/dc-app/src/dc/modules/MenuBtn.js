///// 메뉴버튼 모듈 - MenuBtn.js
import $ from 'jquery';
import "../css/MenuBtn.css";
import menubtn_data from "../data/MenuBtn";
import { Link, Outlet } from "react-router-dom";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); ///////////////jQB ///////////////
} ////////////////jqFn /////////////


// 찬님의 방법 😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊


// // 작은글씨
// let stit=[];
// // 큰글씨
// let btit=[]

// menubtn_data.forEach((x,i)=>{
//     stit.push(x.tit.split("^")[0])
//     btit.push(x.tit.split("^")[1])
// })

// console.log(stit,btit)

// function Cont(props){
//     return(
//         <>
//             <div>
//                 <div className="imbx">
//                     <img src={menubtn_data[props.num].isrc} alt="이미지"/>
//                 </div>
//                 <div className="titbx">
//                     <h3>{stit[props.num]}</h3>
//                     <h2>{btit[props.num]}</h2>
//                 </div>
//                 <div className="btnbx">
//                     {/* 라우터를 이용한 이동은 반드시 Link를 사용하자! */}
//                     <Link to={menubtn_data[props.num].link}>
//                         <button>{menubtn_data[props.num].btn}</button>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     );
// }


// function MenuBtn(){
//     return(
//         <>
//         <section className="menubtn">
//             {menubtn_data.map((x,i)=><Cont num={i}/>)}
//         </section>
//         {/* 빈루트를 만들고 JS로드함수 포함 */}
//         {jqFn()}
//         </>
//     )
// } ///////////////// MenuBtn 컴포넌트 //////////////////////////

// export default MenuBtn;






// 선생님의 방법 😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊


function MenuBtn() {
    return (
        <>
            <section className="menubtn">
            {
                menubtn_data.map((v,i)=>
                    <div key={i}>
                        <div className="imbx">
                            <img src={v.isrc} alt="메뉴버튼" />
                        </div>
                        <div className="titbx">
                            <h3>{v.tit.split('^')[0]}</h3>
                            <h2>{v.tit.split('^')[1].toUpperCase()}</h2>
                        </div>
                        <div className="btnbx">
                            {/* 라우터를 이용한 이동은 반드시 Link를 사용하자! */}
                            <Link to={v.link}>
                                <button>
                                    {v.btn.toUpperCase()}
                                </button>
                            </Link>
                        </div>
                    </div>
                )
                }
            </section>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default MenuBtn;