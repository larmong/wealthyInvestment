// header 스크롤 이벤트
const header = document.querySelector("#header");
const headerHeight = header.offsetHeight;

window.onscroll = function () {
    const windowTop = window.scrollY;
    if ( windowTop >= headerHeight + 500 ) {
        header.classList.add("drop");
    } else {
        header.classList.remove("drop");
    }
};

// header 메뉴 슬라이드 (모바일)
let ham = document.querySelector('.ham_btn');
let gnb = document.querySelector('.gnb');
let gnbIcon = document.querySelector('.ham_btn i')
var slideNum = 0;

ham.addEventListener('click', function(){
    if( slideNum === 0 ){
        gnb.style.transform = 'translateY(0vh)';
        gnbIcon.classList.replace('fa-bars', 'fa-times');
        slideNum = 1;
    } else {
        gnb.style.transform = 'translateY(-100vh)';
        gnbIcon.classList.replace('fa-times', 'fa-bars');
        slideNum = 0;
    }
});


// wing 스크롤 이벤트
$(document).ready(function(){
    var wingTop = 200;

    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var position	= (scrollTop + wingTop) + "px";
        
      $(".wing").stop().animate({
        "top" : position
       }, 400)
   }).scroll();
 });

window.addEventListener('scroll', () => {
    let clientHeight = document.getElementById('section1').clientHeight;
	let scrollLocation = document.documentElement.scrollTop;
    let leftWing = document.querySelector('.left_wing');
    let rightWing = document.querySelector('.right_wing');

	if( scrollLocation > clientHeight - 300 ){
        leftWing.style.display = 'block';
        rightWing.style.display = 'block';
	} else {
        leftWing.style.display = 'none';
        rightWing.style.display = 'none';
    }
})

// wing top 버튼
let wingTop = document.querySelector('.right_wing_top');
wingTop.addEventListener('click', function(){
    setTimeout(function (){
        scrollTo(0, 0);
    }, 100);
});


// 모달 닫기
let modal = document.querySelector('#modal');
let modalClose = document.querySelector('.madal_close');

modalClose.addEventListener('click', function(){
    modal.style.display = 'none';
});


// 유튜브 카운터
function youtubeCounter() {
    function numberCounter(target_frame, target_number) {
        this.count = 0; this.diff = 0;
        this.target_count = parseInt(target_number);
        this.target_frame = document.getElementById(target_frame);
        this.timer = null;
        this.counter();
    };
    numberCounter.prototype.counter = function() {
        var self = this;
        this.diff = this.target_count - this.count;
    
        if(this.diff > 0) {
            self.count += Math.ceil(this.diff / 5);
        }
    
        this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        if(this.count < this.target_count) {
            this.timer = setTimeout(function() { self.counter(); }, 20);
        } else {
            clearTimeout(this.timer);
        }
    };
    new numberCounter("counter1", 182000);
    new numberCounter("counter2", 18213993);
    new numberCounter("counter3", 103000);
    new numberCounter("counter4", 4558210);
    new numberCounter("counter5", 68500);
    new numberCounter("counter6", 3482236);
    new numberCounter("counter7", 24086);
    new numberCounter("counter8", 355249);
}
var isVisible = false;

$(window).on('scroll',function() {
        if (checkVisible($('#section2'))&&!isVisible) {
        youtubeCounter();
        isVisible=true;
    }
});
function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height() / 4,
    scrolltop = $(window).scrollTop(),
    y = $(elm).offset().top,
    elementHeight = $(elm).height();   

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}


// 유튜브 탭 메뉴
for(let i = 1; i < 5; i++){
    let s2ytb = document.querySelector('.ytb' + i);
    let s2btn = document.querySelector('.ytb_tab li:nth-child(' + i + ')');

    s2btn.addEventListener('click', ()=>{
        let btnTarget = document.querySelector('.ytb_tab > li.target');
        let ytbTarget = document.querySelector('.s2_container > div.target');

        btnTarget.classList.remove('target');
        s2btn.classList.add('target');
        youtubeCounter()
        ytbTarget.classList.remove('target');
        s2ytb.classList.add('target');
    });
}


// 구글지도
function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: { lat: 37.55978008419305, lng: 126.92317569869374 },
    });

    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            label: locations[i].place,
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
        });
    }
}
const locations = [
    { place: '본사', lat: 37.55978008419305, lng: 126.92317569869374 },
    { place: '지사', lat: 37.5588310131484, lng: 126.92080376395447 },
];


// 푸터팝업창
for(let i = 1; i < 4; i++){
    let popup = document.querySelector('#popup' + i);
    popup.addEventListener('click', function(){
        window.open('/assets/popup/popup' + i +'.html', '팝업창', 'width=800,height=1000');
    })
}