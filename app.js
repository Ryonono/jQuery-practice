$(function () {
  $('.box1').slideDown(function () {
    $(".box1").css({
      'background-color': '#0000FF',
      'height': '100px',
      'width': '200px'
    }).slideUp();
  });
});


// javascriptでは、引数の中に関数を入れることができます。
// slideDown()の引数にfunctionを書き加えることで、スライドダウンした後にfunctionを実行することができるようになります。
// ですのでslideDownの中のfunctionに、cssで色と大きさを変え、slideUp()をすることで要件を満たすことができます。