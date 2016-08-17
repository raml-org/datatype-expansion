// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.auto_flatten_seq');
goog.require('goog.i18n.uChar');
goog.require('instaparse.print');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');

/**
 * @interface
 */
instaparse.gll.ISegment = function(){};

instaparse.gll.subsegment = (function instaparse$gll$subsegment(this$,start_index,end_index_minus_one){
if((!((this$ == null))) && (!((this$.instaparse$gll$ISegment$subsegment$arity$3 == null)))){
return this$.instaparse$gll$ISegment$subsegment$arity$3(this$,start_index,end_index_minus_one);
} else {
var x__6879__auto__ = (((this$ == null))?null:this$);
var m__6880__auto__ = (instaparse.gll.subsegment[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,this$,start_index,end_index_minus_one);
} else {
var m__6880__auto____$1 = (instaparse.gll.subsegment["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,this$,start_index,end_index_minus_one);
} else {
throw cljs.core.missing_protocol.call(null,"ISegment.subsegment",this$);
}
}
}
});

instaparse.gll.toString = (function instaparse$gll$toString(this$){
if((!((this$ == null))) && (!((this$.instaparse$gll$ISegment$toString$arity$1 == null)))){
return this$.instaparse$gll$ISegment$toString$arity$1(this$);
} else {
var x__6879__auto__ = (((this$ == null))?null:this$);
var m__6880__auto__ = (instaparse.gll.toString[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,this$);
} else {
var m__6880__auto____$1 = (instaparse.gll.toString["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISegment.toString",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {instaparse.gll.ISegment}
*/
instaparse.gll.Segment = (function (text,offset,count){
this.text = text;
this.offset = offset;
this.count = count;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$ = true;

instaparse.gll.Segment.prototype.instaparse$gll$ISegment$subsegment$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
return (new instaparse.gll.Segment(self__.text,(self__.offset + start),(end - start)));
});

instaparse.gll.Segment.prototype.instaparse$gll$ISegment$toString$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.subs.call(null,self__.text,self__.offset,(self__.offset + self__.count));
});

instaparse.gll.Segment.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.count;
});

instaparse.gll.Segment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"count","count",-514511684,null)], null);
});

instaparse.gll.Segment.cljs$lang$type = true;

instaparse.gll.Segment.cljs$lang$ctorStr = "instaparse.gll/Segment";

instaparse.gll.Segment.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"instaparse.gll/Segment");
});

instaparse.gll.__GT_Segment = (function instaparse$gll$__GT_Segment(text,offset,count){
return (new instaparse.gll.Segment(text,offset,count));
});

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.call(null,grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__16104 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__16104) {
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_parse.call(null,parser,index,tramp);

break;
case "nt":
return instaparse.gll.non_terminal_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp);

break;
case "char":
return instaparse.gll.char_range_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__16107 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__16107) {
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_full_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_full_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp);

break;
case "nt":
return instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_full_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_full_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_full_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_full_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_full_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp);

break;
case "char":
return instaparse.gll.char_range_full_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_full_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Failure = (function (index,reason,__meta,__extmap,__hash){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6838__auto__,k__6839__auto__){
var self__ = this;
var this__6838__auto____$1 = this;
return cljs.core._lookup.call(null,this__6838__auto____$1,k__6839__auto__,null);
});

instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6840__auto__,k16110,else__6841__auto__){
var self__ = this;
var this__6840__auto____$1 = this;
var G__16112 = (((k16110 instanceof cljs.core.Keyword))?k16110.fqn:null);
switch (G__16112) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16110,else__6841__auto__);

}
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6852__auto__,writer__6853__auto__,opts__6854__auto__){
var self__ = this;
var this__6852__auto____$1 = this;
var pr_pair__6855__auto__ = ((function (this__6852__auto____$1){
return (function (keyval__6856__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6853__auto__,cljs.core.pr_writer,""," ","",opts__6854__auto__,keyval__6856__auto__);
});})(this__6852__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6853__auto__,pr_pair__6855__auto__,"#instaparse.gll.Failure{",", ","}",opts__6854__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IIterable$ = true;

instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16109){
var self__ = this;
var G__16109__$1 = this;
return (new cljs.core.RecordIter((0),G__16109__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6832__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6842__auto__){
var self__ = this;
var this__6842__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6833__auto__){
var self__ = this;
var this__6833__auto____$1 = this;
var h__6651__auto__ = self__.__hash;
if(!((h__6651__auto__ == null))){
return h__6651__auto__;
} else {
var h__6651__auto____$1 = cljs.core.hash_imap.call(null,this__6833__auto____$1);
self__.__hash = h__6651__auto____$1;

return h__6651__auto____$1;
}
});

instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6834__auto__,other__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6204__auto__ = other__6835__auto__;
if(cljs.core.truth_(and__6204__auto__)){
var and__6204__auto____$1 = (this__6834__auto____$1.constructor === other__6835__auto__.constructor);
if(and__6204__auto____$1){
return cljs.core.equiv_map.call(null,this__6834__auto____$1,other__6835__auto__);
} else {
return and__6204__auto____$1;
}
} else {
return and__6204__auto__;
}
})())){
return true;
} else {
return false;
}
});

instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6847__auto__,k__6848__auto__){
var self__ = this;
var this__6847__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null], null), null),k__6848__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6847__auto____$1),self__.__meta),k__6848__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6848__auto__)),null));
}
});

instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6845__auto__,k__6846__auto__,G__16109){
var self__ = this;
var this__6845__auto____$1 = this;
var pred__16113 = cljs.core.keyword_identical_QMARK_;
var expr__16114 = k__6846__auto__;
if(cljs.core.truth_(pred__16113.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__16114))){
return (new instaparse.gll.Failure(G__16109,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16113.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759),expr__16114))){
return (new instaparse.gll.Failure(self__.index,G__16109,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6846__auto__,G__16109),null));
}
}
});

instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6850__auto__){
var self__ = this;
var this__6850__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6837__auto__,G__16109){
var self__ = this;
var this__6837__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__16109,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6843__auto__,entry__6844__auto__){
var self__ = this;
var this__6843__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6844__auto__)){
return cljs.core._assoc.call(null,this__6843__auto____$1,cljs.core._nth.call(null,entry__6844__auto__,(0)),cljs.core._nth.call(null,entry__6844__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6843__auto____$1,entry__6844__auto__);
}
});

instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"reason","reason",-430220232,null)], null);
});

instaparse.gll.Failure.cljs$lang$type = true;

instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__6872__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Failure");
});

instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__6872__auto__,writer__6873__auto__){
return cljs.core._write.call(null,writer__6873__auto__,"instaparse.gll/Failure");
});

instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__16111){
return (new instaparse.gll.Failure(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__16111),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(G__16111),null,cljs.core.dissoc.call(null,G__16111,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759)),null));
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = true;

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write.call(null,writer,(function (){var sb__7202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16117_16119 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16118_16120 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16117_16119,_STAR_print_fn_STAR_16118_16120,sb__7202__auto__,fail__$1){
return (function (x__7203__auto__){
return sb__7202__auto__.append(x__7203__auto__);
});})(_STAR_print_newline_STAR_16117_16119,_STAR_print_fn_STAR_16118_16120,sb__7202__auto__,fail__$1))
;

try{instaparse.failure.pprint_failure.call(null,fail__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16118_16120;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16117_16119;
}
return [cljs.core.str(sb__7202__auto__)].join('');
})());
});
/**
 * Converts a string to a Segment, which has fast subsequencing
 */
instaparse.gll.text__GT_segment = (function instaparse$gll$text__GT_segment(s){
return (new instaparse.gll.Segment(s,(0),cljs.core.count.call(null,s)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,__meta,__extmap,__hash){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6838__auto__,k__6839__auto__){
var self__ = this;
var this__6838__auto____$1 = this;
return cljs.core._lookup.call(null,this__6838__auto____$1,k__6839__auto__,null);
});

instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6840__auto__,k16122,else__6841__auto__){
var self__ = this;
var this__6840__auto____$1 = this;
var G__16124 = (((k16122 instanceof cljs.core.Keyword))?k16122.fqn:null);
switch (G__16124) {
case "msg-cache":
return self__.msg_cache;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "generation":
return self__.generation;

break;
case "failure":
return self__.failure;

break;
case "fail-index":
return self__.fail_index;

break;
case "grammar":
return self__.grammar;

break;
case "success":
return self__.success;

break;
case "nodes":
return self__.nodes;

break;
case "node-builder":
return self__.node_builder;

break;
case "segment":
return self__.segment;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "text":
return self__.text;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16122,else__6841__auto__);

}
});

instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6852__auto__,writer__6853__auto__,opts__6854__auto__){
var self__ = this;
var this__6852__auto____$1 = this;
var pr_pair__6855__auto__ = ((function (this__6852__auto____$1){
return (function (keyval__6856__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6853__auto__,cljs.core.pr_writer,""," ","",opts__6854__auto__,keyval__6856__auto__);
});})(this__6852__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6853__auto__,pr_pair__6855__auto__,"#instaparse.gll.Tramp{",", ","}",opts__6854__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IIterable$ = true;

instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16121){
var self__ = this;
var G__16121__$1 = this;
return (new cljs.core.RecordIter((0),G__16121__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6832__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6842__auto__){
var self__ = this;
var this__6842__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6833__auto__){
var self__ = this;
var this__6833__auto____$1 = this;
var h__6651__auto__ = self__.__hash;
if(!((h__6651__auto__ == null))){
return h__6651__auto__;
} else {
var h__6651__auto____$1 = cljs.core.hash_imap.call(null,this__6833__auto____$1);
self__.__hash = h__6651__auto____$1;

return h__6651__auto____$1;
}
});

instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6834__auto__,other__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6204__auto__ = other__6835__auto__;
if(cljs.core.truth_(and__6204__auto__)){
var and__6204__auto____$1 = (this__6834__auto____$1.constructor === other__6835__auto__.constructor);
if(and__6204__auto____$1){
return cljs.core.equiv_map.call(null,this__6834__auto____$1,other__6835__auto__);
} else {
return and__6204__auto____$1;
}
} else {
return and__6204__auto__;
}
})())){
return true;
} else {
return false;
}
});

instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6847__auto__,k__6848__auto__){
var self__ = this;
var this__6847__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),null,new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"failure","failure",720415879),null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__6848__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6847__auto____$1),self__.__meta),k__6848__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6848__auto__)),null));
}
});

instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6845__auto__,k__6846__auto__,G__16121){
var self__ = this;
var this__6845__auto____$1 = this;
var pred__16125 = cljs.core.keyword_identical_QMARK_;
var expr__16126 = k__6846__auto__;
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__16126))){
return (new instaparse.gll.Tramp(G__16121,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,G__16121,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__16121,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__16121,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__16121,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__16121,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__16121,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__16121,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__16121,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__16121,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__16121,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"success","success",1890645906),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__16121,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16125.call(null,new cljs.core.Keyword(null,"failure","failure",720415879),expr__16126))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__16121,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6846__auto__,G__16121),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});

instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6850__auto__){
var self__ = this;
var this__6850__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6837__auto__,G__16121){
var self__ = this;
var this__6837__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__16121,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6843__auto__,entry__6844__auto__){
var self__ = this;
var this__6843__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6844__auto__)){
return cljs.core._assoc.call(null,this__6843__auto____$1,cljs.core._nth.call(null,entry__6844__auto__,(0)),cljs.core._nth.call(null,entry__6844__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6843__auto____$1,entry__6844__auto__);
}
});

instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"segment","segment",675610331,null),new cljs.core.Symbol(null,"fail-index","fail-index",1889258450,null),new cljs.core.Symbol(null,"node-builder","node-builder",-316031078,null),cljs.core.with_meta(new cljs.core.Symbol(null,"stack","stack",847125597,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"next-stack","next-stack",1158600799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"generation","generation",-492010517,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"negative-listeners","negative-listeners",1695772619,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"msg-cache","msg-cache",906756457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null))], null);
});

instaparse.gll.Tramp.cljs$lang$type = true;

instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__6872__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});

instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__6872__auto__,writer__6873__auto__){
return cljs.core._write.call(null,writer__6873__auto__,"instaparse.gll/Tramp");
});

instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,null,null,null));
});

instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__16123){
return (new instaparse.gll.Tramp(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__16123),new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__16123),null,cljs.core.dissoc.call(null,G__16123,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879)),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var args16129 = [];
var len__7291__auto___16132 = arguments.length;
var i__7292__auto___16133 = (0);
while(true){
if((i__7292__auto___16133 < len__7291__auto___16132)){
args16129.push((arguments[i__7292__auto___16133]));

var G__16134 = (i__7292__auto___16133 + (1));
i__7292__auto___16133 = G__16134;
continue;
} else {
}
break;
}

var G__16131 = args16129.length;
switch (G__16131) {
case 2:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16129.length)].join('')));

}
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = (function (grammar,text){
return instaparse.gll.make_tramp.call(null,grammar,text,instaparse.gll.text__GT_segment.call(null,text),(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.call(null,grammar,text,segment,(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.call(null,grammar,text,instaparse.gll.text__GT_segment.call(null,text),fail_index,node_builder);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),cljs.core.sorted_map_by.call(null,cljs.core._GT_),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,(new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null)),null,null,null));
});

instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5;
instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,tramp.text),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap,__hash){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6838__auto__,k__6839__auto__){
var self__ = this;
var this__6838__auto____$1 = this;
return cljs.core._lookup.call(null,this__6838__auto____$1,k__6839__auto__,null);
});

instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6840__auto__,k16137,else__6841__auto__){
var self__ = this;
var this__6840__auto____$1 = this;
var G__16139 = (((k16137 instanceof cljs.core.Keyword))?k16137.fqn:null);
switch (G__16139) {
case "listeners":
return self__.listeners;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "results":
return self__.results;

break;
case "full-results":
return self__.full_results;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16137,else__6841__auto__);

}
});

instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6852__auto__,writer__6853__auto__,opts__6854__auto__){
var self__ = this;
var this__6852__auto____$1 = this;
var pr_pair__6855__auto__ = ((function (this__6852__auto____$1){
return (function (keyval__6856__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6853__auto__,cljs.core.pr_writer,""," ","",opts__6854__auto__,keyval__6856__auto__);
});})(this__6852__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6853__auto__,pr_pair__6855__auto__,"#instaparse.gll.Node{",", ","}",opts__6854__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IIterable$ = true;

instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16136){
var self__ = this;
var G__16136__$1 = this;
return (new cljs.core.RecordIter((0),G__16136__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6832__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6842__auto__){
var self__ = this;
var this__6842__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6833__auto__){
var self__ = this;
var this__6833__auto____$1 = this;
var h__6651__auto__ = self__.__hash;
if(!((h__6651__auto__ == null))){
return h__6651__auto__;
} else {
var h__6651__auto____$1 = cljs.core.hash_imap.call(null,this__6833__auto____$1);
self__.__hash = h__6651__auto____$1;

return h__6651__auto____$1;
}
});

instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6834__auto__,other__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6204__auto__ = other__6835__auto__;
if(cljs.core.truth_(and__6204__auto__)){
var and__6204__auto____$1 = (this__6834__auto____$1.constructor === other__6835__auto__.constructor);
if(and__6204__auto____$1){
return cljs.core.equiv_map.call(null,this__6834__auto____$1,other__6835__auto__);
} else {
return and__6204__auto____$1;
}
} else {
return and__6204__auto__;
}
})())){
return true;
} else {
return false;
}
});

instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6847__auto__,k__6848__auto__){
var self__ = this;
var this__6847__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-results","full-results",-1500225407),null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),k__6848__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6847__auto____$1),self__.__meta),k__6848__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6848__auto__)),null));
}
});

instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6845__auto__,k__6846__auto__,G__16136){
var self__ = this;
var this__6845__auto____$1 = this;
var pred__16140 = cljs.core.keyword_identical_QMARK_;
var expr__16141 = k__6846__auto__;
if(cljs.core.truth_(pred__16140.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__16141))){
return (new instaparse.gll.Node(G__16136,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16140.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),expr__16141))){
return (new instaparse.gll.Node(self__.listeners,G__16136,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16140.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),expr__16141))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__16136,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16140.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407),expr__16141))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__16136,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6846__auto__,G__16136),null));
}
}
}
}
});

instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6850__auto__){
var self__ = this;
var this__6850__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6837__auto__,G__16136){
var self__ = this;
var this__6837__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__16136,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6843__auto__,entry__6844__auto__){
var self__ = this;
var this__6843__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6844__auto__)){
return cljs.core._assoc.call(null,this__6843__auto____$1,cljs.core._nth.call(null,entry__6844__auto__,(0)),cljs.core._nth.call(null,entry__6844__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6843__auto____$1,entry__6844__auto__);
}
});

instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"full-listeners","full-listeners",1691153354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"full-results","full-results",140306120,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"mutable","mutable",-1778657503,null)], null))], null);
});

instaparse.gll.Node.cljs$lang$type = true;

instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__6872__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Node");
});

instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__6872__auto__,writer__6873__auto__){
return cljs.core._write.call(null,writer__6873__auto__,"instaparse.gll/Node");
});

instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__16138){
return (new instaparse.gll.Node(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__16138),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(G__16138),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(G__16138),new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(G__16138),null,cljs.core.dissoc.call(null,G__16138,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return tramp.stack = cljs.core.conj.call(null,tramp.stack,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = tramp.msg_cache;
var i = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.call(null,cache,k,(0));
var f = ((function (cache,i,k,c){
return (function (){
return listener.call(null,result);
});})(cache,i,k,c))
;



if((c > tramp.generation)){
tramp.next_stack = cljs.core.conj.call(null,tramp.next_stack,f);
} else {
tramp.stack = cljs.core.conj.call(null,tramp.stack,f);
}

return tramp.msg_cache = cljs.core.assoc.call(null,tramp.msg_cache,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = tramp.nodes;
var temp__4657__auto__ = nodes.call(null,node_key);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count.call(null,node.listeners) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = tramp.nodes;
var temp__4657__auto__ = nodes.call(null,node_key);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count.call(null,node.full_listeners) > (0))) || ((cljs.core.count.call(null,node.listeners) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = tramp.nodes;
var temp__4657__auto__ = nodes.call(null,node_key);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count.call(null,node.full_results) > (0))) || ((cljs.core.count.call(null,node.results) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = tramp.nodes;
var temp__4657__auto__ = nodes.call(null,node_key);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count.call(null,node.full_results) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = tramp.nodes;
var temp__4655__auto__ = nodes.call(null,node_key);
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return node;
} else {
var node = instaparse.gll.make_node.call(null);

tramp.nodes = cljs.core.assoc.call(null,tramp.nodes,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || (obj.cljs$core$IWithMeta$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj))){
return cljs.core.with_meta.call(null,obj,metamap);
} else {
return obj;
}
});
/**
 * Pushes a result into the trampoline's node.
 * Categorizes as either result or full-result.
 * Schedules notification to all existing listeners of result
 * (Full listeners only get notified about full results)
 */
instaparse.gll.push_result = (function instaparse$gll$push_result(tramp,node_key,result){

var node = instaparse.gll.node_get.call(null,tramp,node_key);
var parser = node_key.call(null,(1));
var result__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"result","result",1415092211),null):result);
var result__$2 = (function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction_function = temp__4655__auto__;
return instaparse.gll.make_success.call(null,instaparse.gll.safe_with_meta.call(null,instaparse.reduction.apply_reduction.call(null,reduction_function,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),node_key.call(null,(0)),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1)], null)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_.call(null,tramp,result__$2);
var results = (cljs.core.truth_(total_QMARK_)?node.full_results:node.results);
if(cljs.core.not.call(null,results.call(null,result__$2))){

if(cljs.core.truth_(total_QMARK_)){
node.full_results = cljs.core.conj.call(null,node.full_results,result__$2);
} else {
node.results = cljs.core.conj.call(null,node.results,result__$2);
}

var seq__16154_16162 = cljs.core.seq.call(null,node.listeners);
var chunk__16155_16163 = null;
var count__16156_16164 = (0);
var i__16157_16165 = (0);
while(true){
if((i__16157_16165 < count__16156_16164)){
var listener_16166 = cljs.core._nth.call(null,chunk__16155_16163,i__16157_16165);
instaparse.gll.push_message.call(null,tramp,listener_16166,result__$2);

var G__16167 = seq__16154_16162;
var G__16168 = chunk__16155_16163;
var G__16169 = count__16156_16164;
var G__16170 = (i__16157_16165 + (1));
seq__16154_16162 = G__16167;
chunk__16155_16163 = G__16168;
count__16156_16164 = G__16169;
i__16157_16165 = G__16170;
continue;
} else {
var temp__4657__auto___16171 = cljs.core.seq.call(null,seq__16154_16162);
if(temp__4657__auto___16171){
var seq__16154_16172__$1 = temp__4657__auto___16171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16154_16172__$1)){
var c__7027__auto___16173 = cljs.core.chunk_first.call(null,seq__16154_16172__$1);
var G__16174 = cljs.core.chunk_rest.call(null,seq__16154_16172__$1);
var G__16175 = c__7027__auto___16173;
var G__16176 = cljs.core.count.call(null,c__7027__auto___16173);
var G__16177 = (0);
seq__16154_16162 = G__16174;
chunk__16155_16163 = G__16175;
count__16156_16164 = G__16176;
i__16157_16165 = G__16177;
continue;
} else {
var listener_16178 = cljs.core.first.call(null,seq__16154_16172__$1);
instaparse.gll.push_message.call(null,tramp,listener_16178,result__$2);

var G__16179 = cljs.core.next.call(null,seq__16154_16172__$1);
var G__16180 = null;
var G__16181 = (0);
var G__16182 = (0);
seq__16154_16162 = G__16179;
chunk__16155_16163 = G__16180;
count__16156_16164 = G__16181;
i__16157_16165 = G__16182;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(total_QMARK_)){
var seq__16158 = cljs.core.seq.call(null,node.full_listeners);
var chunk__16159 = null;
var count__16160 = (0);
var i__16161 = (0);
while(true){
if((i__16161 < count__16160)){
var listener = cljs.core._nth.call(null,chunk__16159,i__16161);
instaparse.gll.push_message.call(null,tramp,listener,result__$2);

var G__16183 = seq__16158;
var G__16184 = chunk__16159;
var G__16185 = count__16160;
var G__16186 = (i__16161 + (1));
seq__16158 = G__16183;
chunk__16159 = G__16184;
count__16160 = G__16185;
i__16161 = G__16186;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16158);
if(temp__4657__auto__){
var seq__16158__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16158__$1)){
var c__7027__auto__ = cljs.core.chunk_first.call(null,seq__16158__$1);
var G__16187 = cljs.core.chunk_rest.call(null,seq__16158__$1);
var G__16188 = c__7027__auto__;
var G__16189 = cljs.core.count.call(null,c__7027__auto__);
var G__16190 = (0);
seq__16158 = G__16187;
chunk__16159 = G__16188;
count__16160 = G__16189;
i__16161 = G__16190;
continue;
} else {
var listener = cljs.core.first.call(null,seq__16158__$1);
instaparse.gll.push_message.call(null,tramp,listener,result__$2);

var G__16191 = cljs.core.next.call(null,seq__16158__$1);
var G__16192 = null;
var G__16193 = (0);
var G__16194 = (0);
seq__16158 = G__16191;
chunk__16159 = G__16192;
count__16160 = G__16193;
i__16161 = G__16194;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing results.
 * Initiates parse if necessary
 */
instaparse.gll.push_listener = (function instaparse$gll$push_listener(tramp,node_key,listener){

var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_.call(null,tramp,node_key);
var node = instaparse.gll.node_get.call(null,tramp,node_key);

node.listeners = cljs.core.conj.call(null,node.listeners,listener);

var seq__16203_16211 = cljs.core.seq.call(null,node.results);
var chunk__16204_16212 = null;
var count__16205_16213 = (0);
var i__16206_16214 = (0);
while(true){
if((i__16206_16214 < count__16205_16213)){
var result_16215 = cljs.core._nth.call(null,chunk__16204_16212,i__16206_16214);
instaparse.gll.push_message.call(null,tramp,listener,result_16215);

var G__16216 = seq__16203_16211;
var G__16217 = chunk__16204_16212;
var G__16218 = count__16205_16213;
var G__16219 = (i__16206_16214 + (1));
seq__16203_16211 = G__16216;
chunk__16204_16212 = G__16217;
count__16205_16213 = G__16218;
i__16206_16214 = G__16219;
continue;
} else {
var temp__4657__auto___16220 = cljs.core.seq.call(null,seq__16203_16211);
if(temp__4657__auto___16220){
var seq__16203_16221__$1 = temp__4657__auto___16220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16203_16221__$1)){
var c__7027__auto___16222 = cljs.core.chunk_first.call(null,seq__16203_16221__$1);
var G__16223 = cljs.core.chunk_rest.call(null,seq__16203_16221__$1);
var G__16224 = c__7027__auto___16222;
var G__16225 = cljs.core.count.call(null,c__7027__auto___16222);
var G__16226 = (0);
seq__16203_16211 = G__16223;
chunk__16204_16212 = G__16224;
count__16205_16213 = G__16225;
i__16206_16214 = G__16226;
continue;
} else {
var result_16227 = cljs.core.first.call(null,seq__16203_16221__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_16227);

var G__16228 = cljs.core.next.call(null,seq__16203_16221__$1);
var G__16229 = null;
var G__16230 = (0);
var G__16231 = (0);
seq__16203_16211 = G__16228;
chunk__16204_16212 = G__16229;
count__16205_16213 = G__16230;
i__16206_16214 = G__16231;
continue;
}
} else {
}
}
break;
}

var seq__16207_16232 = cljs.core.seq.call(null,node.full_results);
var chunk__16208_16233 = null;
var count__16209_16234 = (0);
var i__16210_16235 = (0);
while(true){
if((i__16210_16235 < count__16209_16234)){
var result_16236 = cljs.core._nth.call(null,chunk__16208_16233,i__16210_16235);
instaparse.gll.push_message.call(null,tramp,listener,result_16236);

var G__16237 = seq__16207_16232;
var G__16238 = chunk__16208_16233;
var G__16239 = count__16209_16234;
var G__16240 = (i__16210_16235 + (1));
seq__16207_16232 = G__16237;
chunk__16208_16233 = G__16238;
count__16209_16234 = G__16239;
i__16210_16235 = G__16240;
continue;
} else {
var temp__4657__auto___16241 = cljs.core.seq.call(null,seq__16207_16232);
if(temp__4657__auto___16241){
var seq__16207_16242__$1 = temp__4657__auto___16241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16207_16242__$1)){
var c__7027__auto___16243 = cljs.core.chunk_first.call(null,seq__16207_16242__$1);
var G__16244 = cljs.core.chunk_rest.call(null,seq__16207_16242__$1);
var G__16245 = c__7027__auto___16243;
var G__16246 = cljs.core.count.call(null,c__7027__auto___16243);
var G__16247 = (0);
seq__16207_16232 = G__16244;
chunk__16208_16233 = G__16245;
count__16209_16234 = G__16246;
i__16210_16235 = G__16247;
continue;
} else {
var result_16248 = cljs.core.first.call(null,seq__16207_16242__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_16248);

var G__16249 = cljs.core.next.call(null,seq__16207_16242__$1);
var G__16250 = null;
var G__16251 = (0);
var G__16252 = (0);
seq__16207_16232 = G__16249;
chunk__16208_16233 = G__16250;
count__16209_16234 = G__16251;
i__16210_16235 = G__16252;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not.call(null,listener_already_exists_QMARK_)){
return instaparse.gll.push_stack.call(null,tramp,((function (listener_already_exists_QMARK_,node){
return (function (){
return instaparse.gll._parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
});})(listener_already_exists_QMARK_,node))
);
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing full results.
 */
instaparse.gll.push_full_listener = (function instaparse$gll$push_full_listener(tramp,node_key,listener){
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_.call(null,tramp,node_key);
var node = instaparse.gll.node_get.call(null,tramp,node_key);

node.full_listeners = cljs.core.conj.call(null,node.full_listeners,listener);

var seq__16257_16261 = cljs.core.seq.call(null,node.full_results);
var chunk__16258_16262 = null;
var count__16259_16263 = (0);
var i__16260_16264 = (0);
while(true){
if((i__16260_16264 < count__16259_16263)){
var result_16265 = cljs.core._nth.call(null,chunk__16258_16262,i__16260_16264);
instaparse.gll.push_message.call(null,tramp,listener,result_16265);

var G__16266 = seq__16257_16261;
var G__16267 = chunk__16258_16262;
var G__16268 = count__16259_16263;
var G__16269 = (i__16260_16264 + (1));
seq__16257_16261 = G__16266;
chunk__16258_16262 = G__16267;
count__16259_16263 = G__16268;
i__16260_16264 = G__16269;
continue;
} else {
var temp__4657__auto___16270 = cljs.core.seq.call(null,seq__16257_16261);
if(temp__4657__auto___16270){
var seq__16257_16271__$1 = temp__4657__auto___16270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16257_16271__$1)){
var c__7027__auto___16272 = cljs.core.chunk_first.call(null,seq__16257_16271__$1);
var G__16273 = cljs.core.chunk_rest.call(null,seq__16257_16271__$1);
var G__16274 = c__7027__auto___16272;
var G__16275 = cljs.core.count.call(null,c__7027__auto___16272);
var G__16276 = (0);
seq__16257_16261 = G__16273;
chunk__16258_16262 = G__16274;
count__16259_16263 = G__16275;
i__16260_16264 = G__16276;
continue;
} else {
var result_16277 = cljs.core.first.call(null,seq__16257_16271__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_16277);

var G__16278 = cljs.core.next.call(null,seq__16257_16271__$1);
var G__16279 = null;
var G__16280 = (0);
var G__16281 = (0);
seq__16257_16261 = G__16278;
chunk__16258_16262 = G__16279;
count__16259_16263 = G__16280;
i__16260_16264 = G__16281;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not.call(null,full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack.call(null,tramp,((function (full_listener_already_exists_QMARK_,node){
return (function (){
return instaparse.gll._full_parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
});})(full_listener_already_exists_QMARK_,node))
);
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return tramp.negative_listeners = instaparse.gll.merge_negative_listeners.call(null,tramp.negative_listeners,cljs.core.PersistentArrayMap.fromArray([creator.call(null,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)], true, false));
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){
tramp.failure = (function (failure){
var current_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure);
var G__16283 = cljs.core.compare.call(null,index,current_index);
switch (G__16283) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.compare.call(null,index,current_index))].join('')));

}
}).call(null,tramp.failure);

if(cljs.core._EQ_.call(null,index,tramp.fail_index)){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,instaparse.gll.build_node_with_meta.call(null,tramp.node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),cljs.core.subs.call(null,tramp.text,index),index,cljs.core.count.call(null,tramp.text)),cljs.core.count.call(null,tramp.text)));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(tramp){
var top = cljs.core.peek.call(null,tramp.stack);
tramp.stack = cljs.core.pop.call(null,tramp.stack);

return top.call(null);
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var args16285 = [];
var len__7291__auto___16289 = arguments.length;
var i__7292__auto___16290 = (0);
while(true){
if((i__7292__auto___16290 < len__7291__auto___16289)){
args16285.push((arguments[i__7292__auto___16290]));

var G__16291 = (i__7292__auto___16290 + (1));
i__7292__auto___16290 = G__16291;
continue;
} else {
}
break;
}

var G__16287 = args16285.length;
switch (G__16287) {
case 1:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16285.length)].join('')));

}
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = (function (tramp){
return instaparse.gll.run.call(null,tramp,null);
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = tramp.stack;
if(cljs.core.truth_(tramp.success)){
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(tramp.success),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
tramp.success = null;

return instaparse.gll.run.call(null,tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count.call(null,stack) > (0))){
instaparse.gll.step.call(null,tramp);

var G__16293 = tramp;
var G__16294 = found_result_QMARK_;
tramp = G__16293;
found_result_QMARK_ = G__16294;
continue;
} else {
if((cljs.core.count.call(null,tramp.negative_listeners) > (0))){
var vec__16288 = cljs.core.first.call(null,tramp.negative_listeners);
var index = cljs.core.nth.call(null,vec__16288,(0),null);
var listeners = cljs.core.nth.call(null,vec__16288,(1),null);
var listener = cljs.core.peek.call(null,listeners);
listener.call(null);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,listeners),(1))){
tramp.negative_listeners = cljs.core.dissoc.call(null,tramp.negative_listeners,index);
} else {
tramp.negative_listeners = cljs.core.update.call(null,tramp.negative_listeners,index,cljs.core.pop);
}

var G__16295 = tramp;
var G__16296 = found_result_QMARK_;
tramp = G__16295;
found_result_QMARK_ = G__16296;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = tramp.next_stack;

tramp.stack = next_stack;

tramp.next_stack = cljs.core.PersistentVector.EMPTY;

tramp.generation = (tramp.generation + (1));


var G__16297 = tramp;
var G__16298 = null;
tramp = G__16297;
found_result_QMARK_ = G__16298;
continue;
} else {
return null;

}
}
}
}
break;
}
});

instaparse.gll.run.cljs$lang$maxFixedArity = 2;
instaparse.gll.NodeListener = (function instaparse$gll$NodeListener(node_key,tramp){
return (function (result){

return instaparse.gll.push_result.call(null,tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,node_key.call(null,(0))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__16301 = result;
var map__16301__$1 = ((((!((map__16301 == null)))?((((map__16301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16301):map__16301);
var parsed_result = cljs.core.get.call(null,map__16301__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__16301__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core.seq.call(null,parser_sequence)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse$gll$CatListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__16305 = result;
var map__16305__$1 = ((((!((map__16305 == null)))?((((map__16305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16305):map__16305);
var parsed_result = cljs.core.get.call(null,map__16305__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__16305__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_.call(null,parser_sequence))){
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse$gll$CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
if(cljs.core.seq.call(null,parser_sequence)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse$gll$CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__16309 = result;
var map__16309__$1 = ((((!((map__16309 == null)))?((((map__16309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16309):map__16309);
var parsed_result = cljs.core.get.call(null,map__16309__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__16309__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.call(null,continue_index,prev_index)){
if((cljs.core.count.call(null,results_so_far) === (0))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse$gll$PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));

return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__16313 = result;
var map__16313__$1 = ((((!((map__16313 == null)))?((((map__16313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16313):map__16313);
var parsed_result = cljs.core.get.call(null,map__16313__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__16313__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.call(null,continue_index,prev_index)){
if((cljs.core.count.call(null,results_so_far) === (0))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse$gll$PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__16317 = result;
var map__16317__$1 = ((((!((map__16317 == null)))?((((map__16317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16317):map__16317);
var parsed_result = cljs.core.get.call(null,map__16317__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__16317__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(((m <= cljs.core.count.call(null,new_results_so_far))) && ((cljs.core.count.call(null,new_results_so_far) <= n))){
instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
}

if((cljs.core.count.call(null,new_results_so_far) < n)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse$gll$RepListener.call(null,new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__16321 = result;
var map__16321__$1 = ((((!((map__16321 == null)))?((((map__16321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16321):map__16321);
var parsed_result = cljs.core.get.call(null,map__16321__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__16321__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
if(((m <= cljs.core.count.call(null,new_results_so_far))) && ((cljs.core.count.call(null,new_results_so_far) <= n))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((cljs.core.count.call(null,new_results_so_far) < n)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse$gll$RepFullListener.call(null,new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return tramp.success = result;
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.text;
var end = (function (){var x__6554__auto__ = cljs.core.count.call(null,text);
var y__6555__auto__ = (index + cljs.core.count.call(null,string));
return ((x__6554__auto__ < y__6555__auto__) ? x__6554__auto__ : y__6555__auto__);
})();
var head = cljs.core.subs.call(null,text,index,end);
if(cljs.core._EQ_.call(null,string,head)){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.text;
var end = (function (){var x__6554__auto__ = cljs.core.count.call(null,text);
var y__6555__auto__ = (index + cljs.core.count.call(null,string));
return ((x__6554__auto__ < y__6555__auto__) ? x__6554__auto__ : y__6555__auto__);
})();
var head = cljs.core.subs.call(null,text,index,end);
if((cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text))) && (cljs.core._EQ_.call(null,string,head))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.call(null,s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.text;
var end = (function (){var x__6554__auto__ = cljs.core.count.call(null,text);
var y__6555__auto__ = (index + cljs.core.count.call(null,string));
return ((x__6554__auto__ < y__6555__auto__) ? x__6554__auto__ : y__6555__auto__);
})();
var head = cljs.core.subs.call(null,text,index,end);
if(cljs.core.truth_(instaparse.gll.equals_ignore_case.call(null,string,head))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.text;
var end = (function (){var x__6554__auto__ = cljs.core.count.call(null,text);
var y__6555__auto__ = (index + cljs.core.count.call(null,string));
return ((x__6554__auto__ < y__6555__auto__) ? x__6554__auto__ : y__6555__auto__);
})();
var head = cljs.core.subs.call(null,text,index,end);
if(cljs.core.truth_((function (){var and__6204__auto__ = cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text));
if(and__6204__auto__){
return instaparse.gll.equals_ignore_case.call(null,string,head);
} else {
return and__6204__auto__;
}
})())){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count.call(null,text))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = text.charCodeAt(index);
if(((lo <= code)) && ((code <= hi))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,cljs.core.char$.call(null,code),(index + (1))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = goog.i18n.uChar.getCodePointAround(text,(index | (0)));
var char_string = goog.i18n.uChar.fromCharCode(code_point);
if(((lo <= code_point)) && ((code_point <= hi))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,char_string,(index + cljs.core.count.call(null,char_string))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count.call(null,text);
if((index >= cljs.core.count.call(null,text))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null),new cljs.core.Keyword(null,"full","full",436801220),true], null));
} else {
if((hi <= (65535))){
var code = text.charCodeAt(index);
if((cljs.core._EQ_.call(null,(index + (1)),end)) && (((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,cljs.core.char$.call(null,code),end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null),new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
} else {
var code_point = goog.i18n.uChar.getCodePointAround(text,(index | (0)));
var char_string = goog.i18n.uChar.fromCharCode(code_point);
if((cljs.core._EQ_.call(null,(index + cljs.core.count.call(null,char_string)),end)) && (((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,char_string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null),new cljs.core.Keyword(null,"full","full",436801220),true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,"g"));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__6204__auto__ = m;
if(cljs.core.truth_(and__6204__auto__)){
return (m.index === (0));
} else {
return and__6204__auto__;
}
})())){
return cljs.core.first.call(null,m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.segment;
var substring = instaparse.gll.toString.call(null,instaparse.gll.subsegment.call(null,text,index,cljs.core.count.call(null,text)));
var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,(index + cljs.core.count.call(null,match))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = instaparse.gll.toString.call(null,instaparse.gll.subsegment.call(null,text,index,cljs.core.count.call(null,text)));
var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);
var desired_length = (cljs.core.count.call(null,text) - index);
if(cljs.core.truth_((function (){var and__6204__auto__ = match;
if(cljs.core.truth_(and__6204__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,match),desired_length);
} else {
return and__6204__auto__;
}
})())){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,cljs.core.count.call(null,text)));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
var empty_cat_result_16323 = instaparse.auto_flatten_seq.EMPTY;
instaparse.gll.cat_parse = ((function (empty_cat_result_16323){
return (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatListener.call(null,empty_cat_result_16323,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_16323))
;

instaparse.gll.cat_full_parse = ((function (empty_cat_result_16323){
return (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatFullListener.call(null,empty_cat_result_16323,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_16323))
;

instaparse.gll.plus_parse = ((function (empty_cat_result_16323){
return (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,empty_cat_result_16323,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_16323))
;

instaparse.gll.plus_full_parse = ((function (empty_cat_result_16323){
return (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,empty_cat_result_16323,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_16323))
;

instaparse.gll.rep_parse = ((function (empty_cat_result_16323){
return (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));

if((n >= (1))){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,empty_cat_result_16323,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,empty_cat_result_16323,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_16323))
;

instaparse.gll.rep_full_parse = ((function (empty_cat_result_16323){
return (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));

if((n >= (1))){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,empty_cat_result_16323,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,empty_cat_result_16323,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_16323))
;

instaparse.gll.star_parse = ((function (empty_cat_result_16323){
return (function instaparse$gll$star_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,empty_cat_result_16323,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});})(empty_cat_result_16323))
;

instaparse.gll.star_full_parse = ((function (empty_cat_result_16323){
return (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,empty_cat_result_16323,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_16323))
;
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__16328 = cljs.core.seq.call(null,parsers);
var chunk__16329 = null;
var count__16330 = (0);
var i__16331 = (0);
while(true){
if((i__16331 < count__16330)){
var parser = cljs.core._nth.call(null,chunk__16329,i__16331);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__16332 = seq__16328;
var G__16333 = chunk__16329;
var G__16334 = count__16330;
var G__16335 = (i__16331 + (1));
seq__16328 = G__16332;
chunk__16329 = G__16333;
count__16330 = G__16334;
i__16331 = G__16335;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16328);
if(temp__4657__auto__){
var seq__16328__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16328__$1)){
var c__7027__auto__ = cljs.core.chunk_first.call(null,seq__16328__$1);
var G__16336 = cljs.core.chunk_rest.call(null,seq__16328__$1);
var G__16337 = c__7027__auto__;
var G__16338 = cljs.core.count.call(null,c__7027__auto__);
var G__16339 = (0);
seq__16328 = G__16336;
chunk__16329 = G__16337;
count__16330 = G__16338;
i__16331 = G__16339;
continue;
} else {
var parser = cljs.core.first.call(null,seq__16328__$1);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__16340 = cljs.core.next.call(null,seq__16328__$1);
var G__16341 = null;
var G__16342 = (0);
var G__16343 = (0);
seq__16328 = G__16340;
chunk__16329 = G__16341;
count__16330 = G__16342;
i__16331 = G__16343;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.alt_full_parse = (function instaparse$gll$alt_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__16348 = cljs.core.seq.call(null,parsers);
var chunk__16349 = null;
var count__16350 = (0);
var i__16351 = (0);
while(true){
if((i__16351 < count__16350)){
var parser = cljs.core._nth.call(null,chunk__16349,i__16351);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__16352 = seq__16348;
var G__16353 = chunk__16349;
var G__16354 = count__16350;
var G__16355 = (i__16351 + (1));
seq__16348 = G__16352;
chunk__16349 = G__16353;
count__16350 = G__16354;
i__16351 = G__16355;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16348);
if(temp__4657__auto__){
var seq__16348__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16348__$1)){
var c__7027__auto__ = cljs.core.chunk_first.call(null,seq__16348__$1);
var G__16356 = cljs.core.chunk_rest.call(null,seq__16348__$1);
var G__16357 = c__7027__auto__;
var G__16358 = cljs.core.count.call(null,c__7027__auto__);
var G__16359 = (0);
seq__16348 = G__16356;
chunk__16349 = G__16357;
count__16350 = G__16358;
i__16351 = G__16359;
continue;
} else {
var parser = cljs.core.first.call(null,seq__16348__$1);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__16360 = cljs.core.next.call(null,seq__16348__$1);
var G__16361 = null;
var G__16362 = (0);
var G__16363 = (0);
seq__16348 = G__16360;
chunk__16349 = G__16361;
count__16350 = G__16362;
i__16351 = G__16363;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.ordered_alt_parse = (function instaparse$gll$ordered_alt_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener.call(null,tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener.call(null,tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener.call(null,tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener.call(null,tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_full_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse.call(null,this$,index,tramp);
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387)], null));
} else {
instaparse.gll.push_listener.call(null,tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NOT","NOT",-1689245341),instaparse.print.combinators__GT_str.call(null,parser)], null)], null));
});})(parser,node_key))
,null));
return ((function (fail_send,parser,node_key){
return (function (result){
return cljs.core.force.call(null,fail_send);
});
;})(fail_send,parser,node_key))
})());

return instaparse.gll.push_negative_listener.call(null,tramp,node_key,((function (parser,node_key){
return (function (){
if(cljs.core.not.call(null,instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"Epsilon","Epsilon",133418452),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
} else {
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.call(null,grammar,text);
var parser = instaparse.combinators_source.nt.call(null,start);
instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,instaparse.failure.augment_failure.call(null,tramp.failure,text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.call(null,grammar,text);
var parser = instaparse.combinators_source.nt.call(null,start);
instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first.call(null,all_parses);
} else {
return instaparse.failure.augment_failure.call(null,tramp.failure,text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta.call(null,node_builder.call(null,tag,content),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),start,new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta.call(null,node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),text,(0),cljs.core.count.call(null,text));
var build_start_node = instaparse.gll.build_node_with_meta.call(null,node_builder,start,build_failure_node,(0),cljs.core.count.call(null,text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){

var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt.call(null,start);
instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
var x__7050__auto__ = instaparse.gll.build_total_failure_node.call(null,node_builder,start,text);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7050__auto__);
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,metamap,cljs.core.meta.call(null,obj)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses.call(null,grammar,start,text,partial_QMARK_);
if(cljs.core.seq.call(null,all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta.call(null,instaparse.gll.parses_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,all_parses)),partial_QMARK_,node_builder),cljs.core.meta.call(null,all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){

var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt.call(null,start);
instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first.call(null,all_parses);
} else {
return instaparse.gll.build_total_failure_node.call(null,node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse.call(null,grammar,start,text,partial_QMARK_);
if(!((result instanceof instaparse.gll.Failure))){
return result;
} else {
return instaparse.gll.merge_meta.call(null,instaparse.gll.parse_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});

//# sourceMappingURL=gll.js.map?rel=1471427567782