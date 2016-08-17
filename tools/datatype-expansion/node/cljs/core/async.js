// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args17923 = [];
var len__7291__auto___17929 = arguments.length;
var i__7292__auto___17930 = (0);
while(true){
if((i__7292__auto___17930 < len__7291__auto___17929)){
args17923.push((arguments[i__7292__auto___17930]));

var G__17931 = (i__7292__auto___17930 + (1));
i__7292__auto___17930 = G__17931;
continue;
} else {
}
break;
}

var G__17925 = args17923.length;
switch (G__17925) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17923.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17926 = (function (f,blockable,meta17927){
this.f = f;
this.blockable = blockable;
this.meta17927 = meta17927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17928,meta17927__$1){
var self__ = this;
var _17928__$1 = this;
return (new cljs.core.async.t_cljs$core$async17926(self__.f,self__.blockable,meta17927__$1));
});

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17928){
var self__ = this;
var _17928__$1 = this;
return self__.meta17927;
});

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17927","meta17927",1334093924,null)], null);
});

cljs.core.async.t_cljs$core$async17926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17926";

cljs.core.async.t_cljs$core$async17926.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async17926");
});

cljs.core.async.__GT_t_cljs$core$async17926 = (function cljs$core$async$__GT_t_cljs$core$async17926(f__$1,blockable__$1,meta17927){
return (new cljs.core.async.t_cljs$core$async17926(f__$1,blockable__$1,meta17927));
});

}

return (new cljs.core.async.t_cljs$core$async17926(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args17935 = [];
var len__7291__auto___17938 = arguments.length;
var i__7292__auto___17939 = (0);
while(true){
if((i__7292__auto___17939 < len__7291__auto___17938)){
args17935.push((arguments[i__7292__auto___17939]));

var G__17940 = (i__7292__auto___17939 + (1));
i__7292__auto___17939 = G__17940;
continue;
} else {
}
break;
}

var G__17937 = args17935.length;
switch (G__17937) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17935.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args17942 = [];
var len__7291__auto___17945 = arguments.length;
var i__7292__auto___17946 = (0);
while(true){
if((i__7292__auto___17946 < len__7291__auto___17945)){
args17942.push((arguments[i__7292__auto___17946]));

var G__17947 = (i__7292__auto___17946 + (1));
i__7292__auto___17946 = G__17947;
continue;
} else {
}
break;
}

var G__17944 = args17942.length;
switch (G__17944) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17942.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args17949 = [];
var len__7291__auto___17952 = arguments.length;
var i__7292__auto___17953 = (0);
while(true){
if((i__7292__auto___17953 < len__7291__auto___17952)){
args17949.push((arguments[i__7292__auto___17953]));

var G__17954 = (i__7292__auto___17953 + (1));
i__7292__auto___17953 = G__17954;
continue;
} else {
}
break;
}

var G__17951 = args17949.length;
switch (G__17951) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17949.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17956 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17956);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17956,ret){
return (function (){
return fn1.call(null,val_17956);
});})(val_17956,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args17957 = [];
var len__7291__auto___17960 = arguments.length;
var i__7292__auto___17961 = (0);
while(true){
if((i__7292__auto___17961 < len__7291__auto___17960)){
args17957.push((arguments[i__7292__auto___17961]));

var G__17962 = (i__7292__auto___17961 + (1));
i__7292__auto___17961 = G__17962;
continue;
} else {
}
break;
}

var G__17959 = args17957.length;
switch (G__17959) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17957.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7131__auto___17964 = n;
var x_17965 = (0);
while(true){
if((x_17965 < n__7131__auto___17964)){
(a[x_17965] = (0));

var G__17966 = (x_17965 + (1));
x_17965 = G__17966;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17967 = (i + (1));
i = G__17967;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17971 = (function (alt_flag,flag,meta17972){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17972 = meta17972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17973,meta17972__$1){
var self__ = this;
var _17973__$1 = this;
return (new cljs.core.async.t_cljs$core$async17971(self__.alt_flag,self__.flag,meta17972__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17973){
var self__ = this;
var _17973__$1 = this;
return self__.meta17972;
});})(flag))
;

cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17971.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17972","meta17972",-632436674,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17971";

cljs.core.async.t_cljs$core$async17971.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async17971");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17971 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17971(alt_flag__$1,flag__$1,meta17972){
return (new cljs.core.async.t_cljs$core$async17971(alt_flag__$1,flag__$1,meta17972));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17971(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17977 = (function (alt_handler,flag,cb,meta17978){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17978 = meta17978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17979,meta17978__$1){
var self__ = this;
var _17979__$1 = this;
return (new cljs.core.async.t_cljs$core$async17977(self__.alt_handler,self__.flag,self__.cb,meta17978__$1));
});

cljs.core.async.t_cljs$core$async17977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17979){
var self__ = this;
var _17979__$1 = this;
return self__.meta17978;
});

cljs.core.async.t_cljs$core$async17977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17977.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17978","meta17978",1923326813,null)], null);
});

cljs.core.async.t_cljs$core$async17977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17977";

cljs.core.async.t_cljs$core$async17977.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async17977");
});

cljs.core.async.__GT_t_cljs$core$async17977 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17977(alt_handler__$1,flag__$1,cb__$1,meta17978){
return (new cljs.core.async.t_cljs$core$async17977(alt_handler__$1,flag__$1,cb__$1,meta17978));
});

}

return (new cljs.core.async.t_cljs$core$async17977(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17980_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17980_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17981_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17981_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6216__auto__ = wport;
if(cljs.core.truth_(or__6216__auto__)){
return or__6216__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17982 = (i + (1));
i = G__17982;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6216__auto__ = ret;
if(cljs.core.truth_(or__6216__auto__)){
return or__6216__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6204__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6204__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6204__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7298__auto__ = [];
var len__7291__auto___17988 = arguments.length;
var i__7292__auto___17989 = (0);
while(true){
if((i__7292__auto___17989 < len__7291__auto___17988)){
args__7298__auto__.push((arguments[i__7292__auto___17989]));

var G__17990 = (i__7292__auto___17989 + (1));
i__7292__auto___17989 = G__17990;
continue;
} else {
}
break;
}

var argseq__7299__auto__ = ((((1) < args__7298__auto__.length))?(new cljs.core.IndexedSeq(args__7298__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7299__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17985){
var map__17986 = p__17985;
var map__17986__$1 = ((((!((map__17986 == null)))?((((map__17986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17986):map__17986);
var opts = map__17986__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17983){
var G__17984 = cljs.core.first.call(null,seq17983);
var seq17983__$1 = cljs.core.next.call(null,seq17983);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17984,seq17983__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17991 = [];
var len__7291__auto___18041 = arguments.length;
var i__7292__auto___18042 = (0);
while(true){
if((i__7292__auto___18042 < len__7291__auto___18041)){
args17991.push((arguments[i__7292__auto___18042]));

var G__18043 = (i__7292__auto___18042 + (1));
i__7292__auto___18042 = G__18043;
continue;
} else {
}
break;
}

var G__17993 = args17991.length;
switch (G__17993) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17991.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17878__auto___18045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___18045){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___18045){
return (function (state_18017){
var state_val_18018 = (state_18017[(1)]);
if((state_val_18018 === (7))){
var inst_18013 = (state_18017[(2)]);
var state_18017__$1 = state_18017;
var statearr_18019_18046 = state_18017__$1;
(statearr_18019_18046[(2)] = inst_18013);

(statearr_18019_18046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (1))){
var state_18017__$1 = state_18017;
var statearr_18020_18047 = state_18017__$1;
(statearr_18020_18047[(2)] = null);

(statearr_18020_18047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (4))){
var inst_17996 = (state_18017[(7)]);
var inst_17996__$1 = (state_18017[(2)]);
var inst_17997 = (inst_17996__$1 == null);
var state_18017__$1 = (function (){var statearr_18021 = state_18017;
(statearr_18021[(7)] = inst_17996__$1);

return statearr_18021;
})();
if(cljs.core.truth_(inst_17997)){
var statearr_18022_18048 = state_18017__$1;
(statearr_18022_18048[(1)] = (5));

} else {
var statearr_18023_18049 = state_18017__$1;
(statearr_18023_18049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (13))){
var state_18017__$1 = state_18017;
var statearr_18024_18050 = state_18017__$1;
(statearr_18024_18050[(2)] = null);

(statearr_18024_18050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (6))){
var inst_17996 = (state_18017[(7)]);
var state_18017__$1 = state_18017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18017__$1,(11),to,inst_17996);
} else {
if((state_val_18018 === (3))){
var inst_18015 = (state_18017[(2)]);
var state_18017__$1 = state_18017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18017__$1,inst_18015);
} else {
if((state_val_18018 === (12))){
var state_18017__$1 = state_18017;
var statearr_18025_18051 = state_18017__$1;
(statearr_18025_18051[(2)] = null);

(statearr_18025_18051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (2))){
var state_18017__$1 = state_18017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18017__$1,(4),from);
} else {
if((state_val_18018 === (11))){
var inst_18006 = (state_18017[(2)]);
var state_18017__$1 = state_18017;
if(cljs.core.truth_(inst_18006)){
var statearr_18026_18052 = state_18017__$1;
(statearr_18026_18052[(1)] = (12));

} else {
var statearr_18027_18053 = state_18017__$1;
(statearr_18027_18053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (9))){
var state_18017__$1 = state_18017;
var statearr_18028_18054 = state_18017__$1;
(statearr_18028_18054[(2)] = null);

(statearr_18028_18054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (5))){
var state_18017__$1 = state_18017;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18029_18055 = state_18017__$1;
(statearr_18029_18055[(1)] = (8));

} else {
var statearr_18030_18056 = state_18017__$1;
(statearr_18030_18056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (14))){
var inst_18011 = (state_18017[(2)]);
var state_18017__$1 = state_18017;
var statearr_18031_18057 = state_18017__$1;
(statearr_18031_18057[(2)] = inst_18011);

(statearr_18031_18057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (10))){
var inst_18003 = (state_18017[(2)]);
var state_18017__$1 = state_18017;
var statearr_18032_18058 = state_18017__$1;
(statearr_18032_18058[(2)] = inst_18003);

(statearr_18032_18058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18018 === (8))){
var inst_18000 = cljs.core.async.close_BANG_.call(null,to);
var state_18017__$1 = state_18017;
var statearr_18033_18059 = state_18017__$1;
(statearr_18033_18059[(2)] = inst_18000);

(statearr_18033_18059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__17878__auto___18045))
;
return ((function (switch__17766__auto__,c__17878__auto___18045){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_18037 = [null,null,null,null,null,null,null,null];
(statearr_18037[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_18037[(1)] = (1));

return statearr_18037;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_18017){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18038){if((e18038 instanceof Object)){
var ex__17770__auto__ = e18038;
var statearr_18039_18060 = state_18017;
(statearr_18039_18060[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18061 = state_18017;
state_18017 = G__18061;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_18017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_18017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___18045))
})();
var state__17880__auto__ = (function (){var statearr_18040 = f__17879__auto__.call(null);
(statearr_18040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___18045);

return statearr_18040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___18045))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18245){
var vec__18246 = p__18245;
var v = cljs.core.nth.call(null,vec__18246,(0),null);
var p = cljs.core.nth.call(null,vec__18246,(1),null);
var job = vec__18246;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17878__auto___18428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___18428,res,vec__18246,v,p,job,jobs,results){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___18428,res,vec__18246,v,p,job,jobs,results){
return (function (state_18251){
var state_val_18252 = (state_18251[(1)]);
if((state_val_18252 === (1))){
var state_18251__$1 = state_18251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18251__$1,(2),res,v);
} else {
if((state_val_18252 === (2))){
var inst_18248 = (state_18251[(2)]);
var inst_18249 = cljs.core.async.close_BANG_.call(null,res);
var state_18251__$1 = (function (){var statearr_18253 = state_18251;
(statearr_18253[(7)] = inst_18248);

return statearr_18253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18251__$1,inst_18249);
} else {
return null;
}
}
});})(c__17878__auto___18428,res,vec__18246,v,p,job,jobs,results))
;
return ((function (switch__17766__auto__,c__17878__auto___18428,res,vec__18246,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0 = (function (){
var statearr_18257 = [null,null,null,null,null,null,null,null];
(statearr_18257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__);

(statearr_18257[(1)] = (1));

return statearr_18257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1 = (function (state_18251){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18258){if((e18258 instanceof Object)){
var ex__17770__auto__ = e18258;
var statearr_18259_18429 = state_18251;
(statearr_18259_18429[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18430 = state_18251;
state_18251 = G__18430;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = function(state_18251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1.call(this,state_18251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___18428,res,vec__18246,v,p,job,jobs,results))
})();
var state__17880__auto__ = (function (){var statearr_18260 = f__17879__auto__.call(null);
(statearr_18260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___18428);

return statearr_18260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___18428,res,vec__18246,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18261){
var vec__18262 = p__18261;
var v = cljs.core.nth.call(null,vec__18262,(0),null);
var p = cljs.core.nth.call(null,vec__18262,(1),null);
var job = vec__18262;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7131__auto___18431 = n;
var __18432 = (0);
while(true){
if((__18432 < n__7131__auto___18431)){
var G__18263_18433 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18263_18433) {
case "compute":
var c__17878__auto___18435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18432,c__17878__auto___18435,G__18263_18433,n__7131__auto___18431,jobs,results,process,async){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (__18432,c__17878__auto___18435,G__18263_18433,n__7131__auto___18431,jobs,results,process,async){
return (function (state_18276){
var state_val_18277 = (state_18276[(1)]);
if((state_val_18277 === (1))){
var state_18276__$1 = state_18276;
var statearr_18278_18436 = state_18276__$1;
(statearr_18278_18436[(2)] = null);

(statearr_18278_18436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (2))){
var state_18276__$1 = state_18276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18276__$1,(4),jobs);
} else {
if((state_val_18277 === (3))){
var inst_18274 = (state_18276[(2)]);
var state_18276__$1 = state_18276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18276__$1,inst_18274);
} else {
if((state_val_18277 === (4))){
var inst_18266 = (state_18276[(2)]);
var inst_18267 = process.call(null,inst_18266);
var state_18276__$1 = state_18276;
if(cljs.core.truth_(inst_18267)){
var statearr_18279_18437 = state_18276__$1;
(statearr_18279_18437[(1)] = (5));

} else {
var statearr_18280_18438 = state_18276__$1;
(statearr_18280_18438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (5))){
var state_18276__$1 = state_18276;
var statearr_18281_18439 = state_18276__$1;
(statearr_18281_18439[(2)] = null);

(statearr_18281_18439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (6))){
var state_18276__$1 = state_18276;
var statearr_18282_18440 = state_18276__$1;
(statearr_18282_18440[(2)] = null);

(statearr_18282_18440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18277 === (7))){
var inst_18272 = (state_18276[(2)]);
var state_18276__$1 = state_18276;
var statearr_18283_18441 = state_18276__$1;
(statearr_18283_18441[(2)] = inst_18272);

(statearr_18283_18441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18432,c__17878__auto___18435,G__18263_18433,n__7131__auto___18431,jobs,results,process,async))
;
return ((function (__18432,switch__17766__auto__,c__17878__auto___18435,G__18263_18433,n__7131__auto___18431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0 = (function (){
var statearr_18287 = [null,null,null,null,null,null,null];
(statearr_18287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__);

(statearr_18287[(1)] = (1));

return statearr_18287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1 = (function (state_18276){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18288){if((e18288 instanceof Object)){
var ex__17770__auto__ = e18288;
var statearr_18289_18442 = state_18276;
(statearr_18289_18442[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18443 = state_18276;
state_18276 = G__18443;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = function(state_18276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1.call(this,state_18276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__;
})()
;})(__18432,switch__17766__auto__,c__17878__auto___18435,G__18263_18433,n__7131__auto___18431,jobs,results,process,async))
})();
var state__17880__auto__ = (function (){var statearr_18290 = f__17879__auto__.call(null);
(statearr_18290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___18435);

return statearr_18290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(__18432,c__17878__auto___18435,G__18263_18433,n__7131__auto___18431,jobs,results,process,async))
);


break;
case "async":
var c__17878__auto___18444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18432,c__17878__auto___18444,G__18263_18433,n__7131__auto___18431,jobs,results,process,async){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (__18432,c__17878__auto___18444,G__18263_18433,n__7131__auto___18431,jobs,results,process,async){
return (function (state_18303){
var state_val_18304 = (state_18303[(1)]);
if((state_val_18304 === (1))){
var state_18303__$1 = state_18303;
var statearr_18305_18445 = state_18303__$1;
(statearr_18305_18445[(2)] = null);

(statearr_18305_18445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (2))){
var state_18303__$1 = state_18303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18303__$1,(4),jobs);
} else {
if((state_val_18304 === (3))){
var inst_18301 = (state_18303[(2)]);
var state_18303__$1 = state_18303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18303__$1,inst_18301);
} else {
if((state_val_18304 === (4))){
var inst_18293 = (state_18303[(2)]);
var inst_18294 = async.call(null,inst_18293);
var state_18303__$1 = state_18303;
if(cljs.core.truth_(inst_18294)){
var statearr_18306_18446 = state_18303__$1;
(statearr_18306_18446[(1)] = (5));

} else {
var statearr_18307_18447 = state_18303__$1;
(statearr_18307_18447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (5))){
var state_18303__$1 = state_18303;
var statearr_18308_18448 = state_18303__$1;
(statearr_18308_18448[(2)] = null);

(statearr_18308_18448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (6))){
var state_18303__$1 = state_18303;
var statearr_18309_18449 = state_18303__$1;
(statearr_18309_18449[(2)] = null);

(statearr_18309_18449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (7))){
var inst_18299 = (state_18303[(2)]);
var state_18303__$1 = state_18303;
var statearr_18310_18450 = state_18303__$1;
(statearr_18310_18450[(2)] = inst_18299);

(statearr_18310_18450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18432,c__17878__auto___18444,G__18263_18433,n__7131__auto___18431,jobs,results,process,async))
;
return ((function (__18432,switch__17766__auto__,c__17878__auto___18444,G__18263_18433,n__7131__auto___18431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null];
(statearr_18314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1 = (function (state_18303){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18315){if((e18315 instanceof Object)){
var ex__17770__auto__ = e18315;
var statearr_18316_18451 = state_18303;
(statearr_18316_18451[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18452 = state_18303;
state_18303 = G__18452;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = function(state_18303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1.call(this,state_18303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__;
})()
;})(__18432,switch__17766__auto__,c__17878__auto___18444,G__18263_18433,n__7131__auto___18431,jobs,results,process,async))
})();
var state__17880__auto__ = (function (){var statearr_18317 = f__17879__auto__.call(null);
(statearr_18317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___18444);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(__18432,c__17878__auto___18444,G__18263_18433,n__7131__auto___18431,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18453 = (__18432 + (1));
__18432 = G__18453;
continue;
} else {
}
break;
}

var c__17878__auto___18454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___18454,jobs,results,process,async){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___18454,jobs,results,process,async){
return (function (state_18339){
var state_val_18340 = (state_18339[(1)]);
if((state_val_18340 === (1))){
var state_18339__$1 = state_18339;
var statearr_18341_18455 = state_18339__$1;
(statearr_18341_18455[(2)] = null);

(statearr_18341_18455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18340 === (2))){
var state_18339__$1 = state_18339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18339__$1,(4),from);
} else {
if((state_val_18340 === (3))){
var inst_18337 = (state_18339[(2)]);
var state_18339__$1 = state_18339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18339__$1,inst_18337);
} else {
if((state_val_18340 === (4))){
var inst_18320 = (state_18339[(7)]);
var inst_18320__$1 = (state_18339[(2)]);
var inst_18321 = (inst_18320__$1 == null);
var state_18339__$1 = (function (){var statearr_18342 = state_18339;
(statearr_18342[(7)] = inst_18320__$1);

return statearr_18342;
})();
if(cljs.core.truth_(inst_18321)){
var statearr_18343_18456 = state_18339__$1;
(statearr_18343_18456[(1)] = (5));

} else {
var statearr_18344_18457 = state_18339__$1;
(statearr_18344_18457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18340 === (5))){
var inst_18323 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18339__$1 = state_18339;
var statearr_18345_18458 = state_18339__$1;
(statearr_18345_18458[(2)] = inst_18323);

(statearr_18345_18458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18340 === (6))){
var inst_18325 = (state_18339[(8)]);
var inst_18320 = (state_18339[(7)]);
var inst_18325__$1 = cljs.core.async.chan.call(null,(1));
var inst_18326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18327 = [inst_18320,inst_18325__$1];
var inst_18328 = (new cljs.core.PersistentVector(null,2,(5),inst_18326,inst_18327,null));
var state_18339__$1 = (function (){var statearr_18346 = state_18339;
(statearr_18346[(8)] = inst_18325__$1);

return statearr_18346;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18339__$1,(8),jobs,inst_18328);
} else {
if((state_val_18340 === (7))){
var inst_18335 = (state_18339[(2)]);
var state_18339__$1 = state_18339;
var statearr_18347_18459 = state_18339__$1;
(statearr_18347_18459[(2)] = inst_18335);

(statearr_18347_18459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18340 === (8))){
var inst_18325 = (state_18339[(8)]);
var inst_18330 = (state_18339[(2)]);
var state_18339__$1 = (function (){var statearr_18348 = state_18339;
(statearr_18348[(9)] = inst_18330);

return statearr_18348;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18339__$1,(9),results,inst_18325);
} else {
if((state_val_18340 === (9))){
var inst_18332 = (state_18339[(2)]);
var state_18339__$1 = (function (){var statearr_18349 = state_18339;
(statearr_18349[(10)] = inst_18332);

return statearr_18349;
})();
var statearr_18350_18460 = state_18339__$1;
(statearr_18350_18460[(2)] = null);

(statearr_18350_18460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__17878__auto___18454,jobs,results,process,async))
;
return ((function (switch__17766__auto__,c__17878__auto___18454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0 = (function (){
var statearr_18354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__);

(statearr_18354[(1)] = (1));

return statearr_18354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1 = (function (state_18339){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18355){if((e18355 instanceof Object)){
var ex__17770__auto__ = e18355;
var statearr_18356_18461 = state_18339;
(statearr_18356_18461[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18462 = state_18339;
state_18339 = G__18462;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = function(state_18339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1.call(this,state_18339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___18454,jobs,results,process,async))
})();
var state__17880__auto__ = (function (){var statearr_18357 = f__17879__auto__.call(null);
(statearr_18357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___18454);

return statearr_18357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___18454,jobs,results,process,async))
);


var c__17878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto__,jobs,results,process,async){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto__,jobs,results,process,async){
return (function (state_18395){
var state_val_18396 = (state_18395[(1)]);
if((state_val_18396 === (7))){
var inst_18391 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
var statearr_18397_18463 = state_18395__$1;
(statearr_18397_18463[(2)] = inst_18391);

(statearr_18397_18463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (20))){
var state_18395__$1 = state_18395;
var statearr_18398_18464 = state_18395__$1;
(statearr_18398_18464[(2)] = null);

(statearr_18398_18464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (1))){
var state_18395__$1 = state_18395;
var statearr_18399_18465 = state_18395__$1;
(statearr_18399_18465[(2)] = null);

(statearr_18399_18465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (4))){
var inst_18360 = (state_18395[(7)]);
var inst_18360__$1 = (state_18395[(2)]);
var inst_18361 = (inst_18360__$1 == null);
var state_18395__$1 = (function (){var statearr_18400 = state_18395;
(statearr_18400[(7)] = inst_18360__$1);

return statearr_18400;
})();
if(cljs.core.truth_(inst_18361)){
var statearr_18401_18466 = state_18395__$1;
(statearr_18401_18466[(1)] = (5));

} else {
var statearr_18402_18467 = state_18395__$1;
(statearr_18402_18467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (15))){
var inst_18373 = (state_18395[(8)]);
var state_18395__$1 = state_18395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18395__$1,(18),to,inst_18373);
} else {
if((state_val_18396 === (21))){
var inst_18386 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
var statearr_18403_18468 = state_18395__$1;
(statearr_18403_18468[(2)] = inst_18386);

(statearr_18403_18468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (13))){
var inst_18388 = (state_18395[(2)]);
var state_18395__$1 = (function (){var statearr_18404 = state_18395;
(statearr_18404[(9)] = inst_18388);

return statearr_18404;
})();
var statearr_18405_18469 = state_18395__$1;
(statearr_18405_18469[(2)] = null);

(statearr_18405_18469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (6))){
var inst_18360 = (state_18395[(7)]);
var state_18395__$1 = state_18395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18395__$1,(11),inst_18360);
} else {
if((state_val_18396 === (17))){
var inst_18381 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
if(cljs.core.truth_(inst_18381)){
var statearr_18406_18470 = state_18395__$1;
(statearr_18406_18470[(1)] = (19));

} else {
var statearr_18407_18471 = state_18395__$1;
(statearr_18407_18471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (3))){
var inst_18393 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18395__$1,inst_18393);
} else {
if((state_val_18396 === (12))){
var inst_18370 = (state_18395[(10)]);
var state_18395__$1 = state_18395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18395__$1,(14),inst_18370);
} else {
if((state_val_18396 === (2))){
var state_18395__$1 = state_18395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18395__$1,(4),results);
} else {
if((state_val_18396 === (19))){
var state_18395__$1 = state_18395;
var statearr_18408_18472 = state_18395__$1;
(statearr_18408_18472[(2)] = null);

(statearr_18408_18472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (11))){
var inst_18370 = (state_18395[(2)]);
var state_18395__$1 = (function (){var statearr_18409 = state_18395;
(statearr_18409[(10)] = inst_18370);

return statearr_18409;
})();
var statearr_18410_18473 = state_18395__$1;
(statearr_18410_18473[(2)] = null);

(statearr_18410_18473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (9))){
var state_18395__$1 = state_18395;
var statearr_18411_18474 = state_18395__$1;
(statearr_18411_18474[(2)] = null);

(statearr_18411_18474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (5))){
var state_18395__$1 = state_18395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18412_18475 = state_18395__$1;
(statearr_18412_18475[(1)] = (8));

} else {
var statearr_18413_18476 = state_18395__$1;
(statearr_18413_18476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (14))){
var inst_18373 = (state_18395[(8)]);
var inst_18375 = (state_18395[(11)]);
var inst_18373__$1 = (state_18395[(2)]);
var inst_18374 = (inst_18373__$1 == null);
var inst_18375__$1 = cljs.core.not.call(null,inst_18374);
var state_18395__$1 = (function (){var statearr_18414 = state_18395;
(statearr_18414[(8)] = inst_18373__$1);

(statearr_18414[(11)] = inst_18375__$1);

return statearr_18414;
})();
if(inst_18375__$1){
var statearr_18415_18477 = state_18395__$1;
(statearr_18415_18477[(1)] = (15));

} else {
var statearr_18416_18478 = state_18395__$1;
(statearr_18416_18478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (16))){
var inst_18375 = (state_18395[(11)]);
var state_18395__$1 = state_18395;
var statearr_18417_18479 = state_18395__$1;
(statearr_18417_18479[(2)] = inst_18375);

(statearr_18417_18479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (10))){
var inst_18367 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
var statearr_18418_18480 = state_18395__$1;
(statearr_18418_18480[(2)] = inst_18367);

(statearr_18418_18480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (18))){
var inst_18378 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
var statearr_18419_18481 = state_18395__$1;
(statearr_18419_18481[(2)] = inst_18378);

(statearr_18419_18481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18396 === (8))){
var inst_18364 = cljs.core.async.close_BANG_.call(null,to);
var state_18395__$1 = state_18395;
var statearr_18420_18482 = state_18395__$1;
(statearr_18420_18482[(2)] = inst_18364);

(statearr_18420_18482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__17878__auto__,jobs,results,process,async))
;
return ((function (switch__17766__auto__,c__17878__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0 = (function (){
var statearr_18424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__);

(statearr_18424[(1)] = (1));

return statearr_18424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1 = (function (state_18395){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18425){if((e18425 instanceof Object)){
var ex__17770__auto__ = e18425;
var statearr_18426_18483 = state_18395;
(statearr_18426_18483[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18484 = state_18395;
state_18395 = G__18484;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__ = function(state_18395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1.call(this,state_18395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto__,jobs,results,process,async))
})();
var state__17880__auto__ = (function (){var statearr_18427 = f__17879__auto__.call(null);
(statearr_18427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto__);

return statearr_18427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto__,jobs,results,process,async))
);

return c__17878__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args18485 = [];
var len__7291__auto___18488 = arguments.length;
var i__7292__auto___18489 = (0);
while(true){
if((i__7292__auto___18489 < len__7291__auto___18488)){
args18485.push((arguments[i__7292__auto___18489]));

var G__18490 = (i__7292__auto___18489 + (1));
i__7292__auto___18489 = G__18490;
continue;
} else {
}
break;
}

var G__18487 = args18485.length;
switch (G__18487) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18485.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args18492 = [];
var len__7291__auto___18495 = arguments.length;
var i__7292__auto___18496 = (0);
while(true){
if((i__7292__auto___18496 < len__7291__auto___18495)){
args18492.push((arguments[i__7292__auto___18496]));

var G__18497 = (i__7292__auto___18496 + (1));
i__7292__auto___18496 = G__18497;
continue;
} else {
}
break;
}

var G__18494 = args18492.length;
switch (G__18494) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18492.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args18499 = [];
var len__7291__auto___18552 = arguments.length;
var i__7292__auto___18553 = (0);
while(true){
if((i__7292__auto___18553 < len__7291__auto___18552)){
args18499.push((arguments[i__7292__auto___18553]));

var G__18554 = (i__7292__auto___18553 + (1));
i__7292__auto___18553 = G__18554;
continue;
} else {
}
break;
}

var G__18501 = args18499.length;
switch (G__18501) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18499.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17878__auto___18556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___18556,tc,fc){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___18556,tc,fc){
return (function (state_18527){
var state_val_18528 = (state_18527[(1)]);
if((state_val_18528 === (7))){
var inst_18523 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18529_18557 = state_18527__$1;
(statearr_18529_18557[(2)] = inst_18523);

(statearr_18529_18557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (1))){
var state_18527__$1 = state_18527;
var statearr_18530_18558 = state_18527__$1;
(statearr_18530_18558[(2)] = null);

(statearr_18530_18558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (4))){
var inst_18504 = (state_18527[(7)]);
var inst_18504__$1 = (state_18527[(2)]);
var inst_18505 = (inst_18504__$1 == null);
var state_18527__$1 = (function (){var statearr_18531 = state_18527;
(statearr_18531[(7)] = inst_18504__$1);

return statearr_18531;
})();
if(cljs.core.truth_(inst_18505)){
var statearr_18532_18559 = state_18527__$1;
(statearr_18532_18559[(1)] = (5));

} else {
var statearr_18533_18560 = state_18527__$1;
(statearr_18533_18560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (13))){
var state_18527__$1 = state_18527;
var statearr_18534_18561 = state_18527__$1;
(statearr_18534_18561[(2)] = null);

(statearr_18534_18561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (6))){
var inst_18504 = (state_18527[(7)]);
var inst_18510 = p.call(null,inst_18504);
var state_18527__$1 = state_18527;
if(cljs.core.truth_(inst_18510)){
var statearr_18535_18562 = state_18527__$1;
(statearr_18535_18562[(1)] = (9));

} else {
var statearr_18536_18563 = state_18527__$1;
(statearr_18536_18563[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (3))){
var inst_18525 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18527__$1,inst_18525);
} else {
if((state_val_18528 === (12))){
var state_18527__$1 = state_18527;
var statearr_18537_18564 = state_18527__$1;
(statearr_18537_18564[(2)] = null);

(statearr_18537_18564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (2))){
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18527__$1,(4),ch);
} else {
if((state_val_18528 === (11))){
var inst_18504 = (state_18527[(7)]);
var inst_18514 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18527__$1,(8),inst_18514,inst_18504);
} else {
if((state_val_18528 === (9))){
var state_18527__$1 = state_18527;
var statearr_18538_18565 = state_18527__$1;
(statearr_18538_18565[(2)] = tc);

(statearr_18538_18565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (5))){
var inst_18507 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18508 = cljs.core.async.close_BANG_.call(null,fc);
var state_18527__$1 = (function (){var statearr_18539 = state_18527;
(statearr_18539[(8)] = inst_18507);

return statearr_18539;
})();
var statearr_18540_18566 = state_18527__$1;
(statearr_18540_18566[(2)] = inst_18508);

(statearr_18540_18566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (14))){
var inst_18521 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18541_18567 = state_18527__$1;
(statearr_18541_18567[(2)] = inst_18521);

(statearr_18541_18567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (10))){
var state_18527__$1 = state_18527;
var statearr_18542_18568 = state_18527__$1;
(statearr_18542_18568[(2)] = fc);

(statearr_18542_18568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (8))){
var inst_18516 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
if(cljs.core.truth_(inst_18516)){
var statearr_18543_18569 = state_18527__$1;
(statearr_18543_18569[(1)] = (12));

} else {
var statearr_18544_18570 = state_18527__$1;
(statearr_18544_18570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__17878__auto___18556,tc,fc))
;
return ((function (switch__17766__auto__,c__17878__auto___18556,tc,fc){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_18548 = [null,null,null,null,null,null,null,null,null];
(statearr_18548[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_18548[(1)] = (1));

return statearr_18548;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_18527){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18549){if((e18549 instanceof Object)){
var ex__17770__auto__ = e18549;
var statearr_18550_18571 = state_18527;
(statearr_18550_18571[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18572 = state_18527;
state_18527 = G__18572;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_18527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_18527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___18556,tc,fc))
})();
var state__17880__auto__ = (function (){var statearr_18551 = f__17879__auto__.call(null);
(statearr_18551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___18556);

return statearr_18551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___18556,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto__){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto__){
return (function (state_18636){
var state_val_18637 = (state_18636[(1)]);
if((state_val_18637 === (7))){
var inst_18632 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18638_18659 = state_18636__$1;
(statearr_18638_18659[(2)] = inst_18632);

(statearr_18638_18659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (1))){
var inst_18616 = init;
var state_18636__$1 = (function (){var statearr_18639 = state_18636;
(statearr_18639[(7)] = inst_18616);

return statearr_18639;
})();
var statearr_18640_18660 = state_18636__$1;
(statearr_18640_18660[(2)] = null);

(statearr_18640_18660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (4))){
var inst_18619 = (state_18636[(8)]);
var inst_18619__$1 = (state_18636[(2)]);
var inst_18620 = (inst_18619__$1 == null);
var state_18636__$1 = (function (){var statearr_18641 = state_18636;
(statearr_18641[(8)] = inst_18619__$1);

return statearr_18641;
})();
if(cljs.core.truth_(inst_18620)){
var statearr_18642_18661 = state_18636__$1;
(statearr_18642_18661[(1)] = (5));

} else {
var statearr_18643_18662 = state_18636__$1;
(statearr_18643_18662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (6))){
var inst_18623 = (state_18636[(9)]);
var inst_18616 = (state_18636[(7)]);
var inst_18619 = (state_18636[(8)]);
var inst_18623__$1 = f.call(null,inst_18616,inst_18619);
var inst_18624 = cljs.core.reduced_QMARK_.call(null,inst_18623__$1);
var state_18636__$1 = (function (){var statearr_18644 = state_18636;
(statearr_18644[(9)] = inst_18623__$1);

return statearr_18644;
})();
if(inst_18624){
var statearr_18645_18663 = state_18636__$1;
(statearr_18645_18663[(1)] = (8));

} else {
var statearr_18646_18664 = state_18636__$1;
(statearr_18646_18664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (3))){
var inst_18634 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18636__$1,inst_18634);
} else {
if((state_val_18637 === (2))){
var state_18636__$1 = state_18636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18636__$1,(4),ch);
} else {
if((state_val_18637 === (9))){
var inst_18623 = (state_18636[(9)]);
var inst_18616 = inst_18623;
var state_18636__$1 = (function (){var statearr_18647 = state_18636;
(statearr_18647[(7)] = inst_18616);

return statearr_18647;
})();
var statearr_18648_18665 = state_18636__$1;
(statearr_18648_18665[(2)] = null);

(statearr_18648_18665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (5))){
var inst_18616 = (state_18636[(7)]);
var state_18636__$1 = state_18636;
var statearr_18649_18666 = state_18636__$1;
(statearr_18649_18666[(2)] = inst_18616);

(statearr_18649_18666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (10))){
var inst_18630 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18650_18667 = state_18636__$1;
(statearr_18650_18667[(2)] = inst_18630);

(statearr_18650_18667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (8))){
var inst_18623 = (state_18636[(9)]);
var inst_18626 = cljs.core.deref.call(null,inst_18623);
var state_18636__$1 = state_18636;
var statearr_18651_18668 = state_18636__$1;
(statearr_18651_18668[(2)] = inst_18626);

(statearr_18651_18668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__17878__auto__))
;
return ((function (switch__17766__auto__,c__17878__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17767__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17767__auto____0 = (function (){
var statearr_18655 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18655[(0)] = cljs$core$async$reduce_$_state_machine__17767__auto__);

(statearr_18655[(1)] = (1));

return statearr_18655;
});
var cljs$core$async$reduce_$_state_machine__17767__auto____1 = (function (state_18636){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18656){if((e18656 instanceof Object)){
var ex__17770__auto__ = e18656;
var statearr_18657_18669 = state_18636;
(statearr_18657_18669[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18670 = state_18636;
state_18636 = G__18670;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17767__auto__ = function(state_18636){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17767__auto____1.call(this,state_18636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17767__auto____0;
cljs$core$async$reduce_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17767__auto____1;
return cljs$core$async$reduce_$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto__))
})();
var state__17880__auto__ = (function (){var statearr_18658 = f__17879__auto__.call(null);
(statearr_18658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto__);

return statearr_18658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto__))
);

return c__17878__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args18671 = [];
var len__7291__auto___18723 = arguments.length;
var i__7292__auto___18724 = (0);
while(true){
if((i__7292__auto___18724 < len__7291__auto___18723)){
args18671.push((arguments[i__7292__auto___18724]));

var G__18725 = (i__7292__auto___18724 + (1));
i__7292__auto___18724 = G__18725;
continue;
} else {
}
break;
}

var G__18673 = args18671.length;
switch (G__18673) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18671.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto__){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto__){
return (function (state_18698){
var state_val_18699 = (state_18698[(1)]);
if((state_val_18699 === (7))){
var inst_18680 = (state_18698[(2)]);
var state_18698__$1 = state_18698;
var statearr_18700_18727 = state_18698__$1;
(statearr_18700_18727[(2)] = inst_18680);

(statearr_18700_18727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (1))){
var inst_18674 = cljs.core.seq.call(null,coll);
var inst_18675 = inst_18674;
var state_18698__$1 = (function (){var statearr_18701 = state_18698;
(statearr_18701[(7)] = inst_18675);

return statearr_18701;
})();
var statearr_18702_18728 = state_18698__$1;
(statearr_18702_18728[(2)] = null);

(statearr_18702_18728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (4))){
var inst_18675 = (state_18698[(7)]);
var inst_18678 = cljs.core.first.call(null,inst_18675);
var state_18698__$1 = state_18698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18698__$1,(7),ch,inst_18678);
} else {
if((state_val_18699 === (13))){
var inst_18692 = (state_18698[(2)]);
var state_18698__$1 = state_18698;
var statearr_18703_18729 = state_18698__$1;
(statearr_18703_18729[(2)] = inst_18692);

(statearr_18703_18729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (6))){
var inst_18683 = (state_18698[(2)]);
var state_18698__$1 = state_18698;
if(cljs.core.truth_(inst_18683)){
var statearr_18704_18730 = state_18698__$1;
(statearr_18704_18730[(1)] = (8));

} else {
var statearr_18705_18731 = state_18698__$1;
(statearr_18705_18731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (3))){
var inst_18696 = (state_18698[(2)]);
var state_18698__$1 = state_18698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18698__$1,inst_18696);
} else {
if((state_val_18699 === (12))){
var state_18698__$1 = state_18698;
var statearr_18706_18732 = state_18698__$1;
(statearr_18706_18732[(2)] = null);

(statearr_18706_18732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (2))){
var inst_18675 = (state_18698[(7)]);
var state_18698__$1 = state_18698;
if(cljs.core.truth_(inst_18675)){
var statearr_18707_18733 = state_18698__$1;
(statearr_18707_18733[(1)] = (4));

} else {
var statearr_18708_18734 = state_18698__$1;
(statearr_18708_18734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (11))){
var inst_18689 = cljs.core.async.close_BANG_.call(null,ch);
var state_18698__$1 = state_18698;
var statearr_18709_18735 = state_18698__$1;
(statearr_18709_18735[(2)] = inst_18689);

(statearr_18709_18735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (9))){
var state_18698__$1 = state_18698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18710_18736 = state_18698__$1;
(statearr_18710_18736[(1)] = (11));

} else {
var statearr_18711_18737 = state_18698__$1;
(statearr_18711_18737[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (5))){
var inst_18675 = (state_18698[(7)]);
var state_18698__$1 = state_18698;
var statearr_18712_18738 = state_18698__$1;
(statearr_18712_18738[(2)] = inst_18675);

(statearr_18712_18738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (10))){
var inst_18694 = (state_18698[(2)]);
var state_18698__$1 = state_18698;
var statearr_18713_18739 = state_18698__$1;
(statearr_18713_18739[(2)] = inst_18694);

(statearr_18713_18739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18699 === (8))){
var inst_18675 = (state_18698[(7)]);
var inst_18685 = cljs.core.next.call(null,inst_18675);
var inst_18675__$1 = inst_18685;
var state_18698__$1 = (function (){var statearr_18714 = state_18698;
(statearr_18714[(7)] = inst_18675__$1);

return statearr_18714;
})();
var statearr_18715_18740 = state_18698__$1;
(statearr_18715_18740[(2)] = null);

(statearr_18715_18740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__17878__auto__))
;
return ((function (switch__17766__auto__,c__17878__auto__){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_18719 = [null,null,null,null,null,null,null,null];
(statearr_18719[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_18719[(1)] = (1));

return statearr_18719;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_18698){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_18698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e18720){if((e18720 instanceof Object)){
var ex__17770__auto__ = e18720;
var statearr_18721_18741 = state_18698;
(statearr_18721_18741[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18742 = state_18698;
state_18698 = G__18742;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_18698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_18698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto__))
})();
var state__17880__auto__ = (function (){var statearr_18722 = f__17879__auto__.call(null);
(statearr_18722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto__);

return statearr_18722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto__))
);

return c__17878__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6879__auto__ = (((_ == null))?null:_);
var m__6880__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,_);
} else {
var m__6880__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6879__auto__ = (((m == null))?null:m);
var m__6880__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6880__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6879__auto__ = (((m == null))?null:m);
var m__6880__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,m,ch);
} else {
var m__6880__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6879__auto__ = (((m == null))?null:m);
var m__6880__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,m);
} else {
var m__6880__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18964 = (function (mult,ch,cs,meta18965){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18965 = meta18965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18966,meta18965__$1){
var self__ = this;
var _18966__$1 = this;
return (new cljs.core.async.t_cljs$core$async18964(self__.mult,self__.ch,self__.cs,meta18965__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18966){
var self__ = this;
var _18966__$1 = this;
return self__.meta18965;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18965","meta18965",1933420208,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18964";

cljs.core.async.t_cljs$core$async18964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async18964");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18964 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18964(mult__$1,ch__$1,cs__$1,meta18965){
return (new cljs.core.async.t_cljs$core$async18964(mult__$1,ch__$1,cs__$1,meta18965));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18964(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17878__auto___19185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___19185,cs,m,dchan,dctr,done){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___19185,cs,m,dchan,dctr,done){
return (function (state_19097){
var state_val_19098 = (state_19097[(1)]);
if((state_val_19098 === (7))){
var inst_19093 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19099_19186 = state_19097__$1;
(statearr_19099_19186[(2)] = inst_19093);

(statearr_19099_19186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (20))){
var inst_18998 = (state_19097[(7)]);
var inst_19008 = cljs.core.first.call(null,inst_18998);
var inst_19009 = cljs.core.nth.call(null,inst_19008,(0),null);
var inst_19010 = cljs.core.nth.call(null,inst_19008,(1),null);
var state_19097__$1 = (function (){var statearr_19100 = state_19097;
(statearr_19100[(8)] = inst_19009);

return statearr_19100;
})();
if(cljs.core.truth_(inst_19010)){
var statearr_19101_19187 = state_19097__$1;
(statearr_19101_19187[(1)] = (22));

} else {
var statearr_19102_19188 = state_19097__$1;
(statearr_19102_19188[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (27))){
var inst_19038 = (state_19097[(9)]);
var inst_18969 = (state_19097[(10)]);
var inst_19045 = (state_19097[(11)]);
var inst_19040 = (state_19097[(12)]);
var inst_19045__$1 = cljs.core._nth.call(null,inst_19038,inst_19040);
var inst_19046 = cljs.core.async.put_BANG_.call(null,inst_19045__$1,inst_18969,done);
var state_19097__$1 = (function (){var statearr_19103 = state_19097;
(statearr_19103[(11)] = inst_19045__$1);

return statearr_19103;
})();
if(cljs.core.truth_(inst_19046)){
var statearr_19104_19189 = state_19097__$1;
(statearr_19104_19189[(1)] = (30));

} else {
var statearr_19105_19190 = state_19097__$1;
(statearr_19105_19190[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (1))){
var state_19097__$1 = state_19097;
var statearr_19106_19191 = state_19097__$1;
(statearr_19106_19191[(2)] = null);

(statearr_19106_19191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (24))){
var inst_18998 = (state_19097[(7)]);
var inst_19015 = (state_19097[(2)]);
var inst_19016 = cljs.core.next.call(null,inst_18998);
var inst_18978 = inst_19016;
var inst_18979 = null;
var inst_18980 = (0);
var inst_18981 = (0);
var state_19097__$1 = (function (){var statearr_19107 = state_19097;
(statearr_19107[(13)] = inst_18981);

(statearr_19107[(14)] = inst_19015);

(statearr_19107[(15)] = inst_18978);

(statearr_19107[(16)] = inst_18980);

(statearr_19107[(17)] = inst_18979);

return statearr_19107;
})();
var statearr_19108_19192 = state_19097__$1;
(statearr_19108_19192[(2)] = null);

(statearr_19108_19192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (39))){
var state_19097__$1 = state_19097;
var statearr_19112_19193 = state_19097__$1;
(statearr_19112_19193[(2)] = null);

(statearr_19112_19193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (4))){
var inst_18969 = (state_19097[(10)]);
var inst_18969__$1 = (state_19097[(2)]);
var inst_18970 = (inst_18969__$1 == null);
var state_19097__$1 = (function (){var statearr_19113 = state_19097;
(statearr_19113[(10)] = inst_18969__$1);

return statearr_19113;
})();
if(cljs.core.truth_(inst_18970)){
var statearr_19114_19194 = state_19097__$1;
(statearr_19114_19194[(1)] = (5));

} else {
var statearr_19115_19195 = state_19097__$1;
(statearr_19115_19195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (15))){
var inst_18981 = (state_19097[(13)]);
var inst_18978 = (state_19097[(15)]);
var inst_18980 = (state_19097[(16)]);
var inst_18979 = (state_19097[(17)]);
var inst_18994 = (state_19097[(2)]);
var inst_18995 = (inst_18981 + (1));
var tmp19109 = inst_18978;
var tmp19110 = inst_18980;
var tmp19111 = inst_18979;
var inst_18978__$1 = tmp19109;
var inst_18979__$1 = tmp19111;
var inst_18980__$1 = tmp19110;
var inst_18981__$1 = inst_18995;
var state_19097__$1 = (function (){var statearr_19116 = state_19097;
(statearr_19116[(13)] = inst_18981__$1);

(statearr_19116[(15)] = inst_18978__$1);

(statearr_19116[(16)] = inst_18980__$1);

(statearr_19116[(17)] = inst_18979__$1);

(statearr_19116[(18)] = inst_18994);

return statearr_19116;
})();
var statearr_19117_19196 = state_19097__$1;
(statearr_19117_19196[(2)] = null);

(statearr_19117_19196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (21))){
var inst_19019 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19121_19197 = state_19097__$1;
(statearr_19121_19197[(2)] = inst_19019);

(statearr_19121_19197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (31))){
var inst_19045 = (state_19097[(11)]);
var inst_19049 = done.call(null,null);
var inst_19050 = cljs.core.async.untap_STAR_.call(null,m,inst_19045);
var state_19097__$1 = (function (){var statearr_19122 = state_19097;
(statearr_19122[(19)] = inst_19049);

return statearr_19122;
})();
var statearr_19123_19198 = state_19097__$1;
(statearr_19123_19198[(2)] = inst_19050);

(statearr_19123_19198[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (32))){
var inst_19039 = (state_19097[(20)]);
var inst_19038 = (state_19097[(9)]);
var inst_19037 = (state_19097[(21)]);
var inst_19040 = (state_19097[(12)]);
var inst_19052 = (state_19097[(2)]);
var inst_19053 = (inst_19040 + (1));
var tmp19118 = inst_19039;
var tmp19119 = inst_19038;
var tmp19120 = inst_19037;
var inst_19037__$1 = tmp19120;
var inst_19038__$1 = tmp19119;
var inst_19039__$1 = tmp19118;
var inst_19040__$1 = inst_19053;
var state_19097__$1 = (function (){var statearr_19124 = state_19097;
(statearr_19124[(20)] = inst_19039__$1);

(statearr_19124[(22)] = inst_19052);

(statearr_19124[(9)] = inst_19038__$1);

(statearr_19124[(21)] = inst_19037__$1);

(statearr_19124[(12)] = inst_19040__$1);

return statearr_19124;
})();
var statearr_19125_19199 = state_19097__$1;
(statearr_19125_19199[(2)] = null);

(statearr_19125_19199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (40))){
var inst_19065 = (state_19097[(23)]);
var inst_19069 = done.call(null,null);
var inst_19070 = cljs.core.async.untap_STAR_.call(null,m,inst_19065);
var state_19097__$1 = (function (){var statearr_19126 = state_19097;
(statearr_19126[(24)] = inst_19069);

return statearr_19126;
})();
var statearr_19127_19200 = state_19097__$1;
(statearr_19127_19200[(2)] = inst_19070);

(statearr_19127_19200[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (33))){
var inst_19056 = (state_19097[(25)]);
var inst_19058 = cljs.core.chunked_seq_QMARK_.call(null,inst_19056);
var state_19097__$1 = state_19097;
if(inst_19058){
var statearr_19128_19201 = state_19097__$1;
(statearr_19128_19201[(1)] = (36));

} else {
var statearr_19129_19202 = state_19097__$1;
(statearr_19129_19202[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (13))){
var inst_18988 = (state_19097[(26)]);
var inst_18991 = cljs.core.async.close_BANG_.call(null,inst_18988);
var state_19097__$1 = state_19097;
var statearr_19130_19203 = state_19097__$1;
(statearr_19130_19203[(2)] = inst_18991);

(statearr_19130_19203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (22))){
var inst_19009 = (state_19097[(8)]);
var inst_19012 = cljs.core.async.close_BANG_.call(null,inst_19009);
var state_19097__$1 = state_19097;
var statearr_19131_19204 = state_19097__$1;
(statearr_19131_19204[(2)] = inst_19012);

(statearr_19131_19204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (36))){
var inst_19056 = (state_19097[(25)]);
var inst_19060 = cljs.core.chunk_first.call(null,inst_19056);
var inst_19061 = cljs.core.chunk_rest.call(null,inst_19056);
var inst_19062 = cljs.core.count.call(null,inst_19060);
var inst_19037 = inst_19061;
var inst_19038 = inst_19060;
var inst_19039 = inst_19062;
var inst_19040 = (0);
var state_19097__$1 = (function (){var statearr_19132 = state_19097;
(statearr_19132[(20)] = inst_19039);

(statearr_19132[(9)] = inst_19038);

(statearr_19132[(21)] = inst_19037);

(statearr_19132[(12)] = inst_19040);

return statearr_19132;
})();
var statearr_19133_19205 = state_19097__$1;
(statearr_19133_19205[(2)] = null);

(statearr_19133_19205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (41))){
var inst_19056 = (state_19097[(25)]);
var inst_19072 = (state_19097[(2)]);
var inst_19073 = cljs.core.next.call(null,inst_19056);
var inst_19037 = inst_19073;
var inst_19038 = null;
var inst_19039 = (0);
var inst_19040 = (0);
var state_19097__$1 = (function (){var statearr_19134 = state_19097;
(statearr_19134[(20)] = inst_19039);

(statearr_19134[(9)] = inst_19038);

(statearr_19134[(21)] = inst_19037);

(statearr_19134[(27)] = inst_19072);

(statearr_19134[(12)] = inst_19040);

return statearr_19134;
})();
var statearr_19135_19206 = state_19097__$1;
(statearr_19135_19206[(2)] = null);

(statearr_19135_19206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (43))){
var state_19097__$1 = state_19097;
var statearr_19136_19207 = state_19097__$1;
(statearr_19136_19207[(2)] = null);

(statearr_19136_19207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (29))){
var inst_19081 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19137_19208 = state_19097__$1;
(statearr_19137_19208[(2)] = inst_19081);

(statearr_19137_19208[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (44))){
var inst_19090 = (state_19097[(2)]);
var state_19097__$1 = (function (){var statearr_19138 = state_19097;
(statearr_19138[(28)] = inst_19090);

return statearr_19138;
})();
var statearr_19139_19209 = state_19097__$1;
(statearr_19139_19209[(2)] = null);

(statearr_19139_19209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (6))){
var inst_19029 = (state_19097[(29)]);
var inst_19028 = cljs.core.deref.call(null,cs);
var inst_19029__$1 = cljs.core.keys.call(null,inst_19028);
var inst_19030 = cljs.core.count.call(null,inst_19029__$1);
var inst_19031 = cljs.core.reset_BANG_.call(null,dctr,inst_19030);
var inst_19036 = cljs.core.seq.call(null,inst_19029__$1);
var inst_19037 = inst_19036;
var inst_19038 = null;
var inst_19039 = (0);
var inst_19040 = (0);
var state_19097__$1 = (function (){var statearr_19140 = state_19097;
(statearr_19140[(20)] = inst_19039);

(statearr_19140[(29)] = inst_19029__$1);

(statearr_19140[(9)] = inst_19038);

(statearr_19140[(21)] = inst_19037);

(statearr_19140[(30)] = inst_19031);

(statearr_19140[(12)] = inst_19040);

return statearr_19140;
})();
var statearr_19141_19210 = state_19097__$1;
(statearr_19141_19210[(2)] = null);

(statearr_19141_19210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (28))){
var inst_19037 = (state_19097[(21)]);
var inst_19056 = (state_19097[(25)]);
var inst_19056__$1 = cljs.core.seq.call(null,inst_19037);
var state_19097__$1 = (function (){var statearr_19142 = state_19097;
(statearr_19142[(25)] = inst_19056__$1);

return statearr_19142;
})();
if(inst_19056__$1){
var statearr_19143_19211 = state_19097__$1;
(statearr_19143_19211[(1)] = (33));

} else {
var statearr_19144_19212 = state_19097__$1;
(statearr_19144_19212[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (25))){
var inst_19039 = (state_19097[(20)]);
var inst_19040 = (state_19097[(12)]);
var inst_19042 = (inst_19040 < inst_19039);
var inst_19043 = inst_19042;
var state_19097__$1 = state_19097;
if(cljs.core.truth_(inst_19043)){
var statearr_19145_19213 = state_19097__$1;
(statearr_19145_19213[(1)] = (27));

} else {
var statearr_19146_19214 = state_19097__$1;
(statearr_19146_19214[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (34))){
var state_19097__$1 = state_19097;
var statearr_19147_19215 = state_19097__$1;
(statearr_19147_19215[(2)] = null);

(statearr_19147_19215[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (17))){
var state_19097__$1 = state_19097;
var statearr_19148_19216 = state_19097__$1;
(statearr_19148_19216[(2)] = null);

(statearr_19148_19216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (3))){
var inst_19095 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19097__$1,inst_19095);
} else {
if((state_val_19098 === (12))){
var inst_19024 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19149_19217 = state_19097__$1;
(statearr_19149_19217[(2)] = inst_19024);

(statearr_19149_19217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (2))){
var state_19097__$1 = state_19097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19097__$1,(4),ch);
} else {
if((state_val_19098 === (23))){
var state_19097__$1 = state_19097;
var statearr_19150_19218 = state_19097__$1;
(statearr_19150_19218[(2)] = null);

(statearr_19150_19218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (35))){
var inst_19079 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19151_19219 = state_19097__$1;
(statearr_19151_19219[(2)] = inst_19079);

(statearr_19151_19219[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (19))){
var inst_18998 = (state_19097[(7)]);
var inst_19002 = cljs.core.chunk_first.call(null,inst_18998);
var inst_19003 = cljs.core.chunk_rest.call(null,inst_18998);
var inst_19004 = cljs.core.count.call(null,inst_19002);
var inst_18978 = inst_19003;
var inst_18979 = inst_19002;
var inst_18980 = inst_19004;
var inst_18981 = (0);
var state_19097__$1 = (function (){var statearr_19152 = state_19097;
(statearr_19152[(13)] = inst_18981);

(statearr_19152[(15)] = inst_18978);

(statearr_19152[(16)] = inst_18980);

(statearr_19152[(17)] = inst_18979);

return statearr_19152;
})();
var statearr_19153_19220 = state_19097__$1;
(statearr_19153_19220[(2)] = null);

(statearr_19153_19220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (11))){
var inst_18978 = (state_19097[(15)]);
var inst_18998 = (state_19097[(7)]);
var inst_18998__$1 = cljs.core.seq.call(null,inst_18978);
var state_19097__$1 = (function (){var statearr_19154 = state_19097;
(statearr_19154[(7)] = inst_18998__$1);

return statearr_19154;
})();
if(inst_18998__$1){
var statearr_19155_19221 = state_19097__$1;
(statearr_19155_19221[(1)] = (16));

} else {
var statearr_19156_19222 = state_19097__$1;
(statearr_19156_19222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (9))){
var inst_19026 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19157_19223 = state_19097__$1;
(statearr_19157_19223[(2)] = inst_19026);

(statearr_19157_19223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (5))){
var inst_18976 = cljs.core.deref.call(null,cs);
var inst_18977 = cljs.core.seq.call(null,inst_18976);
var inst_18978 = inst_18977;
var inst_18979 = null;
var inst_18980 = (0);
var inst_18981 = (0);
var state_19097__$1 = (function (){var statearr_19158 = state_19097;
(statearr_19158[(13)] = inst_18981);

(statearr_19158[(15)] = inst_18978);

(statearr_19158[(16)] = inst_18980);

(statearr_19158[(17)] = inst_18979);

return statearr_19158;
})();
var statearr_19159_19224 = state_19097__$1;
(statearr_19159_19224[(2)] = null);

(statearr_19159_19224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (14))){
var state_19097__$1 = state_19097;
var statearr_19160_19225 = state_19097__$1;
(statearr_19160_19225[(2)] = null);

(statearr_19160_19225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (45))){
var inst_19087 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19161_19226 = state_19097__$1;
(statearr_19161_19226[(2)] = inst_19087);

(statearr_19161_19226[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (26))){
var inst_19029 = (state_19097[(29)]);
var inst_19083 = (state_19097[(2)]);
var inst_19084 = cljs.core.seq.call(null,inst_19029);
var state_19097__$1 = (function (){var statearr_19162 = state_19097;
(statearr_19162[(31)] = inst_19083);

return statearr_19162;
})();
if(inst_19084){
var statearr_19163_19227 = state_19097__$1;
(statearr_19163_19227[(1)] = (42));

} else {
var statearr_19164_19228 = state_19097__$1;
(statearr_19164_19228[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (16))){
var inst_18998 = (state_19097[(7)]);
var inst_19000 = cljs.core.chunked_seq_QMARK_.call(null,inst_18998);
var state_19097__$1 = state_19097;
if(inst_19000){
var statearr_19165_19229 = state_19097__$1;
(statearr_19165_19229[(1)] = (19));

} else {
var statearr_19166_19230 = state_19097__$1;
(statearr_19166_19230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (38))){
var inst_19076 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19167_19231 = state_19097__$1;
(statearr_19167_19231[(2)] = inst_19076);

(statearr_19167_19231[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (30))){
var state_19097__$1 = state_19097;
var statearr_19168_19232 = state_19097__$1;
(statearr_19168_19232[(2)] = null);

(statearr_19168_19232[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (10))){
var inst_18981 = (state_19097[(13)]);
var inst_18979 = (state_19097[(17)]);
var inst_18987 = cljs.core._nth.call(null,inst_18979,inst_18981);
var inst_18988 = cljs.core.nth.call(null,inst_18987,(0),null);
var inst_18989 = cljs.core.nth.call(null,inst_18987,(1),null);
var state_19097__$1 = (function (){var statearr_19169 = state_19097;
(statearr_19169[(26)] = inst_18988);

return statearr_19169;
})();
if(cljs.core.truth_(inst_18989)){
var statearr_19170_19233 = state_19097__$1;
(statearr_19170_19233[(1)] = (13));

} else {
var statearr_19171_19234 = state_19097__$1;
(statearr_19171_19234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (18))){
var inst_19022 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19172_19235 = state_19097__$1;
(statearr_19172_19235[(2)] = inst_19022);

(statearr_19172_19235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (42))){
var state_19097__$1 = state_19097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19097__$1,(45),dchan);
} else {
if((state_val_19098 === (37))){
var inst_19065 = (state_19097[(23)]);
var inst_18969 = (state_19097[(10)]);
var inst_19056 = (state_19097[(25)]);
var inst_19065__$1 = cljs.core.first.call(null,inst_19056);
var inst_19066 = cljs.core.async.put_BANG_.call(null,inst_19065__$1,inst_18969,done);
var state_19097__$1 = (function (){var statearr_19173 = state_19097;
(statearr_19173[(23)] = inst_19065__$1);

return statearr_19173;
})();
if(cljs.core.truth_(inst_19066)){
var statearr_19174_19236 = state_19097__$1;
(statearr_19174_19236[(1)] = (39));

} else {
var statearr_19175_19237 = state_19097__$1;
(statearr_19175_19237[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (8))){
var inst_18981 = (state_19097[(13)]);
var inst_18980 = (state_19097[(16)]);
var inst_18983 = (inst_18981 < inst_18980);
var inst_18984 = inst_18983;
var state_19097__$1 = state_19097;
if(cljs.core.truth_(inst_18984)){
var statearr_19176_19238 = state_19097__$1;
(statearr_19176_19238[(1)] = (10));

} else {
var statearr_19177_19239 = state_19097__$1;
(statearr_19177_19239[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__17878__auto___19185,cs,m,dchan,dctr,done))
;
return ((function (switch__17766__auto__,c__17878__auto___19185,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17767__auto__ = null;
var cljs$core$async$mult_$_state_machine__17767__auto____0 = (function (){
var statearr_19181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19181[(0)] = cljs$core$async$mult_$_state_machine__17767__auto__);

(statearr_19181[(1)] = (1));

return statearr_19181;
});
var cljs$core$async$mult_$_state_machine__17767__auto____1 = (function (state_19097){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_19097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e19182){if((e19182 instanceof Object)){
var ex__17770__auto__ = e19182;
var statearr_19183_19240 = state_19097;
(statearr_19183_19240[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19241 = state_19097;
state_19097 = G__19241;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17767__auto__ = function(state_19097){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17767__auto____1.call(this,state_19097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17767__auto____0;
cljs$core$async$mult_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17767__auto____1;
return cljs$core$async$mult_$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___19185,cs,m,dchan,dctr,done))
})();
var state__17880__auto__ = (function (){var statearr_19184 = f__17879__auto__.call(null);
(statearr_19184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___19185);

return statearr_19184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___19185,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args19242 = [];
var len__7291__auto___19245 = arguments.length;
var i__7292__auto___19246 = (0);
while(true){
if((i__7292__auto___19246 < len__7291__auto___19245)){
args19242.push((arguments[i__7292__auto___19246]));

var G__19247 = (i__7292__auto___19246 + (1));
i__7292__auto___19246 = G__19247;
continue;
} else {
}
break;
}

var G__19244 = args19242.length;
switch (G__19244) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19242.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6879__auto__ = (((m == null))?null:m);
var m__6880__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,m,ch);
} else {
var m__6880__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6879__auto__ = (((m == null))?null:m);
var m__6880__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,m,ch);
} else {
var m__6880__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6879__auto__ = (((m == null))?null:m);
var m__6880__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,m);
} else {
var m__6880__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6879__auto__ = (((m == null))?null:m);
var m__6880__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,m,state_map);
} else {
var m__6880__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6879__auto__ = (((m == null))?null:m);
var m__6880__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,m,mode);
} else {
var m__6880__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7298__auto__ = [];
var len__7291__auto___19259 = arguments.length;
var i__7292__auto___19260 = (0);
while(true){
if((i__7292__auto___19260 < len__7291__auto___19259)){
args__7298__auto__.push((arguments[i__7292__auto___19260]));

var G__19261 = (i__7292__auto___19260 + (1));
i__7292__auto___19260 = G__19261;
continue;
} else {
}
break;
}

var argseq__7299__auto__ = ((((3) < args__7298__auto__.length))?(new cljs.core.IndexedSeq(args__7298__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7299__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19253){
var map__19254 = p__19253;
var map__19254__$1 = ((((!((map__19254 == null)))?((((map__19254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19254):map__19254);
var opts = map__19254__$1;
var statearr_19256_19262 = state;
(statearr_19256_19262[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__19254,map__19254__$1,opts){
return (function (val){
var statearr_19257_19263 = state;
(statearr_19257_19263[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19254,map__19254__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_19258_19264 = state;
(statearr_19258_19264[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19249){
var G__19250 = cljs.core.first.call(null,seq19249);
var seq19249__$1 = cljs.core.next.call(null,seq19249);
var G__19251 = cljs.core.first.call(null,seq19249__$1);
var seq19249__$2 = cljs.core.next.call(null,seq19249__$1);
var G__19252 = cljs.core.first.call(null,seq19249__$2);
var seq19249__$3 = cljs.core.next.call(null,seq19249__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19250,G__19251,G__19252,seq19249__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19428 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19429){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19429 = meta19429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19430,meta19429__$1){
var self__ = this;
var _19430__$1 = this;
return (new cljs.core.async.t_cljs$core$async19428(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19429__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19430){
var self__ = this;
var _19430__$1 = this;
return self__.meta19429;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19429","meta19429",-1574208579,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19428";

cljs.core.async.t_cljs$core$async19428.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async19428");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19428 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19428(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19429){
return (new cljs.core.async.t_cljs$core$async19428(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19429));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19428(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17878__auto___19591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___19591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___19591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19528){
var state_val_19529 = (state_19528[(1)]);
if((state_val_19529 === (7))){
var inst_19446 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
var statearr_19530_19592 = state_19528__$1;
(statearr_19530_19592[(2)] = inst_19446);

(statearr_19530_19592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (20))){
var inst_19458 = (state_19528[(7)]);
var state_19528__$1 = state_19528;
var statearr_19531_19593 = state_19528__$1;
(statearr_19531_19593[(2)] = inst_19458);

(statearr_19531_19593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (27))){
var state_19528__$1 = state_19528;
var statearr_19532_19594 = state_19528__$1;
(statearr_19532_19594[(2)] = null);

(statearr_19532_19594[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (1))){
var inst_19434 = (state_19528[(8)]);
var inst_19434__$1 = calc_state.call(null);
var inst_19436 = (inst_19434__$1 == null);
var inst_19437 = cljs.core.not.call(null,inst_19436);
var state_19528__$1 = (function (){var statearr_19533 = state_19528;
(statearr_19533[(8)] = inst_19434__$1);

return statearr_19533;
})();
if(inst_19437){
var statearr_19534_19595 = state_19528__$1;
(statearr_19534_19595[(1)] = (2));

} else {
var statearr_19535_19596 = state_19528__$1;
(statearr_19535_19596[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (24))){
var inst_19488 = (state_19528[(9)]);
var inst_19502 = (state_19528[(10)]);
var inst_19481 = (state_19528[(11)]);
var inst_19502__$1 = inst_19481.call(null,inst_19488);
var state_19528__$1 = (function (){var statearr_19536 = state_19528;
(statearr_19536[(10)] = inst_19502__$1);

return statearr_19536;
})();
if(cljs.core.truth_(inst_19502__$1)){
var statearr_19537_19597 = state_19528__$1;
(statearr_19537_19597[(1)] = (29));

} else {
var statearr_19538_19598 = state_19528__$1;
(statearr_19538_19598[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (4))){
var inst_19449 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
if(cljs.core.truth_(inst_19449)){
var statearr_19539_19599 = state_19528__$1;
(statearr_19539_19599[(1)] = (8));

} else {
var statearr_19540_19600 = state_19528__$1;
(statearr_19540_19600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (15))){
var inst_19475 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
if(cljs.core.truth_(inst_19475)){
var statearr_19541_19601 = state_19528__$1;
(statearr_19541_19601[(1)] = (19));

} else {
var statearr_19542_19602 = state_19528__$1;
(statearr_19542_19602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (21))){
var inst_19480 = (state_19528[(12)]);
var inst_19480__$1 = (state_19528[(2)]);
var inst_19481 = cljs.core.get.call(null,inst_19480__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19482 = cljs.core.get.call(null,inst_19480__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19483 = cljs.core.get.call(null,inst_19480__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19528__$1 = (function (){var statearr_19543 = state_19528;
(statearr_19543[(12)] = inst_19480__$1);

(statearr_19543[(11)] = inst_19481);

(statearr_19543[(13)] = inst_19482);

return statearr_19543;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19528__$1,(22),inst_19483);
} else {
if((state_val_19529 === (31))){
var inst_19510 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
if(cljs.core.truth_(inst_19510)){
var statearr_19544_19603 = state_19528__$1;
(statearr_19544_19603[(1)] = (32));

} else {
var statearr_19545_19604 = state_19528__$1;
(statearr_19545_19604[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (32))){
var inst_19487 = (state_19528[(14)]);
var state_19528__$1 = state_19528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19528__$1,(35),out,inst_19487);
} else {
if((state_val_19529 === (33))){
var inst_19480 = (state_19528[(12)]);
var inst_19458 = inst_19480;
var state_19528__$1 = (function (){var statearr_19546 = state_19528;
(statearr_19546[(7)] = inst_19458);

return statearr_19546;
})();
var statearr_19547_19605 = state_19528__$1;
(statearr_19547_19605[(2)] = null);

(statearr_19547_19605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (13))){
var inst_19458 = (state_19528[(7)]);
var inst_19465 = inst_19458.cljs$lang$protocol_mask$partition0$;
var inst_19466 = (inst_19465 & (64));
var inst_19467 = inst_19458.cljs$core$ISeq$;
var inst_19468 = (inst_19466) || (inst_19467);
var state_19528__$1 = state_19528;
if(cljs.core.truth_(inst_19468)){
var statearr_19548_19606 = state_19528__$1;
(statearr_19548_19606[(1)] = (16));

} else {
var statearr_19549_19607 = state_19528__$1;
(statearr_19549_19607[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (22))){
var inst_19488 = (state_19528[(9)]);
var inst_19487 = (state_19528[(14)]);
var inst_19486 = (state_19528[(2)]);
var inst_19487__$1 = cljs.core.nth.call(null,inst_19486,(0),null);
var inst_19488__$1 = cljs.core.nth.call(null,inst_19486,(1),null);
var inst_19489 = (inst_19487__$1 == null);
var inst_19490 = cljs.core._EQ_.call(null,inst_19488__$1,change);
var inst_19491 = (inst_19489) || (inst_19490);
var state_19528__$1 = (function (){var statearr_19550 = state_19528;
(statearr_19550[(9)] = inst_19488__$1);

(statearr_19550[(14)] = inst_19487__$1);

return statearr_19550;
})();
if(cljs.core.truth_(inst_19491)){
var statearr_19551_19608 = state_19528__$1;
(statearr_19551_19608[(1)] = (23));

} else {
var statearr_19552_19609 = state_19528__$1;
(statearr_19552_19609[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (36))){
var inst_19480 = (state_19528[(12)]);
var inst_19458 = inst_19480;
var state_19528__$1 = (function (){var statearr_19553 = state_19528;
(statearr_19553[(7)] = inst_19458);

return statearr_19553;
})();
var statearr_19554_19610 = state_19528__$1;
(statearr_19554_19610[(2)] = null);

(statearr_19554_19610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (29))){
var inst_19502 = (state_19528[(10)]);
var state_19528__$1 = state_19528;
var statearr_19555_19611 = state_19528__$1;
(statearr_19555_19611[(2)] = inst_19502);

(statearr_19555_19611[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (6))){
var state_19528__$1 = state_19528;
var statearr_19556_19612 = state_19528__$1;
(statearr_19556_19612[(2)] = false);

(statearr_19556_19612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (28))){
var inst_19498 = (state_19528[(2)]);
var inst_19499 = calc_state.call(null);
var inst_19458 = inst_19499;
var state_19528__$1 = (function (){var statearr_19557 = state_19528;
(statearr_19557[(7)] = inst_19458);

(statearr_19557[(15)] = inst_19498);

return statearr_19557;
})();
var statearr_19558_19613 = state_19528__$1;
(statearr_19558_19613[(2)] = null);

(statearr_19558_19613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (25))){
var inst_19524 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
var statearr_19559_19614 = state_19528__$1;
(statearr_19559_19614[(2)] = inst_19524);

(statearr_19559_19614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (34))){
var inst_19522 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
var statearr_19560_19615 = state_19528__$1;
(statearr_19560_19615[(2)] = inst_19522);

(statearr_19560_19615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (17))){
var state_19528__$1 = state_19528;
var statearr_19561_19616 = state_19528__$1;
(statearr_19561_19616[(2)] = false);

(statearr_19561_19616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (3))){
var state_19528__$1 = state_19528;
var statearr_19562_19617 = state_19528__$1;
(statearr_19562_19617[(2)] = false);

(statearr_19562_19617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (12))){
var inst_19526 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19528__$1,inst_19526);
} else {
if((state_val_19529 === (2))){
var inst_19434 = (state_19528[(8)]);
var inst_19439 = inst_19434.cljs$lang$protocol_mask$partition0$;
var inst_19440 = (inst_19439 & (64));
var inst_19441 = inst_19434.cljs$core$ISeq$;
var inst_19442 = (inst_19440) || (inst_19441);
var state_19528__$1 = state_19528;
if(cljs.core.truth_(inst_19442)){
var statearr_19563_19618 = state_19528__$1;
(statearr_19563_19618[(1)] = (5));

} else {
var statearr_19564_19619 = state_19528__$1;
(statearr_19564_19619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (23))){
var inst_19487 = (state_19528[(14)]);
var inst_19493 = (inst_19487 == null);
var state_19528__$1 = state_19528;
if(cljs.core.truth_(inst_19493)){
var statearr_19565_19620 = state_19528__$1;
(statearr_19565_19620[(1)] = (26));

} else {
var statearr_19566_19621 = state_19528__$1;
(statearr_19566_19621[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (35))){
var inst_19513 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
if(cljs.core.truth_(inst_19513)){
var statearr_19567_19622 = state_19528__$1;
(statearr_19567_19622[(1)] = (36));

} else {
var statearr_19568_19623 = state_19528__$1;
(statearr_19568_19623[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (19))){
var inst_19458 = (state_19528[(7)]);
var inst_19477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19458);
var state_19528__$1 = state_19528;
var statearr_19569_19624 = state_19528__$1;
(statearr_19569_19624[(2)] = inst_19477);

(statearr_19569_19624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (11))){
var inst_19458 = (state_19528[(7)]);
var inst_19462 = (inst_19458 == null);
var inst_19463 = cljs.core.not.call(null,inst_19462);
var state_19528__$1 = state_19528;
if(inst_19463){
var statearr_19570_19625 = state_19528__$1;
(statearr_19570_19625[(1)] = (13));

} else {
var statearr_19571_19626 = state_19528__$1;
(statearr_19571_19626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (9))){
var inst_19434 = (state_19528[(8)]);
var state_19528__$1 = state_19528;
var statearr_19572_19627 = state_19528__$1;
(statearr_19572_19627[(2)] = inst_19434);

(statearr_19572_19627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (5))){
var state_19528__$1 = state_19528;
var statearr_19573_19628 = state_19528__$1;
(statearr_19573_19628[(2)] = true);

(statearr_19573_19628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (14))){
var state_19528__$1 = state_19528;
var statearr_19574_19629 = state_19528__$1;
(statearr_19574_19629[(2)] = false);

(statearr_19574_19629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (26))){
var inst_19488 = (state_19528[(9)]);
var inst_19495 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19488);
var state_19528__$1 = state_19528;
var statearr_19575_19630 = state_19528__$1;
(statearr_19575_19630[(2)] = inst_19495);

(statearr_19575_19630[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (16))){
var state_19528__$1 = state_19528;
var statearr_19576_19631 = state_19528__$1;
(statearr_19576_19631[(2)] = true);

(statearr_19576_19631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (38))){
var inst_19518 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
var statearr_19577_19632 = state_19528__$1;
(statearr_19577_19632[(2)] = inst_19518);

(statearr_19577_19632[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (30))){
var inst_19488 = (state_19528[(9)]);
var inst_19481 = (state_19528[(11)]);
var inst_19482 = (state_19528[(13)]);
var inst_19505 = cljs.core.empty_QMARK_.call(null,inst_19481);
var inst_19506 = inst_19482.call(null,inst_19488);
var inst_19507 = cljs.core.not.call(null,inst_19506);
var inst_19508 = (inst_19505) && (inst_19507);
var state_19528__$1 = state_19528;
var statearr_19578_19633 = state_19528__$1;
(statearr_19578_19633[(2)] = inst_19508);

(statearr_19578_19633[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (10))){
var inst_19434 = (state_19528[(8)]);
var inst_19454 = (state_19528[(2)]);
var inst_19455 = cljs.core.get.call(null,inst_19454,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19456 = cljs.core.get.call(null,inst_19454,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19457 = cljs.core.get.call(null,inst_19454,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19458 = inst_19434;
var state_19528__$1 = (function (){var statearr_19579 = state_19528;
(statearr_19579[(16)] = inst_19456);

(statearr_19579[(17)] = inst_19457);

(statearr_19579[(7)] = inst_19458);

(statearr_19579[(18)] = inst_19455);

return statearr_19579;
})();
var statearr_19580_19634 = state_19528__$1;
(statearr_19580_19634[(2)] = null);

(statearr_19580_19634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (18))){
var inst_19472 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
var statearr_19581_19635 = state_19528__$1;
(statearr_19581_19635[(2)] = inst_19472);

(statearr_19581_19635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (37))){
var state_19528__$1 = state_19528;
var statearr_19582_19636 = state_19528__$1;
(statearr_19582_19636[(2)] = null);

(statearr_19582_19636[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (8))){
var inst_19434 = (state_19528[(8)]);
var inst_19451 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19434);
var state_19528__$1 = state_19528;
var statearr_19583_19637 = state_19528__$1;
(statearr_19583_19637[(2)] = inst_19451);

(statearr_19583_19637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__17878__auto___19591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17766__auto__,c__17878__auto___19591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17767__auto__ = null;
var cljs$core$async$mix_$_state_machine__17767__auto____0 = (function (){
var statearr_19587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19587[(0)] = cljs$core$async$mix_$_state_machine__17767__auto__);

(statearr_19587[(1)] = (1));

return statearr_19587;
});
var cljs$core$async$mix_$_state_machine__17767__auto____1 = (function (state_19528){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_19528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e19588){if((e19588 instanceof Object)){
var ex__17770__auto__ = e19588;
var statearr_19589_19638 = state_19528;
(statearr_19589_19638[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19639 = state_19528;
state_19528 = G__19639;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17767__auto__ = function(state_19528){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17767__auto____1.call(this,state_19528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17767__auto____0;
cljs$core$async$mix_$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17767__auto____1;
return cljs$core$async$mix_$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___19591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17880__auto__ = (function (){var statearr_19590 = f__17879__auto__.call(null);
(statearr_19590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___19591);

return statearr_19590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___19591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6879__auto__ = (((p == null))?null:p);
var m__6880__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6880__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6879__auto__ = (((p == null))?null:p);
var m__6880__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,p,v,ch);
} else {
var m__6880__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19640 = [];
var len__7291__auto___19643 = arguments.length;
var i__7292__auto___19644 = (0);
while(true){
if((i__7292__auto___19644 < len__7291__auto___19643)){
args19640.push((arguments[i__7292__auto___19644]));

var G__19645 = (i__7292__auto___19644 + (1));
i__7292__auto___19644 = G__19645;
continue;
} else {
}
break;
}

var G__19642 = args19640.length;
switch (G__19642) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19640.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6879__auto__ = (((p == null))?null:p);
var m__6880__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,p);
} else {
var m__6880__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6879__auto__ = (((p == null))?null:p);
var m__6880__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6879__auto__)]);
if(!((m__6880__auto__ == null))){
return m__6880__auto__.call(null,p,v);
} else {
var m__6880__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6880__auto____$1 == null))){
return m__6880__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args19648 = [];
var len__7291__auto___19773 = arguments.length;
var i__7292__auto___19774 = (0);
while(true){
if((i__7292__auto___19774 < len__7291__auto___19773)){
args19648.push((arguments[i__7292__auto___19774]));

var G__19775 = (i__7292__auto___19774 + (1));
i__7292__auto___19774 = G__19775;
continue;
} else {
}
break;
}

var G__19650 = args19648.length;
switch (G__19650) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19648.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6216__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6216__auto__)){
return or__6216__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6216__auto__,mults){
return (function (p1__19647_SHARP_){
if(cljs.core.truth_(p1__19647_SHARP_.call(null,topic))){
return p1__19647_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19647_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6216__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19651 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19652){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19652 = meta19652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19653,meta19652__$1){
var self__ = this;
var _19653__$1 = this;
return (new cljs.core.async.t_cljs$core$async19651(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19652__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19653){
var self__ = this;
var _19653__$1 = this;
return self__.meta19652;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19651.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19652","meta19652",1364742891,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19651";

cljs.core.async.t_cljs$core$async19651.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async19651");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19651 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19651(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19652){
return (new cljs.core.async.t_cljs$core$async19651(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19652));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19651(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17878__auto___19777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___19777,mults,ensure_mult,p){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___19777,mults,ensure_mult,p){
return (function (state_19725){
var state_val_19726 = (state_19725[(1)]);
if((state_val_19726 === (7))){
var inst_19721 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19727_19778 = state_19725__$1;
(statearr_19727_19778[(2)] = inst_19721);

(statearr_19727_19778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (20))){
var state_19725__$1 = state_19725;
var statearr_19728_19779 = state_19725__$1;
(statearr_19728_19779[(2)] = null);

(statearr_19728_19779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (1))){
var state_19725__$1 = state_19725;
var statearr_19729_19780 = state_19725__$1;
(statearr_19729_19780[(2)] = null);

(statearr_19729_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (24))){
var inst_19704 = (state_19725[(7)]);
var inst_19713 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19704);
var state_19725__$1 = state_19725;
var statearr_19730_19781 = state_19725__$1;
(statearr_19730_19781[(2)] = inst_19713);

(statearr_19730_19781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (4))){
var inst_19656 = (state_19725[(8)]);
var inst_19656__$1 = (state_19725[(2)]);
var inst_19657 = (inst_19656__$1 == null);
var state_19725__$1 = (function (){var statearr_19731 = state_19725;
(statearr_19731[(8)] = inst_19656__$1);

return statearr_19731;
})();
if(cljs.core.truth_(inst_19657)){
var statearr_19732_19782 = state_19725__$1;
(statearr_19732_19782[(1)] = (5));

} else {
var statearr_19733_19783 = state_19725__$1;
(statearr_19733_19783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (15))){
var inst_19698 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19734_19784 = state_19725__$1;
(statearr_19734_19784[(2)] = inst_19698);

(statearr_19734_19784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (21))){
var inst_19718 = (state_19725[(2)]);
var state_19725__$1 = (function (){var statearr_19735 = state_19725;
(statearr_19735[(9)] = inst_19718);

return statearr_19735;
})();
var statearr_19736_19785 = state_19725__$1;
(statearr_19736_19785[(2)] = null);

(statearr_19736_19785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (13))){
var inst_19680 = (state_19725[(10)]);
var inst_19682 = cljs.core.chunked_seq_QMARK_.call(null,inst_19680);
var state_19725__$1 = state_19725;
if(inst_19682){
var statearr_19737_19786 = state_19725__$1;
(statearr_19737_19786[(1)] = (16));

} else {
var statearr_19738_19787 = state_19725__$1;
(statearr_19738_19787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (22))){
var inst_19710 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
if(cljs.core.truth_(inst_19710)){
var statearr_19739_19788 = state_19725__$1;
(statearr_19739_19788[(1)] = (23));

} else {
var statearr_19740_19789 = state_19725__$1;
(statearr_19740_19789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (6))){
var inst_19656 = (state_19725[(8)]);
var inst_19704 = (state_19725[(7)]);
var inst_19706 = (state_19725[(11)]);
var inst_19704__$1 = topic_fn.call(null,inst_19656);
var inst_19705 = cljs.core.deref.call(null,mults);
var inst_19706__$1 = cljs.core.get.call(null,inst_19705,inst_19704__$1);
var state_19725__$1 = (function (){var statearr_19741 = state_19725;
(statearr_19741[(7)] = inst_19704__$1);

(statearr_19741[(11)] = inst_19706__$1);

return statearr_19741;
})();
if(cljs.core.truth_(inst_19706__$1)){
var statearr_19742_19790 = state_19725__$1;
(statearr_19742_19790[(1)] = (19));

} else {
var statearr_19743_19791 = state_19725__$1;
(statearr_19743_19791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (25))){
var inst_19715 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19744_19792 = state_19725__$1;
(statearr_19744_19792[(2)] = inst_19715);

(statearr_19744_19792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (17))){
var inst_19680 = (state_19725[(10)]);
var inst_19689 = cljs.core.first.call(null,inst_19680);
var inst_19690 = cljs.core.async.muxch_STAR_.call(null,inst_19689);
var inst_19691 = cljs.core.async.close_BANG_.call(null,inst_19690);
var inst_19692 = cljs.core.next.call(null,inst_19680);
var inst_19666 = inst_19692;
var inst_19667 = null;
var inst_19668 = (0);
var inst_19669 = (0);
var state_19725__$1 = (function (){var statearr_19745 = state_19725;
(statearr_19745[(12)] = inst_19668);

(statearr_19745[(13)] = inst_19667);

(statearr_19745[(14)] = inst_19666);

(statearr_19745[(15)] = inst_19691);

(statearr_19745[(16)] = inst_19669);

return statearr_19745;
})();
var statearr_19746_19793 = state_19725__$1;
(statearr_19746_19793[(2)] = null);

(statearr_19746_19793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (3))){
var inst_19723 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19725__$1,inst_19723);
} else {
if((state_val_19726 === (12))){
var inst_19700 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19747_19794 = state_19725__$1;
(statearr_19747_19794[(2)] = inst_19700);

(statearr_19747_19794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (2))){
var state_19725__$1 = state_19725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19725__$1,(4),ch);
} else {
if((state_val_19726 === (23))){
var state_19725__$1 = state_19725;
var statearr_19748_19795 = state_19725__$1;
(statearr_19748_19795[(2)] = null);

(statearr_19748_19795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (19))){
var inst_19656 = (state_19725[(8)]);
var inst_19706 = (state_19725[(11)]);
var inst_19708 = cljs.core.async.muxch_STAR_.call(null,inst_19706);
var state_19725__$1 = state_19725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19725__$1,(22),inst_19708,inst_19656);
} else {
if((state_val_19726 === (11))){
var inst_19680 = (state_19725[(10)]);
var inst_19666 = (state_19725[(14)]);
var inst_19680__$1 = cljs.core.seq.call(null,inst_19666);
var state_19725__$1 = (function (){var statearr_19749 = state_19725;
(statearr_19749[(10)] = inst_19680__$1);

return statearr_19749;
})();
if(inst_19680__$1){
var statearr_19750_19796 = state_19725__$1;
(statearr_19750_19796[(1)] = (13));

} else {
var statearr_19751_19797 = state_19725__$1;
(statearr_19751_19797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (9))){
var inst_19702 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19752_19798 = state_19725__$1;
(statearr_19752_19798[(2)] = inst_19702);

(statearr_19752_19798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (5))){
var inst_19663 = cljs.core.deref.call(null,mults);
var inst_19664 = cljs.core.vals.call(null,inst_19663);
var inst_19665 = cljs.core.seq.call(null,inst_19664);
var inst_19666 = inst_19665;
var inst_19667 = null;
var inst_19668 = (0);
var inst_19669 = (0);
var state_19725__$1 = (function (){var statearr_19753 = state_19725;
(statearr_19753[(12)] = inst_19668);

(statearr_19753[(13)] = inst_19667);

(statearr_19753[(14)] = inst_19666);

(statearr_19753[(16)] = inst_19669);

return statearr_19753;
})();
var statearr_19754_19799 = state_19725__$1;
(statearr_19754_19799[(2)] = null);

(statearr_19754_19799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (14))){
var state_19725__$1 = state_19725;
var statearr_19758_19800 = state_19725__$1;
(statearr_19758_19800[(2)] = null);

(statearr_19758_19800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (16))){
var inst_19680 = (state_19725[(10)]);
var inst_19684 = cljs.core.chunk_first.call(null,inst_19680);
var inst_19685 = cljs.core.chunk_rest.call(null,inst_19680);
var inst_19686 = cljs.core.count.call(null,inst_19684);
var inst_19666 = inst_19685;
var inst_19667 = inst_19684;
var inst_19668 = inst_19686;
var inst_19669 = (0);
var state_19725__$1 = (function (){var statearr_19759 = state_19725;
(statearr_19759[(12)] = inst_19668);

(statearr_19759[(13)] = inst_19667);

(statearr_19759[(14)] = inst_19666);

(statearr_19759[(16)] = inst_19669);

return statearr_19759;
})();
var statearr_19760_19801 = state_19725__$1;
(statearr_19760_19801[(2)] = null);

(statearr_19760_19801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (10))){
var inst_19668 = (state_19725[(12)]);
var inst_19667 = (state_19725[(13)]);
var inst_19666 = (state_19725[(14)]);
var inst_19669 = (state_19725[(16)]);
var inst_19674 = cljs.core._nth.call(null,inst_19667,inst_19669);
var inst_19675 = cljs.core.async.muxch_STAR_.call(null,inst_19674);
var inst_19676 = cljs.core.async.close_BANG_.call(null,inst_19675);
var inst_19677 = (inst_19669 + (1));
var tmp19755 = inst_19668;
var tmp19756 = inst_19667;
var tmp19757 = inst_19666;
var inst_19666__$1 = tmp19757;
var inst_19667__$1 = tmp19756;
var inst_19668__$1 = tmp19755;
var inst_19669__$1 = inst_19677;
var state_19725__$1 = (function (){var statearr_19761 = state_19725;
(statearr_19761[(12)] = inst_19668__$1);

(statearr_19761[(13)] = inst_19667__$1);

(statearr_19761[(14)] = inst_19666__$1);

(statearr_19761[(17)] = inst_19676);

(statearr_19761[(16)] = inst_19669__$1);

return statearr_19761;
})();
var statearr_19762_19802 = state_19725__$1;
(statearr_19762_19802[(2)] = null);

(statearr_19762_19802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (18))){
var inst_19695 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19763_19803 = state_19725__$1;
(statearr_19763_19803[(2)] = inst_19695);

(statearr_19763_19803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (8))){
var inst_19668 = (state_19725[(12)]);
var inst_19669 = (state_19725[(16)]);
var inst_19671 = (inst_19669 < inst_19668);
var inst_19672 = inst_19671;
var state_19725__$1 = state_19725;
if(cljs.core.truth_(inst_19672)){
var statearr_19764_19804 = state_19725__$1;
(statearr_19764_19804[(1)] = (10));

} else {
var statearr_19765_19805 = state_19725__$1;
(statearr_19765_19805[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__17878__auto___19777,mults,ensure_mult,p))
;
return ((function (switch__17766__auto__,c__17878__auto___19777,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_19769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19769[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_19769[(1)] = (1));

return statearr_19769;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_19725){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_19725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e19770){if((e19770 instanceof Object)){
var ex__17770__auto__ = e19770;
var statearr_19771_19806 = state_19725;
(statearr_19771_19806[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19807 = state_19725;
state_19725 = G__19807;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_19725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_19725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___19777,mults,ensure_mult,p))
})();
var state__17880__auto__ = (function (){var statearr_19772 = f__17879__auto__.call(null);
(statearr_19772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___19777);

return statearr_19772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___19777,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args19808 = [];
var len__7291__auto___19811 = arguments.length;
var i__7292__auto___19812 = (0);
while(true){
if((i__7292__auto___19812 < len__7291__auto___19811)){
args19808.push((arguments[i__7292__auto___19812]));

var G__19813 = (i__7292__auto___19812 + (1));
i__7292__auto___19812 = G__19813;
continue;
} else {
}
break;
}

var G__19810 = args19808.length;
switch (G__19810) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19808.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args19815 = [];
var len__7291__auto___19818 = arguments.length;
var i__7292__auto___19819 = (0);
while(true){
if((i__7292__auto___19819 < len__7291__auto___19818)){
args19815.push((arguments[i__7292__auto___19819]));

var G__19820 = (i__7292__auto___19819 + (1));
i__7292__auto___19819 = G__19820;
continue;
} else {
}
break;
}

var G__19817 = args19815.length;
switch (G__19817) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19815.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args19822 = [];
var len__7291__auto___19893 = arguments.length;
var i__7292__auto___19894 = (0);
while(true){
if((i__7292__auto___19894 < len__7291__auto___19893)){
args19822.push((arguments[i__7292__auto___19894]));

var G__19895 = (i__7292__auto___19894 + (1));
i__7292__auto___19894 = G__19895;
continue;
} else {
}
break;
}

var G__19824 = args19822.length;
switch (G__19824) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19822.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__17878__auto___19897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___19897,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___19897,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19863){
var state_val_19864 = (state_19863[(1)]);
if((state_val_19864 === (7))){
var state_19863__$1 = state_19863;
var statearr_19865_19898 = state_19863__$1;
(statearr_19865_19898[(2)] = null);

(statearr_19865_19898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (1))){
var state_19863__$1 = state_19863;
var statearr_19866_19899 = state_19863__$1;
(statearr_19866_19899[(2)] = null);

(statearr_19866_19899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (4))){
var inst_19827 = (state_19863[(7)]);
var inst_19829 = (inst_19827 < cnt);
var state_19863__$1 = state_19863;
if(cljs.core.truth_(inst_19829)){
var statearr_19867_19900 = state_19863__$1;
(statearr_19867_19900[(1)] = (6));

} else {
var statearr_19868_19901 = state_19863__$1;
(statearr_19868_19901[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (15))){
var inst_19859 = (state_19863[(2)]);
var state_19863__$1 = state_19863;
var statearr_19869_19902 = state_19863__$1;
(statearr_19869_19902[(2)] = inst_19859);

(statearr_19869_19902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (13))){
var inst_19852 = cljs.core.async.close_BANG_.call(null,out);
var state_19863__$1 = state_19863;
var statearr_19870_19903 = state_19863__$1;
(statearr_19870_19903[(2)] = inst_19852);

(statearr_19870_19903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (6))){
var state_19863__$1 = state_19863;
var statearr_19871_19904 = state_19863__$1;
(statearr_19871_19904[(2)] = null);

(statearr_19871_19904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (3))){
var inst_19861 = (state_19863[(2)]);
var state_19863__$1 = state_19863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19863__$1,inst_19861);
} else {
if((state_val_19864 === (12))){
var inst_19849 = (state_19863[(8)]);
var inst_19849__$1 = (state_19863[(2)]);
var inst_19850 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19849__$1);
var state_19863__$1 = (function (){var statearr_19872 = state_19863;
(statearr_19872[(8)] = inst_19849__$1);

return statearr_19872;
})();
if(cljs.core.truth_(inst_19850)){
var statearr_19873_19905 = state_19863__$1;
(statearr_19873_19905[(1)] = (13));

} else {
var statearr_19874_19906 = state_19863__$1;
(statearr_19874_19906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (2))){
var inst_19826 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19827 = (0);
var state_19863__$1 = (function (){var statearr_19875 = state_19863;
(statearr_19875[(9)] = inst_19826);

(statearr_19875[(7)] = inst_19827);

return statearr_19875;
})();
var statearr_19876_19907 = state_19863__$1;
(statearr_19876_19907[(2)] = null);

(statearr_19876_19907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (11))){
var inst_19827 = (state_19863[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19863,(10),Object,null,(9));
var inst_19836 = chs__$1.call(null,inst_19827);
var inst_19837 = done.call(null,inst_19827);
var inst_19838 = cljs.core.async.take_BANG_.call(null,inst_19836,inst_19837);
var state_19863__$1 = state_19863;
var statearr_19877_19908 = state_19863__$1;
(statearr_19877_19908[(2)] = inst_19838);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (9))){
var inst_19827 = (state_19863[(7)]);
var inst_19840 = (state_19863[(2)]);
var inst_19841 = (inst_19827 + (1));
var inst_19827__$1 = inst_19841;
var state_19863__$1 = (function (){var statearr_19878 = state_19863;
(statearr_19878[(10)] = inst_19840);

(statearr_19878[(7)] = inst_19827__$1);

return statearr_19878;
})();
var statearr_19879_19909 = state_19863__$1;
(statearr_19879_19909[(2)] = null);

(statearr_19879_19909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (5))){
var inst_19847 = (state_19863[(2)]);
var state_19863__$1 = (function (){var statearr_19880 = state_19863;
(statearr_19880[(11)] = inst_19847);

return statearr_19880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19863__$1,(12),dchan);
} else {
if((state_val_19864 === (14))){
var inst_19849 = (state_19863[(8)]);
var inst_19854 = cljs.core.apply.call(null,f,inst_19849);
var state_19863__$1 = state_19863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19863__$1,(16),out,inst_19854);
} else {
if((state_val_19864 === (16))){
var inst_19856 = (state_19863[(2)]);
var state_19863__$1 = (function (){var statearr_19881 = state_19863;
(statearr_19881[(12)] = inst_19856);

return statearr_19881;
})();
var statearr_19882_19910 = state_19863__$1;
(statearr_19882_19910[(2)] = null);

(statearr_19882_19910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (10))){
var inst_19831 = (state_19863[(2)]);
var inst_19832 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19863__$1 = (function (){var statearr_19883 = state_19863;
(statearr_19883[(13)] = inst_19831);

return statearr_19883;
})();
var statearr_19884_19911 = state_19863__$1;
(statearr_19884_19911[(2)] = inst_19832);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (8))){
var inst_19845 = (state_19863[(2)]);
var state_19863__$1 = state_19863;
var statearr_19885_19912 = state_19863__$1;
(statearr_19885_19912[(2)] = inst_19845);

(statearr_19885_19912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__17878__auto___19897,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17766__auto__,c__17878__auto___19897,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_19889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19889[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_19889[(1)] = (1));

return statearr_19889;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_19863){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_19863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e19890){if((e19890 instanceof Object)){
var ex__17770__auto__ = e19890;
var statearr_19891_19913 = state_19863;
(statearr_19891_19913[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19914 = state_19863;
state_19863 = G__19914;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_19863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_19863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___19897,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17880__auto__ = (function (){var statearr_19892 = f__17879__auto__.call(null);
(statearr_19892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___19897);

return statearr_19892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___19897,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args19916 = [];
var len__7291__auto___19972 = arguments.length;
var i__7292__auto___19973 = (0);
while(true){
if((i__7292__auto___19973 < len__7291__auto___19972)){
args19916.push((arguments[i__7292__auto___19973]));

var G__19974 = (i__7292__auto___19973 + (1));
i__7292__auto___19973 = G__19974;
continue;
} else {
}
break;
}

var G__19918 = args19916.length;
switch (G__19918) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19916.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17878__auto___19976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___19976,out){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___19976,out){
return (function (state_19948){
var state_val_19949 = (state_19948[(1)]);
if((state_val_19949 === (7))){
var inst_19927 = (state_19948[(7)]);
var inst_19928 = (state_19948[(8)]);
var inst_19927__$1 = (state_19948[(2)]);
var inst_19928__$1 = cljs.core.nth.call(null,inst_19927__$1,(0),null);
var inst_19929 = cljs.core.nth.call(null,inst_19927__$1,(1),null);
var inst_19930 = (inst_19928__$1 == null);
var state_19948__$1 = (function (){var statearr_19950 = state_19948;
(statearr_19950[(7)] = inst_19927__$1);

(statearr_19950[(9)] = inst_19929);

(statearr_19950[(8)] = inst_19928__$1);

return statearr_19950;
})();
if(cljs.core.truth_(inst_19930)){
var statearr_19951_19977 = state_19948__$1;
(statearr_19951_19977[(1)] = (8));

} else {
var statearr_19952_19978 = state_19948__$1;
(statearr_19952_19978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (1))){
var inst_19919 = cljs.core.vec.call(null,chs);
var inst_19920 = inst_19919;
var state_19948__$1 = (function (){var statearr_19953 = state_19948;
(statearr_19953[(10)] = inst_19920);

return statearr_19953;
})();
var statearr_19954_19979 = state_19948__$1;
(statearr_19954_19979[(2)] = null);

(statearr_19954_19979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (4))){
var inst_19920 = (state_19948[(10)]);
var state_19948__$1 = state_19948;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19948__$1,(7),inst_19920);
} else {
if((state_val_19949 === (6))){
var inst_19944 = (state_19948[(2)]);
var state_19948__$1 = state_19948;
var statearr_19955_19980 = state_19948__$1;
(statearr_19955_19980[(2)] = inst_19944);

(statearr_19955_19980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (3))){
var inst_19946 = (state_19948[(2)]);
var state_19948__$1 = state_19948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19948__$1,inst_19946);
} else {
if((state_val_19949 === (2))){
var inst_19920 = (state_19948[(10)]);
var inst_19922 = cljs.core.count.call(null,inst_19920);
var inst_19923 = (inst_19922 > (0));
var state_19948__$1 = state_19948;
if(cljs.core.truth_(inst_19923)){
var statearr_19957_19981 = state_19948__$1;
(statearr_19957_19981[(1)] = (4));

} else {
var statearr_19958_19982 = state_19948__$1;
(statearr_19958_19982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (11))){
var inst_19920 = (state_19948[(10)]);
var inst_19937 = (state_19948[(2)]);
var tmp19956 = inst_19920;
var inst_19920__$1 = tmp19956;
var state_19948__$1 = (function (){var statearr_19959 = state_19948;
(statearr_19959[(11)] = inst_19937);

(statearr_19959[(10)] = inst_19920__$1);

return statearr_19959;
})();
var statearr_19960_19983 = state_19948__$1;
(statearr_19960_19983[(2)] = null);

(statearr_19960_19983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (9))){
var inst_19928 = (state_19948[(8)]);
var state_19948__$1 = state_19948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19948__$1,(11),out,inst_19928);
} else {
if((state_val_19949 === (5))){
var inst_19942 = cljs.core.async.close_BANG_.call(null,out);
var state_19948__$1 = state_19948;
var statearr_19961_19984 = state_19948__$1;
(statearr_19961_19984[(2)] = inst_19942);

(statearr_19961_19984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (10))){
var inst_19940 = (state_19948[(2)]);
var state_19948__$1 = state_19948;
var statearr_19962_19985 = state_19948__$1;
(statearr_19962_19985[(2)] = inst_19940);

(statearr_19962_19985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (8))){
var inst_19927 = (state_19948[(7)]);
var inst_19929 = (state_19948[(9)]);
var inst_19928 = (state_19948[(8)]);
var inst_19920 = (state_19948[(10)]);
var inst_19932 = (function (){var cs = inst_19920;
var vec__19925 = inst_19927;
var v = inst_19928;
var c = inst_19929;
return ((function (cs,vec__19925,v,c,inst_19927,inst_19929,inst_19928,inst_19920,state_val_19949,c__17878__auto___19976,out){
return (function (p1__19915_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19915_SHARP_);
});
;})(cs,vec__19925,v,c,inst_19927,inst_19929,inst_19928,inst_19920,state_val_19949,c__17878__auto___19976,out))
})();
var inst_19933 = cljs.core.filterv.call(null,inst_19932,inst_19920);
var inst_19920__$1 = inst_19933;
var state_19948__$1 = (function (){var statearr_19963 = state_19948;
(statearr_19963[(10)] = inst_19920__$1);

return statearr_19963;
})();
var statearr_19964_19986 = state_19948__$1;
(statearr_19964_19986[(2)] = null);

(statearr_19964_19986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__17878__auto___19976,out))
;
return ((function (switch__17766__auto__,c__17878__auto___19976,out){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_19968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19968[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_19968[(1)] = (1));

return statearr_19968;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_19948){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_19948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e19969){if((e19969 instanceof Object)){
var ex__17770__auto__ = e19969;
var statearr_19970_19987 = state_19948;
(statearr_19970_19987[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19988 = state_19948;
state_19948 = G__19988;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_19948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_19948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___19976,out))
})();
var state__17880__auto__ = (function (){var statearr_19971 = f__17879__auto__.call(null);
(statearr_19971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___19976);

return statearr_19971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___19976,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args19989 = [];
var len__7291__auto___20038 = arguments.length;
var i__7292__auto___20039 = (0);
while(true){
if((i__7292__auto___20039 < len__7291__auto___20038)){
args19989.push((arguments[i__7292__auto___20039]));

var G__20040 = (i__7292__auto___20039 + (1));
i__7292__auto___20039 = G__20040;
continue;
} else {
}
break;
}

var G__19991 = args19989.length;
switch (G__19991) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19989.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17878__auto___20042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___20042,out){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___20042,out){
return (function (state_20015){
var state_val_20016 = (state_20015[(1)]);
if((state_val_20016 === (7))){
var inst_19997 = (state_20015[(7)]);
var inst_19997__$1 = (state_20015[(2)]);
var inst_19998 = (inst_19997__$1 == null);
var inst_19999 = cljs.core.not.call(null,inst_19998);
var state_20015__$1 = (function (){var statearr_20017 = state_20015;
(statearr_20017[(7)] = inst_19997__$1);

return statearr_20017;
})();
if(inst_19999){
var statearr_20018_20043 = state_20015__$1;
(statearr_20018_20043[(1)] = (8));

} else {
var statearr_20019_20044 = state_20015__$1;
(statearr_20019_20044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (1))){
var inst_19992 = (0);
var state_20015__$1 = (function (){var statearr_20020 = state_20015;
(statearr_20020[(8)] = inst_19992);

return statearr_20020;
})();
var statearr_20021_20045 = state_20015__$1;
(statearr_20021_20045[(2)] = null);

(statearr_20021_20045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (4))){
var state_20015__$1 = state_20015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20015__$1,(7),ch);
} else {
if((state_val_20016 === (6))){
var inst_20010 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20022_20046 = state_20015__$1;
(statearr_20022_20046[(2)] = inst_20010);

(statearr_20022_20046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (3))){
var inst_20012 = (state_20015[(2)]);
var inst_20013 = cljs.core.async.close_BANG_.call(null,out);
var state_20015__$1 = (function (){var statearr_20023 = state_20015;
(statearr_20023[(9)] = inst_20012);

return statearr_20023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20015__$1,inst_20013);
} else {
if((state_val_20016 === (2))){
var inst_19992 = (state_20015[(8)]);
var inst_19994 = (inst_19992 < n);
var state_20015__$1 = state_20015;
if(cljs.core.truth_(inst_19994)){
var statearr_20024_20047 = state_20015__$1;
(statearr_20024_20047[(1)] = (4));

} else {
var statearr_20025_20048 = state_20015__$1;
(statearr_20025_20048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (11))){
var inst_19992 = (state_20015[(8)]);
var inst_20002 = (state_20015[(2)]);
var inst_20003 = (inst_19992 + (1));
var inst_19992__$1 = inst_20003;
var state_20015__$1 = (function (){var statearr_20026 = state_20015;
(statearr_20026[(8)] = inst_19992__$1);

(statearr_20026[(10)] = inst_20002);

return statearr_20026;
})();
var statearr_20027_20049 = state_20015__$1;
(statearr_20027_20049[(2)] = null);

(statearr_20027_20049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (9))){
var state_20015__$1 = state_20015;
var statearr_20028_20050 = state_20015__$1;
(statearr_20028_20050[(2)] = null);

(statearr_20028_20050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (5))){
var state_20015__$1 = state_20015;
var statearr_20029_20051 = state_20015__$1;
(statearr_20029_20051[(2)] = null);

(statearr_20029_20051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (10))){
var inst_20007 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20030_20052 = state_20015__$1;
(statearr_20030_20052[(2)] = inst_20007);

(statearr_20030_20052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (8))){
var inst_19997 = (state_20015[(7)]);
var state_20015__$1 = state_20015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20015__$1,(11),out,inst_19997);
} else {
return null;
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
});})(c__17878__auto___20042,out))
;
return ((function (switch__17766__auto__,c__17878__auto___20042,out){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_20034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20034[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_20034[(1)] = (1));

return statearr_20034;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_20015){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_20015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e20035){if((e20035 instanceof Object)){
var ex__17770__auto__ = e20035;
var statearr_20036_20053 = state_20015;
(statearr_20036_20053[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20054 = state_20015;
state_20015 = G__20054;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_20015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_20015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___20042,out))
})();
var state__17880__auto__ = (function (){var statearr_20037 = f__17879__auto__.call(null);
(statearr_20037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___20042);

return statearr_20037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___20042,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20062 = (function (map_LT_,f,ch,meta20063){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20063 = meta20063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20064,meta20063__$1){
var self__ = this;
var _20064__$1 = this;
return (new cljs.core.async.t_cljs$core$async20062(self__.map_LT_,self__.f,self__.ch,meta20063__$1));
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20064){
var self__ = this;
var _20064__$1 = this;
return self__.meta20063;
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20065 = (function (map_LT_,f,ch,meta20063,_,fn1,meta20066){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20063 = meta20063;
this._ = _;
this.fn1 = fn1;
this.meta20066 = meta20066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20067,meta20066__$1){
var self__ = this;
var _20067__$1 = this;
return (new cljs.core.async.t_cljs$core$async20065(self__.map_LT_,self__.f,self__.ch,self__.meta20063,self__._,self__.fn1,meta20066__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20067){
var self__ = this;
var _20067__$1 = this;
return self__.meta20066;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20055_SHARP_){
return f1.call(null,(((p1__20055_SHARP_ == null))?null:self__.f.call(null,p1__20055_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20065.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20063","meta20063",160196750,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20062","cljs.core.async/t_cljs$core$async20062",695996361,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20066","meta20066",1435679458,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20065";

cljs.core.async.t_cljs$core$async20065.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async20065");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20065 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20065(map_LT___$1,f__$1,ch__$1,meta20063__$1,___$2,fn1__$1,meta20066){
return (new cljs.core.async.t_cljs$core$async20065(map_LT___$1,f__$1,ch__$1,meta20063__$1,___$2,fn1__$1,meta20066));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20065(self__.map_LT_,self__.f,self__.ch,self__.meta20063,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6204__auto__ = ret;
if(cljs.core.truth_(and__6204__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6204__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20063","meta20063",160196750,null)], null);
});

cljs.core.async.t_cljs$core$async20062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20062";

cljs.core.async.t_cljs$core$async20062.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async20062");
});

cljs.core.async.__GT_t_cljs$core$async20062 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20062(map_LT___$1,f__$1,ch__$1,meta20063){
return (new cljs.core.async.t_cljs$core$async20062(map_LT___$1,f__$1,ch__$1,meta20063));
});

}

return (new cljs.core.async.t_cljs$core$async20062(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20071 = (function (map_GT_,f,ch,meta20072){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20072 = meta20072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20073,meta20072__$1){
var self__ = this;
var _20073__$1 = this;
return (new cljs.core.async.t_cljs$core$async20071(self__.map_GT_,self__.f,self__.ch,meta20072__$1));
});

cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20073){
var self__ = this;
var _20073__$1 = this;
return self__.meta20072;
});

cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20072","meta20072",509879841,null)], null);
});

cljs.core.async.t_cljs$core$async20071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20071";

cljs.core.async.t_cljs$core$async20071.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async20071");
});

cljs.core.async.__GT_t_cljs$core$async20071 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20071(map_GT___$1,f__$1,ch__$1,meta20072){
return (new cljs.core.async.t_cljs$core$async20071(map_GT___$1,f__$1,ch__$1,meta20072));
});

}

return (new cljs.core.async.t_cljs$core$async20071(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20077 = (function (filter_GT_,p,ch,meta20078){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20078 = meta20078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20079,meta20078__$1){
var self__ = this;
var _20079__$1 = this;
return (new cljs.core.async.t_cljs$core$async20077(self__.filter_GT_,self__.p,self__.ch,meta20078__$1));
});

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20079){
var self__ = this;
var _20079__$1 = this;
return self__.meta20078;
});

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20078","meta20078",-261779042,null)], null);
});

cljs.core.async.t_cljs$core$async20077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20077";

cljs.core.async.t_cljs$core$async20077.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async20077");
});

cljs.core.async.__GT_t_cljs$core$async20077 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20077(filter_GT___$1,p__$1,ch__$1,meta20078){
return (new cljs.core.async.t_cljs$core$async20077(filter_GT___$1,p__$1,ch__$1,meta20078));
});

}

return (new cljs.core.async.t_cljs$core$async20077(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args20080 = [];
var len__7291__auto___20124 = arguments.length;
var i__7292__auto___20125 = (0);
while(true){
if((i__7292__auto___20125 < len__7291__auto___20124)){
args20080.push((arguments[i__7292__auto___20125]));

var G__20126 = (i__7292__auto___20125 + (1));
i__7292__auto___20125 = G__20126;
continue;
} else {
}
break;
}

var G__20082 = args20080.length;
switch (G__20082) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20080.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17878__auto___20128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___20128,out){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___20128,out){
return (function (state_20103){
var state_val_20104 = (state_20103[(1)]);
if((state_val_20104 === (7))){
var inst_20099 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
var statearr_20105_20129 = state_20103__$1;
(statearr_20105_20129[(2)] = inst_20099);

(statearr_20105_20129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (1))){
var state_20103__$1 = state_20103;
var statearr_20106_20130 = state_20103__$1;
(statearr_20106_20130[(2)] = null);

(statearr_20106_20130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (4))){
var inst_20085 = (state_20103[(7)]);
var inst_20085__$1 = (state_20103[(2)]);
var inst_20086 = (inst_20085__$1 == null);
var state_20103__$1 = (function (){var statearr_20107 = state_20103;
(statearr_20107[(7)] = inst_20085__$1);

return statearr_20107;
})();
if(cljs.core.truth_(inst_20086)){
var statearr_20108_20131 = state_20103__$1;
(statearr_20108_20131[(1)] = (5));

} else {
var statearr_20109_20132 = state_20103__$1;
(statearr_20109_20132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (6))){
var inst_20085 = (state_20103[(7)]);
var inst_20090 = p.call(null,inst_20085);
var state_20103__$1 = state_20103;
if(cljs.core.truth_(inst_20090)){
var statearr_20110_20133 = state_20103__$1;
(statearr_20110_20133[(1)] = (8));

} else {
var statearr_20111_20134 = state_20103__$1;
(statearr_20111_20134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (3))){
var inst_20101 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20103__$1,inst_20101);
} else {
if((state_val_20104 === (2))){
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20103__$1,(4),ch);
} else {
if((state_val_20104 === (11))){
var inst_20093 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
var statearr_20112_20135 = state_20103__$1;
(statearr_20112_20135[(2)] = inst_20093);

(statearr_20112_20135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (9))){
var state_20103__$1 = state_20103;
var statearr_20113_20136 = state_20103__$1;
(statearr_20113_20136[(2)] = null);

(statearr_20113_20136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (5))){
var inst_20088 = cljs.core.async.close_BANG_.call(null,out);
var state_20103__$1 = state_20103;
var statearr_20114_20137 = state_20103__$1;
(statearr_20114_20137[(2)] = inst_20088);

(statearr_20114_20137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (10))){
var inst_20096 = (state_20103[(2)]);
var state_20103__$1 = (function (){var statearr_20115 = state_20103;
(statearr_20115[(8)] = inst_20096);

return statearr_20115;
})();
var statearr_20116_20138 = state_20103__$1;
(statearr_20116_20138[(2)] = null);

(statearr_20116_20138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (8))){
var inst_20085 = (state_20103[(7)]);
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20103__$1,(11),out,inst_20085);
} else {
return null;
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
});})(c__17878__auto___20128,out))
;
return ((function (switch__17766__auto__,c__17878__auto___20128,out){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_20120 = [null,null,null,null,null,null,null,null,null];
(statearr_20120[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_20120[(1)] = (1));

return statearr_20120;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_20103){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_20103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e20121){if((e20121 instanceof Object)){
var ex__17770__auto__ = e20121;
var statearr_20122_20139 = state_20103;
(statearr_20122_20139[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20140 = state_20103;
state_20103 = G__20140;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_20103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_20103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___20128,out))
})();
var state__17880__auto__ = (function (){var statearr_20123 = f__17879__auto__.call(null);
(statearr_20123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___20128);

return statearr_20123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___20128,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20141 = [];
var len__7291__auto___20144 = arguments.length;
var i__7292__auto___20145 = (0);
while(true){
if((i__7292__auto___20145 < len__7291__auto___20144)){
args20141.push((arguments[i__7292__auto___20145]));

var G__20146 = (i__7292__auto___20145 + (1));
i__7292__auto___20145 = G__20146;
continue;
} else {
}
break;
}

var G__20143 = args20141.length;
switch (G__20143) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20141.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto__){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto__){
return (function (state_20313){
var state_val_20314 = (state_20313[(1)]);
if((state_val_20314 === (7))){
var inst_20309 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20315_20356 = state_20313__$1;
(statearr_20315_20356[(2)] = inst_20309);

(statearr_20315_20356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (20))){
var inst_20279 = (state_20313[(7)]);
var inst_20290 = (state_20313[(2)]);
var inst_20291 = cljs.core.next.call(null,inst_20279);
var inst_20265 = inst_20291;
var inst_20266 = null;
var inst_20267 = (0);
var inst_20268 = (0);
var state_20313__$1 = (function (){var statearr_20316 = state_20313;
(statearr_20316[(8)] = inst_20265);

(statearr_20316[(9)] = inst_20268);

(statearr_20316[(10)] = inst_20266);

(statearr_20316[(11)] = inst_20290);

(statearr_20316[(12)] = inst_20267);

return statearr_20316;
})();
var statearr_20317_20357 = state_20313__$1;
(statearr_20317_20357[(2)] = null);

(statearr_20317_20357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (1))){
var state_20313__$1 = state_20313;
var statearr_20318_20358 = state_20313__$1;
(statearr_20318_20358[(2)] = null);

(statearr_20318_20358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (4))){
var inst_20254 = (state_20313[(13)]);
var inst_20254__$1 = (state_20313[(2)]);
var inst_20255 = (inst_20254__$1 == null);
var state_20313__$1 = (function (){var statearr_20319 = state_20313;
(statearr_20319[(13)] = inst_20254__$1);

return statearr_20319;
})();
if(cljs.core.truth_(inst_20255)){
var statearr_20320_20359 = state_20313__$1;
(statearr_20320_20359[(1)] = (5));

} else {
var statearr_20321_20360 = state_20313__$1;
(statearr_20321_20360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (15))){
var state_20313__$1 = state_20313;
var statearr_20325_20361 = state_20313__$1;
(statearr_20325_20361[(2)] = null);

(statearr_20325_20361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (21))){
var state_20313__$1 = state_20313;
var statearr_20326_20362 = state_20313__$1;
(statearr_20326_20362[(2)] = null);

(statearr_20326_20362[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (13))){
var inst_20265 = (state_20313[(8)]);
var inst_20268 = (state_20313[(9)]);
var inst_20266 = (state_20313[(10)]);
var inst_20267 = (state_20313[(12)]);
var inst_20275 = (state_20313[(2)]);
var inst_20276 = (inst_20268 + (1));
var tmp20322 = inst_20265;
var tmp20323 = inst_20266;
var tmp20324 = inst_20267;
var inst_20265__$1 = tmp20322;
var inst_20266__$1 = tmp20323;
var inst_20267__$1 = tmp20324;
var inst_20268__$1 = inst_20276;
var state_20313__$1 = (function (){var statearr_20327 = state_20313;
(statearr_20327[(8)] = inst_20265__$1);

(statearr_20327[(14)] = inst_20275);

(statearr_20327[(9)] = inst_20268__$1);

(statearr_20327[(10)] = inst_20266__$1);

(statearr_20327[(12)] = inst_20267__$1);

return statearr_20327;
})();
var statearr_20328_20363 = state_20313__$1;
(statearr_20328_20363[(2)] = null);

(statearr_20328_20363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (22))){
var state_20313__$1 = state_20313;
var statearr_20329_20364 = state_20313__$1;
(statearr_20329_20364[(2)] = null);

(statearr_20329_20364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (6))){
var inst_20254 = (state_20313[(13)]);
var inst_20263 = f.call(null,inst_20254);
var inst_20264 = cljs.core.seq.call(null,inst_20263);
var inst_20265 = inst_20264;
var inst_20266 = null;
var inst_20267 = (0);
var inst_20268 = (0);
var state_20313__$1 = (function (){var statearr_20330 = state_20313;
(statearr_20330[(8)] = inst_20265);

(statearr_20330[(9)] = inst_20268);

(statearr_20330[(10)] = inst_20266);

(statearr_20330[(12)] = inst_20267);

return statearr_20330;
})();
var statearr_20331_20365 = state_20313__$1;
(statearr_20331_20365[(2)] = null);

(statearr_20331_20365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (17))){
var inst_20279 = (state_20313[(7)]);
var inst_20283 = cljs.core.chunk_first.call(null,inst_20279);
var inst_20284 = cljs.core.chunk_rest.call(null,inst_20279);
var inst_20285 = cljs.core.count.call(null,inst_20283);
var inst_20265 = inst_20284;
var inst_20266 = inst_20283;
var inst_20267 = inst_20285;
var inst_20268 = (0);
var state_20313__$1 = (function (){var statearr_20332 = state_20313;
(statearr_20332[(8)] = inst_20265);

(statearr_20332[(9)] = inst_20268);

(statearr_20332[(10)] = inst_20266);

(statearr_20332[(12)] = inst_20267);

return statearr_20332;
})();
var statearr_20333_20366 = state_20313__$1;
(statearr_20333_20366[(2)] = null);

(statearr_20333_20366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (3))){
var inst_20311 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20313__$1,inst_20311);
} else {
if((state_val_20314 === (12))){
var inst_20299 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20334_20367 = state_20313__$1;
(statearr_20334_20367[(2)] = inst_20299);

(statearr_20334_20367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (2))){
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20313__$1,(4),in$);
} else {
if((state_val_20314 === (23))){
var inst_20307 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20335_20368 = state_20313__$1;
(statearr_20335_20368[(2)] = inst_20307);

(statearr_20335_20368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (19))){
var inst_20294 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20336_20369 = state_20313__$1;
(statearr_20336_20369[(2)] = inst_20294);

(statearr_20336_20369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (11))){
var inst_20279 = (state_20313[(7)]);
var inst_20265 = (state_20313[(8)]);
var inst_20279__$1 = cljs.core.seq.call(null,inst_20265);
var state_20313__$1 = (function (){var statearr_20337 = state_20313;
(statearr_20337[(7)] = inst_20279__$1);

return statearr_20337;
})();
if(inst_20279__$1){
var statearr_20338_20370 = state_20313__$1;
(statearr_20338_20370[(1)] = (14));

} else {
var statearr_20339_20371 = state_20313__$1;
(statearr_20339_20371[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (9))){
var inst_20301 = (state_20313[(2)]);
var inst_20302 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20313__$1 = (function (){var statearr_20340 = state_20313;
(statearr_20340[(15)] = inst_20301);

return statearr_20340;
})();
if(cljs.core.truth_(inst_20302)){
var statearr_20341_20372 = state_20313__$1;
(statearr_20341_20372[(1)] = (21));

} else {
var statearr_20342_20373 = state_20313__$1;
(statearr_20342_20373[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (5))){
var inst_20257 = cljs.core.async.close_BANG_.call(null,out);
var state_20313__$1 = state_20313;
var statearr_20343_20374 = state_20313__$1;
(statearr_20343_20374[(2)] = inst_20257);

(statearr_20343_20374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (14))){
var inst_20279 = (state_20313[(7)]);
var inst_20281 = cljs.core.chunked_seq_QMARK_.call(null,inst_20279);
var state_20313__$1 = state_20313;
if(inst_20281){
var statearr_20344_20375 = state_20313__$1;
(statearr_20344_20375[(1)] = (17));

} else {
var statearr_20345_20376 = state_20313__$1;
(statearr_20345_20376[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (16))){
var inst_20297 = (state_20313[(2)]);
var state_20313__$1 = state_20313;
var statearr_20346_20377 = state_20313__$1;
(statearr_20346_20377[(2)] = inst_20297);

(statearr_20346_20377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20314 === (10))){
var inst_20268 = (state_20313[(9)]);
var inst_20266 = (state_20313[(10)]);
var inst_20273 = cljs.core._nth.call(null,inst_20266,inst_20268);
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20313__$1,(13),out,inst_20273);
} else {
if((state_val_20314 === (18))){
var inst_20279 = (state_20313[(7)]);
var inst_20288 = cljs.core.first.call(null,inst_20279);
var state_20313__$1 = state_20313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20313__$1,(20),out,inst_20288);
} else {
if((state_val_20314 === (8))){
var inst_20268 = (state_20313[(9)]);
var inst_20267 = (state_20313[(12)]);
var inst_20270 = (inst_20268 < inst_20267);
var inst_20271 = inst_20270;
var state_20313__$1 = state_20313;
if(cljs.core.truth_(inst_20271)){
var statearr_20347_20378 = state_20313__$1;
(statearr_20347_20378[(1)] = (10));

} else {
var statearr_20348_20379 = state_20313__$1;
(statearr_20348_20379[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__17878__auto__))
;
return ((function (switch__17766__auto__,c__17878__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17767__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17767__auto____0 = (function (){
var statearr_20352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20352[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17767__auto__);

(statearr_20352[(1)] = (1));

return statearr_20352;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17767__auto____1 = (function (state_20313){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_20313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e20353){if((e20353 instanceof Object)){
var ex__17770__auto__ = e20353;
var statearr_20354_20380 = state_20313;
(statearr_20354_20380[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20381 = state_20313;
state_20313 = G__20381;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17767__auto__ = function(state_20313){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17767__auto____1.call(this,state_20313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17767__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17767__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto__))
})();
var state__17880__auto__ = (function (){var statearr_20355 = f__17879__auto__.call(null);
(statearr_20355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto__);

return statearr_20355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto__))
);

return c__17878__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20382 = [];
var len__7291__auto___20385 = arguments.length;
var i__7292__auto___20386 = (0);
while(true){
if((i__7292__auto___20386 < len__7291__auto___20385)){
args20382.push((arguments[i__7292__auto___20386]));

var G__20387 = (i__7292__auto___20386 + (1));
i__7292__auto___20386 = G__20387;
continue;
} else {
}
break;
}

var G__20384 = args20382.length;
switch (G__20384) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20382.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args20389 = [];
var len__7291__auto___20392 = arguments.length;
var i__7292__auto___20393 = (0);
while(true){
if((i__7292__auto___20393 < len__7291__auto___20392)){
args20389.push((arguments[i__7292__auto___20393]));

var G__20394 = (i__7292__auto___20393 + (1));
i__7292__auto___20393 = G__20394;
continue;
} else {
}
break;
}

var G__20391 = args20389.length;
switch (G__20391) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20389.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args20396 = [];
var len__7291__auto___20447 = arguments.length;
var i__7292__auto___20448 = (0);
while(true){
if((i__7292__auto___20448 < len__7291__auto___20447)){
args20396.push((arguments[i__7292__auto___20448]));

var G__20449 = (i__7292__auto___20448 + (1));
i__7292__auto___20448 = G__20449;
continue;
} else {
}
break;
}

var G__20398 = args20396.length;
switch (G__20398) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20396.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17878__auto___20451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___20451,out){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___20451,out){
return (function (state_20422){
var state_val_20423 = (state_20422[(1)]);
if((state_val_20423 === (7))){
var inst_20417 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
var statearr_20424_20452 = state_20422__$1;
(statearr_20424_20452[(2)] = inst_20417);

(statearr_20424_20452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (1))){
var inst_20399 = null;
var state_20422__$1 = (function (){var statearr_20425 = state_20422;
(statearr_20425[(7)] = inst_20399);

return statearr_20425;
})();
var statearr_20426_20453 = state_20422__$1;
(statearr_20426_20453[(2)] = null);

(statearr_20426_20453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (4))){
var inst_20402 = (state_20422[(8)]);
var inst_20402__$1 = (state_20422[(2)]);
var inst_20403 = (inst_20402__$1 == null);
var inst_20404 = cljs.core.not.call(null,inst_20403);
var state_20422__$1 = (function (){var statearr_20427 = state_20422;
(statearr_20427[(8)] = inst_20402__$1);

return statearr_20427;
})();
if(inst_20404){
var statearr_20428_20454 = state_20422__$1;
(statearr_20428_20454[(1)] = (5));

} else {
var statearr_20429_20455 = state_20422__$1;
(statearr_20429_20455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (6))){
var state_20422__$1 = state_20422;
var statearr_20430_20456 = state_20422__$1;
(statearr_20430_20456[(2)] = null);

(statearr_20430_20456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (3))){
var inst_20419 = (state_20422[(2)]);
var inst_20420 = cljs.core.async.close_BANG_.call(null,out);
var state_20422__$1 = (function (){var statearr_20431 = state_20422;
(statearr_20431[(9)] = inst_20419);

return statearr_20431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20422__$1,inst_20420);
} else {
if((state_val_20423 === (2))){
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20422__$1,(4),ch);
} else {
if((state_val_20423 === (11))){
var inst_20402 = (state_20422[(8)]);
var inst_20411 = (state_20422[(2)]);
var inst_20399 = inst_20402;
var state_20422__$1 = (function (){var statearr_20432 = state_20422;
(statearr_20432[(7)] = inst_20399);

(statearr_20432[(10)] = inst_20411);

return statearr_20432;
})();
var statearr_20433_20457 = state_20422__$1;
(statearr_20433_20457[(2)] = null);

(statearr_20433_20457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (9))){
var inst_20402 = (state_20422[(8)]);
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20422__$1,(11),out,inst_20402);
} else {
if((state_val_20423 === (5))){
var inst_20402 = (state_20422[(8)]);
var inst_20399 = (state_20422[(7)]);
var inst_20406 = cljs.core._EQ_.call(null,inst_20402,inst_20399);
var state_20422__$1 = state_20422;
if(inst_20406){
var statearr_20435_20458 = state_20422__$1;
(statearr_20435_20458[(1)] = (8));

} else {
var statearr_20436_20459 = state_20422__$1;
(statearr_20436_20459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (10))){
var inst_20414 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
var statearr_20437_20460 = state_20422__$1;
(statearr_20437_20460[(2)] = inst_20414);

(statearr_20437_20460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (8))){
var inst_20399 = (state_20422[(7)]);
var tmp20434 = inst_20399;
var inst_20399__$1 = tmp20434;
var state_20422__$1 = (function (){var statearr_20438 = state_20422;
(statearr_20438[(7)] = inst_20399__$1);

return statearr_20438;
})();
var statearr_20439_20461 = state_20422__$1;
(statearr_20439_20461[(2)] = null);

(statearr_20439_20461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__17878__auto___20451,out))
;
return ((function (switch__17766__auto__,c__17878__auto___20451,out){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_20443 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20443[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_20443[(1)] = (1));

return statearr_20443;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_20422){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_20422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e20444){if((e20444 instanceof Object)){
var ex__17770__auto__ = e20444;
var statearr_20445_20462 = state_20422;
(statearr_20445_20462[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20463 = state_20422;
state_20422 = G__20463;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_20422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_20422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___20451,out))
})();
var state__17880__auto__ = (function (){var statearr_20446 = f__17879__auto__.call(null);
(statearr_20446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___20451);

return statearr_20446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___20451,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20464 = [];
var len__7291__auto___20534 = arguments.length;
var i__7292__auto___20535 = (0);
while(true){
if((i__7292__auto___20535 < len__7291__auto___20534)){
args20464.push((arguments[i__7292__auto___20535]));

var G__20536 = (i__7292__auto___20535 + (1));
i__7292__auto___20535 = G__20536;
continue;
} else {
}
break;
}

var G__20466 = args20464.length;
switch (G__20466) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20464.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17878__auto___20538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___20538,out){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___20538,out){
return (function (state_20504){
var state_val_20505 = (state_20504[(1)]);
if((state_val_20505 === (7))){
var inst_20500 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
var statearr_20506_20539 = state_20504__$1;
(statearr_20506_20539[(2)] = inst_20500);

(statearr_20506_20539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (1))){
var inst_20467 = (new Array(n));
var inst_20468 = inst_20467;
var inst_20469 = (0);
var state_20504__$1 = (function (){var statearr_20507 = state_20504;
(statearr_20507[(7)] = inst_20468);

(statearr_20507[(8)] = inst_20469);

return statearr_20507;
})();
var statearr_20508_20540 = state_20504__$1;
(statearr_20508_20540[(2)] = null);

(statearr_20508_20540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (4))){
var inst_20472 = (state_20504[(9)]);
var inst_20472__$1 = (state_20504[(2)]);
var inst_20473 = (inst_20472__$1 == null);
var inst_20474 = cljs.core.not.call(null,inst_20473);
var state_20504__$1 = (function (){var statearr_20509 = state_20504;
(statearr_20509[(9)] = inst_20472__$1);

return statearr_20509;
})();
if(inst_20474){
var statearr_20510_20541 = state_20504__$1;
(statearr_20510_20541[(1)] = (5));

} else {
var statearr_20511_20542 = state_20504__$1;
(statearr_20511_20542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (15))){
var inst_20494 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
var statearr_20512_20543 = state_20504__$1;
(statearr_20512_20543[(2)] = inst_20494);

(statearr_20512_20543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (13))){
var state_20504__$1 = state_20504;
var statearr_20513_20544 = state_20504__$1;
(statearr_20513_20544[(2)] = null);

(statearr_20513_20544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (6))){
var inst_20469 = (state_20504[(8)]);
var inst_20490 = (inst_20469 > (0));
var state_20504__$1 = state_20504;
if(cljs.core.truth_(inst_20490)){
var statearr_20514_20545 = state_20504__$1;
(statearr_20514_20545[(1)] = (12));

} else {
var statearr_20515_20546 = state_20504__$1;
(statearr_20515_20546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (3))){
var inst_20502 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20504__$1,inst_20502);
} else {
if((state_val_20505 === (12))){
var inst_20468 = (state_20504[(7)]);
var inst_20492 = cljs.core.vec.call(null,inst_20468);
var state_20504__$1 = state_20504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20504__$1,(15),out,inst_20492);
} else {
if((state_val_20505 === (2))){
var state_20504__$1 = state_20504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20504__$1,(4),ch);
} else {
if((state_val_20505 === (11))){
var inst_20484 = (state_20504[(2)]);
var inst_20485 = (new Array(n));
var inst_20468 = inst_20485;
var inst_20469 = (0);
var state_20504__$1 = (function (){var statearr_20516 = state_20504;
(statearr_20516[(7)] = inst_20468);

(statearr_20516[(10)] = inst_20484);

(statearr_20516[(8)] = inst_20469);

return statearr_20516;
})();
var statearr_20517_20547 = state_20504__$1;
(statearr_20517_20547[(2)] = null);

(statearr_20517_20547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (9))){
var inst_20468 = (state_20504[(7)]);
var inst_20482 = cljs.core.vec.call(null,inst_20468);
var state_20504__$1 = state_20504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20504__$1,(11),out,inst_20482);
} else {
if((state_val_20505 === (5))){
var inst_20468 = (state_20504[(7)]);
var inst_20472 = (state_20504[(9)]);
var inst_20477 = (state_20504[(11)]);
var inst_20469 = (state_20504[(8)]);
var inst_20476 = (inst_20468[inst_20469] = inst_20472);
var inst_20477__$1 = (inst_20469 + (1));
var inst_20478 = (inst_20477__$1 < n);
var state_20504__$1 = (function (){var statearr_20518 = state_20504;
(statearr_20518[(12)] = inst_20476);

(statearr_20518[(11)] = inst_20477__$1);

return statearr_20518;
})();
if(cljs.core.truth_(inst_20478)){
var statearr_20519_20548 = state_20504__$1;
(statearr_20519_20548[(1)] = (8));

} else {
var statearr_20520_20549 = state_20504__$1;
(statearr_20520_20549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (14))){
var inst_20497 = (state_20504[(2)]);
var inst_20498 = cljs.core.async.close_BANG_.call(null,out);
var state_20504__$1 = (function (){var statearr_20522 = state_20504;
(statearr_20522[(13)] = inst_20497);

return statearr_20522;
})();
var statearr_20523_20550 = state_20504__$1;
(statearr_20523_20550[(2)] = inst_20498);

(statearr_20523_20550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (10))){
var inst_20488 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
var statearr_20524_20551 = state_20504__$1;
(statearr_20524_20551[(2)] = inst_20488);

(statearr_20524_20551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (8))){
var inst_20468 = (state_20504[(7)]);
var inst_20477 = (state_20504[(11)]);
var tmp20521 = inst_20468;
var inst_20468__$1 = tmp20521;
var inst_20469 = inst_20477;
var state_20504__$1 = (function (){var statearr_20525 = state_20504;
(statearr_20525[(7)] = inst_20468__$1);

(statearr_20525[(8)] = inst_20469);

return statearr_20525;
})();
var statearr_20526_20552 = state_20504__$1;
(statearr_20526_20552[(2)] = null);

(statearr_20526_20552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__17878__auto___20538,out))
;
return ((function (switch__17766__auto__,c__17878__auto___20538,out){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_20530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20530[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_20530[(1)] = (1));

return statearr_20530;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_20504){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_20504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e20531){if((e20531 instanceof Object)){
var ex__17770__auto__ = e20531;
var statearr_20532_20553 = state_20504;
(statearr_20532_20553[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20554 = state_20504;
state_20504 = G__20554;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_20504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_20504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___20538,out))
})();
var state__17880__auto__ = (function (){var statearr_20533 = f__17879__auto__.call(null);
(statearr_20533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___20538);

return statearr_20533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___20538,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20555 = [];
var len__7291__auto___20629 = arguments.length;
var i__7292__auto___20630 = (0);
while(true){
if((i__7292__auto___20630 < len__7291__auto___20629)){
args20555.push((arguments[i__7292__auto___20630]));

var G__20631 = (i__7292__auto___20630 + (1));
i__7292__auto___20630 = G__20631;
continue;
} else {
}
break;
}

var G__20557 = args20555.length;
switch (G__20557) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20555.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17878__auto___20633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17878__auto___20633,out){
return (function (){
var f__17879__auto__ = (function (){var switch__17766__auto__ = ((function (c__17878__auto___20633,out){
return (function (state_20599){
var state_val_20600 = (state_20599[(1)]);
if((state_val_20600 === (7))){
var inst_20595 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20601_20634 = state_20599__$1;
(statearr_20601_20634[(2)] = inst_20595);

(statearr_20601_20634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (1))){
var inst_20558 = [];
var inst_20559 = inst_20558;
var inst_20560 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20599__$1 = (function (){var statearr_20602 = state_20599;
(statearr_20602[(7)] = inst_20560);

(statearr_20602[(8)] = inst_20559);

return statearr_20602;
})();
var statearr_20603_20635 = state_20599__$1;
(statearr_20603_20635[(2)] = null);

(statearr_20603_20635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (4))){
var inst_20563 = (state_20599[(9)]);
var inst_20563__$1 = (state_20599[(2)]);
var inst_20564 = (inst_20563__$1 == null);
var inst_20565 = cljs.core.not.call(null,inst_20564);
var state_20599__$1 = (function (){var statearr_20604 = state_20599;
(statearr_20604[(9)] = inst_20563__$1);

return statearr_20604;
})();
if(inst_20565){
var statearr_20605_20636 = state_20599__$1;
(statearr_20605_20636[(1)] = (5));

} else {
var statearr_20606_20637 = state_20599__$1;
(statearr_20606_20637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (15))){
var inst_20589 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20607_20638 = state_20599__$1;
(statearr_20607_20638[(2)] = inst_20589);

(statearr_20607_20638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (13))){
var state_20599__$1 = state_20599;
var statearr_20608_20639 = state_20599__$1;
(statearr_20608_20639[(2)] = null);

(statearr_20608_20639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (6))){
var inst_20559 = (state_20599[(8)]);
var inst_20584 = inst_20559.length;
var inst_20585 = (inst_20584 > (0));
var state_20599__$1 = state_20599;
if(cljs.core.truth_(inst_20585)){
var statearr_20609_20640 = state_20599__$1;
(statearr_20609_20640[(1)] = (12));

} else {
var statearr_20610_20641 = state_20599__$1;
(statearr_20610_20641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (3))){
var inst_20597 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20599__$1,inst_20597);
} else {
if((state_val_20600 === (12))){
var inst_20559 = (state_20599[(8)]);
var inst_20587 = cljs.core.vec.call(null,inst_20559);
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20599__$1,(15),out,inst_20587);
} else {
if((state_val_20600 === (2))){
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20599__$1,(4),ch);
} else {
if((state_val_20600 === (11))){
var inst_20567 = (state_20599[(10)]);
var inst_20563 = (state_20599[(9)]);
var inst_20577 = (state_20599[(2)]);
var inst_20578 = [];
var inst_20579 = inst_20578.push(inst_20563);
var inst_20559 = inst_20578;
var inst_20560 = inst_20567;
var state_20599__$1 = (function (){var statearr_20611 = state_20599;
(statearr_20611[(7)] = inst_20560);

(statearr_20611[(11)] = inst_20579);

(statearr_20611[(12)] = inst_20577);

(statearr_20611[(8)] = inst_20559);

return statearr_20611;
})();
var statearr_20612_20642 = state_20599__$1;
(statearr_20612_20642[(2)] = null);

(statearr_20612_20642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (9))){
var inst_20559 = (state_20599[(8)]);
var inst_20575 = cljs.core.vec.call(null,inst_20559);
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20599__$1,(11),out,inst_20575);
} else {
if((state_val_20600 === (5))){
var inst_20560 = (state_20599[(7)]);
var inst_20567 = (state_20599[(10)]);
var inst_20563 = (state_20599[(9)]);
var inst_20567__$1 = f.call(null,inst_20563);
var inst_20568 = cljs.core._EQ_.call(null,inst_20567__$1,inst_20560);
var inst_20569 = cljs.core.keyword_identical_QMARK_.call(null,inst_20560,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20570 = (inst_20568) || (inst_20569);
var state_20599__$1 = (function (){var statearr_20613 = state_20599;
(statearr_20613[(10)] = inst_20567__$1);

return statearr_20613;
})();
if(cljs.core.truth_(inst_20570)){
var statearr_20614_20643 = state_20599__$1;
(statearr_20614_20643[(1)] = (8));

} else {
var statearr_20615_20644 = state_20599__$1;
(statearr_20615_20644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (14))){
var inst_20592 = (state_20599[(2)]);
var inst_20593 = cljs.core.async.close_BANG_.call(null,out);
var state_20599__$1 = (function (){var statearr_20617 = state_20599;
(statearr_20617[(13)] = inst_20592);

return statearr_20617;
})();
var statearr_20618_20645 = state_20599__$1;
(statearr_20618_20645[(2)] = inst_20593);

(statearr_20618_20645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (10))){
var inst_20582 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20619_20646 = state_20599__$1;
(statearr_20619_20646[(2)] = inst_20582);

(statearr_20619_20646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (8))){
var inst_20567 = (state_20599[(10)]);
var inst_20559 = (state_20599[(8)]);
var inst_20563 = (state_20599[(9)]);
var inst_20572 = inst_20559.push(inst_20563);
var tmp20616 = inst_20559;
var inst_20559__$1 = tmp20616;
var inst_20560 = inst_20567;
var state_20599__$1 = (function (){var statearr_20620 = state_20599;
(statearr_20620[(7)] = inst_20560);

(statearr_20620[(14)] = inst_20572);

(statearr_20620[(8)] = inst_20559__$1);

return statearr_20620;
})();
var statearr_20621_20647 = state_20599__$1;
(statearr_20621_20647[(2)] = null);

(statearr_20621_20647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__17878__auto___20633,out))
;
return ((function (switch__17766__auto__,c__17878__auto___20633,out){
return (function() {
var cljs$core$async$state_machine__17767__auto__ = null;
var cljs$core$async$state_machine__17767__auto____0 = (function (){
var statearr_20625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20625[(0)] = cljs$core$async$state_machine__17767__auto__);

(statearr_20625[(1)] = (1));

return statearr_20625;
});
var cljs$core$async$state_machine__17767__auto____1 = (function (state_20599){
while(true){
var ret_value__17768__auto__ = (function (){try{while(true){
var result__17769__auto__ = switch__17766__auto__.call(null,state_20599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17769__auto__;
}
break;
}
}catch (e20626){if((e20626 instanceof Object)){
var ex__17770__auto__ = e20626;
var statearr_20627_20648 = state_20599;
(statearr_20627_20648[(5)] = ex__17770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20649 = state_20599;
state_20599 = G__20649;
continue;
} else {
return ret_value__17768__auto__;
}
break;
}
});
cljs$core$async$state_machine__17767__auto__ = function(state_20599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17767__auto____1.call(this,state_20599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17767__auto____0;
cljs$core$async$state_machine__17767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17767__auto____1;
return cljs$core$async$state_machine__17767__auto__;
})()
;})(switch__17766__auto__,c__17878__auto___20633,out))
})();
var state__17880__auto__ = (function (){var statearr_20628 = f__17879__auto__.call(null);
(statearr_20628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17878__auto___20633);

return statearr_20628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17880__auto__);
});})(c__17878__auto___20633,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1471427570707