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
var args17924 = [];
var len__7291__auto___17930 = arguments.length;
var i__7292__auto___17931 = (0);
while(true){
if((i__7292__auto___17931 < len__7291__auto___17930)){
args17924.push((arguments[i__7292__auto___17931]));

var G__17932 = (i__7292__auto___17931 + (1));
i__7292__auto___17931 = G__17932;
continue;
} else {
}
break;
}

var G__17926 = args17924.length;
switch (G__17926) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17924.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17927 = (function (f,blockable,meta17928){
this.f = f;
this.blockable = blockable;
this.meta17928 = meta17928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17929,meta17928__$1){
var self__ = this;
var _17929__$1 = this;
return (new cljs.core.async.t_cljs$core$async17927(self__.f,self__.blockable,meta17928__$1));
});

cljs.core.async.t_cljs$core$async17927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17929){
var self__ = this;
var _17929__$1 = this;
return self__.meta17928;
});

cljs.core.async.t_cljs$core$async17927.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17927.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17928","meta17928",-902488636,null)], null);
});

cljs.core.async.t_cljs$core$async17927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17927";

cljs.core.async.t_cljs$core$async17927.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async17927");
});

cljs.core.async.__GT_t_cljs$core$async17927 = (function cljs$core$async$__GT_t_cljs$core$async17927(f__$1,blockable__$1,meta17928){
return (new cljs.core.async.t_cljs$core$async17927(f__$1,blockable__$1,meta17928));
});

}

return (new cljs.core.async.t_cljs$core$async17927(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args17936 = [];
var len__7291__auto___17939 = arguments.length;
var i__7292__auto___17940 = (0);
while(true){
if((i__7292__auto___17940 < len__7291__auto___17939)){
args17936.push((arguments[i__7292__auto___17940]));

var G__17941 = (i__7292__auto___17940 + (1));
i__7292__auto___17940 = G__17941;
continue;
} else {
}
break;
}

var G__17938 = args17936.length;
switch (G__17938) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17936.length)].join('')));

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
var args17943 = [];
var len__7291__auto___17946 = arguments.length;
var i__7292__auto___17947 = (0);
while(true){
if((i__7292__auto___17947 < len__7291__auto___17946)){
args17943.push((arguments[i__7292__auto___17947]));

var G__17948 = (i__7292__auto___17947 + (1));
i__7292__auto___17947 = G__17948;
continue;
} else {
}
break;
}

var G__17945 = args17943.length;
switch (G__17945) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17943.length)].join('')));

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
var args17950 = [];
var len__7291__auto___17953 = arguments.length;
var i__7292__auto___17954 = (0);
while(true){
if((i__7292__auto___17954 < len__7291__auto___17953)){
args17950.push((arguments[i__7292__auto___17954]));

var G__17955 = (i__7292__auto___17954 + (1));
i__7292__auto___17954 = G__17955;
continue;
} else {
}
break;
}

var G__17952 = args17950.length;
switch (G__17952) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17950.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17957 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17957);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17957,ret){
return (function (){
return fn1.call(null,val_17957);
});})(val_17957,ret))
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
var args17958 = [];
var len__7291__auto___17961 = arguments.length;
var i__7292__auto___17962 = (0);
while(true){
if((i__7292__auto___17962 < len__7291__auto___17961)){
args17958.push((arguments[i__7292__auto___17962]));

var G__17963 = (i__7292__auto___17962 + (1));
i__7292__auto___17962 = G__17963;
continue;
} else {
}
break;
}

var G__17960 = args17958.length;
switch (G__17960) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17958.length)].join('')));

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
var n__7131__auto___17965 = n;
var x_17966 = (0);
while(true){
if((x_17966 < n__7131__auto___17965)){
(a[x_17966] = (0));

var G__17967 = (x_17966 + (1));
x_17966 = G__17967;
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

var G__17968 = (i + (1));
i = G__17968;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17972 = (function (alt_flag,flag,meta17973){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17973 = meta17973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17974,meta17973__$1){
var self__ = this;
var _17974__$1 = this;
return (new cljs.core.async.t_cljs$core$async17972(self__.alt_flag,self__.flag,meta17973__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17974){
var self__ = this;
var _17974__$1 = this;
return self__.meta17973;
});})(flag))
;

cljs.core.async.t_cljs$core$async17972.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17972.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17973","meta17973",-1014656905,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17972";

cljs.core.async.t_cljs$core$async17972.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async17972");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17972 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17972(alt_flag__$1,flag__$1,meta17973){
return (new cljs.core.async.t_cljs$core$async17972(alt_flag__$1,flag__$1,meta17973));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17972(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17978 = (function (alt_handler,flag,cb,meta17979){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17979 = meta17979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17980,meta17979__$1){
var self__ = this;
var _17980__$1 = this;
return (new cljs.core.async.t_cljs$core$async17978(self__.alt_handler,self__.flag,self__.cb,meta17979__$1));
});

cljs.core.async.t_cljs$core$async17978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17980){
var self__ = this;
var _17980__$1 = this;
return self__.meta17979;
});

cljs.core.async.t_cljs$core$async17978.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17979","meta17979",1690980012,null)], null);
});

cljs.core.async.t_cljs$core$async17978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17978";

cljs.core.async.t_cljs$core$async17978.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async17978");
});

cljs.core.async.__GT_t_cljs$core$async17978 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17978(alt_handler__$1,flag__$1,cb__$1,meta17979){
return (new cljs.core.async.t_cljs$core$async17978(alt_handler__$1,flag__$1,cb__$1,meta17979));
});

}

return (new cljs.core.async.t_cljs$core$async17978(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17981_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17981_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17982_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17982_SHARP_,port], null));
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
var G__17983 = (i + (1));
i = G__17983;
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
var len__7291__auto___17989 = arguments.length;
var i__7292__auto___17990 = (0);
while(true){
if((i__7292__auto___17990 < len__7291__auto___17989)){
args__7298__auto__.push((arguments[i__7292__auto___17990]));

var G__17991 = (i__7292__auto___17990 + (1));
i__7292__auto___17990 = G__17991;
continue;
} else {
}
break;
}

var argseq__7299__auto__ = ((((1) < args__7298__auto__.length))?(new cljs.core.IndexedSeq(args__7298__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7299__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17986){
var map__17987 = p__17986;
var map__17987__$1 = ((((!((map__17987 == null)))?((((map__17987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17987):map__17987);
var opts = map__17987__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17984){
var G__17985 = cljs.core.first.call(null,seq17984);
var seq17984__$1 = cljs.core.next.call(null,seq17984);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17985,seq17984__$1);
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
var args17992 = [];
var len__7291__auto___18042 = arguments.length;
var i__7292__auto___18043 = (0);
while(true){
if((i__7292__auto___18043 < len__7291__auto___18042)){
args17992.push((arguments[i__7292__auto___18043]));

var G__18044 = (i__7292__auto___18043 + (1));
i__7292__auto___18043 = G__18044;
continue;
} else {
}
break;
}

var G__17994 = args17992.length;
switch (G__17994) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17992.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17879__auto___18046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___18046){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___18046){
return (function (state_18018){
var state_val_18019 = (state_18018[(1)]);
if((state_val_18019 === (7))){
var inst_18014 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
var statearr_18020_18047 = state_18018__$1;
(statearr_18020_18047[(2)] = inst_18014);

(statearr_18020_18047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (1))){
var state_18018__$1 = state_18018;
var statearr_18021_18048 = state_18018__$1;
(statearr_18021_18048[(2)] = null);

(statearr_18021_18048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (4))){
var inst_17997 = (state_18018[(7)]);
var inst_17997__$1 = (state_18018[(2)]);
var inst_17998 = (inst_17997__$1 == null);
var state_18018__$1 = (function (){var statearr_18022 = state_18018;
(statearr_18022[(7)] = inst_17997__$1);

return statearr_18022;
})();
if(cljs.core.truth_(inst_17998)){
var statearr_18023_18049 = state_18018__$1;
(statearr_18023_18049[(1)] = (5));

} else {
var statearr_18024_18050 = state_18018__$1;
(statearr_18024_18050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (13))){
var state_18018__$1 = state_18018;
var statearr_18025_18051 = state_18018__$1;
(statearr_18025_18051[(2)] = null);

(statearr_18025_18051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (6))){
var inst_17997 = (state_18018[(7)]);
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18018__$1,(11),to,inst_17997);
} else {
if((state_val_18019 === (3))){
var inst_18016 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18018__$1,inst_18016);
} else {
if((state_val_18019 === (12))){
var state_18018__$1 = state_18018;
var statearr_18026_18052 = state_18018__$1;
(statearr_18026_18052[(2)] = null);

(statearr_18026_18052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (2))){
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18018__$1,(4),from);
} else {
if((state_val_18019 === (11))){
var inst_18007 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
if(cljs.core.truth_(inst_18007)){
var statearr_18027_18053 = state_18018__$1;
(statearr_18027_18053[(1)] = (12));

} else {
var statearr_18028_18054 = state_18018__$1;
(statearr_18028_18054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (9))){
var state_18018__$1 = state_18018;
var statearr_18029_18055 = state_18018__$1;
(statearr_18029_18055[(2)] = null);

(statearr_18029_18055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (5))){
var state_18018__$1 = state_18018;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18030_18056 = state_18018__$1;
(statearr_18030_18056[(1)] = (8));

} else {
var statearr_18031_18057 = state_18018__$1;
(statearr_18031_18057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (14))){
var inst_18012 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
var statearr_18032_18058 = state_18018__$1;
(statearr_18032_18058[(2)] = inst_18012);

(statearr_18032_18058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (10))){
var inst_18004 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
var statearr_18033_18059 = state_18018__$1;
(statearr_18033_18059[(2)] = inst_18004);

(statearr_18033_18059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (8))){
var inst_18001 = cljs.core.async.close_BANG_.call(null,to);
var state_18018__$1 = state_18018;
var statearr_18034_18060 = state_18018__$1;
(statearr_18034_18060[(2)] = inst_18001);

(statearr_18034_18060[(1)] = (10));


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
});})(c__17879__auto___18046))
;
return ((function (switch__17767__auto__,c__17879__auto___18046){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_18038 = [null,null,null,null,null,null,null,null];
(statearr_18038[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_18038[(1)] = (1));

return statearr_18038;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_18018){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18039){if((e18039 instanceof Object)){
var ex__17771__auto__ = e18039;
var statearr_18040_18061 = state_18018;
(statearr_18040_18061[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18062 = state_18018;
state_18018 = G__18062;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_18018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_18018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___18046))
})();
var state__17881__auto__ = (function (){var statearr_18041 = f__17880__auto__.call(null);
(statearr_18041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___18046);

return statearr_18041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___18046))
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
return (function (p__18246){
var vec__18247 = p__18246;
var v = cljs.core.nth.call(null,vec__18247,(0),null);
var p = cljs.core.nth.call(null,vec__18247,(1),null);
var job = vec__18247;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17879__auto___18429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___18429,res,vec__18247,v,p,job,jobs,results){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___18429,res,vec__18247,v,p,job,jobs,results){
return (function (state_18252){
var state_val_18253 = (state_18252[(1)]);
if((state_val_18253 === (1))){
var state_18252__$1 = state_18252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18252__$1,(2),res,v);
} else {
if((state_val_18253 === (2))){
var inst_18249 = (state_18252[(2)]);
var inst_18250 = cljs.core.async.close_BANG_.call(null,res);
var state_18252__$1 = (function (){var statearr_18254 = state_18252;
(statearr_18254[(7)] = inst_18249);

return statearr_18254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18252__$1,inst_18250);
} else {
return null;
}
}
});})(c__17879__auto___18429,res,vec__18247,v,p,job,jobs,results))
;
return ((function (switch__17767__auto__,c__17879__auto___18429,res,vec__18247,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0 = (function (){
var statearr_18258 = [null,null,null,null,null,null,null,null];
(statearr_18258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__);

(statearr_18258[(1)] = (1));

return statearr_18258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1 = (function (state_18252){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18259){if((e18259 instanceof Object)){
var ex__17771__auto__ = e18259;
var statearr_18260_18430 = state_18252;
(statearr_18260_18430[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18431 = state_18252;
state_18252 = G__18431;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = function(state_18252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1.call(this,state_18252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___18429,res,vec__18247,v,p,job,jobs,results))
})();
var state__17881__auto__ = (function (){var statearr_18261 = f__17880__auto__.call(null);
(statearr_18261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___18429);

return statearr_18261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___18429,res,vec__18247,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18262){
var vec__18263 = p__18262;
var v = cljs.core.nth.call(null,vec__18263,(0),null);
var p = cljs.core.nth.call(null,vec__18263,(1),null);
var job = vec__18263;
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
var n__7131__auto___18432 = n;
var __18433 = (0);
while(true){
if((__18433 < n__7131__auto___18432)){
var G__18264_18434 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18264_18434) {
case "compute":
var c__17879__auto___18436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18433,c__17879__auto___18436,G__18264_18434,n__7131__auto___18432,jobs,results,process,async){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (__18433,c__17879__auto___18436,G__18264_18434,n__7131__auto___18432,jobs,results,process,async){
return (function (state_18277){
var state_val_18278 = (state_18277[(1)]);
if((state_val_18278 === (1))){
var state_18277__$1 = state_18277;
var statearr_18279_18437 = state_18277__$1;
(statearr_18279_18437[(2)] = null);

(statearr_18279_18437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18278 === (2))){
var state_18277__$1 = state_18277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18277__$1,(4),jobs);
} else {
if((state_val_18278 === (3))){
var inst_18275 = (state_18277[(2)]);
var state_18277__$1 = state_18277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18277__$1,inst_18275);
} else {
if((state_val_18278 === (4))){
var inst_18267 = (state_18277[(2)]);
var inst_18268 = process.call(null,inst_18267);
var state_18277__$1 = state_18277;
if(cljs.core.truth_(inst_18268)){
var statearr_18280_18438 = state_18277__$1;
(statearr_18280_18438[(1)] = (5));

} else {
var statearr_18281_18439 = state_18277__$1;
(statearr_18281_18439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18278 === (5))){
var state_18277__$1 = state_18277;
var statearr_18282_18440 = state_18277__$1;
(statearr_18282_18440[(2)] = null);

(statearr_18282_18440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18278 === (6))){
var state_18277__$1 = state_18277;
var statearr_18283_18441 = state_18277__$1;
(statearr_18283_18441[(2)] = null);

(statearr_18283_18441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18278 === (7))){
var inst_18273 = (state_18277[(2)]);
var state_18277__$1 = state_18277;
var statearr_18284_18442 = state_18277__$1;
(statearr_18284_18442[(2)] = inst_18273);

(statearr_18284_18442[(1)] = (3));


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
});})(__18433,c__17879__auto___18436,G__18264_18434,n__7131__auto___18432,jobs,results,process,async))
;
return ((function (__18433,switch__17767__auto__,c__17879__auto___18436,G__18264_18434,n__7131__auto___18432,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0 = (function (){
var statearr_18288 = [null,null,null,null,null,null,null];
(statearr_18288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__);

(statearr_18288[(1)] = (1));

return statearr_18288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1 = (function (state_18277){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18289){if((e18289 instanceof Object)){
var ex__17771__auto__ = e18289;
var statearr_18290_18443 = state_18277;
(statearr_18290_18443[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18444 = state_18277;
state_18277 = G__18444;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = function(state_18277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1.call(this,state_18277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__;
})()
;})(__18433,switch__17767__auto__,c__17879__auto___18436,G__18264_18434,n__7131__auto___18432,jobs,results,process,async))
})();
var state__17881__auto__ = (function (){var statearr_18291 = f__17880__auto__.call(null);
(statearr_18291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___18436);

return statearr_18291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(__18433,c__17879__auto___18436,G__18264_18434,n__7131__auto___18432,jobs,results,process,async))
);


break;
case "async":
var c__17879__auto___18445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18433,c__17879__auto___18445,G__18264_18434,n__7131__auto___18432,jobs,results,process,async){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (__18433,c__17879__auto___18445,G__18264_18434,n__7131__auto___18432,jobs,results,process,async){
return (function (state_18304){
var state_val_18305 = (state_18304[(1)]);
if((state_val_18305 === (1))){
var state_18304__$1 = state_18304;
var statearr_18306_18446 = state_18304__$1;
(statearr_18306_18446[(2)] = null);

(statearr_18306_18446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (2))){
var state_18304__$1 = state_18304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18304__$1,(4),jobs);
} else {
if((state_val_18305 === (3))){
var inst_18302 = (state_18304[(2)]);
var state_18304__$1 = state_18304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18304__$1,inst_18302);
} else {
if((state_val_18305 === (4))){
var inst_18294 = (state_18304[(2)]);
var inst_18295 = async.call(null,inst_18294);
var state_18304__$1 = state_18304;
if(cljs.core.truth_(inst_18295)){
var statearr_18307_18447 = state_18304__$1;
(statearr_18307_18447[(1)] = (5));

} else {
var statearr_18308_18448 = state_18304__$1;
(statearr_18308_18448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (5))){
var state_18304__$1 = state_18304;
var statearr_18309_18449 = state_18304__$1;
(statearr_18309_18449[(2)] = null);

(statearr_18309_18449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (6))){
var state_18304__$1 = state_18304;
var statearr_18310_18450 = state_18304__$1;
(statearr_18310_18450[(2)] = null);

(statearr_18310_18450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (7))){
var inst_18300 = (state_18304[(2)]);
var state_18304__$1 = state_18304;
var statearr_18311_18451 = state_18304__$1;
(statearr_18311_18451[(2)] = inst_18300);

(statearr_18311_18451[(1)] = (3));


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
});})(__18433,c__17879__auto___18445,G__18264_18434,n__7131__auto___18432,jobs,results,process,async))
;
return ((function (__18433,switch__17767__auto__,c__17879__auto___18445,G__18264_18434,n__7131__auto___18432,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0 = (function (){
var statearr_18315 = [null,null,null,null,null,null,null];
(statearr_18315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__);

(statearr_18315[(1)] = (1));

return statearr_18315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1 = (function (state_18304){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18316){if((e18316 instanceof Object)){
var ex__17771__auto__ = e18316;
var statearr_18317_18452 = state_18304;
(statearr_18317_18452[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18453 = state_18304;
state_18304 = G__18453;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = function(state_18304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1.call(this,state_18304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__;
})()
;})(__18433,switch__17767__auto__,c__17879__auto___18445,G__18264_18434,n__7131__auto___18432,jobs,results,process,async))
})();
var state__17881__auto__ = (function (){var statearr_18318 = f__17880__auto__.call(null);
(statearr_18318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___18445);

return statearr_18318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(__18433,c__17879__auto___18445,G__18264_18434,n__7131__auto___18432,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18454 = (__18433 + (1));
__18433 = G__18454;
continue;
} else {
}
break;
}

var c__17879__auto___18455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___18455,jobs,results,process,async){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___18455,jobs,results,process,async){
return (function (state_18340){
var state_val_18341 = (state_18340[(1)]);
if((state_val_18341 === (1))){
var state_18340__$1 = state_18340;
var statearr_18342_18456 = state_18340__$1;
(statearr_18342_18456[(2)] = null);

(statearr_18342_18456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (2))){
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18340__$1,(4),from);
} else {
if((state_val_18341 === (3))){
var inst_18338 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18340__$1,inst_18338);
} else {
if((state_val_18341 === (4))){
var inst_18321 = (state_18340[(7)]);
var inst_18321__$1 = (state_18340[(2)]);
var inst_18322 = (inst_18321__$1 == null);
var state_18340__$1 = (function (){var statearr_18343 = state_18340;
(statearr_18343[(7)] = inst_18321__$1);

return statearr_18343;
})();
if(cljs.core.truth_(inst_18322)){
var statearr_18344_18457 = state_18340__$1;
(statearr_18344_18457[(1)] = (5));

} else {
var statearr_18345_18458 = state_18340__$1;
(statearr_18345_18458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (5))){
var inst_18324 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18340__$1 = state_18340;
var statearr_18346_18459 = state_18340__$1;
(statearr_18346_18459[(2)] = inst_18324);

(statearr_18346_18459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (6))){
var inst_18321 = (state_18340[(7)]);
var inst_18326 = (state_18340[(8)]);
var inst_18326__$1 = cljs.core.async.chan.call(null,(1));
var inst_18327 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18328 = [inst_18321,inst_18326__$1];
var inst_18329 = (new cljs.core.PersistentVector(null,2,(5),inst_18327,inst_18328,null));
var state_18340__$1 = (function (){var statearr_18347 = state_18340;
(statearr_18347[(8)] = inst_18326__$1);

return statearr_18347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18340__$1,(8),jobs,inst_18329);
} else {
if((state_val_18341 === (7))){
var inst_18336 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18348_18460 = state_18340__$1;
(statearr_18348_18460[(2)] = inst_18336);

(statearr_18348_18460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (8))){
var inst_18326 = (state_18340[(8)]);
var inst_18331 = (state_18340[(2)]);
var state_18340__$1 = (function (){var statearr_18349 = state_18340;
(statearr_18349[(9)] = inst_18331);

return statearr_18349;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18340__$1,(9),results,inst_18326);
} else {
if((state_val_18341 === (9))){
var inst_18333 = (state_18340[(2)]);
var state_18340__$1 = (function (){var statearr_18350 = state_18340;
(statearr_18350[(10)] = inst_18333);

return statearr_18350;
})();
var statearr_18351_18461 = state_18340__$1;
(statearr_18351_18461[(2)] = null);

(statearr_18351_18461[(1)] = (2));


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
});})(c__17879__auto___18455,jobs,results,process,async))
;
return ((function (switch__17767__auto__,c__17879__auto___18455,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0 = (function (){
var statearr_18355 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__);

(statearr_18355[(1)] = (1));

return statearr_18355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1 = (function (state_18340){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18356){if((e18356 instanceof Object)){
var ex__17771__auto__ = e18356;
var statearr_18357_18462 = state_18340;
(statearr_18357_18462[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18463 = state_18340;
state_18340 = G__18463;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = function(state_18340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1.call(this,state_18340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___18455,jobs,results,process,async))
})();
var state__17881__auto__ = (function (){var statearr_18358 = f__17880__auto__.call(null);
(statearr_18358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___18455);

return statearr_18358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___18455,jobs,results,process,async))
);


var c__17879__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto__,jobs,results,process,async){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto__,jobs,results,process,async){
return (function (state_18396){
var state_val_18397 = (state_18396[(1)]);
if((state_val_18397 === (7))){
var inst_18392 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18398_18464 = state_18396__$1;
(statearr_18398_18464[(2)] = inst_18392);

(statearr_18398_18464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (20))){
var state_18396__$1 = state_18396;
var statearr_18399_18465 = state_18396__$1;
(statearr_18399_18465[(2)] = null);

(statearr_18399_18465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (1))){
var state_18396__$1 = state_18396;
var statearr_18400_18466 = state_18396__$1;
(statearr_18400_18466[(2)] = null);

(statearr_18400_18466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (4))){
var inst_18361 = (state_18396[(7)]);
var inst_18361__$1 = (state_18396[(2)]);
var inst_18362 = (inst_18361__$1 == null);
var state_18396__$1 = (function (){var statearr_18401 = state_18396;
(statearr_18401[(7)] = inst_18361__$1);

return statearr_18401;
})();
if(cljs.core.truth_(inst_18362)){
var statearr_18402_18467 = state_18396__$1;
(statearr_18402_18467[(1)] = (5));

} else {
var statearr_18403_18468 = state_18396__$1;
(statearr_18403_18468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (15))){
var inst_18374 = (state_18396[(8)]);
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18396__$1,(18),to,inst_18374);
} else {
if((state_val_18397 === (21))){
var inst_18387 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18404_18469 = state_18396__$1;
(statearr_18404_18469[(2)] = inst_18387);

(statearr_18404_18469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (13))){
var inst_18389 = (state_18396[(2)]);
var state_18396__$1 = (function (){var statearr_18405 = state_18396;
(statearr_18405[(9)] = inst_18389);

return statearr_18405;
})();
var statearr_18406_18470 = state_18396__$1;
(statearr_18406_18470[(2)] = null);

(statearr_18406_18470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (6))){
var inst_18361 = (state_18396[(7)]);
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18396__$1,(11),inst_18361);
} else {
if((state_val_18397 === (17))){
var inst_18382 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
if(cljs.core.truth_(inst_18382)){
var statearr_18407_18471 = state_18396__$1;
(statearr_18407_18471[(1)] = (19));

} else {
var statearr_18408_18472 = state_18396__$1;
(statearr_18408_18472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (3))){
var inst_18394 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18396__$1,inst_18394);
} else {
if((state_val_18397 === (12))){
var inst_18371 = (state_18396[(10)]);
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18396__$1,(14),inst_18371);
} else {
if((state_val_18397 === (2))){
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18396__$1,(4),results);
} else {
if((state_val_18397 === (19))){
var state_18396__$1 = state_18396;
var statearr_18409_18473 = state_18396__$1;
(statearr_18409_18473[(2)] = null);

(statearr_18409_18473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (11))){
var inst_18371 = (state_18396[(2)]);
var state_18396__$1 = (function (){var statearr_18410 = state_18396;
(statearr_18410[(10)] = inst_18371);

return statearr_18410;
})();
var statearr_18411_18474 = state_18396__$1;
(statearr_18411_18474[(2)] = null);

(statearr_18411_18474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (9))){
var state_18396__$1 = state_18396;
var statearr_18412_18475 = state_18396__$1;
(statearr_18412_18475[(2)] = null);

(statearr_18412_18475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (5))){
var state_18396__$1 = state_18396;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18413_18476 = state_18396__$1;
(statearr_18413_18476[(1)] = (8));

} else {
var statearr_18414_18477 = state_18396__$1;
(statearr_18414_18477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (14))){
var inst_18376 = (state_18396[(11)]);
var inst_18374 = (state_18396[(8)]);
var inst_18374__$1 = (state_18396[(2)]);
var inst_18375 = (inst_18374__$1 == null);
var inst_18376__$1 = cljs.core.not.call(null,inst_18375);
var state_18396__$1 = (function (){var statearr_18415 = state_18396;
(statearr_18415[(11)] = inst_18376__$1);

(statearr_18415[(8)] = inst_18374__$1);

return statearr_18415;
})();
if(inst_18376__$1){
var statearr_18416_18478 = state_18396__$1;
(statearr_18416_18478[(1)] = (15));

} else {
var statearr_18417_18479 = state_18396__$1;
(statearr_18417_18479[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (16))){
var inst_18376 = (state_18396[(11)]);
var state_18396__$1 = state_18396;
var statearr_18418_18480 = state_18396__$1;
(statearr_18418_18480[(2)] = inst_18376);

(statearr_18418_18480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (10))){
var inst_18368 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18419_18481 = state_18396__$1;
(statearr_18419_18481[(2)] = inst_18368);

(statearr_18419_18481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (18))){
var inst_18379 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18420_18482 = state_18396__$1;
(statearr_18420_18482[(2)] = inst_18379);

(statearr_18420_18482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (8))){
var inst_18365 = cljs.core.async.close_BANG_.call(null,to);
var state_18396__$1 = state_18396;
var statearr_18421_18483 = state_18396__$1;
(statearr_18421_18483[(2)] = inst_18365);

(statearr_18421_18483[(1)] = (10));


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
});})(c__17879__auto__,jobs,results,process,async))
;
return ((function (switch__17767__auto__,c__17879__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0 = (function (){
var statearr_18425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__);

(statearr_18425[(1)] = (1));

return statearr_18425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1 = (function (state_18396){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18426){if((e18426 instanceof Object)){
var ex__17771__auto__ = e18426;
var statearr_18427_18484 = state_18396;
(statearr_18427_18484[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18485 = state_18396;
state_18396 = G__18485;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__ = function(state_18396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1.call(this,state_18396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto__,jobs,results,process,async))
})();
var state__17881__auto__ = (function (){var statearr_18428 = f__17880__auto__.call(null);
(statearr_18428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto__);

return statearr_18428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto__,jobs,results,process,async))
);

return c__17879__auto__;
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
var args18486 = [];
var len__7291__auto___18489 = arguments.length;
var i__7292__auto___18490 = (0);
while(true){
if((i__7292__auto___18490 < len__7291__auto___18489)){
args18486.push((arguments[i__7292__auto___18490]));

var G__18491 = (i__7292__auto___18490 + (1));
i__7292__auto___18490 = G__18491;
continue;
} else {
}
break;
}

var G__18488 = args18486.length;
switch (G__18488) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18486.length)].join('')));

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
var args18493 = [];
var len__7291__auto___18496 = arguments.length;
var i__7292__auto___18497 = (0);
while(true){
if((i__7292__auto___18497 < len__7291__auto___18496)){
args18493.push((arguments[i__7292__auto___18497]));

var G__18498 = (i__7292__auto___18497 + (1));
i__7292__auto___18497 = G__18498;
continue;
} else {
}
break;
}

var G__18495 = args18493.length;
switch (G__18495) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18493.length)].join('')));

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
var args18500 = [];
var len__7291__auto___18553 = arguments.length;
var i__7292__auto___18554 = (0);
while(true){
if((i__7292__auto___18554 < len__7291__auto___18553)){
args18500.push((arguments[i__7292__auto___18554]));

var G__18555 = (i__7292__auto___18554 + (1));
i__7292__auto___18554 = G__18555;
continue;
} else {
}
break;
}

var G__18502 = args18500.length;
switch (G__18502) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18500.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17879__auto___18557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___18557,tc,fc){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___18557,tc,fc){
return (function (state_18528){
var state_val_18529 = (state_18528[(1)]);
if((state_val_18529 === (7))){
var inst_18524 = (state_18528[(2)]);
var state_18528__$1 = state_18528;
var statearr_18530_18558 = state_18528__$1;
(statearr_18530_18558[(2)] = inst_18524);

(statearr_18530_18558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (1))){
var state_18528__$1 = state_18528;
var statearr_18531_18559 = state_18528__$1;
(statearr_18531_18559[(2)] = null);

(statearr_18531_18559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (4))){
var inst_18505 = (state_18528[(7)]);
var inst_18505__$1 = (state_18528[(2)]);
var inst_18506 = (inst_18505__$1 == null);
var state_18528__$1 = (function (){var statearr_18532 = state_18528;
(statearr_18532[(7)] = inst_18505__$1);

return statearr_18532;
})();
if(cljs.core.truth_(inst_18506)){
var statearr_18533_18560 = state_18528__$1;
(statearr_18533_18560[(1)] = (5));

} else {
var statearr_18534_18561 = state_18528__$1;
(statearr_18534_18561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (13))){
var state_18528__$1 = state_18528;
var statearr_18535_18562 = state_18528__$1;
(statearr_18535_18562[(2)] = null);

(statearr_18535_18562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (6))){
var inst_18505 = (state_18528[(7)]);
var inst_18511 = p.call(null,inst_18505);
var state_18528__$1 = state_18528;
if(cljs.core.truth_(inst_18511)){
var statearr_18536_18563 = state_18528__$1;
(statearr_18536_18563[(1)] = (9));

} else {
var statearr_18537_18564 = state_18528__$1;
(statearr_18537_18564[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (3))){
var inst_18526 = (state_18528[(2)]);
var state_18528__$1 = state_18528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18528__$1,inst_18526);
} else {
if((state_val_18529 === (12))){
var state_18528__$1 = state_18528;
var statearr_18538_18565 = state_18528__$1;
(statearr_18538_18565[(2)] = null);

(statearr_18538_18565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (2))){
var state_18528__$1 = state_18528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18528__$1,(4),ch);
} else {
if((state_val_18529 === (11))){
var inst_18505 = (state_18528[(7)]);
var inst_18515 = (state_18528[(2)]);
var state_18528__$1 = state_18528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18528__$1,(8),inst_18515,inst_18505);
} else {
if((state_val_18529 === (9))){
var state_18528__$1 = state_18528;
var statearr_18539_18566 = state_18528__$1;
(statearr_18539_18566[(2)] = tc);

(statearr_18539_18566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (5))){
var inst_18508 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18509 = cljs.core.async.close_BANG_.call(null,fc);
var state_18528__$1 = (function (){var statearr_18540 = state_18528;
(statearr_18540[(8)] = inst_18508);

return statearr_18540;
})();
var statearr_18541_18567 = state_18528__$1;
(statearr_18541_18567[(2)] = inst_18509);

(statearr_18541_18567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (14))){
var inst_18522 = (state_18528[(2)]);
var state_18528__$1 = state_18528;
var statearr_18542_18568 = state_18528__$1;
(statearr_18542_18568[(2)] = inst_18522);

(statearr_18542_18568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (10))){
var state_18528__$1 = state_18528;
var statearr_18543_18569 = state_18528__$1;
(statearr_18543_18569[(2)] = fc);

(statearr_18543_18569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (8))){
var inst_18517 = (state_18528[(2)]);
var state_18528__$1 = state_18528;
if(cljs.core.truth_(inst_18517)){
var statearr_18544_18570 = state_18528__$1;
(statearr_18544_18570[(1)] = (12));

} else {
var statearr_18545_18571 = state_18528__$1;
(statearr_18545_18571[(1)] = (13));

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
});})(c__17879__auto___18557,tc,fc))
;
return ((function (switch__17767__auto__,c__17879__auto___18557,tc,fc){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_18549 = [null,null,null,null,null,null,null,null,null];
(statearr_18549[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_18549[(1)] = (1));

return statearr_18549;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_18528){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18550){if((e18550 instanceof Object)){
var ex__17771__auto__ = e18550;
var statearr_18551_18572 = state_18528;
(statearr_18551_18572[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18573 = state_18528;
state_18528 = G__18573;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_18528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_18528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___18557,tc,fc))
})();
var state__17881__auto__ = (function (){var statearr_18552 = f__17880__auto__.call(null);
(statearr_18552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___18557);

return statearr_18552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___18557,tc,fc))
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
var c__17879__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto__){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto__){
return (function (state_18637){
var state_val_18638 = (state_18637[(1)]);
if((state_val_18638 === (7))){
var inst_18633 = (state_18637[(2)]);
var state_18637__$1 = state_18637;
var statearr_18639_18660 = state_18637__$1;
(statearr_18639_18660[(2)] = inst_18633);

(statearr_18639_18660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (1))){
var inst_18617 = init;
var state_18637__$1 = (function (){var statearr_18640 = state_18637;
(statearr_18640[(7)] = inst_18617);

return statearr_18640;
})();
var statearr_18641_18661 = state_18637__$1;
(statearr_18641_18661[(2)] = null);

(statearr_18641_18661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (4))){
var inst_18620 = (state_18637[(8)]);
var inst_18620__$1 = (state_18637[(2)]);
var inst_18621 = (inst_18620__$1 == null);
var state_18637__$1 = (function (){var statearr_18642 = state_18637;
(statearr_18642[(8)] = inst_18620__$1);

return statearr_18642;
})();
if(cljs.core.truth_(inst_18621)){
var statearr_18643_18662 = state_18637__$1;
(statearr_18643_18662[(1)] = (5));

} else {
var statearr_18644_18663 = state_18637__$1;
(statearr_18644_18663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (6))){
var inst_18620 = (state_18637[(8)]);
var inst_18624 = (state_18637[(9)]);
var inst_18617 = (state_18637[(7)]);
var inst_18624__$1 = f.call(null,inst_18617,inst_18620);
var inst_18625 = cljs.core.reduced_QMARK_.call(null,inst_18624__$1);
var state_18637__$1 = (function (){var statearr_18645 = state_18637;
(statearr_18645[(9)] = inst_18624__$1);

return statearr_18645;
})();
if(inst_18625){
var statearr_18646_18664 = state_18637__$1;
(statearr_18646_18664[(1)] = (8));

} else {
var statearr_18647_18665 = state_18637__$1;
(statearr_18647_18665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (3))){
var inst_18635 = (state_18637[(2)]);
var state_18637__$1 = state_18637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18637__$1,inst_18635);
} else {
if((state_val_18638 === (2))){
var state_18637__$1 = state_18637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18637__$1,(4),ch);
} else {
if((state_val_18638 === (9))){
var inst_18624 = (state_18637[(9)]);
var inst_18617 = inst_18624;
var state_18637__$1 = (function (){var statearr_18648 = state_18637;
(statearr_18648[(7)] = inst_18617);

return statearr_18648;
})();
var statearr_18649_18666 = state_18637__$1;
(statearr_18649_18666[(2)] = null);

(statearr_18649_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (5))){
var inst_18617 = (state_18637[(7)]);
var state_18637__$1 = state_18637;
var statearr_18650_18667 = state_18637__$1;
(statearr_18650_18667[(2)] = inst_18617);

(statearr_18650_18667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (10))){
var inst_18631 = (state_18637[(2)]);
var state_18637__$1 = state_18637;
var statearr_18651_18668 = state_18637__$1;
(statearr_18651_18668[(2)] = inst_18631);

(statearr_18651_18668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (8))){
var inst_18624 = (state_18637[(9)]);
var inst_18627 = cljs.core.deref.call(null,inst_18624);
var state_18637__$1 = state_18637;
var statearr_18652_18669 = state_18637__$1;
(statearr_18652_18669[(2)] = inst_18627);

(statearr_18652_18669[(1)] = (10));


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
});})(c__17879__auto__))
;
return ((function (switch__17767__auto__,c__17879__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17768__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17768__auto____0 = (function (){
var statearr_18656 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18656[(0)] = cljs$core$async$reduce_$_state_machine__17768__auto__);

(statearr_18656[(1)] = (1));

return statearr_18656;
});
var cljs$core$async$reduce_$_state_machine__17768__auto____1 = (function (state_18637){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18657){if((e18657 instanceof Object)){
var ex__17771__auto__ = e18657;
var statearr_18658_18670 = state_18637;
(statearr_18658_18670[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18671 = state_18637;
state_18637 = G__18671;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17768__auto__ = function(state_18637){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17768__auto____1.call(this,state_18637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17768__auto____0;
cljs$core$async$reduce_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17768__auto____1;
return cljs$core$async$reduce_$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto__))
})();
var state__17881__auto__ = (function (){var statearr_18659 = f__17880__auto__.call(null);
(statearr_18659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto__);

return statearr_18659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto__))
);

return c__17879__auto__;
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
var args18672 = [];
var len__7291__auto___18724 = arguments.length;
var i__7292__auto___18725 = (0);
while(true){
if((i__7292__auto___18725 < len__7291__auto___18724)){
args18672.push((arguments[i__7292__auto___18725]));

var G__18726 = (i__7292__auto___18725 + (1));
i__7292__auto___18725 = G__18726;
continue;
} else {
}
break;
}

var G__18674 = args18672.length;
switch (G__18674) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18672.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17879__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto__){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto__){
return (function (state_18699){
var state_val_18700 = (state_18699[(1)]);
if((state_val_18700 === (7))){
var inst_18681 = (state_18699[(2)]);
var state_18699__$1 = state_18699;
var statearr_18701_18728 = state_18699__$1;
(statearr_18701_18728[(2)] = inst_18681);

(statearr_18701_18728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (1))){
var inst_18675 = cljs.core.seq.call(null,coll);
var inst_18676 = inst_18675;
var state_18699__$1 = (function (){var statearr_18702 = state_18699;
(statearr_18702[(7)] = inst_18676);

return statearr_18702;
})();
var statearr_18703_18729 = state_18699__$1;
(statearr_18703_18729[(2)] = null);

(statearr_18703_18729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (4))){
var inst_18676 = (state_18699[(7)]);
var inst_18679 = cljs.core.first.call(null,inst_18676);
var state_18699__$1 = state_18699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18699__$1,(7),ch,inst_18679);
} else {
if((state_val_18700 === (13))){
var inst_18693 = (state_18699[(2)]);
var state_18699__$1 = state_18699;
var statearr_18704_18730 = state_18699__$1;
(statearr_18704_18730[(2)] = inst_18693);

(statearr_18704_18730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (6))){
var inst_18684 = (state_18699[(2)]);
var state_18699__$1 = state_18699;
if(cljs.core.truth_(inst_18684)){
var statearr_18705_18731 = state_18699__$1;
(statearr_18705_18731[(1)] = (8));

} else {
var statearr_18706_18732 = state_18699__$1;
(statearr_18706_18732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (3))){
var inst_18697 = (state_18699[(2)]);
var state_18699__$1 = state_18699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18699__$1,inst_18697);
} else {
if((state_val_18700 === (12))){
var state_18699__$1 = state_18699;
var statearr_18707_18733 = state_18699__$1;
(statearr_18707_18733[(2)] = null);

(statearr_18707_18733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (2))){
var inst_18676 = (state_18699[(7)]);
var state_18699__$1 = state_18699;
if(cljs.core.truth_(inst_18676)){
var statearr_18708_18734 = state_18699__$1;
(statearr_18708_18734[(1)] = (4));

} else {
var statearr_18709_18735 = state_18699__$1;
(statearr_18709_18735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (11))){
var inst_18690 = cljs.core.async.close_BANG_.call(null,ch);
var state_18699__$1 = state_18699;
var statearr_18710_18736 = state_18699__$1;
(statearr_18710_18736[(2)] = inst_18690);

(statearr_18710_18736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (9))){
var state_18699__$1 = state_18699;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18711_18737 = state_18699__$1;
(statearr_18711_18737[(1)] = (11));

} else {
var statearr_18712_18738 = state_18699__$1;
(statearr_18712_18738[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (5))){
var inst_18676 = (state_18699[(7)]);
var state_18699__$1 = state_18699;
var statearr_18713_18739 = state_18699__$1;
(statearr_18713_18739[(2)] = inst_18676);

(statearr_18713_18739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (10))){
var inst_18695 = (state_18699[(2)]);
var state_18699__$1 = state_18699;
var statearr_18714_18740 = state_18699__$1;
(statearr_18714_18740[(2)] = inst_18695);

(statearr_18714_18740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (8))){
var inst_18676 = (state_18699[(7)]);
var inst_18686 = cljs.core.next.call(null,inst_18676);
var inst_18676__$1 = inst_18686;
var state_18699__$1 = (function (){var statearr_18715 = state_18699;
(statearr_18715[(7)] = inst_18676__$1);

return statearr_18715;
})();
var statearr_18716_18741 = state_18699__$1;
(statearr_18716_18741[(2)] = null);

(statearr_18716_18741[(1)] = (2));


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
});})(c__17879__auto__))
;
return ((function (switch__17767__auto__,c__17879__auto__){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_18720 = [null,null,null,null,null,null,null,null];
(statearr_18720[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_18720[(1)] = (1));

return statearr_18720;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_18699){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_18699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e18721){if((e18721 instanceof Object)){
var ex__17771__auto__ = e18721;
var statearr_18722_18742 = state_18699;
(statearr_18722_18742[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18743 = state_18699;
state_18699 = G__18743;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_18699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_18699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto__))
})();
var state__17881__auto__ = (function (){var statearr_18723 = f__17880__auto__.call(null);
(statearr_18723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto__);

return statearr_18723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto__))
);

return c__17879__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18965 = (function (mult,ch,cs,meta18966){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18966 = meta18966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18967,meta18966__$1){
var self__ = this;
var _18967__$1 = this;
return (new cljs.core.async.t_cljs$core$async18965(self__.mult,self__.ch,self__.cs,meta18966__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18967){
var self__ = this;
var _18967__$1 = this;
return self__.meta18966;
});})(cs))
;

cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18965.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18966","meta18966",-997551859,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18965";

cljs.core.async.t_cljs$core$async18965.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async18965");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18965 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18965(mult__$1,ch__$1,cs__$1,meta18966){
return (new cljs.core.async.t_cljs$core$async18965(mult__$1,ch__$1,cs__$1,meta18966));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18965(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17879__auto___19186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___19186,cs,m,dchan,dctr,done){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___19186,cs,m,dchan,dctr,done){
return (function (state_19098){
var state_val_19099 = (state_19098[(1)]);
if((state_val_19099 === (7))){
var inst_19094 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19100_19187 = state_19098__$1;
(statearr_19100_19187[(2)] = inst_19094);

(statearr_19100_19187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (20))){
var inst_18999 = (state_19098[(7)]);
var inst_19009 = cljs.core.first.call(null,inst_18999);
var inst_19010 = cljs.core.nth.call(null,inst_19009,(0),null);
var inst_19011 = cljs.core.nth.call(null,inst_19009,(1),null);
var state_19098__$1 = (function (){var statearr_19101 = state_19098;
(statearr_19101[(8)] = inst_19010);

return statearr_19101;
})();
if(cljs.core.truth_(inst_19011)){
var statearr_19102_19188 = state_19098__$1;
(statearr_19102_19188[(1)] = (22));

} else {
var statearr_19103_19189 = state_19098__$1;
(statearr_19103_19189[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (27))){
var inst_19039 = (state_19098[(9)]);
var inst_19041 = (state_19098[(10)]);
var inst_18970 = (state_19098[(11)]);
var inst_19046 = (state_19098[(12)]);
var inst_19046__$1 = cljs.core._nth.call(null,inst_19039,inst_19041);
var inst_19047 = cljs.core.async.put_BANG_.call(null,inst_19046__$1,inst_18970,done);
var state_19098__$1 = (function (){var statearr_19104 = state_19098;
(statearr_19104[(12)] = inst_19046__$1);

return statearr_19104;
})();
if(cljs.core.truth_(inst_19047)){
var statearr_19105_19190 = state_19098__$1;
(statearr_19105_19190[(1)] = (30));

} else {
var statearr_19106_19191 = state_19098__$1;
(statearr_19106_19191[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (1))){
var state_19098__$1 = state_19098;
var statearr_19107_19192 = state_19098__$1;
(statearr_19107_19192[(2)] = null);

(statearr_19107_19192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (24))){
var inst_18999 = (state_19098[(7)]);
var inst_19016 = (state_19098[(2)]);
var inst_19017 = cljs.core.next.call(null,inst_18999);
var inst_18979 = inst_19017;
var inst_18980 = null;
var inst_18981 = (0);
var inst_18982 = (0);
var state_19098__$1 = (function (){var statearr_19108 = state_19098;
(statearr_19108[(13)] = inst_18981);

(statearr_19108[(14)] = inst_19016);

(statearr_19108[(15)] = inst_18982);

(statearr_19108[(16)] = inst_18980);

(statearr_19108[(17)] = inst_18979);

return statearr_19108;
})();
var statearr_19109_19193 = state_19098__$1;
(statearr_19109_19193[(2)] = null);

(statearr_19109_19193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (39))){
var state_19098__$1 = state_19098;
var statearr_19113_19194 = state_19098__$1;
(statearr_19113_19194[(2)] = null);

(statearr_19113_19194[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (4))){
var inst_18970 = (state_19098[(11)]);
var inst_18970__$1 = (state_19098[(2)]);
var inst_18971 = (inst_18970__$1 == null);
var state_19098__$1 = (function (){var statearr_19114 = state_19098;
(statearr_19114[(11)] = inst_18970__$1);

return statearr_19114;
})();
if(cljs.core.truth_(inst_18971)){
var statearr_19115_19195 = state_19098__$1;
(statearr_19115_19195[(1)] = (5));

} else {
var statearr_19116_19196 = state_19098__$1;
(statearr_19116_19196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (15))){
var inst_18981 = (state_19098[(13)]);
var inst_18982 = (state_19098[(15)]);
var inst_18980 = (state_19098[(16)]);
var inst_18979 = (state_19098[(17)]);
var inst_18995 = (state_19098[(2)]);
var inst_18996 = (inst_18982 + (1));
var tmp19110 = inst_18981;
var tmp19111 = inst_18980;
var tmp19112 = inst_18979;
var inst_18979__$1 = tmp19112;
var inst_18980__$1 = tmp19111;
var inst_18981__$1 = tmp19110;
var inst_18982__$1 = inst_18996;
var state_19098__$1 = (function (){var statearr_19117 = state_19098;
(statearr_19117[(13)] = inst_18981__$1);

(statearr_19117[(18)] = inst_18995);

(statearr_19117[(15)] = inst_18982__$1);

(statearr_19117[(16)] = inst_18980__$1);

(statearr_19117[(17)] = inst_18979__$1);

return statearr_19117;
})();
var statearr_19118_19197 = state_19098__$1;
(statearr_19118_19197[(2)] = null);

(statearr_19118_19197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (21))){
var inst_19020 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19122_19198 = state_19098__$1;
(statearr_19122_19198[(2)] = inst_19020);

(statearr_19122_19198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (31))){
var inst_19046 = (state_19098[(12)]);
var inst_19050 = done.call(null,null);
var inst_19051 = cljs.core.async.untap_STAR_.call(null,m,inst_19046);
var state_19098__$1 = (function (){var statearr_19123 = state_19098;
(statearr_19123[(19)] = inst_19050);

return statearr_19123;
})();
var statearr_19124_19199 = state_19098__$1;
(statearr_19124_19199[(2)] = inst_19051);

(statearr_19124_19199[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (32))){
var inst_19039 = (state_19098[(9)]);
var inst_19038 = (state_19098[(20)]);
var inst_19041 = (state_19098[(10)]);
var inst_19040 = (state_19098[(21)]);
var inst_19053 = (state_19098[(2)]);
var inst_19054 = (inst_19041 + (1));
var tmp19119 = inst_19039;
var tmp19120 = inst_19038;
var tmp19121 = inst_19040;
var inst_19038__$1 = tmp19120;
var inst_19039__$1 = tmp19119;
var inst_19040__$1 = tmp19121;
var inst_19041__$1 = inst_19054;
var state_19098__$1 = (function (){var statearr_19125 = state_19098;
(statearr_19125[(9)] = inst_19039__$1);

(statearr_19125[(22)] = inst_19053);

(statearr_19125[(20)] = inst_19038__$1);

(statearr_19125[(10)] = inst_19041__$1);

(statearr_19125[(21)] = inst_19040__$1);

return statearr_19125;
})();
var statearr_19126_19200 = state_19098__$1;
(statearr_19126_19200[(2)] = null);

(statearr_19126_19200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (40))){
var inst_19066 = (state_19098[(23)]);
var inst_19070 = done.call(null,null);
var inst_19071 = cljs.core.async.untap_STAR_.call(null,m,inst_19066);
var state_19098__$1 = (function (){var statearr_19127 = state_19098;
(statearr_19127[(24)] = inst_19070);

return statearr_19127;
})();
var statearr_19128_19201 = state_19098__$1;
(statearr_19128_19201[(2)] = inst_19071);

(statearr_19128_19201[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (33))){
var inst_19057 = (state_19098[(25)]);
var inst_19059 = cljs.core.chunked_seq_QMARK_.call(null,inst_19057);
var state_19098__$1 = state_19098;
if(inst_19059){
var statearr_19129_19202 = state_19098__$1;
(statearr_19129_19202[(1)] = (36));

} else {
var statearr_19130_19203 = state_19098__$1;
(statearr_19130_19203[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (13))){
var inst_18989 = (state_19098[(26)]);
var inst_18992 = cljs.core.async.close_BANG_.call(null,inst_18989);
var state_19098__$1 = state_19098;
var statearr_19131_19204 = state_19098__$1;
(statearr_19131_19204[(2)] = inst_18992);

(statearr_19131_19204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (22))){
var inst_19010 = (state_19098[(8)]);
var inst_19013 = cljs.core.async.close_BANG_.call(null,inst_19010);
var state_19098__$1 = state_19098;
var statearr_19132_19205 = state_19098__$1;
(statearr_19132_19205[(2)] = inst_19013);

(statearr_19132_19205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (36))){
var inst_19057 = (state_19098[(25)]);
var inst_19061 = cljs.core.chunk_first.call(null,inst_19057);
var inst_19062 = cljs.core.chunk_rest.call(null,inst_19057);
var inst_19063 = cljs.core.count.call(null,inst_19061);
var inst_19038 = inst_19062;
var inst_19039 = inst_19061;
var inst_19040 = inst_19063;
var inst_19041 = (0);
var state_19098__$1 = (function (){var statearr_19133 = state_19098;
(statearr_19133[(9)] = inst_19039);

(statearr_19133[(20)] = inst_19038);

(statearr_19133[(10)] = inst_19041);

(statearr_19133[(21)] = inst_19040);

return statearr_19133;
})();
var statearr_19134_19206 = state_19098__$1;
(statearr_19134_19206[(2)] = null);

(statearr_19134_19206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (41))){
var inst_19057 = (state_19098[(25)]);
var inst_19073 = (state_19098[(2)]);
var inst_19074 = cljs.core.next.call(null,inst_19057);
var inst_19038 = inst_19074;
var inst_19039 = null;
var inst_19040 = (0);
var inst_19041 = (0);
var state_19098__$1 = (function (){var statearr_19135 = state_19098;
(statearr_19135[(9)] = inst_19039);

(statearr_19135[(20)] = inst_19038);

(statearr_19135[(10)] = inst_19041);

(statearr_19135[(27)] = inst_19073);

(statearr_19135[(21)] = inst_19040);

return statearr_19135;
})();
var statearr_19136_19207 = state_19098__$1;
(statearr_19136_19207[(2)] = null);

(statearr_19136_19207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (43))){
var state_19098__$1 = state_19098;
var statearr_19137_19208 = state_19098__$1;
(statearr_19137_19208[(2)] = null);

(statearr_19137_19208[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (29))){
var inst_19082 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19138_19209 = state_19098__$1;
(statearr_19138_19209[(2)] = inst_19082);

(statearr_19138_19209[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (44))){
var inst_19091 = (state_19098[(2)]);
var state_19098__$1 = (function (){var statearr_19139 = state_19098;
(statearr_19139[(28)] = inst_19091);

return statearr_19139;
})();
var statearr_19140_19210 = state_19098__$1;
(statearr_19140_19210[(2)] = null);

(statearr_19140_19210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (6))){
var inst_19030 = (state_19098[(29)]);
var inst_19029 = cljs.core.deref.call(null,cs);
var inst_19030__$1 = cljs.core.keys.call(null,inst_19029);
var inst_19031 = cljs.core.count.call(null,inst_19030__$1);
var inst_19032 = cljs.core.reset_BANG_.call(null,dctr,inst_19031);
var inst_19037 = cljs.core.seq.call(null,inst_19030__$1);
var inst_19038 = inst_19037;
var inst_19039 = null;
var inst_19040 = (0);
var inst_19041 = (0);
var state_19098__$1 = (function (){var statearr_19141 = state_19098;
(statearr_19141[(9)] = inst_19039);

(statearr_19141[(20)] = inst_19038);

(statearr_19141[(10)] = inst_19041);

(statearr_19141[(30)] = inst_19032);

(statearr_19141[(21)] = inst_19040);

(statearr_19141[(29)] = inst_19030__$1);

return statearr_19141;
})();
var statearr_19142_19211 = state_19098__$1;
(statearr_19142_19211[(2)] = null);

(statearr_19142_19211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (28))){
var inst_19057 = (state_19098[(25)]);
var inst_19038 = (state_19098[(20)]);
var inst_19057__$1 = cljs.core.seq.call(null,inst_19038);
var state_19098__$1 = (function (){var statearr_19143 = state_19098;
(statearr_19143[(25)] = inst_19057__$1);

return statearr_19143;
})();
if(inst_19057__$1){
var statearr_19144_19212 = state_19098__$1;
(statearr_19144_19212[(1)] = (33));

} else {
var statearr_19145_19213 = state_19098__$1;
(statearr_19145_19213[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (25))){
var inst_19041 = (state_19098[(10)]);
var inst_19040 = (state_19098[(21)]);
var inst_19043 = (inst_19041 < inst_19040);
var inst_19044 = inst_19043;
var state_19098__$1 = state_19098;
if(cljs.core.truth_(inst_19044)){
var statearr_19146_19214 = state_19098__$1;
(statearr_19146_19214[(1)] = (27));

} else {
var statearr_19147_19215 = state_19098__$1;
(statearr_19147_19215[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (34))){
var state_19098__$1 = state_19098;
var statearr_19148_19216 = state_19098__$1;
(statearr_19148_19216[(2)] = null);

(statearr_19148_19216[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (17))){
var state_19098__$1 = state_19098;
var statearr_19149_19217 = state_19098__$1;
(statearr_19149_19217[(2)] = null);

(statearr_19149_19217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (3))){
var inst_19096 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19098__$1,inst_19096);
} else {
if((state_val_19099 === (12))){
var inst_19025 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19150_19218 = state_19098__$1;
(statearr_19150_19218[(2)] = inst_19025);

(statearr_19150_19218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (2))){
var state_19098__$1 = state_19098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19098__$1,(4),ch);
} else {
if((state_val_19099 === (23))){
var state_19098__$1 = state_19098;
var statearr_19151_19219 = state_19098__$1;
(statearr_19151_19219[(2)] = null);

(statearr_19151_19219[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (35))){
var inst_19080 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19152_19220 = state_19098__$1;
(statearr_19152_19220[(2)] = inst_19080);

(statearr_19152_19220[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (19))){
var inst_18999 = (state_19098[(7)]);
var inst_19003 = cljs.core.chunk_first.call(null,inst_18999);
var inst_19004 = cljs.core.chunk_rest.call(null,inst_18999);
var inst_19005 = cljs.core.count.call(null,inst_19003);
var inst_18979 = inst_19004;
var inst_18980 = inst_19003;
var inst_18981 = inst_19005;
var inst_18982 = (0);
var state_19098__$1 = (function (){var statearr_19153 = state_19098;
(statearr_19153[(13)] = inst_18981);

(statearr_19153[(15)] = inst_18982);

(statearr_19153[(16)] = inst_18980);

(statearr_19153[(17)] = inst_18979);

return statearr_19153;
})();
var statearr_19154_19221 = state_19098__$1;
(statearr_19154_19221[(2)] = null);

(statearr_19154_19221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (11))){
var inst_18999 = (state_19098[(7)]);
var inst_18979 = (state_19098[(17)]);
var inst_18999__$1 = cljs.core.seq.call(null,inst_18979);
var state_19098__$1 = (function (){var statearr_19155 = state_19098;
(statearr_19155[(7)] = inst_18999__$1);

return statearr_19155;
})();
if(inst_18999__$1){
var statearr_19156_19222 = state_19098__$1;
(statearr_19156_19222[(1)] = (16));

} else {
var statearr_19157_19223 = state_19098__$1;
(statearr_19157_19223[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (9))){
var inst_19027 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19158_19224 = state_19098__$1;
(statearr_19158_19224[(2)] = inst_19027);

(statearr_19158_19224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (5))){
var inst_18977 = cljs.core.deref.call(null,cs);
var inst_18978 = cljs.core.seq.call(null,inst_18977);
var inst_18979 = inst_18978;
var inst_18980 = null;
var inst_18981 = (0);
var inst_18982 = (0);
var state_19098__$1 = (function (){var statearr_19159 = state_19098;
(statearr_19159[(13)] = inst_18981);

(statearr_19159[(15)] = inst_18982);

(statearr_19159[(16)] = inst_18980);

(statearr_19159[(17)] = inst_18979);

return statearr_19159;
})();
var statearr_19160_19225 = state_19098__$1;
(statearr_19160_19225[(2)] = null);

(statearr_19160_19225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (14))){
var state_19098__$1 = state_19098;
var statearr_19161_19226 = state_19098__$1;
(statearr_19161_19226[(2)] = null);

(statearr_19161_19226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (45))){
var inst_19088 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19162_19227 = state_19098__$1;
(statearr_19162_19227[(2)] = inst_19088);

(statearr_19162_19227[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (26))){
var inst_19030 = (state_19098[(29)]);
var inst_19084 = (state_19098[(2)]);
var inst_19085 = cljs.core.seq.call(null,inst_19030);
var state_19098__$1 = (function (){var statearr_19163 = state_19098;
(statearr_19163[(31)] = inst_19084);

return statearr_19163;
})();
if(inst_19085){
var statearr_19164_19228 = state_19098__$1;
(statearr_19164_19228[(1)] = (42));

} else {
var statearr_19165_19229 = state_19098__$1;
(statearr_19165_19229[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (16))){
var inst_18999 = (state_19098[(7)]);
var inst_19001 = cljs.core.chunked_seq_QMARK_.call(null,inst_18999);
var state_19098__$1 = state_19098;
if(inst_19001){
var statearr_19166_19230 = state_19098__$1;
(statearr_19166_19230[(1)] = (19));

} else {
var statearr_19167_19231 = state_19098__$1;
(statearr_19167_19231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (38))){
var inst_19077 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19168_19232 = state_19098__$1;
(statearr_19168_19232[(2)] = inst_19077);

(statearr_19168_19232[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (30))){
var state_19098__$1 = state_19098;
var statearr_19169_19233 = state_19098__$1;
(statearr_19169_19233[(2)] = null);

(statearr_19169_19233[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (10))){
var inst_18982 = (state_19098[(15)]);
var inst_18980 = (state_19098[(16)]);
var inst_18988 = cljs.core._nth.call(null,inst_18980,inst_18982);
var inst_18989 = cljs.core.nth.call(null,inst_18988,(0),null);
var inst_18990 = cljs.core.nth.call(null,inst_18988,(1),null);
var state_19098__$1 = (function (){var statearr_19170 = state_19098;
(statearr_19170[(26)] = inst_18989);

return statearr_19170;
})();
if(cljs.core.truth_(inst_18990)){
var statearr_19171_19234 = state_19098__$1;
(statearr_19171_19234[(1)] = (13));

} else {
var statearr_19172_19235 = state_19098__$1;
(statearr_19172_19235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (18))){
var inst_19023 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19173_19236 = state_19098__$1;
(statearr_19173_19236[(2)] = inst_19023);

(statearr_19173_19236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (42))){
var state_19098__$1 = state_19098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19098__$1,(45),dchan);
} else {
if((state_val_19099 === (37))){
var inst_19057 = (state_19098[(25)]);
var inst_18970 = (state_19098[(11)]);
var inst_19066 = (state_19098[(23)]);
var inst_19066__$1 = cljs.core.first.call(null,inst_19057);
var inst_19067 = cljs.core.async.put_BANG_.call(null,inst_19066__$1,inst_18970,done);
var state_19098__$1 = (function (){var statearr_19174 = state_19098;
(statearr_19174[(23)] = inst_19066__$1);

return statearr_19174;
})();
if(cljs.core.truth_(inst_19067)){
var statearr_19175_19237 = state_19098__$1;
(statearr_19175_19237[(1)] = (39));

} else {
var statearr_19176_19238 = state_19098__$1;
(statearr_19176_19238[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (8))){
var inst_18981 = (state_19098[(13)]);
var inst_18982 = (state_19098[(15)]);
var inst_18984 = (inst_18982 < inst_18981);
var inst_18985 = inst_18984;
var state_19098__$1 = state_19098;
if(cljs.core.truth_(inst_18985)){
var statearr_19177_19239 = state_19098__$1;
(statearr_19177_19239[(1)] = (10));

} else {
var statearr_19178_19240 = state_19098__$1;
(statearr_19178_19240[(1)] = (11));

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
});})(c__17879__auto___19186,cs,m,dchan,dctr,done))
;
return ((function (switch__17767__auto__,c__17879__auto___19186,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17768__auto__ = null;
var cljs$core$async$mult_$_state_machine__17768__auto____0 = (function (){
var statearr_19182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19182[(0)] = cljs$core$async$mult_$_state_machine__17768__auto__);

(statearr_19182[(1)] = (1));

return statearr_19182;
});
var cljs$core$async$mult_$_state_machine__17768__auto____1 = (function (state_19098){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_19098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e19183){if((e19183 instanceof Object)){
var ex__17771__auto__ = e19183;
var statearr_19184_19241 = state_19098;
(statearr_19184_19241[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19242 = state_19098;
state_19098 = G__19242;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17768__auto__ = function(state_19098){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17768__auto____1.call(this,state_19098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17768__auto____0;
cljs$core$async$mult_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17768__auto____1;
return cljs$core$async$mult_$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___19186,cs,m,dchan,dctr,done))
})();
var state__17881__auto__ = (function (){var statearr_19185 = f__17880__auto__.call(null);
(statearr_19185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___19186);

return statearr_19185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___19186,cs,m,dchan,dctr,done))
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
var args19243 = [];
var len__7291__auto___19246 = arguments.length;
var i__7292__auto___19247 = (0);
while(true){
if((i__7292__auto___19247 < len__7291__auto___19246)){
args19243.push((arguments[i__7292__auto___19247]));

var G__19248 = (i__7292__auto___19247 + (1));
i__7292__auto___19247 = G__19248;
continue;
} else {
}
break;
}

var G__19245 = args19243.length;
switch (G__19245) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19243.length)].join('')));

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
var len__7291__auto___19260 = arguments.length;
var i__7292__auto___19261 = (0);
while(true){
if((i__7292__auto___19261 < len__7291__auto___19260)){
args__7298__auto__.push((arguments[i__7292__auto___19261]));

var G__19262 = (i__7292__auto___19261 + (1));
i__7292__auto___19261 = G__19262;
continue;
} else {
}
break;
}

var argseq__7299__auto__ = ((((3) < args__7298__auto__.length))?(new cljs.core.IndexedSeq(args__7298__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7299__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19254){
var map__19255 = p__19254;
var map__19255__$1 = ((((!((map__19255 == null)))?((((map__19255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19255):map__19255);
var opts = map__19255__$1;
var statearr_19257_19263 = state;
(statearr_19257_19263[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__19255,map__19255__$1,opts){
return (function (val){
var statearr_19258_19264 = state;
(statearr_19258_19264[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19255,map__19255__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_19259_19265 = state;
(statearr_19259_19265[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19250){
var G__19251 = cljs.core.first.call(null,seq19250);
var seq19250__$1 = cljs.core.next.call(null,seq19250);
var G__19252 = cljs.core.first.call(null,seq19250__$1);
var seq19250__$2 = cljs.core.next.call(null,seq19250__$1);
var G__19253 = cljs.core.first.call(null,seq19250__$2);
var seq19250__$3 = cljs.core.next.call(null,seq19250__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19251,G__19252,G__19253,seq19250__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19429 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19430){
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
this.meta19430 = meta19430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19431,meta19430__$1){
var self__ = this;
var _19431__$1 = this;
return (new cljs.core.async.t_cljs$core$async19429(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19430__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19431){
var self__ = this;
var _19431__$1 = this;
return self__.meta19430;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19429.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19430","meta19430",-1895428948,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19429";

cljs.core.async.t_cljs$core$async19429.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async19429");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19429 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19429(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19430){
return (new cljs.core.async.t_cljs$core$async19429(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19430));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19429(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17879__auto___19592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___19592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___19592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19529){
var state_val_19530 = (state_19529[(1)]);
if((state_val_19530 === (7))){
var inst_19447 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
var statearr_19531_19593 = state_19529__$1;
(statearr_19531_19593[(2)] = inst_19447);

(statearr_19531_19593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (20))){
var inst_19459 = (state_19529[(7)]);
var state_19529__$1 = state_19529;
var statearr_19532_19594 = state_19529__$1;
(statearr_19532_19594[(2)] = inst_19459);

(statearr_19532_19594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (27))){
var state_19529__$1 = state_19529;
var statearr_19533_19595 = state_19529__$1;
(statearr_19533_19595[(2)] = null);

(statearr_19533_19595[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (1))){
var inst_19435 = (state_19529[(8)]);
var inst_19435__$1 = calc_state.call(null);
var inst_19437 = (inst_19435__$1 == null);
var inst_19438 = cljs.core.not.call(null,inst_19437);
var state_19529__$1 = (function (){var statearr_19534 = state_19529;
(statearr_19534[(8)] = inst_19435__$1);

return statearr_19534;
})();
if(inst_19438){
var statearr_19535_19596 = state_19529__$1;
(statearr_19535_19596[(1)] = (2));

} else {
var statearr_19536_19597 = state_19529__$1;
(statearr_19536_19597[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (24))){
var inst_19489 = (state_19529[(9)]);
var inst_19482 = (state_19529[(10)]);
var inst_19503 = (state_19529[(11)]);
var inst_19503__$1 = inst_19482.call(null,inst_19489);
var state_19529__$1 = (function (){var statearr_19537 = state_19529;
(statearr_19537[(11)] = inst_19503__$1);

return statearr_19537;
})();
if(cljs.core.truth_(inst_19503__$1)){
var statearr_19538_19598 = state_19529__$1;
(statearr_19538_19598[(1)] = (29));

} else {
var statearr_19539_19599 = state_19529__$1;
(statearr_19539_19599[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (4))){
var inst_19450 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
if(cljs.core.truth_(inst_19450)){
var statearr_19540_19600 = state_19529__$1;
(statearr_19540_19600[(1)] = (8));

} else {
var statearr_19541_19601 = state_19529__$1;
(statearr_19541_19601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (15))){
var inst_19476 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
if(cljs.core.truth_(inst_19476)){
var statearr_19542_19602 = state_19529__$1;
(statearr_19542_19602[(1)] = (19));

} else {
var statearr_19543_19603 = state_19529__$1;
(statearr_19543_19603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (21))){
var inst_19481 = (state_19529[(12)]);
var inst_19481__$1 = (state_19529[(2)]);
var inst_19482 = cljs.core.get.call(null,inst_19481__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19483 = cljs.core.get.call(null,inst_19481__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19484 = cljs.core.get.call(null,inst_19481__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19529__$1 = (function (){var statearr_19544 = state_19529;
(statearr_19544[(12)] = inst_19481__$1);

(statearr_19544[(10)] = inst_19482);

(statearr_19544[(13)] = inst_19483);

return statearr_19544;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19529__$1,(22),inst_19484);
} else {
if((state_val_19530 === (31))){
var inst_19511 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
if(cljs.core.truth_(inst_19511)){
var statearr_19545_19604 = state_19529__$1;
(statearr_19545_19604[(1)] = (32));

} else {
var statearr_19546_19605 = state_19529__$1;
(statearr_19546_19605[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (32))){
var inst_19488 = (state_19529[(14)]);
var state_19529__$1 = state_19529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19529__$1,(35),out,inst_19488);
} else {
if((state_val_19530 === (33))){
var inst_19481 = (state_19529[(12)]);
var inst_19459 = inst_19481;
var state_19529__$1 = (function (){var statearr_19547 = state_19529;
(statearr_19547[(7)] = inst_19459);

return statearr_19547;
})();
var statearr_19548_19606 = state_19529__$1;
(statearr_19548_19606[(2)] = null);

(statearr_19548_19606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (13))){
var inst_19459 = (state_19529[(7)]);
var inst_19466 = inst_19459.cljs$lang$protocol_mask$partition0$;
var inst_19467 = (inst_19466 & (64));
var inst_19468 = inst_19459.cljs$core$ISeq$;
var inst_19469 = (inst_19467) || (inst_19468);
var state_19529__$1 = state_19529;
if(cljs.core.truth_(inst_19469)){
var statearr_19549_19607 = state_19529__$1;
(statearr_19549_19607[(1)] = (16));

} else {
var statearr_19550_19608 = state_19529__$1;
(statearr_19550_19608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (22))){
var inst_19489 = (state_19529[(9)]);
var inst_19488 = (state_19529[(14)]);
var inst_19487 = (state_19529[(2)]);
var inst_19488__$1 = cljs.core.nth.call(null,inst_19487,(0),null);
var inst_19489__$1 = cljs.core.nth.call(null,inst_19487,(1),null);
var inst_19490 = (inst_19488__$1 == null);
var inst_19491 = cljs.core._EQ_.call(null,inst_19489__$1,change);
var inst_19492 = (inst_19490) || (inst_19491);
var state_19529__$1 = (function (){var statearr_19551 = state_19529;
(statearr_19551[(9)] = inst_19489__$1);

(statearr_19551[(14)] = inst_19488__$1);

return statearr_19551;
})();
if(cljs.core.truth_(inst_19492)){
var statearr_19552_19609 = state_19529__$1;
(statearr_19552_19609[(1)] = (23));

} else {
var statearr_19553_19610 = state_19529__$1;
(statearr_19553_19610[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (36))){
var inst_19481 = (state_19529[(12)]);
var inst_19459 = inst_19481;
var state_19529__$1 = (function (){var statearr_19554 = state_19529;
(statearr_19554[(7)] = inst_19459);

return statearr_19554;
})();
var statearr_19555_19611 = state_19529__$1;
(statearr_19555_19611[(2)] = null);

(statearr_19555_19611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (29))){
var inst_19503 = (state_19529[(11)]);
var state_19529__$1 = state_19529;
var statearr_19556_19612 = state_19529__$1;
(statearr_19556_19612[(2)] = inst_19503);

(statearr_19556_19612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (6))){
var state_19529__$1 = state_19529;
var statearr_19557_19613 = state_19529__$1;
(statearr_19557_19613[(2)] = false);

(statearr_19557_19613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (28))){
var inst_19499 = (state_19529[(2)]);
var inst_19500 = calc_state.call(null);
var inst_19459 = inst_19500;
var state_19529__$1 = (function (){var statearr_19558 = state_19529;
(statearr_19558[(7)] = inst_19459);

(statearr_19558[(15)] = inst_19499);

return statearr_19558;
})();
var statearr_19559_19614 = state_19529__$1;
(statearr_19559_19614[(2)] = null);

(statearr_19559_19614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (25))){
var inst_19525 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
var statearr_19560_19615 = state_19529__$1;
(statearr_19560_19615[(2)] = inst_19525);

(statearr_19560_19615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (34))){
var inst_19523 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
var statearr_19561_19616 = state_19529__$1;
(statearr_19561_19616[(2)] = inst_19523);

(statearr_19561_19616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (17))){
var state_19529__$1 = state_19529;
var statearr_19562_19617 = state_19529__$1;
(statearr_19562_19617[(2)] = false);

(statearr_19562_19617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (3))){
var state_19529__$1 = state_19529;
var statearr_19563_19618 = state_19529__$1;
(statearr_19563_19618[(2)] = false);

(statearr_19563_19618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (12))){
var inst_19527 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19529__$1,inst_19527);
} else {
if((state_val_19530 === (2))){
var inst_19435 = (state_19529[(8)]);
var inst_19440 = inst_19435.cljs$lang$protocol_mask$partition0$;
var inst_19441 = (inst_19440 & (64));
var inst_19442 = inst_19435.cljs$core$ISeq$;
var inst_19443 = (inst_19441) || (inst_19442);
var state_19529__$1 = state_19529;
if(cljs.core.truth_(inst_19443)){
var statearr_19564_19619 = state_19529__$1;
(statearr_19564_19619[(1)] = (5));

} else {
var statearr_19565_19620 = state_19529__$1;
(statearr_19565_19620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (23))){
var inst_19488 = (state_19529[(14)]);
var inst_19494 = (inst_19488 == null);
var state_19529__$1 = state_19529;
if(cljs.core.truth_(inst_19494)){
var statearr_19566_19621 = state_19529__$1;
(statearr_19566_19621[(1)] = (26));

} else {
var statearr_19567_19622 = state_19529__$1;
(statearr_19567_19622[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (35))){
var inst_19514 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
if(cljs.core.truth_(inst_19514)){
var statearr_19568_19623 = state_19529__$1;
(statearr_19568_19623[(1)] = (36));

} else {
var statearr_19569_19624 = state_19529__$1;
(statearr_19569_19624[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (19))){
var inst_19459 = (state_19529[(7)]);
var inst_19478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19459);
var state_19529__$1 = state_19529;
var statearr_19570_19625 = state_19529__$1;
(statearr_19570_19625[(2)] = inst_19478);

(statearr_19570_19625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (11))){
var inst_19459 = (state_19529[(7)]);
var inst_19463 = (inst_19459 == null);
var inst_19464 = cljs.core.not.call(null,inst_19463);
var state_19529__$1 = state_19529;
if(inst_19464){
var statearr_19571_19626 = state_19529__$1;
(statearr_19571_19626[(1)] = (13));

} else {
var statearr_19572_19627 = state_19529__$1;
(statearr_19572_19627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (9))){
var inst_19435 = (state_19529[(8)]);
var state_19529__$1 = state_19529;
var statearr_19573_19628 = state_19529__$1;
(statearr_19573_19628[(2)] = inst_19435);

(statearr_19573_19628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (5))){
var state_19529__$1 = state_19529;
var statearr_19574_19629 = state_19529__$1;
(statearr_19574_19629[(2)] = true);

(statearr_19574_19629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (14))){
var state_19529__$1 = state_19529;
var statearr_19575_19630 = state_19529__$1;
(statearr_19575_19630[(2)] = false);

(statearr_19575_19630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (26))){
var inst_19489 = (state_19529[(9)]);
var inst_19496 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19489);
var state_19529__$1 = state_19529;
var statearr_19576_19631 = state_19529__$1;
(statearr_19576_19631[(2)] = inst_19496);

(statearr_19576_19631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (16))){
var state_19529__$1 = state_19529;
var statearr_19577_19632 = state_19529__$1;
(statearr_19577_19632[(2)] = true);

(statearr_19577_19632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (38))){
var inst_19519 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
var statearr_19578_19633 = state_19529__$1;
(statearr_19578_19633[(2)] = inst_19519);

(statearr_19578_19633[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (30))){
var inst_19489 = (state_19529[(9)]);
var inst_19482 = (state_19529[(10)]);
var inst_19483 = (state_19529[(13)]);
var inst_19506 = cljs.core.empty_QMARK_.call(null,inst_19482);
var inst_19507 = inst_19483.call(null,inst_19489);
var inst_19508 = cljs.core.not.call(null,inst_19507);
var inst_19509 = (inst_19506) && (inst_19508);
var state_19529__$1 = state_19529;
var statearr_19579_19634 = state_19529__$1;
(statearr_19579_19634[(2)] = inst_19509);

(statearr_19579_19634[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (10))){
var inst_19435 = (state_19529[(8)]);
var inst_19455 = (state_19529[(2)]);
var inst_19456 = cljs.core.get.call(null,inst_19455,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19457 = cljs.core.get.call(null,inst_19455,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19458 = cljs.core.get.call(null,inst_19455,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19459 = inst_19435;
var state_19529__$1 = (function (){var statearr_19580 = state_19529;
(statearr_19580[(7)] = inst_19459);

(statearr_19580[(16)] = inst_19456);

(statearr_19580[(17)] = inst_19457);

(statearr_19580[(18)] = inst_19458);

return statearr_19580;
})();
var statearr_19581_19635 = state_19529__$1;
(statearr_19581_19635[(2)] = null);

(statearr_19581_19635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (18))){
var inst_19473 = (state_19529[(2)]);
var state_19529__$1 = state_19529;
var statearr_19582_19636 = state_19529__$1;
(statearr_19582_19636[(2)] = inst_19473);

(statearr_19582_19636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (37))){
var state_19529__$1 = state_19529;
var statearr_19583_19637 = state_19529__$1;
(statearr_19583_19637[(2)] = null);

(statearr_19583_19637[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19530 === (8))){
var inst_19435 = (state_19529[(8)]);
var inst_19452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19435);
var state_19529__$1 = state_19529;
var statearr_19584_19638 = state_19529__$1;
(statearr_19584_19638[(2)] = inst_19452);

(statearr_19584_19638[(1)] = (10));


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
});})(c__17879__auto___19592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17767__auto__,c__17879__auto___19592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17768__auto__ = null;
var cljs$core$async$mix_$_state_machine__17768__auto____0 = (function (){
var statearr_19588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19588[(0)] = cljs$core$async$mix_$_state_machine__17768__auto__);

(statearr_19588[(1)] = (1));

return statearr_19588;
});
var cljs$core$async$mix_$_state_machine__17768__auto____1 = (function (state_19529){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_19529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e19589){if((e19589 instanceof Object)){
var ex__17771__auto__ = e19589;
var statearr_19590_19639 = state_19529;
(statearr_19590_19639[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19640 = state_19529;
state_19529 = G__19640;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17768__auto__ = function(state_19529){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17768__auto____1.call(this,state_19529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17768__auto____0;
cljs$core$async$mix_$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17768__auto____1;
return cljs$core$async$mix_$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___19592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17881__auto__ = (function (){var statearr_19591 = f__17880__auto__.call(null);
(statearr_19591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___19592);

return statearr_19591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___19592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19641 = [];
var len__7291__auto___19644 = arguments.length;
var i__7292__auto___19645 = (0);
while(true){
if((i__7292__auto___19645 < len__7291__auto___19644)){
args19641.push((arguments[i__7292__auto___19645]));

var G__19646 = (i__7292__auto___19645 + (1));
i__7292__auto___19645 = G__19646;
continue;
} else {
}
break;
}

var G__19643 = args19641.length;
switch (G__19643) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19641.length)].join('')));

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
var args19649 = [];
var len__7291__auto___19774 = arguments.length;
var i__7292__auto___19775 = (0);
while(true){
if((i__7292__auto___19775 < len__7291__auto___19774)){
args19649.push((arguments[i__7292__auto___19775]));

var G__19776 = (i__7292__auto___19775 + (1));
i__7292__auto___19775 = G__19776;
continue;
} else {
}
break;
}

var G__19651 = args19649.length;
switch (G__19651) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19649.length)].join('')));

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
return (function (p1__19648_SHARP_){
if(cljs.core.truth_(p1__19648_SHARP_.call(null,topic))){
return p1__19648_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19648_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6216__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19652 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19653){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19653 = meta19653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19654,meta19653__$1){
var self__ = this;
var _19654__$1 = this;
return (new cljs.core.async.t_cljs$core$async19652(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19653__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19654){
var self__ = this;
var _19654__$1 = this;
return self__.meta19653;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19652.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19652.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19653","meta19653",-1132516374,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19652";

cljs.core.async.t_cljs$core$async19652.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async19652");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19652 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19652(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19653){
return (new cljs.core.async.t_cljs$core$async19652(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19653));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19652(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17879__auto___19778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___19778,mults,ensure_mult,p){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___19778,mults,ensure_mult,p){
return (function (state_19726){
var state_val_19727 = (state_19726[(1)]);
if((state_val_19727 === (7))){
var inst_19722 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19728_19779 = state_19726__$1;
(statearr_19728_19779[(2)] = inst_19722);

(statearr_19728_19779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (20))){
var state_19726__$1 = state_19726;
var statearr_19729_19780 = state_19726__$1;
(statearr_19729_19780[(2)] = null);

(statearr_19729_19780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (1))){
var state_19726__$1 = state_19726;
var statearr_19730_19781 = state_19726__$1;
(statearr_19730_19781[(2)] = null);

(statearr_19730_19781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (24))){
var inst_19705 = (state_19726[(7)]);
var inst_19714 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19705);
var state_19726__$1 = state_19726;
var statearr_19731_19782 = state_19726__$1;
(statearr_19731_19782[(2)] = inst_19714);

(statearr_19731_19782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (4))){
var inst_19657 = (state_19726[(8)]);
var inst_19657__$1 = (state_19726[(2)]);
var inst_19658 = (inst_19657__$1 == null);
var state_19726__$1 = (function (){var statearr_19732 = state_19726;
(statearr_19732[(8)] = inst_19657__$1);

return statearr_19732;
})();
if(cljs.core.truth_(inst_19658)){
var statearr_19733_19783 = state_19726__$1;
(statearr_19733_19783[(1)] = (5));

} else {
var statearr_19734_19784 = state_19726__$1;
(statearr_19734_19784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (15))){
var inst_19699 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19735_19785 = state_19726__$1;
(statearr_19735_19785[(2)] = inst_19699);

(statearr_19735_19785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (21))){
var inst_19719 = (state_19726[(2)]);
var state_19726__$1 = (function (){var statearr_19736 = state_19726;
(statearr_19736[(9)] = inst_19719);

return statearr_19736;
})();
var statearr_19737_19786 = state_19726__$1;
(statearr_19737_19786[(2)] = null);

(statearr_19737_19786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (13))){
var inst_19681 = (state_19726[(10)]);
var inst_19683 = cljs.core.chunked_seq_QMARK_.call(null,inst_19681);
var state_19726__$1 = state_19726;
if(inst_19683){
var statearr_19738_19787 = state_19726__$1;
(statearr_19738_19787[(1)] = (16));

} else {
var statearr_19739_19788 = state_19726__$1;
(statearr_19739_19788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (22))){
var inst_19711 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
if(cljs.core.truth_(inst_19711)){
var statearr_19740_19789 = state_19726__$1;
(statearr_19740_19789[(1)] = (23));

} else {
var statearr_19741_19790 = state_19726__$1;
(statearr_19741_19790[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (6))){
var inst_19705 = (state_19726[(7)]);
var inst_19657 = (state_19726[(8)]);
var inst_19707 = (state_19726[(11)]);
var inst_19705__$1 = topic_fn.call(null,inst_19657);
var inst_19706 = cljs.core.deref.call(null,mults);
var inst_19707__$1 = cljs.core.get.call(null,inst_19706,inst_19705__$1);
var state_19726__$1 = (function (){var statearr_19742 = state_19726;
(statearr_19742[(7)] = inst_19705__$1);

(statearr_19742[(11)] = inst_19707__$1);

return statearr_19742;
})();
if(cljs.core.truth_(inst_19707__$1)){
var statearr_19743_19791 = state_19726__$1;
(statearr_19743_19791[(1)] = (19));

} else {
var statearr_19744_19792 = state_19726__$1;
(statearr_19744_19792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (25))){
var inst_19716 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19745_19793 = state_19726__$1;
(statearr_19745_19793[(2)] = inst_19716);

(statearr_19745_19793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (17))){
var inst_19681 = (state_19726[(10)]);
var inst_19690 = cljs.core.first.call(null,inst_19681);
var inst_19691 = cljs.core.async.muxch_STAR_.call(null,inst_19690);
var inst_19692 = cljs.core.async.close_BANG_.call(null,inst_19691);
var inst_19693 = cljs.core.next.call(null,inst_19681);
var inst_19667 = inst_19693;
var inst_19668 = null;
var inst_19669 = (0);
var inst_19670 = (0);
var state_19726__$1 = (function (){var statearr_19746 = state_19726;
(statearr_19746[(12)] = inst_19668);

(statearr_19746[(13)] = inst_19692);

(statearr_19746[(14)] = inst_19667);

(statearr_19746[(15)] = inst_19670);

(statearr_19746[(16)] = inst_19669);

return statearr_19746;
})();
var statearr_19747_19794 = state_19726__$1;
(statearr_19747_19794[(2)] = null);

(statearr_19747_19794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (3))){
var inst_19724 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19726__$1,inst_19724);
} else {
if((state_val_19727 === (12))){
var inst_19701 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19748_19795 = state_19726__$1;
(statearr_19748_19795[(2)] = inst_19701);

(statearr_19748_19795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (2))){
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19726__$1,(4),ch);
} else {
if((state_val_19727 === (23))){
var state_19726__$1 = state_19726;
var statearr_19749_19796 = state_19726__$1;
(statearr_19749_19796[(2)] = null);

(statearr_19749_19796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (19))){
var inst_19657 = (state_19726[(8)]);
var inst_19707 = (state_19726[(11)]);
var inst_19709 = cljs.core.async.muxch_STAR_.call(null,inst_19707);
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19726__$1,(22),inst_19709,inst_19657);
} else {
if((state_val_19727 === (11))){
var inst_19667 = (state_19726[(14)]);
var inst_19681 = (state_19726[(10)]);
var inst_19681__$1 = cljs.core.seq.call(null,inst_19667);
var state_19726__$1 = (function (){var statearr_19750 = state_19726;
(statearr_19750[(10)] = inst_19681__$1);

return statearr_19750;
})();
if(inst_19681__$1){
var statearr_19751_19797 = state_19726__$1;
(statearr_19751_19797[(1)] = (13));

} else {
var statearr_19752_19798 = state_19726__$1;
(statearr_19752_19798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (9))){
var inst_19703 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19753_19799 = state_19726__$1;
(statearr_19753_19799[(2)] = inst_19703);

(statearr_19753_19799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (5))){
var inst_19664 = cljs.core.deref.call(null,mults);
var inst_19665 = cljs.core.vals.call(null,inst_19664);
var inst_19666 = cljs.core.seq.call(null,inst_19665);
var inst_19667 = inst_19666;
var inst_19668 = null;
var inst_19669 = (0);
var inst_19670 = (0);
var state_19726__$1 = (function (){var statearr_19754 = state_19726;
(statearr_19754[(12)] = inst_19668);

(statearr_19754[(14)] = inst_19667);

(statearr_19754[(15)] = inst_19670);

(statearr_19754[(16)] = inst_19669);

return statearr_19754;
})();
var statearr_19755_19800 = state_19726__$1;
(statearr_19755_19800[(2)] = null);

(statearr_19755_19800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (14))){
var state_19726__$1 = state_19726;
var statearr_19759_19801 = state_19726__$1;
(statearr_19759_19801[(2)] = null);

(statearr_19759_19801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (16))){
var inst_19681 = (state_19726[(10)]);
var inst_19685 = cljs.core.chunk_first.call(null,inst_19681);
var inst_19686 = cljs.core.chunk_rest.call(null,inst_19681);
var inst_19687 = cljs.core.count.call(null,inst_19685);
var inst_19667 = inst_19686;
var inst_19668 = inst_19685;
var inst_19669 = inst_19687;
var inst_19670 = (0);
var state_19726__$1 = (function (){var statearr_19760 = state_19726;
(statearr_19760[(12)] = inst_19668);

(statearr_19760[(14)] = inst_19667);

(statearr_19760[(15)] = inst_19670);

(statearr_19760[(16)] = inst_19669);

return statearr_19760;
})();
var statearr_19761_19802 = state_19726__$1;
(statearr_19761_19802[(2)] = null);

(statearr_19761_19802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (10))){
var inst_19668 = (state_19726[(12)]);
var inst_19667 = (state_19726[(14)]);
var inst_19670 = (state_19726[(15)]);
var inst_19669 = (state_19726[(16)]);
var inst_19675 = cljs.core._nth.call(null,inst_19668,inst_19670);
var inst_19676 = cljs.core.async.muxch_STAR_.call(null,inst_19675);
var inst_19677 = cljs.core.async.close_BANG_.call(null,inst_19676);
var inst_19678 = (inst_19670 + (1));
var tmp19756 = inst_19668;
var tmp19757 = inst_19667;
var tmp19758 = inst_19669;
var inst_19667__$1 = tmp19757;
var inst_19668__$1 = tmp19756;
var inst_19669__$1 = tmp19758;
var inst_19670__$1 = inst_19678;
var state_19726__$1 = (function (){var statearr_19762 = state_19726;
(statearr_19762[(12)] = inst_19668__$1);

(statearr_19762[(14)] = inst_19667__$1);

(statearr_19762[(15)] = inst_19670__$1);

(statearr_19762[(16)] = inst_19669__$1);

(statearr_19762[(17)] = inst_19677);

return statearr_19762;
})();
var statearr_19763_19803 = state_19726__$1;
(statearr_19763_19803[(2)] = null);

(statearr_19763_19803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (18))){
var inst_19696 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19764_19804 = state_19726__$1;
(statearr_19764_19804[(2)] = inst_19696);

(statearr_19764_19804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (8))){
var inst_19670 = (state_19726[(15)]);
var inst_19669 = (state_19726[(16)]);
var inst_19672 = (inst_19670 < inst_19669);
var inst_19673 = inst_19672;
var state_19726__$1 = state_19726;
if(cljs.core.truth_(inst_19673)){
var statearr_19765_19805 = state_19726__$1;
(statearr_19765_19805[(1)] = (10));

} else {
var statearr_19766_19806 = state_19726__$1;
(statearr_19766_19806[(1)] = (11));

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
});})(c__17879__auto___19778,mults,ensure_mult,p))
;
return ((function (switch__17767__auto__,c__17879__auto___19778,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_19770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19770[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_19770[(1)] = (1));

return statearr_19770;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_19726){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_19726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e19771){if((e19771 instanceof Object)){
var ex__17771__auto__ = e19771;
var statearr_19772_19807 = state_19726;
(statearr_19772_19807[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19808 = state_19726;
state_19726 = G__19808;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_19726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_19726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___19778,mults,ensure_mult,p))
})();
var state__17881__auto__ = (function (){var statearr_19773 = f__17880__auto__.call(null);
(statearr_19773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___19778);

return statearr_19773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___19778,mults,ensure_mult,p))
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
var args19809 = [];
var len__7291__auto___19812 = arguments.length;
var i__7292__auto___19813 = (0);
while(true){
if((i__7292__auto___19813 < len__7291__auto___19812)){
args19809.push((arguments[i__7292__auto___19813]));

var G__19814 = (i__7292__auto___19813 + (1));
i__7292__auto___19813 = G__19814;
continue;
} else {
}
break;
}

var G__19811 = args19809.length;
switch (G__19811) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19809.length)].join('')));

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
var args19816 = [];
var len__7291__auto___19819 = arguments.length;
var i__7292__auto___19820 = (0);
while(true){
if((i__7292__auto___19820 < len__7291__auto___19819)){
args19816.push((arguments[i__7292__auto___19820]));

var G__19821 = (i__7292__auto___19820 + (1));
i__7292__auto___19820 = G__19821;
continue;
} else {
}
break;
}

var G__19818 = args19816.length;
switch (G__19818) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19816.length)].join('')));

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
var args19823 = [];
var len__7291__auto___19894 = arguments.length;
var i__7292__auto___19895 = (0);
while(true){
if((i__7292__auto___19895 < len__7291__auto___19894)){
args19823.push((arguments[i__7292__auto___19895]));

var G__19896 = (i__7292__auto___19895 + (1));
i__7292__auto___19895 = G__19896;
continue;
} else {
}
break;
}

var G__19825 = args19823.length;
switch (G__19825) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19823.length)].join('')));

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
var c__17879__auto___19898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___19898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___19898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19864){
var state_val_19865 = (state_19864[(1)]);
if((state_val_19865 === (7))){
var state_19864__$1 = state_19864;
var statearr_19866_19899 = state_19864__$1;
(statearr_19866_19899[(2)] = null);

(statearr_19866_19899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (1))){
var state_19864__$1 = state_19864;
var statearr_19867_19900 = state_19864__$1;
(statearr_19867_19900[(2)] = null);

(statearr_19867_19900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (4))){
var inst_19828 = (state_19864[(7)]);
var inst_19830 = (inst_19828 < cnt);
var state_19864__$1 = state_19864;
if(cljs.core.truth_(inst_19830)){
var statearr_19868_19901 = state_19864__$1;
(statearr_19868_19901[(1)] = (6));

} else {
var statearr_19869_19902 = state_19864__$1;
(statearr_19869_19902[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (15))){
var inst_19860 = (state_19864[(2)]);
var state_19864__$1 = state_19864;
var statearr_19870_19903 = state_19864__$1;
(statearr_19870_19903[(2)] = inst_19860);

(statearr_19870_19903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (13))){
var inst_19853 = cljs.core.async.close_BANG_.call(null,out);
var state_19864__$1 = state_19864;
var statearr_19871_19904 = state_19864__$1;
(statearr_19871_19904[(2)] = inst_19853);

(statearr_19871_19904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (6))){
var state_19864__$1 = state_19864;
var statearr_19872_19905 = state_19864__$1;
(statearr_19872_19905[(2)] = null);

(statearr_19872_19905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (3))){
var inst_19862 = (state_19864[(2)]);
var state_19864__$1 = state_19864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19864__$1,inst_19862);
} else {
if((state_val_19865 === (12))){
var inst_19850 = (state_19864[(8)]);
var inst_19850__$1 = (state_19864[(2)]);
var inst_19851 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19850__$1);
var state_19864__$1 = (function (){var statearr_19873 = state_19864;
(statearr_19873[(8)] = inst_19850__$1);

return statearr_19873;
})();
if(cljs.core.truth_(inst_19851)){
var statearr_19874_19906 = state_19864__$1;
(statearr_19874_19906[(1)] = (13));

} else {
var statearr_19875_19907 = state_19864__$1;
(statearr_19875_19907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (2))){
var inst_19827 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19828 = (0);
var state_19864__$1 = (function (){var statearr_19876 = state_19864;
(statearr_19876[(7)] = inst_19828);

(statearr_19876[(9)] = inst_19827);

return statearr_19876;
})();
var statearr_19877_19908 = state_19864__$1;
(statearr_19877_19908[(2)] = null);

(statearr_19877_19908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (11))){
var inst_19828 = (state_19864[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19864,(10),Object,null,(9));
var inst_19837 = chs__$1.call(null,inst_19828);
var inst_19838 = done.call(null,inst_19828);
var inst_19839 = cljs.core.async.take_BANG_.call(null,inst_19837,inst_19838);
var state_19864__$1 = state_19864;
var statearr_19878_19909 = state_19864__$1;
(statearr_19878_19909[(2)] = inst_19839);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (9))){
var inst_19828 = (state_19864[(7)]);
var inst_19841 = (state_19864[(2)]);
var inst_19842 = (inst_19828 + (1));
var inst_19828__$1 = inst_19842;
var state_19864__$1 = (function (){var statearr_19879 = state_19864;
(statearr_19879[(7)] = inst_19828__$1);

(statearr_19879[(10)] = inst_19841);

return statearr_19879;
})();
var statearr_19880_19910 = state_19864__$1;
(statearr_19880_19910[(2)] = null);

(statearr_19880_19910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (5))){
var inst_19848 = (state_19864[(2)]);
var state_19864__$1 = (function (){var statearr_19881 = state_19864;
(statearr_19881[(11)] = inst_19848);

return statearr_19881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19864__$1,(12),dchan);
} else {
if((state_val_19865 === (14))){
var inst_19850 = (state_19864[(8)]);
var inst_19855 = cljs.core.apply.call(null,f,inst_19850);
var state_19864__$1 = state_19864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19864__$1,(16),out,inst_19855);
} else {
if((state_val_19865 === (16))){
var inst_19857 = (state_19864[(2)]);
var state_19864__$1 = (function (){var statearr_19882 = state_19864;
(statearr_19882[(12)] = inst_19857);

return statearr_19882;
})();
var statearr_19883_19911 = state_19864__$1;
(statearr_19883_19911[(2)] = null);

(statearr_19883_19911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (10))){
var inst_19832 = (state_19864[(2)]);
var inst_19833 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19864__$1 = (function (){var statearr_19884 = state_19864;
(statearr_19884[(13)] = inst_19832);

return statearr_19884;
})();
var statearr_19885_19912 = state_19864__$1;
(statearr_19885_19912[(2)] = inst_19833);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19865 === (8))){
var inst_19846 = (state_19864[(2)]);
var state_19864__$1 = state_19864;
var statearr_19886_19913 = state_19864__$1;
(statearr_19886_19913[(2)] = inst_19846);

(statearr_19886_19913[(1)] = (5));


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
});})(c__17879__auto___19898,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17767__auto__,c__17879__auto___19898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_19890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19890[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_19890[(1)] = (1));

return statearr_19890;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_19864){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_19864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e19891){if((e19891 instanceof Object)){
var ex__17771__auto__ = e19891;
var statearr_19892_19914 = state_19864;
(statearr_19892_19914[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19915 = state_19864;
state_19864 = G__19915;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_19864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_19864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___19898,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17881__auto__ = (function (){var statearr_19893 = f__17880__auto__.call(null);
(statearr_19893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___19898);

return statearr_19893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___19898,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19917 = [];
var len__7291__auto___19973 = arguments.length;
var i__7292__auto___19974 = (0);
while(true){
if((i__7292__auto___19974 < len__7291__auto___19973)){
args19917.push((arguments[i__7292__auto___19974]));

var G__19975 = (i__7292__auto___19974 + (1));
i__7292__auto___19974 = G__19975;
continue;
} else {
}
break;
}

var G__19919 = args19917.length;
switch (G__19919) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19917.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17879__auto___19977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___19977,out){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___19977,out){
return (function (state_19949){
var state_val_19950 = (state_19949[(1)]);
if((state_val_19950 === (7))){
var inst_19929 = (state_19949[(7)]);
var inst_19928 = (state_19949[(8)]);
var inst_19928__$1 = (state_19949[(2)]);
var inst_19929__$1 = cljs.core.nth.call(null,inst_19928__$1,(0),null);
var inst_19930 = cljs.core.nth.call(null,inst_19928__$1,(1),null);
var inst_19931 = (inst_19929__$1 == null);
var state_19949__$1 = (function (){var statearr_19951 = state_19949;
(statearr_19951[(9)] = inst_19930);

(statearr_19951[(7)] = inst_19929__$1);

(statearr_19951[(8)] = inst_19928__$1);

return statearr_19951;
})();
if(cljs.core.truth_(inst_19931)){
var statearr_19952_19978 = state_19949__$1;
(statearr_19952_19978[(1)] = (8));

} else {
var statearr_19953_19979 = state_19949__$1;
(statearr_19953_19979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19950 === (1))){
var inst_19920 = cljs.core.vec.call(null,chs);
var inst_19921 = inst_19920;
var state_19949__$1 = (function (){var statearr_19954 = state_19949;
(statearr_19954[(10)] = inst_19921);

return statearr_19954;
})();
var statearr_19955_19980 = state_19949__$1;
(statearr_19955_19980[(2)] = null);

(statearr_19955_19980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19950 === (4))){
var inst_19921 = (state_19949[(10)]);
var state_19949__$1 = state_19949;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19949__$1,(7),inst_19921);
} else {
if((state_val_19950 === (6))){
var inst_19945 = (state_19949[(2)]);
var state_19949__$1 = state_19949;
var statearr_19956_19981 = state_19949__$1;
(statearr_19956_19981[(2)] = inst_19945);

(statearr_19956_19981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19950 === (3))){
var inst_19947 = (state_19949[(2)]);
var state_19949__$1 = state_19949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19949__$1,inst_19947);
} else {
if((state_val_19950 === (2))){
var inst_19921 = (state_19949[(10)]);
var inst_19923 = cljs.core.count.call(null,inst_19921);
var inst_19924 = (inst_19923 > (0));
var state_19949__$1 = state_19949;
if(cljs.core.truth_(inst_19924)){
var statearr_19958_19982 = state_19949__$1;
(statearr_19958_19982[(1)] = (4));

} else {
var statearr_19959_19983 = state_19949__$1;
(statearr_19959_19983[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19950 === (11))){
var inst_19921 = (state_19949[(10)]);
var inst_19938 = (state_19949[(2)]);
var tmp19957 = inst_19921;
var inst_19921__$1 = tmp19957;
var state_19949__$1 = (function (){var statearr_19960 = state_19949;
(statearr_19960[(11)] = inst_19938);

(statearr_19960[(10)] = inst_19921__$1);

return statearr_19960;
})();
var statearr_19961_19984 = state_19949__$1;
(statearr_19961_19984[(2)] = null);

(statearr_19961_19984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19950 === (9))){
var inst_19929 = (state_19949[(7)]);
var state_19949__$1 = state_19949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19949__$1,(11),out,inst_19929);
} else {
if((state_val_19950 === (5))){
var inst_19943 = cljs.core.async.close_BANG_.call(null,out);
var state_19949__$1 = state_19949;
var statearr_19962_19985 = state_19949__$1;
(statearr_19962_19985[(2)] = inst_19943);

(statearr_19962_19985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19950 === (10))){
var inst_19941 = (state_19949[(2)]);
var state_19949__$1 = state_19949;
var statearr_19963_19986 = state_19949__$1;
(statearr_19963_19986[(2)] = inst_19941);

(statearr_19963_19986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19950 === (8))){
var inst_19921 = (state_19949[(10)]);
var inst_19930 = (state_19949[(9)]);
var inst_19929 = (state_19949[(7)]);
var inst_19928 = (state_19949[(8)]);
var inst_19933 = (function (){var cs = inst_19921;
var vec__19926 = inst_19928;
var v = inst_19929;
var c = inst_19930;
return ((function (cs,vec__19926,v,c,inst_19921,inst_19930,inst_19929,inst_19928,state_val_19950,c__17879__auto___19977,out){
return (function (p1__19916_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19916_SHARP_);
});
;})(cs,vec__19926,v,c,inst_19921,inst_19930,inst_19929,inst_19928,state_val_19950,c__17879__auto___19977,out))
})();
var inst_19934 = cljs.core.filterv.call(null,inst_19933,inst_19921);
var inst_19921__$1 = inst_19934;
var state_19949__$1 = (function (){var statearr_19964 = state_19949;
(statearr_19964[(10)] = inst_19921__$1);

return statearr_19964;
})();
var statearr_19965_19987 = state_19949__$1;
(statearr_19965_19987[(2)] = null);

(statearr_19965_19987[(1)] = (2));


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
});})(c__17879__auto___19977,out))
;
return ((function (switch__17767__auto__,c__17879__auto___19977,out){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_19969 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19969[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_19969[(1)] = (1));

return statearr_19969;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_19949){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_19949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e19970){if((e19970 instanceof Object)){
var ex__17771__auto__ = e19970;
var statearr_19971_19988 = state_19949;
(statearr_19971_19988[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19989 = state_19949;
state_19949 = G__19989;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_19949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_19949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___19977,out))
})();
var state__17881__auto__ = (function (){var statearr_19972 = f__17880__auto__.call(null);
(statearr_19972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___19977);

return statearr_19972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___19977,out))
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
var args19990 = [];
var len__7291__auto___20039 = arguments.length;
var i__7292__auto___20040 = (0);
while(true){
if((i__7292__auto___20040 < len__7291__auto___20039)){
args19990.push((arguments[i__7292__auto___20040]));

var G__20041 = (i__7292__auto___20040 + (1));
i__7292__auto___20040 = G__20041;
continue;
} else {
}
break;
}

var G__19992 = args19990.length;
switch (G__19992) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19990.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17879__auto___20043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___20043,out){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___20043,out){
return (function (state_20016){
var state_val_20017 = (state_20016[(1)]);
if((state_val_20017 === (7))){
var inst_19998 = (state_20016[(7)]);
var inst_19998__$1 = (state_20016[(2)]);
var inst_19999 = (inst_19998__$1 == null);
var inst_20000 = cljs.core.not.call(null,inst_19999);
var state_20016__$1 = (function (){var statearr_20018 = state_20016;
(statearr_20018[(7)] = inst_19998__$1);

return statearr_20018;
})();
if(inst_20000){
var statearr_20019_20044 = state_20016__$1;
(statearr_20019_20044[(1)] = (8));

} else {
var statearr_20020_20045 = state_20016__$1;
(statearr_20020_20045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (1))){
var inst_19993 = (0);
var state_20016__$1 = (function (){var statearr_20021 = state_20016;
(statearr_20021[(8)] = inst_19993);

return statearr_20021;
})();
var statearr_20022_20046 = state_20016__$1;
(statearr_20022_20046[(2)] = null);

(statearr_20022_20046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (4))){
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20016__$1,(7),ch);
} else {
if((state_val_20017 === (6))){
var inst_20011 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20023_20047 = state_20016__$1;
(statearr_20023_20047[(2)] = inst_20011);

(statearr_20023_20047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (3))){
var inst_20013 = (state_20016[(2)]);
var inst_20014 = cljs.core.async.close_BANG_.call(null,out);
var state_20016__$1 = (function (){var statearr_20024 = state_20016;
(statearr_20024[(9)] = inst_20013);

return statearr_20024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20016__$1,inst_20014);
} else {
if((state_val_20017 === (2))){
var inst_19993 = (state_20016[(8)]);
var inst_19995 = (inst_19993 < n);
var state_20016__$1 = state_20016;
if(cljs.core.truth_(inst_19995)){
var statearr_20025_20048 = state_20016__$1;
(statearr_20025_20048[(1)] = (4));

} else {
var statearr_20026_20049 = state_20016__$1;
(statearr_20026_20049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (11))){
var inst_19993 = (state_20016[(8)]);
var inst_20003 = (state_20016[(2)]);
var inst_20004 = (inst_19993 + (1));
var inst_19993__$1 = inst_20004;
var state_20016__$1 = (function (){var statearr_20027 = state_20016;
(statearr_20027[(10)] = inst_20003);

(statearr_20027[(8)] = inst_19993__$1);

return statearr_20027;
})();
var statearr_20028_20050 = state_20016__$1;
(statearr_20028_20050[(2)] = null);

(statearr_20028_20050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (9))){
var state_20016__$1 = state_20016;
var statearr_20029_20051 = state_20016__$1;
(statearr_20029_20051[(2)] = null);

(statearr_20029_20051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (5))){
var state_20016__$1 = state_20016;
var statearr_20030_20052 = state_20016__$1;
(statearr_20030_20052[(2)] = null);

(statearr_20030_20052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (10))){
var inst_20008 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20031_20053 = state_20016__$1;
(statearr_20031_20053[(2)] = inst_20008);

(statearr_20031_20053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (8))){
var inst_19998 = (state_20016[(7)]);
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20016__$1,(11),out,inst_19998);
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
});})(c__17879__auto___20043,out))
;
return ((function (switch__17767__auto__,c__17879__auto___20043,out){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_20035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20035[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_20035[(1)] = (1));

return statearr_20035;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_20016){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_20016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e20036){if((e20036 instanceof Object)){
var ex__17771__auto__ = e20036;
var statearr_20037_20054 = state_20016;
(statearr_20037_20054[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20055 = state_20016;
state_20016 = G__20055;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_20016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_20016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___20043,out))
})();
var state__17881__auto__ = (function (){var statearr_20038 = f__17880__auto__.call(null);
(statearr_20038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___20043);

return statearr_20038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___20043,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20063 = (function (map_LT_,f,ch,meta20064){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20064 = meta20064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20065,meta20064__$1){
var self__ = this;
var _20065__$1 = this;
return (new cljs.core.async.t_cljs$core$async20063(self__.map_LT_,self__.f,self__.ch,meta20064__$1));
});

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20065){
var self__ = this;
var _20065__$1 = this;
return self__.meta20064;
});

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20066 = (function (map_LT_,f,ch,meta20064,_,fn1,meta20067){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20064 = meta20064;
this._ = _;
this.fn1 = fn1;
this.meta20067 = meta20067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20068,meta20067__$1){
var self__ = this;
var _20068__$1 = this;
return (new cljs.core.async.t_cljs$core$async20066(self__.map_LT_,self__.f,self__.ch,self__.meta20064,self__._,self__.fn1,meta20067__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20068){
var self__ = this;
var _20068__$1 = this;
return self__.meta20067;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20066.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20056_SHARP_){
return f1.call(null,(((p1__20056_SHARP_ == null))?null:self__.f.call(null,p1__20056_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20066.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20064","meta20064",11608380,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20063","cljs.core.async/t_cljs$core$async20063",-1233423686,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20067","meta20067",2054436628,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20066";

cljs.core.async.t_cljs$core$async20066.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async20066");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20066 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20066(map_LT___$1,f__$1,ch__$1,meta20064__$1,___$2,fn1__$1,meta20067){
return (new cljs.core.async.t_cljs$core$async20066(map_LT___$1,f__$1,ch__$1,meta20064__$1,___$2,fn1__$1,meta20067));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20066(self__.map_LT_,self__.f,self__.ch,self__.meta20064,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20064","meta20064",11608380,null)], null);
});

cljs.core.async.t_cljs$core$async20063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20063";

cljs.core.async.t_cljs$core$async20063.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async20063");
});

cljs.core.async.__GT_t_cljs$core$async20063 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20063(map_LT___$1,f__$1,ch__$1,meta20064){
return (new cljs.core.async.t_cljs$core$async20063(map_LT___$1,f__$1,ch__$1,meta20064));
});

}

return (new cljs.core.async.t_cljs$core$async20063(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20072 = (function (map_GT_,f,ch,meta20073){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20073 = meta20073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20074,meta20073__$1){
var self__ = this;
var _20074__$1 = this;
return (new cljs.core.async.t_cljs$core$async20072(self__.map_GT_,self__.f,self__.ch,meta20073__$1));
});

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20074){
var self__ = this;
var _20074__$1 = this;
return self__.meta20073;
});

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20073","meta20073",1044284167,null)], null);
});

cljs.core.async.t_cljs$core$async20072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20072";

cljs.core.async.t_cljs$core$async20072.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async20072");
});

cljs.core.async.__GT_t_cljs$core$async20072 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20072(map_GT___$1,f__$1,ch__$1,meta20073){
return (new cljs.core.async.t_cljs$core$async20072(map_GT___$1,f__$1,ch__$1,meta20073));
});

}

return (new cljs.core.async.t_cljs$core$async20072(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20078 = (function (filter_GT_,p,ch,meta20079){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20079 = meta20079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20080,meta20079__$1){
var self__ = this;
var _20080__$1 = this;
return (new cljs.core.async.t_cljs$core$async20078(self__.filter_GT_,self__.p,self__.ch,meta20079__$1));
});

cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20080){
var self__ = this;
var _20080__$1 = this;
return self__.meta20079;
});

cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20079","meta20079",-323904051,null)], null);
});

cljs.core.async.t_cljs$core$async20078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20078";

cljs.core.async.t_cljs$core$async20078.cljs$lang$ctorPrWriter = (function (this__6822__auto__,writer__6823__auto__,opt__6824__auto__){
return cljs.core._write.call(null,writer__6823__auto__,"cljs.core.async/t_cljs$core$async20078");
});

cljs.core.async.__GT_t_cljs$core$async20078 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20078(filter_GT___$1,p__$1,ch__$1,meta20079){
return (new cljs.core.async.t_cljs$core$async20078(filter_GT___$1,p__$1,ch__$1,meta20079));
});

}

return (new cljs.core.async.t_cljs$core$async20078(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20081 = [];
var len__7291__auto___20125 = arguments.length;
var i__7292__auto___20126 = (0);
while(true){
if((i__7292__auto___20126 < len__7291__auto___20125)){
args20081.push((arguments[i__7292__auto___20126]));

var G__20127 = (i__7292__auto___20126 + (1));
i__7292__auto___20126 = G__20127;
continue;
} else {
}
break;
}

var G__20083 = args20081.length;
switch (G__20083) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20081.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17879__auto___20129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___20129,out){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___20129,out){
return (function (state_20104){
var state_val_20105 = (state_20104[(1)]);
if((state_val_20105 === (7))){
var inst_20100 = (state_20104[(2)]);
var state_20104__$1 = state_20104;
var statearr_20106_20130 = state_20104__$1;
(statearr_20106_20130[(2)] = inst_20100);

(statearr_20106_20130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20105 === (1))){
var state_20104__$1 = state_20104;
var statearr_20107_20131 = state_20104__$1;
(statearr_20107_20131[(2)] = null);

(statearr_20107_20131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20105 === (4))){
var inst_20086 = (state_20104[(7)]);
var inst_20086__$1 = (state_20104[(2)]);
var inst_20087 = (inst_20086__$1 == null);
var state_20104__$1 = (function (){var statearr_20108 = state_20104;
(statearr_20108[(7)] = inst_20086__$1);

return statearr_20108;
})();
if(cljs.core.truth_(inst_20087)){
var statearr_20109_20132 = state_20104__$1;
(statearr_20109_20132[(1)] = (5));

} else {
var statearr_20110_20133 = state_20104__$1;
(statearr_20110_20133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20105 === (6))){
var inst_20086 = (state_20104[(7)]);
var inst_20091 = p.call(null,inst_20086);
var state_20104__$1 = state_20104;
if(cljs.core.truth_(inst_20091)){
var statearr_20111_20134 = state_20104__$1;
(statearr_20111_20134[(1)] = (8));

} else {
var statearr_20112_20135 = state_20104__$1;
(statearr_20112_20135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20105 === (3))){
var inst_20102 = (state_20104[(2)]);
var state_20104__$1 = state_20104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20104__$1,inst_20102);
} else {
if((state_val_20105 === (2))){
var state_20104__$1 = state_20104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20104__$1,(4),ch);
} else {
if((state_val_20105 === (11))){
var inst_20094 = (state_20104[(2)]);
var state_20104__$1 = state_20104;
var statearr_20113_20136 = state_20104__$1;
(statearr_20113_20136[(2)] = inst_20094);

(statearr_20113_20136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20105 === (9))){
var state_20104__$1 = state_20104;
var statearr_20114_20137 = state_20104__$1;
(statearr_20114_20137[(2)] = null);

(statearr_20114_20137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20105 === (5))){
var inst_20089 = cljs.core.async.close_BANG_.call(null,out);
var state_20104__$1 = state_20104;
var statearr_20115_20138 = state_20104__$1;
(statearr_20115_20138[(2)] = inst_20089);

(statearr_20115_20138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20105 === (10))){
var inst_20097 = (state_20104[(2)]);
var state_20104__$1 = (function (){var statearr_20116 = state_20104;
(statearr_20116[(8)] = inst_20097);

return statearr_20116;
})();
var statearr_20117_20139 = state_20104__$1;
(statearr_20117_20139[(2)] = null);

(statearr_20117_20139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20105 === (8))){
var inst_20086 = (state_20104[(7)]);
var state_20104__$1 = state_20104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20104__$1,(11),out,inst_20086);
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
});})(c__17879__auto___20129,out))
;
return ((function (switch__17767__auto__,c__17879__auto___20129,out){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_20121 = [null,null,null,null,null,null,null,null,null];
(statearr_20121[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_20121[(1)] = (1));

return statearr_20121;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_20104){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_20104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e20122){if((e20122 instanceof Object)){
var ex__17771__auto__ = e20122;
var statearr_20123_20140 = state_20104;
(statearr_20123_20140[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20141 = state_20104;
state_20104 = G__20141;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_20104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_20104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___20129,out))
})();
var state__17881__auto__ = (function (){var statearr_20124 = f__17880__auto__.call(null);
(statearr_20124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___20129);

return statearr_20124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___20129,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20142 = [];
var len__7291__auto___20145 = arguments.length;
var i__7292__auto___20146 = (0);
while(true){
if((i__7292__auto___20146 < len__7291__auto___20145)){
args20142.push((arguments[i__7292__auto___20146]));

var G__20147 = (i__7292__auto___20146 + (1));
i__7292__auto___20146 = G__20147;
continue;
} else {
}
break;
}

var G__20144 = args20142.length;
switch (G__20144) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20142.length)].join('')));

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
var c__17879__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto__){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto__){
return (function (state_20314){
var state_val_20315 = (state_20314[(1)]);
if((state_val_20315 === (7))){
var inst_20310 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20316_20357 = state_20314__$1;
(statearr_20316_20357[(2)] = inst_20310);

(statearr_20316_20357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (20))){
var inst_20280 = (state_20314[(7)]);
var inst_20291 = (state_20314[(2)]);
var inst_20292 = cljs.core.next.call(null,inst_20280);
var inst_20266 = inst_20292;
var inst_20267 = null;
var inst_20268 = (0);
var inst_20269 = (0);
var state_20314__$1 = (function (){var statearr_20317 = state_20314;
(statearr_20317[(8)] = inst_20269);

(statearr_20317[(9)] = inst_20268);

(statearr_20317[(10)] = inst_20291);

(statearr_20317[(11)] = inst_20266);

(statearr_20317[(12)] = inst_20267);

return statearr_20317;
})();
var statearr_20318_20358 = state_20314__$1;
(statearr_20318_20358[(2)] = null);

(statearr_20318_20358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (1))){
var state_20314__$1 = state_20314;
var statearr_20319_20359 = state_20314__$1;
(statearr_20319_20359[(2)] = null);

(statearr_20319_20359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (4))){
var inst_20255 = (state_20314[(13)]);
var inst_20255__$1 = (state_20314[(2)]);
var inst_20256 = (inst_20255__$1 == null);
var state_20314__$1 = (function (){var statearr_20320 = state_20314;
(statearr_20320[(13)] = inst_20255__$1);

return statearr_20320;
})();
if(cljs.core.truth_(inst_20256)){
var statearr_20321_20360 = state_20314__$1;
(statearr_20321_20360[(1)] = (5));

} else {
var statearr_20322_20361 = state_20314__$1;
(statearr_20322_20361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (15))){
var state_20314__$1 = state_20314;
var statearr_20326_20362 = state_20314__$1;
(statearr_20326_20362[(2)] = null);

(statearr_20326_20362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (21))){
var state_20314__$1 = state_20314;
var statearr_20327_20363 = state_20314__$1;
(statearr_20327_20363[(2)] = null);

(statearr_20327_20363[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (13))){
var inst_20269 = (state_20314[(8)]);
var inst_20268 = (state_20314[(9)]);
var inst_20266 = (state_20314[(11)]);
var inst_20267 = (state_20314[(12)]);
var inst_20276 = (state_20314[(2)]);
var inst_20277 = (inst_20269 + (1));
var tmp20323 = inst_20268;
var tmp20324 = inst_20266;
var tmp20325 = inst_20267;
var inst_20266__$1 = tmp20324;
var inst_20267__$1 = tmp20325;
var inst_20268__$1 = tmp20323;
var inst_20269__$1 = inst_20277;
var state_20314__$1 = (function (){var statearr_20328 = state_20314;
(statearr_20328[(14)] = inst_20276);

(statearr_20328[(8)] = inst_20269__$1);

(statearr_20328[(9)] = inst_20268__$1);

(statearr_20328[(11)] = inst_20266__$1);

(statearr_20328[(12)] = inst_20267__$1);

return statearr_20328;
})();
var statearr_20329_20364 = state_20314__$1;
(statearr_20329_20364[(2)] = null);

(statearr_20329_20364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (22))){
var state_20314__$1 = state_20314;
var statearr_20330_20365 = state_20314__$1;
(statearr_20330_20365[(2)] = null);

(statearr_20330_20365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (6))){
var inst_20255 = (state_20314[(13)]);
var inst_20264 = f.call(null,inst_20255);
var inst_20265 = cljs.core.seq.call(null,inst_20264);
var inst_20266 = inst_20265;
var inst_20267 = null;
var inst_20268 = (0);
var inst_20269 = (0);
var state_20314__$1 = (function (){var statearr_20331 = state_20314;
(statearr_20331[(8)] = inst_20269);

(statearr_20331[(9)] = inst_20268);

(statearr_20331[(11)] = inst_20266);

(statearr_20331[(12)] = inst_20267);

return statearr_20331;
})();
var statearr_20332_20366 = state_20314__$1;
(statearr_20332_20366[(2)] = null);

(statearr_20332_20366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (17))){
var inst_20280 = (state_20314[(7)]);
var inst_20284 = cljs.core.chunk_first.call(null,inst_20280);
var inst_20285 = cljs.core.chunk_rest.call(null,inst_20280);
var inst_20286 = cljs.core.count.call(null,inst_20284);
var inst_20266 = inst_20285;
var inst_20267 = inst_20284;
var inst_20268 = inst_20286;
var inst_20269 = (0);
var state_20314__$1 = (function (){var statearr_20333 = state_20314;
(statearr_20333[(8)] = inst_20269);

(statearr_20333[(9)] = inst_20268);

(statearr_20333[(11)] = inst_20266);

(statearr_20333[(12)] = inst_20267);

return statearr_20333;
})();
var statearr_20334_20367 = state_20314__$1;
(statearr_20334_20367[(2)] = null);

(statearr_20334_20367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (3))){
var inst_20312 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20314__$1,inst_20312);
} else {
if((state_val_20315 === (12))){
var inst_20300 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20335_20368 = state_20314__$1;
(statearr_20335_20368[(2)] = inst_20300);

(statearr_20335_20368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (2))){
var state_20314__$1 = state_20314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20314__$1,(4),in$);
} else {
if((state_val_20315 === (23))){
var inst_20308 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20336_20369 = state_20314__$1;
(statearr_20336_20369[(2)] = inst_20308);

(statearr_20336_20369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (19))){
var inst_20295 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20337_20370 = state_20314__$1;
(statearr_20337_20370[(2)] = inst_20295);

(statearr_20337_20370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (11))){
var inst_20266 = (state_20314[(11)]);
var inst_20280 = (state_20314[(7)]);
var inst_20280__$1 = cljs.core.seq.call(null,inst_20266);
var state_20314__$1 = (function (){var statearr_20338 = state_20314;
(statearr_20338[(7)] = inst_20280__$1);

return statearr_20338;
})();
if(inst_20280__$1){
var statearr_20339_20371 = state_20314__$1;
(statearr_20339_20371[(1)] = (14));

} else {
var statearr_20340_20372 = state_20314__$1;
(statearr_20340_20372[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (9))){
var inst_20302 = (state_20314[(2)]);
var inst_20303 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20314__$1 = (function (){var statearr_20341 = state_20314;
(statearr_20341[(15)] = inst_20302);

return statearr_20341;
})();
if(cljs.core.truth_(inst_20303)){
var statearr_20342_20373 = state_20314__$1;
(statearr_20342_20373[(1)] = (21));

} else {
var statearr_20343_20374 = state_20314__$1;
(statearr_20343_20374[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (5))){
var inst_20258 = cljs.core.async.close_BANG_.call(null,out);
var state_20314__$1 = state_20314;
var statearr_20344_20375 = state_20314__$1;
(statearr_20344_20375[(2)] = inst_20258);

(statearr_20344_20375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (14))){
var inst_20280 = (state_20314[(7)]);
var inst_20282 = cljs.core.chunked_seq_QMARK_.call(null,inst_20280);
var state_20314__$1 = state_20314;
if(inst_20282){
var statearr_20345_20376 = state_20314__$1;
(statearr_20345_20376[(1)] = (17));

} else {
var statearr_20346_20377 = state_20314__$1;
(statearr_20346_20377[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (16))){
var inst_20298 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20347_20378 = state_20314__$1;
(statearr_20347_20378[(2)] = inst_20298);

(statearr_20347_20378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (10))){
var inst_20269 = (state_20314[(8)]);
var inst_20267 = (state_20314[(12)]);
var inst_20274 = cljs.core._nth.call(null,inst_20267,inst_20269);
var state_20314__$1 = state_20314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20314__$1,(13),out,inst_20274);
} else {
if((state_val_20315 === (18))){
var inst_20280 = (state_20314[(7)]);
var inst_20289 = cljs.core.first.call(null,inst_20280);
var state_20314__$1 = state_20314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20314__$1,(20),out,inst_20289);
} else {
if((state_val_20315 === (8))){
var inst_20269 = (state_20314[(8)]);
var inst_20268 = (state_20314[(9)]);
var inst_20271 = (inst_20269 < inst_20268);
var inst_20272 = inst_20271;
var state_20314__$1 = state_20314;
if(cljs.core.truth_(inst_20272)){
var statearr_20348_20379 = state_20314__$1;
(statearr_20348_20379[(1)] = (10));

} else {
var statearr_20349_20380 = state_20314__$1;
(statearr_20349_20380[(1)] = (11));

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
});})(c__17879__auto__))
;
return ((function (switch__17767__auto__,c__17879__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17768__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17768__auto____0 = (function (){
var statearr_20353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20353[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17768__auto__);

(statearr_20353[(1)] = (1));

return statearr_20353;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17768__auto____1 = (function (state_20314){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_20314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e20354){if((e20354 instanceof Object)){
var ex__17771__auto__ = e20354;
var statearr_20355_20381 = state_20314;
(statearr_20355_20381[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20382 = state_20314;
state_20314 = G__20382;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17768__auto__ = function(state_20314){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17768__auto____1.call(this,state_20314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17768__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17768__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto__))
})();
var state__17881__auto__ = (function (){var statearr_20356 = f__17880__auto__.call(null);
(statearr_20356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto__);

return statearr_20356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto__))
);

return c__17879__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20383 = [];
var len__7291__auto___20386 = arguments.length;
var i__7292__auto___20387 = (0);
while(true){
if((i__7292__auto___20387 < len__7291__auto___20386)){
args20383.push((arguments[i__7292__auto___20387]));

var G__20388 = (i__7292__auto___20387 + (1));
i__7292__auto___20387 = G__20388;
continue;
} else {
}
break;
}

var G__20385 = args20383.length;
switch (G__20385) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20383.length)].join('')));

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
var args20390 = [];
var len__7291__auto___20393 = arguments.length;
var i__7292__auto___20394 = (0);
while(true){
if((i__7292__auto___20394 < len__7291__auto___20393)){
args20390.push((arguments[i__7292__auto___20394]));

var G__20395 = (i__7292__auto___20394 + (1));
i__7292__auto___20394 = G__20395;
continue;
} else {
}
break;
}

var G__20392 = args20390.length;
switch (G__20392) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20390.length)].join('')));

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
var args20397 = [];
var len__7291__auto___20448 = arguments.length;
var i__7292__auto___20449 = (0);
while(true){
if((i__7292__auto___20449 < len__7291__auto___20448)){
args20397.push((arguments[i__7292__auto___20449]));

var G__20450 = (i__7292__auto___20449 + (1));
i__7292__auto___20449 = G__20450;
continue;
} else {
}
break;
}

var G__20399 = args20397.length;
switch (G__20399) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20397.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17879__auto___20452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___20452,out){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___20452,out){
return (function (state_20423){
var state_val_20424 = (state_20423[(1)]);
if((state_val_20424 === (7))){
var inst_20418 = (state_20423[(2)]);
var state_20423__$1 = state_20423;
var statearr_20425_20453 = state_20423__$1;
(statearr_20425_20453[(2)] = inst_20418);

(statearr_20425_20453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20424 === (1))){
var inst_20400 = null;
var state_20423__$1 = (function (){var statearr_20426 = state_20423;
(statearr_20426[(7)] = inst_20400);

return statearr_20426;
})();
var statearr_20427_20454 = state_20423__$1;
(statearr_20427_20454[(2)] = null);

(statearr_20427_20454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20424 === (4))){
var inst_20403 = (state_20423[(8)]);
var inst_20403__$1 = (state_20423[(2)]);
var inst_20404 = (inst_20403__$1 == null);
var inst_20405 = cljs.core.not.call(null,inst_20404);
var state_20423__$1 = (function (){var statearr_20428 = state_20423;
(statearr_20428[(8)] = inst_20403__$1);

return statearr_20428;
})();
if(inst_20405){
var statearr_20429_20455 = state_20423__$1;
(statearr_20429_20455[(1)] = (5));

} else {
var statearr_20430_20456 = state_20423__$1;
(statearr_20430_20456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20424 === (6))){
var state_20423__$1 = state_20423;
var statearr_20431_20457 = state_20423__$1;
(statearr_20431_20457[(2)] = null);

(statearr_20431_20457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20424 === (3))){
var inst_20420 = (state_20423[(2)]);
var inst_20421 = cljs.core.async.close_BANG_.call(null,out);
var state_20423__$1 = (function (){var statearr_20432 = state_20423;
(statearr_20432[(9)] = inst_20420);

return statearr_20432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20423__$1,inst_20421);
} else {
if((state_val_20424 === (2))){
var state_20423__$1 = state_20423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20423__$1,(4),ch);
} else {
if((state_val_20424 === (11))){
var inst_20403 = (state_20423[(8)]);
var inst_20412 = (state_20423[(2)]);
var inst_20400 = inst_20403;
var state_20423__$1 = (function (){var statearr_20433 = state_20423;
(statearr_20433[(10)] = inst_20412);

(statearr_20433[(7)] = inst_20400);

return statearr_20433;
})();
var statearr_20434_20458 = state_20423__$1;
(statearr_20434_20458[(2)] = null);

(statearr_20434_20458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20424 === (9))){
var inst_20403 = (state_20423[(8)]);
var state_20423__$1 = state_20423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20423__$1,(11),out,inst_20403);
} else {
if((state_val_20424 === (5))){
var inst_20403 = (state_20423[(8)]);
var inst_20400 = (state_20423[(7)]);
var inst_20407 = cljs.core._EQ_.call(null,inst_20403,inst_20400);
var state_20423__$1 = state_20423;
if(inst_20407){
var statearr_20436_20459 = state_20423__$1;
(statearr_20436_20459[(1)] = (8));

} else {
var statearr_20437_20460 = state_20423__$1;
(statearr_20437_20460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20424 === (10))){
var inst_20415 = (state_20423[(2)]);
var state_20423__$1 = state_20423;
var statearr_20438_20461 = state_20423__$1;
(statearr_20438_20461[(2)] = inst_20415);

(statearr_20438_20461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20424 === (8))){
var inst_20400 = (state_20423[(7)]);
var tmp20435 = inst_20400;
var inst_20400__$1 = tmp20435;
var state_20423__$1 = (function (){var statearr_20439 = state_20423;
(statearr_20439[(7)] = inst_20400__$1);

return statearr_20439;
})();
var statearr_20440_20462 = state_20423__$1;
(statearr_20440_20462[(2)] = null);

(statearr_20440_20462[(1)] = (2));


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
});})(c__17879__auto___20452,out))
;
return ((function (switch__17767__auto__,c__17879__auto___20452,out){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_20444 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20444[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_20444[(1)] = (1));

return statearr_20444;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_20423){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_20423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e20445){if((e20445 instanceof Object)){
var ex__17771__auto__ = e20445;
var statearr_20446_20463 = state_20423;
(statearr_20446_20463[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20464 = state_20423;
state_20423 = G__20464;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_20423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_20423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___20452,out))
})();
var state__17881__auto__ = (function (){var statearr_20447 = f__17880__auto__.call(null);
(statearr_20447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___20452);

return statearr_20447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___20452,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20465 = [];
var len__7291__auto___20535 = arguments.length;
var i__7292__auto___20536 = (0);
while(true){
if((i__7292__auto___20536 < len__7291__auto___20535)){
args20465.push((arguments[i__7292__auto___20536]));

var G__20537 = (i__7292__auto___20536 + (1));
i__7292__auto___20536 = G__20537;
continue;
} else {
}
break;
}

var G__20467 = args20465.length;
switch (G__20467) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20465.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17879__auto___20539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___20539,out){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___20539,out){
return (function (state_20505){
var state_val_20506 = (state_20505[(1)]);
if((state_val_20506 === (7))){
var inst_20501 = (state_20505[(2)]);
var state_20505__$1 = state_20505;
var statearr_20507_20540 = state_20505__$1;
(statearr_20507_20540[(2)] = inst_20501);

(statearr_20507_20540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (1))){
var inst_20468 = (new Array(n));
var inst_20469 = inst_20468;
var inst_20470 = (0);
var state_20505__$1 = (function (){var statearr_20508 = state_20505;
(statearr_20508[(7)] = inst_20470);

(statearr_20508[(8)] = inst_20469);

return statearr_20508;
})();
var statearr_20509_20541 = state_20505__$1;
(statearr_20509_20541[(2)] = null);

(statearr_20509_20541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (4))){
var inst_20473 = (state_20505[(9)]);
var inst_20473__$1 = (state_20505[(2)]);
var inst_20474 = (inst_20473__$1 == null);
var inst_20475 = cljs.core.not.call(null,inst_20474);
var state_20505__$1 = (function (){var statearr_20510 = state_20505;
(statearr_20510[(9)] = inst_20473__$1);

return statearr_20510;
})();
if(inst_20475){
var statearr_20511_20542 = state_20505__$1;
(statearr_20511_20542[(1)] = (5));

} else {
var statearr_20512_20543 = state_20505__$1;
(statearr_20512_20543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (15))){
var inst_20495 = (state_20505[(2)]);
var state_20505__$1 = state_20505;
var statearr_20513_20544 = state_20505__$1;
(statearr_20513_20544[(2)] = inst_20495);

(statearr_20513_20544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (13))){
var state_20505__$1 = state_20505;
var statearr_20514_20545 = state_20505__$1;
(statearr_20514_20545[(2)] = null);

(statearr_20514_20545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (6))){
var inst_20470 = (state_20505[(7)]);
var inst_20491 = (inst_20470 > (0));
var state_20505__$1 = state_20505;
if(cljs.core.truth_(inst_20491)){
var statearr_20515_20546 = state_20505__$1;
(statearr_20515_20546[(1)] = (12));

} else {
var statearr_20516_20547 = state_20505__$1;
(statearr_20516_20547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (3))){
var inst_20503 = (state_20505[(2)]);
var state_20505__$1 = state_20505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20505__$1,inst_20503);
} else {
if((state_val_20506 === (12))){
var inst_20469 = (state_20505[(8)]);
var inst_20493 = cljs.core.vec.call(null,inst_20469);
var state_20505__$1 = state_20505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20505__$1,(15),out,inst_20493);
} else {
if((state_val_20506 === (2))){
var state_20505__$1 = state_20505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20505__$1,(4),ch);
} else {
if((state_val_20506 === (11))){
var inst_20485 = (state_20505[(2)]);
var inst_20486 = (new Array(n));
var inst_20469 = inst_20486;
var inst_20470 = (0);
var state_20505__$1 = (function (){var statearr_20517 = state_20505;
(statearr_20517[(10)] = inst_20485);

(statearr_20517[(7)] = inst_20470);

(statearr_20517[(8)] = inst_20469);

return statearr_20517;
})();
var statearr_20518_20548 = state_20505__$1;
(statearr_20518_20548[(2)] = null);

(statearr_20518_20548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (9))){
var inst_20469 = (state_20505[(8)]);
var inst_20483 = cljs.core.vec.call(null,inst_20469);
var state_20505__$1 = state_20505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20505__$1,(11),out,inst_20483);
} else {
if((state_val_20506 === (5))){
var inst_20478 = (state_20505[(11)]);
var inst_20470 = (state_20505[(7)]);
var inst_20473 = (state_20505[(9)]);
var inst_20469 = (state_20505[(8)]);
var inst_20477 = (inst_20469[inst_20470] = inst_20473);
var inst_20478__$1 = (inst_20470 + (1));
var inst_20479 = (inst_20478__$1 < n);
var state_20505__$1 = (function (){var statearr_20519 = state_20505;
(statearr_20519[(11)] = inst_20478__$1);

(statearr_20519[(12)] = inst_20477);

return statearr_20519;
})();
if(cljs.core.truth_(inst_20479)){
var statearr_20520_20549 = state_20505__$1;
(statearr_20520_20549[(1)] = (8));

} else {
var statearr_20521_20550 = state_20505__$1;
(statearr_20521_20550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (14))){
var inst_20498 = (state_20505[(2)]);
var inst_20499 = cljs.core.async.close_BANG_.call(null,out);
var state_20505__$1 = (function (){var statearr_20523 = state_20505;
(statearr_20523[(13)] = inst_20498);

return statearr_20523;
})();
var statearr_20524_20551 = state_20505__$1;
(statearr_20524_20551[(2)] = inst_20499);

(statearr_20524_20551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (10))){
var inst_20489 = (state_20505[(2)]);
var state_20505__$1 = state_20505;
var statearr_20525_20552 = state_20505__$1;
(statearr_20525_20552[(2)] = inst_20489);

(statearr_20525_20552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20506 === (8))){
var inst_20478 = (state_20505[(11)]);
var inst_20469 = (state_20505[(8)]);
var tmp20522 = inst_20469;
var inst_20469__$1 = tmp20522;
var inst_20470 = inst_20478;
var state_20505__$1 = (function (){var statearr_20526 = state_20505;
(statearr_20526[(7)] = inst_20470);

(statearr_20526[(8)] = inst_20469__$1);

return statearr_20526;
})();
var statearr_20527_20553 = state_20505__$1;
(statearr_20527_20553[(2)] = null);

(statearr_20527_20553[(1)] = (2));


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
});})(c__17879__auto___20539,out))
;
return ((function (switch__17767__auto__,c__17879__auto___20539,out){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_20531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20531[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_20531[(1)] = (1));

return statearr_20531;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_20505){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_20505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e20532){if((e20532 instanceof Object)){
var ex__17771__auto__ = e20532;
var statearr_20533_20554 = state_20505;
(statearr_20533_20554[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20555 = state_20505;
state_20505 = G__20555;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_20505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_20505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___20539,out))
})();
var state__17881__auto__ = (function (){var statearr_20534 = f__17880__auto__.call(null);
(statearr_20534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___20539);

return statearr_20534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___20539,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20556 = [];
var len__7291__auto___20630 = arguments.length;
var i__7292__auto___20631 = (0);
while(true){
if((i__7292__auto___20631 < len__7291__auto___20630)){
args20556.push((arguments[i__7292__auto___20631]));

var G__20632 = (i__7292__auto___20631 + (1));
i__7292__auto___20631 = G__20632;
continue;
} else {
}
break;
}

var G__20558 = args20556.length;
switch (G__20558) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20556.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17879__auto___20634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17879__auto___20634,out){
return (function (){
var f__17880__auto__ = (function (){var switch__17767__auto__ = ((function (c__17879__auto___20634,out){
return (function (state_20600){
var state_val_20601 = (state_20600[(1)]);
if((state_val_20601 === (7))){
var inst_20596 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
var statearr_20602_20635 = state_20600__$1;
(statearr_20602_20635[(2)] = inst_20596);

(statearr_20602_20635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (1))){
var inst_20559 = [];
var inst_20560 = inst_20559;
var inst_20561 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20600__$1 = (function (){var statearr_20603 = state_20600;
(statearr_20603[(7)] = inst_20561);

(statearr_20603[(8)] = inst_20560);

return statearr_20603;
})();
var statearr_20604_20636 = state_20600__$1;
(statearr_20604_20636[(2)] = null);

(statearr_20604_20636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (4))){
var inst_20564 = (state_20600[(9)]);
var inst_20564__$1 = (state_20600[(2)]);
var inst_20565 = (inst_20564__$1 == null);
var inst_20566 = cljs.core.not.call(null,inst_20565);
var state_20600__$1 = (function (){var statearr_20605 = state_20600;
(statearr_20605[(9)] = inst_20564__$1);

return statearr_20605;
})();
if(inst_20566){
var statearr_20606_20637 = state_20600__$1;
(statearr_20606_20637[(1)] = (5));

} else {
var statearr_20607_20638 = state_20600__$1;
(statearr_20607_20638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (15))){
var inst_20590 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
var statearr_20608_20639 = state_20600__$1;
(statearr_20608_20639[(2)] = inst_20590);

(statearr_20608_20639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (13))){
var state_20600__$1 = state_20600;
var statearr_20609_20640 = state_20600__$1;
(statearr_20609_20640[(2)] = null);

(statearr_20609_20640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (6))){
var inst_20560 = (state_20600[(8)]);
var inst_20585 = inst_20560.length;
var inst_20586 = (inst_20585 > (0));
var state_20600__$1 = state_20600;
if(cljs.core.truth_(inst_20586)){
var statearr_20610_20641 = state_20600__$1;
(statearr_20610_20641[(1)] = (12));

} else {
var statearr_20611_20642 = state_20600__$1;
(statearr_20611_20642[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (3))){
var inst_20598 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20600__$1,inst_20598);
} else {
if((state_val_20601 === (12))){
var inst_20560 = (state_20600[(8)]);
var inst_20588 = cljs.core.vec.call(null,inst_20560);
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20600__$1,(15),out,inst_20588);
} else {
if((state_val_20601 === (2))){
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20600__$1,(4),ch);
} else {
if((state_val_20601 === (11))){
var inst_20564 = (state_20600[(9)]);
var inst_20568 = (state_20600[(10)]);
var inst_20578 = (state_20600[(2)]);
var inst_20579 = [];
var inst_20580 = inst_20579.push(inst_20564);
var inst_20560 = inst_20579;
var inst_20561 = inst_20568;
var state_20600__$1 = (function (){var statearr_20612 = state_20600;
(statearr_20612[(7)] = inst_20561);

(statearr_20612[(8)] = inst_20560);

(statearr_20612[(11)] = inst_20580);

(statearr_20612[(12)] = inst_20578);

return statearr_20612;
})();
var statearr_20613_20643 = state_20600__$1;
(statearr_20613_20643[(2)] = null);

(statearr_20613_20643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (9))){
var inst_20560 = (state_20600[(8)]);
var inst_20576 = cljs.core.vec.call(null,inst_20560);
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20600__$1,(11),out,inst_20576);
} else {
if((state_val_20601 === (5))){
var inst_20564 = (state_20600[(9)]);
var inst_20561 = (state_20600[(7)]);
var inst_20568 = (state_20600[(10)]);
var inst_20568__$1 = f.call(null,inst_20564);
var inst_20569 = cljs.core._EQ_.call(null,inst_20568__$1,inst_20561);
var inst_20570 = cljs.core.keyword_identical_QMARK_.call(null,inst_20561,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20571 = (inst_20569) || (inst_20570);
var state_20600__$1 = (function (){var statearr_20614 = state_20600;
(statearr_20614[(10)] = inst_20568__$1);

return statearr_20614;
})();
if(cljs.core.truth_(inst_20571)){
var statearr_20615_20644 = state_20600__$1;
(statearr_20615_20644[(1)] = (8));

} else {
var statearr_20616_20645 = state_20600__$1;
(statearr_20616_20645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (14))){
var inst_20593 = (state_20600[(2)]);
var inst_20594 = cljs.core.async.close_BANG_.call(null,out);
var state_20600__$1 = (function (){var statearr_20618 = state_20600;
(statearr_20618[(13)] = inst_20593);

return statearr_20618;
})();
var statearr_20619_20646 = state_20600__$1;
(statearr_20619_20646[(2)] = inst_20594);

(statearr_20619_20646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (10))){
var inst_20583 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
var statearr_20620_20647 = state_20600__$1;
(statearr_20620_20647[(2)] = inst_20583);

(statearr_20620_20647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (8))){
var inst_20564 = (state_20600[(9)]);
var inst_20560 = (state_20600[(8)]);
var inst_20568 = (state_20600[(10)]);
var inst_20573 = inst_20560.push(inst_20564);
var tmp20617 = inst_20560;
var inst_20560__$1 = tmp20617;
var inst_20561 = inst_20568;
var state_20600__$1 = (function (){var statearr_20621 = state_20600;
(statearr_20621[(7)] = inst_20561);

(statearr_20621[(8)] = inst_20560__$1);

(statearr_20621[(14)] = inst_20573);

return statearr_20621;
})();
var statearr_20622_20648 = state_20600__$1;
(statearr_20622_20648[(2)] = null);

(statearr_20622_20648[(1)] = (2));


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
});})(c__17879__auto___20634,out))
;
return ((function (switch__17767__auto__,c__17879__auto___20634,out){
return (function() {
var cljs$core$async$state_machine__17768__auto__ = null;
var cljs$core$async$state_machine__17768__auto____0 = (function (){
var statearr_20626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20626[(0)] = cljs$core$async$state_machine__17768__auto__);

(statearr_20626[(1)] = (1));

return statearr_20626;
});
var cljs$core$async$state_machine__17768__auto____1 = (function (state_20600){
while(true){
var ret_value__17769__auto__ = (function (){try{while(true){
var result__17770__auto__ = switch__17767__auto__.call(null,state_20600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17770__auto__;
}
break;
}
}catch (e20627){if((e20627 instanceof Object)){
var ex__17771__auto__ = e20627;
var statearr_20628_20649 = state_20600;
(statearr_20628_20649[(5)] = ex__17771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20650 = state_20600;
state_20600 = G__20650;
continue;
} else {
return ret_value__17769__auto__;
}
break;
}
});
cljs$core$async$state_machine__17768__auto__ = function(state_20600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17768__auto____1.call(this,state_20600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17768__auto____0;
cljs$core$async$state_machine__17768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17768__auto____1;
return cljs$core$async$state_machine__17768__auto__;
})()
;})(switch__17767__auto__,c__17879__auto___20634,out))
})();
var state__17881__auto__ = (function (){var statearr_20629 = f__17880__auto__.call(null);
(statearr_20629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17879__auto___20634);

return statearr_20629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17881__auto__);
});})(c__17879__auto___20634,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1471435737731