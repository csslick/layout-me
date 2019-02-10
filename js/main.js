$(function(){

  $('html, body').scrollTop(0);
  var header_height = $('header').height();

  $('#gnb a').on('click', function(){
    var section = this.hash;
    var top = $(section).offset().top;

    $('html, body').animate({
        scrollTop: top - header_height
    }, 400)
    console.log(top)
    return false;
  })

  //
  $(window).resize(function(){
    console.log('resize');
  })

  // header bg action on scroll
  $(window).on('scroll', function(){
    // 헤더 배경 효과
    if($(this).scrollTop() > $('header').height()){
      $('header').addClass('bg-active')
    } else{
      $('header').removeClass('bg-active')
    }
    console.log($(this).scrollTop(), $('header').height());

    /*** 스크롤 콘텐츠 ***/
    var section_top = [];
    // 맨 위로 가면 애니메이션 초기화
    if($(window).scrollTop() == 0){
      $('section .will-play').removeClass('play');
    }

    // 재생 구간 탐색
    $('section').each(function(i){
      console.log(i);
      var y_offset = 300;
      section_top[i] = $('section').eq(i).offset().top;

      if(section_top[i] <= $(window).scrollTop() + y_offset){
        $('section')
          .eq(i)
          .find('.will-play')
          .addClass('play');
      }
    })
    console.log(section_top);
  })

  // mobile gnb toggle
  $('#toggle-btn').on('click', function(){
    $('#gnb').toggleClass('show');
    return false;
  })

}) //  end $()