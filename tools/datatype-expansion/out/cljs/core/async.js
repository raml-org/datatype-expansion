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
var args11159 = [];
var len__7095__auto___11165 = arguments.length;
var i__7096__auto___11166 = (0);
while(true){
if((i__7096__auto___11166 < len__7095__auto___11165)){
args11159.push((arguments[i__7096__auto___11166]));

var G__11167 = (i__7096__auto___11166 + (1));
i__7096__auto___11166 = G__11167;
continue;
} else {
}
break;
}

var G__11161 = args11159.length;
switch (G__11161) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11159.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11162 = (function (f,blockable,meta11163){
this.f = f;
this.blockable = blockable;
this.meta11163 = meta11163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11164,meta11163__$1){
var self__ = this;
var _11164__$1 = this;
return (new cljs.core.async.t_cljs$core$async11162(self__.f,self__.blockable,meta11163__$1));
});

cljs.core.async.t_cljs$core$async11162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11164){
var self__ = this;
var _11164__$1 = this;
return self__.meta11163;
});

cljs.core.async.t_cljs$core$async11162.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11163","meta11163",1669394444,null)], null);
});

cljs.core.async.t_cljs$core$async11162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11162";

cljs.core.async.t_cljs$core$async11162.cljs$lang$ctorPrWriter = (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async11162");
});

cljs.core.async.__GT_t_cljs$core$async11162 = (function cljs$core$async$__GT_t_cljs$core$async11162(f__$1,blockable__$1,meta11163){
return (new cljs.core.async.t_cljs$core$async11162(f__$1,blockable__$1,meta11163));
});

}

return (new cljs.core.async.t_cljs$core$async11162(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args11171 = [];
var len__7095__auto___11174 = arguments.length;
var i__7096__auto___11175 = (0);
while(true){
if((i__7096__auto___11175 < len__7095__auto___11174)){
args11171.push((arguments[i__7096__auto___11175]));

var G__11176 = (i__7096__auto___11175 + (1));
i__7096__auto___11175 = G__11176;
continue;
} else {
}
break;
}

var G__11173 = args11171.length;
switch (G__11173) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11171.length)].join('')));

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
var args11178 = [];
var len__7095__auto___11181 = arguments.length;
var i__7096__auto___11182 = (0);
while(true){
if((i__7096__auto___11182 < len__7095__auto___11181)){
args11178.push((arguments[i__7096__auto___11182]));

var G__11183 = (i__7096__auto___11182 + (1));
i__7096__auto___11182 = G__11183;
continue;
} else {
}
break;
}

var G__11180 = args11178.length;
switch (G__11180) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11178.length)].join('')));

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
var args11185 = [];
var len__7095__auto___11188 = arguments.length;
var i__7096__auto___11189 = (0);
while(true){
if((i__7096__auto___11189 < len__7095__auto___11188)){
args11185.push((arguments[i__7096__auto___11189]));

var G__11190 = (i__7096__auto___11189 + (1));
i__7096__auto___11189 = G__11190;
continue;
} else {
}
break;
}

var G__11187 = args11185.length;
switch (G__11187) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11185.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11192 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11192);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11192,ret){
return (function (){
return fn1.call(null,val_11192);
});})(val_11192,ret))
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
var args11193 = [];
var len__7095__auto___11196 = arguments.length;
var i__7096__auto___11197 = (0);
while(true){
if((i__7096__auto___11197 < len__7095__auto___11196)){
args11193.push((arguments[i__7096__auto___11197]));

var G__11198 = (i__7096__auto___11197 + (1));
i__7096__auto___11197 = G__11198;
continue;
} else {
}
break;
}

var G__11195 = args11193.length;
switch (G__11195) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11193.length)].join('')));

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
var n__6935__auto___11200 = n;
var x_11201 = (0);
while(true){
if((x_11201 < n__6935__auto___11200)){
(a[x_11201] = (0));

var G__11202 = (x_11201 + (1));
x_11201 = G__11202;
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

var G__11203 = (i + (1));
i = G__11203;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11207 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11207 = (function (alt_flag,flag,meta11208){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11208 = meta11208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11209,meta11208__$1){
var self__ = this;
var _11209__$1 = this;
return (new cljs.core.async.t_cljs$core$async11207(self__.alt_flag,self__.flag,meta11208__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11209){
var self__ = this;
var _11209__$1 = this;
return self__.meta11208;
});})(flag))
;

cljs.core.async.t_cljs$core$async11207.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11207.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11208","meta11208",-1683703755,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11207";

cljs.core.async.t_cljs$core$async11207.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async11207");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11207 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11207(alt_flag__$1,flag__$1,meta11208){
return (new cljs.core.async.t_cljs$core$async11207(alt_flag__$1,flag__$1,meta11208));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11207(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11213 = (function (alt_handler,flag,cb,meta11214){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11214 = meta11214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11215,meta11214__$1){
var self__ = this;
var _11215__$1 = this;
return (new cljs.core.async.t_cljs$core$async11213(self__.alt_handler,self__.flag,self__.cb,meta11214__$1));
});

cljs.core.async.t_cljs$core$async11213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11215){
var self__ = this;
var _11215__$1 = this;
return self__.meta11214;
});

cljs.core.async.t_cljs$core$async11213.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11214","meta11214",-1886958272,null)], null);
});

cljs.core.async.t_cljs$core$async11213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11213";

cljs.core.async.t_cljs$core$async11213.cljs$lang$ctorPrWriter = (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async11213");
});

cljs.core.async.__GT_t_cljs$core$async11213 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11213(alt_handler__$1,flag__$1,cb__$1,meta11214){
return (new cljs.core.async.t_cljs$core$async11213(alt_handler__$1,flag__$1,cb__$1,meta11214));
});

}

return (new cljs.core.async.t_cljs$core$async11213(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11216_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11216_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11217_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11217_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6020__auto__ = wport;
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11218 = (i + (1));
i = G__11218;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6020__auto__ = ret;
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6008__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6008__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6008__auto__;
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
var args__7102__auto__ = [];
var len__7095__auto___11224 = arguments.length;
var i__7096__auto___11225 = (0);
while(true){
if((i__7096__auto___11225 < len__7095__auto___11224)){
args__7102__auto__.push((arguments[i__7096__auto___11225]));

var G__11226 = (i__7096__auto___11225 + (1));
i__7096__auto___11225 = G__11226;
continue;
} else {
}
break;
}

var argseq__7103__auto__ = ((((1) < args__7102__auto__.length))?(new cljs.core.IndexedSeq(args__7102__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7103__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11221){
var map__11222 = p__11221;
var map__11222__$1 = ((((!((map__11222 == null)))?((((map__11222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11222):map__11222);
var opts = map__11222__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11219){
var G__11220 = cljs.core.first.call(null,seq11219);
var seq11219__$1 = cljs.core.next.call(null,seq11219);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11220,seq11219__$1);
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
var args11227 = [];
var len__7095__auto___11277 = arguments.length;
var i__7096__auto___11278 = (0);
while(true){
if((i__7096__auto___11278 < len__7095__auto___11277)){
args11227.push((arguments[i__7096__auto___11278]));

var G__11279 = (i__7096__auto___11278 + (1));
i__7096__auto___11278 = G__11279;
continue;
} else {
}
break;
}

var G__11229 = args11227.length;
switch (G__11229) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11227.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11114__auto___11281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___11281){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___11281){
return (function (state_11253){
var state_val_11254 = (state_11253[(1)]);
if((state_val_11254 === (7))){
var inst_11249 = (state_11253[(2)]);
var state_11253__$1 = state_11253;
var statearr_11255_11282 = state_11253__$1;
(statearr_11255_11282[(2)] = inst_11249);

(statearr_11255_11282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (1))){
var state_11253__$1 = state_11253;
var statearr_11256_11283 = state_11253__$1;
(statearr_11256_11283[(2)] = null);

(statearr_11256_11283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (4))){
var inst_11232 = (state_11253[(7)]);
var inst_11232__$1 = (state_11253[(2)]);
var inst_11233 = (inst_11232__$1 == null);
var state_11253__$1 = (function (){var statearr_11257 = state_11253;
(statearr_11257[(7)] = inst_11232__$1);

return statearr_11257;
})();
if(cljs.core.truth_(inst_11233)){
var statearr_11258_11284 = state_11253__$1;
(statearr_11258_11284[(1)] = (5));

} else {
var statearr_11259_11285 = state_11253__$1;
(statearr_11259_11285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (13))){
var state_11253__$1 = state_11253;
var statearr_11260_11286 = state_11253__$1;
(statearr_11260_11286[(2)] = null);

(statearr_11260_11286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (6))){
var inst_11232 = (state_11253[(7)]);
var state_11253__$1 = state_11253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11253__$1,(11),to,inst_11232);
} else {
if((state_val_11254 === (3))){
var inst_11251 = (state_11253[(2)]);
var state_11253__$1 = state_11253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11253__$1,inst_11251);
} else {
if((state_val_11254 === (12))){
var state_11253__$1 = state_11253;
var statearr_11261_11287 = state_11253__$1;
(statearr_11261_11287[(2)] = null);

(statearr_11261_11287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (2))){
var state_11253__$1 = state_11253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11253__$1,(4),from);
} else {
if((state_val_11254 === (11))){
var inst_11242 = (state_11253[(2)]);
var state_11253__$1 = state_11253;
if(cljs.core.truth_(inst_11242)){
var statearr_11262_11288 = state_11253__$1;
(statearr_11262_11288[(1)] = (12));

} else {
var statearr_11263_11289 = state_11253__$1;
(statearr_11263_11289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (9))){
var state_11253__$1 = state_11253;
var statearr_11264_11290 = state_11253__$1;
(statearr_11264_11290[(2)] = null);

(statearr_11264_11290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (5))){
var state_11253__$1 = state_11253;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11265_11291 = state_11253__$1;
(statearr_11265_11291[(1)] = (8));

} else {
var statearr_11266_11292 = state_11253__$1;
(statearr_11266_11292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (14))){
var inst_11247 = (state_11253[(2)]);
var state_11253__$1 = state_11253;
var statearr_11267_11293 = state_11253__$1;
(statearr_11267_11293[(2)] = inst_11247);

(statearr_11267_11293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (10))){
var inst_11239 = (state_11253[(2)]);
var state_11253__$1 = state_11253;
var statearr_11268_11294 = state_11253__$1;
(statearr_11268_11294[(2)] = inst_11239);

(statearr_11268_11294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11254 === (8))){
var inst_11236 = cljs.core.async.close_BANG_.call(null,to);
var state_11253__$1 = state_11253;
var statearr_11269_11295 = state_11253__$1;
(statearr_11269_11295[(2)] = inst_11236);

(statearr_11269_11295[(1)] = (10));


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
});})(c__11114__auto___11281))
;
return ((function (switch__11002__auto__,c__11114__auto___11281){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_11273 = [null,null,null,null,null,null,null,null];
(statearr_11273[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_11273[(1)] = (1));

return statearr_11273;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_11253){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11274){if((e11274 instanceof Object)){
var ex__11006__auto__ = e11274;
var statearr_11275_11296 = state_11253;
(statearr_11275_11296[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11297 = state_11253;
state_11253 = G__11297;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_11253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_11253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___11281))
})();
var state__11116__auto__ = (function (){var statearr_11276 = f__11115__auto__.call(null);
(statearr_11276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___11281);

return statearr_11276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___11281))
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
return (function (p__11481){
var vec__11482 = p__11481;
var v = cljs.core.nth.call(null,vec__11482,(0),null);
var p = cljs.core.nth.call(null,vec__11482,(1),null);
var job = vec__11482;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11114__auto___11664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___11664,res,vec__11482,v,p,job,jobs,results){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___11664,res,vec__11482,v,p,job,jobs,results){
return (function (state_11487){
var state_val_11488 = (state_11487[(1)]);
if((state_val_11488 === (1))){
var state_11487__$1 = state_11487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11487__$1,(2),res,v);
} else {
if((state_val_11488 === (2))){
var inst_11484 = (state_11487[(2)]);
var inst_11485 = cljs.core.async.close_BANG_.call(null,res);
var state_11487__$1 = (function (){var statearr_11489 = state_11487;
(statearr_11489[(7)] = inst_11484);

return statearr_11489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11487__$1,inst_11485);
} else {
return null;
}
}
});})(c__11114__auto___11664,res,vec__11482,v,p,job,jobs,results))
;
return ((function (switch__11002__auto__,c__11114__auto___11664,res,vec__11482,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11493 = [null,null,null,null,null,null,null,null];
(statearr_11493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11493[(1)] = (1));

return statearr_11493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11487){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11494){if((e11494 instanceof Object)){
var ex__11006__auto__ = e11494;
var statearr_11495_11665 = state_11487;
(statearr_11495_11665[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11666 = state_11487;
state_11487 = G__11666;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___11664,res,vec__11482,v,p,job,jobs,results))
})();
var state__11116__auto__ = (function (){var statearr_11496 = f__11115__auto__.call(null);
(statearr_11496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___11664);

return statearr_11496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___11664,res,vec__11482,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11497){
var vec__11498 = p__11497;
var v = cljs.core.nth.call(null,vec__11498,(0),null);
var p = cljs.core.nth.call(null,vec__11498,(1),null);
var job = vec__11498;
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
var n__6935__auto___11667 = n;
var __11668 = (0);
while(true){
if((__11668 < n__6935__auto___11667)){
var G__11499_11669 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11499_11669) {
case "compute":
var c__11114__auto___11671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11668,c__11114__auto___11671,G__11499_11669,n__6935__auto___11667,jobs,results,process,async){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (__11668,c__11114__auto___11671,G__11499_11669,n__6935__auto___11667,jobs,results,process,async){
return (function (state_11512){
var state_val_11513 = (state_11512[(1)]);
if((state_val_11513 === (1))){
var state_11512__$1 = state_11512;
var statearr_11514_11672 = state_11512__$1;
(statearr_11514_11672[(2)] = null);

(statearr_11514_11672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (2))){
var state_11512__$1 = state_11512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11512__$1,(4),jobs);
} else {
if((state_val_11513 === (3))){
var inst_11510 = (state_11512[(2)]);
var state_11512__$1 = state_11512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11512__$1,inst_11510);
} else {
if((state_val_11513 === (4))){
var inst_11502 = (state_11512[(2)]);
var inst_11503 = process.call(null,inst_11502);
var state_11512__$1 = state_11512;
if(cljs.core.truth_(inst_11503)){
var statearr_11515_11673 = state_11512__$1;
(statearr_11515_11673[(1)] = (5));

} else {
var statearr_11516_11674 = state_11512__$1;
(statearr_11516_11674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (5))){
var state_11512__$1 = state_11512;
var statearr_11517_11675 = state_11512__$1;
(statearr_11517_11675[(2)] = null);

(statearr_11517_11675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (6))){
var state_11512__$1 = state_11512;
var statearr_11518_11676 = state_11512__$1;
(statearr_11518_11676[(2)] = null);

(statearr_11518_11676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (7))){
var inst_11508 = (state_11512[(2)]);
var state_11512__$1 = state_11512;
var statearr_11519_11677 = state_11512__$1;
(statearr_11519_11677[(2)] = inst_11508);

(statearr_11519_11677[(1)] = (3));


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
});})(__11668,c__11114__auto___11671,G__11499_11669,n__6935__auto___11667,jobs,results,process,async))
;
return ((function (__11668,switch__11002__auto__,c__11114__auto___11671,G__11499_11669,n__6935__auto___11667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11523 = [null,null,null,null,null,null,null];
(statearr_11523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11523[(1)] = (1));

return statearr_11523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11512){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11524){if((e11524 instanceof Object)){
var ex__11006__auto__ = e11524;
var statearr_11525_11678 = state_11512;
(statearr_11525_11678[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11679 = state_11512;
state_11512 = G__11679;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
;})(__11668,switch__11002__auto__,c__11114__auto___11671,G__11499_11669,n__6935__auto___11667,jobs,results,process,async))
})();
var state__11116__auto__ = (function (){var statearr_11526 = f__11115__auto__.call(null);
(statearr_11526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___11671);

return statearr_11526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(__11668,c__11114__auto___11671,G__11499_11669,n__6935__auto___11667,jobs,results,process,async))
);


break;
case "async":
var c__11114__auto___11680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11668,c__11114__auto___11680,G__11499_11669,n__6935__auto___11667,jobs,results,process,async){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (__11668,c__11114__auto___11680,G__11499_11669,n__6935__auto___11667,jobs,results,process,async){
return (function (state_11539){
var state_val_11540 = (state_11539[(1)]);
if((state_val_11540 === (1))){
var state_11539__$1 = state_11539;
var statearr_11541_11681 = state_11539__$1;
(statearr_11541_11681[(2)] = null);

(statearr_11541_11681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (2))){
var state_11539__$1 = state_11539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11539__$1,(4),jobs);
} else {
if((state_val_11540 === (3))){
var inst_11537 = (state_11539[(2)]);
var state_11539__$1 = state_11539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11539__$1,inst_11537);
} else {
if((state_val_11540 === (4))){
var inst_11529 = (state_11539[(2)]);
var inst_11530 = async.call(null,inst_11529);
var state_11539__$1 = state_11539;
if(cljs.core.truth_(inst_11530)){
var statearr_11542_11682 = state_11539__$1;
(statearr_11542_11682[(1)] = (5));

} else {
var statearr_11543_11683 = state_11539__$1;
(statearr_11543_11683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (5))){
var state_11539__$1 = state_11539;
var statearr_11544_11684 = state_11539__$1;
(statearr_11544_11684[(2)] = null);

(statearr_11544_11684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (6))){
var state_11539__$1 = state_11539;
var statearr_11545_11685 = state_11539__$1;
(statearr_11545_11685[(2)] = null);

(statearr_11545_11685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (7))){
var inst_11535 = (state_11539[(2)]);
var state_11539__$1 = state_11539;
var statearr_11546_11686 = state_11539__$1;
(statearr_11546_11686[(2)] = inst_11535);

(statearr_11546_11686[(1)] = (3));


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
});})(__11668,c__11114__auto___11680,G__11499_11669,n__6935__auto___11667,jobs,results,process,async))
;
return ((function (__11668,switch__11002__auto__,c__11114__auto___11680,G__11499_11669,n__6935__auto___11667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11550 = [null,null,null,null,null,null,null];
(statearr_11550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11550[(1)] = (1));

return statearr_11550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11539){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11551){if((e11551 instanceof Object)){
var ex__11006__auto__ = e11551;
var statearr_11552_11687 = state_11539;
(statearr_11552_11687[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11688 = state_11539;
state_11539 = G__11688;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
;})(__11668,switch__11002__auto__,c__11114__auto___11680,G__11499_11669,n__6935__auto___11667,jobs,results,process,async))
})();
var state__11116__auto__ = (function (){var statearr_11553 = f__11115__auto__.call(null);
(statearr_11553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___11680);

return statearr_11553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(__11668,c__11114__auto___11680,G__11499_11669,n__6935__auto___11667,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11689 = (__11668 + (1));
__11668 = G__11689;
continue;
} else {
}
break;
}

var c__11114__auto___11690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___11690,jobs,results,process,async){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___11690,jobs,results,process,async){
return (function (state_11575){
var state_val_11576 = (state_11575[(1)]);
if((state_val_11576 === (1))){
var state_11575__$1 = state_11575;
var statearr_11577_11691 = state_11575__$1;
(statearr_11577_11691[(2)] = null);

(statearr_11577_11691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (2))){
var state_11575__$1 = state_11575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11575__$1,(4),from);
} else {
if((state_val_11576 === (3))){
var inst_11573 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11575__$1,inst_11573);
} else {
if((state_val_11576 === (4))){
var inst_11556 = (state_11575[(7)]);
var inst_11556__$1 = (state_11575[(2)]);
var inst_11557 = (inst_11556__$1 == null);
var state_11575__$1 = (function (){var statearr_11578 = state_11575;
(statearr_11578[(7)] = inst_11556__$1);

return statearr_11578;
})();
if(cljs.core.truth_(inst_11557)){
var statearr_11579_11692 = state_11575__$1;
(statearr_11579_11692[(1)] = (5));

} else {
var statearr_11580_11693 = state_11575__$1;
(statearr_11580_11693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (5))){
var inst_11559 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11575__$1 = state_11575;
var statearr_11581_11694 = state_11575__$1;
(statearr_11581_11694[(2)] = inst_11559);

(statearr_11581_11694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (6))){
var inst_11561 = (state_11575[(8)]);
var inst_11556 = (state_11575[(7)]);
var inst_11561__$1 = cljs.core.async.chan.call(null,(1));
var inst_11562 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11563 = [inst_11556,inst_11561__$1];
var inst_11564 = (new cljs.core.PersistentVector(null,2,(5),inst_11562,inst_11563,null));
var state_11575__$1 = (function (){var statearr_11582 = state_11575;
(statearr_11582[(8)] = inst_11561__$1);

return statearr_11582;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11575__$1,(8),jobs,inst_11564);
} else {
if((state_val_11576 === (7))){
var inst_11571 = (state_11575[(2)]);
var state_11575__$1 = state_11575;
var statearr_11583_11695 = state_11575__$1;
(statearr_11583_11695[(2)] = inst_11571);

(statearr_11583_11695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11576 === (8))){
var inst_11561 = (state_11575[(8)]);
var inst_11566 = (state_11575[(2)]);
var state_11575__$1 = (function (){var statearr_11584 = state_11575;
(statearr_11584[(9)] = inst_11566);

return statearr_11584;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11575__$1,(9),results,inst_11561);
} else {
if((state_val_11576 === (9))){
var inst_11568 = (state_11575[(2)]);
var state_11575__$1 = (function (){var statearr_11585 = state_11575;
(statearr_11585[(10)] = inst_11568);

return statearr_11585;
})();
var statearr_11586_11696 = state_11575__$1;
(statearr_11586_11696[(2)] = null);

(statearr_11586_11696[(1)] = (2));


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
});})(c__11114__auto___11690,jobs,results,process,async))
;
return ((function (switch__11002__auto__,c__11114__auto___11690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11590[(1)] = (1));

return statearr_11590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11575){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11591){if((e11591 instanceof Object)){
var ex__11006__auto__ = e11591;
var statearr_11592_11697 = state_11575;
(statearr_11592_11697[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11698 = state_11575;
state_11575 = G__11698;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___11690,jobs,results,process,async))
})();
var state__11116__auto__ = (function (){var statearr_11593 = f__11115__auto__.call(null);
(statearr_11593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___11690);

return statearr_11593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___11690,jobs,results,process,async))
);


var c__11114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto__,jobs,results,process,async){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto__,jobs,results,process,async){
return (function (state_11631){
var state_val_11632 = (state_11631[(1)]);
if((state_val_11632 === (7))){
var inst_11627 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11633_11699 = state_11631__$1;
(statearr_11633_11699[(2)] = inst_11627);

(statearr_11633_11699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (20))){
var state_11631__$1 = state_11631;
var statearr_11634_11700 = state_11631__$1;
(statearr_11634_11700[(2)] = null);

(statearr_11634_11700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (1))){
var state_11631__$1 = state_11631;
var statearr_11635_11701 = state_11631__$1;
(statearr_11635_11701[(2)] = null);

(statearr_11635_11701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (4))){
var inst_11596 = (state_11631[(7)]);
var inst_11596__$1 = (state_11631[(2)]);
var inst_11597 = (inst_11596__$1 == null);
var state_11631__$1 = (function (){var statearr_11636 = state_11631;
(statearr_11636[(7)] = inst_11596__$1);

return statearr_11636;
})();
if(cljs.core.truth_(inst_11597)){
var statearr_11637_11702 = state_11631__$1;
(statearr_11637_11702[(1)] = (5));

} else {
var statearr_11638_11703 = state_11631__$1;
(statearr_11638_11703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (15))){
var inst_11609 = (state_11631[(8)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11631__$1,(18),to,inst_11609);
} else {
if((state_val_11632 === (21))){
var inst_11622 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11639_11704 = state_11631__$1;
(statearr_11639_11704[(2)] = inst_11622);

(statearr_11639_11704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (13))){
var inst_11624 = (state_11631[(2)]);
var state_11631__$1 = (function (){var statearr_11640 = state_11631;
(statearr_11640[(9)] = inst_11624);

return statearr_11640;
})();
var statearr_11641_11705 = state_11631__$1;
(statearr_11641_11705[(2)] = null);

(statearr_11641_11705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (6))){
var inst_11596 = (state_11631[(7)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11631__$1,(11),inst_11596);
} else {
if((state_val_11632 === (17))){
var inst_11617 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
if(cljs.core.truth_(inst_11617)){
var statearr_11642_11706 = state_11631__$1;
(statearr_11642_11706[(1)] = (19));

} else {
var statearr_11643_11707 = state_11631__$1;
(statearr_11643_11707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (3))){
var inst_11629 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11631__$1,inst_11629);
} else {
if((state_val_11632 === (12))){
var inst_11606 = (state_11631[(10)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11631__$1,(14),inst_11606);
} else {
if((state_val_11632 === (2))){
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11631__$1,(4),results);
} else {
if((state_val_11632 === (19))){
var state_11631__$1 = state_11631;
var statearr_11644_11708 = state_11631__$1;
(statearr_11644_11708[(2)] = null);

(statearr_11644_11708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (11))){
var inst_11606 = (state_11631[(2)]);
var state_11631__$1 = (function (){var statearr_11645 = state_11631;
(statearr_11645[(10)] = inst_11606);

return statearr_11645;
})();
var statearr_11646_11709 = state_11631__$1;
(statearr_11646_11709[(2)] = null);

(statearr_11646_11709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (9))){
var state_11631__$1 = state_11631;
var statearr_11647_11710 = state_11631__$1;
(statearr_11647_11710[(2)] = null);

(statearr_11647_11710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (5))){
var state_11631__$1 = state_11631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11648_11711 = state_11631__$1;
(statearr_11648_11711[(1)] = (8));

} else {
var statearr_11649_11712 = state_11631__$1;
(statearr_11649_11712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (14))){
var inst_11611 = (state_11631[(11)]);
var inst_11609 = (state_11631[(8)]);
var inst_11609__$1 = (state_11631[(2)]);
var inst_11610 = (inst_11609__$1 == null);
var inst_11611__$1 = cljs.core.not.call(null,inst_11610);
var state_11631__$1 = (function (){var statearr_11650 = state_11631;
(statearr_11650[(11)] = inst_11611__$1);

(statearr_11650[(8)] = inst_11609__$1);

return statearr_11650;
})();
if(inst_11611__$1){
var statearr_11651_11713 = state_11631__$1;
(statearr_11651_11713[(1)] = (15));

} else {
var statearr_11652_11714 = state_11631__$1;
(statearr_11652_11714[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (16))){
var inst_11611 = (state_11631[(11)]);
var state_11631__$1 = state_11631;
var statearr_11653_11715 = state_11631__$1;
(statearr_11653_11715[(2)] = inst_11611);

(statearr_11653_11715[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (10))){
var inst_11603 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11654_11716 = state_11631__$1;
(statearr_11654_11716[(2)] = inst_11603);

(statearr_11654_11716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (18))){
var inst_11614 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11655_11717 = state_11631__$1;
(statearr_11655_11717[(2)] = inst_11614);

(statearr_11655_11717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (8))){
var inst_11600 = cljs.core.async.close_BANG_.call(null,to);
var state_11631__$1 = state_11631;
var statearr_11656_11718 = state_11631__$1;
(statearr_11656_11718[(2)] = inst_11600);

(statearr_11656_11718[(1)] = (10));


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
});})(c__11114__auto__,jobs,results,process,async))
;
return ((function (switch__11002__auto__,c__11114__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_11660 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__);

(statearr_11660[(1)] = (1));

return statearr_11660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1 = (function (state_11631){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11661){if((e11661 instanceof Object)){
var ex__11006__auto__ = e11661;
var statearr_11662_11719 = state_11631;
(statearr_11662_11719[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11720 = state_11631;
state_11631 = G__11720;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__ = function(state_11631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1.call(this,state_11631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto__,jobs,results,process,async))
})();
var state__11116__auto__ = (function (){var statearr_11663 = f__11115__auto__.call(null);
(statearr_11663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto__);

return statearr_11663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto__,jobs,results,process,async))
);

return c__11114__auto__;
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
var args11721 = [];
var len__7095__auto___11724 = arguments.length;
var i__7096__auto___11725 = (0);
while(true){
if((i__7096__auto___11725 < len__7095__auto___11724)){
args11721.push((arguments[i__7096__auto___11725]));

var G__11726 = (i__7096__auto___11725 + (1));
i__7096__auto___11725 = G__11726;
continue;
} else {
}
break;
}

var G__11723 = args11721.length;
switch (G__11723) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11721.length)].join('')));

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
var args11728 = [];
var len__7095__auto___11731 = arguments.length;
var i__7096__auto___11732 = (0);
while(true){
if((i__7096__auto___11732 < len__7095__auto___11731)){
args11728.push((arguments[i__7096__auto___11732]));

var G__11733 = (i__7096__auto___11732 + (1));
i__7096__auto___11732 = G__11733;
continue;
} else {
}
break;
}

var G__11730 = args11728.length;
switch (G__11730) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11728.length)].join('')));

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
var args11735 = [];
var len__7095__auto___11788 = arguments.length;
var i__7096__auto___11789 = (0);
while(true){
if((i__7096__auto___11789 < len__7095__auto___11788)){
args11735.push((arguments[i__7096__auto___11789]));

var G__11790 = (i__7096__auto___11789 + (1));
i__7096__auto___11789 = G__11790;
continue;
} else {
}
break;
}

var G__11737 = args11735.length;
switch (G__11737) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11735.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11114__auto___11792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___11792,tc,fc){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___11792,tc,fc){
return (function (state_11763){
var state_val_11764 = (state_11763[(1)]);
if((state_val_11764 === (7))){
var inst_11759 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
var statearr_11765_11793 = state_11763__$1;
(statearr_11765_11793[(2)] = inst_11759);

(statearr_11765_11793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (1))){
var state_11763__$1 = state_11763;
var statearr_11766_11794 = state_11763__$1;
(statearr_11766_11794[(2)] = null);

(statearr_11766_11794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (4))){
var inst_11740 = (state_11763[(7)]);
var inst_11740__$1 = (state_11763[(2)]);
var inst_11741 = (inst_11740__$1 == null);
var state_11763__$1 = (function (){var statearr_11767 = state_11763;
(statearr_11767[(7)] = inst_11740__$1);

return statearr_11767;
})();
if(cljs.core.truth_(inst_11741)){
var statearr_11768_11795 = state_11763__$1;
(statearr_11768_11795[(1)] = (5));

} else {
var statearr_11769_11796 = state_11763__$1;
(statearr_11769_11796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (13))){
var state_11763__$1 = state_11763;
var statearr_11770_11797 = state_11763__$1;
(statearr_11770_11797[(2)] = null);

(statearr_11770_11797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (6))){
var inst_11740 = (state_11763[(7)]);
var inst_11746 = p.call(null,inst_11740);
var state_11763__$1 = state_11763;
if(cljs.core.truth_(inst_11746)){
var statearr_11771_11798 = state_11763__$1;
(statearr_11771_11798[(1)] = (9));

} else {
var statearr_11772_11799 = state_11763__$1;
(statearr_11772_11799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (3))){
var inst_11761 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11763__$1,inst_11761);
} else {
if((state_val_11764 === (12))){
var state_11763__$1 = state_11763;
var statearr_11773_11800 = state_11763__$1;
(statearr_11773_11800[(2)] = null);

(statearr_11773_11800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (2))){
var state_11763__$1 = state_11763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11763__$1,(4),ch);
} else {
if((state_val_11764 === (11))){
var inst_11740 = (state_11763[(7)]);
var inst_11750 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11763__$1,(8),inst_11750,inst_11740);
} else {
if((state_val_11764 === (9))){
var state_11763__$1 = state_11763;
var statearr_11774_11801 = state_11763__$1;
(statearr_11774_11801[(2)] = tc);

(statearr_11774_11801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (5))){
var inst_11743 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11744 = cljs.core.async.close_BANG_.call(null,fc);
var state_11763__$1 = (function (){var statearr_11775 = state_11763;
(statearr_11775[(8)] = inst_11743);

return statearr_11775;
})();
var statearr_11776_11802 = state_11763__$1;
(statearr_11776_11802[(2)] = inst_11744);

(statearr_11776_11802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (14))){
var inst_11757 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
var statearr_11777_11803 = state_11763__$1;
(statearr_11777_11803[(2)] = inst_11757);

(statearr_11777_11803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (10))){
var state_11763__$1 = state_11763;
var statearr_11778_11804 = state_11763__$1;
(statearr_11778_11804[(2)] = fc);

(statearr_11778_11804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (8))){
var inst_11752 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
if(cljs.core.truth_(inst_11752)){
var statearr_11779_11805 = state_11763__$1;
(statearr_11779_11805[(1)] = (12));

} else {
var statearr_11780_11806 = state_11763__$1;
(statearr_11780_11806[(1)] = (13));

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
});})(c__11114__auto___11792,tc,fc))
;
return ((function (switch__11002__auto__,c__11114__auto___11792,tc,fc){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_11784 = [null,null,null,null,null,null,null,null,null];
(statearr_11784[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_11784[(1)] = (1));

return statearr_11784;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_11763){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11785){if((e11785 instanceof Object)){
var ex__11006__auto__ = e11785;
var statearr_11786_11807 = state_11763;
(statearr_11786_11807[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11808 = state_11763;
state_11763 = G__11808;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_11763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_11763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___11792,tc,fc))
})();
var state__11116__auto__ = (function (){var statearr_11787 = f__11115__auto__.call(null);
(statearr_11787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___11792);

return statearr_11787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___11792,tc,fc))
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
var c__11114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto__){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto__){
return (function (state_11872){
var state_val_11873 = (state_11872[(1)]);
if((state_val_11873 === (7))){
var inst_11868 = (state_11872[(2)]);
var state_11872__$1 = state_11872;
var statearr_11874_11895 = state_11872__$1;
(statearr_11874_11895[(2)] = inst_11868);

(statearr_11874_11895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11873 === (1))){
var inst_11852 = init;
var state_11872__$1 = (function (){var statearr_11875 = state_11872;
(statearr_11875[(7)] = inst_11852);

return statearr_11875;
})();
var statearr_11876_11896 = state_11872__$1;
(statearr_11876_11896[(2)] = null);

(statearr_11876_11896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11873 === (4))){
var inst_11855 = (state_11872[(8)]);
var inst_11855__$1 = (state_11872[(2)]);
var inst_11856 = (inst_11855__$1 == null);
var state_11872__$1 = (function (){var statearr_11877 = state_11872;
(statearr_11877[(8)] = inst_11855__$1);

return statearr_11877;
})();
if(cljs.core.truth_(inst_11856)){
var statearr_11878_11897 = state_11872__$1;
(statearr_11878_11897[(1)] = (5));

} else {
var statearr_11879_11898 = state_11872__$1;
(statearr_11879_11898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11873 === (6))){
var inst_11855 = (state_11872[(8)]);
var inst_11852 = (state_11872[(7)]);
var inst_11859 = (state_11872[(9)]);
var inst_11859__$1 = f.call(null,inst_11852,inst_11855);
var inst_11860 = cljs.core.reduced_QMARK_.call(null,inst_11859__$1);
var state_11872__$1 = (function (){var statearr_11880 = state_11872;
(statearr_11880[(9)] = inst_11859__$1);

return statearr_11880;
})();
if(inst_11860){
var statearr_11881_11899 = state_11872__$1;
(statearr_11881_11899[(1)] = (8));

} else {
var statearr_11882_11900 = state_11872__$1;
(statearr_11882_11900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11873 === (3))){
var inst_11870 = (state_11872[(2)]);
var state_11872__$1 = state_11872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11872__$1,inst_11870);
} else {
if((state_val_11873 === (2))){
var state_11872__$1 = state_11872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11872__$1,(4),ch);
} else {
if((state_val_11873 === (9))){
var inst_11859 = (state_11872[(9)]);
var inst_11852 = inst_11859;
var state_11872__$1 = (function (){var statearr_11883 = state_11872;
(statearr_11883[(7)] = inst_11852);

return statearr_11883;
})();
var statearr_11884_11901 = state_11872__$1;
(statearr_11884_11901[(2)] = null);

(statearr_11884_11901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11873 === (5))){
var inst_11852 = (state_11872[(7)]);
var state_11872__$1 = state_11872;
var statearr_11885_11902 = state_11872__$1;
(statearr_11885_11902[(2)] = inst_11852);

(statearr_11885_11902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11873 === (10))){
var inst_11866 = (state_11872[(2)]);
var state_11872__$1 = state_11872;
var statearr_11886_11903 = state_11872__$1;
(statearr_11886_11903[(2)] = inst_11866);

(statearr_11886_11903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11873 === (8))){
var inst_11859 = (state_11872[(9)]);
var inst_11862 = cljs.core.deref.call(null,inst_11859);
var state_11872__$1 = state_11872;
var statearr_11887_11904 = state_11872__$1;
(statearr_11887_11904[(2)] = inst_11862);

(statearr_11887_11904[(1)] = (10));


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
});})(c__11114__auto__))
;
return ((function (switch__11002__auto__,c__11114__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11003__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11003__auto____0 = (function (){
var statearr_11891 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11891[(0)] = cljs$core$async$reduce_$_state_machine__11003__auto__);

(statearr_11891[(1)] = (1));

return statearr_11891;
});
var cljs$core$async$reduce_$_state_machine__11003__auto____1 = (function (state_11872){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11892){if((e11892 instanceof Object)){
var ex__11006__auto__ = e11892;
var statearr_11893_11905 = state_11872;
(statearr_11893_11905[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11906 = state_11872;
state_11872 = G__11906;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11003__auto__ = function(state_11872){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11003__auto____1.call(this,state_11872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11003__auto____0;
cljs$core$async$reduce_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11003__auto____1;
return cljs$core$async$reduce_$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto__))
})();
var state__11116__auto__ = (function (){var statearr_11894 = f__11115__auto__.call(null);
(statearr_11894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto__);

return statearr_11894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto__))
);

return c__11114__auto__;
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
var args11907 = [];
var len__7095__auto___11959 = arguments.length;
var i__7096__auto___11960 = (0);
while(true){
if((i__7096__auto___11960 < len__7095__auto___11959)){
args11907.push((arguments[i__7096__auto___11960]));

var G__11961 = (i__7096__auto___11960 + (1));
i__7096__auto___11960 = G__11961;
continue;
} else {
}
break;
}

var G__11909 = args11907.length;
switch (G__11909) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11907.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto__){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto__){
return (function (state_11934){
var state_val_11935 = (state_11934[(1)]);
if((state_val_11935 === (7))){
var inst_11916 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
var statearr_11936_11963 = state_11934__$1;
(statearr_11936_11963[(2)] = inst_11916);

(statearr_11936_11963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (1))){
var inst_11910 = cljs.core.seq.call(null,coll);
var inst_11911 = inst_11910;
var state_11934__$1 = (function (){var statearr_11937 = state_11934;
(statearr_11937[(7)] = inst_11911);

return statearr_11937;
})();
var statearr_11938_11964 = state_11934__$1;
(statearr_11938_11964[(2)] = null);

(statearr_11938_11964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (4))){
var inst_11911 = (state_11934[(7)]);
var inst_11914 = cljs.core.first.call(null,inst_11911);
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11934__$1,(7),ch,inst_11914);
} else {
if((state_val_11935 === (13))){
var inst_11928 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
var statearr_11939_11965 = state_11934__$1;
(statearr_11939_11965[(2)] = inst_11928);

(statearr_11939_11965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (6))){
var inst_11919 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
if(cljs.core.truth_(inst_11919)){
var statearr_11940_11966 = state_11934__$1;
(statearr_11940_11966[(1)] = (8));

} else {
var statearr_11941_11967 = state_11934__$1;
(statearr_11941_11967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (3))){
var inst_11932 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11934__$1,inst_11932);
} else {
if((state_val_11935 === (12))){
var state_11934__$1 = state_11934;
var statearr_11942_11968 = state_11934__$1;
(statearr_11942_11968[(2)] = null);

(statearr_11942_11968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (2))){
var inst_11911 = (state_11934[(7)]);
var state_11934__$1 = state_11934;
if(cljs.core.truth_(inst_11911)){
var statearr_11943_11969 = state_11934__$1;
(statearr_11943_11969[(1)] = (4));

} else {
var statearr_11944_11970 = state_11934__$1;
(statearr_11944_11970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (11))){
var inst_11925 = cljs.core.async.close_BANG_.call(null,ch);
var state_11934__$1 = state_11934;
var statearr_11945_11971 = state_11934__$1;
(statearr_11945_11971[(2)] = inst_11925);

(statearr_11945_11971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (9))){
var state_11934__$1 = state_11934;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11946_11972 = state_11934__$1;
(statearr_11946_11972[(1)] = (11));

} else {
var statearr_11947_11973 = state_11934__$1;
(statearr_11947_11973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (5))){
var inst_11911 = (state_11934[(7)]);
var state_11934__$1 = state_11934;
var statearr_11948_11974 = state_11934__$1;
(statearr_11948_11974[(2)] = inst_11911);

(statearr_11948_11974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (10))){
var inst_11930 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
var statearr_11949_11975 = state_11934__$1;
(statearr_11949_11975[(2)] = inst_11930);

(statearr_11949_11975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (8))){
var inst_11911 = (state_11934[(7)]);
var inst_11921 = cljs.core.next.call(null,inst_11911);
var inst_11911__$1 = inst_11921;
var state_11934__$1 = (function (){var statearr_11950 = state_11934;
(statearr_11950[(7)] = inst_11911__$1);

return statearr_11950;
})();
var statearr_11951_11976 = state_11934__$1;
(statearr_11951_11976[(2)] = null);

(statearr_11951_11976[(1)] = (2));


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
});})(c__11114__auto__))
;
return ((function (switch__11002__auto__,c__11114__auto__){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_11955 = [null,null,null,null,null,null,null,null];
(statearr_11955[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_11955[(1)] = (1));

return statearr_11955;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_11934){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_11934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e11956){if((e11956 instanceof Object)){
var ex__11006__auto__ = e11956;
var statearr_11957_11977 = state_11934;
(statearr_11957_11977[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11978 = state_11934;
state_11934 = G__11978;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_11934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_11934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto__))
})();
var state__11116__auto__ = (function (){var statearr_11958 = f__11115__auto__.call(null);
(statearr_11958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto__);

return statearr_11958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto__))
);

return c__11114__auto__;
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
var x__6683__auto__ = (((_ == null))?null:_);
var m__6684__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,_);
} else {
var m__6684__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,_);
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
var x__6683__auto__ = (((m == null))?null:m);
var m__6684__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6684__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6683__auto__ = (((m == null))?null:m);
var m__6684__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,m,ch);
} else {
var m__6684__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,m,ch);
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
var x__6683__auto__ = (((m == null))?null:m);
var m__6684__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,m);
} else {
var m__6684__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async12200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12200 = (function (mult,ch,cs,meta12201){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12201 = meta12201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12202,meta12201__$1){
var self__ = this;
var _12202__$1 = this;
return (new cljs.core.async.t_cljs$core$async12200(self__.mult,self__.ch,self__.cs,meta12201__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12202){
var self__ = this;
var _12202__$1 = this;
return self__.meta12201;
});})(cs))
;

cljs.core.async.t_cljs$core$async12200.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12200.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12200.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12200.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12200.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12200.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12201","meta12201",31648958,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12200";

cljs.core.async.t_cljs$core$async12200.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async12200");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12200 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12200(mult__$1,ch__$1,cs__$1,meta12201){
return (new cljs.core.async.t_cljs$core$async12200(mult__$1,ch__$1,cs__$1,meta12201));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12200(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11114__auto___12421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___12421,cs,m,dchan,dctr,done){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___12421,cs,m,dchan,dctr,done){
return (function (state_12333){
var state_val_12334 = (state_12333[(1)]);
if((state_val_12334 === (7))){
var inst_12329 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12335_12422 = state_12333__$1;
(statearr_12335_12422[(2)] = inst_12329);

(statearr_12335_12422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (20))){
var inst_12234 = (state_12333[(7)]);
var inst_12244 = cljs.core.first.call(null,inst_12234);
var inst_12245 = cljs.core.nth.call(null,inst_12244,(0),null);
var inst_12246 = cljs.core.nth.call(null,inst_12244,(1),null);
var state_12333__$1 = (function (){var statearr_12336 = state_12333;
(statearr_12336[(8)] = inst_12245);

return statearr_12336;
})();
if(cljs.core.truth_(inst_12246)){
var statearr_12337_12423 = state_12333__$1;
(statearr_12337_12423[(1)] = (22));

} else {
var statearr_12338_12424 = state_12333__$1;
(statearr_12338_12424[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (27))){
var inst_12281 = (state_12333[(9)]);
var inst_12276 = (state_12333[(10)]);
var inst_12274 = (state_12333[(11)]);
var inst_12205 = (state_12333[(12)]);
var inst_12281__$1 = cljs.core._nth.call(null,inst_12274,inst_12276);
var inst_12282 = cljs.core.async.put_BANG_.call(null,inst_12281__$1,inst_12205,done);
var state_12333__$1 = (function (){var statearr_12339 = state_12333;
(statearr_12339[(9)] = inst_12281__$1);

return statearr_12339;
})();
if(cljs.core.truth_(inst_12282)){
var statearr_12340_12425 = state_12333__$1;
(statearr_12340_12425[(1)] = (30));

} else {
var statearr_12341_12426 = state_12333__$1;
(statearr_12341_12426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (1))){
var state_12333__$1 = state_12333;
var statearr_12342_12427 = state_12333__$1;
(statearr_12342_12427[(2)] = null);

(statearr_12342_12427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (24))){
var inst_12234 = (state_12333[(7)]);
var inst_12251 = (state_12333[(2)]);
var inst_12252 = cljs.core.next.call(null,inst_12234);
var inst_12214 = inst_12252;
var inst_12215 = null;
var inst_12216 = (0);
var inst_12217 = (0);
var state_12333__$1 = (function (){var statearr_12343 = state_12333;
(statearr_12343[(13)] = inst_12216);

(statearr_12343[(14)] = inst_12251);

(statearr_12343[(15)] = inst_12214);

(statearr_12343[(16)] = inst_12217);

(statearr_12343[(17)] = inst_12215);

return statearr_12343;
})();
var statearr_12344_12428 = state_12333__$1;
(statearr_12344_12428[(2)] = null);

(statearr_12344_12428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (39))){
var state_12333__$1 = state_12333;
var statearr_12348_12429 = state_12333__$1;
(statearr_12348_12429[(2)] = null);

(statearr_12348_12429[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (4))){
var inst_12205 = (state_12333[(12)]);
var inst_12205__$1 = (state_12333[(2)]);
var inst_12206 = (inst_12205__$1 == null);
var state_12333__$1 = (function (){var statearr_12349 = state_12333;
(statearr_12349[(12)] = inst_12205__$1);

return statearr_12349;
})();
if(cljs.core.truth_(inst_12206)){
var statearr_12350_12430 = state_12333__$1;
(statearr_12350_12430[(1)] = (5));

} else {
var statearr_12351_12431 = state_12333__$1;
(statearr_12351_12431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (15))){
var inst_12216 = (state_12333[(13)]);
var inst_12214 = (state_12333[(15)]);
var inst_12217 = (state_12333[(16)]);
var inst_12215 = (state_12333[(17)]);
var inst_12230 = (state_12333[(2)]);
var inst_12231 = (inst_12217 + (1));
var tmp12345 = inst_12216;
var tmp12346 = inst_12214;
var tmp12347 = inst_12215;
var inst_12214__$1 = tmp12346;
var inst_12215__$1 = tmp12347;
var inst_12216__$1 = tmp12345;
var inst_12217__$1 = inst_12231;
var state_12333__$1 = (function (){var statearr_12352 = state_12333;
(statearr_12352[(13)] = inst_12216__$1);

(statearr_12352[(15)] = inst_12214__$1);

(statearr_12352[(16)] = inst_12217__$1);

(statearr_12352[(17)] = inst_12215__$1);

(statearr_12352[(18)] = inst_12230);

return statearr_12352;
})();
var statearr_12353_12432 = state_12333__$1;
(statearr_12353_12432[(2)] = null);

(statearr_12353_12432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (21))){
var inst_12255 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12357_12433 = state_12333__$1;
(statearr_12357_12433[(2)] = inst_12255);

(statearr_12357_12433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (31))){
var inst_12281 = (state_12333[(9)]);
var inst_12285 = done.call(null,null);
var inst_12286 = cljs.core.async.untap_STAR_.call(null,m,inst_12281);
var state_12333__$1 = (function (){var statearr_12358 = state_12333;
(statearr_12358[(19)] = inst_12285);

return statearr_12358;
})();
var statearr_12359_12434 = state_12333__$1;
(statearr_12359_12434[(2)] = inst_12286);

(statearr_12359_12434[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (32))){
var inst_12276 = (state_12333[(10)]);
var inst_12274 = (state_12333[(11)]);
var inst_12273 = (state_12333[(20)]);
var inst_12275 = (state_12333[(21)]);
var inst_12288 = (state_12333[(2)]);
var inst_12289 = (inst_12276 + (1));
var tmp12354 = inst_12274;
var tmp12355 = inst_12273;
var tmp12356 = inst_12275;
var inst_12273__$1 = tmp12355;
var inst_12274__$1 = tmp12354;
var inst_12275__$1 = tmp12356;
var inst_12276__$1 = inst_12289;
var state_12333__$1 = (function (){var statearr_12360 = state_12333;
(statearr_12360[(22)] = inst_12288);

(statearr_12360[(10)] = inst_12276__$1);

(statearr_12360[(11)] = inst_12274__$1);

(statearr_12360[(20)] = inst_12273__$1);

(statearr_12360[(21)] = inst_12275__$1);

return statearr_12360;
})();
var statearr_12361_12435 = state_12333__$1;
(statearr_12361_12435[(2)] = null);

(statearr_12361_12435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (40))){
var inst_12301 = (state_12333[(23)]);
var inst_12305 = done.call(null,null);
var inst_12306 = cljs.core.async.untap_STAR_.call(null,m,inst_12301);
var state_12333__$1 = (function (){var statearr_12362 = state_12333;
(statearr_12362[(24)] = inst_12305);

return statearr_12362;
})();
var statearr_12363_12436 = state_12333__$1;
(statearr_12363_12436[(2)] = inst_12306);

(statearr_12363_12436[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (33))){
var inst_12292 = (state_12333[(25)]);
var inst_12294 = cljs.core.chunked_seq_QMARK_.call(null,inst_12292);
var state_12333__$1 = state_12333;
if(inst_12294){
var statearr_12364_12437 = state_12333__$1;
(statearr_12364_12437[(1)] = (36));

} else {
var statearr_12365_12438 = state_12333__$1;
(statearr_12365_12438[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (13))){
var inst_12224 = (state_12333[(26)]);
var inst_12227 = cljs.core.async.close_BANG_.call(null,inst_12224);
var state_12333__$1 = state_12333;
var statearr_12366_12439 = state_12333__$1;
(statearr_12366_12439[(2)] = inst_12227);

(statearr_12366_12439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (22))){
var inst_12245 = (state_12333[(8)]);
var inst_12248 = cljs.core.async.close_BANG_.call(null,inst_12245);
var state_12333__$1 = state_12333;
var statearr_12367_12440 = state_12333__$1;
(statearr_12367_12440[(2)] = inst_12248);

(statearr_12367_12440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (36))){
var inst_12292 = (state_12333[(25)]);
var inst_12296 = cljs.core.chunk_first.call(null,inst_12292);
var inst_12297 = cljs.core.chunk_rest.call(null,inst_12292);
var inst_12298 = cljs.core.count.call(null,inst_12296);
var inst_12273 = inst_12297;
var inst_12274 = inst_12296;
var inst_12275 = inst_12298;
var inst_12276 = (0);
var state_12333__$1 = (function (){var statearr_12368 = state_12333;
(statearr_12368[(10)] = inst_12276);

(statearr_12368[(11)] = inst_12274);

(statearr_12368[(20)] = inst_12273);

(statearr_12368[(21)] = inst_12275);

return statearr_12368;
})();
var statearr_12369_12441 = state_12333__$1;
(statearr_12369_12441[(2)] = null);

(statearr_12369_12441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (41))){
var inst_12292 = (state_12333[(25)]);
var inst_12308 = (state_12333[(2)]);
var inst_12309 = cljs.core.next.call(null,inst_12292);
var inst_12273 = inst_12309;
var inst_12274 = null;
var inst_12275 = (0);
var inst_12276 = (0);
var state_12333__$1 = (function (){var statearr_12370 = state_12333;
(statearr_12370[(10)] = inst_12276);

(statearr_12370[(11)] = inst_12274);

(statearr_12370[(20)] = inst_12273);

(statearr_12370[(27)] = inst_12308);

(statearr_12370[(21)] = inst_12275);

return statearr_12370;
})();
var statearr_12371_12442 = state_12333__$1;
(statearr_12371_12442[(2)] = null);

(statearr_12371_12442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (43))){
var state_12333__$1 = state_12333;
var statearr_12372_12443 = state_12333__$1;
(statearr_12372_12443[(2)] = null);

(statearr_12372_12443[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (29))){
var inst_12317 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12373_12444 = state_12333__$1;
(statearr_12373_12444[(2)] = inst_12317);

(statearr_12373_12444[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (44))){
var inst_12326 = (state_12333[(2)]);
var state_12333__$1 = (function (){var statearr_12374 = state_12333;
(statearr_12374[(28)] = inst_12326);

return statearr_12374;
})();
var statearr_12375_12445 = state_12333__$1;
(statearr_12375_12445[(2)] = null);

(statearr_12375_12445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (6))){
var inst_12265 = (state_12333[(29)]);
var inst_12264 = cljs.core.deref.call(null,cs);
var inst_12265__$1 = cljs.core.keys.call(null,inst_12264);
var inst_12266 = cljs.core.count.call(null,inst_12265__$1);
var inst_12267 = cljs.core.reset_BANG_.call(null,dctr,inst_12266);
var inst_12272 = cljs.core.seq.call(null,inst_12265__$1);
var inst_12273 = inst_12272;
var inst_12274 = null;
var inst_12275 = (0);
var inst_12276 = (0);
var state_12333__$1 = (function (){var statearr_12376 = state_12333;
(statearr_12376[(10)] = inst_12276);

(statearr_12376[(11)] = inst_12274);

(statearr_12376[(20)] = inst_12273);

(statearr_12376[(30)] = inst_12267);

(statearr_12376[(29)] = inst_12265__$1);

(statearr_12376[(21)] = inst_12275);

return statearr_12376;
})();
var statearr_12377_12446 = state_12333__$1;
(statearr_12377_12446[(2)] = null);

(statearr_12377_12446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (28))){
var inst_12273 = (state_12333[(20)]);
var inst_12292 = (state_12333[(25)]);
var inst_12292__$1 = cljs.core.seq.call(null,inst_12273);
var state_12333__$1 = (function (){var statearr_12378 = state_12333;
(statearr_12378[(25)] = inst_12292__$1);

return statearr_12378;
})();
if(inst_12292__$1){
var statearr_12379_12447 = state_12333__$1;
(statearr_12379_12447[(1)] = (33));

} else {
var statearr_12380_12448 = state_12333__$1;
(statearr_12380_12448[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (25))){
var inst_12276 = (state_12333[(10)]);
var inst_12275 = (state_12333[(21)]);
var inst_12278 = (inst_12276 < inst_12275);
var inst_12279 = inst_12278;
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12279)){
var statearr_12381_12449 = state_12333__$1;
(statearr_12381_12449[(1)] = (27));

} else {
var statearr_12382_12450 = state_12333__$1;
(statearr_12382_12450[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (34))){
var state_12333__$1 = state_12333;
var statearr_12383_12451 = state_12333__$1;
(statearr_12383_12451[(2)] = null);

(statearr_12383_12451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (17))){
var state_12333__$1 = state_12333;
var statearr_12384_12452 = state_12333__$1;
(statearr_12384_12452[(2)] = null);

(statearr_12384_12452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (3))){
var inst_12331 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12333__$1,inst_12331);
} else {
if((state_val_12334 === (12))){
var inst_12260 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12385_12453 = state_12333__$1;
(statearr_12385_12453[(2)] = inst_12260);

(statearr_12385_12453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (2))){
var state_12333__$1 = state_12333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12333__$1,(4),ch);
} else {
if((state_val_12334 === (23))){
var state_12333__$1 = state_12333;
var statearr_12386_12454 = state_12333__$1;
(statearr_12386_12454[(2)] = null);

(statearr_12386_12454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (35))){
var inst_12315 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12387_12455 = state_12333__$1;
(statearr_12387_12455[(2)] = inst_12315);

(statearr_12387_12455[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (19))){
var inst_12234 = (state_12333[(7)]);
var inst_12238 = cljs.core.chunk_first.call(null,inst_12234);
var inst_12239 = cljs.core.chunk_rest.call(null,inst_12234);
var inst_12240 = cljs.core.count.call(null,inst_12238);
var inst_12214 = inst_12239;
var inst_12215 = inst_12238;
var inst_12216 = inst_12240;
var inst_12217 = (0);
var state_12333__$1 = (function (){var statearr_12388 = state_12333;
(statearr_12388[(13)] = inst_12216);

(statearr_12388[(15)] = inst_12214);

(statearr_12388[(16)] = inst_12217);

(statearr_12388[(17)] = inst_12215);

return statearr_12388;
})();
var statearr_12389_12456 = state_12333__$1;
(statearr_12389_12456[(2)] = null);

(statearr_12389_12456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (11))){
var inst_12214 = (state_12333[(15)]);
var inst_12234 = (state_12333[(7)]);
var inst_12234__$1 = cljs.core.seq.call(null,inst_12214);
var state_12333__$1 = (function (){var statearr_12390 = state_12333;
(statearr_12390[(7)] = inst_12234__$1);

return statearr_12390;
})();
if(inst_12234__$1){
var statearr_12391_12457 = state_12333__$1;
(statearr_12391_12457[(1)] = (16));

} else {
var statearr_12392_12458 = state_12333__$1;
(statearr_12392_12458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (9))){
var inst_12262 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12393_12459 = state_12333__$1;
(statearr_12393_12459[(2)] = inst_12262);

(statearr_12393_12459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (5))){
var inst_12212 = cljs.core.deref.call(null,cs);
var inst_12213 = cljs.core.seq.call(null,inst_12212);
var inst_12214 = inst_12213;
var inst_12215 = null;
var inst_12216 = (0);
var inst_12217 = (0);
var state_12333__$1 = (function (){var statearr_12394 = state_12333;
(statearr_12394[(13)] = inst_12216);

(statearr_12394[(15)] = inst_12214);

(statearr_12394[(16)] = inst_12217);

(statearr_12394[(17)] = inst_12215);

return statearr_12394;
})();
var statearr_12395_12460 = state_12333__$1;
(statearr_12395_12460[(2)] = null);

(statearr_12395_12460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (14))){
var state_12333__$1 = state_12333;
var statearr_12396_12461 = state_12333__$1;
(statearr_12396_12461[(2)] = null);

(statearr_12396_12461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (45))){
var inst_12323 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12397_12462 = state_12333__$1;
(statearr_12397_12462[(2)] = inst_12323);

(statearr_12397_12462[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (26))){
var inst_12265 = (state_12333[(29)]);
var inst_12319 = (state_12333[(2)]);
var inst_12320 = cljs.core.seq.call(null,inst_12265);
var state_12333__$1 = (function (){var statearr_12398 = state_12333;
(statearr_12398[(31)] = inst_12319);

return statearr_12398;
})();
if(inst_12320){
var statearr_12399_12463 = state_12333__$1;
(statearr_12399_12463[(1)] = (42));

} else {
var statearr_12400_12464 = state_12333__$1;
(statearr_12400_12464[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (16))){
var inst_12234 = (state_12333[(7)]);
var inst_12236 = cljs.core.chunked_seq_QMARK_.call(null,inst_12234);
var state_12333__$1 = state_12333;
if(inst_12236){
var statearr_12401_12465 = state_12333__$1;
(statearr_12401_12465[(1)] = (19));

} else {
var statearr_12402_12466 = state_12333__$1;
(statearr_12402_12466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (38))){
var inst_12312 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12403_12467 = state_12333__$1;
(statearr_12403_12467[(2)] = inst_12312);

(statearr_12403_12467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (30))){
var state_12333__$1 = state_12333;
var statearr_12404_12468 = state_12333__$1;
(statearr_12404_12468[(2)] = null);

(statearr_12404_12468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (10))){
var inst_12217 = (state_12333[(16)]);
var inst_12215 = (state_12333[(17)]);
var inst_12223 = cljs.core._nth.call(null,inst_12215,inst_12217);
var inst_12224 = cljs.core.nth.call(null,inst_12223,(0),null);
var inst_12225 = cljs.core.nth.call(null,inst_12223,(1),null);
var state_12333__$1 = (function (){var statearr_12405 = state_12333;
(statearr_12405[(26)] = inst_12224);

return statearr_12405;
})();
if(cljs.core.truth_(inst_12225)){
var statearr_12406_12469 = state_12333__$1;
(statearr_12406_12469[(1)] = (13));

} else {
var statearr_12407_12470 = state_12333__$1;
(statearr_12407_12470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (18))){
var inst_12258 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12408_12471 = state_12333__$1;
(statearr_12408_12471[(2)] = inst_12258);

(statearr_12408_12471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (42))){
var state_12333__$1 = state_12333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12333__$1,(45),dchan);
} else {
if((state_val_12334 === (37))){
var inst_12292 = (state_12333[(25)]);
var inst_12301 = (state_12333[(23)]);
var inst_12205 = (state_12333[(12)]);
var inst_12301__$1 = cljs.core.first.call(null,inst_12292);
var inst_12302 = cljs.core.async.put_BANG_.call(null,inst_12301__$1,inst_12205,done);
var state_12333__$1 = (function (){var statearr_12409 = state_12333;
(statearr_12409[(23)] = inst_12301__$1);

return statearr_12409;
})();
if(cljs.core.truth_(inst_12302)){
var statearr_12410_12472 = state_12333__$1;
(statearr_12410_12472[(1)] = (39));

} else {
var statearr_12411_12473 = state_12333__$1;
(statearr_12411_12473[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (8))){
var inst_12216 = (state_12333[(13)]);
var inst_12217 = (state_12333[(16)]);
var inst_12219 = (inst_12217 < inst_12216);
var inst_12220 = inst_12219;
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12220)){
var statearr_12412_12474 = state_12333__$1;
(statearr_12412_12474[(1)] = (10));

} else {
var statearr_12413_12475 = state_12333__$1;
(statearr_12413_12475[(1)] = (11));

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
});})(c__11114__auto___12421,cs,m,dchan,dctr,done))
;
return ((function (switch__11002__auto__,c__11114__auto___12421,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11003__auto__ = null;
var cljs$core$async$mult_$_state_machine__11003__auto____0 = (function (){
var statearr_12417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12417[(0)] = cljs$core$async$mult_$_state_machine__11003__auto__);

(statearr_12417[(1)] = (1));

return statearr_12417;
});
var cljs$core$async$mult_$_state_machine__11003__auto____1 = (function (state_12333){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_12333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12418){if((e12418 instanceof Object)){
var ex__11006__auto__ = e12418;
var statearr_12419_12476 = state_12333;
(statearr_12419_12476[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12477 = state_12333;
state_12333 = G__12477;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11003__auto__ = function(state_12333){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11003__auto____1.call(this,state_12333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11003__auto____0;
cljs$core$async$mult_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11003__auto____1;
return cljs$core$async$mult_$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___12421,cs,m,dchan,dctr,done))
})();
var state__11116__auto__ = (function (){var statearr_12420 = f__11115__auto__.call(null);
(statearr_12420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___12421);

return statearr_12420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___12421,cs,m,dchan,dctr,done))
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
var args12478 = [];
var len__7095__auto___12481 = arguments.length;
var i__7096__auto___12482 = (0);
while(true){
if((i__7096__auto___12482 < len__7095__auto___12481)){
args12478.push((arguments[i__7096__auto___12482]));

var G__12483 = (i__7096__auto___12482 + (1));
i__7096__auto___12482 = G__12483;
continue;
} else {
}
break;
}

var G__12480 = args12478.length;
switch (G__12480) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12478.length)].join('')));

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
var x__6683__auto__ = (((m == null))?null:m);
var m__6684__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,m,ch);
} else {
var m__6684__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,m,ch);
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
var x__6683__auto__ = (((m == null))?null:m);
var m__6684__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,m,ch);
} else {
var m__6684__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,m,ch);
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
var x__6683__auto__ = (((m == null))?null:m);
var m__6684__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,m);
} else {
var m__6684__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,m);
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
var x__6683__auto__ = (((m == null))?null:m);
var m__6684__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,m,state_map);
} else {
var m__6684__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,m,state_map);
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
var x__6683__auto__ = (((m == null))?null:m);
var m__6684__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,m,mode);
} else {
var m__6684__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7102__auto__ = [];
var len__7095__auto___12495 = arguments.length;
var i__7096__auto___12496 = (0);
while(true){
if((i__7096__auto___12496 < len__7095__auto___12495)){
args__7102__auto__.push((arguments[i__7096__auto___12496]));

var G__12497 = (i__7096__auto___12496 + (1));
i__7096__auto___12496 = G__12497;
continue;
} else {
}
break;
}

var argseq__7103__auto__ = ((((3) < args__7102__auto__.length))?(new cljs.core.IndexedSeq(args__7102__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7103__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12489){
var map__12490 = p__12489;
var map__12490__$1 = ((((!((map__12490 == null)))?((((map__12490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12490):map__12490);
var opts = map__12490__$1;
var statearr_12492_12498 = state;
(statearr_12492_12498[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__12490,map__12490__$1,opts){
return (function (val){
var statearr_12493_12499 = state;
(statearr_12493_12499[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12490,map__12490__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_12494_12500 = state;
(statearr_12494_12500[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12485){
var G__12486 = cljs.core.first.call(null,seq12485);
var seq12485__$1 = cljs.core.next.call(null,seq12485);
var G__12487 = cljs.core.first.call(null,seq12485__$1);
var seq12485__$2 = cljs.core.next.call(null,seq12485__$1);
var G__12488 = cljs.core.first.call(null,seq12485__$2);
var seq12485__$3 = cljs.core.next.call(null,seq12485__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12486,G__12487,G__12488,seq12485__$3);
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
if(typeof cljs.core.async.t_cljs$core$async12664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12664 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12665){
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
this.meta12665 = meta12665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12666,meta12665__$1){
var self__ = this;
var _12666__$1 = this;
return (new cljs.core.async.t_cljs$core$async12664(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12665__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12666){
var self__ = this;
var _12666__$1 = this;
return self__.meta12665;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12664.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async12664.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12665","meta12665",-681740262,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12664";

cljs.core.async.t_cljs$core$async12664.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async12664");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12664 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12664(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12665){
return (new cljs.core.async.t_cljs$core$async12664(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12665));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12664(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11114__auto___12827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___12827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___12827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12764){
var state_val_12765 = (state_12764[(1)]);
if((state_val_12765 === (7))){
var inst_12682 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
var statearr_12766_12828 = state_12764__$1;
(statearr_12766_12828[(2)] = inst_12682);

(statearr_12766_12828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (20))){
var inst_12694 = (state_12764[(7)]);
var state_12764__$1 = state_12764;
var statearr_12767_12829 = state_12764__$1;
(statearr_12767_12829[(2)] = inst_12694);

(statearr_12767_12829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (27))){
var state_12764__$1 = state_12764;
var statearr_12768_12830 = state_12764__$1;
(statearr_12768_12830[(2)] = null);

(statearr_12768_12830[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (1))){
var inst_12670 = (state_12764[(8)]);
var inst_12670__$1 = calc_state.call(null);
var inst_12672 = (inst_12670__$1 == null);
var inst_12673 = cljs.core.not.call(null,inst_12672);
var state_12764__$1 = (function (){var statearr_12769 = state_12764;
(statearr_12769[(8)] = inst_12670__$1);

return statearr_12769;
})();
if(inst_12673){
var statearr_12770_12831 = state_12764__$1;
(statearr_12770_12831[(1)] = (2));

} else {
var statearr_12771_12832 = state_12764__$1;
(statearr_12771_12832[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (24))){
var inst_12717 = (state_12764[(9)]);
var inst_12738 = (state_12764[(10)]);
var inst_12724 = (state_12764[(11)]);
var inst_12738__$1 = inst_12717.call(null,inst_12724);
var state_12764__$1 = (function (){var statearr_12772 = state_12764;
(statearr_12772[(10)] = inst_12738__$1);

return statearr_12772;
})();
if(cljs.core.truth_(inst_12738__$1)){
var statearr_12773_12833 = state_12764__$1;
(statearr_12773_12833[(1)] = (29));

} else {
var statearr_12774_12834 = state_12764__$1;
(statearr_12774_12834[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (4))){
var inst_12685 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
if(cljs.core.truth_(inst_12685)){
var statearr_12775_12835 = state_12764__$1;
(statearr_12775_12835[(1)] = (8));

} else {
var statearr_12776_12836 = state_12764__$1;
(statearr_12776_12836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (15))){
var inst_12711 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
if(cljs.core.truth_(inst_12711)){
var statearr_12777_12837 = state_12764__$1;
(statearr_12777_12837[(1)] = (19));

} else {
var statearr_12778_12838 = state_12764__$1;
(statearr_12778_12838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (21))){
var inst_12716 = (state_12764[(12)]);
var inst_12716__$1 = (state_12764[(2)]);
var inst_12717 = cljs.core.get.call(null,inst_12716__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12718 = cljs.core.get.call(null,inst_12716__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12719 = cljs.core.get.call(null,inst_12716__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12764__$1 = (function (){var statearr_12779 = state_12764;
(statearr_12779[(9)] = inst_12717);

(statearr_12779[(13)] = inst_12718);

(statearr_12779[(12)] = inst_12716__$1);

return statearr_12779;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12764__$1,(22),inst_12719);
} else {
if((state_val_12765 === (31))){
var inst_12746 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
if(cljs.core.truth_(inst_12746)){
var statearr_12780_12839 = state_12764__$1;
(statearr_12780_12839[(1)] = (32));

} else {
var statearr_12781_12840 = state_12764__$1;
(statearr_12781_12840[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (32))){
var inst_12723 = (state_12764[(14)]);
var state_12764__$1 = state_12764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12764__$1,(35),out,inst_12723);
} else {
if((state_val_12765 === (33))){
var inst_12716 = (state_12764[(12)]);
var inst_12694 = inst_12716;
var state_12764__$1 = (function (){var statearr_12782 = state_12764;
(statearr_12782[(7)] = inst_12694);

return statearr_12782;
})();
var statearr_12783_12841 = state_12764__$1;
(statearr_12783_12841[(2)] = null);

(statearr_12783_12841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (13))){
var inst_12694 = (state_12764[(7)]);
var inst_12701 = inst_12694.cljs$lang$protocol_mask$partition0$;
var inst_12702 = (inst_12701 & (64));
var inst_12703 = inst_12694.cljs$core$ISeq$;
var inst_12704 = (inst_12702) || (inst_12703);
var state_12764__$1 = state_12764;
if(cljs.core.truth_(inst_12704)){
var statearr_12784_12842 = state_12764__$1;
(statearr_12784_12842[(1)] = (16));

} else {
var statearr_12785_12843 = state_12764__$1;
(statearr_12785_12843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (22))){
var inst_12723 = (state_12764[(14)]);
var inst_12724 = (state_12764[(11)]);
var inst_12722 = (state_12764[(2)]);
var inst_12723__$1 = cljs.core.nth.call(null,inst_12722,(0),null);
var inst_12724__$1 = cljs.core.nth.call(null,inst_12722,(1),null);
var inst_12725 = (inst_12723__$1 == null);
var inst_12726 = cljs.core._EQ_.call(null,inst_12724__$1,change);
var inst_12727 = (inst_12725) || (inst_12726);
var state_12764__$1 = (function (){var statearr_12786 = state_12764;
(statearr_12786[(14)] = inst_12723__$1);

(statearr_12786[(11)] = inst_12724__$1);

return statearr_12786;
})();
if(cljs.core.truth_(inst_12727)){
var statearr_12787_12844 = state_12764__$1;
(statearr_12787_12844[(1)] = (23));

} else {
var statearr_12788_12845 = state_12764__$1;
(statearr_12788_12845[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (36))){
var inst_12716 = (state_12764[(12)]);
var inst_12694 = inst_12716;
var state_12764__$1 = (function (){var statearr_12789 = state_12764;
(statearr_12789[(7)] = inst_12694);

return statearr_12789;
})();
var statearr_12790_12846 = state_12764__$1;
(statearr_12790_12846[(2)] = null);

(statearr_12790_12846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (29))){
var inst_12738 = (state_12764[(10)]);
var state_12764__$1 = state_12764;
var statearr_12791_12847 = state_12764__$1;
(statearr_12791_12847[(2)] = inst_12738);

(statearr_12791_12847[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (6))){
var state_12764__$1 = state_12764;
var statearr_12792_12848 = state_12764__$1;
(statearr_12792_12848[(2)] = false);

(statearr_12792_12848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (28))){
var inst_12734 = (state_12764[(2)]);
var inst_12735 = calc_state.call(null);
var inst_12694 = inst_12735;
var state_12764__$1 = (function (){var statearr_12793 = state_12764;
(statearr_12793[(15)] = inst_12734);

(statearr_12793[(7)] = inst_12694);

return statearr_12793;
})();
var statearr_12794_12849 = state_12764__$1;
(statearr_12794_12849[(2)] = null);

(statearr_12794_12849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (25))){
var inst_12760 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
var statearr_12795_12850 = state_12764__$1;
(statearr_12795_12850[(2)] = inst_12760);

(statearr_12795_12850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (34))){
var inst_12758 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
var statearr_12796_12851 = state_12764__$1;
(statearr_12796_12851[(2)] = inst_12758);

(statearr_12796_12851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (17))){
var state_12764__$1 = state_12764;
var statearr_12797_12852 = state_12764__$1;
(statearr_12797_12852[(2)] = false);

(statearr_12797_12852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (3))){
var state_12764__$1 = state_12764;
var statearr_12798_12853 = state_12764__$1;
(statearr_12798_12853[(2)] = false);

(statearr_12798_12853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (12))){
var inst_12762 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12764__$1,inst_12762);
} else {
if((state_val_12765 === (2))){
var inst_12670 = (state_12764[(8)]);
var inst_12675 = inst_12670.cljs$lang$protocol_mask$partition0$;
var inst_12676 = (inst_12675 & (64));
var inst_12677 = inst_12670.cljs$core$ISeq$;
var inst_12678 = (inst_12676) || (inst_12677);
var state_12764__$1 = state_12764;
if(cljs.core.truth_(inst_12678)){
var statearr_12799_12854 = state_12764__$1;
(statearr_12799_12854[(1)] = (5));

} else {
var statearr_12800_12855 = state_12764__$1;
(statearr_12800_12855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (23))){
var inst_12723 = (state_12764[(14)]);
var inst_12729 = (inst_12723 == null);
var state_12764__$1 = state_12764;
if(cljs.core.truth_(inst_12729)){
var statearr_12801_12856 = state_12764__$1;
(statearr_12801_12856[(1)] = (26));

} else {
var statearr_12802_12857 = state_12764__$1;
(statearr_12802_12857[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (35))){
var inst_12749 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
if(cljs.core.truth_(inst_12749)){
var statearr_12803_12858 = state_12764__$1;
(statearr_12803_12858[(1)] = (36));

} else {
var statearr_12804_12859 = state_12764__$1;
(statearr_12804_12859[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (19))){
var inst_12694 = (state_12764[(7)]);
var inst_12713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12694);
var state_12764__$1 = state_12764;
var statearr_12805_12860 = state_12764__$1;
(statearr_12805_12860[(2)] = inst_12713);

(statearr_12805_12860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (11))){
var inst_12694 = (state_12764[(7)]);
var inst_12698 = (inst_12694 == null);
var inst_12699 = cljs.core.not.call(null,inst_12698);
var state_12764__$1 = state_12764;
if(inst_12699){
var statearr_12806_12861 = state_12764__$1;
(statearr_12806_12861[(1)] = (13));

} else {
var statearr_12807_12862 = state_12764__$1;
(statearr_12807_12862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (9))){
var inst_12670 = (state_12764[(8)]);
var state_12764__$1 = state_12764;
var statearr_12808_12863 = state_12764__$1;
(statearr_12808_12863[(2)] = inst_12670);

(statearr_12808_12863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (5))){
var state_12764__$1 = state_12764;
var statearr_12809_12864 = state_12764__$1;
(statearr_12809_12864[(2)] = true);

(statearr_12809_12864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (14))){
var state_12764__$1 = state_12764;
var statearr_12810_12865 = state_12764__$1;
(statearr_12810_12865[(2)] = false);

(statearr_12810_12865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (26))){
var inst_12724 = (state_12764[(11)]);
var inst_12731 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12724);
var state_12764__$1 = state_12764;
var statearr_12811_12866 = state_12764__$1;
(statearr_12811_12866[(2)] = inst_12731);

(statearr_12811_12866[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (16))){
var state_12764__$1 = state_12764;
var statearr_12812_12867 = state_12764__$1;
(statearr_12812_12867[(2)] = true);

(statearr_12812_12867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (38))){
var inst_12754 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
var statearr_12813_12868 = state_12764__$1;
(statearr_12813_12868[(2)] = inst_12754);

(statearr_12813_12868[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (30))){
var inst_12717 = (state_12764[(9)]);
var inst_12718 = (state_12764[(13)]);
var inst_12724 = (state_12764[(11)]);
var inst_12741 = cljs.core.empty_QMARK_.call(null,inst_12717);
var inst_12742 = inst_12718.call(null,inst_12724);
var inst_12743 = cljs.core.not.call(null,inst_12742);
var inst_12744 = (inst_12741) && (inst_12743);
var state_12764__$1 = state_12764;
var statearr_12814_12869 = state_12764__$1;
(statearr_12814_12869[(2)] = inst_12744);

(statearr_12814_12869[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (10))){
var inst_12670 = (state_12764[(8)]);
var inst_12690 = (state_12764[(2)]);
var inst_12691 = cljs.core.get.call(null,inst_12690,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12692 = cljs.core.get.call(null,inst_12690,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12693 = cljs.core.get.call(null,inst_12690,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12694 = inst_12670;
var state_12764__$1 = (function (){var statearr_12815 = state_12764;
(statearr_12815[(16)] = inst_12693);

(statearr_12815[(7)] = inst_12694);

(statearr_12815[(17)] = inst_12691);

(statearr_12815[(18)] = inst_12692);

return statearr_12815;
})();
var statearr_12816_12870 = state_12764__$1;
(statearr_12816_12870[(2)] = null);

(statearr_12816_12870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (18))){
var inst_12708 = (state_12764[(2)]);
var state_12764__$1 = state_12764;
var statearr_12817_12871 = state_12764__$1;
(statearr_12817_12871[(2)] = inst_12708);

(statearr_12817_12871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (37))){
var state_12764__$1 = state_12764;
var statearr_12818_12872 = state_12764__$1;
(statearr_12818_12872[(2)] = null);

(statearr_12818_12872[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12765 === (8))){
var inst_12670 = (state_12764[(8)]);
var inst_12687 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12670);
var state_12764__$1 = state_12764;
var statearr_12819_12873 = state_12764__$1;
(statearr_12819_12873[(2)] = inst_12687);

(statearr_12819_12873[(1)] = (10));


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
});})(c__11114__auto___12827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11002__auto__,c__11114__auto___12827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11003__auto__ = null;
var cljs$core$async$mix_$_state_machine__11003__auto____0 = (function (){
var statearr_12823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12823[(0)] = cljs$core$async$mix_$_state_machine__11003__auto__);

(statearr_12823[(1)] = (1));

return statearr_12823;
});
var cljs$core$async$mix_$_state_machine__11003__auto____1 = (function (state_12764){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_12764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e12824){if((e12824 instanceof Object)){
var ex__11006__auto__ = e12824;
var statearr_12825_12874 = state_12764;
(statearr_12825_12874[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12875 = state_12764;
state_12764 = G__12875;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11003__auto__ = function(state_12764){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11003__auto____1.call(this,state_12764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11003__auto____0;
cljs$core$async$mix_$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11003__auto____1;
return cljs$core$async$mix_$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___12827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11116__auto__ = (function (){var statearr_12826 = f__11115__auto__.call(null);
(statearr_12826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___12827);

return statearr_12826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___12827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6683__auto__ = (((p == null))?null:p);
var m__6684__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6684__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6683__auto__ = (((p == null))?null:p);
var m__6684__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,p,v,ch);
} else {
var m__6684__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12876 = [];
var len__7095__auto___12879 = arguments.length;
var i__7096__auto___12880 = (0);
while(true){
if((i__7096__auto___12880 < len__7095__auto___12879)){
args12876.push((arguments[i__7096__auto___12880]));

var G__12881 = (i__7096__auto___12880 + (1));
i__7096__auto___12880 = G__12881;
continue;
} else {
}
break;
}

var G__12878 = args12876.length;
switch (G__12878) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12876.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6683__auto__ = (((p == null))?null:p);
var m__6684__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,p);
} else {
var m__6684__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,p);
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
var x__6683__auto__ = (((p == null))?null:p);
var m__6684__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6683__auto__)]);
if(!((m__6684__auto__ == null))){
return m__6684__auto__.call(null,p,v);
} else {
var m__6684__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6684__auto____$1 == null))){
return m__6684__auto____$1.call(null,p,v);
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
var args12884 = [];
var len__7095__auto___13009 = arguments.length;
var i__7096__auto___13010 = (0);
while(true){
if((i__7096__auto___13010 < len__7095__auto___13009)){
args12884.push((arguments[i__7096__auto___13010]));

var G__13011 = (i__7096__auto___13010 + (1));
i__7096__auto___13010 = G__13011;
continue;
} else {
}
break;
}

var G__12886 = args12884.length;
switch (G__12886) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12884.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6020__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6020__auto__)){
return or__6020__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6020__auto__,mults){
return (function (p1__12883_SHARP_){
if(cljs.core.truth_(p1__12883_SHARP_.call(null,topic))){
return p1__12883_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12883_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6020__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12887 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12888){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12888 = meta12888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12889,meta12888__$1){
var self__ = this;
var _12889__$1 = this;
return (new cljs.core.async.t_cljs$core$async12887(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12888__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12889){
var self__ = this;
var _12889__$1 = this;
return self__.meta12888;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12887.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12888","meta12888",-1123758775,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12887";

cljs.core.async.t_cljs$core$async12887.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async12887");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12887 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12888){
return (new cljs.core.async.t_cljs$core$async12887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12888));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12887(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11114__auto___13013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___13013,mults,ensure_mult,p){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___13013,mults,ensure_mult,p){
return (function (state_12961){
var state_val_12962 = (state_12961[(1)]);
if((state_val_12962 === (7))){
var inst_12957 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12963_13014 = state_12961__$1;
(statearr_12963_13014[(2)] = inst_12957);

(statearr_12963_13014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (20))){
var state_12961__$1 = state_12961;
var statearr_12964_13015 = state_12961__$1;
(statearr_12964_13015[(2)] = null);

(statearr_12964_13015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (1))){
var state_12961__$1 = state_12961;
var statearr_12965_13016 = state_12961__$1;
(statearr_12965_13016[(2)] = null);

(statearr_12965_13016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (24))){
var inst_12940 = (state_12961[(7)]);
var inst_12949 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12940);
var state_12961__$1 = state_12961;
var statearr_12966_13017 = state_12961__$1;
(statearr_12966_13017[(2)] = inst_12949);

(statearr_12966_13017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (4))){
var inst_12892 = (state_12961[(8)]);
var inst_12892__$1 = (state_12961[(2)]);
var inst_12893 = (inst_12892__$1 == null);
var state_12961__$1 = (function (){var statearr_12967 = state_12961;
(statearr_12967[(8)] = inst_12892__$1);

return statearr_12967;
})();
if(cljs.core.truth_(inst_12893)){
var statearr_12968_13018 = state_12961__$1;
(statearr_12968_13018[(1)] = (5));

} else {
var statearr_12969_13019 = state_12961__$1;
(statearr_12969_13019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (15))){
var inst_12934 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12970_13020 = state_12961__$1;
(statearr_12970_13020[(2)] = inst_12934);

(statearr_12970_13020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (21))){
var inst_12954 = (state_12961[(2)]);
var state_12961__$1 = (function (){var statearr_12971 = state_12961;
(statearr_12971[(9)] = inst_12954);

return statearr_12971;
})();
var statearr_12972_13021 = state_12961__$1;
(statearr_12972_13021[(2)] = null);

(statearr_12972_13021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (13))){
var inst_12916 = (state_12961[(10)]);
var inst_12918 = cljs.core.chunked_seq_QMARK_.call(null,inst_12916);
var state_12961__$1 = state_12961;
if(inst_12918){
var statearr_12973_13022 = state_12961__$1;
(statearr_12973_13022[(1)] = (16));

} else {
var statearr_12974_13023 = state_12961__$1;
(statearr_12974_13023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (22))){
var inst_12946 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
if(cljs.core.truth_(inst_12946)){
var statearr_12975_13024 = state_12961__$1;
(statearr_12975_13024[(1)] = (23));

} else {
var statearr_12976_13025 = state_12961__$1;
(statearr_12976_13025[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (6))){
var inst_12892 = (state_12961[(8)]);
var inst_12940 = (state_12961[(7)]);
var inst_12942 = (state_12961[(11)]);
var inst_12940__$1 = topic_fn.call(null,inst_12892);
var inst_12941 = cljs.core.deref.call(null,mults);
var inst_12942__$1 = cljs.core.get.call(null,inst_12941,inst_12940__$1);
var state_12961__$1 = (function (){var statearr_12977 = state_12961;
(statearr_12977[(7)] = inst_12940__$1);

(statearr_12977[(11)] = inst_12942__$1);

return statearr_12977;
})();
if(cljs.core.truth_(inst_12942__$1)){
var statearr_12978_13026 = state_12961__$1;
(statearr_12978_13026[(1)] = (19));

} else {
var statearr_12979_13027 = state_12961__$1;
(statearr_12979_13027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (25))){
var inst_12951 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12980_13028 = state_12961__$1;
(statearr_12980_13028[(2)] = inst_12951);

(statearr_12980_13028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (17))){
var inst_12916 = (state_12961[(10)]);
var inst_12925 = cljs.core.first.call(null,inst_12916);
var inst_12926 = cljs.core.async.muxch_STAR_.call(null,inst_12925);
var inst_12927 = cljs.core.async.close_BANG_.call(null,inst_12926);
var inst_12928 = cljs.core.next.call(null,inst_12916);
var inst_12902 = inst_12928;
var inst_12903 = null;
var inst_12904 = (0);
var inst_12905 = (0);
var state_12961__$1 = (function (){var statearr_12981 = state_12961;
(statearr_12981[(12)] = inst_12927);

(statearr_12981[(13)] = inst_12903);

(statearr_12981[(14)] = inst_12904);

(statearr_12981[(15)] = inst_12905);

(statearr_12981[(16)] = inst_12902);

return statearr_12981;
})();
var statearr_12982_13029 = state_12961__$1;
(statearr_12982_13029[(2)] = null);

(statearr_12982_13029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (3))){
var inst_12959 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12961__$1,inst_12959);
} else {
if((state_val_12962 === (12))){
var inst_12936 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12983_13030 = state_12961__$1;
(statearr_12983_13030[(2)] = inst_12936);

(statearr_12983_13030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (2))){
var state_12961__$1 = state_12961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12961__$1,(4),ch);
} else {
if((state_val_12962 === (23))){
var state_12961__$1 = state_12961;
var statearr_12984_13031 = state_12961__$1;
(statearr_12984_13031[(2)] = null);

(statearr_12984_13031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (19))){
var inst_12892 = (state_12961[(8)]);
var inst_12942 = (state_12961[(11)]);
var inst_12944 = cljs.core.async.muxch_STAR_.call(null,inst_12942);
var state_12961__$1 = state_12961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12961__$1,(22),inst_12944,inst_12892);
} else {
if((state_val_12962 === (11))){
var inst_12916 = (state_12961[(10)]);
var inst_12902 = (state_12961[(16)]);
var inst_12916__$1 = cljs.core.seq.call(null,inst_12902);
var state_12961__$1 = (function (){var statearr_12985 = state_12961;
(statearr_12985[(10)] = inst_12916__$1);

return statearr_12985;
})();
if(inst_12916__$1){
var statearr_12986_13032 = state_12961__$1;
(statearr_12986_13032[(1)] = (13));

} else {
var statearr_12987_13033 = state_12961__$1;
(statearr_12987_13033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (9))){
var inst_12938 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12988_13034 = state_12961__$1;
(statearr_12988_13034[(2)] = inst_12938);

(statearr_12988_13034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (5))){
var inst_12899 = cljs.core.deref.call(null,mults);
var inst_12900 = cljs.core.vals.call(null,inst_12899);
var inst_12901 = cljs.core.seq.call(null,inst_12900);
var inst_12902 = inst_12901;
var inst_12903 = null;
var inst_12904 = (0);
var inst_12905 = (0);
var state_12961__$1 = (function (){var statearr_12989 = state_12961;
(statearr_12989[(13)] = inst_12903);

(statearr_12989[(14)] = inst_12904);

(statearr_12989[(15)] = inst_12905);

(statearr_12989[(16)] = inst_12902);

return statearr_12989;
})();
var statearr_12990_13035 = state_12961__$1;
(statearr_12990_13035[(2)] = null);

(statearr_12990_13035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (14))){
var state_12961__$1 = state_12961;
var statearr_12994_13036 = state_12961__$1;
(statearr_12994_13036[(2)] = null);

(statearr_12994_13036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (16))){
var inst_12916 = (state_12961[(10)]);
var inst_12920 = cljs.core.chunk_first.call(null,inst_12916);
var inst_12921 = cljs.core.chunk_rest.call(null,inst_12916);
var inst_12922 = cljs.core.count.call(null,inst_12920);
var inst_12902 = inst_12921;
var inst_12903 = inst_12920;
var inst_12904 = inst_12922;
var inst_12905 = (0);
var state_12961__$1 = (function (){var statearr_12995 = state_12961;
(statearr_12995[(13)] = inst_12903);

(statearr_12995[(14)] = inst_12904);

(statearr_12995[(15)] = inst_12905);

(statearr_12995[(16)] = inst_12902);

return statearr_12995;
})();
var statearr_12996_13037 = state_12961__$1;
(statearr_12996_13037[(2)] = null);

(statearr_12996_13037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (10))){
var inst_12903 = (state_12961[(13)]);
var inst_12904 = (state_12961[(14)]);
var inst_12905 = (state_12961[(15)]);
var inst_12902 = (state_12961[(16)]);
var inst_12910 = cljs.core._nth.call(null,inst_12903,inst_12905);
var inst_12911 = cljs.core.async.muxch_STAR_.call(null,inst_12910);
var inst_12912 = cljs.core.async.close_BANG_.call(null,inst_12911);
var inst_12913 = (inst_12905 + (1));
var tmp12991 = inst_12903;
var tmp12992 = inst_12904;
var tmp12993 = inst_12902;
var inst_12902__$1 = tmp12993;
var inst_12903__$1 = tmp12991;
var inst_12904__$1 = tmp12992;
var inst_12905__$1 = inst_12913;
var state_12961__$1 = (function (){var statearr_12997 = state_12961;
(statearr_12997[(13)] = inst_12903__$1);

(statearr_12997[(17)] = inst_12912);

(statearr_12997[(14)] = inst_12904__$1);

(statearr_12997[(15)] = inst_12905__$1);

(statearr_12997[(16)] = inst_12902__$1);

return statearr_12997;
})();
var statearr_12998_13038 = state_12961__$1;
(statearr_12998_13038[(2)] = null);

(statearr_12998_13038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (18))){
var inst_12931 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12999_13039 = state_12961__$1;
(statearr_12999_13039[(2)] = inst_12931);

(statearr_12999_13039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (8))){
var inst_12904 = (state_12961[(14)]);
var inst_12905 = (state_12961[(15)]);
var inst_12907 = (inst_12905 < inst_12904);
var inst_12908 = inst_12907;
var state_12961__$1 = state_12961;
if(cljs.core.truth_(inst_12908)){
var statearr_13000_13040 = state_12961__$1;
(statearr_13000_13040[(1)] = (10));

} else {
var statearr_13001_13041 = state_12961__$1;
(statearr_13001_13041[(1)] = (11));

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
});})(c__11114__auto___13013,mults,ensure_mult,p))
;
return ((function (switch__11002__auto__,c__11114__auto___13013,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_13005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13005[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_13005[(1)] = (1));

return statearr_13005;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_12961){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_12961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13006){if((e13006 instanceof Object)){
var ex__11006__auto__ = e13006;
var statearr_13007_13042 = state_12961;
(statearr_13007_13042[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13043 = state_12961;
state_12961 = G__13043;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_12961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_12961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___13013,mults,ensure_mult,p))
})();
var state__11116__auto__ = (function (){var statearr_13008 = f__11115__auto__.call(null);
(statearr_13008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___13013);

return statearr_13008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___13013,mults,ensure_mult,p))
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
var args13044 = [];
var len__7095__auto___13047 = arguments.length;
var i__7096__auto___13048 = (0);
while(true){
if((i__7096__auto___13048 < len__7095__auto___13047)){
args13044.push((arguments[i__7096__auto___13048]));

var G__13049 = (i__7096__auto___13048 + (1));
i__7096__auto___13048 = G__13049;
continue;
} else {
}
break;
}

var G__13046 = args13044.length;
switch (G__13046) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13044.length)].join('')));

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
var args13051 = [];
var len__7095__auto___13054 = arguments.length;
var i__7096__auto___13055 = (0);
while(true){
if((i__7096__auto___13055 < len__7095__auto___13054)){
args13051.push((arguments[i__7096__auto___13055]));

var G__13056 = (i__7096__auto___13055 + (1));
i__7096__auto___13055 = G__13056;
continue;
} else {
}
break;
}

var G__13053 = args13051.length;
switch (G__13053) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13051.length)].join('')));

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
var args13058 = [];
var len__7095__auto___13129 = arguments.length;
var i__7096__auto___13130 = (0);
while(true){
if((i__7096__auto___13130 < len__7095__auto___13129)){
args13058.push((arguments[i__7096__auto___13130]));

var G__13131 = (i__7096__auto___13130 + (1));
i__7096__auto___13130 = G__13131;
continue;
} else {
}
break;
}

var G__13060 = args13058.length;
switch (G__13060) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13058.length)].join('')));

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
var c__11114__auto___13133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___13133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___13133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13099){
var state_val_13100 = (state_13099[(1)]);
if((state_val_13100 === (7))){
var state_13099__$1 = state_13099;
var statearr_13101_13134 = state_13099__$1;
(statearr_13101_13134[(2)] = null);

(statearr_13101_13134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (1))){
var state_13099__$1 = state_13099;
var statearr_13102_13135 = state_13099__$1;
(statearr_13102_13135[(2)] = null);

(statearr_13102_13135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (4))){
var inst_13063 = (state_13099[(7)]);
var inst_13065 = (inst_13063 < cnt);
var state_13099__$1 = state_13099;
if(cljs.core.truth_(inst_13065)){
var statearr_13103_13136 = state_13099__$1;
(statearr_13103_13136[(1)] = (6));

} else {
var statearr_13104_13137 = state_13099__$1;
(statearr_13104_13137[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (15))){
var inst_13095 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
var statearr_13105_13138 = state_13099__$1;
(statearr_13105_13138[(2)] = inst_13095);

(statearr_13105_13138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (13))){
var inst_13088 = cljs.core.async.close_BANG_.call(null,out);
var state_13099__$1 = state_13099;
var statearr_13106_13139 = state_13099__$1;
(statearr_13106_13139[(2)] = inst_13088);

(statearr_13106_13139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (6))){
var state_13099__$1 = state_13099;
var statearr_13107_13140 = state_13099__$1;
(statearr_13107_13140[(2)] = null);

(statearr_13107_13140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (3))){
var inst_13097 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13099__$1,inst_13097);
} else {
if((state_val_13100 === (12))){
var inst_13085 = (state_13099[(8)]);
var inst_13085__$1 = (state_13099[(2)]);
var inst_13086 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13085__$1);
var state_13099__$1 = (function (){var statearr_13108 = state_13099;
(statearr_13108[(8)] = inst_13085__$1);

return statearr_13108;
})();
if(cljs.core.truth_(inst_13086)){
var statearr_13109_13141 = state_13099__$1;
(statearr_13109_13141[(1)] = (13));

} else {
var statearr_13110_13142 = state_13099__$1;
(statearr_13110_13142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (2))){
var inst_13062 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13063 = (0);
var state_13099__$1 = (function (){var statearr_13111 = state_13099;
(statearr_13111[(7)] = inst_13063);

(statearr_13111[(9)] = inst_13062);

return statearr_13111;
})();
var statearr_13112_13143 = state_13099__$1;
(statearr_13112_13143[(2)] = null);

(statearr_13112_13143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (11))){
var inst_13063 = (state_13099[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13099,(10),Object,null,(9));
var inst_13072 = chs__$1.call(null,inst_13063);
var inst_13073 = done.call(null,inst_13063);
var inst_13074 = cljs.core.async.take_BANG_.call(null,inst_13072,inst_13073);
var state_13099__$1 = state_13099;
var statearr_13113_13144 = state_13099__$1;
(statearr_13113_13144[(2)] = inst_13074);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (9))){
var inst_13063 = (state_13099[(7)]);
var inst_13076 = (state_13099[(2)]);
var inst_13077 = (inst_13063 + (1));
var inst_13063__$1 = inst_13077;
var state_13099__$1 = (function (){var statearr_13114 = state_13099;
(statearr_13114[(7)] = inst_13063__$1);

(statearr_13114[(10)] = inst_13076);

return statearr_13114;
})();
var statearr_13115_13145 = state_13099__$1;
(statearr_13115_13145[(2)] = null);

(statearr_13115_13145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (5))){
var inst_13083 = (state_13099[(2)]);
var state_13099__$1 = (function (){var statearr_13116 = state_13099;
(statearr_13116[(11)] = inst_13083);

return statearr_13116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13099__$1,(12),dchan);
} else {
if((state_val_13100 === (14))){
var inst_13085 = (state_13099[(8)]);
var inst_13090 = cljs.core.apply.call(null,f,inst_13085);
var state_13099__$1 = state_13099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13099__$1,(16),out,inst_13090);
} else {
if((state_val_13100 === (16))){
var inst_13092 = (state_13099[(2)]);
var state_13099__$1 = (function (){var statearr_13117 = state_13099;
(statearr_13117[(12)] = inst_13092);

return statearr_13117;
})();
var statearr_13118_13146 = state_13099__$1;
(statearr_13118_13146[(2)] = null);

(statearr_13118_13146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (10))){
var inst_13067 = (state_13099[(2)]);
var inst_13068 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13099__$1 = (function (){var statearr_13119 = state_13099;
(statearr_13119[(13)] = inst_13067);

return statearr_13119;
})();
var statearr_13120_13147 = state_13099__$1;
(statearr_13120_13147[(2)] = inst_13068);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (8))){
var inst_13081 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
var statearr_13121_13148 = state_13099__$1;
(statearr_13121_13148[(2)] = inst_13081);

(statearr_13121_13148[(1)] = (5));


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
});})(c__11114__auto___13133,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11002__auto__,c__11114__auto___13133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_13125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13125[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_13125[(1)] = (1));

return statearr_13125;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_13099){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_13099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13126){if((e13126 instanceof Object)){
var ex__11006__auto__ = e13126;
var statearr_13127_13149 = state_13099;
(statearr_13127_13149[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13150 = state_13099;
state_13099 = G__13150;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_13099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_13099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___13133,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11116__auto__ = (function (){var statearr_13128 = f__11115__auto__.call(null);
(statearr_13128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___13133);

return statearr_13128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___13133,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args13152 = [];
var len__7095__auto___13208 = arguments.length;
var i__7096__auto___13209 = (0);
while(true){
if((i__7096__auto___13209 < len__7095__auto___13208)){
args13152.push((arguments[i__7096__auto___13209]));

var G__13210 = (i__7096__auto___13209 + (1));
i__7096__auto___13209 = G__13210;
continue;
} else {
}
break;
}

var G__13154 = args13152.length;
switch (G__13154) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13152.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11114__auto___13212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___13212,out){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___13212,out){
return (function (state_13184){
var state_val_13185 = (state_13184[(1)]);
if((state_val_13185 === (7))){
var inst_13163 = (state_13184[(7)]);
var inst_13164 = (state_13184[(8)]);
var inst_13163__$1 = (state_13184[(2)]);
var inst_13164__$1 = cljs.core.nth.call(null,inst_13163__$1,(0),null);
var inst_13165 = cljs.core.nth.call(null,inst_13163__$1,(1),null);
var inst_13166 = (inst_13164__$1 == null);
var state_13184__$1 = (function (){var statearr_13186 = state_13184;
(statearr_13186[(9)] = inst_13165);

(statearr_13186[(7)] = inst_13163__$1);

(statearr_13186[(8)] = inst_13164__$1);

return statearr_13186;
})();
if(cljs.core.truth_(inst_13166)){
var statearr_13187_13213 = state_13184__$1;
(statearr_13187_13213[(1)] = (8));

} else {
var statearr_13188_13214 = state_13184__$1;
(statearr_13188_13214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13185 === (1))){
var inst_13155 = cljs.core.vec.call(null,chs);
var inst_13156 = inst_13155;
var state_13184__$1 = (function (){var statearr_13189 = state_13184;
(statearr_13189[(10)] = inst_13156);

return statearr_13189;
})();
var statearr_13190_13215 = state_13184__$1;
(statearr_13190_13215[(2)] = null);

(statearr_13190_13215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13185 === (4))){
var inst_13156 = (state_13184[(10)]);
var state_13184__$1 = state_13184;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13184__$1,(7),inst_13156);
} else {
if((state_val_13185 === (6))){
var inst_13180 = (state_13184[(2)]);
var state_13184__$1 = state_13184;
var statearr_13191_13216 = state_13184__$1;
(statearr_13191_13216[(2)] = inst_13180);

(statearr_13191_13216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13185 === (3))){
var inst_13182 = (state_13184[(2)]);
var state_13184__$1 = state_13184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13184__$1,inst_13182);
} else {
if((state_val_13185 === (2))){
var inst_13156 = (state_13184[(10)]);
var inst_13158 = cljs.core.count.call(null,inst_13156);
var inst_13159 = (inst_13158 > (0));
var state_13184__$1 = state_13184;
if(cljs.core.truth_(inst_13159)){
var statearr_13193_13217 = state_13184__$1;
(statearr_13193_13217[(1)] = (4));

} else {
var statearr_13194_13218 = state_13184__$1;
(statearr_13194_13218[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13185 === (11))){
var inst_13156 = (state_13184[(10)]);
var inst_13173 = (state_13184[(2)]);
var tmp13192 = inst_13156;
var inst_13156__$1 = tmp13192;
var state_13184__$1 = (function (){var statearr_13195 = state_13184;
(statearr_13195[(11)] = inst_13173);

(statearr_13195[(10)] = inst_13156__$1);

return statearr_13195;
})();
var statearr_13196_13219 = state_13184__$1;
(statearr_13196_13219[(2)] = null);

(statearr_13196_13219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13185 === (9))){
var inst_13164 = (state_13184[(8)]);
var state_13184__$1 = state_13184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13184__$1,(11),out,inst_13164);
} else {
if((state_val_13185 === (5))){
var inst_13178 = cljs.core.async.close_BANG_.call(null,out);
var state_13184__$1 = state_13184;
var statearr_13197_13220 = state_13184__$1;
(statearr_13197_13220[(2)] = inst_13178);

(statearr_13197_13220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13185 === (10))){
var inst_13176 = (state_13184[(2)]);
var state_13184__$1 = state_13184;
var statearr_13198_13221 = state_13184__$1;
(statearr_13198_13221[(2)] = inst_13176);

(statearr_13198_13221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13185 === (8))){
var inst_13165 = (state_13184[(9)]);
var inst_13163 = (state_13184[(7)]);
var inst_13156 = (state_13184[(10)]);
var inst_13164 = (state_13184[(8)]);
var inst_13168 = (function (){var cs = inst_13156;
var vec__13161 = inst_13163;
var v = inst_13164;
var c = inst_13165;
return ((function (cs,vec__13161,v,c,inst_13165,inst_13163,inst_13156,inst_13164,state_val_13185,c__11114__auto___13212,out){
return (function (p1__13151_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13151_SHARP_);
});
;})(cs,vec__13161,v,c,inst_13165,inst_13163,inst_13156,inst_13164,state_val_13185,c__11114__auto___13212,out))
})();
var inst_13169 = cljs.core.filterv.call(null,inst_13168,inst_13156);
var inst_13156__$1 = inst_13169;
var state_13184__$1 = (function (){var statearr_13199 = state_13184;
(statearr_13199[(10)] = inst_13156__$1);

return statearr_13199;
})();
var statearr_13200_13222 = state_13184__$1;
(statearr_13200_13222[(2)] = null);

(statearr_13200_13222[(1)] = (2));


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
});})(c__11114__auto___13212,out))
;
return ((function (switch__11002__auto__,c__11114__auto___13212,out){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_13204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13204[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_13204[(1)] = (1));

return statearr_13204;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_13184){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_13184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13205){if((e13205 instanceof Object)){
var ex__11006__auto__ = e13205;
var statearr_13206_13223 = state_13184;
(statearr_13206_13223[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13224 = state_13184;
state_13184 = G__13224;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_13184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_13184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___13212,out))
})();
var state__11116__auto__ = (function (){var statearr_13207 = f__11115__auto__.call(null);
(statearr_13207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___13212);

return statearr_13207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___13212,out))
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
var args13225 = [];
var len__7095__auto___13274 = arguments.length;
var i__7096__auto___13275 = (0);
while(true){
if((i__7096__auto___13275 < len__7095__auto___13274)){
args13225.push((arguments[i__7096__auto___13275]));

var G__13276 = (i__7096__auto___13275 + (1));
i__7096__auto___13275 = G__13276;
continue;
} else {
}
break;
}

var G__13227 = args13225.length;
switch (G__13227) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13225.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11114__auto___13278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___13278,out){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___13278,out){
return (function (state_13251){
var state_val_13252 = (state_13251[(1)]);
if((state_val_13252 === (7))){
var inst_13233 = (state_13251[(7)]);
var inst_13233__$1 = (state_13251[(2)]);
var inst_13234 = (inst_13233__$1 == null);
var inst_13235 = cljs.core.not.call(null,inst_13234);
var state_13251__$1 = (function (){var statearr_13253 = state_13251;
(statearr_13253[(7)] = inst_13233__$1);

return statearr_13253;
})();
if(inst_13235){
var statearr_13254_13279 = state_13251__$1;
(statearr_13254_13279[(1)] = (8));

} else {
var statearr_13255_13280 = state_13251__$1;
(statearr_13255_13280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (1))){
var inst_13228 = (0);
var state_13251__$1 = (function (){var statearr_13256 = state_13251;
(statearr_13256[(8)] = inst_13228);

return statearr_13256;
})();
var statearr_13257_13281 = state_13251__$1;
(statearr_13257_13281[(2)] = null);

(statearr_13257_13281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (4))){
var state_13251__$1 = state_13251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13251__$1,(7),ch);
} else {
if((state_val_13252 === (6))){
var inst_13246 = (state_13251[(2)]);
var state_13251__$1 = state_13251;
var statearr_13258_13282 = state_13251__$1;
(statearr_13258_13282[(2)] = inst_13246);

(statearr_13258_13282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (3))){
var inst_13248 = (state_13251[(2)]);
var inst_13249 = cljs.core.async.close_BANG_.call(null,out);
var state_13251__$1 = (function (){var statearr_13259 = state_13251;
(statearr_13259[(9)] = inst_13248);

return statearr_13259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13251__$1,inst_13249);
} else {
if((state_val_13252 === (2))){
var inst_13228 = (state_13251[(8)]);
var inst_13230 = (inst_13228 < n);
var state_13251__$1 = state_13251;
if(cljs.core.truth_(inst_13230)){
var statearr_13260_13283 = state_13251__$1;
(statearr_13260_13283[(1)] = (4));

} else {
var statearr_13261_13284 = state_13251__$1;
(statearr_13261_13284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (11))){
var inst_13228 = (state_13251[(8)]);
var inst_13238 = (state_13251[(2)]);
var inst_13239 = (inst_13228 + (1));
var inst_13228__$1 = inst_13239;
var state_13251__$1 = (function (){var statearr_13262 = state_13251;
(statearr_13262[(10)] = inst_13238);

(statearr_13262[(8)] = inst_13228__$1);

return statearr_13262;
})();
var statearr_13263_13285 = state_13251__$1;
(statearr_13263_13285[(2)] = null);

(statearr_13263_13285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (9))){
var state_13251__$1 = state_13251;
var statearr_13264_13286 = state_13251__$1;
(statearr_13264_13286[(2)] = null);

(statearr_13264_13286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (5))){
var state_13251__$1 = state_13251;
var statearr_13265_13287 = state_13251__$1;
(statearr_13265_13287[(2)] = null);

(statearr_13265_13287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (10))){
var inst_13243 = (state_13251[(2)]);
var state_13251__$1 = state_13251;
var statearr_13266_13288 = state_13251__$1;
(statearr_13266_13288[(2)] = inst_13243);

(statearr_13266_13288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (8))){
var inst_13233 = (state_13251[(7)]);
var state_13251__$1 = state_13251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13251__$1,(11),out,inst_13233);
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
});})(c__11114__auto___13278,out))
;
return ((function (switch__11002__auto__,c__11114__auto___13278,out){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_13270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13270[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_13270[(1)] = (1));

return statearr_13270;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_13251){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_13251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13271){if((e13271 instanceof Object)){
var ex__11006__auto__ = e13271;
var statearr_13272_13289 = state_13251;
(statearr_13272_13289[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13290 = state_13251;
state_13251 = G__13290;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_13251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_13251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___13278,out))
})();
var state__11116__auto__ = (function (){var statearr_13273 = f__11115__auto__.call(null);
(statearr_13273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___13278);

return statearr_13273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___13278,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13298 = (function (map_LT_,f,ch,meta13299){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13299 = meta13299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13300,meta13299__$1){
var self__ = this;
var _13300__$1 = this;
return (new cljs.core.async.t_cljs$core$async13298(self__.map_LT_,self__.f,self__.ch,meta13299__$1));
});

cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13300){
var self__ = this;
var _13300__$1 = this;
return self__.meta13299;
});

cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13301 = (function (map_LT_,f,ch,meta13299,_,fn1,meta13302){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13299 = meta13299;
this._ = _;
this.fn1 = fn1;
this.meta13302 = meta13302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13303,meta13302__$1){
var self__ = this;
var _13303__$1 = this;
return (new cljs.core.async.t_cljs$core$async13301(self__.map_LT_,self__.f,self__.ch,self__.meta13299,self__._,self__.fn1,meta13302__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13303){
var self__ = this;
var _13303__$1 = this;
return self__.meta13302;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13301.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13301.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13291_SHARP_){
return f1.call(null,(((p1__13291_SHARP_ == null))?null:self__.f.call(null,p1__13291_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13301.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13299","meta13299",648199161,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13298","cljs.core.async/t_cljs$core$async13298",-577632652,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13302","meta13302",583892663,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13301";

cljs.core.async.t_cljs$core$async13301.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async13301");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13301 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13301(map_LT___$1,f__$1,ch__$1,meta13299__$1,___$2,fn1__$1,meta13302){
return (new cljs.core.async.t_cljs$core$async13301(map_LT___$1,f__$1,ch__$1,meta13299__$1,___$2,fn1__$1,meta13302));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13301(self__.map_LT_,self__.f,self__.ch,self__.meta13299,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6008__auto__ = ret;
if(cljs.core.truth_(and__6008__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6008__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13299","meta13299",648199161,null)], null);
});

cljs.core.async.t_cljs$core$async13298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13298";

cljs.core.async.t_cljs$core$async13298.cljs$lang$ctorPrWriter = (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async13298");
});

cljs.core.async.__GT_t_cljs$core$async13298 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13298(map_LT___$1,f__$1,ch__$1,meta13299){
return (new cljs.core.async.t_cljs$core$async13298(map_LT___$1,f__$1,ch__$1,meta13299));
});

}

return (new cljs.core.async.t_cljs$core$async13298(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13307 = (function (map_GT_,f,ch,meta13308){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13308 = meta13308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13309,meta13308__$1){
var self__ = this;
var _13309__$1 = this;
return (new cljs.core.async.t_cljs$core$async13307(self__.map_GT_,self__.f,self__.ch,meta13308__$1));
});

cljs.core.async.t_cljs$core$async13307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13309){
var self__ = this;
var _13309__$1 = this;
return self__.meta13308;
});

cljs.core.async.t_cljs$core$async13307.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13308","meta13308",1725078355,null)], null);
});

cljs.core.async.t_cljs$core$async13307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13307";

cljs.core.async.t_cljs$core$async13307.cljs$lang$ctorPrWriter = (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async13307");
});

cljs.core.async.__GT_t_cljs$core$async13307 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13307(map_GT___$1,f__$1,ch__$1,meta13308){
return (new cljs.core.async.t_cljs$core$async13307(map_GT___$1,f__$1,ch__$1,meta13308));
});

}

return (new cljs.core.async.t_cljs$core$async13307(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13313 = (function (filter_GT_,p,ch,meta13314){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13314 = meta13314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13315,meta13314__$1){
var self__ = this;
var _13315__$1 = this;
return (new cljs.core.async.t_cljs$core$async13313(self__.filter_GT_,self__.p,self__.ch,meta13314__$1));
});

cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13315){
var self__ = this;
var _13315__$1 = this;
return self__.meta13314;
});

cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13314","meta13314",2095201037,null)], null);
});

cljs.core.async.t_cljs$core$async13313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13313";

cljs.core.async.t_cljs$core$async13313.cljs$lang$ctorPrWriter = (function (this__6626__auto__,writer__6627__auto__,opt__6628__auto__){
return cljs.core._write.call(null,writer__6627__auto__,"cljs.core.async/t_cljs$core$async13313");
});

cljs.core.async.__GT_t_cljs$core$async13313 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13313(filter_GT___$1,p__$1,ch__$1,meta13314){
return (new cljs.core.async.t_cljs$core$async13313(filter_GT___$1,p__$1,ch__$1,meta13314));
});

}

return (new cljs.core.async.t_cljs$core$async13313(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args13316 = [];
var len__7095__auto___13360 = arguments.length;
var i__7096__auto___13361 = (0);
while(true){
if((i__7096__auto___13361 < len__7095__auto___13360)){
args13316.push((arguments[i__7096__auto___13361]));

var G__13362 = (i__7096__auto___13361 + (1));
i__7096__auto___13361 = G__13362;
continue;
} else {
}
break;
}

var G__13318 = args13316.length;
switch (G__13318) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13316.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11114__auto___13364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___13364,out){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___13364,out){
return (function (state_13339){
var state_val_13340 = (state_13339[(1)]);
if((state_val_13340 === (7))){
var inst_13335 = (state_13339[(2)]);
var state_13339__$1 = state_13339;
var statearr_13341_13365 = state_13339__$1;
(statearr_13341_13365[(2)] = inst_13335);

(statearr_13341_13365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13340 === (1))){
var state_13339__$1 = state_13339;
var statearr_13342_13366 = state_13339__$1;
(statearr_13342_13366[(2)] = null);

(statearr_13342_13366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13340 === (4))){
var inst_13321 = (state_13339[(7)]);
var inst_13321__$1 = (state_13339[(2)]);
var inst_13322 = (inst_13321__$1 == null);
var state_13339__$1 = (function (){var statearr_13343 = state_13339;
(statearr_13343[(7)] = inst_13321__$1);

return statearr_13343;
})();
if(cljs.core.truth_(inst_13322)){
var statearr_13344_13367 = state_13339__$1;
(statearr_13344_13367[(1)] = (5));

} else {
var statearr_13345_13368 = state_13339__$1;
(statearr_13345_13368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13340 === (6))){
var inst_13321 = (state_13339[(7)]);
var inst_13326 = p.call(null,inst_13321);
var state_13339__$1 = state_13339;
if(cljs.core.truth_(inst_13326)){
var statearr_13346_13369 = state_13339__$1;
(statearr_13346_13369[(1)] = (8));

} else {
var statearr_13347_13370 = state_13339__$1;
(statearr_13347_13370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13340 === (3))){
var inst_13337 = (state_13339[(2)]);
var state_13339__$1 = state_13339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13339__$1,inst_13337);
} else {
if((state_val_13340 === (2))){
var state_13339__$1 = state_13339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13339__$1,(4),ch);
} else {
if((state_val_13340 === (11))){
var inst_13329 = (state_13339[(2)]);
var state_13339__$1 = state_13339;
var statearr_13348_13371 = state_13339__$1;
(statearr_13348_13371[(2)] = inst_13329);

(statearr_13348_13371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13340 === (9))){
var state_13339__$1 = state_13339;
var statearr_13349_13372 = state_13339__$1;
(statearr_13349_13372[(2)] = null);

(statearr_13349_13372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13340 === (5))){
var inst_13324 = cljs.core.async.close_BANG_.call(null,out);
var state_13339__$1 = state_13339;
var statearr_13350_13373 = state_13339__$1;
(statearr_13350_13373[(2)] = inst_13324);

(statearr_13350_13373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13340 === (10))){
var inst_13332 = (state_13339[(2)]);
var state_13339__$1 = (function (){var statearr_13351 = state_13339;
(statearr_13351[(8)] = inst_13332);

return statearr_13351;
})();
var statearr_13352_13374 = state_13339__$1;
(statearr_13352_13374[(2)] = null);

(statearr_13352_13374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13340 === (8))){
var inst_13321 = (state_13339[(7)]);
var state_13339__$1 = state_13339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13339__$1,(11),out,inst_13321);
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
});})(c__11114__auto___13364,out))
;
return ((function (switch__11002__auto__,c__11114__auto___13364,out){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_13356 = [null,null,null,null,null,null,null,null,null];
(statearr_13356[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_13356[(1)] = (1));

return statearr_13356;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_13339){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_13339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13357){if((e13357 instanceof Object)){
var ex__11006__auto__ = e13357;
var statearr_13358_13375 = state_13339;
(statearr_13358_13375[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13376 = state_13339;
state_13339 = G__13376;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_13339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_13339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___13364,out))
})();
var state__11116__auto__ = (function (){var statearr_13359 = f__11115__auto__.call(null);
(statearr_13359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___13364);

return statearr_13359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___13364,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13377 = [];
var len__7095__auto___13380 = arguments.length;
var i__7096__auto___13381 = (0);
while(true){
if((i__7096__auto___13381 < len__7095__auto___13380)){
args13377.push((arguments[i__7096__auto___13381]));

var G__13382 = (i__7096__auto___13381 + (1));
i__7096__auto___13381 = G__13382;
continue;
} else {
}
break;
}

var G__13379 = args13377.length;
switch (G__13379) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13377.length)].join('')));

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
var c__11114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto__){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto__){
return (function (state_13549){
var state_val_13550 = (state_13549[(1)]);
if((state_val_13550 === (7))){
var inst_13545 = (state_13549[(2)]);
var state_13549__$1 = state_13549;
var statearr_13551_13592 = state_13549__$1;
(statearr_13551_13592[(2)] = inst_13545);

(statearr_13551_13592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (20))){
var inst_13515 = (state_13549[(7)]);
var inst_13526 = (state_13549[(2)]);
var inst_13527 = cljs.core.next.call(null,inst_13515);
var inst_13501 = inst_13527;
var inst_13502 = null;
var inst_13503 = (0);
var inst_13504 = (0);
var state_13549__$1 = (function (){var statearr_13552 = state_13549;
(statearr_13552[(8)] = inst_13504);

(statearr_13552[(9)] = inst_13503);

(statearr_13552[(10)] = inst_13502);

(statearr_13552[(11)] = inst_13501);

(statearr_13552[(12)] = inst_13526);

return statearr_13552;
})();
var statearr_13553_13593 = state_13549__$1;
(statearr_13553_13593[(2)] = null);

(statearr_13553_13593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (1))){
var state_13549__$1 = state_13549;
var statearr_13554_13594 = state_13549__$1;
(statearr_13554_13594[(2)] = null);

(statearr_13554_13594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (4))){
var inst_13490 = (state_13549[(13)]);
var inst_13490__$1 = (state_13549[(2)]);
var inst_13491 = (inst_13490__$1 == null);
var state_13549__$1 = (function (){var statearr_13555 = state_13549;
(statearr_13555[(13)] = inst_13490__$1);

return statearr_13555;
})();
if(cljs.core.truth_(inst_13491)){
var statearr_13556_13595 = state_13549__$1;
(statearr_13556_13595[(1)] = (5));

} else {
var statearr_13557_13596 = state_13549__$1;
(statearr_13557_13596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (15))){
var state_13549__$1 = state_13549;
var statearr_13561_13597 = state_13549__$1;
(statearr_13561_13597[(2)] = null);

(statearr_13561_13597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (21))){
var state_13549__$1 = state_13549;
var statearr_13562_13598 = state_13549__$1;
(statearr_13562_13598[(2)] = null);

(statearr_13562_13598[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (13))){
var inst_13504 = (state_13549[(8)]);
var inst_13503 = (state_13549[(9)]);
var inst_13502 = (state_13549[(10)]);
var inst_13501 = (state_13549[(11)]);
var inst_13511 = (state_13549[(2)]);
var inst_13512 = (inst_13504 + (1));
var tmp13558 = inst_13503;
var tmp13559 = inst_13502;
var tmp13560 = inst_13501;
var inst_13501__$1 = tmp13560;
var inst_13502__$1 = tmp13559;
var inst_13503__$1 = tmp13558;
var inst_13504__$1 = inst_13512;
var state_13549__$1 = (function (){var statearr_13563 = state_13549;
(statearr_13563[(8)] = inst_13504__$1);

(statearr_13563[(9)] = inst_13503__$1);

(statearr_13563[(14)] = inst_13511);

(statearr_13563[(10)] = inst_13502__$1);

(statearr_13563[(11)] = inst_13501__$1);

return statearr_13563;
})();
var statearr_13564_13599 = state_13549__$1;
(statearr_13564_13599[(2)] = null);

(statearr_13564_13599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (22))){
var state_13549__$1 = state_13549;
var statearr_13565_13600 = state_13549__$1;
(statearr_13565_13600[(2)] = null);

(statearr_13565_13600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (6))){
var inst_13490 = (state_13549[(13)]);
var inst_13499 = f.call(null,inst_13490);
var inst_13500 = cljs.core.seq.call(null,inst_13499);
var inst_13501 = inst_13500;
var inst_13502 = null;
var inst_13503 = (0);
var inst_13504 = (0);
var state_13549__$1 = (function (){var statearr_13566 = state_13549;
(statearr_13566[(8)] = inst_13504);

(statearr_13566[(9)] = inst_13503);

(statearr_13566[(10)] = inst_13502);

(statearr_13566[(11)] = inst_13501);

return statearr_13566;
})();
var statearr_13567_13601 = state_13549__$1;
(statearr_13567_13601[(2)] = null);

(statearr_13567_13601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (17))){
var inst_13515 = (state_13549[(7)]);
var inst_13519 = cljs.core.chunk_first.call(null,inst_13515);
var inst_13520 = cljs.core.chunk_rest.call(null,inst_13515);
var inst_13521 = cljs.core.count.call(null,inst_13519);
var inst_13501 = inst_13520;
var inst_13502 = inst_13519;
var inst_13503 = inst_13521;
var inst_13504 = (0);
var state_13549__$1 = (function (){var statearr_13568 = state_13549;
(statearr_13568[(8)] = inst_13504);

(statearr_13568[(9)] = inst_13503);

(statearr_13568[(10)] = inst_13502);

(statearr_13568[(11)] = inst_13501);

return statearr_13568;
})();
var statearr_13569_13602 = state_13549__$1;
(statearr_13569_13602[(2)] = null);

(statearr_13569_13602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (3))){
var inst_13547 = (state_13549[(2)]);
var state_13549__$1 = state_13549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13549__$1,inst_13547);
} else {
if((state_val_13550 === (12))){
var inst_13535 = (state_13549[(2)]);
var state_13549__$1 = state_13549;
var statearr_13570_13603 = state_13549__$1;
(statearr_13570_13603[(2)] = inst_13535);

(statearr_13570_13603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (2))){
var state_13549__$1 = state_13549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13549__$1,(4),in$);
} else {
if((state_val_13550 === (23))){
var inst_13543 = (state_13549[(2)]);
var state_13549__$1 = state_13549;
var statearr_13571_13604 = state_13549__$1;
(statearr_13571_13604[(2)] = inst_13543);

(statearr_13571_13604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (19))){
var inst_13530 = (state_13549[(2)]);
var state_13549__$1 = state_13549;
var statearr_13572_13605 = state_13549__$1;
(statearr_13572_13605[(2)] = inst_13530);

(statearr_13572_13605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (11))){
var inst_13515 = (state_13549[(7)]);
var inst_13501 = (state_13549[(11)]);
var inst_13515__$1 = cljs.core.seq.call(null,inst_13501);
var state_13549__$1 = (function (){var statearr_13573 = state_13549;
(statearr_13573[(7)] = inst_13515__$1);

return statearr_13573;
})();
if(inst_13515__$1){
var statearr_13574_13606 = state_13549__$1;
(statearr_13574_13606[(1)] = (14));

} else {
var statearr_13575_13607 = state_13549__$1;
(statearr_13575_13607[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (9))){
var inst_13537 = (state_13549[(2)]);
var inst_13538 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13549__$1 = (function (){var statearr_13576 = state_13549;
(statearr_13576[(15)] = inst_13537);

return statearr_13576;
})();
if(cljs.core.truth_(inst_13538)){
var statearr_13577_13608 = state_13549__$1;
(statearr_13577_13608[(1)] = (21));

} else {
var statearr_13578_13609 = state_13549__$1;
(statearr_13578_13609[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (5))){
var inst_13493 = cljs.core.async.close_BANG_.call(null,out);
var state_13549__$1 = state_13549;
var statearr_13579_13610 = state_13549__$1;
(statearr_13579_13610[(2)] = inst_13493);

(statearr_13579_13610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (14))){
var inst_13515 = (state_13549[(7)]);
var inst_13517 = cljs.core.chunked_seq_QMARK_.call(null,inst_13515);
var state_13549__$1 = state_13549;
if(inst_13517){
var statearr_13580_13611 = state_13549__$1;
(statearr_13580_13611[(1)] = (17));

} else {
var statearr_13581_13612 = state_13549__$1;
(statearr_13581_13612[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (16))){
var inst_13533 = (state_13549[(2)]);
var state_13549__$1 = state_13549;
var statearr_13582_13613 = state_13549__$1;
(statearr_13582_13613[(2)] = inst_13533);

(statearr_13582_13613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (10))){
var inst_13504 = (state_13549[(8)]);
var inst_13502 = (state_13549[(10)]);
var inst_13509 = cljs.core._nth.call(null,inst_13502,inst_13504);
var state_13549__$1 = state_13549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13549__$1,(13),out,inst_13509);
} else {
if((state_val_13550 === (18))){
var inst_13515 = (state_13549[(7)]);
var inst_13524 = cljs.core.first.call(null,inst_13515);
var state_13549__$1 = state_13549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13549__$1,(20),out,inst_13524);
} else {
if((state_val_13550 === (8))){
var inst_13504 = (state_13549[(8)]);
var inst_13503 = (state_13549[(9)]);
var inst_13506 = (inst_13504 < inst_13503);
var inst_13507 = inst_13506;
var state_13549__$1 = state_13549;
if(cljs.core.truth_(inst_13507)){
var statearr_13583_13614 = state_13549__$1;
(statearr_13583_13614[(1)] = (10));

} else {
var statearr_13584_13615 = state_13549__$1;
(statearr_13584_13615[(1)] = (11));

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
});})(c__11114__auto__))
;
return ((function (switch__11002__auto__,c__11114__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____0 = (function (){
var statearr_13588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13588[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__);

(statearr_13588[(1)] = (1));

return statearr_13588;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____1 = (function (state_13549){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_13549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13589){if((e13589 instanceof Object)){
var ex__11006__auto__ = e13589;
var statearr_13590_13616 = state_13549;
(statearr_13590_13616[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13617 = state_13549;
state_13549 = G__13617;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__ = function(state_13549){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____1.call(this,state_13549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11003__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto__))
})();
var state__11116__auto__ = (function (){var statearr_13591 = f__11115__auto__.call(null);
(statearr_13591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto__);

return statearr_13591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto__))
);

return c__11114__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13618 = [];
var len__7095__auto___13621 = arguments.length;
var i__7096__auto___13622 = (0);
while(true){
if((i__7096__auto___13622 < len__7095__auto___13621)){
args13618.push((arguments[i__7096__auto___13622]));

var G__13623 = (i__7096__auto___13622 + (1));
i__7096__auto___13622 = G__13623;
continue;
} else {
}
break;
}

var G__13620 = args13618.length;
switch (G__13620) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13618.length)].join('')));

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
var args13625 = [];
var len__7095__auto___13628 = arguments.length;
var i__7096__auto___13629 = (0);
while(true){
if((i__7096__auto___13629 < len__7095__auto___13628)){
args13625.push((arguments[i__7096__auto___13629]));

var G__13630 = (i__7096__auto___13629 + (1));
i__7096__auto___13629 = G__13630;
continue;
} else {
}
break;
}

var G__13627 = args13625.length;
switch (G__13627) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13625.length)].join('')));

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
var args13632 = [];
var len__7095__auto___13683 = arguments.length;
var i__7096__auto___13684 = (0);
while(true){
if((i__7096__auto___13684 < len__7095__auto___13683)){
args13632.push((arguments[i__7096__auto___13684]));

var G__13685 = (i__7096__auto___13684 + (1));
i__7096__auto___13684 = G__13685;
continue;
} else {
}
break;
}

var G__13634 = args13632.length;
switch (G__13634) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13632.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11114__auto___13687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___13687,out){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___13687,out){
return (function (state_13658){
var state_val_13659 = (state_13658[(1)]);
if((state_val_13659 === (7))){
var inst_13653 = (state_13658[(2)]);
var state_13658__$1 = state_13658;
var statearr_13660_13688 = state_13658__$1;
(statearr_13660_13688[(2)] = inst_13653);

(statearr_13660_13688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (1))){
var inst_13635 = null;
var state_13658__$1 = (function (){var statearr_13661 = state_13658;
(statearr_13661[(7)] = inst_13635);

return statearr_13661;
})();
var statearr_13662_13689 = state_13658__$1;
(statearr_13662_13689[(2)] = null);

(statearr_13662_13689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (4))){
var inst_13638 = (state_13658[(8)]);
var inst_13638__$1 = (state_13658[(2)]);
var inst_13639 = (inst_13638__$1 == null);
var inst_13640 = cljs.core.not.call(null,inst_13639);
var state_13658__$1 = (function (){var statearr_13663 = state_13658;
(statearr_13663[(8)] = inst_13638__$1);

return statearr_13663;
})();
if(inst_13640){
var statearr_13664_13690 = state_13658__$1;
(statearr_13664_13690[(1)] = (5));

} else {
var statearr_13665_13691 = state_13658__$1;
(statearr_13665_13691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (6))){
var state_13658__$1 = state_13658;
var statearr_13666_13692 = state_13658__$1;
(statearr_13666_13692[(2)] = null);

(statearr_13666_13692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (3))){
var inst_13655 = (state_13658[(2)]);
var inst_13656 = cljs.core.async.close_BANG_.call(null,out);
var state_13658__$1 = (function (){var statearr_13667 = state_13658;
(statearr_13667[(9)] = inst_13655);

return statearr_13667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13658__$1,inst_13656);
} else {
if((state_val_13659 === (2))){
var state_13658__$1 = state_13658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13658__$1,(4),ch);
} else {
if((state_val_13659 === (11))){
var inst_13638 = (state_13658[(8)]);
var inst_13647 = (state_13658[(2)]);
var inst_13635 = inst_13638;
var state_13658__$1 = (function (){var statearr_13668 = state_13658;
(statearr_13668[(10)] = inst_13647);

(statearr_13668[(7)] = inst_13635);

return statearr_13668;
})();
var statearr_13669_13693 = state_13658__$1;
(statearr_13669_13693[(2)] = null);

(statearr_13669_13693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (9))){
var inst_13638 = (state_13658[(8)]);
var state_13658__$1 = state_13658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13658__$1,(11),out,inst_13638);
} else {
if((state_val_13659 === (5))){
var inst_13638 = (state_13658[(8)]);
var inst_13635 = (state_13658[(7)]);
var inst_13642 = cljs.core._EQ_.call(null,inst_13638,inst_13635);
var state_13658__$1 = state_13658;
if(inst_13642){
var statearr_13671_13694 = state_13658__$1;
(statearr_13671_13694[(1)] = (8));

} else {
var statearr_13672_13695 = state_13658__$1;
(statearr_13672_13695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (10))){
var inst_13650 = (state_13658[(2)]);
var state_13658__$1 = state_13658;
var statearr_13673_13696 = state_13658__$1;
(statearr_13673_13696[(2)] = inst_13650);

(statearr_13673_13696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (8))){
var inst_13635 = (state_13658[(7)]);
var tmp13670 = inst_13635;
var inst_13635__$1 = tmp13670;
var state_13658__$1 = (function (){var statearr_13674 = state_13658;
(statearr_13674[(7)] = inst_13635__$1);

return statearr_13674;
})();
var statearr_13675_13697 = state_13658__$1;
(statearr_13675_13697[(2)] = null);

(statearr_13675_13697[(1)] = (2));


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
});})(c__11114__auto___13687,out))
;
return ((function (switch__11002__auto__,c__11114__auto___13687,out){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_13679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13679[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_13679[(1)] = (1));

return statearr_13679;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_13658){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_13658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13680){if((e13680 instanceof Object)){
var ex__11006__auto__ = e13680;
var statearr_13681_13698 = state_13658;
(statearr_13681_13698[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13699 = state_13658;
state_13658 = G__13699;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_13658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_13658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___13687,out))
})();
var state__11116__auto__ = (function (){var statearr_13682 = f__11115__auto__.call(null);
(statearr_13682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___13687);

return statearr_13682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___13687,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13700 = [];
var len__7095__auto___13770 = arguments.length;
var i__7096__auto___13771 = (0);
while(true){
if((i__7096__auto___13771 < len__7095__auto___13770)){
args13700.push((arguments[i__7096__auto___13771]));

var G__13772 = (i__7096__auto___13771 + (1));
i__7096__auto___13771 = G__13772;
continue;
} else {
}
break;
}

var G__13702 = args13700.length;
switch (G__13702) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13700.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11114__auto___13774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___13774,out){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___13774,out){
return (function (state_13740){
var state_val_13741 = (state_13740[(1)]);
if((state_val_13741 === (7))){
var inst_13736 = (state_13740[(2)]);
var state_13740__$1 = state_13740;
var statearr_13742_13775 = state_13740__$1;
(statearr_13742_13775[(2)] = inst_13736);

(statearr_13742_13775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (1))){
var inst_13703 = (new Array(n));
var inst_13704 = inst_13703;
var inst_13705 = (0);
var state_13740__$1 = (function (){var statearr_13743 = state_13740;
(statearr_13743[(7)] = inst_13705);

(statearr_13743[(8)] = inst_13704);

return statearr_13743;
})();
var statearr_13744_13776 = state_13740__$1;
(statearr_13744_13776[(2)] = null);

(statearr_13744_13776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (4))){
var inst_13708 = (state_13740[(9)]);
var inst_13708__$1 = (state_13740[(2)]);
var inst_13709 = (inst_13708__$1 == null);
var inst_13710 = cljs.core.not.call(null,inst_13709);
var state_13740__$1 = (function (){var statearr_13745 = state_13740;
(statearr_13745[(9)] = inst_13708__$1);

return statearr_13745;
})();
if(inst_13710){
var statearr_13746_13777 = state_13740__$1;
(statearr_13746_13777[(1)] = (5));

} else {
var statearr_13747_13778 = state_13740__$1;
(statearr_13747_13778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (15))){
var inst_13730 = (state_13740[(2)]);
var state_13740__$1 = state_13740;
var statearr_13748_13779 = state_13740__$1;
(statearr_13748_13779[(2)] = inst_13730);

(statearr_13748_13779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (13))){
var state_13740__$1 = state_13740;
var statearr_13749_13780 = state_13740__$1;
(statearr_13749_13780[(2)] = null);

(statearr_13749_13780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (6))){
var inst_13705 = (state_13740[(7)]);
var inst_13726 = (inst_13705 > (0));
var state_13740__$1 = state_13740;
if(cljs.core.truth_(inst_13726)){
var statearr_13750_13781 = state_13740__$1;
(statearr_13750_13781[(1)] = (12));

} else {
var statearr_13751_13782 = state_13740__$1;
(statearr_13751_13782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (3))){
var inst_13738 = (state_13740[(2)]);
var state_13740__$1 = state_13740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13740__$1,inst_13738);
} else {
if((state_val_13741 === (12))){
var inst_13704 = (state_13740[(8)]);
var inst_13728 = cljs.core.vec.call(null,inst_13704);
var state_13740__$1 = state_13740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13740__$1,(15),out,inst_13728);
} else {
if((state_val_13741 === (2))){
var state_13740__$1 = state_13740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13740__$1,(4),ch);
} else {
if((state_val_13741 === (11))){
var inst_13720 = (state_13740[(2)]);
var inst_13721 = (new Array(n));
var inst_13704 = inst_13721;
var inst_13705 = (0);
var state_13740__$1 = (function (){var statearr_13752 = state_13740;
(statearr_13752[(7)] = inst_13705);

(statearr_13752[(10)] = inst_13720);

(statearr_13752[(8)] = inst_13704);

return statearr_13752;
})();
var statearr_13753_13783 = state_13740__$1;
(statearr_13753_13783[(2)] = null);

(statearr_13753_13783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (9))){
var inst_13704 = (state_13740[(8)]);
var inst_13718 = cljs.core.vec.call(null,inst_13704);
var state_13740__$1 = state_13740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13740__$1,(11),out,inst_13718);
} else {
if((state_val_13741 === (5))){
var inst_13708 = (state_13740[(9)]);
var inst_13713 = (state_13740[(11)]);
var inst_13705 = (state_13740[(7)]);
var inst_13704 = (state_13740[(8)]);
var inst_13712 = (inst_13704[inst_13705] = inst_13708);
var inst_13713__$1 = (inst_13705 + (1));
var inst_13714 = (inst_13713__$1 < n);
var state_13740__$1 = (function (){var statearr_13754 = state_13740;
(statearr_13754[(11)] = inst_13713__$1);

(statearr_13754[(12)] = inst_13712);

return statearr_13754;
})();
if(cljs.core.truth_(inst_13714)){
var statearr_13755_13784 = state_13740__$1;
(statearr_13755_13784[(1)] = (8));

} else {
var statearr_13756_13785 = state_13740__$1;
(statearr_13756_13785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (14))){
var inst_13733 = (state_13740[(2)]);
var inst_13734 = cljs.core.async.close_BANG_.call(null,out);
var state_13740__$1 = (function (){var statearr_13758 = state_13740;
(statearr_13758[(13)] = inst_13733);

return statearr_13758;
})();
var statearr_13759_13786 = state_13740__$1;
(statearr_13759_13786[(2)] = inst_13734);

(statearr_13759_13786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (10))){
var inst_13724 = (state_13740[(2)]);
var state_13740__$1 = state_13740;
var statearr_13760_13787 = state_13740__$1;
(statearr_13760_13787[(2)] = inst_13724);

(statearr_13760_13787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (8))){
var inst_13713 = (state_13740[(11)]);
var inst_13704 = (state_13740[(8)]);
var tmp13757 = inst_13704;
var inst_13704__$1 = tmp13757;
var inst_13705 = inst_13713;
var state_13740__$1 = (function (){var statearr_13761 = state_13740;
(statearr_13761[(7)] = inst_13705);

(statearr_13761[(8)] = inst_13704__$1);

return statearr_13761;
})();
var statearr_13762_13788 = state_13740__$1;
(statearr_13762_13788[(2)] = null);

(statearr_13762_13788[(1)] = (2));


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
});})(c__11114__auto___13774,out))
;
return ((function (switch__11002__auto__,c__11114__auto___13774,out){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_13766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13766[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_13766[(1)] = (1));

return statearr_13766;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_13740){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_13740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13767){if((e13767 instanceof Object)){
var ex__11006__auto__ = e13767;
var statearr_13768_13789 = state_13740;
(statearr_13768_13789[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13790 = state_13740;
state_13740 = G__13790;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_13740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_13740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___13774,out))
})();
var state__11116__auto__ = (function (){var statearr_13769 = f__11115__auto__.call(null);
(statearr_13769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___13774);

return statearr_13769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___13774,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13791 = [];
var len__7095__auto___13865 = arguments.length;
var i__7096__auto___13866 = (0);
while(true){
if((i__7096__auto___13866 < len__7095__auto___13865)){
args13791.push((arguments[i__7096__auto___13866]));

var G__13867 = (i__7096__auto___13866 + (1));
i__7096__auto___13866 = G__13867;
continue;
} else {
}
break;
}

var G__13793 = args13791.length;
switch (G__13793) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13791.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11114__auto___13869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11114__auto___13869,out){
return (function (){
var f__11115__auto__ = (function (){var switch__11002__auto__ = ((function (c__11114__auto___13869,out){
return (function (state_13835){
var state_val_13836 = (state_13835[(1)]);
if((state_val_13836 === (7))){
var inst_13831 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13837_13870 = state_13835__$1;
(statearr_13837_13870[(2)] = inst_13831);

(statearr_13837_13870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (1))){
var inst_13794 = [];
var inst_13795 = inst_13794;
var inst_13796 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13835__$1 = (function (){var statearr_13838 = state_13835;
(statearr_13838[(7)] = inst_13795);

(statearr_13838[(8)] = inst_13796);

return statearr_13838;
})();
var statearr_13839_13871 = state_13835__$1;
(statearr_13839_13871[(2)] = null);

(statearr_13839_13871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (4))){
var inst_13799 = (state_13835[(9)]);
var inst_13799__$1 = (state_13835[(2)]);
var inst_13800 = (inst_13799__$1 == null);
var inst_13801 = cljs.core.not.call(null,inst_13800);
var state_13835__$1 = (function (){var statearr_13840 = state_13835;
(statearr_13840[(9)] = inst_13799__$1);

return statearr_13840;
})();
if(inst_13801){
var statearr_13841_13872 = state_13835__$1;
(statearr_13841_13872[(1)] = (5));

} else {
var statearr_13842_13873 = state_13835__$1;
(statearr_13842_13873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (15))){
var inst_13825 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13843_13874 = state_13835__$1;
(statearr_13843_13874[(2)] = inst_13825);

(statearr_13843_13874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (13))){
var state_13835__$1 = state_13835;
var statearr_13844_13875 = state_13835__$1;
(statearr_13844_13875[(2)] = null);

(statearr_13844_13875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (6))){
var inst_13795 = (state_13835[(7)]);
var inst_13820 = inst_13795.length;
var inst_13821 = (inst_13820 > (0));
var state_13835__$1 = state_13835;
if(cljs.core.truth_(inst_13821)){
var statearr_13845_13876 = state_13835__$1;
(statearr_13845_13876[(1)] = (12));

} else {
var statearr_13846_13877 = state_13835__$1;
(statearr_13846_13877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (3))){
var inst_13833 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13835__$1,inst_13833);
} else {
if((state_val_13836 === (12))){
var inst_13795 = (state_13835[(7)]);
var inst_13823 = cljs.core.vec.call(null,inst_13795);
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13835__$1,(15),out,inst_13823);
} else {
if((state_val_13836 === (2))){
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13835__$1,(4),ch);
} else {
if((state_val_13836 === (11))){
var inst_13799 = (state_13835[(9)]);
var inst_13803 = (state_13835[(10)]);
var inst_13813 = (state_13835[(2)]);
var inst_13814 = [];
var inst_13815 = inst_13814.push(inst_13799);
var inst_13795 = inst_13814;
var inst_13796 = inst_13803;
var state_13835__$1 = (function (){var statearr_13847 = state_13835;
(statearr_13847[(7)] = inst_13795);

(statearr_13847[(11)] = inst_13815);

(statearr_13847[(12)] = inst_13813);

(statearr_13847[(8)] = inst_13796);

return statearr_13847;
})();
var statearr_13848_13878 = state_13835__$1;
(statearr_13848_13878[(2)] = null);

(statearr_13848_13878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (9))){
var inst_13795 = (state_13835[(7)]);
var inst_13811 = cljs.core.vec.call(null,inst_13795);
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13835__$1,(11),out,inst_13811);
} else {
if((state_val_13836 === (5))){
var inst_13799 = (state_13835[(9)]);
var inst_13803 = (state_13835[(10)]);
var inst_13796 = (state_13835[(8)]);
var inst_13803__$1 = f.call(null,inst_13799);
var inst_13804 = cljs.core._EQ_.call(null,inst_13803__$1,inst_13796);
var inst_13805 = cljs.core.keyword_identical_QMARK_.call(null,inst_13796,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13806 = (inst_13804) || (inst_13805);
var state_13835__$1 = (function (){var statearr_13849 = state_13835;
(statearr_13849[(10)] = inst_13803__$1);

return statearr_13849;
})();
if(cljs.core.truth_(inst_13806)){
var statearr_13850_13879 = state_13835__$1;
(statearr_13850_13879[(1)] = (8));

} else {
var statearr_13851_13880 = state_13835__$1;
(statearr_13851_13880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (14))){
var inst_13828 = (state_13835[(2)]);
var inst_13829 = cljs.core.async.close_BANG_.call(null,out);
var state_13835__$1 = (function (){var statearr_13853 = state_13835;
(statearr_13853[(13)] = inst_13828);

return statearr_13853;
})();
var statearr_13854_13881 = state_13835__$1;
(statearr_13854_13881[(2)] = inst_13829);

(statearr_13854_13881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (10))){
var inst_13818 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13855_13882 = state_13835__$1;
(statearr_13855_13882[(2)] = inst_13818);

(statearr_13855_13882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (8))){
var inst_13795 = (state_13835[(7)]);
var inst_13799 = (state_13835[(9)]);
var inst_13803 = (state_13835[(10)]);
var inst_13808 = inst_13795.push(inst_13799);
var tmp13852 = inst_13795;
var inst_13795__$1 = tmp13852;
var inst_13796 = inst_13803;
var state_13835__$1 = (function (){var statearr_13856 = state_13835;
(statearr_13856[(7)] = inst_13795__$1);

(statearr_13856[(14)] = inst_13808);

(statearr_13856[(8)] = inst_13796);

return statearr_13856;
})();
var statearr_13857_13883 = state_13835__$1;
(statearr_13857_13883[(2)] = null);

(statearr_13857_13883[(1)] = (2));


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
});})(c__11114__auto___13869,out))
;
return ((function (switch__11002__auto__,c__11114__auto___13869,out){
return (function() {
var cljs$core$async$state_machine__11003__auto__ = null;
var cljs$core$async$state_machine__11003__auto____0 = (function (){
var statearr_13861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13861[(0)] = cljs$core$async$state_machine__11003__auto__);

(statearr_13861[(1)] = (1));

return statearr_13861;
});
var cljs$core$async$state_machine__11003__auto____1 = (function (state_13835){
while(true){
var ret_value__11004__auto__ = (function (){try{while(true){
var result__11005__auto__ = switch__11002__auto__.call(null,state_13835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11005__auto__;
}
break;
}
}catch (e13862){if((e13862 instanceof Object)){
var ex__11006__auto__ = e13862;
var statearr_13863_13884 = state_13835;
(statearr_13863_13884[(5)] = ex__11006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13885 = state_13835;
state_13835 = G__13885;
continue;
} else {
return ret_value__11004__auto__;
}
break;
}
});
cljs$core$async$state_machine__11003__auto__ = function(state_13835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11003__auto____1.call(this,state_13835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11003__auto____0;
cljs$core$async$state_machine__11003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11003__auto____1;
return cljs$core$async$state_machine__11003__auto__;
})()
;})(switch__11002__auto__,c__11114__auto___13869,out))
})();
var state__11116__auto__ = (function (){var statearr_13864 = f__11115__auto__.call(null);
(statearr_13864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11114__auto___13869);

return statearr_13864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11116__auto__);
});})(c__11114__auto___13869,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map