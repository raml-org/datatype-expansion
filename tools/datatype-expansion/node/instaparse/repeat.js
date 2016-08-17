// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('instaparse.repeat');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.viz');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');
instaparse.repeat.empty_result_QMARK_ = (function instaparse$repeat$empty_result_QMARK_(result){
return ((cljs.core.vector_QMARK_.call(null,result)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,result),(1)))) || ((cljs.core.map_QMARK_.call(null,result)) && (cljs.core.contains_QMARK_.call(null,result,new cljs.core.Keyword(null,"tag","tag",-1290361223))) && (cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,result,new cljs.core.Keyword(null,"content","content",15833224))))) || (cljs.core.empty_QMARK_.call(null,result));
});
instaparse.repeat.failure_signal = instaparse.gll.__GT_Failure.call(null,null,null);
instaparse.repeat.get_end = (function instaparse$repeat$get_end(var_args){
var args16656 = [];
var len__7291__auto___16661 = arguments.length;
var i__7292__auto___16662 = (0);
while(true){
if((i__7292__auto___16662 < len__7291__auto___16661)){
args16656.push((arguments[i__7292__auto___16662]));

var G__16663 = (i__7292__auto___16662 + (1));
i__7292__auto___16662 = G__16663;
continue;
} else {
}
break;
}

var G__16658 = args16656.length;
switch (G__16658) {
case 1:
return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16656.length)].join('')));

}
});

instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1 = (function (parse){
var vec__16659 = instaparse.viz.span.call(null,parse);
var start = cljs.core.nth.call(null,vec__16659,(0),null);
var end = cljs.core.nth.call(null,vec__16659,(1),null);
if(cljs.core.truth_(end)){
return cljs.core.long$.call(null,end);
} else {
return cljs.core.count.call(null,parse);
}
});

instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2 = (function (parse,index){
var vec__16660 = instaparse.viz.span.call(null,parse);
var start = cljs.core.nth.call(null,vec__16660,(0),null);
var end = cljs.core.nth.call(null,vec__16660,(1),null);
if(cljs.core.truth_(end)){
return cljs.core.long$.call(null,end);
} else {
return (index + cljs.core.count.call(null,parse));
}
});

instaparse.repeat.get_end.cljs$lang$maxFixedArity = 2;
instaparse.repeat.parse_from_index = (function instaparse$repeat$parse_from_index(grammar,initial_parser,text,segment,index){
var tramp = instaparse.gll.make_tramp.call(null,grammar,text,segment);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,initial_parser], null),instaparse.gll.TopListener.call(null,tramp));

return instaparse.gll.run.call(null,tramp);
});
/**
 * Returns either:
 * [a-parse end-index a-list-of-valid-follow-up-parses]
 * [a-parse end-index nil] (successfully reached end of text)
 * nil (hit a dead-end with this strategy)
 */
instaparse.repeat.select_parse = (function instaparse$repeat$select_parse(grammar,initial_parser,text,segment,index,parses){
var length = cljs.core.count.call(null,text);
var parses__$1 = cljs.core.seq.call(null,parses);
while(true){
if(parses__$1){
var parse = cljs.core.first.call(null,parses__$1);
var vec__16666 = instaparse.viz.span.call(null,parse);
var start = cljs.core.nth.call(null,vec__16666,(0),null);
var end = cljs.core.nth.call(null,vec__16666,(1),null);
var end__$1 = (cljs.core.truth_(end)?end:(index + cljs.core.count.call(null,parse)));
if(cljs.core._EQ_.call(null,end__$1,length)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,null], null);
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,instaparse.repeat.parse_from_index.call(null,grammar,initial_parser,text,segment,end__$1));
if(temp__4655__auto__){
var follow_ups = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,follow_ups], null);
} else {
var G__16667 = cljs.core.next.call(null,parses__$1);
parses__$1 = G__16667;
continue;
}

}
} else {
return null;
}
break;
}
});
instaparse.repeat.repeat_parse_hiccup = (function instaparse$repeat$repeat_parse_hiccup(var_args){
var args16668 = [];
var len__7291__auto___16675 = arguments.length;
var i__7292__auto___16676 = (0);
while(true){
if((i__7292__auto___16676 < len__7291__auto___16675)){
args16668.push((arguments[i__7292__auto___16676]));

var G__16677 = (i__7292__auto___16676 + (1));
i__7292__auto___16676 = G__16677;
continue;
} else {
}
break;
}

var G__16670 = args16668.length;
switch (G__16670) {
case 5:
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16668.length)].join('')));

}
});

instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,root_tag,text,segment){
return instaparse.repeat.repeat_parse_hiccup.call(null,grammar,initial_parser,root_tag,text,segment,(0));
});

instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6 = (function (grammar,initial_parser,root_tag,text,segment,index){
var length = cljs.core.count.call(null,text);
var first_result = instaparse.repeat.parse_from_index.call(null,grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$.call(null,index);
var parses = instaparse.auto_flatten_seq.auto_flatten_seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null));
var G__16672 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,index__$1,first_result);
var vec__16673 = G__16672;
var parse = cljs.core.nth.call(null,vec__16673,(0),null);
var end = cljs.core.nth.call(null,vec__16673,(1),null);
var follow_ups = cljs.core.nth.call(null,vec__16673,(2),null);
var selection = vec__16673;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__16672__$1 = G__16672;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__16674 = G__16672__$1;
var parse__$1 = cljs.core.nth.call(null,vec__16674,(0),null);
var end__$1 = cljs.core.nth.call(null,vec__16674,(1),null);
var follow_ups__$1 = cljs.core.nth.call(null,vec__16674,(2),null);
var selection__$1 = vec__16674;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.call(null,index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta.call(null,instaparse.auto_flatten_seq.convert_afs_to_vec.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__16679 = cljs.core.long$.call(null,end__$1);
var G__16680 = instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1);
var G__16681 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__16679;
parses__$1 = G__16680;
G__16672__$1 = G__16681;
continue;

}
}
}
break;
}
});

instaparse.repeat.repeat_parse_hiccup.cljs$lang$maxFixedArity = 6;
instaparse.repeat.repeat_parse_enlive = (function instaparse$repeat$repeat_parse_enlive(var_args){
var args16682 = [];
var len__7291__auto___16689 = arguments.length;
var i__7292__auto___16690 = (0);
while(true){
if((i__7292__auto___16690 < len__7291__auto___16689)){
args16682.push((arguments[i__7292__auto___16690]));

var G__16691 = (i__7292__auto___16690 + (1));
i__7292__auto___16690 = G__16691;
continue;
} else {
}
break;
}

var G__16684 = args16682.length;
switch (G__16684) {
case 5:
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16682.length)].join('')));

}
});

instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,root_tag,text,segment){
return instaparse.repeat.repeat_parse_enlive.call(null,grammar,initial_parser,root_tag,text,segment,(0));
});

instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6 = (function (grammar,initial_parser,root_tag,text,segment,index){
var length = cljs.core.count.call(null,text);
var first_result = instaparse.repeat.parse_from_index.call(null,grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$.call(null,index);
var parses = instaparse.auto_flatten_seq.EMPTY;
var G__16686 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,index__$1,first_result);
var vec__16687 = G__16686;
var parse = cljs.core.nth.call(null,vec__16687,(0),null);
var end = cljs.core.nth.call(null,vec__16687,(1),null);
var follow_ups = cljs.core.nth.call(null,vec__16687,(2),null);
var selection = vec__16687;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__16686__$1 = G__16686;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__16688 = G__16686__$1;
var parse__$1 = cljs.core.nth.call(null,vec__16688,(0),null);
var end__$1 = cljs.core.nth.call(null,vec__16688,(1),null);
var follow_ups__$1 = cljs.core.nth.call(null,vec__16688,(2),null);
var selection__$1 = vec__16688;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.call(null,index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),root_tag,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.seq.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__16693 = cljs.core.long$.call(null,end__$1);
var G__16694 = instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1);
var G__16695 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__16693;
parses__$1 = G__16694;
G__16686__$1 = G__16695;
continue;

}
}
}
break;
}
});

instaparse.repeat.repeat_parse_enlive.cljs$lang$maxFixedArity = 6;
instaparse.repeat.repeat_parse_no_tag = (function instaparse$repeat$repeat_parse_no_tag(var_args){
var args16696 = [];
var len__7291__auto___16703 = arguments.length;
var i__7292__auto___16704 = (0);
while(true){
if((i__7292__auto___16704 < len__7291__auto___16703)){
args16696.push((arguments[i__7292__auto___16704]));

var G__16705 = (i__7292__auto___16704 + (1));
i__7292__auto___16704 = G__16705;
continue;
} else {
}
break;
}

var G__16698 = args16696.length;
switch (G__16698) {
case 4:
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16696.length)].join('')));

}
});

instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4 = (function (grammar,initial_parser,text,segment){
return instaparse.repeat.repeat_parse_no_tag.call(null,grammar,initial_parser,text,segment,(0));
});

instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,text,segment,index){
var length = cljs.core.count.call(null,text);
var first_result = instaparse.repeat.parse_from_index.call(null,grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$.call(null,index);
var parses = instaparse.auto_flatten_seq.EMPTY;
var G__16700 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,index__$1,first_result);
var vec__16701 = G__16700;
var parse = cljs.core.nth.call(null,vec__16701,(0),null);
var end = cljs.core.nth.call(null,vec__16701,(1),null);
var follow_ups = cljs.core.nth.call(null,vec__16701,(2),null);
var selection = vec__16701;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__16700__$1 = G__16700;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__16702 = G__16700__$1;
var parse__$1 = cljs.core.nth.call(null,vec__16702,(0),null);
var end__$1 = cljs.core.nth.call(null,vec__16702,(1),null);
var follow_ups__$1 = cljs.core.nth.call(null,vec__16702,(2),null);
var selection__$1 = vec__16702;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.call(null,index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__16707 = cljs.core.long$.call(null,end__$1);
var G__16708 = instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1);
var G__16709 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__16707;
parses__$1 = G__16708;
G__16700__$1 = G__16709;
continue;

}
}
}
break;
}
});

instaparse.repeat.repeat_parse_no_tag.cljs$lang$maxFixedArity = 5;
instaparse.repeat.repeat_parse = (function instaparse$repeat$repeat_parse(var_args){
var args16710 = [];
var len__7291__auto___16713 = arguments.length;
var i__7292__auto___16714 = (0);
while(true){
if((i__7292__auto___16714 < len__7291__auto___16713)){
args16710.push((arguments[i__7292__auto___16714]));

var G__16715 = (i__7292__auto___16714 + (1));
i__7292__auto___16714 = G__16715;
continue;
} else {
}
break;
}

var G__16712 = args16710.length;
switch (G__16712) {
case 4:
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16710.length)].join('')));

}
});

instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4 = (function (grammar,initial_parser,output_format,text){
return instaparse.repeat.repeat_parse_no_tag.call(null,grammar,initial_parser,text,instaparse.gll.text__GT_segment.call(null,text));
});

instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,output_format,root_tag,text){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null).call(null,output_format))){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} output-format)"));
}

if(cljs.core._EQ_.call(null,output_format,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238))){
return instaparse.repeat.repeat_parse_hiccup.call(null,grammar,initial_parser,root_tag,text,instaparse.gll.text__GT_segment.call(null,text));
} else {
if(cljs.core._EQ_.call(null,output_format,new cljs.core.Keyword(null,"enlive","enlive",1679023921))){
return instaparse.repeat.repeat_parse_enlive.call(null,grammar,initial_parser,root_tag,text,instaparse.gll.text__GT_segment.call(null,text));
} else {
return null;
}
}
});

instaparse.repeat.repeat_parse.cljs$lang$maxFixedArity = 5;
instaparse.repeat.repeat_parse_with_header = (function instaparse$repeat$repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,root_tag,text){
var segment = instaparse.gll.text__GT_segment.call(null,text);
var length = cljs.core.count.call(null,text);
var header_results = instaparse.repeat.parse_from_index.call(null,grammar,header_parser,text,segment,(0));
if(cljs.core.truth_((function (){var or__6216__auto__ = cljs.core.empty_QMARK_.call(null,header_results);
if(or__6216__auto__){
return or__6216__auto__;
} else {
return new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(header_parser);
}
})())){
return instaparse.repeat.failure_signal;
} else {
var header_result = cljs.core.apply.call(null,cljs.core.max_key,instaparse.repeat.get_end,header_results);
var end = instaparse.repeat.get_end.call(null,header_result);
var repeat_result = instaparse.repeat.repeat_parse_no_tag.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(repeating_parser),text,segment,end);
var span_meta = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null);
if(cljs.core.truth_((function (){var or__6216__auto__ = (repeat_result instanceof instaparse.gll.Failure);
if(or__6216__auto__){
return or__6216__auto__;
} else {
var and__6204__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(repeating_parser),new cljs.core.Keyword(null,"star","star",279424429));
if(and__6204__auto__){
return instaparse.repeat.empty_result_QMARK_.call(null,repeat_result);
} else {
return and__6204__auto__;
}
}
})())){
return instaparse.repeat.failure_signal;
} else {
var G__16718 = (((output_format instanceof cljs.core.Keyword))?output_format.fqn:null);
switch (G__16718) {
case "enlive":
return instaparse.gll.safe_with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),root_tag,new cljs.core.Keyword(null,"content","content",15833224),instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,header_result),repeat_result)], null),span_meta);

break;
case "hiccup":
return instaparse.gll.safe_with_meta.call(null,instaparse.auto_flatten_seq.convert_afs_to_vec.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.auto_flatten_seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null)),header_result),repeat_result)),span_meta);

break;
default:
return instaparse.gll.safe_with_meta.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,header_result),repeat_result),span_meta);

}
}
}
});
instaparse.repeat.try_repeating_parse_strategy_with_header = (function instaparse$repeat$try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format){

var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(start_rule);
var repeating_parser = cljs.core.last.call(null,parsers);
if(cljs.core.not.call(null,(function (){var and__6204__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"cat","cat",-1457810207));
if(and__6204__auto__){
var and__6204__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"star","star",279424429),null,new cljs.core.Keyword(null,"plus","plus",211540661),null], null), null).call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(repeating_parser));
if(cljs.core.truth_(and__6204__auto____$1)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(repeating_parser))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(repeating_parser))));
} else {
return and__6204__auto____$1;
}
} else {
return and__6204__auto__;
}
})())){
return instaparse.repeat.failure_signal;
} else {
var header_parser = cljs.core.apply.call(null,instaparse.combinators_source.cat,cljs.core.butlast.call(null,parsers));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction)){
return instaparse.repeat.repeat_parse_with_header.call(null,grammar,header_parser,repeating_parser,null,start_production,text);
} else {
return instaparse.repeat.repeat_parse_with_header.call(null,grammar,header_parser,repeating_parser,output_format,start_production,text);
}
}
});
instaparse.repeat.try_repeating_parse_strategy = (function instaparse$repeat$try_repeating_parse_strategy(parser,text,start_production){
var grammar = new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser);
var output_format = new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser);
var start_rule = cljs.core.get.call(null,grammar,start_production);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(start_rule),true)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"star","star",279424429))){
return instaparse.repeat.repeat_parse.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"plus","plus",211540661))){
var result = instaparse.repeat.repeat_parse.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
if(cljs.core.truth_(instaparse.repeat.empty_result_QMARK_.call(null,result))){
return instaparse.repeat.failure_signal;
} else {
return result;
}
} else {
return instaparse.repeat.try_repeating_parse_strategy_with_header.call(null,grammar,text,start_production,start_rule,output_format);

}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"star","star",279424429))){
return instaparse.repeat.repeat_parse.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"plus","plus",211540661))){
var result = instaparse.repeat.repeat_parse.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
if(cljs.core.truth_(instaparse.repeat.empty_result_QMARK_.call(null,result))){
return instaparse.repeat.failure_signal;
} else {
return result;
}
} else {
return instaparse.repeat.try_repeating_parse_strategy_with_header.call(null,grammar,text,start_production,start_rule,output_format);

}
}
}
}
});
instaparse.repeat.used_memory_optimization_QMARK_ = (function instaparse$repeat$used_memory_optimization_QMARK_(tree){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tree)));
});

//# sourceMappingURL=repeat.js.map?rel=1471435735583