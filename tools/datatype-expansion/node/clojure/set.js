// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__20652_SHARP_){
return (max === p1__20652_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args20653 = [];
var len__7291__auto___20659 = arguments.length;
var i__7292__auto___20660 = (0);
while(true){
if((i__7292__auto___20660 < len__7291__auto___20659)){
args20653.push((arguments[i__7292__auto___20660]));

var G__20661 = (i__7292__auto___20660 + (1));
i__7292__auto___20660 = G__20661;
continue;
} else {
}
break;
}

var G__20658 = args20653.length;
switch (G__20658) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7310__auto__ = (new cljs.core.IndexedSeq(args20653.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7310__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq20654){
var G__20655 = cljs.core.first.call(null,seq20654);
var seq20654__$1 = cljs.core.next.call(null,seq20654);
var G__20656 = cljs.core.first.call(null,seq20654__$1);
var seq20654__$2 = cljs.core.next.call(null,seq20654__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__20655,G__20656,seq20654__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args20664 = [];
var len__7291__auto___20670 = arguments.length;
var i__7292__auto___20671 = (0);
while(true){
if((i__7292__auto___20671 < len__7291__auto___20670)){
args20664.push((arguments[i__7292__auto___20671]));

var G__20672 = (i__7292__auto___20671 + (1));
i__7292__auto___20671 = G__20672;
continue;
} else {
}
break;
}

var G__20669 = args20664.length;
switch (G__20669) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7310__auto__ = (new cljs.core.IndexedSeq(args20664.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7310__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__20674 = s2;
var G__20675 = s1;
s1 = G__20674;
s2 = G__20675;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__20663_SHARP_){
return (- cljs.core.count.call(null,p1__20663_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq20665){
var G__20666 = cljs.core.first.call(null,seq20665);
var seq20665__$1 = cljs.core.next.call(null,seq20665);
var G__20667 = cljs.core.first.call(null,seq20665__$1);
var seq20665__$2 = cljs.core.next.call(null,seq20665__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__20666,G__20667,seq20665__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args20676 = [];
var len__7291__auto___20682 = arguments.length;
var i__7292__auto___20683 = (0);
while(true){
if((i__7292__auto___20683 < len__7291__auto___20682)){
args20676.push((arguments[i__7292__auto___20683]));

var G__20684 = (i__7292__auto___20683 + (1));
i__7292__auto___20683 = G__20684;
continue;
} else {
}
break;
}

var G__20681 = args20676.length;
switch (G__20681) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7310__auto__ = (new cljs.core.IndexedSeq(args20676.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7310__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq20677){
var G__20678 = cljs.core.first.call(null,seq20677);
var seq20677__$1 = cljs.core.next.call(null,seq20677);
var G__20679 = cljs.core.first.call(null,seq20677__$1);
var seq20677__$2 = cljs.core.next.call(null,seq20677__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__20678,G__20679,seq20677__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__20686_SHARP_){
return cljs.core.select_keys.call(null,p1__20686_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__20689){
var vec__20690 = p__20689;
var old = cljs.core.nth.call(null,vec__20690,(0),null);
var new$ = cljs.core.nth.call(null,vec__20690,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__20691_SHARP_){
return clojure.set.rename_keys.call(null,p1__20691_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__20694){
var vec__20695 = p__20694;
var k = cljs.core.nth.call(null,vec__20695,(0),null);
var v = cljs.core.nth.call(null,vec__20695,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args20700 = [];
var len__7291__auto___20705 = arguments.length;
var i__7292__auto___20706 = (0);
while(true){
if((i__7292__auto___20706 < len__7291__auto___20705)){
args20700.push((arguments[i__7292__auto___20706]));

var G__20707 = (i__7292__auto___20706 + (1));
i__7292__auto___20706 = G__20707;
continue;
} else {
}
break;
}

var G__20702 = args20700.length;
switch (G__20702) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20700.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__20703 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__20703,(0),null);
var s = cljs.core.nth.call(null,vec__20703,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__20703,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__20703,r,s,idx){
return (function (p1__20696_SHARP_,p2__20697_SHARP_){
return cljs.core.conj.call(null,p1__20696_SHARP_,cljs.core.merge.call(null,p2__20697_SHARP_,x));
});})(found,ks,vec__20703,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__20703,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__20704 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__20704,(0),null);
var s = cljs.core.nth.call(null,vec__20704,(1),null);
var k = cljs.core.nth.call(null,vec__20704,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__20704,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__20704,r,s,k,idx){
return (function (p1__20698_SHARP_,p2__20699_SHARP_){
return cljs.core.conj.call(null,p1__20698_SHARP_,cljs.core.merge.call(null,p2__20699_SHARP_,x));
});})(found,vec__20704,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__20704,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__20709_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__20709_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__20710_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__20710_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1471427570886