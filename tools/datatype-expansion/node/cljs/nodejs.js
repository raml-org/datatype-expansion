// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16817__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16818__i = 0, G__16818__a = new Array(arguments.length -  0);
while (G__16818__i < G__16818__a.length) {G__16818__a[G__16818__i] = arguments[G__16818__i + 0]; ++G__16818__i;}
  args = new cljs.core.IndexedSeq(G__16818__a,0);
} 
return G__16817__delegate.call(this,args);};
G__16817.cljs$lang$maxFixedArity = 0;
G__16817.cljs$lang$applyTo = (function (arglist__16819){
var args = cljs.core.seq(arglist__16819);
return G__16817__delegate(args);
});
G__16817.cljs$core$IFn$_invoke$arity$variadic = G__16817__delegate;
return G__16817;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16820__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16821__i = 0, G__16821__a = new Array(arguments.length -  0);
while (G__16821__i < G__16821__a.length) {G__16821__a[G__16821__i] = arguments[G__16821__i + 0]; ++G__16821__i;}
  args = new cljs.core.IndexedSeq(G__16821__a,0);
} 
return G__16820__delegate.call(this,args);};
G__16820.cljs$lang$maxFixedArity = 0;
G__16820.cljs$lang$applyTo = (function (arglist__16822){
var args = cljs.core.seq(arglist__16822);
return G__16820__delegate(args);
});
G__16820.cljs$core$IFn$_invoke$arity$variadic = G__16820__delegate;
return G__16820;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1471427568760