$(document).ready(function(){  
    $('.reviews-list_link').click(function () {
      $('.popup-bg, .popup-content').addClass('show');
      $('body').addClass('hidden');
    })
    $('.popup-content').click(function (event) {
      var target = $(event.target);
      if (!target.is('.popup-intro') && !target.parent().is('.popup-text') && !target.parent().is('.popup-header') && !target.parent().is('.popup-intro') && !target.parent().is('.prevent')) {
      $('.popup-content, .popup-bg').removeClass('show');
      $('body').removeClass('hidden');
    }
    })
    $('.vacancy-list_btn').click(function () {
      $('.popup-bg, .popup-content').addClass('show');
      $('body').addClass('hidden');
      var vacancy = $(this).parent().prev().children('.vacancy-list_position').html();
      $('#vacancy-form_popup input[name="vacancy"]').attr('value', vacancy);
    })
    $('.popup-close').click(function () {
      $('.popup-content, .popup-bg').removeClass('show');
      $('body').removeClass('hidden');
    })
    $('input[type="file"]').change(function () {
        var input = $(this)[0];
        var attach = $(this).parent();
        if (input.files && input.files[0]) {
            attach.addClass('grey');
            var fileList = this.files[0];
            attach.children('.attach-name').html(fileList.name);
        }
            }); 
     $('input.search_query').focus(function () {  
        $('.btn-reset').addClass('show');
     });
    $('.btn-reset').click(function () {
        $(this).removeClass('show');
    })        
    $(".contacts-nav li").click(function() {
        var parent = $(this).parent().parent();
        $(this).parent().children(".contacts-nav li").removeClass("active"); 
        $(this).addClass("active");
       $(this).parent().parent().children(".contacts-tabs_content").removeClass('active'); 
        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).addClass('active');
        return false;
    });
      $('.search-btn').click(function () {
      $('#search_form').toggleClass('visible');
      $('.search-btn_mobile').addClass('hide');
      $('.lang-nav').toggleClass('show');
      $('nav').removeClass('visible');
      $('.mobile-nav_close').removeClass('show');
      $('header .mm-wrapper, #menu').removeClass('show');
      $('.mobile-nav_btn').removeClass('hide');
      $('body').removeClass('hidden');
    })
     $('.search-close').click(function () {
      $('#search_form').removeClass('visible');
      $('.search-btn_mobile').removeClass('hide');
      $('.lang-nav').removeClass('show');
    })
     $('.mobile-nav_btn').click(function () {
      $('nav').toggleClass('visible');
      $(this).addClass('hide');
      $('.mobile-nav_close, header .mm-wrapper, #menu').addClass('show');
      $('body').addClass('hidden');
      $('#search_form').removeClass('visible');
      $('.search-btn_mobile').removeClass('hide');
      $('.lang-nav').removeClass('show');
      if ($(window).width() <= 1008 || $(window).height() <= 565) {
        $('nav').css('top', $(window).scrollTop() + 80);
      }
    })
     $('.mobile-nav_close').click(function () {
      $('nav').removeClass('visible');
      $(this).removeClass('show');
      $('header .mm-wrapper, #menu').removeClass('show');
      $('.mobile-nav_btn').removeClass('hide');
      $('body').removeClass('hidden');
    })
    $('#sb-site').click(function (event) {
      var target = $(event.target);
      if ( !target.is('a[href]') && !target.is('.header-nav_btn') ) $('nav').removeClass('show');
    })
    if ($(window).width() <= 900) {
       var $menu = $("#menu").mmenu({
        offCanvas: false,
        extensions: [
            "fx-panels-slide-100",
            "fullscreen",
            "multiline",
            "pagedim-black"
         ],
        navbar      : {
            title   : "Меню"
        },
        navbars     : true
        });     
        $('.workers-list').addClass('workers-list_mobile');        
    }
    if ($(window).width() <= 1008) {
      $('nav').removeClass('fixed').addClass('mobile');
    }
  if ($(window).width() > 1008) {
    $('nav').removeClass('mobile').addClass('fixed');
  }
  if ($(window).height() <= 565) {
    $('nav').removeClass('fixed').addClass('mobile');
  }
  $('#sb-site').click(function (event) {
      var target = $(event.target);
      var parent = target.parent();
      if ( !parent.is('.content-inner_nav') && !parent.is('.inner-nav') && !target.is('a[href]')) {
        $('.inner-nav').removeClass('visible');
        $('.inner-nav_title').removeClass('open');
      }
    })  
  $('#scrollbar_title').click(function () {
    $('#scrollbar_list').toggleClass('visible');
  })
  $('#scrollbar_list a').click(function(){
      $('#scrollbar_list').removeClass('visible');
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 2000);
        $('.link').removeClass('selected');  
      $(this).addClass('selected');
        return false;
    });

  var menu_selector = "#scrollbar_list";
  function onScroll(){
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
        });
    }
        $(document).on("scroll", onScroll);
     
        $("#scrollbar_list a[href^=#]").click(function(e){
            e.preventDefault();
            $(document).off("scroll");
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
            var hash = $(this).attr("href");
            var target = $(hash);
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 500, function(){
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });
        });  
        $('.faq-title').on('click',function(){$(this).toggleClass('open').next().toggleClass('show');}); 
        $('.vacancy-list_title').on('click',function(){$(this).next().toggleClass('show').parent().toggleClass('open');});
        $('.contacts-title').on('click',function(){$(this).next().toggleClass('show').parent().toggleClass('open');});  
        var accordionsMenu = $('.desktop-filters');
        if( accordionsMenu.length > 0 ) {
          accordionsMenu.each(function(){
            var accordion = $(this);
            //detect change in the input[type="checkbox"] value
            accordion.on('change', 'input[type="checkbox"]', function(){
              var checkbox = $(this);
              console.log(checkbox.prop('checked'));
              ( checkbox.prop('checked') ) ? checkbox.siblings('ul').addClass('show').slideDown(300) : checkbox.siblings('ul').removeClass('show').slideUp(300);
            });
          });
        }
        $('.base-toggle').click(function () {
          $('#base-filters, .filters-close').addClass('show');
          $('body').addClass('hidden');
          }) 
        $('.filters-close').click(function () {
        $(this).removeClass('show');
          $('#base-filters').removeClass('show');
          $('body').removeClass('hidden');
          })  
        if ($(window).width() <= 1080) {
          var $menu = $("#base-filters").mmenu({
          offCanvas: false,
           extensions: [
            "fx-panels-slide-100",
            "fullscreen",
            "multiline",
            "pagedim-black"
         ],
        navbar      : {
            title   : "База документов"
        },
        navbars     : true
        });             
    }
    $('.inner-nav_title').click(function () {
      $(this).toggleClass('open');
      $('.inner-nav').toggleClass('visible');
      $('#scrollbar').css('top','127px');
    });  
    $("nav.mobile").mCustomScrollbar({
	axis:"x",
	theme:"dark",
	autoExpandScrollbar:false,
	autoHideScrollbar:true,
	scrollbarPosition: "inside",
	mouseWheel: "disable",
	contentTouchScroll:5,
	advanced:{autoExpandHorizontalScroll:true}
});
});
$(window).resize(function() {  
if ($(window).width() <= 900) {
       var $menu = $("#menu").mmenu({
        offCanvas: false,
        extensions: [
            "fx-panels-slide-100",
            "fullscreen",
            "multiline",
            "pagedim-black"
         ],
        navbar      : {
            title   : "Меню"
        },
        navbars     : true
        });   
    $("nav.mobile").mCustomScrollbar({
	axis:"x",
	theme:"dark",
	autoExpandScrollbar:false,
	autoHideScrollbar:true,
	scrollbarPosition: "inside",
	mouseWheel: "disable",
	contentTouchScroll:5,
	advanced:{autoExpandHorizontalScroll:true}
});
    }
     if ($(window).width() > 900) {
        $('#base-filters').removeClass('show');
        $('body').removeClass('hidden');
        $('.workers-list').removeClass('workers-list_mobile');
     }
  if ($(window).width() <= 1008) {
    $('nav').removeClass('fixed').addClass('mobile');
    var $menu = $("#base-filters").mmenu({
        offCanvas: false,
        extensions: [
            "fx-panels-slide-100",
            "fullscreen",
            "multiline",
            "pagedim-black"
         ],
        navbar      : {
            title   : "База документов"
        },
        navbars     : true
        });  
  }
  if ($(window).width() > 1008) {
    $('nav').removeClass('mobile').addClass('fixed');
    $('nav').css('top', '90px');    
    $('#scrollbar').css('top','20px');
  }
  if ($(window).height() <= 565) {
    $('nav').removeClass('fixed').addClass('mobile');
    $('#scrollbar').css('top','122px');
  }
});
