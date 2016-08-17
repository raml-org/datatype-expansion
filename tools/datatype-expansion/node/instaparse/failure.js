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
var G__16003 = (line + (1));
var G__16004 = (1);
var G__16005 = (counter + (1));
line = G__16003;
col = G__16004;
counter = G__16005;
continue;
} else {
var G__16006 = line;
var G__16007 = (col + (1));
var G__16008 = (counter + (1));
line = G__16006;
col = G__16007;
counter = G__16008;
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
var G__16009 = cljs.core.next.call(null,chars);
var G__16010 = (n__$1 - (1));
chars = G__16009;
n__$1 = G__16010;
continue;
} else {
var G__16011 = cljs.core.next.call(null,chars);
var G__16012 = n__$1;
chars = G__16011;
n__$1 = G__16012;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__16013){
var map__16024 = p__16013;
var map__16024__$1 = ((((!((map__16024 == null)))?((((map__16024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16024):map__16024);
var line = cljs.core.get.call(null,map__16024__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__16024__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__16024__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__16024__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__16026_16034 = cljs.core.seq.call(null,full_reasons);
var chunk__16027_16035 = null;
var count__16028_16036 = (0);
var i__16029_16037 = (0);
while(true){
if((i__16029_16037 < count__16028_16036)){
var r_16038 = cljs.core._nth.call(null,chunk__16027_16035,i__16029_16037);
instaparse.failure.print_reason.call(null,r_16038);

cljs.core.println.call(null," (followed by end-of-string)");

var G__16039 = seq__16026_16034;
var G__16040 = chunk__16027_16035;
var G__16041 = count__16028_16036;
var G__16042 = (i__16029_16037 + (1));
seq__16026_16034 = G__16039;
chunk__16027_16035 = G__16040;
count__16028_16036 = G__16041;
i__16029_16037 = G__16042;
continue;
} else {
var temp__4657__auto___16043 = cljs.core.seq.call(null,seq__16026_16034);
if(temp__4657__auto___16043){
var seq__16026_16044__$1 = temp__4657__auto___16043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16026_16044__$1)){
var c__7027__auto___16045 = cljs.core.chunk_first.call(null,seq__16026_16044__$1);
var G__16046 = cljs.core.chunk_rest.call(null,seq__16026_16044__$1);
var G__16047 = c__7027__auto___16045;
var G__16048 = cljs.core.count.call(null,c__7027__auto___16045);
var G__16049 = (0);
seq__16026_16034 = G__16046;
chunk__16027_16035 = G__16047;
count__16028_16036 = G__16048;
i__16029_16037 = G__16049;
continue;
} else {
var r_16050 = cljs.core.first.call(null,seq__16026_16044__$1);
instaparse.failure.print_reason.call(null,r_16050);

cljs.core.println.call(null," (followed by end-of-string)");

var G__16051 = cljs.core.next.call(null,seq__16026_16044__$1);
var G__16052 = null;
var G__16053 = (0);
var G__16054 = (0);
seq__16026_16034 = G__16051;
chunk__16027_16035 = G__16052;
count__16028_16036 = G__16053;
i__16029_16037 = G__16054;
continue;
}
} else {
}
}
break;
}

var seq__16030 = cljs.core.seq.call(null,partial_reasons);
var chunk__16031 = null;
var count__16032 = (0);
var i__16033 = (0);
while(true){
if((i__16033 < count__16032)){
var r = cljs.core._nth.call(null,chunk__16031,i__16033);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__16055 = seq__16030;
var G__16056 = chunk__16031;
var G__16057 = count__16032;
var G__16058 = (i__16033 + (1));
seq__16030 = G__16055;
chunk__16031 = G__16056;
count__16032 = G__16057;
i__16033 = G__16058;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16030);
if(temp__4657__auto__){
var seq__16030__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16030__$1)){
var c__7027__auto__ = cljs.core.chunk_first.call(null,seq__16030__$1);
var G__16059 = cljs.core.chunk_rest.call(null,seq__16030__$1);
var G__16060 = c__7027__auto__;
var G__16061 = cljs.core.count.call(null,c__7027__auto__);
var G__16062 = (0);
seq__16030 = G__16059;
chunk__16031 = G__16060;
count__16032 = G__16061;
i__16033 = G__16062;
continue;
} else {
var r = cljs.core.first.call(null,seq__16030__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__16063 = cljs.core.next.call(null,seq__16030__$1);
var G__16064 = null;
var G__16065 = (0);
var G__16066 = (0);
seq__16030 = G__16063;
chunk__16031 = G__16064;
count__16032 = G__16065;
i__16033 = G__16066;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1471435734579