$(function () {
  // ナビ開閉
  $(".toggle_btn").on("click", function () {
    // open クラスを持っているか判定
    if ($("#header").hasClass("open")) {
      // クラスを持っていれば外す（閉じる）
      $("#header").removeClass("open");
    } else {
      // クラスを持っていなければ付ける（開く）
      $("#header").addClass("open");
    }
  });
  // マスククリックでメニューを閉じる
  $("#mask").on("click", function () {
    $("#header").removeClass("open");
  });

  $("#navi a").on("click", function () {
    $("#header").removeClass("open");
  });

  //   PICK UP スライダー
  $(".slick-area").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  //   スクロール時の画像フェード表示
  $(window).scroll(function () {
    $(".fadein").each(function () {
      let scroll = $(window).scrollTop(); // 今、ページを上から何pxスクロールしているか
      let target = $(this).offset().top; // 今処理している要素が、ページの上から何pxの位置にあるか
      let windowHeight = $(window).height(); // 今見えているブラウザ画面の高さが何pxあるか
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  //   スムーススクロール
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;

    $("html,body").animate({ scrollTop: position }, 600, "swing");

    return false;
  });
});
