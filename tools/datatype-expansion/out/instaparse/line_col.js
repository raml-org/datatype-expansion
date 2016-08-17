// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('instaparse.line_col');
goog.require('cljs.core');
goog.require('instaparse.transform');

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
instaparse.line_col.Cursor = (function (index,line,column,__meta,__extmap,__hash){
this.index = index;
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6642__auto__,k__6643__auto__){
var self__ = this;
var this__6642__auto____$1 = this;
return cljs.core._lookup.call(null,this__6642__auto____$1,k__6643__auto__,null);
});

instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6644__auto__,k7774,else__6645__auto__){
var self__ = this;
var this__6644__auto____$1 = this;
var G__7776 = (((k7774 instanceof cljs.core.Keyword))?k7774.fqn:null);
switch (G__7776) {
case "index":
return self__.index;

break;
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7774,else__6645__auto__);

}
});

instaparse.line_col.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6656__auto__,writer__6657__auto__,opts__6658__auto__){
var self__ = this;
var this__6656__auto____$1 = this;
var pr_pair__6659__auto__ = ((function (this__6656__auto____$1){
return (function (keyval__6660__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6657__auto__,cljs.core.pr_writer,""," ","",opts__6658__auto__,keyval__6660__auto__);
});})(this__6656__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6657__auto__,pr_pair__6659__auto__,"#instaparse.line-col.Cursor{",", ","}",opts__6658__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null))], null),self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IIterable$ = true;

instaparse.line_col.Cursor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7773){
var self__ = this;
var G__7773__$1 = this;
return (new cljs.core.RecordIter((0),G__7773__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

instaparse.line_col.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6640__auto__){
var self__ = this;
var this__6640__auto____$1 = this;
return self__.__meta;
});

instaparse.line_col.Cursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6636__auto__){
var self__ = this;
var this__6636__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.line_col.Cursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6646__auto__){
var self__ = this;
var this__6646__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6637__auto__){
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

instaparse.line_col.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6638__auto__,other__6639__auto__){
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

instaparse.line_col.Cursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6651__auto__,k__6652__auto__){
var self__ = this;
var this__6651__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"line","line",212345235),null], null), null),k__6652__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6651__auto____$1),self__.__meta),k__6652__auto__);
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6652__auto__)),null));
}
});

instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6649__auto__,k__6650__auto__,G__7773){
var self__ = this;
var this__6649__auto____$1 = this;
var pred__7777 = cljs.core.keyword_identical_QMARK_;
var expr__7778 = k__6650__auto__;
if(cljs.core.truth_(pred__7777.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__7778))){
return (new instaparse.line_col.Cursor(G__7773,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7777.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__7778))){
return (new instaparse.line_col.Cursor(self__.index,G__7773,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7777.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__7778))){
return (new instaparse.line_col.Cursor(self__.index,self__.line,G__7773,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6650__auto__,G__7773),null));
}
}
}
});

instaparse.line_col.Cursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6654__auto__){
var self__ = this;
var this__6654__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null))], null),self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6641__auto__,G__7773){
var self__ = this;
var this__6641__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,G__7773,self__.__extmap,self__.__hash));
});

instaparse.line_col.Cursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6647__auto__,entry__6648__auto__){
var self__ = this;
var this__6647__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6648__auto__)){
return cljs.core._assoc.call(null,this__6647__auto____$1,cljs.core._nth.call(null,entry__6648__auto__,(0)),cljs.core._nth.call(null,entry__6648__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6647__auto____$1,entry__6648__auto__);
}
});

instaparse.line_col.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"int","int",-100885395,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

instaparse.line_col.Cursor.cljs$lang$type = true;

instaparse.line_col.Cursor.cljs$lang$ctorPrSeq = (function (this__6676__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.line-col/Cursor");
});

instaparse.line_col.Cursor.cljs$lang$ctorPrWriter = (function (this__6676__auto__,writer__6677__auto__){
return cljs.core._write.call(null,writer__6677__auto__,"instaparse.line-col/Cursor");
});

instaparse.line_col.__GT_Cursor = (function instaparse$line_col$__GT_Cursor(index,line,column){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
});

instaparse.line_col.map__GT_Cursor = (function instaparse$line_col$map__GT_Cursor(G__7775){
return (new instaparse.line_col.Cursor(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__7775),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__7775),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__7775),null,cljs.core.dissoc.call(null,G__7775,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)),null));
});

instaparse.line_col.advance_cursor = (function instaparse$line_col$advance_cursor(cursor,text,new_index){
var new_index__$1 = (new_index | (0));
if((cursor.index <= new_index__$1)){
} else {
throw (new Error("Assert failed: (<= (.-index cursor) new-index)"));
}

if(cljs.core._EQ_.call(null,cursor.index,new_index__$1)){
return cursor;
} else {
var index = cursor.index;
var line = cursor.line;
var column = cursor.column;
while(true){
if(cljs.core._EQ_.call(null,index,new_index__$1)){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
} else {
if(cljs.core._EQ_.call(null,text.charAt(index),"\n")){
var G__7781 = (index + (1));
var G__7782 = (line + (1));
var G__7783 = (1);
index = G__7781;
line = G__7782;
column = G__7783;
continue;
} else {
var G__7784 = (index + (1));
var G__7785 = line;
var G__7786 = (column + (1));
index = G__7784;
line = G__7785;
column = G__7786;
continue;

}
}
break;
}
}
});
/**
 * Given a string `text`, returns a function that takes an index into the string,
 * and returns a cursor, including line and column information.  For efficiency,
 * inputs must be fed into the function in increasing order.
 */
instaparse.line_col.make_line_col_fn = (function instaparse$line_col$make_line_col_fn(text){
var cursor_state = cljs.core.atom.call(null,(new instaparse.line_col.Cursor((0),(1),(1),null,null,null)));
return ((function (cursor_state){
return (function instaparse$line_col$make_line_col_fn_$_line_col(i){
cljs.core.swap_BANG_.call(null,cursor_state,instaparse.line_col.advance_cursor,text,i);

return cljs.core.deref.call(null,cursor_state);
});
;})(cursor_state))
});
instaparse.line_col.hiccup_add_line_col_spans = (function instaparse$line_col$hiccup_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta.call(null,parse_tree);
var start_index = new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620).cljs$core$IFn$_invoke$arity$1(m);
var end_index = new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__6008__auto__ = start_index;
if(cljs.core.truth_(and__6008__auto__)){
return end_index;
} else {
return and__6008__auto__;
}
})())){
var start_cursor = line_col_fn.call(null,start_index);
var children = cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,instaparse$line_col$hiccup_add_line_col_spans,line_col_fn),cljs.core.next.call(null,parse_tree)));
var end_cursor = line_col_fn.call(null,end_index);
return cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parse_tree)], null),children),cljs.core.merge.call(null,cljs.core.meta.call(null,parse_tree),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("instaparse.gll","start-line","instaparse.gll/start-line",768862483),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","start-column","instaparse.gll/start-column",-1490883898),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","end-line","instaparse.gll/end-line",-1706020282),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(end_cursor),new cljs.core.Keyword("instaparse.gll","end-column","instaparse.gll/end-column",942330297),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(end_cursor)], null)));
} else {
return parse_tree;
}
});
instaparse.line_col.enlive_add_line_col_spans = (function instaparse$line_col$enlive_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta.call(null,parse_tree);
var start_index = new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620).cljs$core$IFn$_invoke$arity$1(m);
var end_index = new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__6008__auto__ = start_index;
if(cljs.core.truth_(and__6008__auto__)){
return end_index;
} else {
return and__6008__auto__;
}
})())){
var start_cursor = line_col_fn.call(null,start_index);
var children = cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,instaparse$line_col$enlive_add_line_col_spans,line_col_fn),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(parse_tree)));
var end_cursor = line_col_fn.call(null,end_index);
return cljs.core.with_meta.call(null,cljs.core.assoc.call(null,parse_tree,new cljs.core.Keyword(null,"content","content",15833224),children),cljs.core.merge.call(null,cljs.core.meta.call(null,parse_tree),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("instaparse.gll","start-line","instaparse.gll/start-line",768862483),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","start-column","instaparse.gll/start-column",-1490883898),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","end-line","instaparse.gll/end-line",-1706020282),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(end_cursor),new cljs.core.Keyword("instaparse.gll","end-column","instaparse.gll/end-column",942330297),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(end_cursor)], null)));
} else {
return parse_tree;
}
});
/**
 * Given a string `text` and a `parse-tree` for text, return parse tree
 * with its metadata annotated with line and column info. The info can
 * then be found in the metadata map under the keywords:
 *  
 * :instaparse.gll/start-line, :instaparse.gll/start-column,
 * :instaparse.gll/end-line, :instaparse.gll/end-column
 * 
 * The start is inclusive, the end is exclusive. Lines and columns are 1-based.
 */
instaparse.line_col.add_line_col_spans = (function instaparse$line_col$add_line_col_spans(text,parse_tree){
var line_col_fn = instaparse.line_col.make_line_col_fn.call(null,text);
if((parse_tree == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__6008__auto__ = cljs.core.map_QMARK_.call(null,parse_tree);
if(and__6008__auto__){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parse_tree);
} else {
return and__6008__auto__;
}
})())){
return instaparse.line_col.enlive_add_line_col_spans.call(null,line_col_fn,parse_tree);
} else {
if((cljs.core.vector_QMARK_.call(null,parse_tree)) && ((cljs.core.first.call(null,parse_tree) instanceof cljs.core.Keyword))){
return instaparse.line_col.hiccup_add_line_col_spans.call(null,line_col_fn,parse_tree);
} else {
if(cljs.core.truth_((function (){var and__6008__auto__ = cljs.core.sequential_QMARK_.call(null,parse_tree);
if(and__6008__auto__){
var and__6008__auto____$1 = cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,parse_tree));
if(and__6008__auto____$1){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,parse_tree));
} else {
return and__6008__auto____$1;
}
} else {
return and__6008__auto__;
}
})())){
return instaparse.transform.map_preserving_meta.call(null,cljs.core.partial.call(null,instaparse.line_col.enlive_add_line_col_spans,line_col_fn),parse_tree);
} else {
if((cljs.core.sequential_QMARK_.call(null,parse_tree)) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,parse_tree))) && ((cljs.core.first.call(null,cljs.core.first.call(null,parse_tree)) instanceof cljs.core.Keyword))){
return instaparse.transform.map_preserving_meta.call(null,cljs.core.partial.call(null,instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),parse_tree);
} else {
if((parse_tree instanceof instaparse.gll.Failure)){
return parse_tree;
} else {
throw "Invalid parse-tree, not recognized as either enlive or hiccup format.";

}
}
}
}
}
}
});

//# sourceMappingURL=line_col.js.map