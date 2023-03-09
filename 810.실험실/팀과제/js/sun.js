// SUN 서브페이지 JS - sun.js


window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/

function loadFn(){



    /***************************************************
        section04 - Explor heliophysics
        오버시 움직이는 배경
    ***************************************************/
    // 1.대상 선정
    // (1)이벤트 대상 : .sun04 li
    const exploreTable = document.querySelectorAll(".sun04 .explorelist");
    // (2)변경 대상 : .mbg
    const moveBox = document.querySelector(".sun04 .movebox");
    console.log(exploreTable, moveBox);

    






}; ////////////// loadFn 함수 끝! ///////////