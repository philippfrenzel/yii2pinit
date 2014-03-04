<?php
/**
 * @link http://www.frenzel.net/
 * @author Philipp Frenzel <philipp@frenzel.net> 
 */

namespace philippfrenzel\yii2pinit;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <philipp@gfrenzel.net>
 * @since 2.0
 */
class yii2pinitAsset extends AssetBundle
{
    public $sourcePath = '@philippfrenzel/yii2pinit/assets';
    public $css = [
      'css/yii2pinit.css'
    ];
    public $js = [
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}
