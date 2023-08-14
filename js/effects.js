let scene_bbl_delay = 800;
let scene_01_ft = false;
let scene_02_ft = false;

$(document).ready(function(){

    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        /*
        beforeLeave: function (origin, destination, direction, trigger) {
            if (origin.item.id == "page_4") {
                $(".can-cocktails").addClass("can-cocktails-dropdown");
            }
        },
        */
        onLeave: function (origin, destination, direction) {
            if (destination.item.dataset.bgr == "diagonal") { 
                $("#diagonal_colors").fadeIn(250);  
            }else{
                $("#diagonal_colors").fadeOut(250);
            } 
        },
        afterLoad: function (origin, destination, direction) {
            if (destination.item.dataset.scene == "scene_01") {
                if( scene_01_ft ){
                    fullpage_api.setAllowScrolling(false);
                }
                $(".bubble_stakeholder:nth-of-type(1)").addClass("scene1_bbl_appers_1")
                setTimeout(function () {
                    
                    $(".scene_01 .bubble_development:nth-of-type(1)").addClass("scene1_bbl_appers_2");
                    setTimeout(function () {
                        $(".scene_01 .bubble_stakeholder.scene1_bbl_appers_1").addClass("bbl01_readed");
                        $(".scene_01 .bubble_stakeholder:nth-of-type(2)").addClass("scene1_bbl_appers_3");
                        setTimeout(function () {
                            $(".scene_01 .bubble_development:nth-of-type(2)").addClass("scene1_bbl_appers_4");
                            setTimeout(function () {
                                $(".scene_01 .bubble_stakeholder:nth-of-type(3)").addClass("scene1_bbl_appers_5");
                                setTimeout(function () {
                                    scene_01_ft = false;
                                    fullpage_api.setAllowScrolling(true);
                                }, scene_bbl_delay);
                            }, scene_bbl_delay);
                        }, scene_bbl_delay);
                    }, scene_bbl_delay);
                }, scene_bbl_delay);
            }
            if (destination.item.dataset.scene == "scene_02") {
                if( scene_02_ft ){
                    fullpage_api.setAllowScrolling(false);
                }
                
                setTimeout(function () {
                    
                    $(".scene_02 .urgent_wrapper").addClass("urgent_wrapper_appers");
                    setTimeout(function () {
                        $(".scene_02 .bubble_stakeholder").addClass("scene2_bblStack_appers");
                        setTimeout(function () {
                            $(".scene_02 .bubble_development").addClass("scene2_bblDv_appers");
                        }, scene_bbl_delay);
                    }, scene_bbl_delay);
                }, scene_bbl_delay);
            }
        }
    });

/*
    $(document).on("wheel", function(event) {
        console.log("....." );
        fullpage_api.setAllowScrolling(true);
    });
*/

});


