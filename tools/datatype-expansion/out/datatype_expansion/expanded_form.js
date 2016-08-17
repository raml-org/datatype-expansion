// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('datatype_expansion.expanded_form');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('datatype_expansion.utils');
goog.require('instaparse.core');
goog.require('clojure.walk');
cljs.core.enable_console_print_BANG_.call(null);
datatype_expansion.expanded_form.raml_grammar = "TYPE_EXPRESSION = TYPE_NAME | SCALAR_TYPE | <'('> <BS>  TYPE_EXPRESSION <BS> <')'> | ARRAY_TYPE | UNION_TYPE\n                   SCALAR_TYPE = 'string' | 'number' | 'integer' | 'boolean' | 'date-only' | 'time-only' | 'datetime-only' | 'datetime' | 'file' | 'nil'\n                   ARRAY_TYPE = TYPE_EXPRESSION <'[]'>\n                   TYPE_NAME = #\"(\\w[\\w\\d]+\\.)*\\w[\\w\\d]+\"\n                   UNION_TYPE = TYPE_EXPRESSION <BS> (<'|'> <BS> TYPE_EXPRESSION)+\n                   BS = #\"\\s*\"\n                   ";
datatype_expansion.expanded_form.raml_type_grammar_analyser = instaparse.core.parser.call(null,datatype_expansion.expanded_form.raml_grammar);
datatype_expansion.expanded_form.ast__GT_type = (function datatype_expansion$expanded_form$ast__GT_type(ast,context){
while(true){
var type = cljs.core.filterv.call(null,((function (ast,context){
return (function (p1__14280_SHARP_){
return cljs.core.not_EQ_.call(null,p1__14280_SHARP_,new cljs.core.Keyword(null,"TYPE_EXPRESSION","TYPE_EXPRESSION",260003064));
});})(ast,context))
,ast);
if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,type))) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,type)))){
var G__14292 = cljs.core.first.call(null,type);
var G__14293 = context;
ast = G__14292;
context = G__14293;
continue;
} else {
var pred__14287 = cljs.core._EQ_;
var expr__14288 = cljs.core.first.call(null,type);
if(cljs.core.truth_(pred__14287.call(null,new cljs.core.Keyword(null,"UNION_TYPE","UNION_TYPE",-1311432052),expr__14288))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"union",new cljs.core.Keyword(null,"of","of",-2075414212),cljs.core.mapv.call(null,((function (ast,context,pred__14287,expr__14288,type){
return (function (p1__14281_SHARP_){
return datatype_expansion$expanded_form$ast__GT_type.call(null,p1__14281_SHARP_,context);
});})(ast,context,pred__14287,expr__14288,type))
,cljs.core.rest.call(null,type))], null);
} else {
if(cljs.core.truth_(pred__14287.call(null,new cljs.core.Keyword(null,"SCALAR_TYPE","SCALAR_TYPE",-784669066),expr__14288))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.last.call(null,type)], null);
} else {
if(cljs.core.truth_(pred__14287.call(null,new cljs.core.Keyword(null,"ARRAY_TYPE","ARRAY_TYPE",-473571449),expr__14288))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),datatype_expansion$expanded_form$ast__GT_type.call(null,cljs.core.last.call(null,type),context)], null);
} else {
if(cljs.core.truth_(pred__14287.call(null,new cljs.core.Keyword(null,"TYPE_NAME","TYPE_NAME",-245619732),expr__14288))){
var ref_type = cljs.core.first.call(null,cljs.core.mapv.call(null,cljs.core.last,cljs.core.filter.call(null,((function (ast,context,pred__14287,expr__14288,type){
return (function (p__14290){
var vec__14291 = p__14290;
var k = cljs.core.nth.call(null,vec__14291,(0),null);
var v = cljs.core.nth.call(null,vec__14291,(1),null);
var last_part = cljs.core.last.call(null,clojure.string.split.call(null,k,/\./));
return (cljs.core._EQ_.call(null,cljs.core.name.call(null,k),cljs.core.last.call(null,type))) || (cljs.core._EQ_.call(null,last_part,cljs.core.last.call(null,type)));
});})(ast,context,pred__14287,expr__14288,type))
,context)));
if((ref_type == null)){
return datatype_expansion.utils.error.call(null,[cljs.core.str("Cannot find type reference "),cljs.core.str(cljs.core.last.call(null,type))].join(''));
} else {
return ref_type;
}
} else {
return datatype_expansion.utils.error.call(null,[cljs.core.str("Cannot parse type expression AST "),cljs.core.str(cljs.core.mapv.call(null,cljs.core.identity,type))].join(''));
}
}
}
}
}
break;
}
});
datatype_expansion.expanded_form.parse_type_expression = (function datatype_expansion$expanded_form$parse_type_expression(exp,context){
try{return datatype_expansion.expanded_form.ast__GT_type.call(null,datatype_expansion.expanded_form.raml_type_grammar_analyser.call(null,exp),context);
}catch (e14295){if((e14295 instanceof Error)){
var ex = e14295;
return null;
} else {
throw e14295;

}
}});
datatype_expansion.expanded_form.atomic_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["boolean",null,"string",null,"time-only",null,"any",null,"number",null,"datetime",null,"date-only",null,"integer",null,"datetime-only",null,"file",null,"nil",null], null), null);
datatype_expansion.expanded_form.process_constraints = (function datatype_expansion$expanded_form$process_constraints(parsed_type,type_node){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,parsed_type,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$2(type_node,true)),new cljs.core.Keyword(null,"minProperties","minProperties",100355152),new cljs.core.Keyword(null,"minProperties","minProperties",100355152).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"maxProperties","maxProperties",1289793027),new cljs.core.Keyword(null,"maxProperties","maxProperties",1289793027).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"discriminator","discriminator",-1267549858),new cljs.core.Keyword(null,"discriminator","discriminator",-1267549858).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"discriminatorValue","discriminatorValue",1318459456),new cljs.core.Keyword(null,"discriminatorValue","discriminatorValue",1318459456).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"minLength","minLength",-1538722770).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"minimum","minimum",-1621006059).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"maximum","maximum",573880714).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"multipleOf","multipleOf",1127305698),new cljs.core.Keyword(null,"multipleOf","multipleOf",1127305698).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268),new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"minItems","minItems",1950622069),new cljs.core.Keyword(null,"minItems","minItems",1950622069).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"maxItems","maxItems",576652798),new cljs.core.Keyword(null,"maxItems","maxItems",576652798).cljs$core$IFn$_invoke$arity$1(type_node)),new cljs.core.Keyword(null,"enumValues","enumValues",2079021525),(function (){var enum_values = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"enumValues","enumValues",2079021525).cljs$core$IFn$_invoke$arity$1(type_node));
if(cljs.core.empty_QMARK_.call(null,enum_values)){
return null;
} else {
return enum_values;
}
})()),new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392),new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392).cljs$core$IFn$_invoke$arity$2(type_node,(((cljs.core._EQ_.call(null,"object",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parsed_type))) || (cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(parsed_type))))?true:null)));
});
datatype_expansion.expanded_form.xml_type_QMARK_ = (function datatype_expansion$expanded_form$xml_type_QMARK_(type){
return (typeof type === 'string') && (clojure.string.starts_with_QMARK_.call(null,type,"<?xml"));
});
datatype_expansion.expanded_form.json_type_QMARK_ = (function datatype_expansion$expanded_form$json_type_QMARK_(type){
return (typeof type === 'string') && (clojure.string.starts_with_QMARK_.call(null,type,"{"));
});
datatype_expansion.expanded_form.check_required = (function datatype_expansion$expanded_form$check_required(p__14296){
var map__14301 = p__14296;
var map__14301__$1 = ((((!((map__14301 == null)))?((((map__14301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14301):map__14301);
var object = map__14301__$1;
var properties = cljs.core.get.call(null,map__14301__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return cljs.core.assoc.call(null,object,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__14301,map__14301__$1,object,properties){
return (function (p__14303){
var vec__14304 = p__14303;
var k = cljs.core.nth.call(null,vec__14304,(0),null);
var v = cljs.core.nth.call(null,vec__14304,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"required","required",1807647006),true))], null);
});})(map__14301,map__14301__$1,object,properties))
,(function (){var or__6020__auto__ = properties;
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())));
});
datatype_expansion.expanded_form.process_items = (function datatype_expansion$expanded_form$process_items(node,context){
if(cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"items","items",1031954938),datatype_expansion.expanded_form.expanded_form.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(node),context));
} else {
return node;
}
});
datatype_expansion.expanded_form.process_properties = (function datatype_expansion$expanded_form$process_properties(node,context){
if(cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14307){
var vec__14308 = p__14307;
var k = cljs.core.nth.call(null,vec__14308,(0),null);
var v = cljs.core.nth.call(null,vec__14308,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,datatype_expansion.expanded_form.expanded_form.call(null,v,context)], null);
}),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(node))));
} else {
return node;
}
});
datatype_expansion.expanded_form.expanded_form = (function datatype_expansion$expanded_form$expanded_form(type_node,context){
var type_node__$1 = (((cljs.core.map_QMARK_.call(null,type_node)) && (cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(type_node))))?cljs.core.assoc.call(null,type_node,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14315){
var vec__14316 = p__14315;
var k = cljs.core.nth.call(null,vec__14316,(0),null);
var v = cljs.core.nth.call(null,vec__14316,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
}),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(type_node)))):type_node);
var type = ((typeof type_node__$1 === 'string')?type_node__$1:(function (){var or__6020__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(type_node__$1);
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(type_node__$1);
}
})());
if((!(cljs.core.map_QMARK_.call(null,type))) && (cljs.core.coll_QMARK_.call(null,type))){
return datatype_expansion.utils.clear_node.call(null,datatype_expansion.expanded_form.process_constraints.call(null,datatype_expansion.expanded_form.process_items.call(null,datatype_expansion.expanded_form.process_properties.call(null,cljs.core.assoc.call(null,type_node__$1,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.mapv.call(null,((function (type_node__$1,type){
return (function (p1__14309_SHARP_){
return datatype_expansion$expanded_form$expanded_form.call(null,p1__14309_SHARP_,context);
});})(type_node__$1,type))
,type)),context),context),type_node__$1));
} else {
if(cljs.core.truth_(cljs.core.get.call(null,datatype_expansion.expanded_form.atomic_types,type))){
return datatype_expansion.utils.clear_node.call(null,datatype_expansion.expanded_form.process_constraints.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null),type_node__$1));
} else {
if((((type == null)) && (cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(type_node__$1)))) || (cljs.core._EQ_.call(null,type,"array"))){
return datatype_expansion.utils.clear_node.call(null,datatype_expansion.expanded_form.process_constraints.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null),new cljs.core.Keyword(null,"items","items",1031954938),datatype_expansion$expanded_form$expanded_form.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(type_node__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)),context)),type_node__$1));
} else {
if((((type == null)) && (cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(type_node__$1)))) || (cljs.core._EQ_.call(null,type,"object"))){
return datatype_expansion.utils.clear_node.call(null,cljs.core.assoc.call(null,datatype_expansion.expanded_form.process_constraints.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),type_node__$1),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,((function (type_node__$1,type){
return (function (p__14317){
var vec__14318 = p__14317;
var prop_name = cljs.core.nth.call(null,vec__14318,(0),null);
var type__$1 = cljs.core.nth.call(null,vec__14318,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,prop_name),datatype_expansion$expanded_form$expanded_form.call(null,type__$1,context)], null);
});})(type_node__$1,type))
,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(type_node__$1)))));
} else {
if(cljs.core._EQ_.call(null,type,"union")){
return datatype_expansion.utils.clear_node.call(null,datatype_expansion.expanded_form.process_constraints.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"union",new cljs.core.Keyword(null,"of","of",-2075414212),cljs.core.mapv.call(null,((function (type_node__$1,type){
return (function (p1__14310_SHARP_){
return datatype_expansion$expanded_form$expanded_form.call(null,p1__14310_SHARP_,context);
});})(type_node__$1,type))
,new cljs.core.Keyword(null,"of","of",-2075414212).cljs$core$IFn$_invoke$arity$1(type_node__$1))], null),type_node__$1));
} else {
if(cljs.core.truth_((function (){var and__6008__auto__ = cljs.core.some_QMARK_.call(null,type);
if(and__6008__auto__){
var and__6008__auto____$1 = (typeof type === 'string') || ((type instanceof cljs.core.Keyword));
if(and__6008__auto____$1){
var or__6020__auto__ = cljs.core.get.call(null,context,cljs.core.name.call(null,type));
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return cljs.core.get.call(null,context,cljs.core.keyword.call(null,type));
}
} else {
return and__6008__auto____$1;
}
} else {
return and__6008__auto__;
}
})())){
return datatype_expansion.utils.clear_node.call(null,datatype_expansion.expanded_form.process_constraints.call(null,datatype_expansion.expanded_form.process_items.call(null,datatype_expansion.expanded_form.process_properties.call(null,cljs.core.assoc.call(null,((cljs.core.map_QMARK_.call(null,type_node__$1))?type_node__$1:cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"type","type",1174270348),datatype_expansion$expanded_form$expanded_form.call(null,(function (){var or__6020__auto__ = cljs.core.get.call(null,context,cljs.core.name.call(null,type));
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return cljs.core.get.call(null,context,cljs.core.keyword.call(null,type));
}
})(),context)),context),context),type_node__$1));
} else {
if(cljs.core.truth_(datatype_expansion.expanded_form.xml_type_QMARK_.call(null,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"xml",new cljs.core.Keyword(null,"content","content",15833224),type], null);
} else {
if(cljs.core.truth_(datatype_expansion.expanded_form.json_type_QMARK_.call(null,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"json",new cljs.core.Keyword(null,"content","content",15833224),type], null);
} else {
if((type == null)){
return datatype_expansion.utils.clear_node.call(null,datatype_expansion.expanded_form.process_constraints.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),type_node__$1));
} else {
if(cljs.core.truth_((function (){var and__6008__auto__ = typeof type === 'string';
if(and__6008__auto__){
return cljs.core.re_matches.call(null,/^.*\?$/,type);
} else {
return and__6008__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"union",new cljs.core.Keyword(null,"of","of",-2075414212),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.replace.call(null,type,"?","")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"nil"], null)], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,type)){
var result = datatype_expansion$expanded_form$expanded_form.call(null,cljs.core.assoc.call(null,type_node__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null)),context);
return cljs.core.assoc.call(null,datatype_expansion.expanded_form.process_items.call(null,datatype_expansion.expanded_form.process_properties.call(null,result,context),context),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.first.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result)));
} else {
var parsed_type = datatype_expansion.expanded_form.parse_type_expression.call(null,type,context);
if(cljs.core.some_QMARK_.call(null,parsed_type)){
return datatype_expansion$expanded_form$expanded_form.call(null,parsed_type,context);
} else {
return datatype_expansion.utils.error.call(null,[cljs.core.str("Unknown type "),cljs.core.str(type)].join(''));
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

//# sourceMappingURL=expanded_form.js.map