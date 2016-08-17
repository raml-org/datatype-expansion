goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14259__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14260__i = 0, G__14260__a = new Array(arguments.length -  0);
while (G__14260__i < G__14260__a.length) {G__14260__a[G__14260__i] = arguments[G__14260__i + 0]; ++G__14260__i;}
  args = new cljs.core.IndexedSeq(G__14260__a,0);
} 
return G__14259__delegate.call(this,args);};
G__14259.cljs$lang$maxFixedArity = 0;
G__14259.cljs$lang$applyTo = (function (arglist__14261){
var args = cljs.core.seq(arglist__14261);
return G__14259__delegate(args);
});
G__14259.cljs$core$IFn$_invoke$arity$variadic = G__14259__delegate;
return G__14259;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14262__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14263__i = 0, G__14263__a = new Array(arguments.length -  0);
while (G__14263__i < G__14263__a.length) {G__14263__a[G__14263__i] = arguments[G__14263__i + 0]; ++G__14263__i;}
  args = new cljs.core.IndexedSeq(G__14263__a,0);
} 
return G__14262__delegate.call(this,args);};
G__14262.cljs$lang$maxFixedArity = 0;
G__14262.cljs$lang$applyTo = (function (arglist__14264){
var args = cljs.core.seq(arglist__14264);
return G__14262__delegate(args);
});
G__14262.cljs$core$IFn$_invoke$arity$variadic = G__14262__delegate;
return G__14262;
})()
;

return null;
});
