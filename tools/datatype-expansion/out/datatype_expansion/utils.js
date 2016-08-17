// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('datatype_expansion.utils');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.core.enable_console_print_BANG_.call(null);
datatype_expansion.utils.trace = (function datatype_expansion$utils$trace(x){
cljs.core.println.call(null,"--- trace: ",x);

return x;
});
datatype_expansion.utils.clear_nils = (function datatype_expansion$utils$clear_nils(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__14272){
var vec__14273 = p__14272;
var k = cljs.core.nth.call(null,vec__14273,(0),null);
var v = cljs.core.nth.call(null,vec__14273,(1),null);
return !((v == null));
}),m));
});
datatype_expansion.utils.clear_node = (function datatype_expansion$utils$clear_node(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14276){
var vec__14277 = p__14276;
var k = cljs.core.nth.call(null,vec__14277,(0),null);
var v = cljs.core.nth.call(null,vec__14277,(1),null);
if((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"content","content",15833224))) || (cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"description","description",-1428560544)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,datatype_expansion$utils$clear_node.call(null,v)], null);
}
}),datatype_expansion.utils.clear_nils.call(null,node)));
} else {
if(cljs.core.coll_QMARK_.call(null,node)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (v){
return datatype_expansion$utils$clear_node.call(null,v);
}),node));
} else {
return node;

}
}
});
datatype_expansion.utils.error = (function datatype_expansion$utils$error(e){
throw (new Error(e));
});
datatype_expansion.utils.get_STAR_ = (function datatype_expansion$utils$get_STAR_(m,k,d){
var or__6020__auto__ = (((k instanceof cljs.core.Keyword))?(function (){var or__6020__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return cljs.core.get.call(null,m,cljs.core.name.call(null,k));
}
})():(function (){var or__6020__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return cljs.core.get.call(null,m,cljs.core.keyword.call(null,k));
}
})()
);
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return d;
}
});

//# sourceMappingURL=utils.js.map