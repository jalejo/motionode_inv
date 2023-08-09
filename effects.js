var delay = 750; //milliseconds
var timeoutId;
var animationIsFinished = false;
var StateA, StateB, uid;
var showdownCont = 0;


window.onload = function() {
    $("#allLoader").fadeOut();
}

$(document).ready(function(){
    initSocial();
    randomQ();

    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();
    var tl3 = new TimelineMax();
    var tl4 = new TimelineMax();
    
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        responsiveWidth: 1,
        responsiveHeight: 1,
        responsiveSlides: true,
        verticalCentered: true,
        scrollingSpeed: 2500,
        normalScrollElements: '.options,.select',
        
        onLeave: function(origin, destination, direction){

                if(destination.index == 0){
                    $(".sidemenu").removeClass("showMenu");
                }

               if(destination.index == 1){
                    $(".line_pause").fadeOut();
                    $(".bttn_back").fadeOut();
                    $(".line_back").fadeOut();
                    $(".line_stop").fadeOut(); 
                   
                    $(".sidemenu").addClass("showMenu");
                   
                   tl2.to(".Welcome-Txt-Content", 2.5, { opacity:"1", ease: Expo.easeout}, .85)
                      .to(".linesBgr", 2.5, { opacity:"1", ease: Expo.easeout}, .85)
                      .to(".hulu-logo", 2.5, { opacity:"1", ease: Expo.easeout}, .85)
                      .to(".share-main", 2.5, { opacity:"1", ease: Expo.easeout}, .85)
                      .to(".menubtn", 2.5, { opacity:"1", ease: Expo.easeout}, .85)
  
               }
                if(destination.index == 2){
                    $(".sidemenu ul li:nth-child(1)").addClass("navActive");
                    
                    //$(".map-welcome-cont .map-welcome img").fadeIn();
                    
                    $(".info-bubble-ds p").html("We created new welcome signs based on data – not what a guy 150 years ago was imagining.");
                }
            
            
                if(destination.index == 3){
                    $(".scrollDown").fadeOut();
                    $(".sidemenu ul li:nth-child(2)").addClass("navActive");
                    
                    $(".map-welcome-cont .map-welcome img").fadeOut();
                    $(".map-showdown .imgMap2A").css({opacity:1});
                    //$(".map-showdown .imgMap2B").css({opacity:1});
                    
                    $(".info-bubble-ds p").html("States that watch certain shows might behave a certain way. In a state vs state battle, see who would come out on top. If your state isn’t featured, check back soon as new viewing results pour in constantly. ");
                    
                    $(".cornerSect").fadeIn();
                    
                    //$(".map-welcome-cont").fadeOut(100);
                    
                }
            
                if(origin.index == 2){
                    $(".sidemenu ul li:nth-child(1)").removeClass("navActive");
                    tl4.to(".pines", .5, { opacity:0, ease: Expo.easeout})
                }
            
                if(origin.index == 3){
                    $(".sidemenu ul li:nth-child(2)").removeClass("navActive");
                    $(".map-showdown .imgMap2A").css({opacity:0});
                    $(".map-showdown .imgMap2B").css({opacity:0});
                }
            
            
                if(destination.index < 2){
                    $(".mainBgr").removeClass("hideBgrMap");
                    $(".infoBtn").fadeOut();
                }
                if(destination.index < 3){
                    $(".scrollDown").fadeIn();
                }
            
                if(destination.index >= 2){
                    $(".mainBgr").addClass("hideBgrMap");
                    $(".infoBtn").fadeIn();
                }
   
          
        },
        afterLoad: function(origin, destination, direction){
            
            if(destination.index == 0){
                $(".line_pause").fadeIn();
                $(".bttn_back").fadeIn();
                $(".line_back").fadeIn();
                $(".line_stop").fadeIn(); 
            }
            
            if(destination.index == 2){

                tl3.to(".pines", .5, { opacity:1, ease: Expo.easeout})
                
                showInfo();
                $(".map-welcome-cont .map-welcome img").fadeIn();
            }
            
            if(destination.index == 3){
                showInfo();
                $(".map-showdown .imgMap2B").css({opacity:1});
               
            }
        }
    });
    
});

function nextPage(){
    $.fn.fullpage.moveSectionDown();
}

function showlbox(city){
    var tlBox = new TimelineMax();
    
    switch (city) {
        case 'atlanta': cityImg = "Atlanta"; cityText = "There’s a frustrated romantic beneath every criminal."; cityName = "Atlanta";
            ga('send', 'event', 'Map', 'View', 'Atlanta');
        break;
        case 'boston': cityImg = "Boston"; cityText = "We officially lay claim to the seventh borough."; cityName = "Boston";
            ga('send', 'event', 'Map', 'View', 'Boston');
        break;
        case 'anchorage': cityImg = "Anchorage"; cityText = "Extreme temperatures just aren’t enough."; cityName = "Anchorage";
            ga('send', 'event', 'Map', 'View', 'Anchorage');
        break;
        case 'charlotte': cityImg = "Charlotte"; cityText = "All in favor say aye."; cityName = "Charlotte";
            ga('send', 'event', 'Map', 'View', 'Charlotte');
        break;
        case 'chicago': cityImg = "Chicago"; cityText = "The come up is really real."; cityName = "Chicago";
            ga('send', 'event', 'Map', 'View', 'Chicago');
        break;
        /******/    
        case 'dallas': cityImg = "Dallas"; cityText = "But we might love a certain football team more."; cityName = "Dallas";
            ga('send', 'event', 'Map', 'View', 'Dallas');
        break;
        case 'detroit': cityImg = "Detroit"; cityText = "Nashville has nothing on us."; cityName = "Detroit";
            ga('send', 'event', 'Map', 'View', 'Detroit');
        break;
        case 'houston': cityImg = "Houston"; cityText = "The criminal underworld is the final, final frontier."; cityName = "Houston";
            ga('send', 'event', 'Map', 'View', 'Houston');
        break;
        case 'indianapolis': cityImg = "Indianapolis"; cityText = "It’s kind of unfair considering he has no wait time."; cityName = "Indianapolis";
            ga('send', 'event', 'Map', 'View', 'Indianapolis');
        break;
        case 'ithaca': cityImg = "Ithaca"; cityText = "We like to keep our distance."; cityName = "Ithaca";
            ga('send', 'event', 'Map', 'View', 'Ithaca');
        break;
        /******/  
        case 'las_vegas': cityImg = "Las_Vegas"; cityText = "There’s a reason Area 51 had runners."; cityName = "Las Vegas";
            ga('send', 'event', 'Map', 'View', 'Las Vegas');
        break;
        case 'los_angeles': cityImg = "Los_Angeles"; cityText = "The dose of REAL drama helps."; cityName = "Los Angeles";
            ga('send', 'event', 'Map', 'View', 'Los Angeles');
        break;
        case 'milwaukee': cityImg = "Milwaukee"; cityText = "It’s a cathartic counterpoint to all this Midwestern nice."; cityName = "Milwaukee";
            ga('send', 'event', 'Map', 'View', 'Milwaukee');
        break;
        case 'minneapolis': cityImg = "Minneapolis"; cityText = "We’re sure Lil is cool with that."; cityName = "Minneapolis";
            ga('send', 'event', 'Map', 'View', 'Minneapolis');
        break;
        case 'orlando': cityImg = "Orlando"; cityText = "Living vicariously works in both directions."; cityName = "Orlando";
            ga('send', 'event', 'Map', 'View', 'Orlando');
        break;
        /******/ 
        case 'philadelphia': cityImg = "Philadelphia"; cityText = "There’s love, then there’s what you love to watch."; cityName = "Philadelphia";
            ga('send', 'event', 'Map', 'View', 'Philadelphia');
        break;
        case 'phoenix': cityImg = "Phoenix"; cityText = "What else would we treat with all this aloe?"; cityName = "Phoenix";
            ga('send', 'event', 'Map', 'View', 'Phoenix');
        break;
        case 'portland': cityImg = "Portland"; cityText = "Maybe it’s time for a collab?"; cityName = "Portland";
            ga('send', 'event', 'Map', 'View', 'Portland');
        break;
        case 'san_francisco': cityImg = "San_Francisco"; cityText = "Your SO leaves, and another one arrives. Just another day in SF."; cityName = "San Francisco";
            ga('send', 'event', 'Map', 'View', 'San Francisco');
        break;
        case 'washington': cityImg = "Washington_DC"; cityText = "Maybe we need to add a “Do not try this at home” disclaimer."; cityName = "Washington DC";
            ga('send', 'event', 'Map', 'View', 'Washington DC');
        break;
    }
    
    var newStr = cityText.replace(/#/g, '%23'); //#HuluReplay
    encodeDomain ="https%3A%2F%2Fwww%2Ehulureplay%2Ecom%2Fwelcome%2F"+city+"%2Ehtml";
    archDTw = "https://twitter.com/intent/tweet?hashtags=HuluReplay&text="+encodeURI(cityText)+"&url="+encodeDomain;
    
    $(".shareImg img").attr("src","img/welcome-box/Welcome_Signs_"+cityImg+".png");
    $(".shareTxt p.copytop").text(cityText);
    $("#lbox-welcome").fadeIn();
    $("#lbox-welcome .downloadLink").attr("href","http://hulureplay.com/img/welcome-box-download/Welcome_Signs_"+cityImg+".png");
    
    fbShare = "https://www.facebook.com/sharer/sharer.php?u=https%3A//www.hulureplay.com/welcome-"+city+".html";

    $("#lbox-welcome .fbLink").attr("OnClick","window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=no,width=600,height=250'); return false;");
    $("#lbox-welcome .fbLink").attr("href","https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww%2Ehulureplay%2Ecom%2Fwelcome%2F"+city+"%2Ehtml");
    
    $("#lbox-welcome .twLink").attr("OnClick","window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=no,width=600,height=250'); return false;");
    $("#lbox-welcome .twLink").attr("href",archDTw);
    
}

function hidlbox(boxToClose){
    $("#lbox-"+boxToClose).fadeOut();
    
    setTimeout(function(){ 
        $(".shareImg img").attr("src","");
        $(".shareTxt p").text(""); 
    }, 500);
    
}

function goTo(indx){
    fullpage_api.moveTo(indx);
    $(".sidemenu").removeClass("active");
    $(".menubtn").removeClass("active");
}

var infoOn = 0;

function showInfo(){
    if( infoOn == 0){
        $(".infoBtn").addClass("activeInfo");
        $(".overlayInfo").addClass("activeOverlay");
        infoOn = 1;
    }
    else{
        $(".infoBtn").removeClass("activeInfo");
        $(".overlayInfo").removeClass("activeOverlay");
        infoOn = 0;
    }
    
}

function closeFastInfo(){
    $(".infoBtn").removeClass("activeInfo");
    $(".overlayInfo").removeClass("activeOverlay");
    infoOn = 0;
}

function playsound(n){

    switch(n){
        case 'pause': audioPause.play();
        break;
        case 'skip': audioSkip.play();
        break;
        case 'stop': audioStop.play();
        break;
    }
    
    ga('send', 'event', 'Interaction', 'Action', 'Sound Played');
}

function shareTwitter(){
    
    var shareTwTxt = "See what the country streamed the most on Hulu in 2019. %23HuluReplay"; 
    var encodeDomain ="https%3A%2F%2Fhulureplay.com";
    // var encodeDomain ="https%3A%2F%2Fwww%2Ehulureplay%2Ecom%2F";
    
    archDTw="https://twitter.com/intent/tweet?original_referer="+encodeDomain+"%2Fshare%2F&amp;ref_src=twsrc%5Etfw&amp;text="+shareTwTxt+";tw_p=tweetbutton&amp;url="+encodeDomain;

    window.open(archDTw,'share','toolbar=0,status=0,width=700,height=500');
    
    ga('send', 'event', 'Shares', 'Share', 'Twitter Share');
}

function shareFacebook(){
    string = "See what the country streamed the most on Hulu in 2019. %23HuluReplay";
    //archDFb = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.hulureplay.com%2F&name="+string; 
    archDFb = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhulureplay.com&name="+string; 
    window.open(archDFb,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=no,width=600,height=250'); return false;
    
    ga('send', 'event', 'Shares', 'Share', 'Facebook Share');
}

function copyLink(){
    
   $(".linkMsg").fadeIn();    
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = "https://www.hulureplay.com";
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
    
    setTimeout(function(){ 
        $(".linkMsg").fadeOut();
    }, 1000);

    ga('send', 'event', 'Shares', 'Share', 'Copy Link');
}

var position = "r";
var current = 'L';

function mobileMap(position){ 
    
    var tl5 = new TimelineMax();
    
    if( position == "L"){
        $(".text-btn").attr("ontouchstart","mobileMap('R')");
                            
        tl5.to(".l-btn img", .5, { opacity:"0", ease: Expo.easeout})
           .to(".usa-map-cont", .5, { right:"-100%", ease: Expo.easeout})
           .to(".r-btn img", .5, { opacity:"1", ease: Expo.easeout})
        
    } else if( position == "R"){
        
        $(".text-btn").attr("ontouchstart","mobileMap('L')");
        
        tl5.to(".r-btn img", .5, { opacity:"0", ease: Expo.easeout})
           .to(".usa-map-cont", .5, { right:"0%", ease: Expo.easeout})
           .to(".l-btn img", .5, { opacity:"1", ease: Expo.easeout})
    }
    
}

function initSocial(){
    
    encodeDomain2 ="https%3A%2F%2Fhulureplay.com";

    archDTw2 = "https://twitter.com/intent/tweet?hashtags=HuluReplay&text="+encodeURI("See what the country streamed the most on Hulu in 2019.")+"&url="+encodeURI(encodeDomain2);
    
    fbShare2 = "https://www.facebook.com/sharer/sharer.php?u=https%3A//www.hulureplay.com.html";

    $(".FBSocial").attr("OnClick","window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=no,width=600,height=250'); return false;");
    $(".FBSocial").attr("href","https://www.facebook.com/sharer/sharer.php?u="+encodeURI(encodeDomain2));
    
    $(".TwSocial").attr("OnClick","window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=no,width=600,height=250'); return false;");
    $(".TwSocial").attr("href",archDTw2);
    
}

var genre;
var questionTxt;

var tl9 = new TimelineMax();
tl9.addLabel("spin", 3);
tl9.to(".randomBtn", 2, {rotation:"360"}, "spin");
 

function randomQ(){
    
    tl9.play("spin");
    
    $.getJSON( "js/questions.json", function( json )
    {        
      var datos = json.questions;
      var randomNum = Math.floor((Math.random() * 12) + 0);
      genre = datos[randomNum].g;
      questionTxt = datos[randomNum].q;
    
      $("#randomQuestion span").fadeOut(750);    
      $(".map-showdown .imgMap2B").fadeOut();
        
        setTimeout(function(){
            $("#randomQuestion span").html(questionTxt); 
            $(".map-showdown .imgMap2B").attr("src","img/showdown_maps/"+genre+".png"); 
        }, 755);    
        setTimeout(function(){
            $("#randomQuestion span").fadeIn(1200);
            $(".map-showdown .imgMap2B").fadeIn();
        }, 760); 
      
      fillSelect();

      if (StateA != 'SELECT STATE' && StateB != 'SELECT STATE') {  
            if (stateA != null && StateB != null)
                getShowdown();
        }           
      

    });
    
}

function fillSelect(){

    //$(".map-showdown .imgMap2A").css({opacity:1});
    //$(".map-showdown .imgMap2B").css({opacity:0});
    
    var post1 = $.post("https://hulureplay.com/map2/get_slist.php", {gender:genre, state:"s1" }, function(data, status){
        $('#stateA select').html("<option>SELECT STATE</option>");
        
        for(var i in data.stateList){
            $('#stateA select').append("<option value='"+data.stateList[i].s1+"'>"+data.stateList[i].s1+"</option>");
        }
    });
    var post2 = $.post("https://hulureplay.com/map2/get_slist.php", {gender:genre, state:"s2" }, function(data, status){
        $('#stateB select').html("<option>SELECT STATE</option>");
        
        for(var i in data.stateList){
            $('#stateB select').append("<option value='"+data.stateList[i].s2+"'>"+data.stateList[i].s2+"</option>");
        }

    });

    $.when(post1, post2,).done(function (finishp1, finishp2) {
    //each of the parameter is an array
    //$('select').remove();
    updateSelect();
});
}

$('#stateA select').on('change', function() {
    
    selectFunctionA(this.value);
});

function selectFunctionA(newVal) {
    StateA = newVal;

    $( "#stateB" ).find('li').removeClass('o-hidden');
    if (newVal != 'SELECT STATE') {
        $( "#stateB" ).find('li[rel="' + StateA + '"]').addClass('o-hidden');
    }

    if (StateA == 'SELECT STATE' || StateB == 'SELECT STATE') {
        $(".pines2").css({"background-image":""});
        $(".pines2").removeClass("showDownOn");
        $(".pines2").removeClass("showDownOn");
        $(".cornerSect p").html("");
    }
}

$('#stateB select').on('change', function() {
    selectFunctionB(this.value);
    
    //<div class="shareImgShow"> <img src=""> </div>
});

function selectFunctionB (newVal) {
    StateB = newVal;
    $( "#stateA" ).find('li').removeClass('o-hidden');
    if (newVal != 'SELECT STATE') {
        $( "#stateA" ).find('li[rel="' + newVal + '"]').addClass('o-hidden');
    } 

    if (StateA == 'SELECT STATE' || StateB == 'SELECT STATE') {
        $(".pines2").css({"background-image":""});
        $(".pines2").removeClass("showDownOn");
        $(".pines2").removeClass("showDownOn");
        $(".cornerSect p").html("");
    }
    
    showdownCont++;

 
    if(StateB == StateA){ console.log("A & B the same");
        $('#stateB select option[value="0"]').attr("selected", "selected");
    }
    else{ 

        if (StateA != 'SELECT STATE' && StateB != 'SELECT STATE') {  
            if (stateA != null && StateB != null)
                getShowdown();
        }        
    }
}
var loser;

function getShowdown(){
    
        if(showdownCont >= 1){
            $("div#randomQuestion h5").fadeIn();
        }
    
        if(showdownCont > 0){ 
            
        $(".pines2").css({"background-image":""});
        $(".pines2").removeClass("showDownOn");
        $(".pines2").removeClass("showDownOn");

        $.post("https://hulureplay.com/map2/get_uid.php", {cat: genre, s1: StateA, s2: StateB}, function(data, status){

            uid = data.uid; 
            winner = data.winner;
            if(winner != StateA) loser = StateA;
            else if (winner != StateB) loser = StateB;
        });
        
        //$(".map-showdown .imgMap2A").css({opacity:0});


        setTimeout(function(){ 
            $("#lbox-showdown").fadeIn();
        }, 3000);

        setTimeout(function(){
            console.log(winner);
            $("#pin2-"+winner.replace(/\s/g, '')).css({"background-image":"url(img/ico-winner.png)"});
            
            setTimeout(function(){
                $("#pin2-"+StateA.replace(/\s/g, '')).addClass("showDownOn");
                $("#pin2-"+StateB.replace(/\s/g, '')).addClass("showDownOn");
            }, 750); 
            
            $("#lbox-showdown .shareImgShow img").attr("src","map2/img/site/"+uid+".jpeg");

            $("#lbox-showdown .downloadLink").attr("href","https://hulureplay.com/map2/img/site/"+uid+".jpeg");

            // encodeDomain ="https%3A%2F%2Fwww%2Ehulureplay%2Ecom%2Fmap2%2Fsharing%2F"+uid+"%2Ehtml";
            encodeDomain ="https%3A%2F%2Fhulureplay.com%2Fmap2%2Fsharing%2F"+uid+"%2Ehtml";
            archDTw = "https://twitter.com/intent/tweet?hashtags=HuluReplay&text="+encodeURI(questionTxt)+"&url="+encodeDomain;

            $("#lbox-showdown .fbLink").attr("OnClick","window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=no,width=600,height=250'); return false;");
            $("#lbox-showdown .fbLink").attr("href","https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhulureplay.com%2Fmap2%2Fsharing%2F"+uid+"%2Ehtml");

            $("#lbox-showdown .twLink").attr("OnClick","window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=no,width=600,height=250'); return false;");
            $("#lbox-showdown .twLink").attr("href",archDTw);
            
            $(".cornerSect p").html("Because "+winner+" watched more "+genre+" than "+loser+" #HuluReplay");
        
        }, 1000);
    }
}

/*
$(function(){
    $('#states_a').CustomSelect({visRows:5, search:true, modifier: 'mod'});
});
*/
// MENU INTERACTIVO
$(".menubtn").click(function(){
    $(".sidemenu").toggleClass("active");
    $(".menubtn").toggleClass("active");
  });





    $('select').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        if ($this.attr('id') == "states_a") {
            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
                selectFunctionA($this.val());
            });
        } else {
            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
                selectFunctionB($this.val());
            });
        }

        $('#stateA select').click(function (e) {
            StateA = this.value;

        });

        $('#stateB select').click(function (e) {
            });
        

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });



function updateSelect() {
    $('.options').remove();
    $('select').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;
        var $styledSelect = $this.next('div.styledSelect');

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        if ($this.attr('id') == "states_a") {
            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
                selectFunctionA($this.val());
            });
        } else {
            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
                selectFunctionB($this.val());
            });
        }

        $('#stateA select').click(function (e) {
            StateA = this.value;
        });

        $('#stateB select').click(function (e) {
            });
        

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });



    });

    if (StateA != 'SELECT STATE') {
        $( "#stateB" ).find('li[rel="' + StateA + '"]').addClass('o-hidden');
    }

    if (StateB != 'SELECT STATE') {
        $( "#stateA" ).find('li[rel="' + StateB + '"]').addClass('o-hidden');
    }
}