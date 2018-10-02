/**
 * create: 02/10/2018 
 */

function init() {
  contentHeightInit();
}

function contentHeightInit() {
  var sideMenuHieght = $('#side-menu').height();
  var contentHieght = $('#content-container').height();    
  if(sideMenuHieght > contentHieght) {
    $('#content-container').css('height', sideMenuHieght + 'px');
  }
}