exports.bundleSettings = {
  compress : !__dev,
  bundles: [
     {name : 'main.js', type:"js",output:"public/js/dist/",files:['public/js/jquery.unobtrusive-ajax.min.js','public/js/functions.js']},
     {name : 'main.css', type:"css",output:"public/css/dist/", files:['public/css/style.css']}],
   jsEngine: 'uglifyjs',
   cssEngine: 'clean-css'
};
