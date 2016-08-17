// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('datatype_expansion.js');
goog.require('cljs.core');
goog.require('datatype_expansion.expanded_form');
goog.require('datatype_expansion.canonical_form');
goog.require('cljs.core.async');
goog.require('clojure.walk');
cljs.core.enable_console_print_BANG_.call(null);
datatype_expansion.js.expandedForm = (function datatype_expansion$js$expandedForm(type_form,typing_context,cb){
var c__17878__auto___20882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___20882){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___20882){
return (function (state_20869){
var state_val_20870 = (state_20869[(1)]);
if((state_val_20870 === (1))){
var state_20869__$1 = state_20869;
var statearr_20871_20883 = state_20869__$1;
(statearr_20871_20883[(2)] = null);

(statearr_20871_20883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (2))){
var inst_20867 = (state_20869[(2)]);
var state_20869__$1 = state_20869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20869__$1,inst_20867);
} else {
if((state_val_20870 === (3))){
var inst_20848 = (state_20869[(2)]);
var inst_20849 = cb.call(null,inst_20848,null);
var state_20869__$1 = state_20869;
var statearr_20872_20884 = state_20869__$1;
(statearr_20872_20884[(2)] = inst_20849);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20869__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20870 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20869,(3),Error,null,(2));
var inst_20853 = cljs.core.js__GT_clj.call(null,type_form);
var inst_20854 = clojure.walk.keywordize_keys.call(null,inst_20853);
var inst_20855 = cljs.core.PersistentHashMap.EMPTY;
var inst_20857 = (function (){var type_form__$1 = inst_20854;
return ((function (type_form__$1,_,inst_20853,inst_20854,inst_20855,state_val_20870,c__17878__auto___20882){
return (function (p__20856){
var vec__20873 = p__20856;
var k = cljs.core.nth.call(null,vec__20873,(0),null);
var v = cljs.core.nth.call(null,vec__20873,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clojure.walk.keywordize_keys.call(null,v)], null);
});
;})(type_form__$1,_,inst_20853,inst_20854,inst_20855,state_val_20870,c__17878__auto___20882))
})();
var inst_20858 = cljs.core.js__GT_clj.call(null,typing_context);
var inst_20859 = cljs.core.map.call(null,inst_20857,inst_20858);
var inst_20860 = cljs.core.into.call(null,inst_20855,inst_20859);
var inst_20861 = cljs.core.js__GT_clj.call(null,inst_20854);
var inst_20862 = cljs.core.js__GT_clj.call(null,inst_20860);
var inst_20863 = datatype_expansion.expanded_form.expanded_form.call(null,inst_20861,inst_20862);
var inst_20864 = cljs.core.clj__GT_js.call(null,inst_20863);
var inst_20865 = cb.call(null,null,inst_20864);
var state_20869__$1 = state_20869;
var statearr_20874_20885 = state_20869__$1;
(statearr_20874_20885[(2)] = inst_20865);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20869__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__17878__auto___20882))
;
return ((function (switch__17766__auto__,c__17878__auto___20882){
return (function() {
var datatype_expansion$js$expandedForm_$_state_machine__17767__auto__ = null;
var datatype_expansion$js$expandedForm_$_state_machine__17767__auto____0 = (function (){
var statearr_20878 = [null,null,null,null,null,null,null];
(statearr_20878[(0)] = datatype_expansion$js$expandedForm_$_state_machine__17767__auto__);

(statearr_20878[(1)] = (1));

return statearr_20878;
});
var datatype_expansion$js$expandedForm_$_state_machine__17767__auto____1 = (function (state_20869){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_20869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e20879){if((e20879 instanceof Object)){
var ex__17770__auto__ = e20879;
var statearr_20880_20886 = state_20869;
(statearr_20880_20886[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20887 = state_20869;
state_20869 = G__20887;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
datatype_expansion$js$expandedForm_$_state_machine__17767__auto__ = function(state_20869){
switch(arguments.length){
case 0:
return datatype_expansion$js$expandedForm_$_state_machine__17767__auto____0.call(this);
case 1:
return datatype_expansion$js$expandedForm_$_state_machine__17767__auto____1.call(this,state_20869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datatype_expansion$js$expandedForm_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = datatype_expansion$js$expandedForm_$_state_machine__17767__auto____0;
datatype_expansion$js$expandedForm_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = datatype_expansion$js$expandedForm_$_state_machine__17767__auto____1;
return datatype_expansion$js$expandedForm_$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___20882))
})();
var state__17880__auto__ = (function (){var statearr_20881 = f__17879__auto__.call(null);
(statearr_20881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___20882);

return statearr_20881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___20882))
);


return null;
});
goog.exportSymbol('datatype_expansion.js.expandedForm', datatype_expansion.js.expandedForm);
datatype_expansion.js.canonicalForm = (function datatype_expansion$js$canonicalForm(expanded_form,cb){
var c__17878__auto___20938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___20938){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___20938){
return (function (state_20926){
var state_val_20927 = (state_20926[(1)]);
if((state_val_20927 === (1))){
var state_20926__$1 = state_20926;
var statearr_20928_20939 = state_20926__$1;
(statearr_20928_20939[(2)] = null);

(statearr_20928_20939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20927 === (2))){
var inst_20924 = (state_20926[(2)]);
var state_20926__$1 = state_20926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20926__$1,inst_20924);
} else {
if((state_val_20927 === (3))){
var inst_20913 = (state_20926[(2)]);
var inst_20914 = cb.call(null,inst_20913,null);
var state_20926__$1 = state_20926;
var statearr_20929_20940 = state_20926__$1;
(statearr_20929_20940[(2)] = inst_20914);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20926__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20927 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20926,(3),Error,null,(2));
var inst_20918 = cljs.core.js__GT_clj.call(null,expanded_form);
var inst_20919 = clojure.walk.keywordize_keys.call(null,inst_20918);
var inst_20920 = datatype_expansion.canonical_form.canonical_form.call(null,inst_20919);
var inst_20921 = cljs.core.clj__GT_js.call(null,inst_20920);
var inst_20922 = cb.call(null,null,inst_20921);
var state_20926__$1 = state_20926;
var statearr_20930_20941 = state_20926__$1;
(statearr_20930_20941[(2)] = inst_20922);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20926__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__17878__auto___20938))
;
return ((function (switch__17766__auto__,c__17878__auto___20938){
return (function() {
var datatype_expansion$js$canonicalForm_$_state_machine__17767__auto__ = null;
var datatype_expansion$js$canonicalForm_$_state_machine__17767__auto____0 = (function (){
var statearr_20934 = [null,null,null,null,null,null,null];
(statearr_20934[(0)] = datatype_expansion$js$canonicalForm_$_state_machine__17767__auto__);

(statearr_20934[(1)] = (1));

return statearr_20934;
});
var datatype_expansion$js$canonicalForm_$_state_machine__17767__auto____1 = (function (state_20926){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_20926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e20935){if((e20935 instanceof Object)){
var ex__17770__auto__ = e20935;
var statearr_20936_20942 = state_20926;
(statearr_20936_20942[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20943 = state_20926;
state_20926 = G__20943;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
datatype_expansion$js$canonicalForm_$_state_machine__17767__auto__ = function(state_20926){
switch(arguments.length){
case 0:
return datatype_expansion$js$canonicalForm_$_state_machine__17767__auto____0.call(this);
case 1:
return datatype_expansion$js$canonicalForm_$_state_machine__17767__auto____1.call(this,state_20926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datatype_expansion$js$canonicalForm_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = datatype_expansion$js$canonicalForm_$_state_machine__17767__auto____0;
datatype_expansion$js$canonicalForm_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = datatype_expansion$js$canonicalForm_$_state_machine__17767__auto____1;
return datatype_expansion$js$canonicalForm_$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___20938))
})();
var state__17880__auto__ = (function (){var statearr_20937 = f__17879__auto__.call(null);
(statearr_20937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___20938);

return statearr_20937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___20938))
);


return null;
});
goog.exportSymbol('datatype_expansion.js.canonicalForm', datatype_expansion.js.canonicalForm);
datatype_expansion.js._registerInterface = (function datatype_expansion$js$_registerInterface(){
return null;
});
cljs.core._STAR_main_cli_fn_STAR_ = datatype_expansion.js._registerInterface;

//# sourceMappingURL=js.js.map?rel=1471427571169