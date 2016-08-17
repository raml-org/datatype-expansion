goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14590__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14591__i = 0, G__14591__a = new Array(arguments.length -  0);
while (G__14591__i < G__14591__a.length) {G__14591__a[G__14591__i] = arguments[G__14591__i + 0]; ++G__14591__i;}
  args = new cljs.core.IndexedSeq(G__14591__a,0);
} 
return G__14590__delegate.call(this,args);};
G__14590.cljs$lang$maxFixedArity = 0;
G__14590.cljs$lang$applyTo = (function (arglist__14592){
var args = cljs.core.seq(arglist__14592);
return G__14590__delegate(args);
});
G__14590.cljs$core$IFn$_invoke$arity$variadic = G__14590__delegate;
return G__14590;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14593__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14594__i = 0, G__14594__a = new Array(arguments.length -  0);
while (G__14594__i < G__14594__a.length) {G__14594__a[G__14594__i] = arguments[G__14594__i + 0]; ++G__14594__i;}
  args = new cljs.core.IndexedSeq(G__14594__a,0);
} 
return G__14593__delegate.call(this,args);};
G__14593.cljs$lang$maxFixedArity = 0;
G__14593.cljs$lang$applyTo = (function (arglist__14595){
var args = cljs.core.seq(arglist__14595);
return G__14593__delegate(args);
});
G__14593.cljs$core$IFn$_invoke$arity$variadic = G__14593__delegate;
return G__14593;
})()
;

return null;
});
