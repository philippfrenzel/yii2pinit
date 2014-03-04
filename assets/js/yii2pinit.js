jQuery(document).ready(function() {
  jQuery('.pinterest-image img').after('<div class="hover-pinterest"></div>');
  jQuery('.hover-pinterest').append('<a class="pin-it-link" target="_blank"></a>');
  jQuery('.pinterest-image').hover(
    function() {
      var imgurl = jQuery('img', this).attr('src');
      var encodedurl = encodeURIComponent(imgurl);
      var pathname = jQuery(location).attr('href');
      url = encodeURIComponent(pathname);
      var desc = encodeURIComponent('enter description here');
      var pinhref = 'http://pinterest.com/pin/create/button/?url=';
      pinhref += url;
      pinhref += '&media=';
      pinhref += encodedurl;
      pinhref += '&description=';
      pinhref += desc;
      jQuery('.hover-pinterest a',this).attr('href',pinhref);
      var pinwidth = jQuery(this).width();
      var pinheight = jQuery(this).height();
      jQuery('.hover-pinterest',this).css('display','block');
      jQuery('.hover-pinterest',this).css('width',pinwidth);
      jQuery('.hover-pinterest',this).css('height',pinheight);
    },function() {
      jQuery('.hover-pinterest',this).css('display','none');
    });
});
