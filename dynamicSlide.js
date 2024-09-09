var SliceIndex = 0;

function slideShow(interval) {
    if (interval == undefined) {
        interval = 3000;
    }
    setInterval(function () {        
        var i;
        var x = document.getElementsByClassName("slidevalue1");  //slide1에 대한 dom 참조
        var y = document.getElementsByClassName("slidevalue2");
        var z = document.getElementsByClassName("slidevalue3");
        var k = document.getElementsByClassName("slidevalue4");
        var m = document.getElementsByClassName("slidevalue5");
        var n = document.getElementsByClassName("slidevalue0");

        // var y = document.getElementsByClassName("textsample")
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
        z[i].style.display = "none";
        k[i].style.display = "none";
        m[i].style.display = "none";
        n[i].style.display = "none";
        //처음에 전부 display를 none으로 한다.
        }
        SliceIndex++;
        if (SliceIndex > x.length) {
            SliceIndex = 1;  //인덱스가 초과되면 1로 변경
        }   
        x[SliceIndex-1].style.display = "block";  //해당 인덱스는 block으로
        y[SliceIndex-1].style.display = "block";
        z[SliceIndex-1].style.display = "block";
        k[SliceIndex-1].style.display = "block";
        m[SliceIndex-1].style.display = "block";
        n[SliceIndex-1].style.display = "block";
    }, interval);
    // setTimeout(slideShow, 3000);   //함수를 4초마다 호출    
}