// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('instaparse.core');
goog.require('cljs.core');
goog.require('instaparse.transform');
goog.require('instaparse.combinators_source');
goog.require('instaparse.abnf');
goog.require('instaparse.gll');
goog.require('instaparse.line_col');
goog.require('instaparse.print');
goog.require('instaparse.cfg');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');
goog.require('instaparse.repeat');
instaparse.core._STAR_default_output_format_STAR_ = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
/**
 * Changes the default output format.  Input should be :hiccup or :enlive
 */
instaparse.core.set_default_output_format_BANG_ = (function instaparse$core$set_default_output_format_BANG_(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null).call(null,type))){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} type)"));
}

return instaparse.core._STAR_default_output_format_STAR_ = type;
});
instaparse.core._STAR_default_input_format_STAR_ = new cljs.core.Keyword(null,"ebnf","ebnf",31967825);
/**
 * Changes the default input format.  Input should be :abnf or :ebnf
 */
instaparse.core.set_default_input_format_BANG_ = (function instaparse$core$set_default_input_format_BANG_(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null).call(null,type))){
} else {
throw (new Error("Assert failed: (#{:ebnf :abnf} type)"));
}

return instaparse.core._STAR_default_input_format_STAR_ = type;
});

instaparse.core.unhide_parser = (function instaparse$core$unhide_parser(parser,unhide){
var G__8125 = unhide;
if(cljs.core._EQ_.call(null,null,G__8125)){
return parser;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224),G__8125)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all_content.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),G__8125)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_tags.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),G__8125)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unhide)].join('')));

}
}
}
}
});
/**
 * Use parser to parse the text.  Returns first parse tree found
 * that completely parses the text.  If no parse tree is possible, returns
 * a Failure object.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * :optimize :memory   (when possible, employ strategy to use less memory)
 */
instaparse.core.parse = (function instaparse$core$parse(var_args){
var args__7102__auto__ = [];
var len__7095__auto___8132 = arguments.length;
var i__7096__auto___8133 = (0);
while(true){
if((i__7096__auto___8133 < len__7095__auto___8132)){
args__7102__auto__.push((arguments[i__7096__auto___8133]));

var G__8134 = (i__7096__auto___8133 + (1));
i__7096__auto___8133 = G__8134;
continue;
} else {
}
break;
}

var argseq__7103__auto__ = ((((2) < args__7102__auto__.length))?(new cljs.core.IndexedSeq(args__7102__auto__.slice((2)),(0),null)):null);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7103__auto__);
});

instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__8129){
var map__8130 = p__8129;
var map__8130__$1 = ((((!((map__8130 == null)))?((((map__8130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8130):map__8130);
var options = map__8130__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"memory","memory",-1449401430),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :memory} (get options :optimize))"));
}

var start_production = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var optimize_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),false);
var unhide = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var parser__$1 = instaparse.core.unhide_parser.call(null,parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parse_total.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,instaparse.reduction.node_builders.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core.truth_((function (){var and__6008__auto__ = optimize_QMARK_;
if(cljs.core.truth_(and__6008__auto__)){
return cljs.core.not.call(null,partial_QMARK_);
} else {
return and__6008__auto__;
}
})())){
var result = instaparse.repeat.try_repeating_parse_strategy.call(null,parser__$1,text,start_production);
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,result))){
return instaparse.gll.parse.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else {
return result;
}
} else {
return instaparse.gll.parse.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
});

instaparse.core.parse.cljs$lang$maxFixedArity = (2);

instaparse.core.parse.cljs$lang$applyTo = (function (seq8126){
var G__8127 = cljs.core.first.call(null,seq8126);
var seq8126__$1 = cljs.core.next.call(null,seq8126);
var G__8128 = cljs.core.first.call(null,seq8126__$1);
var seq8126__$2 = cljs.core.next.call(null,seq8126__$1);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(G__8127,G__8128,seq8126__$2);
});
/**
 * Use parser to parse the text.  Returns lazy seq of all parse trees
 * that completely parse the text.  If no parse tree is possible, returns
 * () with a Failure object attached as metadata.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 */
instaparse.core.parses = (function instaparse$core$parses(var_args){
var args__7102__auto__ = [];
var len__7095__auto___8141 = arguments.length;
var i__7096__auto___8142 = (0);
while(true){
if((i__7096__auto___8142 < len__7095__auto___8141)){
args__7102__auto__.push((arguments[i__7096__auto___8142]));

var G__8143 = (i__7096__auto___8142 + (1));
i__7096__auto___8142 = G__8143;
continue;
} else {
}
break;
}

var argseq__7103__auto__ = ((((2) < args__7102__auto__.length))?(new cljs.core.IndexedSeq(args__7102__auto__.slice((2)),(0),null)):null);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7103__auto__);
});

instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__8138){
var map__8139 = p__8138;
var map__8139__$1 = ((((!((map__8139 == null)))?((((map__8139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8139):map__8139);
var options = map__8139__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

var start_production = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var unhide = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var parser__$1 = instaparse.core.unhide_parser.call(null,parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parses_total.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,instaparse.reduction.node_builders.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
return instaparse.gll.parses.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
});

instaparse.core.parses.cljs$lang$maxFixedArity = (2);

instaparse.core.parses.cljs$lang$applyTo = (function (seq8135){
var G__8136 = cljs.core.first.call(null,seq8135);
var seq8135__$1 = cljs.core.next.call(null,seq8135);
var G__8137 = cljs.core.first.call(null,seq8135__$1);
var seq8135__$2 = cljs.core.next.call(null,seq8135__$1);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic(G__8136,G__8137,seq8135__$2);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
instaparse.core.Parser = (function (grammar,start_production,output_format,__meta,__extmap,__hash){
this.grammar = grammar;
this.start_production = start_production;
this.output_format = output_format;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6642__auto__,k__6643__auto__){
var self__ = this;
var this__6642__auto____$1 = this;
return cljs.core._lookup.call(null,this__6642__auto____$1,k__6643__auto__,null);
});

instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6644__auto__,k8145,else__6645__auto__){
var self__ = this;
var this__6644__auto____$1 = this;
var G__8148 = (((k8145 instanceof cljs.core.Keyword))?k8145.fqn:null);
switch (G__8148) {
case "grammar":
return self__.grammar;

break;
case "start-production":
return self__.start_production;

break;
case "output-format":
return self__.output_format;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8145,else__6645__auto__);

}
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6656__auto__,writer__6657__auto__,opts__6658__auto__){
var self__ = this;
var this__6656__auto____$1 = this;
var pr_pair__6659__auto__ = ((function (this__6656__auto____$1){
return (function (keyval__6660__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6657__auto__,cljs.core.pr_writer,""," ","",opts__6658__auto__,keyval__6660__auto__);
});})(this__6656__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6657__auto__,pr_pair__6659__auto__,"#instaparse.core.Parser{",", ","}",opts__6658__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IIterable$ = true;

instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8144){
var self__ = this;
var G__8144__$1 = this;
return (new cljs.core.RecordIter((0),G__8144__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6640__auto__){
var self__ = this;
var this__6640__auto____$1 = this;
return self__.__meta;
});

instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6636__auto__){
var self__ = this;
var this__6636__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6646__auto__){
var self__ = this;
var this__6646__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6637__auto__){
var self__ = this;
var this__6637__auto____$1 = this;
var h__6455__auto__ = self__.__hash;
if(!((h__6455__auto__ == null))){
return h__6455__auto__;
} else {
var h__6455__auto____$1 = cljs.core.hash_imap.call(null,this__6637__auto____$1);
self__.__hash = h__6455__auto____$1;

return h__6455__auto____$1;
}
});

instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6638__auto__,other__6639__auto__){
var self__ = this;
var this__6638__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6008__auto__ = other__6639__auto__;
if(cljs.core.truth_(and__6008__auto__)){
var and__6008__auto____$1 = (this__6638__auto____$1.constructor === other__6639__auto__.constructor);
if(and__6008__auto____$1){
return cljs.core.equiv_map.call(null,this__6638__auto____$1,other__6639__auto__);
} else {
return and__6008__auto____$1;
}
} else {
return and__6008__auto__;
}
})())){
return true;
} else {
return false;
}
});

instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6651__auto__,k__6652__auto__){
var self__ = this;
var this__6651__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-production","start-production",687546537),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),null], null), null),k__6652__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6651__auto____$1),self__.__meta),k__6652__auto__);
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6652__auto__)),null));
}
});

instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6649__auto__,k__6650__auto__,G__8144){
var self__ = this;
var this__6649__auto____$1 = this;
var pred__8149 = cljs.core.keyword_identical_QMARK_;
var expr__8150 = k__6650__auto__;
if(cljs.core.truth_(pred__8149.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__8150))){
return (new instaparse.core.Parser(G__8144,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8149.call(null,new cljs.core.Keyword(null,"start-production","start-production",687546537),expr__8150))){
return (new instaparse.core.Parser(self__.grammar,G__8144,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8149.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),expr__8150))){
return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__8144,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6650__auto__,G__8144),null));
}
}
}
});

instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6654__auto__){
var self__ = this;
var this__6654__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6641__auto__,G__8144){
var self__ = this;
var this__6641__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__8144,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6647__auto__,entry__6648__auto__){
var self__ = this;
var this__6647__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6648__auto__)){
return cljs.core._assoc.call(null,this__6647__auto____$1,cljs.core._nth.call(null,entry__6648__auto__,(0)),cljs.core._nth.call(null,entry__6648__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6647__auto____$1,entry__6648__auto__);
}
});

instaparse.core.Parser.prototype.call = (function() {
var G__8153 = null;
var G__8153__2 = (function (self__,text){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text);
});
var G__8153__4 = (function (self__,text,key1,val1){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1);
});
var G__8153__6 = (function (self__,text,key1,val1,key2,val2){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2);
});
var G__8153__8 = (function (self__,text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2,key3,val3);
});
G__8153 = function(self__,text,key1,val1,key2,val2,key3,val3){
switch(arguments.length){
case 2:
return G__8153__2.call(this,self__,text);
case 4:
return G__8153__4.call(this,self__,text,key1,val1);
case 6:
return G__8153__6.call(this,self__,text,key1,val1,key2,val2);
case 8:
return G__8153__8.call(this,self__,text,key1,val1,key2,val2,key3,val3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8153.cljs$core$IFn$_invoke$arity$2 = G__8153__2;
G__8153.cljs$core$IFn$_invoke$arity$4 = G__8153__4;
G__8153.cljs$core$IFn$_invoke$arity$6 = G__8153__6;
G__8153.cljs$core$IFn$_invoke$arity$8 = G__8153__8;
return G__8153;
})()
;

instaparse.core.Parser.prototype.apply = (function (self__,args8147){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8147)));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2,key3,val3);
});

instaparse.core.Parser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"start-production","start-production",-1966889232,null),new cljs.core.Symbol(null,"output-format","output-format",-185851149,null)], null);
});

instaparse.core.Parser.cljs$lang$type = true;

instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__6676__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.core/Parser");
});

instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__6676__auto__,writer__6677__auto__){
return cljs.core._write.call(null,writer__6677__auto__,"instaparse.core/Parser");
});

instaparse.core.__GT_Parser = (function instaparse$core$__GT_Parser(grammar,start_production,output_format){
return (new instaparse.core.Parser(grammar,start_production,output_format,null,null,null));
});

instaparse.core.map__GT_Parser = (function instaparse$core$map__GT_Parser(G__8146){
return (new instaparse.core.Parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__8146),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(G__8146),new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(G__8146),null,cljs.core.dissoc.call(null,G__8146,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676)),null));
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = true;

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){
var parser__$1 = this;
return cljs.core._write.call(null,writer,instaparse.print.Parser__GT_str.call(null,parser__$1));
});
/**
 * Takes a string specification of a context-free grammar,
 *   or a URI for a text file containing such a specification,
 *   or a map of parser combinators and returns a parser for that grammar.
 * 
 *   Optional keyword arguments:
 *   :input-format :ebnf
 *   or
 *   :input-format :abnf
 * 
 *   :output-format :enlive
 *   or
 *   :output-format :hiccup
 * 
 *   :start :keyword (where :keyword is name of starting production rule)
 * 
 *   :string-ci true (treat all string literals as case insensitive)
 * 
 *   :no-slurp (ignored in cljs as slurping is not supported)
 * 
 *   :auto-whitespace (:standard or :comma)
 *   or
 *   :auto-whitespace custom-whitespace-parser
 */
instaparse.core.parser = (function instaparse$core$parser(var_args){
var args__7102__auto__ = [];
var len__7095__auto___8163 = arguments.length;
var i__7096__auto___8164 = (0);
while(true){
if((i__7096__auto___8164 < len__7095__auto___8163)){
args__7102__auto__.push((arguments[i__7096__auto___8164]));

var G__8165 = (i__7096__auto___8164 + (1));
i__7096__auto___8164 = G__8165;
continue;
} else {
}
break;
}

var argseq__7103__auto__ = ((((1) < args__7102__auto__.length))?(new cljs.core.IndexedSeq(args__7102__auto__.slice((1)),(0),null)):null);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7103__auto__);
});

instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = (function (grammar_specification,p__8156){
var map__8157 = p__8156;
var map__8157__$1 = ((((!((map__8157 == null)))?((((map__8157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8157):map__8157);
var options = map__8157__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"input-format","input-format",-422703481)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :ebnf :abnf} (get options :input-format))"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :hiccup :enlive} (get options :output-format))"));
}

if((function (){var ws_parser = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
return ((ws_parser == null)) || (cljs.core.contains_QMARK_.call(null,instaparse.core.standard_whitespace_parsers,ws_parser)) || ((cljs.core.map_QMARK_.call(null,ws_parser)) && (cljs.core.contains_QMARK_.call(null,ws_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267))) && (cljs.core.contains_QMARK_.call(null,ws_parser,new cljs.core.Keyword(null,"start-production","start-production",687546537))));
})()){
} else {
throw (new Error("Assert failed: (let [ws-parser (get options :auto-whitespace)] (or (nil? ws-parser) (contains? standard-whitespace-parsers ws-parser) (and (map? ws-parser) (contains? ws-parser :grammar) (contains? ws-parser :start-production))))"));
}

var input_format = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"input-format","input-format",-422703481),instaparse.core._STAR_default_input_format_STAR_);
var build_parser = (function (){var G__8159 = (((input_format instanceof cljs.core.Keyword))?input_format.fqn:null);
switch (G__8159) {
case "abnf":
return instaparse.abnf.build_parser;

break;
case "ebnf":
if(cljs.core.truth_(cljs.core.get.call(null,options,new cljs.core.Keyword(null,"string-ci","string-ci",374631805)))){
return ((function (G__8159,input_format,map__8157,map__8157__$1,options){
return (function (spec,output_format){
var _STAR_case_insensitive_literals_STAR_8160 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = true;

try{return instaparse.cfg.build_parser.call(null,spec,output_format);
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR_8160;
}});
;})(G__8159,input_format,map__8157,map__8157__$1,options))
} else {
return instaparse.cfg.build_parser;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(input_format)].join('')));

}
})();
var output_format = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),instaparse.core._STAR_default_output_format_STAR_);
var start = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),null);
var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser = build_parser.call(null,grammar_specification,output_format);
if(cljs.core.truth_(start)){
return instaparse.core.map__GT_Parser.call(null,cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"start-production","start-production",687546537),start));
} else {
return instaparse.core.map__GT_Parser.call(null,parser);
}
})():((cljs.core.map_QMARK_.call(null,grammar_specification))?(function (){var parser = instaparse.cfg.build_parser_from_combinators.call(null,grammar_specification,output_format,start);
return instaparse.core.map__GT_Parser.call(null,parser);
})():((cljs.core.vector_QMARK_.call(null,grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:grammar_specification.call(null,(0)));
var parser = instaparse.cfg.build_parser_from_combinators.call(null,cljs.core.apply.call(null,cljs.core.hash_map,grammar_specification),output_format,start__$1);
return instaparse.core.map__GT_Parser.call(null,parser);
})():null)));
var auto_whitespace = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.call(null,instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);
var temp__4655__auto__ = whitespace_parser;
if(cljs.core.truth_(temp__4655__auto__)){
var map__8161 = temp__4655__auto__;
var map__8161__$1 = ((((!((map__8161 == null)))?((((map__8161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8161):map__8161);
var ws_grammar = cljs.core.get.call(null,map__8161__$1,new cljs.core.Keyword(null,"grammar","grammar",1881328267));
var ws_start = cljs.core.get.call(null,map__8161__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537));
return cljs.core.assoc.call(null,built_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.auto_whitespace.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(built_parser),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(built_parser),ws_grammar,ws_start));
} else {
return built_parser;
}
});

instaparse.core.parser.cljs$lang$maxFixedArity = (1);

instaparse.core.parser.cljs$lang$applyTo = (function (seq8154){
var G__8155 = cljs.core.first.call(null,seq8154);
var seq8154__$1 = cljs.core.next.call(null,seq8154);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(G__8155,seq8154__$1);
});
/**
 * Tests whether a parse result is a failure.
 */
instaparse.core.failure_QMARK_ = (function instaparse$core$failure_QMARK_(result){
return ((result instanceof instaparse.gll.Failure)) || ((cljs.core.meta.call(null,result) instanceof instaparse.gll.Failure));
});
/**
 * Extracts failure object from failed parse result.
 */
instaparse.core.get_failure = (function instaparse$core$get_failure(result){
if((result instanceof instaparse.gll.Failure)){
return result;
} else {
if((cljs.core.meta.call(null,result) instanceof instaparse.gll.Failure)){
return cljs.core.meta.call(null,result);
} else {
return null;

}
}
});
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"standard","standard",-1769206695),instaparse.core.parser.call(null,"whitespace = #'\\s+'"),new cljs.core.Keyword(null,"comma","comma",1699024745),instaparse.core.parser.call(null,"whitespace = #'[,\\s]+'")], null);

//# sourceMappingURL=core.js.map