let scene_bbl_delay = 900;
let clock_delay = 800;
let scene_01_ft = false;
let scene_02_ft = false;
let scene_03_ft = false;
let scene_04_ft = false;

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
                $(".scene_01 .bubble_stakeholder:nth-of-type(1)").addClass("scene1_bbl_appers_1")
                setTimeout(function () {
                    
                    $(".scene_01 .bubble_development:nth-of-type(1)").addClass("scene1_bbl_appers_2");
                    setTimeout(function () {

                        $(".scene_01 .days_wrapper").addClass("clockappers");

                        $(".scene_01 .days_copy p").html("<span>2</span> Days");

                        $(".scene_01 .clock_hours").addClass("animate_clock");
                        $(".scene_01 .clock_minutes").addClass("animate_clock");

                        setTimeout(function () {
                            $(".scene_01 .bubble_stakeholder.scene1_bbl_appers_1").addClass("bbl01_readed");
                            $(".scene_01 .bubble_stakeholder:nth-of-type(2)").addClass("scene1_bbl_appers_3");
                            setTimeout(function () {

                                $(".scene_01 .bubble_development:nth-of-type(2)").addClass("scene1_bbl_appers_4");

                                $(".scene_01 .clock_hours").removeClass("animate_clock");
                                $(".scene_01 .clock_minutes").removeClass("animate_clock");

                                setTimeout(function () {

                                    $(".scene_01 .days_wrapper").addClass("clockpulse");
                                    $(".scene_01 .days_copy p").html("<span>3</span> Days");
                                    $(".scene_01 .clock_hours").addClass("animate_clock");
                                    $(".scene_01 .clock_minutes").addClass("animate_clock");

                                    setTimeout(function () {
                                        $(".scene_01 .bubble_stakeholder:nth-of-type(3)").addClass("scene1_bbl_appers_5");

                                        $(".scene_01 .days_wrapper").removeClass("clockpulse");
                                        $(".scene_01 .clock_hours").removeClass("animate_clock");
                                        $(".scene_01 .clock_minutes").removeClass("animate_clock");
                                        setTimeout(function () {
                                            $(".scene_01 .days_wrapper").addClass("clockpulse");
                                            $(".scene_01 .clock_hours").addClass("animate_clock");
                                            $(".scene_01 .clock_minutes").addClass("animate_clock");
                                            $(".scene_01 .days_copy p").html("<span>+3</span> Days spent coordinating");
                                            scene_01_ft = false;
                                            fullpage_api.setAllowScrolling(true);
                                        }, scene_bbl_delay);
                                    }, scene_bbl_delay);
                                }, scene_bbl_delay);

                            }, scene_bbl_delay);
                        }, clock_delay);
                    }, scene_bbl_delay);
                }, scene_bbl_delay);
            }
            if (destination.item.dataset.scene == "scene_02") {
                if( scene_02_ft ){
                    fullpage_api.setAllowScrolling(false);
                }
                $(".scene_02 .urgent_wrapper").addClass("urgent_wrapper_appers");
                setTimeout(function () {
                    $(".scene_02 .exclamation_wrapper").addClass("exclamation_appers");  
                    setTimeout(function () {
                        $(".scene_02 .bubble_stakeholder").addClass("scene2_bblStack_appers");
                        $(".client_expression").fadeIn(1000);
                        setTimeout(function () {
                            $(".scene_02 .bubble_development").addClass("scene2_bblDv_appers");
                            fullpage_api.setAllowScrolling(true);
                        }, scene_bbl_delay);
                    }, scene_bbl_delay);
               
                }, scene_bbl_delay);
            }
            if (destination.item.dataset.scene == "scene_03") {
                if( scene_03_ft ){
                    fullpage_api.setAllowScrolling(false);
                }
                $(".scene_03 .bubble_stakeholder:nth-of-type(1)").addClass("scene1_bbl_appers_1");
                setTimeout(function () {
                    $(".scene_03 .bubble_development:nth-of-type(1)").addClass("scene1_bbl_appers_2");
                    setTimeout(function () {
                        $(".scene_03 .singleLabel_stakeholder").fadeIn();
                        setTimeout(function () {
                            $(".scene_03 .days_wrapper").addClass("clockappers");
                            $(".scene_03 .days_copy p").html("Time saved: <span>90%</span>");
                            $(".scene_03 .clock_hours").addClass("animate_clock");
                            $(".scene_03 .clock_minutes").addClass("animate_clock");
                        }, scene_bbl_delay);
                    }, scene_bbl_delay);
                }, scene_bbl_delay);
            }
            if (destination.item.dataset.scene == "scene_04") {
                if( scene_04_ft ){
                    fullpage_api.setAllowScrolling(false);
                }
                $(".app_screen").addClass("app_screen_appers");
                
                setTimeout(function () {
                    $(".team_task").addClass("team_task_appers");
                }, 300);

                setTimeout(function () {
                    $(".scene_04 .bubble_stakeholder:nth-of-type(1)").addClass("scene1_bbl_appers_1");
                    $(".great_icon").html("<img src='/img/confetti-ball.webp'>");
                    
                    setTimeout(function () {
                        $(".great_icon").addClass("great_icon_appers");
                        setTimeout(function () {
                            $(".great_icon").fadeOut(10);
                        }, 1000);
                    }, 1000);

                }, scene_bbl_delay);
                
            }
        }
    });

/*
    $(document).on("wheel", function(event) {
        console.log("....." );
        fullpage_api.setAllowScrolling(true);
    });


    $(".scene_01 .days_wrapper").addClass("clockappers");

    $(".days_copy p").html("<span>2</span> Days");

    $(".clock_hours").addClass("animate_clock");
    $(".clock_minutes").addClass("animate_clock");



*/

});


