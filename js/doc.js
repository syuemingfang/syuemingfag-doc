/*!

## Javascript

 CDN: `https://syuemingfag-doc.googlecode.com/git/js/doc.js`

***************************************************************************************************/

/*!

+ Version: 0.1.0.0
+ Copyright © 2013 [Syue](mailto:syuemingfang@gmail.com). All rights reserved.
+ Date: *Oct 04 2013 05:11:33 GMT+0800 (Central Standard Time)*

### Examples
 1. **Standard** [Power by Cinderella](http://html.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfag-doc/master/example.html)
 2. **Debug** [Power by jsPipe](http://jspipe.cxm.tw/?url=http://html.cxm.tw/index.php?url=https://raw.github.com/syuemingfang/syuemingfag-doc/master/example.html)

### How to Use
 1. **Setup** include this javascript files in your header.
  + **jQuery**
   `<script src='http://code.jquery.com/jquery-1.8.3.min.js'></script>`
  + **This Plguin**
   `<script src='https://syuemingfag-doc.googlecode.com/git/js/doc.js'></script>`
 2. **Usage**
  + **Format**  This Plugin accepts settings from an object of key/value pairs.
   `$(selector).doc({key: value...})`
  + **Example**
     + `$('*').doc({on: 'click'})`
 3. **Set** copy code from the `<head>` and `</head>` tags and paste it on your page.

        <script>
        $(document).ready(function(){
          //Usage
        });
        </script>

****************************************************************************************************/
(function(a, b) {
	var func=function(){
		var d=function(){
			return new d.fn.init();
		}
		d.fn=d.prototype={
			constructor: d, 
			version: '0.1.0.0',
			init: function(){
				return this;
			}
		}
		d.fn.init.prototype=d.fn;
		class2type={},
		core_hasOwn=class2type.hasOwnProperty,
		d.extend=d.fn.extend=function(){
			// jQuery JavaScript Library v2.0.2 extend
			var options, name, src, copy, copyIsArray, clone,
				target=arguments[0] || {},
				i=1,
				length=arguments.length,
				deep=false;
			if(typeof target === 'boolean'){
				deep=target;
				target=arguments[1] || {};
				i=2;
			}
			if(typeof target !== 'object' && !d.isFunction(target)){
				target={};
			}
			if(length === i){
				target=this;
				--i;
			}

			for(; i < length; i++){
				if((options=arguments[ i ]) != null){
					for(name in options){
						src=target[name];
						copy=options[name];
						if(target === copy){
							continue;
						}
						if(deep && copy && (d.isPlainObject(copy) || (copyIsArray=d.isArray(copy)))){
							if(copyIsArray){
								copyIsArray=false;
								clone=src && d.isArray(src) ? src : [];
							} else{
								clone=src && d.isPlainObject(src) ? src : {};
							}

							target[name]=d.extend(deep, clone, copy);
						} else if(copy !== undefined) {
							target[ name ]=copy;
						}
					}
				}
			}
			return target;
		};
		d.extend({
			// jQuery JavaScript Library v2.0.2 extend
			isFunction: function(obj){
				return d.type(obj) === 'function';
			},
			isPlainObject: function(obj){
				if(d.type(obj) !== 'object' || obj.nodeType || d.isWindow(obj)){
					return false;
				}
				try{
					if(obj.constructor && !core_hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')){
						return false;
					}
				} catch(e){
					return false;
				}
				return true;
			},
			isWindow: function(obj){
				return obj != null && obj === obj.window;
			},
			isArray: Array.isArray || function(obj){ return d.type(obj) === 'array'},
			type: function(obj){
				if(obj == null){
					return String(obj);
				}
				return typeof obj === 'object' || typeof obj === 'function' ? 'object' : typeof obj;
			}
		})
		d.extend({
			addEventListener: function(elem, type, listener, useCapture){
				//!**attachEvent** add event for else
				d.addEvent(elem, type, listener, useCapture);
			},
			attachEvent: function(elem, type, listener){
				//!**attachEvent** add event for IE
				d.addEvent(elem, type.toLowerCase().substr(2), listener);
			},
			addEvent: function(elem, type, listener, useCapture){
				//**addEvent** add event
				var uc=useCapture ? true : false;
				if(window.attachEvent){
					elem.attachEvent('on'+type, listener);
				} else{
					elem.addEventListener(type, listener, uc);
				}
			},
			createStyleSheet: function(url){
				//**createStyleSheet** create css
				if(typeof(document.createStyleSheet) == 'undefined'){
					var elem=null;
					if(url){
						elem=document.createElement('link');
						elem.type = 'text/css';
						elem.rel='stylesheet';
						elem.href=url;
					} else{
						elem=document.createElement('style');
						elem.type = 'text/css';
					}
					document.getElementsByTagName('head')[0].appendChild(elem);
					return elem.sheet;
				} else {
				document.createStyleSheet(url);
				}
			}
		});
		return d;
	}();
	a.doc=func;
	return this;
})(window);
