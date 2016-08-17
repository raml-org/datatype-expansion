// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('instaparse.reduction');
goog.require('cljs.core');
goog.require('instaparse.auto_flatten_seq');
instaparse.reduction.singleton_QMARK_ = (function instaparse$reduction$singleton_QMARK_(s){
return (cljs.core.seq.call(null,s)) && (cljs.core.not.call(null,cljs.core.next.call(null,s)));
});
instaparse.reduction.red = (function instaparse$reduction$red(parser,f){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"red","red",-969428204),f);
});
instaparse.reduction.raw_non_terminal_reduction = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null);
instaparse.reduction.HiccupNonTerminalReduction = (function instaparse$reduction$HiccupNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
});
instaparse.reduction.EnliveNonTerminalReduction = (function instaparse$reduction$EnliveNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"enlive","enlive",1679023921),new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
});
instaparse.reduction.reduction_types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),instaparse.reduction.HiccupNonTerminalReduction,new cljs.core.Keyword(null,"enlive","enlive",1679023921),instaparse.reduction.EnliveNonTerminalReduction], null);
instaparse.reduction.node_builders = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enlive","enlive",1679023921),(function (tag,item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),(function (){var x__6854__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__6854__auto__);
})()], null);
}),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (tag,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,item], null);
})], null);
instaparse.reduction.standard_non_terminal_reduction = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
instaparse.reduction.apply_reduction = (function instaparse$reduction$apply_reduction(f,result){
var G__7184 = (((new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450).cljs$core$IFn$_invoke$arity$1(f).fqn:null);
switch (G__7184) {
case "raw":
return instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,result);

break;
case "hiccup":
return instaparse.auto_flatten_seq.convert_afs_to_vec.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.auto_flatten_seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(f)], null)),result));

break;
case "enlive":
var content = instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,result);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"content","content",15833224),(((cljs.core.count.call(null,content) === (0)))?null:content)], null);

break;
default:
return f.call(null,result);

}
});
instaparse.reduction.apply_standard_reductions = (function instaparse$reduction$apply_standard_reductions(var_args){
var args7186 = [];
var len__7095__auto___7197 = arguments.length;
var i__7096__auto___7198 = (0);
while(true){
if((i__7096__auto___7198 < len__7095__auto___7197)){
args7186.push((arguments[i__7096__auto___7198]));

var G__7199 = (i__7096__auto___7198 + (1));
i__7096__auto___7198 = G__7199;
continue;
} else {
}
break;
}

var G__7188 = args7186.length;
switch (G__7188) {
case 1:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7186.length)].join('')));

}
});

instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1 = (function (grammar){
return instaparse.reduction.apply_standard_reductions.call(null,instaparse.reduction.standard_non_terminal_reduction,grammar);
});

instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2 = (function (reduction_type,grammar){
var temp__4655__auto__ = instaparse.reduction.reduction_types.call(null,reduction_type);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6800__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$reduction$iter__7189(s__7190){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__7190__$1 = s__7190;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__7190__$1);
if(temp__4657__auto__){
var s__7190__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7190__$2)){
var c__6798__auto__ = cljs.core.chunk_first.call(null,s__7190__$2);
var size__6799__auto__ = cljs.core.count.call(null,c__6798__auto__);
var b__7192 = cljs.core.chunk_buffer.call(null,size__6799__auto__);
if((function (){var i__7191 = (0);
while(true){
if((i__7191 < size__6799__auto__)){
var vec__7195 = cljs.core._nth.call(null,c__6798__auto__,i__7191);
var k = cljs.core.nth.call(null,vec__7195,(0),null);
var v = cljs.core.nth.call(null,vec__7195,(1),null);
cljs.core.chunk_append.call(null,b__7192,(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null)));

var G__7201 = (i__7191 + (1));
i__7191 = G__7201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7192),instaparse$reduction$iter__7189.call(null,cljs.core.chunk_rest.call(null,s__7190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7192),null);
}
} else {
var vec__7196 = cljs.core.first.call(null,s__7190__$2);
var k = cljs.core.nth.call(null,vec__7196,(0),null);
var v = cljs.core.nth.call(null,vec__7196,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null)),instaparse$reduction$iter__7189.call(null,cljs.core.rest.call(null,s__7190__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__4655__auto__))
,null,null));
});})(reduction,temp__4655__auto__))
;
return iter__6800__auto__.call(null,grammar);
})());
} else {
throw [cljs.core.str("Invalid output format"),cljs.core.str(reduction_type),cljs.core.str(". Use :enlive or :hiccup.")].join('');
}
});

instaparse.reduction.apply_standard_reductions.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=reduction.js.map