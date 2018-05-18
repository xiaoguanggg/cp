$(function(){
  // 导航
    $(document).click(function(){
      $('.nav-list').removeClass('open')
    })
    $('.nav-menu,.nav-list').click(function(e){e.stopPropagation()})
    $('nav').find('.nav-menu').click(function(e){
      $('.nav-list').toggleClass('open')
    })
  // 轮播
  var index = 0;
  $(function() {
    var index = 0;
    var pic = $('.content li')
    var cir = $('#circle li')
    setInterval(function() {
        begin();
        // index += 1;
        index++
        if (index == 4) {
            index = 0
        }
    }, 2000)
    cir.click(function() {
        index = $(this).index();
        console.log(index);
        begin()
    })

    function begin() {
        pic.eq(index).addClass('current').siblings().removeClass('current')
        cir.eq(index).addClass('current1').siblings().removeClass('current1')
    }
  })
})

