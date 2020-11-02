$(document).ready(function() {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  //   $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);

  //------- Wow JS Initialized --------//
  new WOW().init();

  //------- Go to Top --------//
  //------- Header Scroll Class  js --------//
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
      $("#back-top").addClass("back-top-animation");
    } else {
      $("#header").removeClass("header-scrolled");
      $("#back-top").removeClass("back-top-animation");
    }
  });

  /* ---------------------------------------------
        scroll body to 0px on click
     --------------------------------------------- */
  $("#back-top a").on("click", function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      1000
    );
    return false;
  });

  //------- Niceselect  js --------//

  if (document.getElementById("default-select")) {
    $("select").niceSelect();
  }

  //------- Pre Loader --------//
  $(window).on("load", function() {
    $(".preloader-area")
      .delay(200)
      .fadeOut(500);
  });

  //------- Lightbox  js --------//
  $(".img-gal").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  $(".play-btn").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  //------- Filter  js --------//
  $(window).on("load", function() {
    $(".filters ul li").on("click", function() {
      $(".filters ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $grid.isotope({
        filter: data
      });
    });

    if (document.getElementById("work")) {
      var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer"
        }
      });
    }
  });

  //------- Accordion  js --------//

  jQuery(document).ready(function($) {
    if (document.getElementById("accordion")) {
      var accordion_1 = new Accordion(document.getElementById("accordion"), {
        collapsible: false,
        slideDuration: 500
      });
    }
  });

  //------- Superfist nav menu  js --------//

  $(".nav-menu").superfish({
    animation: {
      opacity: "show"
    },
    speed: 400
  });


  //------- Smooth Scroll  js --------//

  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this)
            .closest("li")
            .addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("ti-menu ti-menu");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  $(document).ready(function() {
    $("html, body").hide();

    if (window.location.hash) {
      setTimeout(function() {
        $("html, body")
          .scrollTop(0)
          .show();

        $("html, body").animate(
          {
            scrollTop: $(window.location.hash).offset().top - 108
          },
          1000
        );
      }, 0);
    } else {
      $("html, body").show();
    }
  });

  //------- Google Map  js --------//

  if (document.getElementById("map")) {
    google.maps.event.addDomListener(window, "load", init);

    function init() {
      var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(40.67, -73.94), // New York
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#e9e9e9"
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 29
              },
              {
                weight: 0.2
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 18
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              },
              {
                lightness: 21
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#dedede"
              },
              {
                lightness: 21
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#ffffff"
              },
              {
                lightness: 16
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                saturation: 36
              },
              {
                color: "#333333"
              },
              {
                lightness: 40
              }
            ]
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#f2f2f2"
              },
              {
                lightness: 19
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#fefefe"
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#fefefe"
              },
              {
                lightness: 17
              },
              {
                weight: 1.2
              }
            ]
          }
        ]
      };
      var mapElement = document.getElementById("map");
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.67, -73.94),
        map: map,
        title: "Snazzy!"
      });
    }
  }

  //------- Mailchimp js --------//

  $(document).ready(function() {
    $("#mc_embed_signup")
      .find("form")
      .ajaxChimp();
  });
});


$(document).ready(function($) {
	$('.popup-open').click(function() {
    disableScrolling()
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
    enableScrolling()
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
      e.stopPropagation();
      enableScrolling()
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
      enableScrolling()
			$(this).fadeOut();					
		}
	});
});

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tabcontent2, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent-wiki");

  tabcontent2 = document.getElementsByClassName("tabcontent-wiki2");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

    for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});

function primitiveWater() {
  biomewater  = document.getElementById('biomewater').value;
  tierwater  = document.getElementById('tierwater').value;
  if(biomewater == "Биом"){
    document.getElementById('totalwater').innerHTML = "Не выбран Biome";
  } else if(tierwater == "Хэтч"){
    document.getElementById('totalwater').innerHTML = "Не выбран Output Hatch";
  } else {
    totalwater = biomewater * tierwater;
    document.getElementById('totalwater').innerHTML = "Ответ: "+ totalwater + " L/s";
  }
}

function elWater() {
  biomewater  = document.getElementById('biomewater').value;
  tierwater  = document.getElementById('tierwater').value;
  if(biomewater == "Биом"){
    document.getElementById('totalwater').innerHTML = "Не выбран Biome";
  } else if(tierwater == "Хэтч"){
    document.getElementById('totalwater').innerHTML = "Не выбран Hatch";
  } else {
    totalwater = (1 << tierwater - 1) * 2 * biomewater;
    document.getElementById('totalwater').innerHTML = "Ответ: "+ totalwater + " L/s";
  }
}

function steamLargeTurbine() {
  flow = document.getElementById('flow').value;
  efficienty = document.getElementById('efficienty').value;
  if(flow == ""){
    document.getElementById('FlowOk').innerHTML = "Отсутсвует Optimal Flow";
    document.getElementById('FlowNotOk').innerHTML = "";
  } else if(efficienty == ""){
    document.getElementById('FlowOk').innerHTML = "Отсутсвует Efficiency";
    document.getElementById('FlowNotOk').innerHTML = "";
  } else {
    totaleuFlowOk = (flow/20)*0.5*(efficienty/100);
    x1 = 1 - Math.abs(((flow/20*1.25) - (flow/20)) / (flow/20));
    x2 = x1 * (flow/20*1.25);
  
    totaleuFlowNotOk = Math.max(1, x2 * efficienty / 200); 
    document.getElementById('FlowOk').innerHTML = "Регулируемый поток: "+ Math.round(totaleuFlowOk) + " EU/t";
    document.getElementById('FlowNotOk').innerHTML = "Нерегулируемый поток: " + Math.round(totaleuFlowNotOk) + " EU/t";
  }
}

function gasLargeTurbine() {
  flow = document.getElementById('flow').value;
  efficienty = document.getElementById('efficienty').value;
  fuelvalue = document.getElementById('fuelvalue').value;
  if(flow == ""){
    document.getElementById('FlowOk').innerHTML = "Отсутсвует Optimal Flow";
    document.getElementById('FlowNotOk').innerHTML = "";
  } else if(efficienty == ""){
    document.getElementById('FlowOk').innerHTML = "Отсутсвует Efficiency";
    document.getElementById('FlowNotOk').innerHTML = "";
  } else if(fuelvalue == ""){
    document.getElementById('FlowOk').innerHTML = "Отсутсвует Fuel Value";
    document.getElementById('FlowNotOk').innerHTML = "";
  } else {
    
    optimalFlow = Math.round(flow / (fuelvalue / 1000));
    totaleuFlowOk = (fuelvalue / 1000) * optimalFlow * efficienty / 100;

    totalFlow = Math.round(optimalFlow * 1.25);
    EuStart = totalFlow * (fuelvalue / 1000);
    eff = 1 - Math.abs((totalFlow - optimalFlow) / optimalFlow);
    totaleuFlowNotOk = (EuStart * eff) * efficienty / 100; 

    document.getElementById('FlowOk').innerHTML = "Регулируемый поток (" + Math.round(optimalFlow) + "L/t): " + Math.round(totaleuFlowOk) + " EU/t";
    document.getElementById('FlowNotOk').innerHTML = "Нерегулируемый поток: " + Math.round(totaleuFlowNotOk) + " EU/t";
  }
}