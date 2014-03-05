yii2pinit
=========

Pin It Button for Yii2


Setup
=====

Pls add the image you want to show as overlay to your pictures within the folder

web/img/pinterest.png

Should be interlaced and not to big;)

Sample CKEDITOR
===============

```php
$pinterest = <<< SCRIPT
{instanceReady: function() {
  this.dataProcessor.htmlFilter.addRules({
      elements: {
          img: function( el ) {
              if ( !el.attributes.alt )
                  el.attributes.alt = 'pinterest-image';
              var fragment = CKEDITOR.htmlParser.fragment.fromHtml( '<div class="pinterest-image">'+el.getOuterHtml()+'</div>' );
              el.replaceWith(fragment);
          }
      }
  });          
}}
SCRIPT;
```
