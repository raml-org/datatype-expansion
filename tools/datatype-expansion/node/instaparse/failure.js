// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.call(null,index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter))){
var G__16002 = (line + (1));
var G__16003 = (1);
var G__16004 = (counter + (1));
line = G__16002;
col = G__16003;
counter = G__16004;
continue;
} else {
var G__16005 = line;
var G__16006 = (col + (1));
var G__16007 = (counter + (1));
line = G__16005;
col = G__16006;
counter = G__16007;
continue;

}
}
break;
}
});
instaparse.failure.newline_chars_QMARK_ = (function instaparse$failure$newline_chars_QMARK_(c){
return cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null).call(null,c));
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq.call(null,clojure.string.replace.call(null,text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_.call(null,chars)){
return "";
} else {
if(cljs.core._EQ_.call(null,n__$1,(1))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,instaparse.failure.newline_chars_QMARK_),chars));
} else {
if(cljs.core.truth_(instaparse.failure.newline_chars_QMARK_.call(null,cljs.core.first.call(null,chars)))){
var G__16008 = cljs.core.next.call(null,chars);
var G__16009 = (n__$1 - (1));
chars = G__16008;
n__$1 = G__16009;
continue;
} else {
var G__16010 = cljs.core.next.call(null,chars);
var G__16011 = n__$1;
chars = G__16010;
n__$1 = G__16011;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,(n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.call(null,"NOT ");

return cljs.core.print.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.call(null,instaparse.print.char_range__GT_str.call(null,r));
} else {
if((r instanceof RegExp)){
return cljs.core.print.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else {
return cljs.core.pr.call(null,r);

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__16012){
var map__16023 = p__16012;
var map__16023__$1 = ((((!((map__16023 == null)))?((((map__16023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16023):map__16023);
var line = cljs.core.get.call(null,map__16023__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__16023__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__16023__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__16023__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");

cljs.core.println.call(null,text);

cljs.core.println.call(null,instaparse.failure.marker.call(null,column));

var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.call(null,(1),total)){
cljs.core.println.call(null,"Expected:");
} else {
cljs.core.println.call(null,"Expected one of:");

}
}

var seq__16025_16033 = cljs.core.seq.call(null,full_reasons);
var chunk__16026_16034 = null;
var count__16027_16035 = (0);
var i__16028_16036 = (0);
while(true){
if((i__16028_16036 < count__16027_16035)){
var r_16037 = cljs.core._nth.call(null,chunk__16026_16034,i__16028_16036);
instaparse.failure.print_reason.call(null,r_16037);

cljs.core.println.call(null," (followed by end-of-string)");

var G__16038 = seq__16025_16033;
var G__16039 = chunk__16026_16034;
var G__16040 = count__16027_16035;
var G__16041 = (i__16028_16036 + (1));
seq__16025_16033 = G__16038;
chunk__16026_16034 = G__16039;
count__16027_16035 = G__16040;
i__16028_16036 = G__16041;
continue;
} else {
var temp__4657__auto___16042 = cljs.core.seq.call(null,seq__16025_16033);
if(temp__4657__auto___16042){
var seq__16025_16043__$1 = temp__4657__auto___16042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16025_16043__$1)){
var c__7027__auto___16044 = cljs.core.chunk_first.call(null,seq__16025_16043__$1);
var G__16045 = cljs.core.chunk_rest.call(null,seq__16025_16043__$1);
var G__16046 = c__7027__auto___16044;
var G__16047 = cljs.core.count.call(null,c__7027__auto___16044);
var G__16048 = (0);
seq__16025_16033 = G__16045;
chunk__16026_16034 = G__16046;
count__16027_16035 = G__16047;
i__16028_16036 = G__16048;
continue;
} else {
var r_16049 = cljs.core.first.call(null,seq__16025_16043__$1);
instaparse.failure.print_reason.call(null,r_16049);

cljs.core.println.call(null," (followed by end-of-string)");

var G__16050 = cljs.core.next.call(null,seq__16025_16043__$1);
var G__16051 = null;
var G__16052 = (0);
var G__16053 = (0);
seq__16025_16033 = G__16050;
chunk__16026_16034 = G__16051;
count__16027_16035 = G__16052;
i__16028_16036 = G__16053;
continue;
}
} else {
}
}
break;
}

var seq__16029 = cljs.core.seq.call(null,partial_reasons);
var chunk__16030 = null;
var count__16031 = (0);
var i__16032 = (0);
while(true){
if((i__16032 < count__16031)){
var r = cljs.core._nth.call(null,chunk__16030,i__16032);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__16054 = seq__16029;
var G__16055 = chunk__16030;
var G__16056 = count__16031;
var G__16057 = (i__16032 + (1));
seq__16029 = G__16054;
chunk__16030 = G__16055;
count__16031 = G__16056;
i__16032 = G__16057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16029);
if(temp__4657__auto__){
var seq__16029__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16029__$1)){
var c__7027__auto__ = cljs.core.chunk_first.call(null,seq__16029__$1);
var G__16058 = cljs.core.chunk_rest.call(null,seq__16029__$1);
var G__16059 = c__7027__auto__;
var G__16060 = cljs.core.count.call(null,c__7027__auto__);
var G__16061 = (0);
seq__16029 = G__16058;
chunk__16030 = G__16059;
count__16031 = G__16060;
i__16032 = G__16061;
continue;
} else {
var r = cljs.core.first.call(null,seq__16029__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__16062 = cljs.core.next.call(null,seq__16029__$1);
var G__16063 = null;
var G__16064 = (0);
var G__16065 = (0);
seq__16029 = G__16062;
chunk__16030 = G__16063;
count__16031 = G__16064;
i__16032 = G__16065;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1471427567372