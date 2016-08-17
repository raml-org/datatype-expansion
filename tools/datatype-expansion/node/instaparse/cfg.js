// Compiled by ClojureScript 1.9.14 {:target :nodejs}
goog.provide('instaparse.cfg');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.reduction');
goog.require('instaparse.gll');
goog.require('clojure.string');
goog.require('cljs.reader');
/**
 * When true all string literal terminals in built grammar will be treated as case insensitive
 */
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = false;
instaparse.cfg.single_quoted_string = /'[^'\\]*(?:\\.[^'\\]*)*'/;
instaparse.cfg.single_quoted_regexp = /#'[^'\\]*(?:\\.[^'\\]*)*'/;
instaparse.cfg.double_quoted_string = /\"[^\"\\]*(?:\\.[^\"\\]*)*\"/;
instaparse.cfg.double_quoted_regexp = /#\"[^\"\\]*(?:\\.[^\"\\]*)*\"/;
instaparse.cfg.inside_comment = /(?:(?!(?:\(\*|\*\)))[\s\S])*/;
instaparse.cfg.ws = "[,\\s]*";
instaparse.cfg.opt_whitespace = instaparse.combinators_source.hide.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)));
instaparse.cfg.cfg = instaparse.reduction.apply_standard_reductions.call(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"rule-separator","rule-separator",1539322213),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845),new cljs.core.Keyword(null,"inside-comment","inside-comment",1258069708),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"factor","factor",-2103172748),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"opt","opt",-794706369)],[instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"!")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748))),instaparse.combinators_source.plus.call(null,instaparse.combinators_source.cat.call(null,instaparse.cfg.opt_whitespace,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"look","look",-539441433)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"neg","neg",1800032960))),instaparse.cfg.opt_whitespace)),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"cat","cat",-1457810207)),instaparse.combinators_source.plus.call(null,instaparse.combinators_source.cat.call(null,instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"/")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"cat","cat",-1457810207))))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null,":"),instaparse.combinators_source.string.call(null,":="),instaparse.combinators_source.string.call(null,"::="),instaparse.combinators_source.string.call(null,"=")),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"cat","cat",-1457810207)),instaparse.combinators_source.star.call(null,instaparse.combinators_source.cat.call(null,instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"|")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"cat","cat",-1457810207))))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"&")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845))),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"rule-separator","rule-separator",1539322213))),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.combinators_source.hide.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null,";"),instaparse.combinators_source.string.call(null,".")),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)))))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.neg.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570))),instaparse.combinators_source.regexp.call(null,"[^, \\r\\t\\n<>(){}\\[\\]+*?:=|'\"#&!;./]+")),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,">"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.regexp.call(null,instaparse.cfg.inside_comment),instaparse.combinators_source.star.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"comment","comment",532206069)),instaparse.combinators_source.regexp.call(null,instaparse.cfg.inside_comment)))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"{")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"}"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"*")))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.regexp.call(null,instaparse.cfg.single_quoted_string),instaparse.combinators_source.regexp.call(null,instaparse.cfg.double_quoted_string)),instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.cat.call(null,instaparse.cfg.opt_whitespace,instaparse.combinators_source.plus.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"rule","rule",729973257))))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,">"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"(")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,")"))),instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"ord","ord",1142548323)))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.regexp.call(null,instaparse.cfg.single_quoted_regexp),instaparse.combinators_source.regexp.call(null,instaparse.cfg.double_quoted_regexp)),instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"string","string",-1989541586)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"regexp","regexp",-541372782)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt","opt",-794706369)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"star","star",279424429)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"plus","plus",211540661)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"paren","paren",-294107600)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570)))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.string.call(null,"(*"),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"inside-comment","inside-comment",1258069708)),instaparse.combinators_source.string.call(null,"*)")),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"+"))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null,"Epsilon"),instaparse.combinators_source.string.call(null,"epsilon"),instaparse.combinators_source.string.call(null,"EPSILON"),instaparse.combinators_source.string.call(null,"eps"),instaparse.combinators_source.string.call(null,"\u03B5")),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.regexp.call(null,instaparse.cfg.ws),instaparse.combinators_source.star.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"comment","comment",532206069)),instaparse.combinators_source.regexp.call(null,instaparse.cfg.ws)))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"[")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"]"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"?"))))]));
instaparse.cfg.tag = cljs.core.first;
instaparse.cfg.contents = cljs.core.next;
instaparse.cfg.content = cljs.core.fnext;
/**
 * Converts escaped single-quotes to unescaped, and unescaped double-quotes to escaped
 */
instaparse.cfg.escape = (function instaparse$cfg$escape(s){
var sq = cljs.core.seq.call(null,s);
var v = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,sq);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
var G__16502 = c;
switch (G__16502) {
case "\\":
var temp__4655__auto____$1 = cljs.core.second.call(null,sq);
if(cljs.core.truth_(temp__4655__auto____$1)){
var c2 = temp__4655__auto____$1;
if(cljs.core._EQ_.call(null,c2,"'")){
var G__16504 = cljs.core.drop.call(null,(2),sq);
var G__16505 = cljs.core.conj.call(null,v,c2);
sq = G__16504;
v = G__16505;
continue;
} else {
var G__16506 = cljs.core.drop.call(null,(2),sq);
var G__16507 = cljs.core.conj.call(null,v,c,c2);
sq = G__16506;
v = G__16507;
continue;
}
} else {
throw [cljs.core.str("Encountered backslash character at end of string:"),cljs.core.str(s)].join('');
}

break;
case "\"":
var G__16508 = cljs.core.next.call(null,sq);
var G__16509 = cljs.core.conj.call(null,v,"\\","\"");
sq = G__16508;
v = G__16509;
continue;

break;
default:
var G__16510 = cljs.core.next.call(null,sq);
var G__16511 = cljs.core.conj.call(null,v,c);
sq = G__16510;
v = G__16511;
continue;

}
} else {
return cljs.core.apply.call(null,cljs.core.str,v);
}
break;
}
});
instaparse.cfg.safe_read_string = (function instaparse$cfg$safe_read_string(s){
return cljs.reader.read_string_STAR_.call(null,cljs.reader.push_back_reader.call(null,s),null);
});
/**
 * Converts single quoted string to double-quoted
 */
instaparse.cfg.process_string = (function instaparse$cfg$process_string(s){
var stripped = cljs.core.subs.call(null,s,(1),(cljs.core.count.call(null,s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape.call(null,stripped);
var final_string = instaparse.cfg.safe_read_string.call(null,[cljs.core.str(remove_escaped_single_quotes),cljs.core.str("\"")].join(''));
return final_string;
});
/**
 * Converts single quoted regexp to double-quoted
 */
instaparse.cfg.process_regexp = (function instaparse$cfg$process_regexp(s){
var stripped = cljs.core.subs.call(null,s,(2),(cljs.core.count.call(null,s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape.call(null,stripped);
var final_string = cljs.core.re_pattern.call(null,remove_escaped_single_quotes);
return final_string;
});
/**
 * Convert one parsed rule from the grammar into combinators
 */
instaparse.cfg.build_rule = (function instaparse$cfg$build_rule(tree){
while(true){
var G__16514 = (((instaparse.cfg.tag.call(null,tree) instanceof cljs.core.Keyword))?instaparse.cfg.tag.call(null,tree).fqn:null);
switch (G__16514) {
case "neg":
return instaparse.combinators_source.neg.call(null,instaparse$cfg$build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "cat":
return cljs.core.apply.call(null,instaparse.combinators_source.cat,cljs.core.map.call(null,instaparse$cfg$build_rule,instaparse.cfg.contents.call(null,tree)));

break;
case "ord":
return cljs.core.apply.call(null,instaparse.combinators_source.ord,cljs.core.map.call(null,instaparse$cfg$build_rule,instaparse.cfg.contents.call(null,tree)));

break;
case "alt":
return cljs.core.apply.call(null,instaparse.combinators_source.alt,cljs.core.map.call(null,instaparse$cfg$build_rule,instaparse.cfg.contents.call(null,tree)));

break;
case "look":
return instaparse.combinators_source.look.call(null,instaparse$cfg$build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "rule":
var vec__16515 = instaparse.cfg.contents.call(null,tree);
var nt = cljs.core.nth.call(null,vec__16515,(0),null);
var alt_or_ord = cljs.core.nth.call(null,vec__16515,(1),null);
if(cljs.core._EQ_.call(null,instaparse.cfg.tag.call(null,nt),new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,instaparse.cfg.content.call(null,instaparse.cfg.content.call(null,nt))),instaparse.combinators_source.hide_tag.call(null,instaparse$cfg$build_rule.call(null,alt_or_ord))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,instaparse.cfg.content.call(null,nt)),instaparse$cfg$build_rule.call(null,alt_or_ord)], null);
}

break;
case "nt":
return instaparse.combinators_source.nt.call(null,cljs.core.keyword.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "star":
return instaparse.combinators_source.star.call(null,instaparse$cfg$build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "string":
return (cljs.core.truth_(instaparse.cfg._STAR_case_insensitive_literals_STAR_)?instaparse.combinators_source.string_ci:instaparse.combinators_source.string).call(null,instaparse.cfg.process_string.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "hide":
return instaparse.combinators_source.hide.call(null,instaparse$cfg$build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "paren":
var G__16517 = instaparse.cfg.content.call(null,tree);
tree = G__16517;
continue;

break;
case "regexp":
return instaparse.combinators_source.regexp.call(null,instaparse.cfg.process_regexp.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "plus":
return instaparse.combinators_source.plus.call(null,instaparse$cfg$build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "epsilon":
return instaparse.combinators_source.Epsilon;

break;
case "opt":
return instaparse.combinators_source.opt.call(null,instaparse$cfg$build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(instaparse.cfg.tag.call(null,tree))].join('')));

}
break;
}
});
/**
 * Returns a sequence of all non-terminals in a parser built from combinators.
 */
instaparse.cfg.seq_nt = (function instaparse$cfg$seq_nt(parser){
while(true){
var G__16519 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__16519) {
case "neg":
var G__16521 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser);
parser = G__16521;
continue;

break;
case "cat":
return cljs.core.mapcat.call(null,instaparse$cfg$seq_nt,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser));

break;
case "ord":
return cljs.core.mapcat.call(null,instaparse$cfg$seq_nt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser)], null));

break;
case "alt":
return cljs.core.mapcat.call(null,instaparse$cfg$seq_nt,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser));

break;
case "look":
var G__16522 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser);
parser = G__16522;
continue;

break;
case "nt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(parser)], null);

break;
case "rep":
var G__16523 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser);
parser = G__16523;
continue;

break;
case "star":
var G__16524 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser);
parser = G__16524;
continue;

break;
case "string":
return cljs.core.PersistentVector.EMPTY;

break;
case "regexp":
return cljs.core.PersistentVector.EMPTY;

break;
case "plus":
var G__16525 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser);
parser = G__16525;
continue;

break;
case "epsilon":
return cljs.core.PersistentVector.EMPTY;

break;
case "string-ci":
return cljs.core.PersistentVector.EMPTY;

break;
case "char":
return cljs.core.PersistentVector.EMPTY;

break;
case "opt":
var G__16526 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser);
parser = G__16526;
continue;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
break;
}
});
/**
 * Throw error if grammar uses any invalid non-terminals in its productions
 */
instaparse.cfg.check_grammar = (function instaparse$cfg$check_grammar(grammar_map){
var valid_nts_16535 = cljs.core.set.call(null,cljs.core.keys.call(null,grammar_map));
var seq__16531_16536 = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.mapcat.call(null,instaparse.cfg.seq_nt,cljs.core.vals.call(null,grammar_map))));
var chunk__16532_16537 = null;
var count__16533_16538 = (0);
var i__16534_16539 = (0);
while(true){
if((i__16534_16539 < count__16533_16538)){
var nt_16540 = cljs.core._nth.call(null,chunk__16532_16537,i__16534_16539);
if(cljs.core.truth_(valid_nts_16535.call(null,nt_16540))){
} else {
throw [cljs.core.str(cljs.core.subs.call(null,[cljs.core.str(nt_16540)].join(''),(1))),cljs.core.str(" occurs on the right-hand side of your grammar, but not on the left")].join('');
}

var G__16541 = seq__16531_16536;
var G__16542 = chunk__16532_16537;
var G__16543 = count__16533_16538;
var G__16544 = (i__16534_16539 + (1));
seq__16531_16536 = G__16541;
chunk__16532_16537 = G__16542;
count__16533_16538 = G__16543;
i__16534_16539 = G__16544;
continue;
} else {
var temp__4657__auto___16545 = cljs.core.seq.call(null,seq__16531_16536);
if(temp__4657__auto___16545){
var seq__16531_16546__$1 = temp__4657__auto___16545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16531_16546__$1)){
var c__7027__auto___16547 = cljs.core.chunk_first.call(null,seq__16531_16546__$1);
var G__16548 = cljs.core.chunk_rest.call(null,seq__16531_16546__$1);
var G__16549 = c__7027__auto___16547;
var G__16550 = cljs.core.count.call(null,c__7027__auto___16547);
var G__16551 = (0);
seq__16531_16536 = G__16548;
chunk__16532_16537 = G__16549;
count__16533_16538 = G__16550;
i__16534_16539 = G__16551;
continue;
} else {
var nt_16552 = cljs.core.first.call(null,seq__16531_16546__$1);
if(cljs.core.truth_(valid_nts_16535.call(null,nt_16552))){
} else {
throw [cljs.core.str(cljs.core.subs.call(null,[cljs.core.str(nt_16552)].join(''),(1))),cljs.core.str(" occurs on the right-hand side of your grammar, but not on the left")].join('');
}

var G__16553 = cljs.core.next.call(null,seq__16531_16546__$1);
var G__16554 = null;
var G__16555 = (0);
var G__16556 = (0);
seq__16531_16536 = G__16553;
chunk__16532_16537 = G__16554;
count__16533_16538 = G__16555;
i__16534_16539 = G__16556;
continue;
}
} else {
}
}
break;
}

return grammar_map;
});
instaparse.cfg.build_parser = (function instaparse$cfg$build_parser(spec,output_format){
var rules = instaparse.gll.parse.call(null,instaparse.cfg.cfg,new cljs.core.Keyword(null,"rules","rules",1198912366),spec,false);
if((rules instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16559_16561 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16560_16562 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16559_16561,_STAR_print_fn_STAR_16560_16562,sb__7202__auto__,rules){
return (function (x__7203__auto__){
return sb__7202__auto__.append(x__7203__auto__);
});})(_STAR_print_newline_STAR_16559_16561,_STAR_print_fn_STAR_16560_16562,sb__7202__auto__,rules))
;

try{cljs.core.println.call(null,rules);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16560_16562;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16559_16561;
}
return [cljs.core.str(sb__7202__auto__)].join('');
})())].join('');
} else {
var productions = cljs.core.map.call(null,instaparse.cfg.build_rule,rules);
var start_production = cljs.core.first.call(null,cljs.core.first.call(null,productions));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar.call(null,instaparse.reduction.apply_standard_reductions.call(null,output_format,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,productions))),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});
instaparse.cfg.build_parser_from_combinators = (function instaparse$cfg$build_parser_from_combinators(grammar_map,output_format,start_production){
if((start_production == null)){
throw "When you build a parser from a map of parser combinators, you must provide a start production using the :start keyword argument.";
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar.call(null,instaparse.reduction.apply_standard_reductions.call(null,output_format,grammar_map)),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});
/**
 * Takes an EBNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.   
 * Useful for combining with other combinators.
 */
instaparse.cfg.ebnf = (function instaparse$cfg$ebnf(spec){
if(cljs.core.truth_(cljs.core.re_find.call(null,/[:=]/,spec))){
var rules = instaparse.gll.parse.call(null,instaparse.cfg.cfg,new cljs.core.Keyword(null,"rules","rules",1198912366),spec,false);
if((rules instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16567_16571 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16568_16572 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16567_16571,_STAR_print_fn_STAR_16568_16572,sb__7202__auto__,rules){
return (function (x__7203__auto__){
return sb__7202__auto__.append(x__7203__auto__);
});})(_STAR_print_newline_STAR_16567_16571,_STAR_print_fn_STAR_16568_16572,sb__7202__auto__,rules))
;

try{cljs.core.println.call(null,rules);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16568_16572;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16567_16571;
}
return [cljs.core.str(sb__7202__auto__)].join('');
})())].join('');
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,instaparse.cfg.build_rule,rules));
}
} else {
var rhs = instaparse.gll.parse.call(null,instaparse.cfg.cfg,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425),spec,false);
if((rhs instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7202__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16569_16573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16570_16574 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16569_16573,_STAR_print_fn_STAR_16570_16574,sb__7202__auto__,rhs){
return (function (x__7203__auto__){
return sb__7202__auto__.append(x__7203__auto__);
});})(_STAR_print_newline_STAR_16569_16573,_STAR_print_fn_STAR_16570_16574,sb__7202__auto__,rhs))
;

try{cljs.core.println.call(null,rhs);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16570_16574;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16569_16573;
}
return [cljs.core.str(sb__7202__auto__)].join('');
})())].join('');
} else {
return instaparse.cfg.build_rule.call(null,cljs.core.first.call(null,rhs));
}
}
});

//# sourceMappingURL=cfg.js.map?rel=1471427568231