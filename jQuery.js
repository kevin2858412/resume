  $(document).ready(function(){
    $("a").hover(function(){
        $(this).css("color", "rgb(128, 128, 128)");}
        ,function(){
            $(this).css("color", "rgb(0,0, 0");
        })
    
    $("#to_about").click(function(){
        // 取得目標的座標 返回到section.one的尾端
        var about_top =  $("section.one").outerHeight();
        $("html,body").animate({scrollTop: about_top} , 650);
    })

    $("#to_skill").click(function(){
        var skill_top =  $("section.three").offset().top;
        $("html,body").animate({scrollTop: skill_top - 70} , 650);
    })

    $("#to_contact").click(function(){
        var contact_top =  $("section.four").offset().top;
        $("html,body").animate({scrollTop: contact_top} , 650);
    })

    $(window).scroll(function(){
        var bottom_of_section_two = $("section.two").offset().top + $("section.two").outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var top_of_section_three = $("section.three").offset().top + $("section.three").outerHeight();
        //浮出文字
        if(bottom_of_window >= bottom_of_section_two && bottom_of_window < top_of_section_three){
            $("div.intro").animate({'opacity' : '1'} , 650)
        }
    })
    //旋轉圖片
    $("div.img").rotate({
        bind:{
            mouseover: function(){
                $(this).rotate({animateTo:360})
            },
            mouseout : function(){
                $(this).rotate({animateTo:0})
            }
        }
    });
})