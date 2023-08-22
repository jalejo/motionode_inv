let scene_bbl_delay = 900;
let clock_delay = 800;
let scene_01_ft = true;
let scene_02_ft = true;
let scene_03_ft = true;
let scene_04_ft = true;

$(document).ready(function(){

    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

        onLeave: function (origin, destination, direction) {
       
            if (destination.item.dataset.bgr == "diagonal") { 
                $("#diagonal_colors").fadeIn(250);  

            }else{
                $("#diagonal_colors").fadeOut(250);
            } 
            if (destination.item.dataset.headline == "true") {
                $("#diagonal_colors h3").fadeIn(250);
            }
            else {
                $("#diagonal_colors h3").fadeOut(250);
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
                            scene_02_ft = false;
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
                            scene_03_ft = false;
                            fullpage_api.setAllowScrolling(true);
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
                        $(".hand_icon").addClass("hand_appers");
                    }, 800);

                    /************ ALL HAND MOVE **************/

                    setTimeout(function () {
                        $(".app_request_wrapper section:nth-child(6)").addClass("grab-hover");
                        setTimeout(function () {
                            $(".app_request_wrapper section:nth-child(5)").addClass("grab-hover");
                            setTimeout(function () {
                                $(".app_request_wrapper section:nth-child(4)").addClass("grab-hover");
                                $(".app_request_wrapper section:nth-child(5)").removeClass("grab-hover");
                                setTimeout(function () {
                                    $(".app_request_wrapper section:nth-child(5)").addClass("grab-hold");
                                    setTimeout(function () {
                                        $(".app_request_wrapper").addClass("row-to-top");
                                        setTimeout(function () {
                                            $(".app_request_wrapper section:nth-child(5)").removeClass("grab-hold");
                                        }, 500);
                                    }, 500);
                                }, 500);
                            }, 300);
                        }, 400);
                    }, 800 + 400 );
                    setTimeout(function () {

                        $(".app_request_wrapper section:nth-child(5) div:nth-child(2)").html('June 07, 5:20 PM');
                        $(".app_request_wrapper section:nth-child(5) div:nth-child(3)").html('<img src="/img/develper_01.png">Lauren W.');

                        setTimeout(function () {
                            $(".app_request_wrapper section:nth-child(2) div:nth-child(2)").html('June 12, 9:42 AM');
                            $(".app_request_wrapper section:nth-child(2) div:nth-child(3)").html('<img src="/img/develper_03.png">Steve M.');
                        }, 50);
                        
                        setTimeout(function () {
                            $(".app_request_wrapper section:nth-child(3) div:nth-child(2)").html('June 14, 3:23 PM');
                            $(".app_request_wrapper section:nth-child(3) div:nth-child(3)").html('<img src="/img/develper_02.png">John C.');
                        }, 100);

                        setTimeout(function () {
                            $(".app_request_wrapper section:nth-child(4) div:nth-child(2)").html('June 25, 6:25 PM');
                            $(".app_request_wrapper section:nth-child(4) div:nth-child(3)").html('<img src="/img/develper_02.png">John C.');
                        }, 150);

                        setTimeout(function () {
                            $(".app_request_wrapper section:nth-child(6) div:nth-child(2)").html('June 30, 9:04 AM');
                            $(".app_request_wrapper section:nth-child(6) div:nth-child(3)").html('<img src="/img/develper_03.png">Steve M.');
                        }, 200);

                        setTimeout(function () {
                            $(".team_task img").attr("src","/img/team_task_reorder.png");
                        }, 250);

                        setTimeout(function () {
                            $(".scene_04 .days_wrapper").addClass("clockappers");
                            $(".scene_04 .days_copy p").html("<span>0</span> minutes spent");
                            $(".scene_04 .clock_hours").addClass("animate_clock");
                            $(".scene_04 .clock_minutes").addClass("animate_clock");
                        }, 400);

                        setTimeout(function () {
                            $(".scene_04 .bubble_stakeholder:nth-of-type(2)").addClass("scene4_bbl_appers_2");
                            setTimeout(function () {
                                $(".great_icon").fadeIn(10);
                                setTimeout(function () {
                                    $(".great_icon").fadeOut(10);
                                    scene_04_ft = false;
                                    fullpage_api.setAllowScrolling(true);
                                }, 700);
                            }, 500);
                        }, 1000);
                    }, 4000 );
                }, scene_bbl_delay);
                
            }
            if (destination.item.id == "page_10"){
                $(".sneak_peak_wrapper img:nth-child(1)").addClass("sneak_peak_appers");
                setTimeout(function () {
                    $(".sneak_peak_wrapper img:nth-child(2)").addClass("sneak_peak_appers");
                    setTimeout(function () {
                        $(".sneak_peak_wrapper img:nth-child(3)").addClass("sneak_peak_appers");
                        setTimeout(function () {
                            $(".sneak_peak_wrapper img:nth-child(4)").addClass("sneak_peak_appers");
                        }, 400);
                    }, 400);
                }, 400);
            }

            if (destination.item.id == "page_13"){
                $(".serie_circle:nth-of-type(1)").addClass("circle_grow_up");
                setTimeout(function () {
                    $(".product_dev_add").addClass("addAppers");
                    setTimeout(function () {
                    $(".product_invest").addClass("investAppers");
                        setTimeout(function () {
                            $(".circle_arrow:nth-of-type(1)").addClass("arrow_appers");
                            setTimeout(function () {
                                $(".serie_circle:nth-of-type(2)").addClass("circle_grow_up");
                                setTimeout(function () {
                                    $(".circle_arrow:nth-of-type(2)").addClass("arrow_appers");
                                    setTimeout(function () {
                                        $(".serie_circle:nth-of-type(3)").addClass("circle_grow_up");
                                    }, 350);
                                }, 350);
                            }, 350);
                        }, 450);
                    }, 450);
                }, 250);
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


