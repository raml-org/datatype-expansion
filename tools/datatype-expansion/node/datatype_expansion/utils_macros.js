// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('datatype_expansion.utils_macros');
goog.require('cljs.core');
datatype_expansion.utils_macros.maybe = (function datatype_expansion$utils_macros$maybe(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),(function (){var x__7050__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})(),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",-1616370245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__20802__auto__","e__20802__auto__",1017669930,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})())));
});

datatype_expansion.utils_macros.maybe.cljs$lang$macro = true;
datatype_expansion.utils_macros.check = (function datatype_expansion$utils_macros$check(var_args){
var args__7298__auto__ = [];
var len__7291__auto___20809 = arguments.length;
var i__7292__auto___20810 = (0);
while(true){
if((i__7292__auto___20810 < len__7291__auto___20809)){
args__7298__auto__.push((arguments[i__7292__auto___20810]));

var G__20811 = (i__7292__auto___20810 + (1));
i__7292__auto___20810 = G__20811;
continue;
} else {
}
break;
}

var argseq__7299__auto__ = ((((5) < args__7298__auto__.length))?(new cljs.core.IndexedSeq(args__7298__auto__.slice((5)),(0),null)):null);
return datatype_expansion.utils_macros.check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7299__auto__);
});

datatype_expansion.utils_macros.check.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,a,b,fs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null)),(function (){var x__7050__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})(),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null)),(function (){var x__7050__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})(),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),fs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__7050__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Consistency check failure for property "),(function (){var x__7050__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," and values ["),(function (){var x__7050__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),(function (){var x__7050__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"]"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
});

datatype_expansion.utils_macros.check.cljs$lang$maxFixedArity = (5);

datatype_expansion.utils_macros.check.cljs$lang$applyTo = (function (seq20803){
var G__20804 = cljs.core.first.call(null,seq20803);
var seq20803__$1 = cljs.core.next.call(null,seq20803);
var G__20805 = cljs.core.first.call(null,seq20803__$1);
var seq20803__$2 = cljs.core.next.call(null,seq20803__$1);
var G__20806 = cljs.core.first.call(null,seq20803__$2);
var seq20803__$3 = cljs.core.next.call(null,seq20803__$2);
var G__20807 = cljs.core.first.call(null,seq20803__$3);
var seq20803__$4 = cljs.core.next.call(null,seq20803__$3);
var G__20808 = cljs.core.first.call(null,seq20803__$4);
var seq20803__$5 = cljs.core.next.call(null,seq20803__$4);
return datatype_expansion.utils_macros.check.cljs$core$IFn$_invoke$arity$variadic(G__20804,G__20805,G__20806,G__20807,G__20808,seq20803__$5);
});

datatype_expansion.utils_macros.check.cljs$lang$macro = true;

//# sourceMappingURL=utils_macros.js.map?rel=1471427571120