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
var G__7405 = (line + (1));
var G__7406 = (1);
var G__7407 = (counter + (1));
line = G__7405;
col = G__7406;
counter = G__7407;
continue;
} else {
var G__7408 = line;
var G__7409 = (col + (1));
var G__7410 = (counter + (1));
line = G__7408;
col = G__7409;
counter = G__7410;
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
var G__7411 = cljs.core.next.call(null,chars);
var G__7412 = (n__$1 - (1));
chars = G__7411;
n__$1 = G__7412;
continue;
} else {
var G__7413 = cljs.core.next.call(null,chars);
var G__7414 = n__$1;
chars = G__7413;
n__$1 = G__7414;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__7415){
var map__7426 = p__7415;
var map__7426__$1 = ((((!((map__7426 == null)))?((((map__7426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7426):map__7426);
var line = cljs.core.get.call(null,map__7426__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__7426__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__7426__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__7426__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__7428_7436 = cljs.core.seq.call(null,full_reasons);
var chunk__7429_7437 = null;
var count__7430_7438 = (0);
var i__7431_7439 = (0);
while(true){
if((i__7431_7439 < count__7430_7438)){
var r_7440 = cljs.core._nth.call(null,chunk__7429_7437,i__7431_7439);
instaparse.failure.print_reason.call(null,r_7440);

cljs.core.println.call(null," (followed by end-of-string)");

var G__7441 = seq__7428_7436;
var G__7442 = chunk__7429_7437;
var G__7443 = count__7430_7438;
var G__7444 = (i__7431_7439 + (1));
seq__7428_7436 = G__7441;
chunk__7429_7437 = G__7442;
count__7430_7438 = G__7443;
i__7431_7439 = G__7444;
continue;
} else {
var temp__4657__auto___7445 = cljs.core.seq.call(null,seq__7428_7436);
if(temp__4657__auto___7445){
var seq__7428_7446__$1 = temp__4657__auto___7445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7428_7446__$1)){
var c__6831__auto___7447 = cljs.core.chunk_first.call(null,seq__7428_7446__$1);
var G__7448 = cljs.core.chunk_rest.call(null,seq__7428_7446__$1);
var G__7449 = c__6831__auto___7447;
var G__7450 = cljs.core.count.call(null,c__6831__auto___7447);
var G__7451 = (0);
seq__7428_7436 = G__7448;
chunk__7429_7437 = G__7449;
count__7430_7438 = G__7450;
i__7431_7439 = G__7451;
continue;
} else {
var r_7452 = cljs.core.first.call(null,seq__7428_7446__$1);
instaparse.failure.print_reason.call(null,r_7452);

cljs.core.println.call(null," (followed by end-of-string)");

var G__7453 = cljs.core.next.call(null,seq__7428_7446__$1);
var G__7454 = null;
var G__7455 = (0);
var G__7456 = (0);
seq__7428_7436 = G__7453;
chunk__7429_7437 = G__7454;
count__7430_7438 = G__7455;
i__7431_7439 = G__7456;
continue;
}
} else {
}
}
break;
}

var seq__7432 = cljs.core.seq.call(null,partial_reasons);
var chunk__7433 = null;
var count__7434 = (0);
var i__7435 = (0);
while(true){
if((i__7435 < count__7434)){
var r = cljs.core._nth.call(null,chunk__7433,i__7435);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__7457 = seq__7432;
var G__7458 = chunk__7433;
var G__7459 = count__7434;
var G__7460 = (i__7435 + (1));
seq__7432 = G__7457;
chunk__7433 = G__7458;
count__7434 = G__7459;
i__7435 = G__7460;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7432);
if(temp__4657__auto__){
var seq__7432__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7432__$1)){
var c__6831__auto__ = cljs.core.chunk_first.call(null,seq__7432__$1);
var G__7461 = cljs.core.chunk_rest.call(null,seq__7432__$1);
var G__7462 = c__6831__auto__;
var G__7463 = cljs.core.count.call(null,c__6831__auto__);
var G__7464 = (0);
seq__7432 = G__7461;
chunk__7433 = G__7462;
count__7434 = G__7463;
i__7435 = G__7464;
continue;
} else {
var r = cljs.core.first.call(null,seq__7432__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__7465 = cljs.core.next.call(null,seq__7432__$1);
var G__7466 = null;
var G__7467 = (0);
var G__7468 = (0);
seq__7432 = G__7465;
chunk__7433 = G__7466;
count__7434 = G__7467;
i__7435 = G__7468;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map