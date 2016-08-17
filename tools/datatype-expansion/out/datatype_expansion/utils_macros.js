// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('datatype_expansion.utils_macros');
goog.require('cljs.core');
datatype_expansion.utils_macros.maybe = (function datatype_expansion$utils_macros$maybe(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),(function (){var x__6854__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})(),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",-1616370245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__14038__auto__","e__14038__auto__",1567677457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})())));
});

datatype_expansion.utils_macros.maybe.cljs$lang$macro = true;
datatype_expansion.utils_macros.check = (function datatype_expansion$utils_macros$check(var_args){
var args__7102__auto__ = [];
var len__7095__auto___14045 = arguments.length;
var i__7096__auto___14046 = (0);
while(true){
if((i__7096__auto___14046 < len__7095__auto___14045)){
args__7102__auto__.push((arguments[i__7096__auto___14046]));

var G__14047 = (i__7096__auto___14046 + (1));
i__7096__auto___14046 = G__14047;
continue;
} else {
}
break;
}

var argseq__7103__auto__ = ((((5) < args__7102__auto__.length))?(new cljs.core.IndexedSeq(args__7102__auto__.slice((5)),(0),null)):null);
return datatype_expansion.utils_macros.check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7103__auto__);
});

datatype_expansion.utils_macros.check.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,a,b,fs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null)),(function (){var x__6854__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})(),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null)),(function (){var x__6854__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})(),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),fs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__6854__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Consistency check failure for property "),(function (){var x__6854__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," and values ["),(function (){var x__6854__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),(function (){var x__6854__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"]"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
});

datatype_expansion.utils_macros.check.cljs$lang$maxFixedArity = (5);

datatype_expansion.utils_macros.check.cljs$lang$applyTo = (function (seq14039){
var G__14040 = cljs.core.first.call(null,seq14039);
var seq14039__$1 = cljs.core.next.call(null,seq14039);
var G__14041 = cljs.core.first.call(null,seq14039__$1);
var seq14039__$2 = cljs.core.next.call(null,seq14039__$1);
var G__14042 = cljs.core.first.call(null,seq14039__$2);
var seq14039__$3 = cljs.core.next.call(null,seq14039__$2);
var G__14043 = cljs.core.first.call(null,seq14039__$3);
var seq14039__$4 = cljs.core.next.call(null,seq14039__$3);
var G__14044 = cljs.core.first.call(null,seq14039__$4);
var seq14039__$5 = cljs.core.next.call(null,seq14039__$4);
return datatype_expansion.utils_macros.check.cljs$core$IFn$_invoke$arity$variadic(G__14040,G__14041,G__14042,G__14043,G__14044,seq14039__$5);
});

datatype_expansion.utils_macros.check.cljs$lang$macro = true;

//# sourceMappingURL=utils_macros.js.map