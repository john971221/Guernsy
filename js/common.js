
$(function(){
    loadNum = $('#loader h2 .load-text').length;
    for(i=0;i<loadNum;i++){
        $('#loader h2 .load-text')[i].animate(
        {filter:'blur('+(10-i)+'px)'},
        {
            duration:1000 + (i*200),
            step: function(){
                 $(this).css({"filter":"blur(2px)"})
            }
        })
    }
});

window.addEventListener('load', function () {
    $('#loader').css({
        "display":"none"
    })
    window.scrollTo(0, 0);
    var index = document.querySelector('#index');
    var shop = document.querySelector('#Shop');
    var About = document.querySelector('#About');
    var Contact = document.querySelector('#Contact');
    var header = document.querySelector('header');
    var section = document.querySelectorAll('main section');

    for (var i = 0; i < section.length; i++) {
        section[i].addEventListener('click', function () {
            if (this.id == "Shop") {
                this.classList.add('active');
                About.classList.remove('active');
                Contact.classList.remove('active');
            } else if (this.id == "About") {
                this.classList.add('active');
                shop.classList.add('active');
                Contact.classList.remove('active');
            } else if (this.id == "Contact") {
                this.classList.add('active');
                shop.classList.add('active');
                About.classList.add('active');
            };

            header.addEventListener('click', function () {
                shop.classList.remove('active');
                About.classList.remove('active');
                Contact.classList.remove('active');
                window.scrollTo(0, 0);
            })
        })

    };
    A = 0;
    /*$('#Shop').on('mousewheel', function (e) {

        B = $('.Content_box').length - 1;
        max = e.originalEvent.deltaY;
        bottom = $('.Content_box').length;
        console.log(bottom);
        Dlimit = $('.Content_box')[0].getBoundingClientRect().y;
        Ulimit = $('.Content_box')[B].getBoundingClientRect().y;

        if (max == -100 && Dlimit < -0) {
            A++;
            $('.Content_box').css({
                "transform": "translateY(" + 30 * A + "px)",
                "transition": ".2s"
            })
        }else if (max == 100 && Ulimit > 0) {
            A--;
            $('.Content_box').css({
                "transform": "translateY(" + 30 * A + "px)",
                "transition": ".2s"
            })
        }
    }); 다루기에 까다로운 조건이었다*/
    
    $('#Shop').on('click', function () {
        $('.Content_box').fadeIn(600);
        $('.Content_box').css({
            "display": "inline-block"
        })
    });
    
    
    Z = 0;
    $('#About').on('mousewheel', function (e) {

        C = $('.Box').length - 1;
        Max = e.originalEvent.deltaY
        dlimit = $('.Box')[0].getBoundingClientRect().y;
        ulimit = $('.Box')[C].getBoundingClientRect().y;

        if (Max == -100 && dlimit < -0) {
            Z++;
            $('.Box').css({
                "transform": "translateY(" + 30 * Z + "px)",
                "transition": ".9s"
            })
        } else if (Max == 100 && ulimit > 0) {
            Z--;
            $('.Box').css({
                "transform": "translateY(" + 30 * Z + "px)",
                "transition": ".9s"
            })
        } else {
            ''
        }
    })
    $('#About').on('click', function () {
        $('.Box').fadeIn(600);
    })

})
