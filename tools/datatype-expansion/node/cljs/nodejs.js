// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16818__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16819__i = 0, G__16819__a = new Array(arguments.length -  0);
while (G__16819__i < G__16819__a.length) {G__16819__a[G__16819__i] = arguments[G__16819__i + 0]; ++G__16819__i;}
  args = new cljs.core.IndexedSeq(G__16819__a,0);
} 
return G__16818__delegate.call(this,args);};
G__16818.cljs$lang$maxFixedArity = 0;
G__16818.cljs$lang$applyTo = (function (arglist__16820){
var args = cljs.core.seq(arglist__16820);
return G__16818__delegate(args);
});
G__16818.cljs$core$IFn$_invoke$arity$variadic = G__16818__delegate;
return G__16818;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16821__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16822__i = 0, G__16822__a = new Array(arguments.length -  0);
while (G__16822__i < G__16822__a.length) {G__16822__a[G__16822__i] = arguments[G__16822__i + 0]; ++G__16822__i;}
  args = new cljs.core.IndexedSeq(G__16822__a,0);
} 
return G__16821__delegate.call(this,args);};
G__16821.cljs$lang$maxFixedArity = 0;
G__16821.cljs$lang$applyTo = (function (arglist__16823){
var args = cljs.core.seq(arglist__16823);
return G__16821__delegate(args);
});
G__16821.cljs$core$IFn$_invoke$arity$variadic = G__16821__delegate;
return G__16821;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1471435735921