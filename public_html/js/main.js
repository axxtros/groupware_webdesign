/**
 * create: 02/10/2018 
 */

function init() {
  //sideMenuBgHeightInit();
}

function sideMenuBgHeightInit() {  
  var sideMenuEmyptyDivTop = $('.side-menu-empty-sc').position().top;
  var footerContainerDivTop = $('.footer-side-sc').position().top;
  $('.side-menu-empty-sc').css('height', footerContainerDivTop - sideMenuEmyptyDivTop + 'px');  
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