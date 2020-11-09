$.ajax({
    type: 'GET',
    url: '../data.json', //이동할 부분(데이터 얻어올 곳) //Spring에서는 controller로 연결
    datatype: 'json',
    success: function (json) { //data
        //alert("ajax success"); //꼭 확인해야 한다. 

        //alert("json[0] version : " +json[0].version); //json에 있는 data 를 가져오는 것. 제일 첫 번째 데이터
        // alert("json[0] codename : " +json[0].codename);//키 값으로 값을 불러 오는 것!!!! version , codename 은 key값이다.

        //p태그에 올리기
        //    $("#demo").text(json[0].version + "  ");
        //    $("#demo").append(json[0].codename + "<br><br>");
        var content = '';
        var n = -1;
        //for문으로 전체 출력
        for (i = 0; i < json.items.length; i++) {

            content += "<li class='product'>";
            content += "<img class='imgD point_cur' src='" + json.items[i].src + "'>";
            content += "<h3 class='name point_cur'>" + json.items[i].name + "</h3>";
            content += "<p class='price'>" + json.items[i].price + "</p>";
            content += "</li>";

            /*li 6개당 한개의 컨텐츠박스로 묶는 과정
            if ((i % 5 == 0 && i != 0) || i == json.items.length - 1) {
                $('#Shop .container').append('<div class=Content_box><ul>' + content + '</ul></div>');
                content = '';
            };
            */


        };
        $('#Shop .container .Content_box ul').append(content);
        $('.product .imgD').on({
            mouseenter: function () {
                call = $(this).parent('.product').index();
                $(this).attr("src", json.items[call].preview);
            },
            mouseleave: function () {
                $(this).attr("src", json.items[call].src);
            }
        });


        $('.product').on({
            click: function () {
                $('.pop_up').css({
                    "display": "inline-block",

                });


                call = $(this).index();
                smallDet = json.items[call].smallDetail;
                detImg = json.items[call].detailImg;
                console.log(smallDet[0])
                $('.small_banner').attr("src", smallDet[0]);


                for (i = 0; i < smallDet.length; i++) {
                    smallBoYs = "<li class='small_boys'><img src='" + smallDet[i] + "'></li>"
                    $('.pop_up .small_box ul').append(smallBoYs);
                };


                $('.info_box h2').text(json.items[call].name);
                $('.info_box .det_text').text(json.items[call].detail);
                $('.info_box .price').text(json.items[call].price);


                for (i = 0; i < detImg.length; i++) {
                    detBoYs = "<li class='detail_img'><img src='" + detImg[i] + "'></li>"
                    $('.pop_up .detImg').append(detBoYs);
                };



                $('.small_boys img').on({
                    mouseenter: function () {
                        $('.small_banner').attr("src", $(this).attr('src'))
                    }
                });

                $('.back').on('click', function () {
                    smallBoYs = '';
                    detBoYs = '';
                    $('.pop_up .small_box ul').empty();

                    $('.pop_up').css({
                        "display": "none"
                    });
                });
            }
        });

        var soaked = '';
        $('#Shop nav ul li a').on({
            'click': function () {
                
                kind = $(this).text();
                
                for (i = 0; i < json.items.length; i++) {
                    if (kind == json.items[i].category) {
                        $('.Content_box ul').empty();
                        soaked += "<li class='product'>";
                        soaked += "<img class='imgD point_cur' src='" + json.items[i].src + "'>";
                        soaked += "<h3 class='name point_cur'>" + json.items[i].name + "</h3>";
                        soaked += "<p class='price'>" + json.items[i].price + "</p>";
                        soaked += "</li>";
                    }
                    
                     
                }
                
                console.log(soaked)
               $('.Content_box ul').append(soaked);
                soaked='';
            }
        })
        
    },
    error: function () {
        alert("ajax error");
    }


});
