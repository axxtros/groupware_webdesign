/**
 * create: 02/10/2018 
 */

function init() {
  sideMenuBgHeightInit();
}

function sideMenuBgHeightInit() {  
  var sideMenuEmyptyDivTop = $('.side-menu-empty-sc').position().top;
  var footerContainerDivTop = $('.footer-side-sc').position().top;
  $('.side-menu-empty-sc').css('height', footerContainerDivTop - sideMenuEmyptyDivTop + 'px');  
}