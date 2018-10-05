/**
 * create: 02/10/2018 
 */

function init() {
  setLogoImgPos();
}

function setLogoImgPos() {
  var headerSideWidth = $('.header-side-sc').width();
  var logoFrame = $('.header-logo-frame-sc');
  var logoFrameWidth = logoFrame.width();  
  if(headerSideWidth < logoFrameWidth) {
    logoFrameWidth = headerSideWidth;
  }  
  $(logoFrame).css('margin-left', ((headerSideWidth - logoFrameWidth) / 2) + 'px');
}

function blockPanelCtrl(blockPanelAnchor) {  
  var closeIconDiv = $(blockPanelAnchor).children().children().next();
  var openIconDiv = $(blockPanelAnchor).children().children().next().next();
  var contentPanel = $(blockPanelAnchor).next();  
  $(contentPanel).toggle("fast", function() {
    if($(openIconDiv).css('display') === 'none') {
      $(closeIconDiv).css('display', 'none');
      $(openIconDiv).css('display', 'block');
    } else {
      $(closeIconDiv).css('display', 'block');
      $(openIconDiv).css('display', 'none');
    }
  });
}