// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('datatype_expansion.js');
goog.require('cljs.core');
goog.require('datatype_expansion.expanded_form');
goog.require('datatype_expansion.canonical_form');
goog.require('cljs.core.async');
goog.require('clojure.walk');
cljs.core.enable_console_print_BANG_.call(null);
datatype_expansion.js.expandedForm = (function datatype_expansion$js$expandedForm(type_form,typing_context,cb){
var c__17879__auto___20883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___20883){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___20883){
return (function (state_20870){
var state_val_20871 = (state_20870[(1)]);
if((state_val_20871 === (1))){
var state_20870__$1 = state_20870;
var statearr_20872_20884 = state_20870__$1;
(statearr_20872_20884[(2)] = null);

(statearr_20872_20884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20871 === (2))){
var inst_20868 = (state_20870[(2)]);
var state_20870__$1 = state_20870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20870__$1,inst_20868);
} else {
if((state_val_20871 === (3))){
var inst_20849 = (state_20870[(2)]);
var inst_20850 = cb.call(null,inst_20849,null);
var state_20870__$1 = state_20870;
var statearr_20873_20885 = state_20870__$1;
(statearr_20873_20885[(2)] = inst_20850);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20870__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20871 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20870,(3),Error,null,(2));
var inst_20854 = cljs.core.js__GT_clj.call(null,type_form);
var inst_20855 = clojure.walk.keywordize_keys.call(null,inst_20854);
var inst_20856 = cljs.core.PersistentHashMap.EMPTY;
var inst_20858 = (function (){var type_form__$1 = inst_20855;
return ((function (type_form__$1,_,inst_20854,inst_20855,inst_20856,state_val_20871,c__17879__auto___20883){
return (function (p__20857){
var vec__20874 = p__20857;
var k = cljs.core.nth.call(null,vec__20874,(0),null);
var v = cljs.core.nth.call(null,vec__20874,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clojure.walk.keywordize_keys.call(null,v)], null);
});
;})(type_form__$1,_,inst_20854,inst_20855,inst_20856,state_val_20871,c__17879__auto___20883))
})();
var inst_20859 = cljs.core.js__GT_clj.call(null,typing_context);
var inst_20860 = cljs.core.map.call(null,inst_20858,inst_20859);
var inst_20861 = cljs.core.into.call(null,inst_20856,inst_20860);
var inst_20862 = cljs.core.js__GT_clj.call(null,inst_20855);
var inst_20863 = cljs.core.js__GT_clj.call(null,inst_20861);
var inst_20864 = datatype_expansion.expanded_form.expanded_form.call(null,inst_20862,inst_20863);
var inst_20865 = cljs.core.clj__GT_js.call(null,inst_20864);
var inst_20866 = cb.call(null,null,inst_20865);
var state_20870__$1 = state_20870;
var statearr_20875_20886 = state_20870__$1;
(statearr_20875_20886[(2)] = inst_20866);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20870__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__17879__auto___20883))
;
return ((function (switch__17767__auto__,c__17879__auto___20883){
return (function() {
var datatype_expansion$js$expandedForm_$_state_machine__17768__auto__ = null;
var datatype_expansion$js$expandedForm_$_state_machine__17768__auto____0 = (function (){
var statearr_20879 = [null,null,null,null,null,null,null];
(statearr_20879[(0)] = datatype_expansion$js$expandedForm_$_state_machine__17768__auto__);

(statearr_20879[(1)] = (1));

return statearr_20879;
});
var datatype_expansion$js$expandedForm_$_state_machine__17768__auto____1 = (function (state_20870){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_20870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e20880){if((e20880 instanceof Object)){
var ex__17771__auto__ = e20880;
var statearr_20881_20887 = state_20870;
(statearr_20881_20887[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20888 = state_20870;
state_20870 = G__20888;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
datatype_expansion$js$expandedForm_$_state_machine__17768__auto__ = function(state_20870){
switch(arguments.length){
case 0:
return datatype_expansion$js$expandedForm_$_state_machine__17768__auto____0.call(this);
case 1:
return datatype_expansion$js$expandedForm_$_state_machine__17768__auto____1.call(this,state_20870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datatype_expansion$js$expandedForm_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = datatype_expansion$js$expandedForm_$_state_machine__17768__auto____0;
datatype_expansion$js$expandedForm_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = datatype_expansion$js$expandedForm_$_state_machine__17768__auto____1;
return datatype_expansion$js$expandedForm_$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___20883))
})();
var state__17881__auto__ = (function (){var statearr_20882 = f__17880__auto__.call(null);
(statearr_20882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___20883);

return statearr_20882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___20883))
);


return null;
});
goog.exportSymbol('datatype_expansion.js.expandedForm', datatype_expansion.js.expandedForm);
datatype_expansion.js.canonicalForm = (function datatype_expansion$js$canonicalForm(expanded_form,cb){
var c__17879__auto___20939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___20939){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___20939){
return (function (state_20927){
var state_val_20928 = (state_20927[(1)]);
if((state_val_20928 === (1))){
var state_20927__$1 = state_20927;
var statearr_20929_20940 = state_20927__$1;
(statearr_20929_20940[(2)] = null);

(statearr_20929_20940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (2))){
var inst_20925 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20927__$1,inst_20925);
} else {
if((state_val_20928 === (3))){
var inst_20914 = (state_20927[(2)]);
var inst_20915 = cb.call(null,inst_20914,null);
var state_20927__$1 = state_20927;
var statearr_20930_20941 = state_20927__$1;
(statearr_20930_20941[(2)] = inst_20915);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20927__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20927,(3),Error,null,(2));
var inst_20919 = cljs.core.js__GT_clj.call(null,expanded_form);
var inst_20920 = clojure.walk.keywordize_keys.call(null,inst_20919);
var inst_20921 = datatype_expansion.canonical_form.canonical_form.call(null,inst_20920);
var inst_20922 = cljs.core.clj__GT_js.call(null,inst_20921);
var inst_20923 = cb.call(null,null,inst_20922);
var state_20927__$1 = state_20927;
var statearr_20931_20942 = state_20927__$1;
(statearr_20931_20942[(2)] = inst_20923);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20927__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__17879__auto___20939))
;
return ((function (switch__17767__auto__,c__17879__auto___20939){
return (function() {
var datatype_expansion$js$canonicalForm_$_state_machine__17768__auto__ = null;
var datatype_expansion$js$canonicalForm_$_state_machine__17768__auto____0 = (function (){
var statearr_20935 = [null,null,null,null,null,null,null];
(statearr_20935[(0)] = datatype_expansion$js$canonicalForm_$_state_machine__17768__auto__);

(statearr_20935[(1)] = (1));

return statearr_20935;
});
var datatype_expansion$js$canonicalForm_$_state_machine__17768__auto____1 = (function (state_20927){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_20927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e20936){if((e20936 instanceof Object)){
var ex__17771__auto__ = e20936;
var statearr_20937_20943 = state_20927;
(statearr_20937_20943[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20944 = state_20927;
state_20927 = G__20944;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
datatype_expansion$js$canonicalForm_$_state_machine__17768__auto__ = function(state_20927){
switch(arguments.length){
case 0:
return datatype_expansion$js$canonicalForm_$_state_machine__17768__auto____0.call(this);
case 1:
return datatype_expansion$js$canonicalForm_$_state_machine__17768__auto____1.call(this,state_20927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datatype_expansion$js$canonicalForm_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = datatype_expansion$js$canonicalForm_$_state_machine__17768__auto____0;
datatype_expansion$js$canonicalForm_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = datatype_expansion$js$canonicalForm_$_state_machine__17768__auto____1;
return datatype_expansion$js$canonicalForm_$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___20939))
})();
var state__17881__auto__ = (function (){var statearr_20938 = f__17880__auto__.call(null);
(statearr_20938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___20939);

return statearr_20938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___20939))
);


return null;
});
goog.exportSymbol('datatype_expansion.js.canonicalForm', datatype_expansion.js.canonicalForm);
datatype_expansion.js._registerInterface = (function datatype_expansion$js$_registerInterface(){
return null;
});
cljs.core._STAR_main_cli_fn_STAR_ = datatype_expansion.js._registerInterface;

//# sourceMappingURL=js.js.map?rel=1471435738175