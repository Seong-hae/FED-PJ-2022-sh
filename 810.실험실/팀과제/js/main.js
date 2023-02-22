window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/

function loadFn(){

    console.log("로딩완료!");


    /****************************************************
     [ GNB메뉴 스크롤 시 색변경 ]
    ******************************************************/
     window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.querySelector('.top').classList.add("on");
        } else {
            document.querySelector('.top').classList.remove("on");
        }
    });



    /****************************************************
     [ 메인화면 슬라이드 ]
    ******************************************************/
     // 슬라이드 li리스트
     let slist = document.querySelectorAll("#slide>li");
    
     // 잘라내기로 li순번이 뒤섞이므로 블릿변경 매칭을 위한
     // 고유순번을 사용자정의 속성(data-)으로 만들어준다!
     slist.forEach((ele,idx)=>{
         // data-seq라는 사용자정의 속성 넣기
         ele.setAttribute("data-seq",idx);
     }); ////// forEach ///////////
 
     // 1. 대상선정
     // 1-1. 이벤트 대상: .abtn
     const abtn = document.querySelectorAll(".abtn");
     // console.log(abtn);
 
     // 1-2. 변경 대상: #slide
     const slide = document.querySelector("#slide");
 
     // 1-3. 블릿 대상: .indic li
     const indic = document.querySelectorAll(".indic li");
     console.log(indic);
 
     // 광클금지변수 : 0 - 허용, 1- 불허용
     let prot = 0;
 
     // 2. 슬라이드 변경함수 만들기
     // 호출시 seq에 들어오는 값 중 1은 오른쪽, 0은 왼쪽
     const goSlide = (seq) => {
         console.log("슬고우!",seq);
 
         console.log("못들어갔어!!!!!");
 
         // 광클금지 설정하기 //////
         if(prot) return;
         prot = 1; // 잠금!
         setTimeout(()=>{
             prot = 0; // 해제!
         }, 400); /// 0.4초후 해제! ///
 
         console.log("나,들어왔어!!!!");
 
         // 0. 현재의 슬라이드 li수집하기
         let clist = slide.querySelectorAll("li");
         // clist -> current list 현재 리스트
 
         // 1. 방향에 따른 분기
         // 1-1. 오른쪽버튼 클릭시 ////////////////
         if(seq){            
             console.log("오른!");
             // (1) 오른쪽 버튼 클릭시 다음 슬라이드가
             //     나타나도록 슬라이드 박스의 left값을
             //     -100%로 변경시킨다.
             slide.style.left = "-100%";
             slide.style.transition = "left .4s ease-in-out";
     
             // (2) 슬라이드 이동후!!! (0.4초후)
             setTimeout(()=>{
                 // (2-1) 바깥에 나가있는 첫번째 슬라이드
                 //       li를 잘라서 맨뒤로 보낸다!
                 slide.appendChild(clist[0]);
                 // (2-2) 동시에 left값을 0으로 변경한다!
                 slide.style.left = "0";
                 // (2-3) 트랜지션 없애기!
                 slide.style.transition = "none";
             },400); //// 타임아웃 //////
 
         }
         // 1-2. 왼쪽버튼 클릭시 /////////////
         else{
             console.log("왼쪽!");
 
             // (1) 왼쪽버튼 클릭시 이전 슬라이드가
             // 나타나도록 하기위해 우선 맨뒤 li를
             // 맨앞으로 이동한다.
             // slide.insertBefore(넣을놈,넣을놈전놈)
             // slide.insertBefore(맨끝li,맨앞li)
             slide.insertBefore(clist[clist.length-1],clist[0]);
 
             // (2) 동시에 left값을 -100%로 변경한다.
             slide.style.left = "-100%"
             // 이때 트랜지션을 없앤다(한 번 실행 후 부터 생기므로!)
             slide.style.transition = "none";
 
             // (3) 그 후 left값을 0으로 애니메이션하여
             // 슬라이드가 왼쪽에서 들어온다.
             // 동일 속성인 left가 같은 코딩처리 공간에 동시에 있으므로
             // 이것을 분리해야 효과가 있다
             // setTimeout을 사용한다!
             setTimeout(()=>{
                 slide.style.left = "0";
                 slide.style.transition = "left .4s ease-in-out";
             },0); ////// 타임아웃 ///////
             
         } ////////////else : 왼쪽클릭시 /////////
 
         // 2. 현재 슬라이드 순번과 같은 블릿표시하기
         // 대상 : .indic li -> indic변수
         // 2-1. 현재 배너리스트 업데이트
         clist = slide.querySelectorAll("li");
         // 오른쪽 클릭시(seq===1) 두번째 슬라이드[1]
         // 왼쪽클릭시(seq===0) 첫번째 슬라이드[0]
         // seq순번과 읽어올 슬라이드 순번이 일치한다!
 
         // 2-2.방향별 읽어올 슬라이드 순번으로 "data-seq"값 읽어오기
         let cseq = clist[seq].getAttribute("data-seq")
         console.log("현재순번:",cseq);
 
         // 2-3. 블릿초기화
         for(let x of indic) x.classList.remove("on");
 
         // 2-4. 읽어온 슬라이드 순번의 블릿에 클라스 "on"넣기
         indic[cseq].classList.add("on")
 
 
     }; ////////// goSlide함수 ///////////
 
     // 3. 대상에 이벤트 설정하기
     abtn.forEach((ele, idx) => {
         ele.onclick = () => {
             goSlide(idx);
         }; ///// click함수 //////
     }); /////// forEach //////////




    
    /***************************************************
        [ 좌우뚫려있는 자유로운 행성박스 ]
    ***************************************************/
    
    
    // 좌우 화살표 변수 mbtn
    const mbtn = document.querySelectorAll('.mbtn');
    // 행성슬라이드 변수 mslide 
    const mslide = document.querySelector('#mslide');
    // 광클금지 변수
    let prott = 0;

    const gs = (seq)=>{
        if(prott) return ;
        prott = 1;
        setTimeout(()=>{
            prott=0;
        },400); //timeout ////
        
        // li리스트 변수
        let clist = mslide.querySelectorAll('#mslide li');

        // 오른쪽 버튼
        if(seq){
            // 한박스가아니라 박스기준1/3 만 이동해야하므로 33%
            mslide.style.left = "-33.33%";
            mslide.style.transition='.4s ease-in-out';
            setTimeout(()=>{
                mslide.appendChild(clist[0]);
                mslide.style.left = '0'
                mslide.style.transition='none';
            },400);//timeout////
        }// if ////

        // 왼쪽버튼
        else {
            mslide.insertBefore(clist[clist.length-1],clist[0]);
            // 한박스가아니라 박스기준1/3 만 이동해야하므로 33%
            mslide.style.left = '-33.33%';
            mslide.style.transition='none';
            setTimeout(()=>{
                mslide.style.left='0';
                mslide.style.transition='.4s ease-in-out';
            },0);//timeout////
        }// else ////
    };//gs////

    // 실행코드
    mbtn.forEach((ele,idx)=>{
        ele.onclick=()=>{
            gs(idx);
        };//onclick////
        ele.onmouseover=()=>{
            ele.style.cursor='pointer';
        };//onmouseover ////
    });//forEach////
    

    /*
    // 맨밑에 행성넘어가는 JS - 좌우 막은버전 //////////////////////////////////
    
    // 좌우 화살표 변수 mbtn
    const mbtn = document.querySelectorAll('.mbtn');
    // 행성슬라이드 변수 mslide 
    const mslide = document.querySelector('#mslide');
    // list개수파악용변수
    const ll = document.querySelectorAll('#mslide li').length;
    // 슬라이드번호 담을 변수
    let num = 0;
    // 넘어가는 li가 3개씩이여서 화면100프로에 3개담으려고 3개로짜름
    let length = ll/3;
    // 광클금지 변수
    let prot = 0;
    const sg = seq => {
        if(prot) return ;
        prot = 1;
        setTimeout(()=>{prot=0;},400)
        if(seq){
            num++;
        }
        else{
            num--;
        }
    
    if(num===-1) num = num=0;
    else if(num=== length) num= num-1;
    mslide.style.left=(num*-100)+"%";
    }//sg////
    
    // 최종실행코드
    mbtn.forEach((ele,idx)=>{
        ele.onclick=()=>{
            sg(idx);
        };// onclick ////
        ele.onmouseover=()=>{
            ele.style.cursor='pointer';
        }
    });//forEach ////
    // 행성넘어가는 JS 끝부분 ////////////////////////////////////
    */






} ////////////////// loadFn 함수 //////////////

 //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////