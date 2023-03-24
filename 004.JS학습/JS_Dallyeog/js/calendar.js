// 달력 생성자함수 /////

// 호출
MakeDallyeok();

function MakeDallyeok(){

    // 선택함수 /////
    const qs = x => document.querySelector(x);
    const qsa = x => document.querySelectorAll(x);
    // 메시지 /////
    const cg = x => console.log(x);

    // 1. 변수셋팅 /////////

    // (1) 변경할 현재날짜 객체
    const curr_date = new Date();
    // (2) 오늘 날짜 객체
    const today = new Date();
    // (3) 년도 요소 : .yearTit
    const yearTit = qs(".yearTit");
    // (4) 월 요소 : .monthTit
    const monthTit = qs(".monthTit");
    // (5) 날짜 요소 : .dates
    const dates = qs(".dates");

    
    cg(dates);

    // 2. 함수 만들기 ////////
    // (1) 달력 초기화구성 함수
    const initDallyeok = () => {

        // getMonth() 정보는 항상 현재달 숫자보다 1작음(배열순번임!)
        // 1. 전달 마지막 날짜(옵션:0) -> 달력 이전 달의 끝 쪽 날짜표시
        const prevLast = new Date(curr_date.getFullYear(),
        curr_date.getMonth(),0);
        // cg(prevLast);

        // 2. 현재달 첫번째 날짜(옵션:1 -> 이전 달로 셋팅)
        //-> 달력 이전 달의 셋팅을 위한 요일 구하기 위해!
        const thisFirst = new Date(curr_date.getFullYear(),
        curr_date.getMonth(),1);
        // cg(thisFirst);

        // 3. 현재달 마지막 날짜(옵션:0)
        //-> 현재달력 날짜셋팅위해!
        const thisLast = new Date(curr_date.getFullYear(),
        curr_date.getMonth()+1,0);
        // cg(thisLast);

        // 4. 년도 표시하기
        yearTit.innerHTML = curr_date.getFullYear();

        // 5. 월 표시하기
        monthTit.innerHTML = curr_date.getMonth();

        // 6. 날짜 넣을 배열변수 만들기
        const dset = [];

        // 7. 지난 달의 날짜 앞쪽에 채우기
        // 조건 : 현재 달의 첫번째 요일이 0이 아니면 내용있음!
        if(thisFirst.getDay() !== 0){
            // for문 셋팅 : 몇바퀴돌리냐? 요일순번보다 작을때까지 ++
            for(let i = 0; i< thisFirst.getDay(); i++){
                // cg(i);
                // 반복횟수 만큼 배열 앞쪽에 추가한다!
                // 전달 마지막 날짜부터! -> prevLast.getDate()
                dset.unshift(prevLast.getDate()-i)
                // 마지막날짜 - i증가변수 = 1씩 작아지는 숫자추가됨
                // unshift() 배열 앞에 값을 추가하는 메서드

            } ///////// for /////////////////
        } ///////////////// if ///////////////////

        // 2. 현재 월 삽입하기 ///////////////////////
        // 반복문 구성: 현재 월 1일부터 마지막 날짜까지 반복 배열추가
        // 현재 월의 마지막 날짜 : thisLast.getDate()
        for(let i = 1; i <= thisLast.getDate(); i++){
            dset.push(i);
        } //////////////////// for ///////////////////////

        // 3. 다음달 나머지 칸 삽입하기
        // 반복구성 : 1부터 2주 분량정도 넣는다!
        for(let i = 1; i < 14; i++){
            dset.push(i);
        } ////// for //////////////////////

        cg(dset);

    }; //////////// initDallyeok ///////////

    initDallyeok();



} ///////////////////// MakeDallyeok //////////////////