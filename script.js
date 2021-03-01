$(document).ready(function(){
  var rowTop = $(".row-top .row-inner-wrapper");
  var rowBottom = $(".row-bottom .row-inner-wrapper");

  $(".arrow-previous").on("click", function() {

    $(".to-remove").remove();

    var imagesTop = rowTop.find("img");
    var imagesBottom = rowBottom.find("img");

    // var currentTop = imagesTop[imagesTop.length - 1];
    var currentTop = imagesTop[0];
    var imageWidthTop = $(currentTop).outerWidth();

    var currentBottom = imagesBottom[0];
    var imageWidthBottom = $(currentBottom).outerWidth();

    var lastTop = $(currentTop).clone();
    $(currentTop).addClass("to-remove");

    lastTop.animate({"marginRight": "-" + imageWidthTop + "px"},
      {
        complete: function() {
          rowTop.append(lastTop);
          lastTop.show().animate({"marginRight": "0px"});
        }
      });


    var lastBottom = $(currentBottom).clone();
    $(currentBottom).addClass("to-remove");

    lastBottom.animate({"marginRight": "-" + imageWidthBottom + "px"},
      {
        complete: function() {
          rowBottom.append(lastBottom);
          lastBottom.animate({"marginRight": "0px"});
        }
      });
  });

  $(".arrow-next").on("click", function() {
    $(".to-remove").remove();

    var imagesTop = rowTop.find("img");
    var imagesBottom = rowBottom.find("img");

    var currentTop = imagesTop[imagesTop.length - 1];
    var imageWidthTop = $(currentTop).outerWidth();

    var currentBottom = imagesBottom[imagesBottom.length - 1];
    var imageWidthBottom = $(currentBottom).outerWidth();

    var lastTop = $(currentTop).clone();
    $(currentTop).addClass("to-remove");

    rowTop.find(".to-remove").animate({"marginRight": "-" + imageWidthTop + "px"},
      {
      complete: function() {
        rowTop.prepend(lastTop);
      }
  });

    var lastBottom = $(currentBottom).clone();
    $(currentBottom).addClass("to-remove");

    rowBottom.find(".to-remove").animate({"marginRight": "-" + imageWidthBottom + "px"},
      {
        complete: function() {
          rowBottom.prepend(lastBottom);
        }
      });
  });
});
