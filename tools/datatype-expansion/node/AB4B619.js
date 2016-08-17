goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20946__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20947__i = 0, G__20947__a = new Array(arguments.length -  0);
while (G__20947__i < G__20947__a.length) {G__20947__a[G__20947__i] = arguments[G__20947__i + 0]; ++G__20947__i;}
  args = new cljs.core.IndexedSeq(G__20947__a,0);
} 
return G__20946__delegate.call(this,args);};
G__20946.cljs$lang$maxFixedArity = 0;
G__20946.cljs$lang$applyTo = (function (arglist__20948){
var args = cljs.core.seq(arglist__20948);
return G__20946__delegate(args);
});
G__20946.cljs$core$IFn$_invoke$arity$variadic = G__20946__delegate;
return G__20946;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20949__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20950__i = 0, G__20950__a = new Array(arguments.length -  0);
while (G__20950__i < G__20950__a.length) {G__20950__a[G__20950__i] = arguments[G__20950__i + 0]; ++G__20950__i;}
  args = new cljs.core.IndexedSeq(G__20950__a,0);
} 
return G__20949__delegate.call(this,args);};
G__20949.cljs$lang$maxFixedArity = 0;
G__20949.cljs$lang$applyTo = (function (arglist__20951){
var args = cljs.core.seq(arglist__20951);
return G__20949__delegate(args);
});
G__20949.cljs$core$IFn$_invoke$arity$variadic = G__20949__delegate;
return G__20949;
})()
;

return null;
});
