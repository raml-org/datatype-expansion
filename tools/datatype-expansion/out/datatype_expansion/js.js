// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('datatype_expansion.js');
goog.require('cljs.core');
goog.require('datatype_expansion.expanded_form');
goog.require('datatype_expansion.canonical_form');
goog.require('cljs.core.async');
goog.require('clojure.walk');
cljs.core.enable_console_print_BANG_.call(null);
datatype_expansion.js.expandedForm = (function datatype_expansion$js$expandedForm(type_form,typing_context,cb){
var c__11114__auto___14526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___14526){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___14526){
return (function (state_14513){
var state_val_14514 = (state_14513[(1)]);
if((state_val_14514 === (1))){
var state_14513__$1 = state_14513;
var statearr_14515_14527 = state_14513__$1;
(statearr_14515_14527[(2)] = null);

(statearr_14515_14527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (2))){
var inst_14511 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14513__$1,inst_14511);
} else {
if((state_val_14514 === (3))){
var inst_14492 = (state_14513[(2)]);
var inst_14493 = cb.call(null,inst_14492,null);
var state_14513__$1 = state_14513;
var statearr_14516_14528 = state_14513__$1;
(statearr_14516_14528[(2)] = inst_14493);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14513,(3),Error,null,(2));
var inst_14497 = cljs.core.js__GT_clj.call(null,type_form);
var inst_14498 = clojure.walk.keywordize_keys.call(null,inst_14497);
var inst_14499 = cljs.core.PersistentHashMap.EMPTY;
var inst_14501 = (function (){var type_form__$1 = inst_14498;
return ((function (type_form__$1,_,inst_14497,inst_14498,inst_14499,state_val_14514,c__11114__auto___14526){
return (function (p__14500){
var vec__14517 = p__14500;
var k = cljs.core.nth.call(null,vec__14517,(0),null);
var v = cljs.core.nth.call(null,vec__14517,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clojure.walk.keywordize_keys.call(null,v)], null);
});
;})(type_form__$1,_,inst_14497,inst_14498,inst_14499,state_val_14514,c__11114__auto___14526))
})();
var inst_14502 = cljs.core.js__GT_clj.call(null,typing_context);
var inst_14503 = cljs.core.map.call(null,inst_14501,inst_14502);
var inst_14504 = cljs.core.into.call(null,inst_14499,inst_14503);
var inst_14505 = cljs.core.js__GT_clj.call(null,inst_14498);
var inst_14506 = cljs.core.js__GT_clj.call(null,inst_14504);
var inst_14507 = datatype_expansion.expanded_form.expanded_form.call(null,inst_14505,inst_14506);
var inst_14508 = cljs.core.clj__GT_js.call(null,inst_14507);
var inst_14509 = cb.call(null,null,inst_14508);
var state_14513__$1 = state_14513;
var statearr_14518_14529 = state_14513__$1;
(statearr_14518_14529[(2)] = inst_14509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11114__auto___14526))
;
return ((function (switch__11002__auto__,c__11114__auto___14526){
return (function() {
var datatype_expansion$js$expandedForm_$_state_machine__11003__auto__ = null;
var datatype_expansion$js$expandedForm_$_state_machine__11003__auto____0 = (function (){
var statearr_14522 = [null,null,null,null,null,null,null];
(statearr_14522[(0)] = datatype_expansion$js$expandedForm_$_state_machine__11003__auto__);

(statearr_14522[(1)] = (1));

return statearr_14522;
});
var datatype_expansion$js$expandedForm_$_state_machine__11003__auto____1 = (function (state_14513){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_14513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e14523){if((e14523 instanceof Object)){
var ex__11006__auto__ = e14523;
var statearr_14524_14530 = state_14513;
(statearr_14524_14530[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14531 = state_14513;
state_14513 = G__14531;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
datatype_expansion$js$expandedForm_$_state_machine__11003__auto__ = function(state_14513){
switch(arguments.length){
case 0:
return datatype_expansion$js$expandedForm_$_state_machine__11003__auto____0.call(this);
case 1:
return datatype_expansion$js$expandedForm_$_state_machine__11003__auto____1.call(this,state_14513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datatype_expansion$js$expandedForm_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = datatype_expansion$js$expandedForm_$_state_machine__11003__auto____0;
datatype_expansion$js$expandedForm_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = datatype_expansion$js$expandedForm_$_state_machine__11003__auto____1;
return datatype_expansion$js$expandedForm_$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___14526))
})();
var state__11116__auto__ = (function (){var statearr_14525 = f__11115__auto__.call(null);
(statearr_14525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___14526);

return statearr_14525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___14526))
);


return null;
});
goog.exportSymbol('datatype_expansion.js.expandedForm', datatype_expansion.js.expandedForm);
datatype_expansion.js.canonicalForm = (function datatype_expansion$js$canonicalForm(expanded_form,cb){
var c__11114__auto___14582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___14582){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___14582){
return (function (state_14570){
var state_val_14571 = (state_14570[(1)]);
if((state_val_14571 === (1))){
var state_14570__$1 = state_14570;
var statearr_14572_14583 = state_14570__$1;
(statearr_14572_14583[(2)] = null);

(statearr_14572_14583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14571 === (2))){
var inst_14568 = (state_14570[(2)]);
var state_14570__$1 = state_14570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14570__$1,inst_14568);
} else {
if((state_val_14571 === (3))){
var inst_14557 = (state_14570[(2)]);
var inst_14558 = cb.call(null,inst_14557,null);
var state_14570__$1 = state_14570;
var statearr_14573_14584 = state_14570__$1;
(statearr_14573_14584[(2)] = inst_14558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14570__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14571 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14570,(3),Error,null,(2));
var inst_14562 = cljs.core.js__GT_clj.call(null,expanded_form);
var inst_14563 = clojure.walk.keywordize_keys.call(null,inst_14562);
var inst_14564 = datatype_expansion.canonical_form.canonical_form.call(null,inst_14563);
var inst_14565 = cljs.core.clj__GT_js.call(null,inst_14564);
var inst_14566 = cb.call(null,null,inst_14565);
var state_14570__$1 = state_14570;
var statearr_14574_14585 = state_14570__$1;
(statearr_14574_14585[(2)] = inst_14566);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14570__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11114__auto___14582))
;
return ((function (switch__11002__auto__,c__11114__auto___14582){
return (function() {
var datatype_expansion$js$canonicalForm_$_state_machine__11003__auto__ = null;
var datatype_expansion$js$canonicalForm_$_state_machine__11003__auto____0 = (function (){
var statearr_14578 = [null,null,null,null,null,null,null];
(statearr_14578[(0)] = datatype_expansion$js$canonicalForm_$_state_machine__11003__auto__);

(statearr_14578[(1)] = (1));

return statearr_14578;
});
var datatype_expansion$js$canonicalForm_$_state_machine__11003__auto____1 = (function (state_14570){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_14570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e14579){if((e14579 instanceof Object)){
var ex__11006__auto__ = e14579;
var statearr_14580_14586 = state_14570;
(statearr_14580_14586[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14587 = state_14570;
state_14570 = G__14587;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
datatype_expansion$js$canonicalForm_$_state_machine__11003__auto__ = function(state_14570){
switch(arguments.length){
case 0:
return datatype_expansion$js$canonicalForm_$_state_machine__11003__auto____0.call(this);
case 1:
return datatype_expansion$js$canonicalForm_$_state_machine__11003__auto____1.call(this,state_14570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datatype_expansion$js$canonicalForm_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = datatype_expansion$js$canonicalForm_$_state_machine__11003__auto____0;
datatype_expansion$js$canonicalForm_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = datatype_expansion$js$canonicalForm_$_state_machine__11003__auto____1;
return datatype_expansion$js$canonicalForm_$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___14582))
})();
var state__11116__auto__ = (function (){var statearr_14581 = f__11115__auto__.call(null);
(statearr_14581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___14582);

return statearr_14581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___14582))
);


return null;
});
goog.exportSymbol('datatype_expansion.js.canonicalForm', datatype_expansion.js.canonicalForm);
datatype_expansion.js._registerInterface = (function datatype_expansion$js$_registerInterface(){
return null;
});
cljs.core._STAR_main_cli_fn_STAR_ = datatype_expansion.js._registerInterface;

//# sourceMappingURL=js.js.map