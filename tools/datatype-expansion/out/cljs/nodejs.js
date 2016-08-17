// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9696__i = 0, G__9696__a = new Array(arguments.length -  0);
while (G__9696__i < G__9696__a.length) {G__9696__a[G__9696__i] = arguments[G__9696__i + 0]; ++G__9696__i;}
  args = new cljs.core.IndexedSeq(G__9696__a,0);
} 
return G__9695__delegate.call(this,args);};
G__9695.cljs$lang$maxFixedArity = 0;
G__9695.cljs$lang$applyTo = (function (arglist__9697){
var args = cljs.core.seq(arglist__9697);
return G__9695__delegate(args);
});
G__9695.cljs$core$IFn$_invoke$arity$variadic = G__9695__delegate;
return G__9695;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9699__i = 0, G__9699__a = new Array(arguments.length -  0);
while (G__9699__i < G__9699__a.length) {G__9699__a[G__9699__i] = arguments[G__9699__i + 0]; ++G__9699__i;}
  args = new cljs.core.IndexedSeq(G__9699__a,0);
} 
return G__9698__delegate.call(this,args);};
G__9698.cljs$lang$maxFixedArity = 0;
G__9698.cljs$lang$applyTo = (function (arglist__9700){
var args = cljs.core.seq(arglist__9700);
return G__9698__delegate(args);
});
G__9698.cljs$core$IFn$_invoke$arity$variadic = G__9698__delegate;
return G__9698;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map