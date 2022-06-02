/*! For license information please see app.js.LICENSE.txt */
console.log('funnel-0.00001');

!function(e) {
	var t = {};
	function i(n) {
			if (t[n])
					return t[n].exports;
			var r = t[n] = {
					i: n,
					l: !1,
					exports: {}
			};
			return e[n].call(r.exports, r, r.exports, i),
			r.l = !0,
			r.exports
	}
	i.m = e,
	i.c = t,
	i.d = function(e, t, n) {
			i.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: n
			})
	}
	,
	i.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
			}),
			Object.defineProperty(e, "__esModule", {
					value: !0
			})
	}
	,
	i.t = function(e, t) {
			if (1 & t && (e = i(e)),
			8 & t)
					return e;
			if (4 & t && "object" == typeof e && e && e.__esModule)
					return e;
			var n = Object.create(null);
			if (i.r(n),
			Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
			}),
			2 & t && "string" != typeof e)
					for (var r in e)
							i.d(n, r, function(t) {
									return e[t]
							}
							.bind(null, r));
			return n
	}
	,
	i.n = function(e) {
			var t = e && e.__esModule ? function() {
					return e.default
			}
			: function() {
					return e
			}
			;
			return i.d(t, "a", t),
			t
	}
	,
	i.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
	}
	,
	i.p = "/",
	i(i.s = 0)
}({
	

	"+924": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
					return n
			}
			)),
			i.d(t, "a", (function() {
					return r
			}
			));
			i("9AQC");
			function n(e, t) {
					return void 0 === t && (t = 0),
					"string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
			}
			function r(e, t) {
					var i = e
						, n = i.length;
					if (n <= 150)
							return i;
					t > n && (t = n);
					var r = Math.max(t - 60, 0);
					r < 5 && (r = 0);
					var a = Math.min(r + 140, n);
					return a > n - 5 && (a = n),
					a === n && (r = Math.max(a - 140, 0)),
					i = i.slice(r, a),
					r > 0 && (i = "'{snip} " + i),
					a < n && (i += " {snip}"),
					i
			}
	},
	"+9CB": function(e, t, i) {
			"use strict";
			var n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]
				, r = function(e) {
					return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
			};
			e.exports = {
					isLikelyAacData: function(e) {
							return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
					},
					parseId3TagSize: function(e, t) {
							var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
							return (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
					},
					parseAdtsSize: function(e, t) {
							var i = (224 & e[t + 5]) >> 5
								, n = e[t + 4] << 3;
							return 6144 & e[t + 3] | n | i
					},
					parseType: function(e, t) {
							return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio" : null
					},
					parseSampleRate: function(e) {
							for (var t = 0; t + 5 < e.length; ) {
									if (255 === e[t] && 240 == (246 & e[t + 1]))
											return n[(60 & e[t + 2]) >>> 2];
									t++
							}
							return null
					},
					parseAacTimestamp: function(e) {
							var t, i, n;
							t = 10,
							64 & e[5] && (t += 4,
							t += r(e.subarray(10, 14)));
							do {
									if ((i = r(e.subarray(t + 4, t + 8))) < 1)
											return null;
									if ("PRIV" === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
											n = e.subarray(t + 10, t + i + 10);
											for (var a = 0; a < n.byteLength; a++)
													if (0 === n[a]) {
															if ("com.apple.streaming.transportStreamTimestamp" === unescape(function(e, t, i) {
																	var n, r = "";
																	for (n = t; n < i; n++)
																			r += "%" + ("00" + e[n].toString(16)).slice(-2);
																	return r
															}(n, 0, a))) {
																	var s = n.subarray(a + 1)
																		, o = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
																	return o *= 4,
																	o += 3 & s[7]
															}
															break
													}
									}
									t += 10,
									t += i
							} while (t < e.byteLength);
							return null
					}
			}
	},
	"+A1k": function(e, t, i) {
			"use strict";
			(function(e, n) {
					i.d(t, "b", (function() {
							return r
					}
					)),
					i.d(t, "a", (function() {
							return a
					}
					));
					i("9AQC"),
					i("6PXS");
					function r() {
							return "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0)
					}
					function a(e, t) {
							return e.require(t)
					}
			}
			).call(this, i("8oxB"), i("3UD+")(e))
	},
	"+X0y": function(e, t) {
			var i = {
					"": !0,
					up: !0
			};
			function n(e) {
					return "number" == typeof e && e >= 0 && e <= 100
			}
			e.exports = function() {
					var e = 100
						, t = 3
						, r = 0
						, a = 100
						, s = 0
						, o = 100
						, u = "";
					Object.defineProperties(this, {
							width: {
									enumerable: !0,
									get: function() {
											return e
									},
									set: function(t) {
											if (!n(t))
													throw new Error("Width must be between 0 and 100.");
											e = t
									}
							},
							lines: {
									enumerable: !0,
									get: function() {
											return t
									},
									set: function(e) {
											if ("number" != typeof e)
													throw new TypeError("Lines must be set to a number.");
											t = e
									}
							},
							regionAnchorY: {
									enumerable: !0,
									get: function() {
											return a
									},
									set: function(e) {
											if (!n(e))
													throw new Error("RegionAnchorX must be between 0 and 100.");
											a = e
									}
							},
							regionAnchorX: {
									enumerable: !0,
									get: function() {
											return r
									},
									set: function(e) {
											if (!n(e))
													throw new Error("RegionAnchorY must be between 0 and 100.");
											r = e
									}
							},
							viewportAnchorY: {
									enumerable: !0,
									get: function() {
											return o
									},
									set: function(e) {
											if (!n(e))
													throw new Error("ViewportAnchorY must be between 0 and 100.");
											o = e
									}
							},
							viewportAnchorX: {
									enumerable: !0,
									get: function() {
											return s
									},
									set: function(e) {
											if (!n(e))
													throw new Error("ViewportAnchorX must be between 0 and 100.");
											s = e
									}
							},
							scroll: {
									enumerable: !0,
									get: function() {
											return u
									},
									set: function(e) {
											var t = function(e) {
													return "string" == typeof e && (!!i[e.toLowerCase()] && e.toLowerCase())
											}(e);
											!1 === t ? console.warn("Scroll: an invalid or illegal string was specified.") : u = t
									}
							}
					})
			}
	},
	0: function(e, t, i) {
			i("bUC5"),
			i("iWKX"),
			e.exports = i("gqAi")
	},
	"0CxO": function(e, t, i) {
			var n = i("7zRj")
				, r = Object.create || function() {
					function e() {}
					return function(t) {
							if (1 !== arguments.length)
									throw new Error("Object.create shim only accepts one parameter.");
							return e.prototype = t,
							new e
					}
			}();
			function a(e, t) {
					this.name = "ParsingError",
					this.code = e.code,
					this.message = t || e.message
			}
			function s(e) {
					function t(e, t, i, n) {
							return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | n) / 1e3
					}
					var i = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
					return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
			}
			function o() {
					this.values = r(null)
			}
			function u(e, t, i, n) {
					var r = n ? e.split(n) : [e];
					for (var a in r)
							if ("string" == typeof r[a]) {
									var s = r[a].split(i);
									if (2 === s.length)
											t(s[0], s[1])
							}
			}
			function l(e, t, i) {
					var n = e;
					function r() {
							var t = s(e);
							if (null === t)
									throw new a(a.Errors.BadTimeStamp,"Malformed timestamp: " + n);
							return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
							t
					}
					function l() {
							e = e.replace(/^\s+/, "")
					}
					if (l(),
					t.startTime = r(),
					l(),
					"--\x3e" !== e.substr(0, 3))
							throw new a(a.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
					e = e.substr(3),
					l(),
					t.endTime = r(),
					l(),
					function(e, t) {
							var n = new o;
							u(e, (function(e, t) {
									switch (e) {
									case "region":
											for (var r = i.length - 1; r >= 0; r--)
													if (i[r].id === t) {
															n.set(e, i[r].region);
															break
													}
											break;
									case "vertical":
											n.alt(e, t, ["rl", "lr"]);
											break;
									case "line":
											var a = t.split(",")
												, s = a[0];
											n.integer(e, s),
											n.percent(e, s) && n.set("snapToLines", !1),
											n.alt(e, s, ["auto"]),
											2 === a.length && n.alt("lineAlign", a[1], ["start", "center", "end"]);
											break;
									case "position":
											a = t.split(","),
											n.percent(e, a[0]),
											2 === a.length && n.alt("positionAlign", a[1], ["start", "center", "end"]);
											break;
									case "size":
											n.percent(e, t);
											break;
									case "align":
											n.alt(e, t, ["start", "center", "end", "left", "right"])
									}
							}
							), /:/, /\s/),
							t.region = n.get("region", null),
							t.vertical = n.get("vertical", "");
							try {
									t.line = n.get("line", "auto")
							} catch (e) {}
							t.lineAlign = n.get("lineAlign", "start"),
							t.snapToLines = n.get("snapToLines", !0),
							t.size = n.get("size", 100);
							try {
									t.align = n.get("align", "center")
							} catch (e) {
									t.align = n.get("align", "middle")
							}
							try {
									t.position = n.get("position", "auto")
							} catch (e) {
									t.position = n.get("position", {
											start: 0,
											left: 0,
											center: 50,
											middle: 50,
											end: 100,
											right: 100
									}, t.align)
							}
							t.positionAlign = n.get("positionAlign", {
									start: "start",
									left: "start",
									center: "center",
									middle: "center",
									end: "end",
									right: "end"
							}, t.align)
					}(e, t)
			}
			a.prototype = r(Error.prototype),
			a.prototype.constructor = a,
			a.Errors = {
					BadSignature: {
							code: 0,
							message: "Malformed WebVTT signature."
					},
					BadTimeStamp: {
							code: 1,
							message: "Malformed time stamp."
					}
			},
			o.prototype = {
					set: function(e, t) {
							this.get(e) || "" === t || (this.values[e] = t)
					},
					get: function(e, t, i) {
							return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
					},
					has: function(e) {
							return e in this.values
					},
					alt: function(e, t, i) {
							for (var n = 0; n < i.length; ++n)
									if (t === i[n]) {
											this.set(e, t);
											break
									}
					},
					integer: function(e, t) {
							/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
					},
					percent: function(e, t) {
							return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t),
							!0)
					}
			};
			var c = n.createElement("textarea")
				, h = {
					c: "span",
					i: "i",
					b: "b",
					u: "u",
					ruby: "ruby",
					rt: "rt",
					v: "span",
					lang: "span"
			}
				, d = {
					white: "rgba(255,255,255,1)",
					lime: "rgba(0,255,0,1)",
					cyan: "rgba(0,255,255,1)",
					red: "rgba(255,0,0,1)",
					yellow: "rgba(255,255,0,1)",
					magenta: "rgba(255,0,255,1)",
					blue: "rgba(0,0,255,1)",
					black: "rgba(0,0,0,1)"
			}
				, p = {
					v: "title",
					lang: "lang"
			}
				, f = {
					rt: "ruby"
			};
			function m(e, t) {
					function i() {
							if (!t)
									return null;
							var e, i = t.match(/^([^<]*)(<[^>]*>?)?/);
							return e = i[1] ? i[1] : i[2],
							t = t.substr(e.length),
							e
					}
					function n(e, t) {
							return !f[t.localName] || f[t.localName] === e.localName
					}
					function r(t, i) {
							var n = h[t];
							if (!n)
									return null;
							var r = e.document.createElement(n)
								, a = p[t];
							return a && i && (r[a] = i.trim()),
							r
					}
					for (var a, o, u = e.document.createElement("div"), l = u, m = []; null !== (a = i()); )
							if ("<" !== a[0])
									l.appendChild(e.document.createTextNode((o = a,
									c.innerHTML = o,
									o = c.textContent,
									c.textContent = "",
									o)));
							else {
									if ("/" === a[1]) {
											m.length && m[m.length - 1] === a.substr(2).replace(">", "") && (m.pop(),
											l = l.parentNode);
											continue
									}
									var g, v = s(a.substr(1, a.length - 2));
									if (v) {
											g = e.document.createProcessingInstruction("timestamp", v),
											l.appendChild(g);
											continue
									}
									var y = a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
									if (!y)
											continue;
									if (!(g = r(y[1], y[3])))
											continue;
									if (!n(l, g))
											continue;
									if (y[2]) {
											var _ = y[2].split(".");
											_.forEach((function(e) {
													var t = /^bg_/.test(e)
														, i = t ? e.slice(3) : e;
													if (d.hasOwnProperty(i)) {
															var n = t ? "background-color" : "color"
																, r = d[i];
															g.style[n] = r
													}
											}
											)),
											g.className = _.join(" ")
									}
									m.push(y[1]),
									l.appendChild(g),
									l = g
							}
					return u
			}
			var g = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
			function v(e) {
					for (var t = 0; t < g.length; t++) {
							var i = g[t];
							if (e >= i[0] && e <= i[1])
									return !0
					}
					return !1
			}
			function y(e) {
					var t = []
						, i = "";
					if (!e || !e.childNodes)
							return "ltr";
					function n(e, t) {
							for (var i = t.childNodes.length - 1; i >= 0; i--)
									e.push(t.childNodes[i])
					}
					function r(e) {
							if (!e || !e.length)
									return null;
							var t = e.pop()
								, i = t.textContent || t.innerText;
							if (i) {
									var a = i.match(/^.*(\n|\r)/);
									return a ? (e.length = 0,
									a[0]) : i
							}
							return "ruby" === t.tagName ? r(e) : t.childNodes ? (n(e, t),
							r(e)) : void 0
					}
					for (n(t, e); i = r(t); )
							for (var a = 0; a < i.length; a++)
									if (v(i.charCodeAt(a)))
											return "rtl";
					return "ltr"
			}
			function _() {}
			function b(e, t, i) {
					_.call(this),
					this.cue = t,
					this.cueDiv = m(e, t.text);
					var n = {
							color: "rgba(255, 255, 255, 1)",
							backgroundColor: "rgba(0, 0, 0, 0.8)",
							position: "relative",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							display: "inline",
							writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
							unicodeBidi: "plaintext"
					};
					this.applyStyles(n, this.cueDiv),
					this.div = e.document.createElement("div"),
					n = {
							direction: y(this.cueDiv),
							writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
							unicodeBidi: "plaintext",
							textAlign: "middle" === t.align ? "center" : t.align,
							font: i.font,
							whiteSpace: "pre-line",
							position: "absolute"
					},
					this.applyStyles(n),
					this.div.appendChild(this.cueDiv);
					var r = 0;
					switch (t.positionAlign) {
					case "start":
							r = t.position;
							break;
					case "center":
							r = t.position - t.size / 2;
							break;
					case "end":
							r = t.position - t.size
					}
					"" === t.vertical ? this.applyStyles({
							left: this.formatStyle(r, "%"),
							width: this.formatStyle(t.size, "%")
					}) : this.applyStyles({
							top: this.formatStyle(r, "%"),
							height: this.formatStyle(t.size, "%")
					}),
					this.move = function(e) {
							this.applyStyles({
									top: this.formatStyle(e.top, "px"),
									bottom: this.formatStyle(e.bottom, "px"),
									left: this.formatStyle(e.left, "px"),
									right: this.formatStyle(e.right, "px"),
									height: this.formatStyle(e.height, "px"),
									width: this.formatStyle(e.width, "px")
							})
					}
			}
			function T(e) {
					var t, i, n, r;
					if (e.div) {
							i = e.div.offsetHeight,
							n = e.div.offsetWidth,
							r = e.div.offsetTop;
							var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
							e = e.div.getBoundingClientRect(),
							t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0
					}
					this.left = e.left,
					this.right = e.right,
					this.top = e.top || r,
					this.height = e.height || i,
					this.bottom = e.bottom || r + (e.height || i),
					this.width = e.width || n,
					this.lineHeight = void 0 !== t ? t : e.lineHeight
			}
			function S(e, t, i, n) {
					var r = new T(t)
						, a = t.cue
						, s = function(e) {
							if ("number" == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100))
									return e.line;
							if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement)
									return -1;
							for (var t = e.track, i = t.textTrackList, n = 0, r = 0; r < i.length && i[r] !== t; r++)
									"showing" === i[r].mode && n++;
							return -1 * ++n
					}(a)
						, o = [];
					if (a.snapToLines) {
							var u;
							switch (a.vertical) {
							case "":
									o = ["+y", "-y"],
									u = "height";
									break;
							case "rl":
									o = ["+x", "-x"],
									u = "width";
									break;
							case "lr":
									o = ["-x", "+x"],
									u = "width"
							}
							var l = r.lineHeight
								, c = l * Math.round(s)
								, h = i[u] + l
								, d = o[0];
							Math.abs(c) > h && (c = c < 0 ? -1 : 1,
							c *= Math.ceil(h / l) * l),
							s < 0 && (c += "" === a.vertical ? i.height : i.width,
							o = o.reverse()),
							r.move(d, c)
					} else {
							var p = r.lineHeight / i.height * 100;
							switch (a.lineAlign) {
							case "center":
									s -= p / 2;
									break;
							case "end":
									s -= p
							}
							switch (a.vertical) {
							case "":
									t.applyStyles({
											top: t.formatStyle(s, "%")
									});
									break;
							case "rl":
									t.applyStyles({
											left: t.formatStyle(s, "%")
									});
									break;
							case "lr":
									t.applyStyles({
											right: t.formatStyle(s, "%")
									})
							}
							o = ["+y", "-x", "+x", "-y"],
							r = new T(t)
					}
					var f = function(e, t) {
							for (var r, a = new T(e), s = 1, o = 0; o < t.length; o++) {
									for (; e.overlapsOppositeAxis(i, t[o]) || e.within(i) && e.overlapsAny(n); )
											e.move(t[o]);
									if (e.within(i))
											return e;
									var u = e.intersectPercentage(i);
									s > u && (r = new T(e),
									s = u),
									e = new T(a)
							}
							return r || a
					}(r, o);
					t.move(f.toCSSCompatValues(i))
			}
			function w() {}
			_.prototype.applyStyles = function(e, t) {
					for (var i in t = t || this.div,
					e)
							e.hasOwnProperty(i) && (t.style[i] = e[i])
			}
			,
			_.prototype.formatStyle = function(e, t) {
					return 0 === e ? 0 : e + t
			}
			,
			b.prototype = r(_.prototype),
			b.prototype.constructor = b,
			T.prototype.move = function(e, t) {
					switch (t = void 0 !== t ? t : this.lineHeight,
					e) {
					case "+x":
							this.left += t,
							this.right += t;
							break;
					case "-x":
							this.left -= t,
							this.right -= t;
							break;
					case "+y":
							this.top += t,
							this.bottom += t;
							break;
					case "-y":
							this.top -= t,
							this.bottom -= t
					}
			}
			,
			T.prototype.overlaps = function(e) {
					return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
			}
			,
			T.prototype.overlapsAny = function(e) {
					for (var t = 0; t < e.length; t++)
							if (this.overlaps(e[t]))
									return !0;
					return !1
			}
			,
			T.prototype.within = function(e) {
					return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
			}
			,
			T.prototype.overlapsOppositeAxis = function(e, t) {
					switch (t) {
					case "+x":
							return this.left < e.left;
					case "-x":
							return this.right > e.right;
					case "+y":
							return this.top < e.top;
					case "-y":
							return this.bottom > e.bottom
					}
			}
			,
			T.prototype.intersectPercentage = function(e) {
					return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
			}
			,
			T.prototype.toCSSCompatValues = function(e) {
					return {
							top: this.top - e.top,
							bottom: e.bottom - this.bottom,
							left: this.left - e.left,
							right: e.right - this.right,
							height: this.height,
							width: this.width
					}
			}
			,
			T.getSimpleBoxPosition = function(e) {
					var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0
						, i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0
						, n = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
					return {
							left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
							right: e.right,
							top: e.top || n,
							height: e.height || t,
							bottom: e.bottom || n + (e.height || t),
							width: e.width || i
					}
			}
			,
			w.StringDecoder = function() {
					return {
							decode: function(e) {
									if (!e)
											return "";
									if ("string" != typeof e)
											throw new Error("Error - expected string data.");
									return decodeURIComponent(encodeURIComponent(e))
							}
					}
			}
			,
			w.convertCueToDOMTree = function(e, t) {
					return e && t ? m(e, t) : null
			}
			;
			w.processCues = function(e, t, i) {
					if (!e || !t || !i)
							return null;
					for (; i.firstChild; )
							i.removeChild(i.firstChild);
					var n = e.document.createElement("div");
					if (n.style.position = "absolute",
					n.style.left = "0",
					n.style.right = "0",
					n.style.top = "0",
					n.style.bottom = "0",
					n.style.margin = "1.5%",
					i.appendChild(n),
					function(e) {
							for (var t = 0; t < e.length; t++)
									if (e[t].hasBeenReset || !e[t].displayState)
											return !0;
							return !1
					}(t)) {
							var r = []
								, a = T.getSimpleBoxPosition(n)
								, s = {
									font: Math.round(.05 * a.height * 100) / 100 + "px sans-serif"
							};
							!function() {
									for (var i, o, u = 0; u < t.length; u++)
											o = t[u],
											i = new b(e,o,s),
											n.appendChild(i.div),
											S(0, i, a, r),
											o.displayState = i.div,
											r.push(T.getSimpleBoxPosition(i))
							}()
					} else
							for (var o = 0; o < t.length; o++)
									n.appendChild(t[o].displayState)
			}
			,
			w.Parser = function(e, t, i) {
					i || (i = t,
					t = {}),
					t || (t = {}),
					this.window = e,
					this.vttjs = t,
					this.state = "INITIAL",
					this.buffer = "",
					this.decoder = i || new TextDecoder("utf8"),
					this.regionList = []
			}
			,
			w.Parser.prototype = {
					reportOrThrowError: function(e) {
							if (!(e instanceof a))
									throw e;
							this.onparsingerror && this.onparsingerror(e)
					},
					parse: function(e) {
							var t = this;
							function i() {
									for (var e = t.buffer, i = 0; i < e.length && "\r" !== e[i] && "\n" !== e[i]; )
											++i;
									var n = e.substr(0, i);
									return "\r" === e[i] && ++i,
									"\n" === e[i] && ++i,
									t.buffer = e.substr(i),
									n
							}
							function n(e) {
									e.match(/X-TIMESTAMP-MAP/) ? u(e, (function(e, i) {
											switch (e) {
											case "X-TIMESTAMP-MAP":
													!function(e) {
															var i = new o;
															u(e, (function(e, t) {
																	switch (e) {
																	case "MPEGT":
																			i.integer(e + "S", t);
																			break;
																	case "LOCA":
																			i.set(e + "L", s(t))
																	}
															}
															), /[^\d]:/, /,/),
															t.ontimestampmap && t.ontimestampmap({
																	MPEGTS: i.get("MPEGTS"),
																	LOCAL: i.get("LOCAL")
															})
													}(i)
											}
									}
									), /=/) : u(e, (function(e, i) {
											switch (e) {
											case "Region":
													!function(e) {
															var i = new o;
															if (u(e, (function(e, t) {
																	switch (e) {
																	case "id":
																			i.set(e, t);
																			break;
																	case "width":
																			i.percent(e, t);
																			break;
																	case "lines":
																			i.integer(e, t);
																			break;
																	case "regionanchor":
																	case "viewportanchor":
																			var n = t.split(",");
																			if (2 !== n.length)
																					break;
																			var r = new o;
																			if (r.percent("x", n[0]),
																			r.percent("y", n[1]),
																			!r.has("x") || !r.has("y"))
																					break;
																			i.set(e + "X", r.get("x")),
																			i.set(e + "Y", r.get("y"));
																			break;
																	case "scroll":
																			i.alt(e, t, ["up"])
																	}
															}
															), /=/, /\s/),
															i.has("id")) {
																	var n = new (t.vttjs.VTTRegion || t.window.VTTRegion);
																	n.width = i.get("width", 100),
																	n.lines = i.get("lines", 3),
																	n.regionAnchorX = i.get("regionanchorX", 0),
																	n.regionAnchorY = i.get("regionanchorY", 100),
																	n.viewportAnchorX = i.get("viewportanchorX", 0),
																	n.viewportAnchorY = i.get("viewportanchorY", 100),
																	n.scroll = i.get("scroll", ""),
																	t.onregion && t.onregion(n),
																	t.regionList.push({
																			id: i.get("id"),
																			region: n
																	})
															}
													}(i)
											}
									}
									), /:/)
							}
							e && (t.buffer += t.decoder.decode(e, {
									stream: !0
							}));
							try {
									var r;
									if ("INITIAL" === t.state) {
											if (!/\r\n|\n/.test(t.buffer))
													return this;
											var c = (r = i()).match(/^WEBVTT([ \t].*)?$/);
											if (!c || !c[0])
													throw new a(a.Errors.BadSignature);
											t.state = "HEADER"
									}
									for (var h = !1; t.buffer; ) {
											if (!/\r\n|\n/.test(t.buffer))
													return this;
											switch (h ? h = !1 : r = i(),
											t.state) {
											case "HEADER":
													/:/.test(r) ? n(r) : r || (t.state = "ID");
													continue;
											case "NOTE":
													r || (t.state = "ID");
													continue;
											case "ID":
													if (/^NOTE($|[ \t])/.test(r)) {
															t.state = "NOTE";
															break
													}
													if (!r)
															continue;
													t.cue = new (t.vttjs.VTTCue || t.window.VTTCue)(0,0,"");
													try {
															t.cue.align = "center"
													} catch (e) {
															t.cue.align = "middle"
													}
													if (t.state = "CUE",
													-1 === r.indexOf("--\x3e")) {
															t.cue.id = r;
															continue
													}
											case "CUE":
													try {
															l(r, t.cue, t.regionList)
													} catch (e) {
															t.reportOrThrowError(e),
															t.cue = null,
															t.state = "BADCUE";
															continue
													}
													t.state = "CUETEXT";
													continue;
											case "CUETEXT":
													var d = -1 !== r.indexOf("--\x3e");
													if (!r || d && (h = !0)) {
															t.oncue && t.oncue(t.cue),
															t.cue = null,
															t.state = "ID";
															continue
													}
													t.cue.text && (t.cue.text += "\n"),
													t.cue.text += r.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
													continue;
											case "BADCUE":
													r || (t.state = "ID");
													continue
											}
									}
							} catch (e) {
									t.reportOrThrowError(e),
									"CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue),
									t.cue = null,
									t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
							}
							return this
					},
					flush: function() {
							try {
									if (this.buffer += this.decoder.decode(),
									(this.cue || "HEADER" === this.state) && (this.buffer += "\n\n",
									this.parse()),
									"INITIAL" === this.state)
											throw new a(a.Errors.BadSignature)
							} catch (e) {
									this.reportOrThrowError(e)
							}
							return this.onflush && this.onflush(),
							this
					}
			},
			e.exports = w
	},
	"0Tbm": function(e, t, i) {
			var n, r, a, s, o;
			n = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
			r = /^([^\/?#]*)(.*)$/,
			a = /(?:\/|^)\.(?=\/)/g,
			s = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
			o = {
					buildAbsoluteURL: function(e, t, i) {
							if (i = i || {},
							e = e.trim(),
							!(t = t.trim())) {
									if (!i.alwaysNormalize)
											return e;
									var n = o.parseURL(e);
									if (!n)
											throw new Error("Error trying to parse base URL.");
									return n.path = o.normalizePath(n.path),
									o.buildURLFromParts(n)
							}
							var a = o.parseURL(t);
							if (!a)
									throw new Error("Error trying to parse relative URL.");
							if (a.scheme)
									return i.alwaysNormalize ? (a.path = o.normalizePath(a.path),
									o.buildURLFromParts(a)) : t;
							var s = o.parseURL(e);
							if (!s)
									throw new Error("Error trying to parse base URL.");
							if (!s.netLoc && s.path && "/" !== s.path[0]) {
									var u = r.exec(s.path);
									s.netLoc = u[1],
									s.path = u[2]
							}
							s.netLoc && !s.path && (s.path = "/");
							var l = {
									scheme: s.scheme,
									netLoc: a.netLoc,
									path: null,
									params: a.params,
									query: a.query,
									fragment: a.fragment
							};
							if (!a.netLoc && (l.netLoc = s.netLoc,
							"/" !== a.path[0]))
									if (a.path) {
											var c = s.path
												, h = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
											l.path = o.normalizePath(h)
									} else
											l.path = s.path,
											a.params || (l.params = s.params,
											a.query || (l.query = s.query));
							return null === l.path && (l.path = i.alwaysNormalize ? o.normalizePath(a.path) : a.path),
							o.buildURLFromParts(l)
					},
					parseURL: function(e) {
							var t = n.exec(e);
							return t ? {
									scheme: t[1] || "",
									netLoc: t[2] || "",
									path: t[3] || "",
									params: t[4] || "",
									query: t[5] || "",
									fragment: t[6] || ""
							} : null
					},
					normalizePath: function(e) {
							for (e = e.split("").reverse().join("").replace(a, ""); e.length !== (e = e.replace(s, "")).length; )
									;
							return e.split("").reverse().join("")
					},
					buildURLFromParts: function(e) {
							return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
					}
			},
			e.exports = o
	},
	1: function(e, t) {},
	"19KI": function(e, t, i) {
			(function(t) {
					var i;
					i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
					e.exports = i
			}
			).call(this, i("yLpj"))
	},
	"1h1e": function(e, t) {
			var i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
				, n = new RegExp("[\\-\\.0-9" + i.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]")
				, r = new RegExp("^" + i.source + n.source + "*(?::" + i.source + n.source + "*)?$");
			function a() {}
			function s(e, t) {
					return t.lineNumber = e.lineNumber,
					t.columnNumber = e.columnNumber,
					t
			}
			function o(e, t, i, n, r, a) {
					for (var s, o = ++t, u = 0; ; ) {
							var l = e.charAt(o);
							switch (l) {
							case "=":
									if (1 === u)
											s = e.slice(t, o),
											u = 3;
									else {
											if (2 !== u)
													throw new Error("attribute equal must after attrName");
											u = 3
									}
									break;
							case "'":
							case '"':
									if (3 === u || 1 === u) {
											if (1 === u && (a.warning('attribute value must after "="'),
											s = e.slice(t, o)),
											t = o + 1,
											!((o = e.indexOf(l, t)) > 0))
													throw new Error("attribute value no end '" + l + "' match");
											c = e.slice(t, o).replace(/&#?\w+;/g, r),
											i.add(s, c, t - 1),
											u = 5
									} else {
											if (4 != u)
													throw new Error('attribute value must after "="');
											c = e.slice(t, o).replace(/&#?\w+;/g, r),
											i.add(s, c, t),
											a.warning('attribute "' + s + '" missed start quot(' + l + ")!!"),
											t = o + 1,
											u = 5
									}
									break;
							case "/":
									switch (u) {
									case 0:
											i.setTagName(e.slice(t, o));
									case 5:
									case 6:
									case 7:
											u = 7,
											i.closed = !0;
									case 4:
									case 1:
									case 2:
											break;
									default:
											throw new Error("attribute invalid close char('/')")
									}
									break;
							case "":
									return a.error("unexpected end of input"),
									0 == u && i.setTagName(e.slice(t, o)),
									o;
							case ">":
									switch (u) {
									case 0:
											i.setTagName(e.slice(t, o));
									case 5:
									case 6:
									case 7:
											break;
									case 4:
									case 1:
											"/" === (c = e.slice(t, o)).slice(-1) && (i.closed = !0,
											c = c.slice(0, -1));
									case 2:
											2 === u && (c = s),
											4 == u ? (a.warning('attribute "' + c + '" missed quot(")!!'),
											i.add(s, c.replace(/&#?\w+;/g, r), t)) : ("http://www.w3.org/1999/xhtml" === n[""] && c.match(/^(?:disabled|checked|selected)$/i) || a.warning('attribute "' + c + '" missed value!! "' + c + '" instead!!'),
											i.add(c, c, t));
											break;
									case 3:
											throw new Error("attribute value missed!!")
									}
									return o;
							case "":
									l = " ";
							default:
									if (l <= " ")
											switch (u) {
											case 0:
													i.setTagName(e.slice(t, o)),
													u = 6;
													break;
											case 1:
													s = e.slice(t, o),
													u = 2;
													break;
											case 4:
													var c = e.slice(t, o).replace(/&#?\w+;/g, r);
													a.warning('attribute "' + c + '" missed quot(")!!'),
													i.add(s, c, t);
											case 5:
													u = 6
											}
									else
											switch (u) {
											case 2:
													i.tagName;
													"http://www.w3.org/1999/xhtml" === n[""] && s.match(/^(?:disabled|checked|selected)$/i) || a.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'),
													i.add(s, s, t),
													t = o,
													u = 1;
													break;
											case 5:
													a.warning('attribute space is required"' + s + '"!!');
											case 6:
													u = 1,
													t = o;
													break;
											case 3:
													u = 4,
													t = o;
													break;
											case 7:
													throw new Error("elements closed character '/' and '>' must be connected to")
											}
							}
							o++
					}
			}
			function u(e, t, i) {
					for (var n = e.tagName, r = null, a = e.length; a--; ) {
							var s = e[a]
								, o = s.qName
								, u = s.value;
							if ((p = o.indexOf(":")) > 0)
									var l = s.prefix = o.slice(0, p)
										, c = o.slice(p + 1)
										, d = "xmlns" === l && c;
							else
									c = o,
									l = null,
									d = "xmlns" === o && "";
							s.localName = c,
							!1 !== d && (null == r && (r = {},
							h(i, i = {})),
							i[d] = r[d] = u,
							s.uri = "http://www.w3.org/2000/xmlns/",
							t.startPrefixMapping(d, u))
					}
					for (a = e.length; a--; ) {
							(l = (s = e[a]).prefix) && ("xml" === l && (s.uri = "http://www.w3.org/XML/1998/namespace"),
							"xmlns" !== l && (s.uri = i[l || ""]))
					}
					var p;
					(p = n.indexOf(":")) > 0 ? (l = e.prefix = n.slice(0, p),
					c = e.localName = n.slice(p + 1)) : (l = null,
					c = e.localName = n);
					var f = e.uri = i[l || ""];
					if (t.startElement(f, c, n, e),
					!e.closed)
							return e.currentNSMap = i,
							e.localNSMap = r,
							!0;
					if (t.endElement(f, c, n),
					r)
							for (l in r)
									t.endPrefixMapping(l)
			}
			function l(e, t, i, n, r) {
					if (/^(?:script|textarea)$/i.test(i)) {
							var a = e.indexOf("</" + i + ">", t)
								, s = e.substring(t + 1, a);
							if (/[&<]/.test(s))
									return /^script$/i.test(i) ? (r.characters(s, 0, s.length),
									a) : (s = s.replace(/&#?\w+;/g, n),
									r.characters(s, 0, s.length),
									a)
					}
					return t + 1
			}
			function c(e, t, i, n) {
					var r = n[i];
					return null == r && ((r = e.lastIndexOf("</" + i + ">")) < t && (r = e.lastIndexOf("</" + i)),
					n[i] = r),
					r < t
			}
			function h(e, t) {
					for (var i in e)
							t[i] = e[i]
			}
			function d(e, t, i, n) {
					switch (e.charAt(t + 2)) {
					case "-":
							return "-" === e.charAt(t + 3) ? (r = e.indexOf("--\x3e", t + 4)) > t ? (i.comment(e, t + 4, r - t - 4),
							r + 3) : (n.error("Unclosed comment"),
							-1) : -1;
					default:
							if ("CDATA[" == e.substr(t + 3, 6)) {
									var r = e.indexOf("]]>", t + 9);
									return i.startCDATA(),
									i.characters(e, t + 9, r - t - 9),
									i.endCDATA(),
									r + 3
							}
							var a = function(e, t) {
									var i, n = [], r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
									r.lastIndex = t,
									r.exec(e);
									for (; i = r.exec(e); )
											if (n.push(i),
											i[1])
													return n
							}(e, t)
								, s = a.length;
							if (s > 1 && /!doctype/i.test(a[0][0])) {
									var o = a[1][0]
										, u = s > 3 && /^public$/i.test(a[2][0]) && a[3][0]
										, l = s > 4 && a[4][0]
										, c = a[s - 1];
									return i.startDTD(o, u && u.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")),
									i.endDTD(),
									c.index + c[0].length
							}
					}
					return -1
			}
			function p(e, t, i) {
					var n = e.indexOf("?>", t);
					if (n) {
							var r = e.substring(t, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
							if (r) {
									r[0].length;
									return i.processingInstruction(r[1], r[2]),
									n + 2
							}
							return -1
					}
					return -1
			}
			function f(e) {}
			function m(e, t) {
					return e.__proto__ = t,
					e
			}
			a.prototype = {
					parse: function(e, t, i) {
							var n = this.domBuilder;
							n.startDocument(),
							h(t, t = {}),
							function(e, t, i, n, r) {
									function a(e) {
											var t = e.slice(1, -1);
											return t in i ? i[t] : "#" === t.charAt(0) ? function(e) {
													if (e > 65535) {
															var t = 55296 + ((e -= 65536) >> 10)
																, i = 56320 + (1023 & e);
															return String.fromCharCode(t, i)
													}
													return String.fromCharCode(e)
											}(parseInt(t.substr(1).replace("x", "0x"))) : (r.error("entity not found:" + e),
											e)
									}
									function h(t) {
											if (t > S) {
													var i = e.substring(S, t).replace(/&#?\w+;/g, a);
													_ && m(S),
													n.characters(i, 0, t - S),
													S = t
											}
									}
									function m(t, i) {
											for (; t >= v && (i = y.exec(e)); )
													g = i.index,
													v = g + i[0].length,
													_.lineNumber++;
											_.columnNumber = t - g + 1
									}
									var g = 0
										, v = 0
										, y = /.*(?:\r\n?|\n)|.*$/g
										, _ = n.locator
										, b = [{
											currentNSMap: t
									}]
										, T = {}
										, S = 0;
									for (; ; ) {
											try {
													var w = e.indexOf("<", S);
													if (w < 0) {
															if (!e.substr(S).match(/^\s*$/)) {
																	var k = n.doc
																		, E = k.createTextNode(e.substr(S));
																	k.appendChild(E),
																	n.currentElement = E
															}
															return
													}
													switch (w > S && h(w),
													e.charAt(w + 1)) {
													case "/":
															var C = e.indexOf(">", w + 3)
																, A = e.substring(w + 2, C)
																, x = b.pop();
															C < 0 ? (A = e.substring(w + 2).replace(/[\s<].*/, ""),
															r.error("end tag name: " + A + " is not complete:" + x.tagName),
															C = w + 1 + A.length) : A.match(/\s</) && (A = A.replace(/[\s<].*/, ""),
															r.error("end tag name: " + A + " maybe not complete"),
															C = w + 1 + A.length);
															var O = x.localNSMap
																, P = x.tagName == A;
															if (P || x.tagName && x.tagName.toLowerCase() == A.toLowerCase()) {
																	if (n.endElement(x.uri, x.localName, A),
																	O)
																			for (var I in O)
																					n.endPrefixMapping(I);
																	P || r.fatalError("end tag name: " + A + " is not match the current start tagName:" + x.tagName)
															} else
																	b.push(x);
															C++;
															break;
													case "?":
															_ && m(w),
															C = p(e, w, n);
															break;
													case "!":
															_ && m(w),
															C = d(e, w, n, r);
															break;
													default:
															_ && m(w);
															var L = new f
																, D = b[b.length - 1].currentNSMap
																, R = (C = o(e, w, L, D, a, r),
															L.length);
															if (!L.closed && c(e, C, L.tagName, T) && (L.closed = !0,
															i.nbsp || r.warning("unclosed xml attribute")),
															_ && R) {
																	for (var N = s(_, {}), U = 0; U < R; U++) {
																			var M = L[U];
																			m(M.offset),
																			M.locator = s(_, {})
																	}
																	n.locator = N,
																	u(L, n, D) && b.push(L),
																	n.locator = _
															} else
																	u(L, n, D) && b.push(L);
															"http://www.w3.org/1999/xhtml" !== L.uri || L.closed ? C++ : C = l(e, C, L.tagName, a, n)
													}
											} catch (e) {
													r.error("element parse error: " + e),
													C = -1
											}
											C > S ? S = C : h(Math.max(w, S) + 1)
									}
							}(e, t, i, n, this.errorHandler),
							n.endDocument()
					}
			},
			f.prototype = {
					setTagName: function(e) {
							if (!r.test(e))
									throw new Error("invalid tagName:" + e);
							this.tagName = e
					},
					add: function(e, t, i) {
							if (!r.test(e))
									throw new Error("invalid attribute:" + e);
							this[this.length++] = {
									qName: e,
									value: t,
									offset: i
							}
					},
					length: 0,
					getLocalName: function(e) {
							return this[e].localName
					},
					getLocator: function(e) {
							return this[e].locator
					},
					getQName: function(e) {
							return this[e].qName
					},
					getURI: function(e) {
							return this[e].uri
					},
					getValue: function(e) {
							return this[e].value
					}
			},
			m({}, m.prototype)instanceof m || (m = function(e, t) {
					function i() {}
					for (t in i.prototype = t,
					i = new i,
					e)
							i[t] = e[t];
					return i
			}
			),
			t.XMLReader = a
	},
	"3D7k": function(e, t, i) {
			"use strict";
			var n = i("rnXk")
				, r = i("JW/Y").handleRollover
				, a = {};
			a.ts = i("Qj6V"),
			a.aac = i("+9CB");
			var s = i("NsZL").ONE_SECOND_IN_TS
				, o = function(e, t, i) {
					for (var n, r, s, o, u = 0, l = 188, c = !1; l <= e.byteLength; )
							if (71 !== e[u] || 71 !== e[l] && l !== e.byteLength)
									u++,
									l++;
							else {
									switch (n = e.subarray(u, l),
									a.ts.parseType(n, t.pid)) {
									case "pes":
											r = a.ts.parsePesType(n, t.table),
											s = a.ts.parsePayloadUnitStartIndicator(n),
											"audio" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "audio",
											i.audio.push(o),
											c = !0)
									}
									if (c)
											break;
									u += 188,
									l += 188
							}
					for (u = (l = e.byteLength) - 188,
					c = !1; u >= 0; )
							if (71 !== e[u] || 71 !== e[l] && l !== e.byteLength)
									u--,
									l--;
							else {
									switch (n = e.subarray(u, l),
									a.ts.parseType(n, t.pid)) {
									case "pes":
											r = a.ts.parsePesType(n, t.table),
											s = a.ts.parsePayloadUnitStartIndicator(n),
											"audio" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "audio",
											i.audio.push(o),
											c = !0)
									}
									if (c)
											break;
									u -= 188,
									l -= 188
							}
			}
				, u = function(e, t, i) {
					for (var n, r, s, o, u, l, c, h = 0, d = 188, p = !1, f = {
							data: [],
							size: 0
					}; d < e.byteLength; )
							if (71 !== e[h] || 71 !== e[d])
									h++,
									d++;
							else {
									switch (n = e.subarray(h, d),
									a.ts.parseType(n, t.pid)) {
									case "pes":
											if (r = a.ts.parsePesType(n, t.table),
											s = a.ts.parsePayloadUnitStartIndicator(n),
											"video" === r && (s && !p && (o = a.ts.parsePesTime(n)) && (o.type = "video",
											i.video.push(o),
											p = !0),
											!i.firstKeyFrame)) {
													if (s && 0 !== f.size) {
															for (u = new Uint8Array(f.size),
															l = 0; f.data.length; )
																	c = f.data.shift(),
																	u.set(c, l),
																	l += c.byteLength;
															if (a.ts.videoPacketContainsKeyFrame(u)) {
																	var m = a.ts.parsePesTime(u);
																	m ? (i.firstKeyFrame = m,
																	i.firstKeyFrame.type = "video") : console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.")
															}
															f.size = 0
													}
													f.data.push(n),
													f.size += n.byteLength
											}
									}
									if (p && i.firstKeyFrame)
											break;
									h += 188,
									d += 188
							}
					for (h = (d = e.byteLength) - 188,
					p = !1; h >= 0; )
							if (71 !== e[h] || 71 !== e[d])
									h--,
									d--;
							else {
									switch (n = e.subarray(h, d),
									a.ts.parseType(n, t.pid)) {
									case "pes":
											r = a.ts.parsePesType(n, t.table),
											s = a.ts.parsePayloadUnitStartIndicator(n),
											"video" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "video",
											i.video.push(o),
											p = !0)
									}
									if (p)
											break;
									h -= 188,
									d -= 188
							}
			}
				, l = function(e) {
					var t = {
							pid: null,
							table: null
					}
						, i = {};
					for (var r in function(e, t) {
							for (var i, n = 0, r = 188; r < e.byteLength; )
									if (71 !== e[n] || 71 !== e[r])
											n++,
											r++;
									else {
											switch (i = e.subarray(n, r),
											a.ts.parseType(i, t.pid)) {
											case "pat":
													t.pid || (t.pid = a.ts.parsePat(i));
													break;
											case "pmt":
													t.table || (t.table = a.ts.parsePmt(i))
											}
											if (t.pid && t.table)
													return;
											n += 188,
											r += 188
									}
					}(e, t),
					t.table) {
							if (t.table.hasOwnProperty(r))
									switch (t.table[r]) {
									case n.H264_STREAM_TYPE:
											i.video = [],
											u(e, t, i),
											0 === i.video.length && delete i.video;
											break;
									case n.ADTS_STREAM_TYPE:
											i.audio = [],
											o(e, t, i),
											0 === i.audio.length && delete i.audio
									}
					}
					return i
			};
			e.exports = {
					inspect: function(e, t) {
							var i;
							return (i = a.aac.isLikelyAacData(e) ? function(e) {
									for (var t, i = !1, n = 0, r = null, o = null, u = 0, l = 0; e.length - l >= 3; ) {
											switch (a.aac.parseType(e, l)) {
											case "timed-metadata":
													if (e.length - l < 10) {
															i = !0;
															break
													}
													if ((u = a.aac.parseId3TagSize(e, l)) > e.length) {
															i = !0;
															break
													}
													null === o && (t = e.subarray(l, l + u),
													o = a.aac.parseAacTimestamp(t)),
													l += u;
													break;
											case "audio":
													if (e.length - l < 7) {
															i = !0;
															break
													}
													if ((u = a.aac.parseAdtsSize(e, l)) > e.length) {
															i = !0;
															break
													}
													null === r && (t = e.subarray(l, l + u),
													r = a.aac.parseSampleRate(t)),
													n++,
													l += u;
													break;
											default:
													l++
											}
											if (i)
													return null
									}
									if (null === r || null === o)
											return null;
									var c = s / r;
									return {
											audio: [{
													type: "audio",
													dts: o,
													pts: o
											}, {
													type: "audio",
													dts: o + 1024 * n * c,
													pts: o + 1024 * n * c
											}]
									}
							}(e) : l(e)) && (i.audio || i.video) ? (function(e, t) {
									if (e.audio && e.audio.length) {
											var i = t;
											void 0 === i && (i = e.audio[0].dts),
											e.audio.forEach((function(e) {
													e.dts = r(e.dts, i),
													e.pts = r(e.pts, i),
													e.dtsTime = e.dts / s,
													e.ptsTime = e.pts / s
											}
											))
									}
									if (e.video && e.video.length) {
											var n = t;
											if (void 0 === n && (n = e.video[0].dts),
											e.video.forEach((function(e) {
													e.dts = r(e.dts, n),
													e.pts = r(e.pts, n),
													e.dtsTime = e.dts / s,
													e.ptsTime = e.pts / s
											}
											)),
											e.firstKeyFrame) {
													var a = e.firstKeyFrame;
													a.dts = r(a.dts, n),
													a.pts = r(a.pts, n),
													a.dtsTime = a.dts / s,
													a.ptsTime = a.dts / s
											}
									}
							}(i, t),
							i) : null
					},
					parseAudioPes_: o
			}
	},
	"3G1x": function(e, t, i) {
			"use strict";
			e.exports = {
					parseSei: function(e) {
							for (var t = 0, i = {
									payloadType: -1,
									payloadSize: 0
							}, n = 0, r = 0; t < e.byteLength && 128 !== e[t]; ) {
									for (; 255 === e[t]; )
											n += 255,
											t++;
									for (n += e[t++]; 255 === e[t]; )
											r += 255,
											t++;
									if (r += e[t++],
									!i.payload && 4 === n) {
											i.payloadType = n,
											i.payloadSize = r,
											i.payload = e.subarray(t, t + r);
											break
									}
									t += r,
									n = 0,
									r = 0
							}
							return i
					},
					parseUserData: function(e) {
							return 181 !== e.payload[0] || 49 != (e.payload[1] << 8 | e.payload[2]) || "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) || 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
					},
					parseCaptionPackets: function(e, t) {
							var i, n, r, a, s = [];
							if (!(64 & t[0]))
									return s;
							for (n = 31 & t[0],
							i = 0; i < n; i++)
									a = {
											type: 3 & t[(r = 3 * i) + 2],
											pts: e
									},
									4 & t[r + 2] && (a.ccData = t[r + 3] << 8 | t[r + 4],
									s.push(a));
							return s
					},
					discardEmulationPreventionBytes: function(e) {
							for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; )
									0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2),
									a += 2) : a++;
							if (0 === r.length)
									return e;
							t = n - r.length,
							i = new Uint8Array(t);
							var s = 0;
							for (a = 0; a < t; s++,
							a++)
									s === r[0] && (s++,
									r.shift()),
									i[a] = e[s];
							return i
					},
					USER_DATA_REGISTERED_ITU_T_T35: 4
			}
	},
	"3UD+": function(e, t) {
			e.exports = function(e) {
					if (!e.webpackPolyfill) {
							var t = Object.create(e);
							t.children || (t.children = []),
							Object.defineProperty(t, "loaded", {
									enumerable: !0,
									get: function() {
											return t.l
									}
							}),
							Object.defineProperty(t, "id", {
									enumerable: !0,
									get: function() {
											return t.i
									}
							}),
							Object.defineProperty(t, "exports", {
									enumerable: !0
							}),
							t.webpackPolyfill = 1
					}
					return t
			}
	},
	"3zPy": function(e, t) {
			function i(e) {
					if (e && "object" == typeof e) {
							var t = e.which || e.keyCode || e.charCode;
							t && (e = t)
					}
					if ("number" == typeof e)
							return s[e];
					var i, a = String(e);
					return (i = n[a.toLowerCase()]) ? i : (i = r[a.toLowerCase()]) || (1 === a.length ? a.charCodeAt(0) : void 0)
			}
			i.isEventKey = function(e, t) {
					if (e && "object" == typeof e) {
							var i = e.which || e.keyCode || e.charCode;
							if (null == i)
									return !1;
							if ("string" == typeof t) {
									var a;
									if (a = n[t.toLowerCase()])
											return a === i;
									if (a = r[t.toLowerCase()])
											return a === i
							} else if ("number" == typeof t)
									return t === i;
							return !1
					}
			}
			;
			var n = (t = e.exports = i).code = t.codes = {
					backspace: 8,
					tab: 9,
					enter: 13,
					shift: 16,
					ctrl: 17,
					alt: 18,
					"pause/break": 19,
					"caps lock": 20,
					esc: 27,
					space: 32,
					"page up": 33,
					"page down": 34,
					end: 35,
					home: 36,
					left: 37,
					up: 38,
					right: 39,
					down: 40,
					insert: 45,
					delete: 46,
					command: 91,
					"left command": 91,
					"right command": 93,
					"numpad *": 106,
					"numpad +": 107,
					"numpad -": 109,
					"numpad .": 110,
					"numpad /": 111,
					"num lock": 144,
					"scroll lock": 145,
					"my computer": 182,
					"my calculator": 183,
					";": 186,
					"=": 187,
					",": 188,
					"-": 189,
					".": 190,
					"/": 191,
					"`": 192,
					"[": 219,
					"\\": 220,
					"]": 221,
					"'": 222
			}
				, r = t.aliases = {
					windows: 91,
					"⇧": 16,
					"⌥": 18,
					"⌃": 17,
					"⌘": 91,
					ctl: 17,
					control: 17,
					option: 18,
					pause: 19,
					break: 19,
					caps: 20,
					return: 13,
					escape: 27,
					spc: 32,
					spacebar: 32,
					pgup: 33,
					pgdn: 34,
					ins: 45,
					del: 46,
					cmd: 91
			};
			for (a = 97; a < 123; a++)
					n[String.fromCharCode(a)] = a - 32;
			for (var a = 48; a < 58; a++)
					n[a - 48] = a;
			for (a = 1; a < 13; a++)
					n["f" + a] = a + 111;
			for (a = 0; a < 10; a++)
					n["numpad " + a] = a + 96;
			var s = t.names = t.title = {};
			for (a in n)
					s[n[a]] = a;
			for (var o in r)
					n[o] = r[o]
	},
	"49sm": function(e, t) {
			var i = {}.toString;
			e.exports = Array.isArray || function(e) {
					return "[object Array]" == i.call(e)
			}
	},
	"6NT9": function(e, t) {
			window.getStarted = function() {
					hideTranscriptButton(),
					resizePlayers(document.querySelector("#cta")),
					document.querySelector(".vsl-container").classList.remove("full-height")
			}
	},
	"6PXS": function(e, t, i) {
			"use strict";
			(function(e) {
					i.d(t, "b", (function() {
							return h
					}
					)),
					i.d(t, "a", (function() {
							return d
					}
					));
					var n = i("mrSG")
						, r = i("vFt6")
						, a = i("9AQC")
						, s = i("wCA9")
						, o = i("pRiV");
					i("+924");
					function u(e) {
							if (Object(a.b)(e)) {
									var t = e
										, i = {
											message: t.message,
											name: t.name,
											stack: t.stack
									};
									for (var n in t)
											Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
									return i
							}
							if (Object(a.c)(e)) {
									var s = e
										, o = {};
									o.type = s.type;
									try {
											o.target = Object(a.a)(s.target) ? Object(r.a)(s.target) : Object.prototype.toString.call(s.target)
									} catch (e) {
											o.target = "<unknown>"
									}
									try {
											o.currentTarget = Object(a.a)(s.currentTarget) ? Object(r.a)(s.currentTarget) : Object.prototype.toString.call(s.currentTarget)
									} catch (e) {
											o.currentTarget = "<unknown>"
									}
									for (var n in "undefined" != typeof CustomEvent && Object(a.d)(e, CustomEvent) && (o.detail = s.detail),
									s)
											Object.prototype.hasOwnProperty.call(s, n) && (o[n] = s);
									return o
							}
							return e
					}
					function l(t, i) {
							return "domain" === i && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === i ? "[DomainEmitter]" : void 0 !== e && t === e ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : Object(a.i)(t) ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + Object(o.a)(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : t
					}
					function c(e, t, i, n) {
							if (void 0 === i && (i = 1 / 0),
							void 0 === n && (n = new s.a),
							0 === i)
									return function(e) {
											var t = Object.prototype.toString.call(e);
											if ("string" == typeof e)
													return e;
											if ("[object Object]" === t)
													return "[Object]";
											if ("[object Array]" === t)
													return "[Array]";
											var i = l(e);
											return Object(a.f)(i) ? i : t
									}(t);
							if (null != t && "function" == typeof t.toJSON)
									return t.toJSON();
							var r = l(t, e);
							if (Object(a.f)(r))
									return r;
							var o = u(t)
								, h = Array.isArray(t) ? [] : {};
							if (n.memoize(t))
									return "[Circular ~]";
							for (var d in o)
									Object.prototype.hasOwnProperty.call(o, d) && (h[d] = c(d, o[d], i - 1, n));
							return n.unmemoize(t),
							h
					}
					function h(e, t) {
							try {
									return JSON.parse(JSON.stringify(e, (function(e, i) {
											return c(e, i, t)
									}
									)))
							} catch (e) {
									return "**non-serializable**"
							}
					}
					function d(e) {
							var t, i;
							if (Object(a.e)(e)) {
									var r = e
										, s = {};
									try {
											for (var o = Object(n.c)(Object.keys(r)), u = o.next(); !u.done; u = o.next()) {
													var l = u.value;
													void 0 !== r[l] && (s[l] = d(r[l]))
											}
									} catch (e) {
											t = {
													error: e
											}
									} finally {
											try {
													u && !u.done && (i = o.return) && i.call(o)
											} finally {
													if (t)
															throw t.error
											}
									}
									return s
							}
							return Array.isArray(e) ? e.map(d) : e
					}
			}
			).call(this, i("yLpj"))
	},
	"7MRW": function(e, t) {
			!function() {
					if ("performance"in window == 0 && (window.performance = {}),
					Date.now = Date.now || function() {
							return (new Date).getTime()
					}
					,
					"now"in window.performance == 0) {
							var e = Date.now();
							performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart),
							window.performance.now = function() {
									return Date.now() - e
							}
					}
			}()
	},
	"7W2i": function(e, t, i) {
			var n = i("SksO");
			e.exports = function(e, t) {
					if ("function" != typeof t && null !== t)
							throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
							constructor: {
									value: e,
									writable: !0,
									configurable: !0
							}
					}),
					t && n(e, t)
			}
	},
	"7zRj": function(e, t, i) {
			(function(t) {
					var n, r = void 0 !== t ? t : "undefined" != typeof window ? window : {}, a = i(1);
					"undefined" != typeof document ? n = document : (n = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = r["__GLOBAL_DOCUMENT_CACHE@4"] = a),
					e.exports = n
			}
			).call(this, i("yLpj"))
	},
	"8OJ3": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("vgmO")
				, r = i.n(n)
				, a = i("7zRj")
				, s = i.n(a)
				, o = i("pVnL")
				, u = i.n(o)
				, l = i("PJYZ")
				, c = i.n(l)
				, h = i("VbXa")
				, d = i.n(h)
				, p = i("jBAH")
				, f = i.n(p)
				, m = i("3zPy")
				, g = i.n(m)
				, v = i("BF8C")
				, y = i.n(v)
				, _ = i("K4wu")
				, b = i.n(_)
				, T = i("sXyB")
				, S = i.n(T)
				, w = i("7W2i")
				, k = i.n(w)
				, E = i("0Tbm")
				, C = i.n(E);
			function A() {
					return (A = Object.assign || function(e) {
							for (var t = 1; t < arguments.length; t++) {
									var i = arguments[t];
									for (var n in i)
											Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
							}
							return e
					}
					).apply(this, arguments)
			}
			function x(e, t) {
					e.prototype = Object.create(t.prototype),
					e.prototype.constructor = e,
					e.__proto__ = t
			}
			var O = function() {
					function e() {
							this.listeners = {}
					}
					var t = e.prototype;
					return t.on = function(e, t) {
							this.listeners[e] || (this.listeners[e] = []),
							this.listeners[e].push(t)
					}
					,
					t.off = function(e, t) {
							if (!this.listeners[e])
									return !1;
							var i = this.listeners[e].indexOf(t);
							return this.listeners[e].splice(i, 1),
							i > -1
					}
					,
					t.trigger = function(e) {
							var t, i, n, r = this.listeners[e];
							if (r)
									if (2 === arguments.length)
											for (i = r.length,
											t = 0; t < i; ++t)
													r[t].call(this, arguments[1]);
									else
											for (n = Array.prototype.slice.call(arguments, 1),
											i = r.length,
											t = 0; t < i; ++t)
													r[t].apply(this, n)
					}
					,
					t.dispose = function() {
							this.listeners = {}
					}
					,
					t.pipe = function(e) {
							this.on("data", (function(t) {
									e.push(t)
							}
							))
					}
					,
					e
			}()
				, P = function(e) {
					function t() {
							var t;
							return (t = e.call(this) || this).buffer = "",
							t
					}
					return x(t, e),
					t.prototype.push = function(e) {
							var t;
							for (this.buffer += e,
							t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n"))
									this.trigger("data", this.buffer.substring(0, t)),
									this.buffer = this.buffer.substring(t + 1)
					}
					,
					t
			}(O)
				, I = function(e) {
					for (var t, i = e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), n = {}, r = i.length; r--; )
							"" !== i[r] && ((t = /([^=]*)=(.*)/.exec(i[r]).slice(1))[0] = t[0].replace(/^\s+|\s+$/g, ""),
							t[1] = t[1].replace(/^\s+|\s+$/g, ""),
							t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"),
							n[t[0]] = t[1]);
					return n
			}
				, L = function(e) {
					function t() {
							var t;
							return (t = e.call(this) || this).customParsers = [],
							t.tagMappers = [],
							t
					}
					x(t, e);
					var i = t.prototype;
					return i.push = function(e) {
							var t, i, n = this;
							0 !== (e = e.trim()).length && ("#" === e[0] ? this.tagMappers.reduce((function(t, i) {
									var n = i(e);
									return n === e ? t : t.concat([n])
							}
							), [e]).forEach((function(e) {
									for (var r = 0; r < n.customParsers.length; r++)
											if (n.customParsers[r].call(n, e))
													return;
									if (0 === e.indexOf("#EXT"))
											if (e = e.replace("\r", ""),
											t = /^#EXTM3U/.exec(e))
													n.trigger("data", {
															type: "tag",
															tagType: "m3u"
													});
											else {
													if (t = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "inf"
															},
															t[1] && (i.duration = parseFloat(t[1])),
															t[2] && (i.title = t[2]),
															void n.trigger("data", i);
													if (t = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "targetduration"
															},
															t[1] && (i.duration = parseInt(t[1], 10)),
															void n.trigger("data", i);
													if (t = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "totalduration"
															},
															t[1] && (i.duration = parseInt(t[1], 10)),
															void n.trigger("data", i);
													if (t = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "version"
															},
															t[1] && (i.version = parseInt(t[1], 10)),
															void n.trigger("data", i);
													if (t = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "media-sequence"
															},
															t[1] && (i.number = parseInt(t[1], 10)),
															void n.trigger("data", i);
													if (t = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "discontinuity-sequence"
															},
															t[1] && (i.number = parseInt(t[1], 10)),
															void n.trigger("data", i);
													if (t = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "playlist-type"
															},
															t[1] && (i.playlistType = t[1]),
															void n.trigger("data", i);
													if (t = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "byterange"
															},
															t[1] && (i.length = parseInt(t[1], 10)),
															t[2] && (i.offset = parseInt(t[2], 10)),
															void n.trigger("data", i);
													if (t = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e))
															return i = {
																	type: "tag",
																	tagType: "allow-cache"
															},
															t[1] && (i.allowed = !/NO/.test(t[1])),
															void n.trigger("data", i);
													if (t = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
															if (i = {
																	type: "tag",
																	tagType: "map"
															},
															t[1]) {
																	var a = I(t[1]);
																	if (a.URI && (i.uri = a.URI),
																	a.BYTERANGE) {
																			var s = a.BYTERANGE.split("@")
																				, o = s[0]
																				, u = s[1];
																			i.byterange = {},
																			o && (i.byterange.length = parseInt(o, 10)),
																			u && (i.byterange.offset = parseInt(u, 10))
																	}
															}
															n.trigger("data", i)
													} else if (t = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
															if (i = {
																	type: "tag",
																	tagType: "stream-inf"
															},
															t[1]) {
																	if (i.attributes = I(t[1]),
																	i.attributes.RESOLUTION) {
																			var l = i.attributes.RESOLUTION.split("x")
																				, c = {};
																			l[0] && (c.width = parseInt(l[0], 10)),
																			l[1] && (c.height = parseInt(l[1], 10)),
																			i.attributes.RESOLUTION = c
																	}
																	i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)),
																	i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
															}
															n.trigger("data", i)
													} else {
															if (t = /^#EXT-X-MEDIA:?(.*)$/.exec(e))
																	return i = {
																			type: "tag",
																			tagType: "media"
																	},
																	t[1] && (i.attributes = I(t[1])),
																	void n.trigger("data", i);
															if (t = /^#EXT-X-ENDLIST/.exec(e))
																	n.trigger("data", {
																			type: "tag",
																			tagType: "endlist"
																	});
															else if (t = /^#EXT-X-DISCONTINUITY/.exec(e))
																	n.trigger("data", {
																			type: "tag",
																			tagType: "discontinuity"
																	});
															else {
																	if (t = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e))
																			return i = {
																					type: "tag",
																					tagType: "program-date-time"
																			},
																			t[1] && (i.dateTimeString = t[1],
																			i.dateTimeObject = new Date(t[1])),
																			void n.trigger("data", i);
																	if (t = /^#EXT-X-KEY:?(.*)$/.exec(e))
																			return i = {
																					type: "tag",
																					tagType: "key"
																			},
																			t[1] && (i.attributes = I(t[1]),
																			i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)),
																			i.attributes.IV = i.attributes.IV.match(/.{8}/g),
																			i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16),
																			i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16),
																			i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16),
																			i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16),
																			i.attributes.IV = new Uint32Array(i.attributes.IV))),
																			void n.trigger("data", i);
																	if (t = /^#EXT-X-START:?(.*)$/.exec(e))
																			return i = {
																					type: "tag",
																					tagType: "start"
																			},
																			t[1] && (i.attributes = I(t[1]),
																			i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]),
																			i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE)),
																			void n.trigger("data", i);
																	if (t = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e))
																			return i = {
																					type: "tag",
																					tagType: "cue-out-cont"
																			},
																			t[1] ? i.data = t[1] : i.data = "",
																			void n.trigger("data", i);
																	if (t = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e))
																			return i = {
																					type: "tag",
																					tagType: "cue-out"
																			},
																			t[1] ? i.data = t[1] : i.data = "",
																			void n.trigger("data", i);
																	if (t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e))
																			return i = {
																					type: "tag",
																					tagType: "cue-in"
																			},
																			t[1] ? i.data = t[1] : i.data = "",
																			void n.trigger("data", i);
																	n.trigger("data", {
																			type: "tag",
																			data: e.slice(4)
																	})
															}
													}
											}
									else
											n.trigger("data", {
													type: "comment",
													text: e.slice(1)
											})
							}
							)) : this.trigger("data", {
									type: "uri",
									uri: e
							}))
					}
					,
					i.addParser = function(e) {
							var t = this
								, i = e.expression
								, n = e.customType
								, r = e.dataParser
								, a = e.segment;
							"function" != typeof r && (r = function(e) {
									return e
							}
							),
							this.customParsers.push((function(e) {
									if (i.exec(e))
											return t.trigger("data", {
													type: "custom",
													data: r(e),
													customType: n,
													segment: a
											}),
											!0
							}
							))
					}
					,
					i.addTagMapper = function(e) {
							var t = e.expression
								, i = e.map;
							this.tagMappers.push((function(e) {
									return t.test(e) ? i(e) : e
							}
							))
					}
					,
					t
			}(O);
			function D(e) {
					for (var t = r.a.atob(e || ""), i = new Uint8Array(t.length), n = 0; n < t.length; n++)
							i[n] = t.charCodeAt(n);
					return i
			}
			var R = function(e) {
					function t() {
							var t;
							(t = e.call(this) || this).lineStream = new P,
							t.parseStream = new L,
							t.lineStream.pipe(t.parseStream);
							var i, n, r = function(e) {
									if (void 0 === e)
											throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return e
							}(t), a = [], s = {}, o = function() {}, u = {
									AUDIO: {},
									VIDEO: {},
									"CLOSED-CAPTIONS": {},
									SUBTITLES: {}
							}, l = 0;
							return t.manifest = {
									allowCache: !0,
									discontinuityStarts: [],
									segments: []
							},
							t.parseStream.on("data", (function(e) {
									var t, c;
									({
											tag: function() {
													({
															"allow-cache": function() {
																	this.manifest.allowCache = e.allowed,
																	"allowed"in e || (this.trigger("info", {
																			message: "defaulting allowCache to YES"
																	}),
																	this.manifest.allowCache = !0)
															},
															byterange: function() {
																	var t = {};
																	"length"in e && (s.byterange = t,
																	t.length = e.length,
																	"offset"in e || (this.trigger("info", {
																			message: "defaulting offset to zero"
																	}),
																	e.offset = 0)),
																	"offset"in e && (s.byterange = t,
																	t.offset = e.offset)
															},
															endlist: function() {
																	this.manifest.endList = !0
															},
															inf: function() {
																	"mediaSequence"in this.manifest || (this.manifest.mediaSequence = 0,
																	this.trigger("info", {
																			message: "defaulting media sequence to zero"
																	})),
																	"discontinuitySequence"in this.manifest || (this.manifest.discontinuitySequence = 0,
																	this.trigger("info", {
																			message: "defaulting discontinuity sequence to zero"
																	})),
																	e.duration > 0 && (s.duration = e.duration),
																	0 === e.duration && (s.duration = .01,
																	this.trigger("info", {
																			message: "updating zero segment duration to a small value"
																	})),
																	this.manifest.segments = a
															},
															key: function() {
																	if (e.attributes)
																			if ("NONE" !== e.attributes.METHOD)
																					if (e.attributes.URI) {
																							if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === e.attributes.KEYFORMAT) {
																									return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(e.attributes.METHOD) ? void this.trigger("warn", {
																											message: "invalid key method provided for Widevine"
																									}) : ("SAMPLE-AES-CENC" === e.attributes.METHOD && this.trigger("warn", {
																											message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
																									}),
																									"data:text/plain;base64," !== e.attributes.URI.substring(0, 23) ? void this.trigger("warn", {
																											message: "invalid key URI provided for Widevine"
																									}) : e.attributes.KEYID && "0x" === e.attributes.KEYID.substring(0, 2) ? void (this.manifest.contentProtection = {
																											"com.widevine.alpha": {
																													attributes: {
																															schemeIdUri: e.attributes.KEYFORMAT,
																															keyId: e.attributes.KEYID.substring(2)
																													},
																													pssh: D(e.attributes.URI.split(",")[1])
																											}
																									}) : void this.trigger("warn", {
																											message: "invalid key ID provided for Widevine"
																									}))
																							}
																							e.attributes.METHOD || this.trigger("warn", {
																									message: "defaulting key method to AES-128"
																							}),
																							n = {
																									method: e.attributes.METHOD || "AES-128",
																									uri: e.attributes.URI
																							},
																							void 0 !== e.attributes.IV && (n.iv = e.attributes.IV)
																					} else
																							this.trigger("warn", {
																									message: "ignoring key declaration without URI"
																							});
																			else
																					n = null;
																	else
																			this.trigger("warn", {
																					message: "ignoring key declaration without attribute list"
																			})
															},
															"media-sequence": function() {
																	isFinite(e.number) ? this.manifest.mediaSequence = e.number : this.trigger("warn", {
																			message: "ignoring invalid media sequence: " + e.number
																	})
															},
															"discontinuity-sequence": function() {
																	isFinite(e.number) ? (this.manifest.discontinuitySequence = e.number,
																	l = e.number) : this.trigger("warn", {
																			message: "ignoring invalid discontinuity sequence: " + e.number
																	})
															},
															"playlist-type": function() {
																	/VOD|EVENT/.test(e.playlistType) ? this.manifest.playlistType = e.playlistType : this.trigger("warn", {
																			message: "ignoring unknown playlist type: " + e.playlist
																	})
															},
															map: function() {
																	i = {},
																	e.uri && (i.uri = e.uri),
																	e.byterange && (i.byterange = e.byterange)
															},
															"stream-inf": function() {
																	this.manifest.playlists = a,
																	this.manifest.mediaGroups = this.manifest.mediaGroups || u,
																	e.attributes ? (s.attributes || (s.attributes = {}),
																	A(s.attributes, e.attributes)) : this.trigger("warn", {
																			message: "ignoring empty stream-inf attributes"
																	})
															},
															media: function() {
																	if (this.manifest.mediaGroups = this.manifest.mediaGroups || u,
																	e.attributes && e.attributes.TYPE && e.attributes["GROUP-ID"] && e.attributes.NAME) {
																			var i = this.manifest.mediaGroups[e.attributes.TYPE];
																			i[e.attributes["GROUP-ID"]] = i[e.attributes["GROUP-ID"]] || {},
																			t = i[e.attributes["GROUP-ID"]],
																			(c = {
																					default: /yes/i.test(e.attributes.DEFAULT)
																			}).default ? c.autoselect = !0 : c.autoselect = /yes/i.test(e.attributes.AUTOSELECT),
																			e.attributes.LANGUAGE && (c.language = e.attributes.LANGUAGE),
																			e.attributes.URI && (c.uri = e.attributes.URI),
																			e.attributes["INSTREAM-ID"] && (c.instreamId = e.attributes["INSTREAM-ID"]),
																			e.attributes.CHARACTERISTICS && (c.characteristics = e.attributes.CHARACTERISTICS),
																			e.attributes.FORCED && (c.forced = /yes/i.test(e.attributes.FORCED)),
																			t[e.attributes.NAME] = c
																	} else
																			this.trigger("warn", {
																					message: "ignoring incomplete or missing media group"
																			})
															},
															discontinuity: function() {
																	l += 1,
																	s.discontinuity = !0,
																	this.manifest.discontinuityStarts.push(a.length)
															},
															"program-date-time": function() {
																	void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = e.dateTimeString,
																	this.manifest.dateTimeObject = e.dateTimeObject),
																	s.dateTimeString = e.dateTimeString,
																	s.dateTimeObject = e.dateTimeObject
															},
															targetduration: function() {
																	!isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {
																			message: "ignoring invalid target duration: " + e.duration
																	}) : this.manifest.targetDuration = e.duration
															},
															totalduration: function() {
																	!isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {
																			message: "ignoring invalid total duration: " + e.duration
																	}) : this.manifest.totalDuration = e.duration
															},
															start: function() {
																	e.attributes && !isNaN(e.attributes["TIME-OFFSET"]) ? this.manifest.start = {
																			timeOffset: e.attributes["TIME-OFFSET"],
																			precise: e.attributes.PRECISE
																	} : this.trigger("warn", {
																			message: "ignoring start declaration without appropriate attribute list"
																	})
															},
															"cue-out": function() {
																	s.cueOut = e.data
															},
															"cue-out-cont": function() {
																	s.cueOutCont = e.data
															},
															"cue-in": function() {
																	s.cueIn = e.data
															}
													}[e.tagType] || o).call(r)
											},
											uri: function() {
													s.uri = e.uri,
													a.push(s),
													this.manifest.targetDuration && !("duration"in s) && (this.trigger("warn", {
															message: "defaulting segment duration to the target duration"
													}),
													s.duration = this.manifest.targetDuration),
													n && (s.key = n),
													s.timeline = l,
													i && (s.map = i),
													s = {}
											},
											comment: function() {},
											custom: function() {
													e.segment ? (s.custom = s.custom || {},
													s.custom[e.customType] = e.data) : (this.manifest.custom = this.manifest.custom || {},
													this.manifest.custom[e.customType] = e.data)
											}
									})[e.type].call(r)
							}
							)),
							t
					}
					x(t, e);
					var i = t.prototype;
					return i.push = function(e) {
							this.lineStream.push(e)
					}
					,
					i.end = function() {
							this.lineStream.push("\n")
					}
					,
					i.addParser = function(e) {
							this.parseStream.addParser(e)
					}
					,
					i.addTagMapper = function(e) {
							this.parseStream.addTagMapper(e)
					}
					,
					t
			}(O)
				, N = i("X8+f")
				, U = i.n(N)
				, M = i("hQev")
				, j = i.n(M)
				, B = i("KdhP")
				, F = function(e) {
					return !!e && "object" == typeof e
			}
				, q = function e() {
					for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
							i[n] = arguments[n];
					return i.reduce((function(t, i) {
							return Object.keys(i).forEach((function(n) {
									Array.isArray(t[n]) && Array.isArray(i[n]) ? t[n] = t[n].concat(i[n]) : F(t[n]) && F(i[n]) ? t[n] = e(t[n], i[n]) : t[n] = i[n]
							}
							)),
							t
					}
					), {})
			}
				, H = function(e) {
					return e.reduce((function(e, t) {
							return e.concat(t)
					}
					), [])
			}
				, V = function(e) {
					if (!e.length)
							return [];
					for (var t = [], i = 0; i < e.length; i++)
							t.push(e[i]);
					return t
			}
				, W = "INVALID_NUMBER_OF_PERIOD"
				, z = "DASH_EMPTY_MANIFEST"
				, G = "DASH_INVALID_XML"
				, Y = "NO_BASE_URL"
				, X = "SEGMENT_TIME_UNSPECIFIED"
				, K = "UNSUPPORTED_UTC_TIMING_SCHEME"
				, $ = function(e) {
					var t = e.baseUrl
						, i = void 0 === t ? "" : t
						, n = e.source
						, r = void 0 === n ? "" : n
						, a = e.range
						, s = void 0 === a ? "" : a
						, o = e.indexRange
						, u = void 0 === o ? "" : o
						, l = {
							uri: r,
							resolvedUri: U()(i || "", r)
					};
					if (s || u) {
							var c = (s || u).split("-")
								, h = parseInt(c[0], 10)
								, d = parseInt(c[1], 10);
							l.byterange = {
									length: d - h + 1,
									offset: h
							}
					}
					return l
			}
				, Q = {
					static: function(e) {
							var t = e.duration
								, i = e.timescale
								, n = void 0 === i ? 1 : i
								, r = e.sourceDuration;
							return {
									start: 0,
									end: Math.ceil(r / (t / n))
							}
					},
					dynamic: function(e) {
							var t = e.NOW
								, i = e.clientOffset
								, n = e.availabilityStartTime
								, r = e.timescale
								, a = void 0 === r ? 1 : r
								, s = e.duration
								, o = e.start
								, u = void 0 === o ? 0 : o
								, l = e.minimumUpdatePeriod
								, c = void 0 === l ? 0 : l
								, h = e.timeShiftBufferDepth
								, d = void 0 === h ? 1 / 0 : h
								, p = (t + i) / 1e3
								, f = n + u
								, m = p + c - f
								, g = Math.ceil(m * a / s)
								, v = Math.floor((p - f - d) * a / s)
								, y = Math.floor((p - f) * a / s);
							return {
									start: Math.max(0, v),
									end: Math.min(g, y)
							}
					}
			}
				, J = function(e) {
					var t = e.type
						, i = void 0 === t ? "static" : t
						, n = e.duration
						, r = e.timescale
						, a = void 0 === r ? 1 : r
						, s = e.sourceDuration
						, o = Q[i](e)
						, u = function(e, t) {
							for (var i = [], n = e; n < t; n++)
									i.push(n);
							return i
					}(o.start, o.end).map(function(e) {
							return function(t, i) {
									var n = e.duration
										, r = e.timescale
										, a = void 0 === r ? 1 : r
										, s = e.periodIndex
										, o = e.startNumber;
									return {
											number: (void 0 === o ? 1 : o) + t,
											duration: n / a,
											timeline: s,
											time: i * n
									}
							}
					}(e));
					if ("static" === i) {
							var l = u.length - 1;
							u[l].duration = s - n / a * l
					}
					return u
			}
				, Z = function(e) {
					var t = e.baseUrl
						, i = e.initialization
						, n = void 0 === i ? {} : i
						, r = e.sourceDuration
						, a = e.timescale
						, s = void 0 === a ? 1 : a
						, o = e.indexRange
						, u = void 0 === o ? "" : o
						, l = e.duration;
					if (!t)
							throw new Error(Y);
					var c = $({
							baseUrl: t,
							source: n.sourceURL,
							range: n.range
					})
						, h = $({
							baseUrl: t,
							source: t,
							indexRange: u
					});
					if (h.map = c,
					l) {
							var d = J(e);
							d.length && (h.duration = d[0].duration,
							h.timeline = d[0].timeline)
					} else
							r && (h.duration = r / s,
							h.timeline = 0);
					return h.number = 0,
					[h]
			}
				, ee = function(e, t, i) {
					for (var n = e.sidx.map ? e.sidx.map : null, r = e.sidx.duration, a = e.timeline || 0, s = e.sidx.byterange, o = s.offset + s.length, u = t.timescale, l = t.references.filter((function(e) {
							return 1 !== e.referenceType
					}
					)), c = [], h = o + t.firstOffset, d = 0; d < l.length; d++) {
							var p = t.references[d]
								, f = p.referencedSize
								, m = p.subsegmentDuration
								, g = Z({
									baseUrl: i,
									timescale: u,
									timeline: a,
									periodIndex: a,
									duration: m,
									sourceDuration: r,
									indexRange: h + "-" + (h + f - 1)
							})[0];
							n && (g.map = n),
							c.push(g),
							h += f
					}
					return e.segments = c,
					e
			}
				, te = function(e) {
					var t;
					return (t = e.reduce((function(e, t) {
							var i, n = t.attributes.id + (t.attributes.lang || "");
							return e[n] ? (t.segments[0] && (t.segments[0].discontinuity = !0),
							(i = e[n].segments).push.apply(i, t.segments),
							t.attributes.contentProtection && (e[n].attributes.contentProtection = t.attributes.contentProtection)) : e[n] = t,
							e
					}
					), {}),
					Object.keys(t).map((function(e) {
							return t[e]
					}
					))).map((function(e) {
							var t, i;
							return e.discontinuityStarts = (t = e.segments,
							i = "discontinuity",
							t.reduce((function(e, t, n) {
									return t[i] && e.push(n),
									e
							}
							), [])),
							e
					}
					))
			}
				, ie = function(e, t) {
					if (void 0 === t && (t = {}),
					!Object.keys(t).length)
							return e;
					for (var i in e) {
							var n = e[i];
							if (n.sidx) {
									var r = n.sidx.uri + "-" + (s = n.sidx.byterange,
									o = void 0,
									o = s.offset + s.length - 1,
									s.offset + "-" + o)
										, a = t[r] && t[r].sidx;
									n.sidx && a && ee(n, a, n.sidx.resolvedUri)
							}
					}
					var s, o;
					return e
			}
				, ne = function(e) {
					var t, i = e.attributes, n = e.segments, r = e.sidx, a = {
							attributes: (t = {
									NAME: i.id,
									BANDWIDTH: i.bandwidth,
									CODECS: i.codecs
							},
							t["PROGRAM-ID"] = 1,
							t),
							uri: "",
							endList: "static" === (i.type || "static"),
							timeline: i.periodIndex,
							resolvedUri: "",
							targetDuration: i.duration,
							segments: n,
							mediaSequence: n.length ? n[0].number : 1
					};
					return i.contentProtection && (a.contentProtection = i.contentProtection),
					r && (a.sidx = r),
					a
			}
				, re = function(e) {
					var t, i = e.attributes, n = e.segments, r = e.sidx, a = {
							attributes: (t = {
									NAME: i.id,
									AUDIO: "audio",
									SUBTITLES: "subs",
									RESOLUTION: {
											width: i.width,
											height: i.height
									},
									CODECS: i.codecs,
									BANDWIDTH: i.bandwidth
							},
							t["PROGRAM-ID"] = 1,
							t),
							uri: "",
							endList: "static" === (i.type || "static"),
							timeline: i.periodIndex,
							resolvedUri: "",
							targetDuration: i.duration,
							segments: n,
							mediaSequence: n.length ? n[0].number : 1
					};
					return i.contentProtection && (a.contentProtection = i.contentProtection),
					r && (a.sidx = r),
					a
			}
				, ae = function(e, t) {
					var i;
					if (void 0 === t && (t = {}),
					!e.length)
							return {};
					var n = e[0].attributes
						, r = n.sourceDuration
						, a = n.type
						, s = void 0 === a ? "static" : a
						, o = n.suggestedPresentationDelay
						, u = n.minimumUpdatePeriod
						, l = void 0 === u ? 0 : u
						, c = te(e.filter((function(e) {
							var t = e.attributes;
							return "video/mp4" === t.mimeType || "video" === t.contentType
					}
					))).map(re)
						, h = te(e.filter((function(e) {
							var t = e.attributes;
							return "audio/mp4" === t.mimeType || "audio" === t.contentType
					}
					)))
						, d = e.filter((function(e) {
							var t = e.attributes;
							return "text/vtt" === t.mimeType || "text" === t.contentType
					}
					))
						, p = {
							allowCache: !0,
							discontinuityStarts: [],
							segments: [],
							endList: !0,
							mediaGroups: (i = {
									AUDIO: {},
									VIDEO: {}
							},
							i["CLOSED-CAPTIONS"] = {},
							i.SUBTITLES = {},
							i),
							uri: "",
							duration: r,
							playlists: ie(c, t),
							minimumUpdatePeriod: 1e3 * l
					};
					return "dynamic" === s && (p.suggestedPresentationDelay = o),
					h.length && (p.mediaGroups.AUDIO.audio = function(e, t) {
							var i;
							void 0 === t && (t = {});
							var n = e.reduce((function(e, n) {
									var r = n.attributes.role && n.attributes.role.value || ""
										, a = n.attributes.lang || ""
										, s = "main";
									if (a) {
											var o = r ? " (" + r + ")" : "";
											s = "" + n.attributes.lang + o
									}
									return e[s] && e[s].playlists[0].attributes.BANDWIDTH > n.attributes.bandwidth || (e[s] = {
											language: a,
											autoselect: !0,
											default: "main" === r,
											playlists: ie([ne(n)], t),
											uri: ""
									},
									void 0 === i && "main" === r && ((i = n).default = !0)),
									e
							}
							), {});
							i || (n[Object.keys(n)[0]].default = !0);
							return n
					}(h, t)),
					d.length && (p.mediaGroups.SUBTITLES.subs = function(e, t) {
							return void 0 === t && (t = {}),
							e.reduce((function(e, i) {
									var n, r, a, s, o = i.attributes.lang || "text";
									return e[o] || (e[o] = {
											language: o,
											default: !1,
											autoselect: !1,
											playlists: ie([(n = i,
											a = n.attributes,
											s = n.segments,
											void 0 === s && (s = [{
													uri: a.baseUrl,
													timeline: a.periodIndex,
													resolvedUri: a.baseUrl || "",
													duration: a.sourceDuration,
													number: 0
											}],
											a.duration = a.sourceDuration),
											{
													attributes: (r = {
															NAME: a.id,
															BANDWIDTH: a.bandwidth
													},
													r["PROGRAM-ID"] = 1,
													r),
													uri: "",
													endList: "static" === (a.type || "static"),
													timeline: a.periodIndex,
													resolvedUri: a.baseUrl || "",
													targetDuration: a.duration,
													segments: s,
													mediaSequence: s.length ? s[0].number : 1
											})], t),
											uri: ""
									}),
									e
							}
							), {})
					}(d, t)),
					p
			}
				, se = function(e, t, i) {
					var n = e.NOW
						, r = e.clientOffset
						, a = e.availabilityStartTime
						, s = e.timescale
						, o = void 0 === s ? 1 : s
						, u = e.start
						, l = void 0 === u ? 0 : u
						, c = e.minimumUpdatePeriod
						, h = (n + r) / 1e3 + (void 0 === c ? 0 : c) - (a + l);
					return Math.ceil((h * o - t) / i)
			}
				, oe = function(e, t) {
					for (var i = e.type, n = void 0 === i ? "static" : i, r = e.minimumUpdatePeriod, a = void 0 === r ? 0 : r, s = e.media, o = void 0 === s ? "" : s, u = e.sourceDuration, l = e.timescale, c = void 0 === l ? 1 : l, h = e.startNumber, d = void 0 === h ? 1 : h, p = e.periodIndex, f = [], m = -1, g = 0; g < t.length; g++) {
							var v = t[g]
								, y = v.d
								, _ = v.r || 0
								, b = v.t || 0;
							m < 0 && (m = b),
							b && b > m && (m = b);
							var T = void 0;
							if (_ < 0) {
									var S = g + 1;
									T = S === t.length ? "dynamic" === n && a > 0 && o.indexOf("$Number$") > 0 ? se(e, m, y) : (u * c - m) / y : (t[S].t - m) / y
							} else
									T = _ + 1;
							for (var w = d + f.length + T, k = d + f.length; k < w; )
									f.push({
											number: k,
											duration: y / c,
											time: m,
											timeline: p
									}),
									m += y,
									k++
					}
					return f
			}
				, ue = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g
				, le = function(e, t) {
					return e.replace(ue, function(e) {
							return function(t, i, n, r) {
									if ("$$" === t)
											return "$";
									if (void 0 === e[i])
											return t;
									var a = "" + e[i];
									return "RepresentationID" === i ? a : (r = n ? parseInt(r, 10) : 1,
									a.length >= r ? a : "" + new Array(r - a.length + 1).join("0") + a)
							}
					}(t))
			}
				, ce = function(e, t) {
					var i = {
							RepresentationID: e.id,
							Bandwidth: e.bandwidth || 0
					}
						, n = e.initialization
						, r = void 0 === n ? {
							sourceURL: "",
							range: ""
					} : n
						, a = $({
							baseUrl: e.baseUrl,
							source: le(r.sourceURL, i),
							range: r.range
					});
					return function(e, t) {
							return e.duration || t ? e.duration ? J(e) : oe(e, t) : [{
									number: e.startNumber || 1,
									duration: e.sourceDuration,
									time: 0,
									timeline: e.periodIndex
							}]
					}(e, t).map((function(t) {
							i.Number = t.number,
							i.Time = t.time;
							var n = le(e.media || "", i);
							return {
									uri: n,
									timeline: t.timeline,
									duration: t.duration,
									resolvedUri: U()(e.baseUrl || "", n),
									map: a,
									number: t.number
							}
					}
					))
			}
				, he = function(e, t) {
					var i = e.duration
						, n = e.segmentUrls
						, r = void 0 === n ? [] : n;
					if (!i && !t || i && t)
							throw new Error(X);
					var a, s = r.map((function(t) {
							return function(e, t) {
									var i = e.baseUrl
										, n = e.initialization
										, r = void 0 === n ? {} : n
										, a = $({
											baseUrl: i,
											source: r.sourceURL,
											range: r.range
									})
										, s = $({
											baseUrl: i,
											source: t.media,
											range: t.mediaRange
									});
									return s.map = a,
									s
							}(e, t)
					}
					));
					return i && (a = J(e)),
					t && (a = oe(e, t)),
					a.map((function(e, t) {
							if (s[t]) {
									var i = s[t];
									return i.timeline = e.timeline,
									i.duration = e.duration,
									i.number = e.number,
									i
							}
					}
					)).filter((function(e) {
							return e
					}
					))
			}
				, de = function(e) {
					var t, i, n = e.attributes, r = e.segmentInfo;
					r.template ? (i = ce,
					t = q(n, r.template)) : r.base ? (i = Z,
					t = q(n, r.base)) : r.list && (i = he,
					t = q(n, r.list));
					var a = {
							attributes: n
					};
					if (!i)
							return a;
					var s = i(t, r.timeline);
					if (t.duration) {
							var o = t
								, u = o.duration
								, l = o.timescale
								, c = void 0 === l ? 1 : l;
							t.duration = u / c
					} else
							s.length ? t.duration = s.reduce((function(e, t) {
									return Math.max(e, Math.ceil(t.duration))
							}
							), 0) : t.duration = 0;
					return a.attributes = t,
					a.segments = s,
					r.base && t.indexRange && (a.sidx = s[0],
					a.segments = []),
					a
			}
				, pe = function(e, t) {
					return V(e.childNodes).filter((function(e) {
							return e.tagName === t
					}
					))
			}
				, fe = function(e) {
					return e.textContent.trim()
			}
				, me = function(e) {
					var t = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
					if (!t)
							return 0;
					var i = t.slice(1)
						, n = i[0]
						, r = i[1]
						, a = i[2]
						, s = i[3]
						, o = i[4]
						, u = i[5];
					return 31536e3 * parseFloat(n || 0) + 2592e3 * parseFloat(r || 0) + 86400 * parseFloat(a || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0)
			}
				, ge = {
					mediaPresentationDuration: function(e) {
							return me(e)
					},
					availabilityStartTime: function(e) {
							return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t = e) && (t += "Z"),
							Date.parse(t) / 1e3;
							var t
					},
					minimumUpdatePeriod: function(e) {
							return me(e)
					},
					suggestedPresentationDelay: function(e) {
							return me(e)
					},
					type: function(e) {
							return e
					},
					timeShiftBufferDepth: function(e) {
							return me(e)
					},
					start: function(e) {
							return me(e)
					},
					width: function(e) {
							return parseInt(e, 10)
					},
					height: function(e) {
							return parseInt(e, 10)
					},
					bandwidth: function(e) {
							return parseInt(e, 10)
					},
					startNumber: function(e) {
							return parseInt(e, 10)
					},
					timescale: function(e) {
							return parseInt(e, 10)
					},
					duration: function(e) {
							var t = parseInt(e, 10);
							return isNaN(t) ? me(e) : t
					},
					d: function(e) {
							return parseInt(e, 10)
					},
					t: function(e) {
							return parseInt(e, 10)
					},
					r: function(e) {
							return parseInt(e, 10)
					},
					DEFAULT: function(e) {
							return e
					}
			}
				, ve = function(e) {
					return e && e.attributes ? V(e.attributes).reduce((function(e, t) {
							var i = ge[t.name] || ge.DEFAULT;
							return e[t.name] = i(t.value),
							e
					}
					), {}) : {}
			}
				, ye = {
					"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
					"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
					"urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
					"urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
			}
				, _e = function(e, t) {
					return t.length ? H(e.map((function(e) {
							return t.map((function(t) {
									return U()(e, fe(t))
							}
							))
					}
					))) : e
			}
				, be = function(e) {
					var t = pe(e, "SegmentTemplate")[0]
						, i = pe(e, "SegmentList")[0]
						, n = i && pe(i, "SegmentURL").map((function(e) {
							return q({
									tag: "SegmentURL"
							}, ve(e))
					}
					))
						, r = pe(e, "SegmentBase")[0]
						, a = i || t
						, s = a && pe(a, "SegmentTimeline")[0]
						, o = i || r || t
						, u = o && pe(o, "Initialization")[0]
						, l = t && ve(t);
					l && u ? l.initialization = u && ve(u) : l && l.initialization && (l.initialization = {
							sourceURL: l.initialization
					});
					var c = {
							template: l,
							timeline: s && pe(s, "S").map((function(e) {
									return ve(e)
							}
							)),
							list: i && q(ve(i), {
									segmentUrls: n,
									initialization: ve(u)
							}),
							base: r && q(ve(r), {
									initialization: ve(u)
							})
					};
					return Object.keys(c).forEach((function(e) {
							c[e] || delete c[e]
					}
					)),
					c
			}
				, Te = function(e, t, i) {
					return function(n) {
							var r = ve(n)
								, a = _e(t, pe(n, "BaseURL"))
								, s = pe(n, "Role")[0]
								, o = {
									role: ve(s)
							}
								, u = q(e, r, o)
								, l = pe(n, "ContentProtection").reduce((function(e, t) {
									var i = ve(t)
										, n = ye[i.schemeIdUri];
									if (n) {
											e[n] = {
													attributes: i
											};
											var r = pe(t, "cenc:pssh")[0];
											if (r) {
													var a = fe(r)
														, s = a && j()(a);
													e[n].pssh = s
											}
									}
									return e
							}
							), {});
							Object.keys(l).length && (u = q(u, {
									contentProtection: l
							}));
							var c = be(n)
								, h = pe(n, "Representation")
								, d = q(i, c);
							return H(h.map(function(e, t, i) {
									return function(n) {
											var r = pe(n, "BaseURL")
												, a = _e(t, r)
												, s = q(e, ve(n))
												, o = be(n);
											return a.map((function(e) {
													return {
															segmentInfo: q(i, o),
															attributes: q(s, {
																	baseUrl: e
															})
													}
											}
											))
									}
							}(u, a, d)))
					}
			}
				, Se = function(e, t) {
					void 0 === t && (t = {});
					var i = t
						, n = i.manifestUri
						, a = void 0 === n ? "" : n
						, s = i.NOW
						, o = void 0 === s ? Date.now() : s
						, u = i.clientOffset
						, l = void 0 === u ? 0 : u
						, c = pe(e, "Period");
					if (!c.length)
							throw new Error(W);
					var h = ve(e)
						, d = _e([a], pe(e, "BaseURL"));
					return h.sourceDuration = h.mediaPresentationDuration || 0,
					h.NOW = o,
					h.clientOffset = l,
					H(c.map(function(e, t) {
							return function(i, n) {
									var a = _e(t, pe(i, "BaseURL"))
										, s = ve(i)
										, o = parseInt(s.id, 10)
										, u = r.a.isNaN(o) ? n : o
										, l = q(e, {
											periodIndex: u
									})
										, c = pe(i, "AdaptationSet")
										, h = be(i);
									return H(c.map(Te(l, a, h)))
							}
					}(h, d)))
			}
				, we = function(e) {
					if ("" === e)
							throw new Error(z);
					var t = (new B.DOMParser).parseFromString(e, "application/xml")
						, i = t && "MPD" === t.documentElement.tagName ? t.documentElement : null;
					if (!i || i && i.getElementsByTagName("parsererror").length > 0)
							throw new Error(G);
					return i
			}
				, ke = function(e, t) {
					return void 0 === t && (t = {}),
					ae(Se(we(e), t).map(de), t.sidxMapping)
			}
				, Ee = function(e) {
					return function(e) {
							var t = pe(e, "UTCTiming")[0];
							if (!t)
									return null;
							var i = ve(t);
							switch (i.schemeIdUri) {
							case "urn:mpeg:dash:utc:http-head:2014":
							case "urn:mpeg:dash:utc:http-head:2012":
									i.method = "HEAD";
									break;
							case "urn:mpeg:dash:utc:http-xsdate:2014":
							case "urn:mpeg:dash:utc:http-iso:2014":
							case "urn:mpeg:dash:utc:http-xsdate:2012":
							case "urn:mpeg:dash:utc:http-iso:2012":
									i.method = "GET";
									break;
							case "urn:mpeg:dash:utc:direct:2014":
							case "urn:mpeg:dash:utc:direct:2012":
									i.method = "DIRECT",
									i.value = Date.parse(i.value);
									break;
							case "urn:mpeg:dash:utc:http-ntp:2014":
							case "urn:mpeg:dash:utc:ntp:2014":
							case "urn:mpeg:dash:utc:sntp:2014":
							default:
									throw new Error(K)
							}
							return i
					}(we(e))
			}
				, Ce = i("mvqA")
				, Ae = i.n(Ce)
				, xe = i("KAYj")
				, Oe = i.n(xe)
				, Pe = i("qOD0")
				, Ie = i.n(Pe)
				, Le = i("3D7k")
				, De = i.n(Le);
			var Re = function(e, t) {
					if (!(e instanceof t))
							throw new TypeError("Cannot call a class as a function")
			}
				, Ne = function() {
					function e(e, t) {
							for (var i = 0; i < t.length; i++) {
									var n = t[i];
									n.enumerable = n.enumerable || !1,
									n.configurable = !0,
									"value"in n && (n.writable = !0),
									Object.defineProperty(e, n.key, n)
							}
					}
					return function(t, i, n) {
							return i && e(t.prototype, i),
							n && e(t, n),
							t
					}
			}()
				, Ue = null
				, Me = function() {
					function e(t) {
							Re(this, e),
							Ue || (Ue = function() {
									var e = [[[], [], [], [], []], [[], [], [], [], []]]
										, t = e[0]
										, i = e[1]
										, n = t[4]
										, r = i[4]
										, a = void 0
										, s = void 0
										, o = void 0
										, u = []
										, l = []
										, c = void 0
										, h = void 0
										, d = void 0
										, p = void 0
										, f = void 0;
									for (a = 0; a < 256; a++)
											l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
									for (s = o = 0; !n[s]; s ^= c || 1,
									o = l[o] || 1)
											for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99,
											n[s] = d,
											r[d] = s,
											f = 16843009 * u[h = u[c = u[s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s,
											p = 257 * u[d] ^ 16843008 * d,
											a = 0; a < 4; a++)
													t[a][s] = p = p << 24 ^ p >>> 8,
													i[a][d] = f = f << 24 ^ f >>> 8;
									for (a = 0; a < 5; a++)
											t[a] = t[a].slice(0),
											i[a] = i[a].slice(0);
									return e
							}()),
							this._tables = [[Ue[0][0].slice(), Ue[0][1].slice(), Ue[0][2].slice(), Ue[0][3].slice(), Ue[0][4].slice()], [Ue[1][0].slice(), Ue[1][1].slice(), Ue[1][2].slice(), Ue[1][3].slice(), Ue[1][4].slice()]];
							var i = void 0
								, n = void 0
								, r = void 0
								, a = void 0
								, s = void 0
								, o = this._tables[0][4]
								, u = this._tables[1]
								, l = t.length
								, c = 1;
							if (4 !== l && 6 !== l && 8 !== l)
									throw new Error("Invalid aes key size");
							for (a = t.slice(0),
							s = [],
							this._key = [a, s],
							i = l; i < 4 * l + 28; i++)
									r = a[i - 1],
									(i % l == 0 || 8 === l && i % l == 4) && (r = o[r >>> 24] << 24 ^ o[r >> 16 & 255] << 16 ^ o[r >> 8 & 255] << 8 ^ o[255 & r],
									i % l == 0 && (r = r << 8 ^ r >>> 24 ^ c << 24,
									c = c << 1 ^ 283 * (c >> 7))),
									a[i] = a[i - l] ^ r;
							for (n = 0; i; n++,
							i--)
									r = a[3 & n ? i : i - 4],
									s[n] = i <= 4 || n < 4 ? r : u[0][o[r >>> 24]] ^ u[1][o[r >> 16 & 255]] ^ u[2][o[r >> 8 & 255]] ^ u[3][o[255 & r]]
					}
					return e.prototype.decrypt = function(e, t, i, n, r, a) {
							var s = this._key[1]
								, o = e ^ s[0]
								, u = n ^ s[1]
								, l = i ^ s[2]
								, c = t ^ s[3]
								, h = void 0
								, d = void 0
								, p = void 0
								, f = s.length / 4 - 2
								, m = void 0
								, g = 4
								, v = this._tables[1]
								, y = v[0]
								, _ = v[1]
								, b = v[2]
								, T = v[3]
								, S = v[4];
							for (m = 0; m < f; m++)
									h = y[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g],
									d = y[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1],
									p = y[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2],
									c = y[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3],
									g += 4,
									o = h,
									u = d,
									l = p;
							for (m = 0; m < 4; m++)
									r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++],
									h = o,
									o = u,
									u = l,
									l = c,
									c = h
					}
					,
					e
			}()
				, je = function() {
					function e() {
							Re(this, e),
							this.listeners = {}
					}
					return e.prototype.on = function(e, t) {
							this.listeners[e] || (this.listeners[e] = []),
							this.listeners[e].push(t)
					}
					,
					e.prototype.off = function(e, t) {
							if (!this.listeners[e])
									return !1;
							var i = this.listeners[e].indexOf(t);
							return this.listeners[e].splice(i, 1),
							i > -1
					}
					,
					e.prototype.trigger = function(e) {
							var t = this.listeners[e];
							if (t)
									if (2 === arguments.length)
											for (var i = t.length, n = 0; n < i; ++n)
													t[n].call(this, arguments[1]);
									else
											for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s)
													t[s].apply(this, r)
					}
					,
					e.prototype.dispose = function() {
							this.listeners = {}
					}
					,
					e.prototype.pipe = function(e) {
							this.on("data", (function(t) {
									e.push(t)
							}
							))
					}
					,
					e
			}()
				, Be = function(e) {
					function t() {
							Re(this, t);
							var i = function(e, t) {
									if (!e)
											throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.call(this, je));
							return i.jobs = [],
							i.delay = 1,
							i.timeout_ = null,
							i
					}
					return function(e, t) {
							if ("function" != typeof t && null !== t)
									throw new TypeError("Super expression must either be null or a function, not " + typeof t);
							e.prototype = Object.create(t && t.prototype, {
									constructor: {
											value: e,
											enumerable: !1,
											writable: !0,
											configurable: !0
									}
							}),
							t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e),
					t.prototype.processJob_ = function() {
							this.jobs.shift()(),
							this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
					}
					,
					t.prototype.push = function(e) {
							this.jobs.push(e),
							this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
					}
					,
					t
			}(je)
				, Fe = function(e) {
					return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
			}
				, qe = function(e, t, i) {
					var n = new Int32Array(e.buffer,e.byteOffset,e.byteLength >> 2)
						, r = new Me(Array.prototype.slice.call(t))
						, a = new Uint8Array(e.byteLength)
						, s = new Int32Array(a.buffer)
						, o = void 0
						, u = void 0
						, l = void 0
						, c = void 0
						, h = void 0
						, d = void 0
						, p = void 0
						, f = void 0
						, m = void 0;
					for (o = i[0],
					u = i[1],
					l = i[2],
					c = i[3],
					m = 0; m < n.length; m += 4)
							h = Fe(n[m]),
							d = Fe(n[m + 1]),
							p = Fe(n[m + 2]),
							f = Fe(n[m + 3]),
							r.decrypt(h, d, p, f, s, m),
							s[m] = Fe(s[m] ^ o),
							s[m + 1] = Fe(s[m + 1] ^ u),
							s[m + 2] = Fe(s[m + 2] ^ l),
							s[m + 3] = Fe(s[m + 3] ^ c),
							o = h,
							u = d,
							l = p,
							c = f;
					return a
			}
				, He = function() {
					function e(t, i, n, r) {
							Re(this, e);
							var a = e.STEP
								, s = new Int32Array(t.buffer)
								, o = new Uint8Array(t.byteLength)
								, u = 0;
							for (this.asyncStream_ = new Be,
							this.asyncStream_.push(this.decryptChunk_(s.subarray(u, u + a), i, n, o)),
							u = a; u < s.length; u += a)
									n = new Uint32Array([Fe(s[u - 4]), Fe(s[u - 3]), Fe(s[u - 2]), Fe(s[u - 1])]),
									this.asyncStream_.push(this.decryptChunk_(s.subarray(u, u + a), i, n, o));
							this.asyncStream_.push((function() {
									var e;
									r(null, (e = o).subarray(0, e.byteLength - e[e.byteLength - 1]))
							}
							))
					}
					return e.prototype.decryptChunk_ = function(e, t, i, n) {
							return function() {
									var r = qe(e, t, i);
									n.set(r, e.byteOffset)
							}
					}
					,
					Ne(e, null, [{
							key: "STEP",
							get: function() {
									return 32e3
							}
					}]),
					e
			}()
				, Ve = [];
			var We = function e(t) {
					var i, n = "info", a = function() {
							for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
									t[r] = arguments[r];
							i("log", n, t)
					};
					return i = function(e, t) {
							return function(i, n, a) {
									var s = t.levels[n]
										, o = new RegExp("^(" + s + ")$");
									if ("log" !== i && a.unshift(i.toUpperCase() + ":"),
									a.unshift(e + ":"),
									Ve) {
											Ve.push([].concat(a));
											var u = Ve.length - 1e3;
											Ve.splice(0, u > 0 ? u : 0)
									}
									if (r.a.console) {
											var l = r.a.console[i];
											l || "debug" !== i || (l = r.a.console.info || r.a.console.log),
											l && s && o.test(i) && l[Array.isArray(a) ? "apply" : "call"](r.a.console, a)
									}
							}
					}(t, a),
					a.createLogger = function(i) {
							return e(t + ": " + i)
					}
					,
					a.levels = {
							all: "debug|log|warn|error",
							off: "",
							debug: "debug|log|warn|error",
							info: "log|warn|error",
							warn: "warn|error",
							error: "error",
							DEFAULT: n
					},
					a.level = function(e) {
							if ("string" == typeof e) {
									if (!a.levels.hasOwnProperty(e))
											throw new Error('"' + e + '" in not a valid log level');
									n = e
							}
							return n
					}
					,
					(a.history = function() {
							return Ve ? [].concat(Ve) : []
					}
					).filter = function(e) {
							return (Ve || []).filter((function(t) {
									return new RegExp(".*" + e + ".*").test(t[0])
							}
							))
					}
					,
					a.history.clear = function() {
							Ve && (Ve.length = 0)
					}
					,
					a.history.disable = function() {
							null !== Ve && (Ve.length = 0,
							Ve = null)
					}
					,
					a.history.enable = function() {
							null === Ve && (Ve = [])
					}
					,
					a.error = function() {
							for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
									t[r] = arguments[r];
							return i("error", n, t)
					}
					,
					a.warn = function() {
							for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
									t[r] = arguments[r];
							return i("warn", n, t)
					}
					,
					a.debug = function() {
							for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
									t[r] = arguments[r];
							return i("debug", n, t)
					}
					,
					a
			}("VIDEOJS")
				, ze = We.createLogger
				, Ge = Object.prototype.toString
				, Ye = function(e) {
					return $e(e) ? Object.keys(e) : []
			};
			function Xe(e, t) {
					Ye(e).forEach((function(i) {
							return t(e[i], i)
					}
					))
			}
			function Ke(e) {
					for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
							i[n - 1] = arguments[n];
					return Object.assign ? u.a.apply(void 0, [e].concat(i)) : (i.forEach((function(t) {
							t && Xe(t, (function(t, i) {
									e[i] = t
							}
							))
					}
					)),
					e)
			}
			function $e(e) {
					return !!e && "object" == typeof e
			}
			function Qe(e) {
					return $e(e) && "[object Object]" === Ge.call(e) && e.constructor === Object
			}
			function Je(e, t) {
					if (!e || !t)
							return "";
					if ("function" == typeof r.a.getComputedStyle) {
							var i = r.a.getComputedStyle(e);
							return i ? i.getPropertyValue(t) || i[t] : ""
					}
					return ""
			}
			function Ze(e) {
					return "string" == typeof e && Boolean(e.trim())
			}
			function et(e) {
					if (e.indexOf(" ") >= 0)
							throw new Error("class has illegal whitespace characters")
			}
			function tt() {
					return s.a === r.a.document
			}
			function it(e) {
					return $e(e) && 1 === e.nodeType
			}
			function nt() {
					try {
							return r.a.parent !== r.a.self
					} catch (e) {
							return !0
					}
			}
			function rt(e) {
					return function(t, i) {
							if (!Ze(t))
									return s.a[e](null);
							Ze(i) && (i = s.a.querySelector(i));
							var n = it(i) ? i : s.a;
							return n[e] && n[e](t)
					}
			}
			function at(e, t, i, n) {
					void 0 === e && (e = "div"),
					void 0 === t && (t = {}),
					void 0 === i && (i = {});
					var r = s.a.createElement(e);
					return Object.getOwnPropertyNames(t).forEach((function(e) {
							var i = t[e];
							-1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (We.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set " + e + " to " + i + "."),
							r.setAttribute(e, i)) : "textContent" === e ? st(r, i) : r[e] !== i && (r[e] = i)
					}
					)),
					Object.getOwnPropertyNames(i).forEach((function(e) {
							r.setAttribute(e, i[e])
					}
					)),
					n && Et(r, n),
					r
			}
			function st(e, t) {
					return void 0 === e.textContent ? e.innerText = t : e.textContent = t,
					e
			}
			function ot(e, t) {
					t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
			}
			function ut(e, t) {
					return et(t),
					e.classList ? e.classList.contains(t) : (i = t,
					new RegExp("(^|\\s)" + i + "($|\\s)")).test(e.className);
					var i
			}
			function lt(e, t) {
					return e.classList ? e.classList.add(t) : ut(e, t) || (e.className = (e.className + " " + t).trim()),
					e
			}
			function ct(e, t) {
					return e.classList ? e.classList.remove(t) : (et(t),
					e.className = e.className.split(/\s+/).filter((function(e) {
							return e !== t
					}
					)).join(" ")),
					e
			}
			function ht(e, t, i) {
					var n = ut(e, t);
					if ("function" == typeof i && (i = i(e, t)),
					"boolean" != typeof i && (i = !n),
					i !== n)
							return i ? lt(e, t) : ct(e, t),
							e
			}
			function dt(e, t) {
					Object.getOwnPropertyNames(t).forEach((function(i) {
							var n = t[i];
							null == n || !1 === n ? e.removeAttribute(i) : e.setAttribute(i, !0 === n ? "" : n)
					}
					))
			}
			function pt(e) {
					var t = {}
						, i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
					if (e && e.attributes && e.attributes.length > 0)
							for (var n = e.attributes, r = n.length - 1; r >= 0; r--) {
									var a = n[r].name
										, s = n[r].value;
									"boolean" != typeof e[a] && -1 === i.indexOf("," + a + ",") || (s = null !== s),
									t[a] = s
							}
					return t
			}
			function ft(e, t) {
					return e.getAttribute(t)
			}
			function mt(e, t, i) {
					e.setAttribute(t, i)
			}
			function gt(e, t) {
					e.removeAttribute(t)
			}
			function vt() {
					s.a.body.focus(),
					s.a.onselectstart = function() {
							return !1
					}
			}
			function yt() {
					s.a.onselectstart = function() {
							return !0
					}
			}
			function _t(e) {
					if (e && e.getBoundingClientRect && e.parentNode) {
							var t = e.getBoundingClientRect()
								, i = {};
							return ["bottom", "height", "left", "right", "top", "width"].forEach((function(e) {
									void 0 !== t[e] && (i[e] = t[e])
							}
							)),
							i.height || (i.height = parseFloat(Je(e, "height"))),
							i.width || (i.width = parseFloat(Je(e, "width"))),
							i
					}
			}
			function bt(e) {
					var t;
					if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()),
					!t)
							return {
									left: 0,
									top: 0
							};
					var i = s.a.documentElement
						, n = s.a.body
						, a = i.clientLeft || n.clientLeft || 0
						, o = r.a.pageXOffset || n.scrollLeft
						, u = t.left + o - a
						, l = i.clientTop || n.clientTop || 0
						, c = r.a.pageYOffset || n.scrollTop
						, h = t.top + c - l;
					return {
							left: Math.round(u),
							top: Math.round(h)
					}
			}
			function Tt(e, t) {
					var i = {}
						, n = bt(e)
						, r = e.offsetWidth
						, a = e.offsetHeight
						, s = n.top
						, o = n.left
						, u = t.pageY
						, l = t.pageX;
					return t.changedTouches && (l = t.changedTouches[0].pageX,
					u = t.changedTouches[0].pageY),
					i.y = Math.max(0, Math.min(1, (s - u + a) / a)),
					i.x = Math.max(0, Math.min(1, (l - o) / r)),
					i
			}
			function St(e) {
					return $e(e) && 3 === e.nodeType
			}
			function wt(e) {
					for (; e.firstChild; )
							e.removeChild(e.firstChild);
					return e
			}
			function kt(e) {
					return "function" == typeof e && (e = e()),
					(Array.isArray(e) ? e : [e]).map((function(e) {
							return "function" == typeof e && (e = e()),
							it(e) || St(e) ? e : "string" == typeof e && /\S/.test(e) ? s.a.createTextNode(e) : void 0
					}
					)).filter((function(e) {
							return e
					}
					))
			}
			function Et(e, t) {
					return kt(t).forEach((function(t) {
							return e.appendChild(t)
					}
					)),
					e
			}
			function Ct(e, t) {
					return Et(wt(e), t)
			}
			function At(e) {
					return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || ("mouseup" === e.type && 0 === e.button && 0 === e.buttons || 0 === e.button && 1 === e.buttons))
			}
			var xt, Ot = rt("querySelector"), Pt = rt("querySelectorAll"), It = Object.freeze({
					isReal: tt,
					isEl: it,
					isInFrame: nt,
					createEl: at,
					textContent: st,
					prependTo: ot,
					hasClass: ut,
					addClass: lt,
					removeClass: ct,
					toggleClass: ht,
					setAttributes: dt,
					getAttributes: pt,
					getAttribute: ft,
					setAttribute: mt,
					removeAttribute: gt,
					blockTextSelection: vt,
					unblockTextSelection: yt,
					getBoundingClientRect: _t,
					findPosition: bt,
					getPointerPosition: Tt,
					isTextNode: St,
					emptyEl: wt,
					normalizeContent: kt,
					appendContent: Et,
					insertContent: Ct,
					isSingleLeftClick: At,
					$: Ot,
					$$: Pt
			}), Lt = !1, Dt = function() {
					if (tt() && !1 !== xt.options.autoSetup) {
							var e = Array.prototype.slice.call(s.a.getElementsByTagName("video"))
								, t = Array.prototype.slice.call(s.a.getElementsByTagName("audio"))
								, i = Array.prototype.slice.call(s.a.getElementsByTagName("video-js"))
								, n = e.concat(t, i);
							if (n && n.length > 0)
									for (var r = 0, a = n.length; r < a; r++) {
											var o = n[r];
											if (!o || !o.getAttribute) {
													Rt(1);
													break
											}
											void 0 === o.player && null !== o.getAttribute("data-setup") && xt(o)
									}
							else
									Lt || Rt(1)
					}
			};
			function Rt(e, t) {
					t && (xt = t),
					r.a.setTimeout(Dt, e)
			}
			function Nt() {
					Lt = !0,
					r.a.removeEventListener("load", Nt)
			}
			tt() && ("complete" === s.a.readyState ? Nt() : r.a.addEventListener("load", Nt));
			var Ut, Mt = function(e) {
					var t = s.a.createElement("style");
					return t.className = e,
					t
			}, jt = function(e, t) {
					e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
			}, Bt = 3;
			function Ft() {
					return Bt++
			}
			r.a.WeakMap || (Ut = function() {
					function e() {
							this.vdata = "vdata" + Math.floor(r.a.performance && r.a.performance.now() || Date.now()),
							this.data = {}
					}
					var t = e.prototype;
					return t.set = function(e, t) {
							var i = e[this.vdata] || Ft();
							return e[this.vdata] || (e[this.vdata] = i),
							this.data[i] = t,
							this
					}
					,
					t.get = function(e) {
							var t = e[this.vdata];
							if (t)
									return this.data[t];
							We("We have no data for this element", e)
					}
					,
					t.has = function(e) {
							return e[this.vdata]in this.data
					}
					,
					t.delete = function(e) {
							var t = e[this.vdata];
							t && (delete this.data[t],
							delete e[this.vdata])
					}
					,
					e
			}());
			var qt, Ht = r.a.WeakMap ? new WeakMap : new Ut;
			function Vt(e, t) {
					if (Ht.has(e)) {
							var i = Ht.get(e);
							0 === i.handlers[t].length && (delete i.handlers[t],
							e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)),
							Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers,
							delete i.dispatcher,
							delete i.disabled),
							0 === Object.getOwnPropertyNames(i).length && Ht.delete(e)
					}
			}
			function Wt(e, t, i, n) {
					i.forEach((function(i) {
							e(t, i, n)
					}
					))
			}
			function zt(e) {
					if (e.fixed_)
							return e;
					function t() {
							return !0
					}
					function i() {
							return !1
					}
					if (!e || !e.isPropagationStopped) {
							var n = e || r.a.event;
							for (var a in e = {},
							n)
									"layerX" !== a && "layerY" !== a && "keyLocation" !== a && "webkitMovementX" !== a && "webkitMovementY" !== a && ("returnValue" === a && n.preventDefault || (e[a] = n[a]));
							if (e.target || (e.target = e.srcElement || s.a),
							e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement),
							e.preventDefault = function() {
									n.preventDefault && n.preventDefault(),
									e.returnValue = !1,
									n.returnValue = !1,
									e.defaultPrevented = !0
							}
							,
							e.defaultPrevented = !1,
							e.stopPropagation = function() {
									n.stopPropagation && n.stopPropagation(),
									e.cancelBubble = !0,
									n.cancelBubble = !0,
									e.isPropagationStopped = t
							}
							,
							e.isPropagationStopped = i,
							e.stopImmediatePropagation = function() {
									n.stopImmediatePropagation && n.stopImmediatePropagation(),
									e.isImmediatePropagationStopped = t,
									e.stopPropagation()
							}
							,
							e.isImmediatePropagationStopped = i,
							null !== e.clientX && void 0 !== e.clientX) {
									var o = s.a.documentElement
										, u = s.a.body;
									e.pageX = e.clientX + (o && o.scrollLeft || u && u.scrollLeft || 0) - (o && o.clientLeft || u && u.clientLeft || 0),
									e.pageY = e.clientY + (o && o.scrollTop || u && u.scrollTop || 0) - (o && o.clientTop || u && u.clientTop || 0)
							}
							e.which = e.charCode || e.keyCode,
							null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
					}
					return e.fixed_ = !0,
					e
			}
			var Gt = ["touchstart", "touchmove"];
			function Yt(e, t, i) {
					if (Array.isArray(t))
							return Wt(Yt, e, t, i);
					Ht.has(e) || Ht.set(e, {});
					var n = Ht.get(e);
					if (n.handlers || (n.handlers = {}),
					n.handlers[t] || (n.handlers[t] = []),
					i.guid || (i.guid = Ft()),
					n.handlers[t].push(i),
					n.dispatcher || (n.disabled = !1,
					n.dispatcher = function(t, i) {
							if (!n.disabled) {
									t = zt(t);
									var r = n.handlers[t.type];
									if (r)
											for (var a = r.slice(0), s = 0, o = a.length; s < o && !t.isImmediatePropagationStopped(); s++)
													try {
															a[s].call(e, t, i)
													} catch (e) {
															We.error(e)
													}
							}
					}
					),
					1 === n.handlers[t].length)
							if (e.addEventListener) {
									var a = !1;
									(function() {
											if ("boolean" != typeof qt) {
													qt = !1;
													try {
															var e = Object.defineProperty({}, "passive", {
																	get: function() {
																			qt = !0
																	}
															});
															r.a.addEventListener("test", null, e),
															r.a.removeEventListener("test", null, e)
													} catch (e) {}
											}
											return qt
									}
									)() && Gt.indexOf(t) > -1 && (a = {
											passive: !0
									}),
									e.addEventListener(t, n.dispatcher, a)
							} else
									e.attachEvent && e.attachEvent("on" + t, n.dispatcher)
			}
			function Xt(e, t, i) {
					if (Ht.has(e)) {
							var n = Ht.get(e);
							if (n.handlers) {
									if (Array.isArray(t))
											return Wt(Xt, e, t, i);
									var r = function(e, t) {
											n.handlers[t] = [],
											Vt(e, t)
									};
									if (void 0 !== t) {
											var a = n.handlers[t];
											if (a)
													if (i) {
															if (i.guid)
																	for (var s = 0; s < a.length; s++)
																			a[s].guid === i.guid && a.splice(s--, 1);
															Vt(e, t)
													} else
															r(e, t)
									} else
											for (var o in n.handlers)
													Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(e, o)
							}
					}
			}
			function Kt(e, t, i) {
					var n = Ht.has(e) ? Ht.get(e) : {}
						, r = e.parentNode || e.ownerDocument;
					if ("string" == typeof t ? t = {
							type: t,
							target: e
					} : t.target || (t.target = e),
					t = zt(t),
					n.dispatcher && n.dispatcher.call(e, t, i),
					r && !t.isPropagationStopped() && !0 === t.bubbles)
							Kt.call(null, r, t, i);
					else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
							Ht.has(t.target) || Ht.set(t.target, {});
							var a = Ht.get(t.target);
							t.target[t.type] && (a.disabled = !0,
							"function" == typeof t.target[t.type] && t.target[t.type](),
							a.disabled = !1)
					}
					return !t.defaultPrevented
			}
			function $t(e, t, i) {
					if (Array.isArray(t))
							return Wt($t, e, t, i);
					var n = function n() {
							Xt(e, t, n),
							i.apply(this, arguments)
					};
					n.guid = i.guid = i.guid || Ft(),
					Yt(e, t, n)
			}
			function Qt(e, t, i) {
					var n = function n() {
							Xt(e, t, n),
							i.apply(this, arguments)
					};
					n.guid = i.guid = i.guid || Ft(),
					Yt(e, t, n)
			}
			var Jt, Zt = Object.freeze({
					fixEvent: zt,
					on: Yt,
					off: Xt,
					trigger: Kt,
					one: $t,
					any: Qt
			}), ei = function(e, t, i) {
					t.guid || (t.guid = Ft());
					var n = t.bind(e);
					return n.guid = i ? i + "_" + t.guid : t.guid,
					n
			}, ti = function(e, t) {
					var i = r.a.performance.now();
					return function() {
							var n = r.a.performance.now();
							n - i >= t && (e.apply(void 0, arguments),
							i = n)
					}
			}, ii = function() {};
			ii.prototype.allowedEvents_ = {},
			ii.prototype.on = function(e, t) {
					var i = this.addEventListener;
					this.addEventListener = function() {}
					,
					Yt(this, e, t),
					this.addEventListener = i
			}
			,
			ii.prototype.addEventListener = ii.prototype.on,
			ii.prototype.off = function(e, t) {
					Xt(this, e, t)
			}
			,
			ii.prototype.removeEventListener = ii.prototype.off,
			ii.prototype.one = function(e, t) {
					var i = this.addEventListener;
					this.addEventListener = function() {}
					,
					$t(this, e, t),
					this.addEventListener = i
			}
			,
			ii.prototype.any = function(e, t) {
					var i = this.addEventListener;
					this.addEventListener = function() {}
					,
					Qt(this, e, t),
					this.addEventListener = i
			}
			,
			ii.prototype.trigger = function(e) {
					var t = e.type || e;
					"string" == typeof e && (e = {
							type: t
					}),
					e = zt(e),
					this.allowedEvents_[t] && this["on" + t] && this["on" + t](e),
					Kt(this, e)
			}
			,
			ii.prototype.dispatchEvent = ii.prototype.trigger,
			ii.prototype.queueTrigger = function(e) {
					var t = this;
					Jt || (Jt = new Map);
					var i = e.type || e
						, n = Jt.get(this);
					n || (n = new Map,
					Jt.set(this, n));
					var a = n.get(i);
					n.delete(i),
					r.a.clearTimeout(a);
					var s = r.a.setTimeout((function() {
							0 === n.size && (n = null,
							Jt.delete(t)),
							t.trigger(e)
					}
					), 0);
					n.set(i, s)
			}
			;
			var ni = function(e) {
					return e instanceof ii || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every((function(t) {
							return "function" == typeof e[t]
					}
					))
			}
				, ri = function(e) {
					return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
			}
				, ai = function(e) {
					if (!e.nodeName && !ni(e))
							throw new Error("Invalid target; must be a DOM node or evented object.")
			}
				, si = function(e) {
					if (!ri(e))
							throw new Error("Invalid event type; must be a non-empty string or array.")
			}
				, oi = function(e) {
					if ("function" != typeof e)
							throw new Error("Invalid listener; must be a function.")
			}
				, ui = function(e, t) {
					var i, n, r, a = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
					return a ? (i = e.eventBusEl_,
					t.length >= 3 && t.shift(),
					n = t[0],
					r = t[1]) : (i = t[0],
					n = t[1],
					r = t[2]),
					ai(i),
					si(n),
					oi(r),
					{
							isTargetingSelf: a,
							target: i,
							type: n,
							listener: r = ei(e, r)
					}
			}
				, li = function(e, t, i, n) {
					ai(e),
					e.nodeName ? Zt[t](e, i, n) : e[t](i, n)
			}
				, ci = {
					on: function() {
							for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
									i[n] = arguments[n];
							var r = ui(this, i)
								, a = r.isTargetingSelf
								, s = r.target
								, o = r.type
								, u = r.listener;
							if (li(s, "on", o, u),
							!a) {
									var l = function() {
											return e.off(s, o, u)
									};
									l.guid = u.guid;
									var c = function() {
											return e.off("dispose", l)
									};
									c.guid = u.guid,
									li(this, "on", "dispose", l),
									li(s, "on", "dispose", c)
							}
					},
					one: function() {
							for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
									i[n] = arguments[n];
							var r = ui(this, i)
								, a = r.isTargetingSelf
								, s = r.target
								, o = r.type
								, u = r.listener;
							if (a)
									li(s, "one", o, u);
							else {
									var l = function t() {
											e.off(s, o, t);
											for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
													n[r] = arguments[r];
											u.apply(null, n)
									};
									l.guid = u.guid,
									li(s, "one", o, l)
							}
					},
					any: function() {
							for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
									i[n] = arguments[n];
							var r = ui(this, i)
								, a = r.isTargetingSelf
								, s = r.target
								, o = r.type
								, u = r.listener;
							if (a)
									li(s, "any", o, u);
							else {
									var l = function t() {
											e.off(s, o, t);
											for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
													n[r] = arguments[r];
											u.apply(null, n)
									};
									l.guid = u.guid,
									li(s, "any", o, l)
							}
					},
					off: function(e, t, i) {
							if (!e || ri(e))
									Xt(this.eventBusEl_, e, t);
							else {
									var n = e
										, r = t;
									ai(n),
									si(r),
									oi(i),
									i = ei(this, i),
									this.off("dispose", i),
									n.nodeName ? (Xt(n, r, i),
									Xt(n, "dispose", i)) : ni(n) && (n.off(r, i),
									n.off("dispose", i))
							}
					},
					trigger: function(e, t) {
							return Kt(this.eventBusEl_, e, t)
					}
			};
			function hi(e, t) {
					void 0 === t && (t = {});
					var i = t.eventBusKey;
					if (i) {
							if (!e[i].nodeName)
									throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
							e.eventBusEl_ = e[i]
					} else
							e.eventBusEl_ = at("span", {
									className: "vjs-event-bus"
							});
					return Ke(e, ci),
					e.eventedCallbacks && e.eventedCallbacks.forEach((function(e) {
							e()
					}
					)),
					e.on("dispose", (function() {
							e.off(),
							r.a.setTimeout((function() {
									e.eventBusEl_ = null
							}
							), 0)
					}
					)),
					e
			}
			var di = {
					state: {},
					setState: function(e) {
							var t, i = this;
							return "function" == typeof e && (e = e()),
							Xe(e, (function(e, n) {
									i.state[n] !== e && ((t = t || {})[n] = {
											from: i.state[n],
											to: e
									}),
									i.state[n] = e
							}
							)),
							t && ni(this) && this.trigger({
									changes: t,
									type: "statechanged"
							}),
							t
					}
			};
			function pi(e, t) {
					return Ke(e, di),
					e.state = Ke({}, e.state, t),
					"function" == typeof e.handleStateChanged && ni(e) && e.on("statechanged", e.handleStateChanged),
					e
			}
			var fi = function(e) {
					return "string" != typeof e ? e : e.replace(/./, (function(e) {
							return e.toLowerCase()
					}
					))
			}
				, mi = function(e) {
					return "string" != typeof e ? e : e.replace(/./, (function(e) {
							return e.toUpperCase()
					}
					))
			};
			function gi() {
					for (var e = {}, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
							i[n] = arguments[n];
					return i.forEach((function(t) {
							t && Xe(t, (function(t, i) {
									Qe(t) ? (Qe(e[i]) || (e[i] = {}),
									e[i] = gi(e[i], t)) : e[i] = t
							}
							))
					}
					)),
					e
			}
			var vi = function() {
					function e(e, t, i) {
							if (!e && this.play ? this.player_ = e = this : this.player_ = e,
							this.isDisposed_ = !1,
							this.parentComponent_ = null,
							this.options_ = gi({}, this.options_),
							t = this.options_ = gi(this.options_, t),
							this.id_ = t.id || t.el && t.el.id,
							!this.id_) {
									var n = e && e.id && e.id() || "no_player";
									this.id_ = n + "_component_" + Ft()
							}
							var a;
							this.name_ = t.name || null,
							t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()),
							!1 !== t.evented && hi(this, {
									eventBusKey: this.el_ ? "el_" : null
							}),
							pi(this, this.constructor.defaultState),
							this.children_ = [],
							this.childIndex_ = {},
							this.childNameIndex_ = {},
							r.a.Set || (a = function() {
									function e() {
											this.set_ = {}
									}
									var t = e.prototype;
									return t.has = function(e) {
											return e in this.set_
									}
									,
									t.delete = function(e) {
											var t = this.has(e);
											return delete this.set_[e],
											t
									}
									,
									t.add = function(e) {
											return this.set_[e] = 1,
											this
									}
									,
									t.forEach = function(e, t) {
											for (var i in this.set_)
													e.call(t, i, i, this)
									}
									,
									e
							}()),
							this.setTimeoutIds_ = r.a.Set ? new Set : new a,
							this.setIntervalIds_ = r.a.Set ? new Set : new a,
							this.rafIds_ = r.a.Set ? new Set : new a,
							this.clearingTimersOnDispose_ = !1,
							!1 !== t.initChildren && this.initChildren(),
							this.ready(i),
							!1 !== t.reportTouchActivity && this.enableTouchActivity()
					}
					var t = e.prototype;
					return t.dispose = function() {
							if (!this.isDisposed_) {
									if (this.trigger({
											type: "dispose",
											bubbles: !1
									}),
									this.isDisposed_ = !0,
									this.children_)
											for (var e = this.children_.length - 1; e >= 0; e--)
													this.children_[e].dispose && this.children_[e].dispose();
									this.children_ = null,
									this.childIndex_ = null,
									this.childNameIndex_ = null,
									this.parentComponent_ = null,
									this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_),
									Ht.has(this.el_) && Ht.delete(this.el_),
									this.el_ = null),
									this.player_ = null
							}
					}
					,
					t.isDisposed = function() {
							return Boolean(this.isDisposed_)
					}
					,
					t.player = function() {
							return this.player_
					}
					,
					t.options = function(e) {
							return e ? (this.options_ = gi(this.options_, e),
							this.options_) : this.options_
					}
					,
					t.el = function() {
							return this.el_
					}
					,
					t.createEl = function(e, t, i) {
							return at(e, t, i)
					}
					,
					t.localize = function(e, t, i) {
							void 0 === i && (i = e);
							var n = this.player_.language && this.player_.language()
								, r = this.player_.languages && this.player_.languages()
								, a = r && r[n]
								, s = n && n.split("-")[0]
								, o = r && r[s]
								, u = i;
							return a && a[e] ? u = a[e] : o && o[e] && (u = o[e]),
							t && (u = u.replace(/\{(\d+)\}/g, (function(e, i) {
									var n = t[i - 1]
										, r = n;
									return void 0 === n && (r = e),
									r
							}
							))),
							u
					}
					,
					t.contentEl = function() {
							return this.contentEl_ || this.el_
					}
					,
					t.id = function() {
							return this.id_
					}
					,
					t.name = function() {
							return this.name_
					}
					,
					t.children = function() {
							return this.children_
					}
					,
					t.getChildById = function(e) {
							return this.childIndex_[e]
					}
					,
					t.getChild = function(e) {
							if (e)
									return this.childNameIndex_[e]
					}
					,
					t.addChild = function(t, i, n) {
							var r, a;
							if (void 0 === i && (i = {}),
							void 0 === n && (n = this.children_.length),
							"string" == typeof t) {
									a = mi(t);
									var s = i.componentClass || a;
									i.name = a;
									var o = e.getComponent(s);
									if (!o)
											throw new Error("Component " + s + " does not exist");
									if ("function" != typeof o)
											return null;
									r = new o(this.player_ || this,i)
							} else
									r = t;
							if (r.parentComponent_ && r.parentComponent_.removeChild(r),
							this.children_.splice(n, 0, r),
							r.parentComponent_ = this,
							"function" == typeof r.id && (this.childIndex_[r.id()] = r),
							(a = a || r.name && mi(r.name())) && (this.childNameIndex_[a] = r,
							this.childNameIndex_[fi(a)] = r),
							"function" == typeof r.el && r.el()) {
									var u = null;
									this.children_[n + 1] && this.children_[n + 1].el_ && (u = this.children_[n + 1].el_),
									this.contentEl().insertBefore(r.el(), u)
							}
							return r
					}
					,
					t.removeChild = function(e) {
							if ("string" == typeof e && (e = this.getChild(e)),
							e && this.children_) {
									for (var t = !1, i = this.children_.length - 1; i >= 0; i--)
											if (this.children_[i] === e) {
													t = !0,
													this.children_.splice(i, 1);
													break
											}
									if (t) {
											e.parentComponent_ = null,
											this.childIndex_[e.id()] = null,
											this.childNameIndex_[mi(e.name())] = null,
											this.childNameIndex_[fi(e.name())] = null;
											var n = e.el();
											n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
									}
							}
					}
					,
					t.initChildren = function() {
							var t = this
								, i = this.options_.children;
							if (i) {
									var n, r = this.options_, a = e.getComponent("Tech");
									(n = Array.isArray(i) ? i : Object.keys(i)).concat(Object.keys(this.options_).filter((function(e) {
											return !n.some((function(t) {
													return "string" == typeof t ? e === t : e === t.name
											}
											))
									}
									))).map((function(e) {
											var n, r;
											return "string" == typeof e ? r = i[n = e] || t.options_[n] || {} : (n = e.name,
											r = e),
											{
													name: n,
													opts: r
											}
									}
									)).filter((function(t) {
											var i = e.getComponent(t.opts.componentClass || mi(t.name));
											return i && !a.isTech(i)
									}
									)).forEach((function(e) {
											var i = e.name
												, n = e.opts;
											if (void 0 !== r[i] && (n = r[i]),
											!1 !== n) {
													!0 === n && (n = {}),
													n.playerOptions = t.options_.playerOptions;
													var a = t.addChild(i, n);
													a && (t[i] = a)
											}
									}
									))
							}
					}
					,
					t.buildCSSClass = function() {
							return ""
					}
					,
					t.ready = function(e, t) {
							if (void 0 === t && (t = !1),
							e)
									return this.isReady_ ? void (t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [],
									void this.readyQueue_.push(e))
					}
					,
					t.triggerReady = function() {
							this.isReady_ = !0,
							this.setTimeout((function() {
									var e = this.readyQueue_;
									this.readyQueue_ = [],
									e && e.length > 0 && e.forEach((function(e) {
											e.call(this)
									}
									), this),
									this.trigger("ready")
							}
							), 1)
					}
					,
					t.$ = function(e, t) {
							return Ot(e, t || this.contentEl())
					}
					,
					t.$$ = function(e, t) {
							return Pt(e, t || this.contentEl())
					}
					,
					t.hasClass = function(e) {
							return ut(this.el_, e)
					}
					,
					t.addClass = function(e) {
							lt(this.el_, e)
					}
					,
					t.removeClass = function(e) {
							ct(this.el_, e)
					}
					,
					t.toggleClass = function(e, t) {
							ht(this.el_, e, t)
					}
					,
					t.show = function() {
							this.removeClass("vjs-hidden")
					}
					,
					t.hide = function() {
							this.addClass("vjs-hidden")
					}
					,
					t.lockShowing = function() {
							this.addClass("vjs-lock-showing")
					}
					,
					t.unlockShowing = function() {
							this.removeClass("vjs-lock-showing")
					}
					,
					t.getAttribute = function(e) {
							return ft(this.el_, e)
					}
					,
					t.setAttribute = function(e, t) {
							mt(this.el_, e, t)
					}
					,
					t.removeAttribute = function(e) {
							gt(this.el_, e)
					}
					,
					t.width = function(e, t) {
							return this.dimension("width", e, t)
					}
					,
					t.height = function(e, t) {
							return this.dimension("height", e, t)
					}
					,
					t.dimensions = function(e, t) {
							this.width(e, !0),
							this.height(t)
					}
					,
					t.dimension = function(e, t, i) {
							if (void 0 !== t)
									return null !== t && t == t || (t = 0),
									-1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px",
									void (i || this.trigger("componentresize"));
							if (!this.el_)
									return 0;
							var n = this.el_.style[e]
								, r = n.indexOf("px");
							return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + mi(e)], 10)
					}
					,
					t.currentDimension = function(e) {
							var t = 0;
							if ("width" !== e && "height" !== e)
									throw new Error("currentDimension only accepts width or height value");
							if (t = Je(this.el_, e),
							0 === (t = parseFloat(t)) || isNaN(t)) {
									var i = "offset" + mi(e);
									t = this.el_[i]
							}
							return t
					}
					,
					t.currentDimensions = function() {
							return {
									width: this.currentDimension("width"),
									height: this.currentDimension("height")
							}
					}
					,
					t.currentWidth = function() {
							return this.currentDimension("width")
					}
					,
					t.currentHeight = function() {
							return this.currentDimension("height")
					}
					,
					t.focus = function() {
							this.el_.focus()
					}
					,
					t.blur = function() {
							this.el_.blur()
					}
					,
					t.handleKeyDown = function(e) {
							this.player_ && (e.stopPropagation(),
							this.player_.handleKeyDown(e))
					}
					,
					t.handleKeyPress = function(e) {
							this.handleKeyDown(e)
					}
					,
					t.emitTapEvents = function() {
							var e, t = 0, i = null;
							this.on("touchstart", (function(n) {
									1 === n.touches.length && (i = {
											pageX: n.touches[0].pageX,
											pageY: n.touches[0].pageY
									},
									t = r.a.performance.now(),
									e = !0)
							}
							)),
							this.on("touchmove", (function(t) {
									if (t.touches.length > 1)
											e = !1;
									else if (i) {
											var n = t.touches[0].pageX - i.pageX
												, r = t.touches[0].pageY - i.pageY;
											Math.sqrt(n * n + r * r) > 10 && (e = !1)
									}
							}
							));
							var n = function() {
									e = !1
							};
							this.on("touchleave", n),
							this.on("touchcancel", n),
							this.on("touchend", (function(n) {
									(i = null,
									!0 === e) && (r.a.performance.now() - t < 200 && (n.preventDefault(),
									this.trigger("tap")))
							}
							))
					}
					,
					t.enableTouchActivity = function() {
							if (this.player() && this.player().reportUserActivity) {
									var e, t = ei(this.player(), this.player().reportUserActivity);
									this.on("touchstart", (function() {
											t(),
											this.clearInterval(e),
											e = this.setInterval(t, 250)
									}
									));
									var i = function(i) {
											t(),
											this.clearInterval(e)
									};
									this.on("touchmove", t),
									this.on("touchend", i),
									this.on("touchcancel", i)
							}
					}
					,
					t.setTimeout = function(e, t) {
							var i, n = this;
							return e = ei(this, e),
							this.clearTimersOnDispose_(),
							i = r.a.setTimeout((function() {
									n.setTimeoutIds_.has(i) && n.setTimeoutIds_.delete(i),
									e()
							}
							), t),
							this.setTimeoutIds_.add(i),
							i
					}
					,
					t.clearTimeout = function(e) {
							return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.delete(e),
							r.a.clearTimeout(e)),
							e
					}
					,
					t.setInterval = function(e, t) {
							e = ei(this, e),
							this.clearTimersOnDispose_();
							var i = r.a.setInterval(e, t);
							return this.setIntervalIds_.add(i),
							i
					}
					,
					t.clearInterval = function(e) {
							return this.setIntervalIds_.has(e) && (this.setIntervalIds_.delete(e),
							r.a.clearInterval(e)),
							e
					}
					,
					t.requestAnimationFrame = function(e) {
							var t, i = this;
							return this.supportsRaf_ ? (this.clearTimersOnDispose_(),
							e = ei(this, e),
							t = r.a.requestAnimationFrame((function() {
									i.rafIds_.has(t) && i.rafIds_.delete(t),
									e()
							}
							)),
							this.rafIds_.add(t),
							t) : this.setTimeout(e, 1e3 / 60)
					}
					,
					t.cancelAnimationFrame = function(e) {
							return this.supportsRaf_ ? (this.rafIds_.has(e) && (this.rafIds_.delete(e),
							r.a.cancelAnimationFrame(e)),
							e) : this.clearTimeout(e)
					}
					,
					t.clearTimersOnDispose_ = function() {
							var e = this;
							this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0,
							this.one("dispose", (function() {
									[["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach((function(t) {
											var i = t[0]
												, n = t[1];
											e[i].forEach(e[n], e)
									}
									)),
									e.clearingTimersOnDispose_ = !1
							}
							)))
					}
					,
					e.registerComponent = function(t, i) {
							if ("string" != typeof t || !t)
									throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.');
							var n, r = e.getComponent("Tech"), a = r && r.isTech(i), s = e === i || e.prototype.isPrototypeOf(i.prototype);
							if (a || !s)
									throw n = a ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass",
									new Error('Illegal component, "' + t + '"; ' + n + ".");
							t = mi(t),
							e.components_ || (e.components_ = {});
							var o = e.getComponent("Player");
							if ("Player" === t && o && o.players) {
									var u = o.players
										, l = Object.keys(u);
									if (u && l.length > 0 && l.map((function(e) {
											return u[e]
									}
									)).every(Boolean))
											throw new Error("Can not register Player component after player has been created.")
							}
							return e.components_[t] = i,
							e.components_[fi(t)] = i,
							i
					}
					,
					e.getComponent = function(t) {
							if (t && e.components_)
									return e.components_[t]
					}
					,
					e
			}();
			vi.prototype.supportsRaf_ = "function" == typeof r.a.requestAnimationFrame && "function" == typeof r.a.cancelAnimationFrame,
			vi.registerComponent("Component", vi);
			var yi, _i = r.a.navigator && r.a.navigator.userAgent || "", bi = /AppleWebKit\/([\d.]+)/i.exec(_i), Ti = bi ? parseFloat(bi.pop()) : null, Si = /iPod/i.test(_i), wi = (yi = _i.match(/OS (\d+)_/i)) && yi[1] ? yi[1] : null, ki = /Android/i.test(_i), Ei = function() {
					var e = _i.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
					if (!e)
							return null;
					var t = e[1] && parseFloat(e[1])
						, i = e[2] && parseFloat(e[2]);
					return t && i ? parseFloat(e[1] + "." + e[2]) : t || null
			}(), Ci = ki && Ei < 5 && Ti < 537, Ai = /Firefox/i.test(_i), xi = /Edge/i.test(_i), Oi = !xi && (/Chrome/i.test(_i) || /CriOS/i.test(_i)), Pi = function() {
					var e = _i.match(/(Chrome|CriOS)\/(\d+)/);
					return e && e[2] ? parseFloat(e[2]) : null
			}(), Ii = function() {
					var e = /MSIE\s(\d+)\.\d/.exec(_i)
						, t = e && parseFloat(e[1]);
					return !t && /Trident\/7.0/i.test(_i) && /rv:11.0/.test(_i) && (t = 11),
					t
			}(), Li = /Safari/i.test(_i) && !Oi && !ki && !xi, Di = /Windows/i.test(_i), Ri = tt() && ("ontouchstart"in r.a || r.a.navigator.maxTouchPoints || r.a.DocumentTouch && r.a.document instanceof r.a.DocumentTouch), Ni = /iPad/i.test(_i) || Li && Ri && !/iPhone/i.test(_i), Ui = /iPhone/i.test(_i) && !Ni, Mi = Ui || Ni || Si, ji = (Li || Mi) && !Oi, Bi = Object.freeze({
					IS_IPOD: Si,
					IOS_VERSION: wi,
					IS_ANDROID: ki,
					ANDROID_VERSION: Ei,
					IS_NATIVE_ANDROID: Ci,
					IS_FIREFOX: Ai,
					IS_EDGE: xi,
					IS_CHROME: Oi,
					CHROME_VERSION: Pi,
					IE_VERSION: Ii,
					IS_SAFARI: Li,
					IS_WINDOWS: Di,
					TOUCH_ENABLED: Ri,
					IS_IPAD: Ni,
					IS_IPHONE: Ui,
					IS_IOS: Mi,
					IS_ANY_SAFARI: ji
			});
			function Fi(e, t, i, n) {
					return function(e, t, i) {
							if ("number" != typeof t || t < 0 || t > i)
									throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").")
					}(e, n, i.length - 1),
					i[n][t]
			}
			function qi(e) {
					return void 0 === e || 0 === e.length ? {
							length: 0,
							start: function() {
									throw new Error("This TimeRanges object is empty")
							},
							end: function() {
									throw new Error("This TimeRanges object is empty")
							}
					} : {
							length: e.length,
							start: Fi.bind(null, "start", 0, e),
							end: Fi.bind(null, "end", 1, e)
					}
			}
			function Hi(e, t) {
					return Array.isArray(e) ? qi(e) : void 0 === e || void 0 === t ? qi() : qi([[e, t]])
			}
			function Vi(e, t) {
					var i, n, r = 0;
					if (!t)
							return 0;
					e && e.length || (e = Hi(0, 0));
					for (var a = 0; a < e.length; a++)
							i = e.start(a),
							(n = e.end(a)) > t && (n = t),
							r += n - i;
					return r / t
			}
			for (var Wi, zi = {
					prefixed: !0
			}, Gi = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]], Yi = Gi[0], Xi = 0; Xi < Gi.length; Xi++)
					if (Gi[Xi][1]in s.a) {
							Wi = Gi[Xi];
							break
					}
			if (Wi) {
					for (var Ki = 0; Ki < Wi.length; Ki++)
							zi[Yi[Ki]] = Wi[Ki];
					zi.prefixed = Wi[0] !== Yi[0]
			}
			function $i(e) {
					if (e instanceof $i)
							return e;
					"number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : $e(e) && ("number" == typeof e.code && (this.code = e.code),
					Ke(this, e)),
					this.message || (this.message = $i.defaultMessages[this.code] || "")
			}
			$i.prototype.code = 0,
			$i.prototype.message = "",
			$i.prototype.status = null,
			$i.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"],
			$i.defaultMessages = {
					1: "You aborted the media playback",
					2: "A network error caused the media download to fail part-way.",
					3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
					4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
					5: "The media is encrypted and we do not have the keys to decrypt it."
			};
			for (var Qi = 0; Qi < $i.errorTypes.length; Qi++)
					$i[$i.errorTypes[Qi]] = Qi,
					$i.prototype[$i.errorTypes[Qi]] = Qi;
			function Ji(e) {
					return null != e && "function" == typeof e.then
			}
			function Zi(e) {
					Ji(e) && e.then(null, (function(e) {}
					))
			}
			var en = function(e) {
					return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((function(t, i, n) {
							return e[i] && (t[i] = e[i]),
							t
					}
					), {
							cues: e.cues && Array.prototype.map.call(e.cues, (function(e) {
									return {
											startTime: e.startTime,
											endTime: e.endTime,
											text: e.text,
											id: e.id
									}
							}
							))
					})
			}
				, tn = function(e) {
					var t = e.$$("track")
						, i = Array.prototype.map.call(t, (function(e) {
							return e.track
					}
					));
					return Array.prototype.map.call(t, (function(e) {
							var t = en(e.track);
							return e.src && (t.src = e.src),
							t
					}
					)).concat(Array.prototype.filter.call(e.textTracks(), (function(e) {
							return -1 === i.indexOf(e)
					}
					)).map(en))
			}
				, nn = function(e, t) {
					return e.forEach((function(e) {
							var i = t.addRemoteTextTrack(e).track;
							!e.src && e.cues && e.cues.forEach((function(e) {
									return i.addCue(e)
							}
							))
					}
					)),
					t.textTracks()
			}
				, rn = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).opened_ = n.hasBeenOpened_ = n.hasBeenFilled_ = !1,
							n.closeable(!n.options_.uncloseable),
							n.content(n.options_.content),
							n.contentEl_ = at("div", {
									className: "vjs-modal-dialog-content"
							}, {
									role: "document"
							}),
							n.descEl_ = at("p", {
									className: "vjs-modal-dialog-description vjs-control-text",
									id: n.el().getAttribute("aria-describedby")
							}),
							st(n.descEl_, n.description()),
							n.el_.appendChild(n.descEl_),
							n.el_.appendChild(n.contentEl_),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: this.buildCSSClass(),
									tabIndex: -1
							}, {
									"aria-describedby": this.id() + "_description",
									"aria-hidden": "true",
									"aria-label": this.label(),
									role: "dialog"
							})
					}
					,
					i.dispose = function() {
							this.contentEl_ = null,
							this.descEl_ = null,
							this.previouslyActiveEl_ = null,
							e.prototype.dispose.call(this)
					}
					,
					i.buildCSSClass = function() {
							return "vjs-modal-dialog vjs-hidden " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.label = function() {
							return this.localize(this.options_.label || "Modal Window")
					}
					,
					i.description = function() {
							var e = this.options_.description || this.localize("This is a modal window.");
							return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),
							e
					}
					,
					i.open = function() {
							if (!this.opened_) {
									var e = this.player();
									this.trigger("beforemodalopen"),
									this.opened_ = !0,
									(this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(),
									this.wasPlaying_ = !e.paused(),
									this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
									this.on("keydown", this.handleKeyDown),
									this.hadControls_ = e.controls(),
									e.controls(!1),
									this.show(),
									this.conditionalFocus_(),
									this.el().setAttribute("aria-hidden", "false"),
									this.trigger("modalopen"),
									this.hasBeenOpened_ = !0
							}
					}
					,
					i.opened = function(e) {
							return "boolean" == typeof e && this[e ? "open" : "close"](),
							this.opened_
					}
					,
					i.close = function() {
							if (this.opened_) {
									var e = this.player();
									this.trigger("beforemodalclose"),
									this.opened_ = !1,
									this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
									this.off("keydown", this.handleKeyDown),
									this.hadControls_ && e.controls(!0),
									this.hide(),
									this.el().setAttribute("aria-hidden", "true"),
									this.trigger("modalclose"),
									this.conditionalBlur_(),
									this.options_.temporary && this.dispose()
							}
					}
					,
					i.closeable = function(e) {
							if ("boolean" == typeof e) {
									var t = this.closeable_ = !!e
										, i = this.getChild("closeButton");
									if (t && !i) {
											var n = this.contentEl_;
											this.contentEl_ = this.el_,
											i = this.addChild("closeButton", {
													controlText: "Close Modal Dialog"
											}),
											this.contentEl_ = n,
											this.on(i, "close", this.close)
									}
									!t && i && (this.off(i, "close", this.close),
									this.removeChild(i),
									i.dispose())
							}
							return this.closeable_
					}
					,
					i.fill = function() {
							this.fillWith(this.content())
					}
					,
					i.fillWith = function(e) {
							var t = this.contentEl()
								, i = t.parentNode
								, n = t.nextSibling;
							this.trigger("beforemodalfill"),
							this.hasBeenFilled_ = !0,
							i.removeChild(t),
							this.empty(),
							Ct(t, e),
							this.trigger("modalfill"),
							n ? i.insertBefore(t, n) : i.appendChild(t);
							var r = this.getChild("closeButton");
							r && i.appendChild(r.el_)
					}
					,
					i.empty = function() {
							this.trigger("beforemodalempty"),
							wt(this.contentEl()),
							this.trigger("modalempty")
					}
					,
					i.content = function(e) {
							return void 0 !== e && (this.content_ = e),
							this.content_
					}
					,
					i.conditionalFocus_ = function() {
							var e = s.a.activeElement
								, t = this.player_.el_;
							this.previouslyActiveEl_ = null,
							(t.contains(e) || t === e) && (this.previouslyActiveEl_ = e,
							this.focus())
					}
					,
					i.conditionalBlur_ = function() {
							this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(),
							this.previouslyActiveEl_ = null)
					}
					,
					i.handleKeyDown = function(e) {
							if (e.stopPropagation(),
							g.a.isEventKey(e, "Escape") && this.closeable())
									return e.preventDefault(),
									void this.close();
							if (g.a.isEventKey(e, "Tab")) {
									for (var t, i = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = 0; r < i.length; r++)
											if (n === i[r]) {
													t = r;
													break
											}
									s.a.activeElement === this.el_ && (t = 0),
									e.shiftKey && 0 === t ? (i[i.length - 1].focus(),
									e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(),
									e.preventDefault())
							}
					}
					,
					i.focusableEls_ = function() {
							var e = this.el_.querySelectorAll("*");
							return Array.prototype.filter.call(e, (function(e) {
									return (e instanceof r.a.HTMLAnchorElement || e instanceof r.a.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof r.a.HTMLInputElement || e instanceof r.a.HTMLSelectElement || e instanceof r.a.HTMLTextAreaElement || e instanceof r.a.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof r.a.HTMLIFrameElement || e instanceof r.a.HTMLObjectElement || e instanceof r.a.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable")
							}
							))
					}
					,
					t
			}(vi);
			rn.prototype.options_ = {
					pauseOnOpen: !0,
					temporary: !0
			},
			vi.registerComponent("ModalDialog", rn);
			var an = function(e) {
					function t(t) {
							var i;
							void 0 === t && (t = []),
							(i = e.call(this) || this).tracks_ = [],
							Object.defineProperty(c()(i), "length", {
									get: function() {
											return this.tracks_.length
									}
							});
							for (var n = 0; n < t.length; n++)
									i.addTrack(t[n]);
							return i
					}
					d()(t, e);
					var i = t.prototype;
					return i.addTrack = function(e) {
							var t = this.tracks_.length;
							"" + t in this || Object.defineProperty(this, t, {
									get: function() {
											return this.tracks_[t]
									}
							}),
							-1 === this.tracks_.indexOf(e) && (this.tracks_.push(e),
							this.trigger({
									track: e,
									type: "addtrack",
									target: this
							}))
					}
					,
					i.removeTrack = function(e) {
							for (var t, i = 0, n = this.length; i < n; i++)
									if (this[i] === e) {
											(t = this[i]).off && t.off(),
											this.tracks_.splice(i, 1);
											break
									}
							t && this.trigger({
									track: t,
									type: "removetrack",
									target: this
							})
					}
					,
					i.getTrackById = function(e) {
							for (var t = null, i = 0, n = this.length; i < n; i++) {
									var r = this[i];
									if (r.id === e) {
											t = r;
											break
									}
							}
							return t
					}
					,
					t
			}(ii);
			for (var sn in an.prototype.allowedEvents_ = {
					change: "change",
					addtrack: "addtrack",
					removetrack: "removetrack"
			},
			an.prototype.allowedEvents_)
					an.prototype["on" + sn] = null;
			var on = function(e, t) {
					for (var i = 0; i < e.length; i++)
							Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
			}
				, un = function(e) {
					function t(t) {
							var i;
							void 0 === t && (t = []);
							for (var n = t.length - 1; n >= 0; n--)
									if (t[n].enabled) {
											on(t, t[n]);
											break
									}
							return (i = e.call(this, t) || this).changing_ = !1,
							i
					}
					d()(t, e);
					var i = t.prototype;
					return i.addTrack = function(t) {
							var i = this;
							t.enabled && on(this, t),
							e.prototype.addTrack.call(this, t),
							t.addEventListener && (t.enabledChange_ = function() {
									i.changing_ || (i.changing_ = !0,
									on(i, t),
									i.changing_ = !1,
									i.trigger("change"))
							}
							,
							t.addEventListener("enabledchange", t.enabledChange_))
					}
					,
					i.removeTrack = function(t) {
							e.prototype.removeTrack.call(this, t),
							t.removeEventListener && t.enabledChange_ && (t.removeEventListener("enabledchange", t.enabledChange_),
							t.enabledChange_ = null)
					}
					,
					t
			}(an)
				, ln = function(e, t) {
					for (var i = 0; i < e.length; i++)
							Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
			}
				, cn = function(e) {
					function t(t) {
							var i;
							void 0 === t && (t = []);
							for (var n = t.length - 1; n >= 0; n--)
									if (t[n].selected) {
											ln(t, t[n]);
											break
									}
							return (i = e.call(this, t) || this).changing_ = !1,
							Object.defineProperty(c()(i), "selectedIndex", {
									get: function() {
											for (var e = 0; e < this.length; e++)
													if (this[e].selected)
															return e;
											return -1
									},
									set: function() {}
							}),
							i
					}
					d()(t, e);
					var i = t.prototype;
					return i.addTrack = function(t) {
							var i = this;
							t.selected && ln(this, t),
							e.prototype.addTrack.call(this, t),
							t.addEventListener && (t.selectedChange_ = function() {
									i.changing_ || (i.changing_ = !0,
									ln(i, t),
									i.changing_ = !1,
									i.trigger("change"))
							}
							,
							t.addEventListener("selectedchange", t.selectedChange_))
					}
					,
					i.removeTrack = function(t) {
							e.prototype.removeTrack.call(this, t),
							t.removeEventListener && t.selectedChange_ && (t.removeEventListener("selectedchange", t.selectedChange_),
							t.selectedChange_ = null)
					}
					,
					t
			}(an)
				, hn = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.addTrack = function(t) {
							var i = this;
							e.prototype.addTrack.call(this, t),
							this.queueChange_ || (this.queueChange_ = function() {
									return i.queueTrigger("change")
							}
							),
							this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
									return i.trigger("selectedlanguagechange")
							}
							),
							t.addEventListener("modechange", this.queueChange_);
							-1 === ["metadata", "chapters"].indexOf(t.kind) && t.addEventListener("modechange", this.triggerSelectedlanguagechange_)
					}
					,
					i.removeTrack = function(t) {
							e.prototype.removeTrack.call(this, t),
							t.removeEventListener && (this.queueChange_ && t.removeEventListener("modechange", this.queueChange_),
							this.selectedlanguagechange_ && t.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
					}
					,
					t
			}(an)
				, dn = function() {
					function e(e) {
							void 0 === e && (e = []),
							this.trackElements_ = [],
							Object.defineProperty(this, "length", {
									get: function() {
											return this.trackElements_.length
									}
							});
							for (var t = 0, i = e.length; t < i; t++)
									this.addTrackElement_(e[t])
					}
					var t = e.prototype;
					return t.addTrackElement_ = function(e) {
							var t = this.trackElements_.length;
							"" + t in this || Object.defineProperty(this, t, {
									get: function() {
											return this.trackElements_[t]
									}
							}),
							-1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
					}
					,
					t.getTrackElementByTrack_ = function(e) {
							for (var t, i = 0, n = this.trackElements_.length; i < n; i++)
									if (e === this.trackElements_[i].track) {
											t = this.trackElements_[i];
											break
									}
							return t
					}
					,
					t.removeTrackElement_ = function(e) {
							for (var t = 0, i = this.trackElements_.length; t < i; t++)
									if (e === this.trackElements_[t]) {
											this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(),
											"function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(),
											this.trackElements_.splice(t, 1);
											break
									}
					}
					,
					e
			}()
				, pn = function() {
					function e(t) {
							e.prototype.setCues_.call(this, t),
							Object.defineProperty(this, "length", {
									get: function() {
											return this.length_
									}
							})
					}
					var t = e.prototype;
					return t.setCues_ = function(e) {
							var t = this.length || 0
								, i = 0
								, n = e.length;
							this.cues_ = e,
							this.length_ = e.length;
							var r = function(e) {
									"" + e in this || Object.defineProperty(this, "" + e, {
											get: function() {
													return this.cues_[e]
											}
									})
							};
							if (t < n)
									for (i = t; i < n; i++)
											r.call(this, i)
					}
					,
					t.getCueById = function(e) {
							for (var t = null, i = 0, n = this.length; i < n; i++) {
									var r = this[i];
									if (r.id === e) {
											t = r;
											break
									}
							}
							return t
					}
					,
					e
			}()
				, fn = {
					alternative: "alternative",
					captions: "captions",
					main: "main",
					sign: "sign",
					subtitles: "subtitles",
					commentary: "commentary"
			}
				, mn = {
					alternative: "alternative",
					descriptions: "descriptions",
					main: "main",
					"main-desc": "main-desc",
					translation: "translation",
					commentary: "commentary"
			}
				, gn = {
					subtitles: "subtitles",
					captions: "captions",
					descriptions: "descriptions",
					chapters: "chapters",
					metadata: "metadata"
			}
				, vn = {
					disabled: "disabled",
					hidden: "hidden",
					showing: "showing"
			}
				, yn = function(e) {
					function t(t) {
							var i;
							void 0 === t && (t = {}),
							i = e.call(this) || this;
							var n = {
									id: t.id || "vjs_track_" + Ft(),
									kind: t.kind || "",
									label: t.label || "",
									language: t.language || ""
							}
								, r = function(e) {
									Object.defineProperty(c()(i), e, {
											get: function() {
													return n[e]
											},
											set: function() {}
									})
							};
							for (var a in n)
									r(a);
							return i
					}
					return d()(t, e),
					t
			}(ii)
				, _n = function(e) {
					var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"]
						, i = s.a.createElement("a");
					i.href = e;
					var n, a = "" === i.host && "file:" !== i.protocol;
					a && ((n = s.a.createElement("div")).innerHTML = '<a href="' + e + '"></a>',
					i = n.firstChild,
					n.setAttribute("style", "display:none; position:absolute;"),
					s.a.body.appendChild(n));
					for (var o = {}, u = 0; u < t.length; u++)
							o[t[u]] = i[t[u]];
					return "http:" === o.protocol && (o.host = o.host.replace(/:80$/, "")),
					"https:" === o.protocol && (o.host = o.host.replace(/:443$/, "")),
					o.protocol || (o.protocol = r.a.location.protocol),
					a && s.a.body.removeChild(n),
					o
			}
				, bn = function(e) {
					if (!e.match(/^https?:\/\//)) {
							var t = s.a.createElement("div");
							t.innerHTML = '<a href="' + e + '">x</a>',
							e = t.firstChild.href
					}
					return e
			}
				, Tn = function(e) {
					if ("string" == typeof e) {
							var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e);
							if (t)
									return t.pop().toLowerCase()
					}
					return ""
			}
				, Sn = function(e, t) {
					void 0 === t && (t = r.a.location);
					var i = _n(e);
					return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
			}
				, wn = Object.freeze({
					parseUrl: _n,
					getAbsoluteURL: bn,
					getFileExtension: Tn,
					isCrossOrigin: Sn
			})
				, kn = function(e, t) {
					var i = new r.a.WebVTT.Parser(r.a,r.a.vttjs,r.a.WebVTT.StringDecoder())
						, n = [];
					i.oncue = function(e) {
							t.addCue(e)
					}
					,
					i.onparsingerror = function(e) {
							n.push(e)
					}
					,
					i.onflush = function() {
							t.trigger({
									type: "loadeddata",
									target: t
							})
					}
					,
					i.parse(e),
					n.length > 0 && (r.a.console && r.a.console.groupCollapsed && r.a.console.groupCollapsed("Text Track parsing errors for " + t.src),
					n.forEach((function(e) {
							return We.error(e)
					}
					)),
					r.a.console && r.a.console.groupEnd && r.a.console.groupEnd()),
					i.flush()
			}
				, En = function(e, t) {
					var i = {
							uri: e
					}
						, n = Sn(e);
					n && (i.cors = n),
					y()(i, ei(this, (function(e, i, n) {
							if (e)
									return We.error(e, i);
							t.loaded_ = !0,
							"function" != typeof r.a.WebVTT ? t.tech_ && t.tech_.any(["vttjsloaded", "vttjserror"], (function(e) {
									if ("vttjserror" !== e.type)
											return kn(n, t);
									We.error("vttjs failed to load, stopping trying to process " + t.src)
							}
							)) : kn(n, t)
					}
					)))
			}
				, Cn = function(e) {
					function t(t) {
							var i;
							if (void 0 === t && (t = {}),
							!t.tech)
									throw new Error("A tech was not provided.");
							var n = gi(t, {
									kind: gn[t.kind] || "subtitles",
									language: t.language || t.srclang || ""
							})
								, r = vn[n.mode] || "disabled"
								, a = n.default;
							"metadata" !== n.kind && "chapters" !== n.kind || (r = "hidden"),
							(i = e.call(this, n) || this).tech_ = n.tech,
							i.cues_ = [],
							i.activeCues_ = [],
							i.preload_ = !1 !== i.tech_.preloadTextTracks;
							var s = new pn(i.cues_)
								, o = new pn(i.activeCues_)
								, u = !1
								, l = ei(c()(i), (function() {
									this.activeCues = this.activeCues,
									u && (this.trigger("cuechange"),
									u = !1)
							}
							));
							return "disabled" !== r && i.tech_.ready((function() {
									i.tech_.on("timeupdate", l)
							}
							), !0),
							Object.defineProperties(c()(i), {
									default: {
											get: function() {
													return a
											},
											set: function() {}
									},
									mode: {
											get: function() {
													return r
											},
											set: function(e) {
													var t = this;
													vn[e] && (r = e,
													this.preload_ || "disabled" === r || 0 !== this.cues.length || En(this.src, this),
													"disabled" !== r ? this.tech_.ready((function() {
															t.tech_.on("timeupdate", l)
													}
													), !0) : this.tech_.off("timeupdate", l),
													this.trigger("modechange"))
											}
									},
									cues: {
											get: function() {
													return this.loaded_ ? s : null
											},
											set: function() {}
									},
									activeCues: {
											get: function() {
													if (!this.loaded_)
															return null;
													if (0 === this.cues.length)
															return o;
													for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) {
															var r = this.cues[i];
															(r.startTime <= e && r.endTime >= e || r.startTime === r.endTime && r.startTime <= e && r.startTime + .5 >= e) && t.push(r)
													}
													if (u = !1,
													t.length !== this.activeCues_.length)
															u = !0;
													else
															for (var a = 0; a < t.length; a++)
																	-1 === this.activeCues_.indexOf(t[a]) && (u = !0);
													return this.activeCues_ = t,
													o.setCues_(this.activeCues_),
													o
											},
											set: function() {}
									}
							}),
							n.src ? (i.src = n.src,
							i.preload_ || (i.loaded_ = !0),
							(i.preload_ || a || "subtitles" !== n.kind && "captions" !== n.kind) && En(i.src, c()(i))) : i.loaded_ = !0,
							i
					}
					d()(t, e);
					var i = t.prototype;
					return i.addCue = function(e) {
							var t = e;
							if (r.a.vttjs && !(e instanceof r.a.vttjs.VTTCue)) {
									for (var i in t = new r.a.vttjs.VTTCue(e.startTime,e.endTime,e.text),
									e)
											i in t || (t[i] = e[i]);
									t.id = e.id,
									t.originalCue_ = e
							}
							for (var n = this.tech_.textTracks(), a = 0; a < n.length; a++)
									n[a] !== this && n[a].removeCue(t);
							this.cues_.push(t),
							this.cues.setCues_(this.cues_)
					}
					,
					i.removeCue = function(e) {
							for (var t = this.cues_.length; t--; ) {
									var i = this.cues_[t];
									if (i === e || i.originalCue_ && i.originalCue_ === e) {
											this.cues_.splice(t, 1),
											this.cues.setCues_(this.cues_);
											break
									}
							}
					}
					,
					t
			}(yn);
			Cn.prototype.allowedEvents_ = {
					cuechange: "cuechange"
			};
			var An = function(e) {
					function t(t) {
							var i;
							void 0 === t && (t = {});
							var n = gi(t, {
									kind: mn[t.kind] || ""
							});
							i = e.call(this, n) || this;
							var r = !1;
							return Object.defineProperty(c()(i), "enabled", {
									get: function() {
											return r
									},
									set: function(e) {
											"boolean" == typeof e && e !== r && (r = e,
											this.trigger("enabledchange"))
									}
							}),
							n.enabled && (i.enabled = n.enabled),
							i.loaded_ = !0,
							i
					}
					return d()(t, e),
					t
			}(yn)
				, xn = function(e) {
					function t(t) {
							var i;
							void 0 === t && (t = {});
							var n = gi(t, {
									kind: fn[t.kind] || ""
							});
							i = e.call(this, n) || this;
							var r = !1;
							return Object.defineProperty(c()(i), "selected", {
									get: function() {
											return r
									},
									set: function(e) {
											"boolean" == typeof e && e !== r && (r = e,
											this.trigger("selectedchange"))
									}
							}),
							n.selected && (i.selected = n.selected),
							i
					}
					return d()(t, e),
					t
			}(yn)
				, On = function(e) {
					function t(t) {
							var i, n;
							void 0 === t && (t = {}),
							i = e.call(this) || this;
							var r = new Cn(t);
							return i.kind = r.kind,
							i.src = r.src,
							i.srclang = r.language,
							i.label = r.label,
							i.default = r.default,
							Object.defineProperties(c()(i), {
									readyState: {
											get: function() {
													return n
											}
									},
									track: {
											get: function() {
													return r
											}
									}
							}),
							n = 0,
							r.addEventListener("loadeddata", (function() {
									n = 2,
									i.trigger({
											type: "load",
											target: c()(i)
									})
							}
							)),
							i
					}
					return d()(t, e),
					t
			}(ii);
			On.prototype.allowedEvents_ = {
					load: "load"
			},
			On.NONE = 0,
			On.LOADING = 1,
			On.LOADED = 2,
			On.ERROR = 3;
			var Pn = {
					audio: {
							ListClass: un,
							TrackClass: An,
							capitalName: "Audio"
					},
					video: {
							ListClass: cn,
							TrackClass: xn,
							capitalName: "Video"
					},
					text: {
							ListClass: hn,
							TrackClass: Cn,
							capitalName: "Text"
					}
			};
			Object.keys(Pn).forEach((function(e) {
					Pn[e].getterName = e + "Tracks",
					Pn[e].privateName = e + "Tracks_"
			}
			));
			var In = {
					remoteText: {
							ListClass: hn,
							TrackClass: Cn,
							capitalName: "RemoteText",
							getterName: "remoteTextTracks",
							privateName: "remoteTextTracks_"
					},
					remoteTextEl: {
							ListClass: dn,
							TrackClass: On,
							capitalName: "RemoteTextTrackEls",
							getterName: "remoteTextTrackEls",
							privateName: "remoteTextTrackEls_"
					}
			}
				, Ln = u()({}, Pn, In);
			In.names = Object.keys(In),
			Pn.names = Object.keys(Pn),
			Ln.names = [].concat(In.names).concat(Pn.names);
			var Dn = function(e) {
					function t(t, i) {
							var n;
							return void 0 === t && (t = {}),
							void 0 === i && (i = function() {}
							),
							t.reportTouchActivity = !1,
							(n = e.call(this, null, t, i) || this).hasStarted_ = !1,
							n.on("playing", (function() {
									this.hasStarted_ = !0
							}
							)),
							n.on("loadstart", (function() {
									this.hasStarted_ = !1
							}
							)),
							Ln.names.forEach((function(e) {
									var i = Ln[e];
									t && t[i.getterName] && (n[i.privateName] = t[i.getterName])
							}
							)),
							n.featuresProgressEvents || n.manualProgressOn(),
							n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(),
							["Text", "Audio", "Video"].forEach((function(e) {
									!1 === t["native" + e + "Tracks"] && (n["featuresNative" + e + "Tracks"] = !1)
							}
							)),
							!1 === t.nativeCaptions || !1 === t.nativeTextTracks ? n.featuresNativeTextTracks = !1 : !0 !== t.nativeCaptions && !0 !== t.nativeTextTracks || (n.featuresNativeTextTracks = !0),
							n.featuresNativeTextTracks || n.emulateTextTracks(),
							n.preloadTextTracks = !1 !== t.preloadTextTracks,
							n.autoRemoteTextTracks_ = new Ln.text.ListClass,
							n.initTrackListeners(),
							t.nativeControlsForTouch || n.emitTapEvents(),
							n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.triggerSourceset = function(e) {
							var t = this;
							this.isReady_ || this.one("ready", (function() {
									return t.setTimeout((function() {
											return t.triggerSourceset(e)
									}
									), 1)
							}
							)),
							this.trigger({
									src: e,
									type: "sourceset"
							})
					}
					,
					i.manualProgressOn = function() {
							this.on("durationchange", this.onDurationChange),
							this.manualProgress = !0,
							this.one("ready", this.trackProgress)
					}
					,
					i.manualProgressOff = function() {
							this.manualProgress = !1,
							this.stopTrackingProgress(),
							this.off("durationchange", this.onDurationChange)
					}
					,
					i.trackProgress = function(e) {
							this.stopTrackingProgress(),
							this.progressInterval = this.setInterval(ei(this, (function() {
									var e = this.bufferedPercent();
									this.bufferedPercent_ !== e && this.trigger("progress"),
									this.bufferedPercent_ = e,
									1 === e && this.stopTrackingProgress()
							}
							)), 500)
					}
					,
					i.onDurationChange = function(e) {
							this.duration_ = this.duration()
					}
					,
					i.buffered = function() {
							return Hi(0, 0)
					}
					,
					i.bufferedPercent = function() {
							return Vi(this.buffered(), this.duration_)
					}
					,
					i.stopTrackingProgress = function() {
							this.clearInterval(this.progressInterval)
					}
					,
					i.manualTimeUpdatesOn = function() {
							this.manualTimeUpdates = !0,
							this.on("play", this.trackCurrentTime),
							this.on("pause", this.stopTrackingCurrentTime)
					}
					,
					i.manualTimeUpdatesOff = function() {
							this.manualTimeUpdates = !1,
							this.stopTrackingCurrentTime(),
							this.off("play", this.trackCurrentTime),
							this.off("pause", this.stopTrackingCurrentTime)
					}
					,
					i.trackCurrentTime = function() {
							this.currentTimeInterval && this.stopTrackingCurrentTime(),
							this.currentTimeInterval = this.setInterval((function() {
									this.trigger({
											type: "timeupdate",
											target: this,
											manuallyTriggered: !0
									})
							}
							), 250)
					}
					,
					i.stopTrackingCurrentTime = function() {
							this.clearInterval(this.currentTimeInterval),
							this.trigger({
									type: "timeupdate",
									target: this,
									manuallyTriggered: !0
							})
					}
					,
					i.dispose = function() {
							this.clearTracks(Pn.names),
							this.manualProgress && this.manualProgressOff(),
							this.manualTimeUpdates && this.manualTimeUpdatesOff(),
							e.prototype.dispose.call(this)
					}
					,
					i.clearTracks = function(e) {
							var t = this;
							(e = [].concat(e)).forEach((function(e) {
									for (var i = t[e + "Tracks"]() || [], n = i.length; n--; ) {
											var r = i[n];
											"text" === e && t.removeRemoteTextTrack(r),
											i.removeTrack(r)
									}
							}
							))
					}
					,
					i.cleanupAutoTextTracks = function() {
							for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--; ) {
									var i = e[t];
									this.removeRemoteTextTrack(i)
							}
					}
					,
					i.reset = function() {}
					,
					i.error = function(e) {
							return void 0 !== e && (this.error_ = new $i(e),
							this.trigger("error")),
							this.error_
					}
					,
					i.played = function() {
							return this.hasStarted_ ? Hi(0, 0) : Hi()
					}
					,
					i.setCurrentTime = function() {
							this.manualTimeUpdates && this.trigger({
									type: "timeupdate",
									target: this,
									manuallyTriggered: !0
							})
					}
					,
					i.initTrackListeners = function() {
							var e = this;
							Pn.names.forEach((function(t) {
									var i = Pn[t]
										, n = function() {
											e.trigger(t + "trackchange")
									}
										, r = e[i.getterName]();
									r.addEventListener("removetrack", n),
									r.addEventListener("addtrack", n),
									e.on("dispose", (function() {
											r.removeEventListener("removetrack", n),
											r.removeEventListener("addtrack", n)
									}
									))
							}
							))
					}
					,
					i.addWebVttScript_ = function() {
							var e = this;
							if (!r.a.WebVTT)
									if (s.a.body.contains(this.el())) {
											if (!this.options_["vtt.js"] && Qe(b.a) && Object.keys(b.a).length > 0)
													return void this.trigger("vttjsloaded");
											var t = s.a.createElement("script");
											t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",
											t.onload = function() {
													e.trigger("vttjsloaded")
											}
											,
											t.onerror = function() {
													e.trigger("vttjserror")
											}
											,
											this.on("dispose", (function() {
													t.onload = null,
													t.onerror = null
											}
											)),
											r.a.WebVTT = !0,
											this.el().parentNode.appendChild(t)
									} else
											this.ready(this.addWebVttScript_)
					}
					,
					i.emulateTextTracks = function() {
							var e = this
								, t = this.textTracks()
								, i = this.remoteTextTracks()
								, n = function(e) {
									return t.addTrack(e.track)
							}
								, r = function(e) {
									return t.removeTrack(e.track)
							};
							i.on("addtrack", n),
							i.on("removetrack", r),
							this.addWebVttScript_();
							var a = function() {
									return e.trigger("texttrackchange")
							}
								, s = function() {
									a();
									for (var e = 0; e < t.length; e++) {
											var i = t[e];
											i.removeEventListener("cuechange", a),
											"showing" === i.mode && i.addEventListener("cuechange", a)
									}
							};
							s(),
							t.addEventListener("change", s),
							t.addEventListener("addtrack", s),
							t.addEventListener("removetrack", s),
							this.on("dispose", (function() {
									i.off("addtrack", n),
									i.off("removetrack", r),
									t.removeEventListener("change", s),
									t.removeEventListener("addtrack", s),
									t.removeEventListener("removetrack", s);
									for (var e = 0; e < t.length; e++) {
											t[e].removeEventListener("cuechange", a)
									}
							}
							))
					}
					,
					i.addTextTrack = function(e, t, i) {
							if (!e)
									throw new Error("TextTrack kind is required but was not provided");
							return function(e, t, i, n, r) {
									void 0 === r && (r = {});
									var a = e.textTracks();
									r.kind = t,
									i && (r.label = i),
									n && (r.language = n),
									r.tech = e;
									var s = new Ln.text.TrackClass(r);
									return a.addTrack(s),
									s
							}(this, e, t, i)
					}
					,
					i.createRemoteTextTrack = function(e) {
							var t = gi(e, {
									tech: this
							});
							return new In.remoteTextEl.TrackClass(t)
					}
					,
					i.addRemoteTextTrack = function(e, t) {
							var i = this;
							void 0 === e && (e = {});
							var n = this.createRemoteTextTrack(e);
							return !0 !== t && !1 !== t && (We.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),
							t = !0),
							this.remoteTextTrackEls().addTrackElement_(n),
							this.remoteTextTracks().addTrack(n.track),
							!0 !== t && this.ready((function() {
									return i.autoRemoteTextTracks_.addTrack(n.track)
							}
							)),
							n
					}
					,
					i.removeRemoteTextTrack = function(e) {
							var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
							this.remoteTextTrackEls().removeTrackElement_(t),
							this.remoteTextTracks().removeTrack(e),
							this.autoRemoteTextTracks_.removeTrack(e)
					}
					,
					i.getVideoPlaybackQuality = function() {
							return {}
					}
					,
					i.requestPictureInPicture = function() {
							var e = this.options_.Promise || r.a.Promise;
							if (e)
									return e.reject()
					}
					,
					i.setPoster = function() {}
					,
					i.playsinline = function() {}
					,
					i.setPlaysinline = function() {}
					,
					i.overrideNativeAudioTracks = function() {}
					,
					i.overrideNativeVideoTracks = function() {}
					,
					i.canPlayType = function() {
							return ""
					}
					,
					t.canPlayType = function() {
							return ""
					}
					,
					t.canPlaySource = function(e, i) {
							return t.canPlayType(e.type)
					}
					,
					t.isTech = function(e) {
							return e.prototype instanceof t || e instanceof t || e === t
					}
					,
					t.registerTech = function(e, i) {
							if (t.techs_ || (t.techs_ = {}),
							!t.isTech(i))
									throw new Error("Tech " + e + " must be a Tech");
							if (!t.canPlayType)
									throw new Error("Techs must have a static canPlayType method on them");
							if (!t.canPlaySource)
									throw new Error("Techs must have a static canPlaySource method on them");
							return e = mi(e),
							t.techs_[e] = i,
							t.techs_[fi(e)] = i,
							"Tech" !== e && t.defaultTechOrder_.push(e),
							i
					}
					,
					t.getTech = function(e) {
							if (e)
									return t.techs_ && t.techs_[e] ? t.techs_[e] : (e = mi(e),
									r.a && r.a.videojs && r.a.videojs[e] ? (We.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),
									r.a.videojs[e]) : void 0)
					}
					,
					t
			}(vi);
			Ln.names.forEach((function(e) {
					var t = Ln[e];
					Dn.prototype[t.getterName] = function() {
							return this[t.privateName] = this[t.privateName] || new t.ListClass,
							this[t.privateName]
					}
			}
			)),
			Dn.prototype.featuresVolumeControl = !0,
			Dn.prototype.featuresMuteControl = !0,
			Dn.prototype.featuresFullscreenResize = !1,
			Dn.prototype.featuresPlaybackRate = !1,
			Dn.prototype.featuresProgressEvents = !1,
			Dn.prototype.featuresSourceset = !1,
			Dn.prototype.featuresTimeupdateEvents = !1,
			Dn.prototype.featuresNativeTextTracks = !1,
			Dn.withSourceHandlers = function(e) {
					e.registerSourceHandler = function(t, i) {
							var n = e.sourceHandlers;
							n || (n = e.sourceHandlers = []),
							void 0 === i && (i = n.length),
							n.splice(i, 0, t)
					}
					,
					e.canPlayType = function(t) {
							for (var i, n = e.sourceHandlers || [], r = 0; r < n.length; r++)
									if (i = n[r].canPlayType(t))
											return i;
							return ""
					}
					,
					e.selectSourceHandler = function(t, i) {
							for (var n = e.sourceHandlers || [], r = 0; r < n.length; r++)
									if (n[r].canHandleSource(t, i))
											return n[r];
							return null
					}
					,
					e.canPlaySource = function(t, i) {
							var n = e.selectSourceHandler(t, i);
							return n ? n.canHandleSource(t, i) : ""
					}
					;
					["seekable", "seeking", "duration"].forEach((function(e) {
							var t = this[e];
							"function" == typeof t && (this[e] = function() {
									return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
							}
							)
					}
					), e.prototype),
					e.prototype.setSource = function(t) {
							var i = e.selectSourceHandler(t, this.options_);
							i || (e.nativeSourceHandler ? i = e.nativeSourceHandler : We.error("No source handler found for the current source.")),
							this.disposeSourceHandler(),
							this.off("dispose", this.disposeSourceHandler),
							i !== e.nativeSourceHandler && (this.currentSource_ = t),
							this.sourceHandler_ = i.handleSource(t, this, this.options_),
							this.one("dispose", this.disposeSourceHandler)
					}
					,
					e.prototype.disposeSourceHandler = function() {
							this.currentSource_ && (this.clearTracks(["audio", "video"]),
							this.currentSource_ = null),
							this.cleanupAutoTextTracks(),
							this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(),
							this.sourceHandler_ = null)
					}
			}
			,
			vi.registerComponent("Tech", Dn),
			Dn.registerTech("Tech", Dn),
			Dn.defaultTechOrder_ = [];
			var Rn = {}
				, Nn = {}
				, Un = {};
			function Mn(e, t, i) {
					e.setTimeout((function() {
							return function e(t, i, n, r, a, s) {
									void 0 === t && (t = {});
									void 0 === i && (i = []);
									void 0 === a && (a = []);
									void 0 === s && (s = !1);
									var o = i
										, u = o[0]
										, l = o.slice(1);
									if ("string" == typeof u)
											e(t, Rn[u], n, r, a, s);
									else if (u) {
											var c = function(e, t) {
													var i = Nn[e.id()]
														, n = null;
													if (null == i)
															return n = t(e),
															Nn[e.id()] = [[t, n]],
															n;
													for (var r = 0; r < i.length; r++) {
															var a = i[r]
																, s = a[0]
																, o = a[1];
															s === t && (n = o)
													}
													null === n && (n = t(e),
													i.push([t, n]));
													return n
											}(r, u);
											if (!c.setSource)
													return a.push(c),
													e(t, l, n, r, a, s);
											c.setSource(Ke({}, t), (function(i, o) {
													if (i)
															return e(t, l, n, r, a, s);
													a.push(c),
													e(o, t.type === o.type ? l : Rn[o.type], n, r, a, s)
											}
											))
									} else
											l.length ? e(t, l, n, r, a, s) : s ? n(t, a) : e(t, Rn["*"], n, r, a, !0)
							}(t, Rn[t.type], i, e)
					}
					), 1)
			}
			function jn(e, t, i, n) {
					void 0 === n && (n = null);
					var r = "call" + mi(i)
						, a = e.reduce(Hn(r), n)
						, s = a === Un
						, o = s ? null : t[i](a);
					return function(e, t, i, n) {
							for (var r = e.length - 1; r >= 0; r--) {
									var a = e[r];
									a[t] && a[t](n, i)
							}
					}(e, i, o, s),
					o
			}
			var Bn = {
					buffered: 1,
					currentTime: 1,
					duration: 1,
					muted: 1,
					played: 1,
					paused: 1,
					seekable: 1,
					volume: 1
			}
				, Fn = {
					setCurrentTime: 1,
					setMuted: 1,
					setVolume: 1
			}
				, qn = {
					play: 1,
					pause: 1
			};
			function Hn(e) {
					return function(t, i) {
							return t === Un ? Un : i[e] ? i[e](t) : t
					}
			}
			var Vn = {
					opus: "video/ogg",
					ogv: "video/ogg",
					mp4: "video/mp4",
					mov: "video/mp4",
					m4v: "video/mp4",
					mkv: "video/x-matroska",
					m4a: "audio/mp4",
					mp3: "audio/mpeg",
					aac: "audio/aac",
					oga: "audio/ogg",
					m3u8: "application/x-mpegURL",
					jpg: "image/jpeg",
					jpeg: "image/jpeg",
					gif: "image/gif",
					png: "image/png",
					svg: "image/svg+xml",
					webp: "image/webp"
			}
				, Wn = function(e) {
					void 0 === e && (e = "");
					var t = Tn(e);
					return Vn[t.toLowerCase()] || ""
			};
			function zn(e) {
					if (!e.type) {
							var t = Wn(e.src);
							t && (e.type = t)
					}
					return e
			}
			var Gn = function(e) {
					function t(t, i, n) {
							var r, a = gi({
									createEl: !1
							}, i);
							if (r = e.call(this, t, a, n) || this,
							i.playerOptions.sources && 0 !== i.playerOptions.sources.length)
									t.src(i.playerOptions.sources);
							else
									for (var s = 0, o = i.playerOptions.techOrder; s < o.length; s++) {
											var u = mi(o[s])
												, l = Dn.getTech(u);
											if (u || (l = vi.getComponent(u)),
											l && l.isSupported()) {
													t.loadTech_(u);
													break
											}
									}
							return r
					}
					return d()(t, e),
					t
			}(vi);
			vi.registerComponent("MediaLoader", Gn);
			var Yn = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).emitTapEvents(),
							n.enable(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function(t, i, n) {
							void 0 === t && (t = "div"),
							void 0 === i && (i = {}),
							void 0 === n && (n = {}),
							i = Ke({
									innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
									className: this.buildCSSClass(),
									tabIndex: 0
							}, i),
							"button" === t && We.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."),
							n = Ke({
									role: "button"
							}, n),
							this.tabIndex_ = i.tabIndex;
							var r = e.prototype.createEl.call(this, t, i, n);
							return this.createControlTextEl(r),
							r
					}
					,
					i.dispose = function() {
							this.controlTextEl_ = null,
							e.prototype.dispose.call(this)
					}
					,
					i.createControlTextEl = function(e) {
							return this.controlTextEl_ = at("span", {
									className: "vjs-control-text"
							}, {
									"aria-live": "polite"
							}),
							e && e.appendChild(this.controlTextEl_),
							this.controlText(this.controlText_, e),
							this.controlTextEl_
					}
					,
					i.controlText = function(e, t) {
							if (void 0 === t && (t = this.el()),
							void 0 === e)
									return this.controlText_ || "Need Text";
							var i = this.localize(e);
							this.controlText_ = e,
							st(this.controlTextEl_, i),
							this.nonIconControl || t.setAttribute("title", i)
					}
					,
					i.buildCSSClass = function() {
							return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.enable = function() {
							this.enabled_ || (this.enabled_ = !0,
							this.removeClass("vjs-disabled"),
							this.el_.setAttribute("aria-disabled", "false"),
							void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_),
							this.on(["tap", "click"], this.handleClick),
							this.on("keydown", this.handleKeyDown))
					}
					,
					i.disable = function() {
							this.enabled_ = !1,
							this.addClass("vjs-disabled"),
							this.el_.setAttribute("aria-disabled", "true"),
							void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"),
							this.off("mouseover", this.handleMouseOver),
							this.off("mouseout", this.handleMouseOut),
							this.off(["tap", "click"], this.handleClick),
							this.off("keydown", this.handleKeyDown)
					}
					,
					i.handleClick = function(e) {
							this.options_.clickHandler && this.options_.clickHandler.call(this, arguments)
					}
					,
					i.handleKeyDown = function(t) {
							g.a.isEventKey(t, "Space") || g.a.isEventKey(t, "Enter") ? (t.preventDefault(),
							t.stopPropagation(),
							this.trigger("click")) : e.prototype.handleKeyDown.call(this, t)
					}
					,
					t
			}(vi);
			vi.registerComponent("ClickableComponent", Yn);
			var Xn = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).update(),
							t.on("posterchange", ei(c()(n), n.update)),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.dispose = function() {
							this.player().off("posterchange", this.update),
							e.prototype.dispose.call(this)
					}
					,
					i.createEl = function() {
							return at("div", {
									className: "vjs-poster",
									tabIndex: -1
							})
					}
					,
					i.update = function(e) {
							var t = this.player().poster();
							this.setSrc(t),
							t ? this.show() : this.hide()
					}
					,
					i.setSrc = function(e) {
							var t = "";
							e && (t = 'url("' + e + '")'),
							this.el_.style.backgroundImage = t
					}
					,
					i.handleClick = function(e) {
							this.player_.controls() && (this.player_.tech(!0) && this.player_.tech(!0).focus(),
							this.player_.paused() ? Zi(this.player_.play()) : this.player_.pause())
					}
					,
					t
			}(Yn);
			vi.registerComponent("PosterImage", Xn);
			var Kn = {
					monospace: "monospace",
					sansSerif: "sans-serif",
					serif: "serif",
					monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
					monospaceSerif: '"Courier New", monospace',
					proportionalSansSerif: "sans-serif",
					proportionalSerif: "serif",
					casual: '"Comic Sans MS", Impact, fantasy',
					script: '"Monotype Corsiva", cursive',
					smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
			};
			function $n(e, t) {
					var i;
					if (4 === e.length)
							i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
					else {
							if (7 !== e.length)
									throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
							i = e.slice(1)
					}
					return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
			}
			function Qn(e, t, i) {
					try {
							e.style[t] = i
					} catch (e) {
							return
					}
			}
			var Jn = function(e) {
					function t(t, i, n) {
							var a;
							a = e.call(this, t, i, n) || this;
							var s = ei(c()(a), a.updateDisplay);
							return t.on("loadstart", ei(c()(a), a.toggleDisplay)),
							t.on("texttrackchange", s),
							t.on("loadedmetadata", ei(c()(a), a.preselectTrack)),
							t.ready(ei(c()(a), (function() {
									if (t.tech_ && t.tech_.featuresNativeTextTracks)
											this.hide();
									else {
											t.on("fullscreenchange", s),
											t.on("playerresize", s),
											r.a.addEventListener("orientationchange", s),
											t.on("dispose", (function() {
													return r.a.removeEventListener("orientationchange", s)
											}
											));
											for (var e = this.options_.playerOptions.tracks || [], i = 0; i < e.length; i++)
													this.player_.addRemoteTextTrack(e[i], !0);
											this.preselectTrack()
									}
							}
							))),
							a
					}
					d()(t, e);
					var i = t.prototype;
					return i.preselectTrack = function() {
							for (var e, t, i, n = {
									captions: 1,
									subtitles: 1
							}, r = this.player_.textTracks(), a = this.player_.cache_.selectedLanguage, s = 0; s < r.length; s++) {
									var o = r[s];
									a && a.enabled && a.language && a.language === o.language && o.kind in n ? o.kind === a.kind ? i = o : i || (i = o) : a && !a.enabled ? (i = null,
									e = null,
									t = null) : o.default && ("descriptions" !== o.kind || e ? o.kind in n && !t && (t = o) : e = o)
							}
							i ? i.mode = "showing" : t ? t.mode = "showing" : e && (e.mode = "showing")
					}
					,
					i.toggleDisplay = function() {
							this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
					}
					,
					i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-text-track-display"
							}, {
									"aria-live": "off",
									"aria-atomic": "true"
							})
					}
					,
					i.clearDisplay = function() {
							"function" == typeof r.a.WebVTT && r.a.WebVTT.processCues(r.a, [], this.el_)
					}
					,
					i.updateDisplay = function() {
							var e = this.player_.textTracks()
								, t = this.options_.allowMultipleShowingTracks;
							if (this.clearDisplay(),
							t) {
									for (var i = [], n = 0; n < e.length; ++n) {
											var r = e[n];
											"showing" === r.mode && i.push(r)
									}
									this.updateForTrack(i)
							} else {
									for (var a = null, s = null, o = e.length; o--; ) {
											var u = e[o];
											"showing" === u.mode && ("descriptions" === u.kind ? a = u : s = u)
									}
									s ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"),
									this.updateForTrack(s)) : a && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"),
									this.updateForTrack(a))
							}
					}
					,
					i.updateDisplayState = function(e) {
							for (var t = this.player_.textTrackSettings.getValues(), i = e.activeCues, n = i.length; n--; ) {
									var a = i[n];
									if (a) {
											var s = a.displayState;
											if (t.color && (s.firstChild.style.color = t.color),
											t.textOpacity && Qn(s.firstChild, "color", $n(t.color || "#fff", t.textOpacity)),
											t.backgroundColor && (s.firstChild.style.backgroundColor = t.backgroundColor),
											t.backgroundOpacity && Qn(s.firstChild, "backgroundColor", $n(t.backgroundColor || "#000", t.backgroundOpacity)),
											t.windowColor && (t.windowOpacity ? Qn(s, "backgroundColor", $n(t.windowColor, t.windowOpacity)) : s.style.backgroundColor = t.windowColor),
											t.edgeStyle && ("dropshadow" === t.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === t.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === t.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === t.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),
											t.fontPercent && 1 !== t.fontPercent) {
													var o = r.a.parseFloat(s.style.fontSize);
													s.style.fontSize = o * t.fontPercent + "px",
													s.style.height = "auto",
													s.style.top = "auto",
													s.style.bottom = "2px"
											}
											t.fontFamily && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = Kn[t.fontFamily])
									}
							}
					}
					,
					i.updateForTrack = function(e) {
							if (Array.isArray(e) || (e = [e]),
							"function" == typeof r.a.WebVTT && !e.every((function(e) {
									return !e.activeCues
							}
							))) {
									for (var t = [], i = 0; i < e.length; ++i)
											for (var n = e[i], a = 0; a < n.activeCues.length; ++a)
													t.push(n.activeCues[a]);
									r.a.WebVTT.processCues(r.a, t, this.el_);
									for (var s = 0; s < e.length; ++s) {
											for (var o = e[s], u = 0; u < o.activeCues.length; ++u) {
													var l = o.activeCues[u].displayState;
													lt(l, "vjs-text-track-cue"),
													lt(l, "vjs-text-track-cue-" + (o.language ? o.language : s))
											}
											this.player_.textTrackSettings && this.updateDisplayState(o)
									}
							}
					}
					,
					t
			}(vi);
			vi.registerComponent("TextTrackDisplay", Jn);
			var Zn = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					return d()(t, e),
					t.prototype.createEl = function() {
							var t = this.player_.isAudio()
								, i = this.localize(t ? "Audio Player" : "Video Player")
								, n = at("span", {
									className: "vjs-control-text",
									innerHTML: this.localize("{1} is loading.", [i])
							})
								, r = e.prototype.createEl.call(this, "div", {
									className: "vjs-loading-spinner",
									dir: "ltr"
							});
							return r.appendChild(n),
							r
					}
					,
					t
			}(vi);
			vi.registerComponent("LoadingSpinner", Zn);
			var er = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function(e, t, i) {
							void 0 === t && (t = {}),
							void 0 === i && (i = {}),
							t = Ke({
									innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
									className: this.buildCSSClass()
							}, t),
							i = Ke({
									type: "button"
							}, i);
							var n = vi.prototype.createEl.call(this, "button", t, i);
							return this.createControlTextEl(n),
							n
					}
					,
					i.addChild = function(e, t) {
							void 0 === t && (t = {});
							var i = this.constructor.name;
							return We.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."),
							vi.prototype.addChild.call(this, e, t)
					}
					,
					i.enable = function() {
							e.prototype.enable.call(this),
							this.el_.removeAttribute("disabled")
					}
					,
					i.disable = function() {
							e.prototype.disable.call(this),
							this.el_.setAttribute("disabled", "disabled")
					}
					,
					i.handleKeyDown = function(t) {
							g.a.isEventKey(t, "Space") || g.a.isEventKey(t, "Enter") ? t.stopPropagation() : e.prototype.handleKeyDown.call(this, t)
					}
					,
					t
			}(Yn);
			vi.registerComponent("Button", er);
			var tr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).mouseused_ = !1,
							n.on("mousedown", n.handleMouseDown),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-big-play-button"
					}
					,
					i.handleClick = function(e) {
							var t = this.player_.play();
							if (this.mouseused_ && e.clientX && e.clientY) {
									var i = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
									return Zi(t),
									void (!this.player_.tech(!0) || (Ii || xi) && i || this.player_.tech(!0).focus())
							}
							var n = this.player_.getChild("controlBar")
								, r = n && n.getChild("playToggle");
							if (r) {
									var a = function() {
											return r.focus()
									};
									Ji(t) ? t.then(a, (function() {}
									)) : this.setTimeout(a, 1)
							} else
									this.player_.tech(!0).focus()
					}
					,
					i.handleKeyDown = function(t) {
							this.mouseused_ = !1,
							e.prototype.handleKeyDown.call(this, t)
					}
					,
					i.handleMouseDown = function(e) {
							this.mouseused_ = !0
					}
					,
					t
			}(er);
			tr.prototype.controlText_ = "Play Video",
			vi.registerComponent("BigPlayButton", tr);
			var ir = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).controlText(i && i.controlText || n.localize("Close")),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-close-button " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.handleClick = function(e) {
							this.trigger({
									type: "close",
									bubbles: !1
							})
					}
					,
					i.handleKeyDown = function(t) {
							g.a.isEventKey(t, "Esc") ? (t.preventDefault(),
							t.stopPropagation(),
							this.trigger("click")) : e.prototype.handleKeyDown.call(this, t)
					}
					,
					t
			}(er);
			vi.registerComponent("CloseButton", ir);
			var nr = function(e) {
					function t(t, i) {
							var n;
							return void 0 === i && (i = {}),
							n = e.call(this, t, i) || this,
							i.replay = void 0 === i.replay || i.replay,
							n.on(t, "play", n.handlePlay),
							n.on(t, "pause", n.handlePause),
							i.replay && n.on(t, "ended", n.handleEnded),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-play-control " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.handleClick = function(e) {
							this.player_.paused() ? this.player_.play() : this.player_.pause()
					}
					,
					i.handleSeeked = function(e) {
							this.removeClass("vjs-ended"),
							this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
					}
					,
					i.handlePlay = function(e) {
							this.removeClass("vjs-ended"),
							this.removeClass("vjs-paused"),
							this.addClass("vjs-playing"),
							this.controlText("Pause")
					}
					,
					i.handlePause = function(e) {
							this.removeClass("vjs-playing"),
							this.addClass("vjs-paused"),
							this.controlText("Play")
					}
					,
					i.handleEnded = function(e) {
							this.removeClass("vjs-playing"),
							this.addClass("vjs-ended"),
							this.controlText("Replay"),
							this.one(this.player_, "seeked", this.handleSeeked)
					}
					,
					t
			}(er);
			nr.prototype.controlText_ = "Play",
			vi.registerComponent("PlayToggle", nr);
			var rr = function(e, t) {
					e = e < 0 ? 0 : e;
					var i = Math.floor(e % 60)
						, n = Math.floor(e / 60 % 60)
						, r = Math.floor(e / 3600)
						, a = Math.floor(t / 60 % 60)
						, s = Math.floor(t / 3600);
					return (isNaN(e) || e === 1 / 0) && (r = n = i = "-"),
					(r = r > 0 || s > 0 ? r + ":" : "") + (n = ((r || a >= 10) && n < 10 ? "0" + n : n) + ":") + (i = i < 10 ? "0" + i : i)
			}
				, ar = rr;
			function sr(e, t) {
					return void 0 === t && (t = e),
					ar(e, t)
			}
			var or = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).on(t, ["timeupdate", "ended"], n.updateContent),
							n.updateTextNode_(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							var t = this.buildCSSClass()
								, i = e.prototype.createEl.call(this, "div", {
									className: t + " vjs-time-control vjs-control",
									innerHTML: '<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + " </span>"
							});
							return this.contentEl_ = at("span", {
									className: t + "-display"
							}, {
									"aria-live": "off",
									role: "presentation"
							}),
							i.appendChild(this.contentEl_),
							i
					}
					,
					i.dispose = function() {
							this.contentEl_ = null,
							this.textNode_ = null,
							e.prototype.dispose.call(this)
					}
					,
					i.updateTextNode_ = function(e) {
							var t = this;
							void 0 === e && (e = 0),
							e = sr(e),
							this.formattedTime_ !== e && (this.formattedTime_ = e,
							this.requestAnimationFrame((function() {
									if (t.contentEl_) {
											var e = t.textNode_;
											t.textNode_ = s.a.createTextNode(t.formattedTime_),
											t.textNode_ && (e ? t.contentEl_.replaceChild(t.textNode_, e) : t.contentEl_.appendChild(t.textNode_))
									}
							}
							)))
					}
					,
					i.updateContent = function(e) {}
					,
					t
			}(vi);
			or.prototype.labelText_ = "Time",
			or.prototype.controlText_ = "Time",
			vi.registerComponent("TimeDisplay", or);
			var ur = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-current-time"
					}
					,
					i.updateContent = function(e) {
							var t;
							t = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
							this.updateTextNode_(t)
					}
					,
					t
			}(or);
			ur.prototype.labelText_ = "Current Time",
			ur.prototype.controlText_ = "Current Time",
			vi.registerComponent("CurrentTimeDisplay", ur);
			var lr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).on(t, "durationchange", n.updateContent),
							n.on(t, "loadstart", n.updateContent),
							n.on(t, "loadedmetadata", n.updateContent),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-duration"
					}
					,
					i.updateContent = function(e) {
							var t = this.player_.duration();
							this.updateTextNode_(t)
					}
					,
					t
			}(or);
			lr.prototype.labelText_ = "Duration",
			lr.prototype.controlText_ = "Duration",
			vi.registerComponent("DurationDisplay", lr);
			var cr = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					return d()(t, e),
					t.prototype.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-time-control vjs-time-divider",
									innerHTML: "<div><span>/</span></div>"
							}, {
									"aria-hidden": !0
							})
					}
					,
					t
			}(vi);
			vi.registerComponent("TimeDivider", cr);
			var hr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).on(t, "durationchange", n.updateContent),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-remaining-time"
					}
					,
					i.createEl = function() {
							var t = e.prototype.createEl.call(this);
							return t.insertBefore(at("span", {}, {
									"aria-hidden": !0
							}, "-"), this.contentEl_),
							t
					}
					,
					i.updateContent = function(e) {
							var t;
							"number" == typeof this.player_.duration() && (t = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(),
							this.updateTextNode_(t))
					}
					,
					t
			}(or);
			hr.prototype.labelText_ = "Remaining Time",
			hr.prototype.controlText_ = "Remaining Time",
			vi.registerComponent("RemainingTimeDisplay", hr);
			var dr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).updateShowing(),
							n.on(n.player(), "durationchange", n.updateShowing),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							var t = e.prototype.createEl.call(this, "div", {
									className: "vjs-live-control vjs-control"
							});
							return this.contentEl_ = at("div", {
									className: "vjs-live-display",
									innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
							}, {
									"aria-live": "off"
							}),
							t.appendChild(this.contentEl_),
							t
					}
					,
					i.dispose = function() {
							this.contentEl_ = null,
							e.prototype.dispose.call(this)
					}
					,
					i.updateShowing = function(e) {
							this.player().duration() === 1 / 0 ? this.show() : this.hide()
					}
					,
					t
			}(vi);
			vi.registerComponent("LiveDisplay", dr);
			var pr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).updateLiveEdgeStatus(),
							n.player_.liveTracker && n.on(n.player_.liveTracker, "liveedgechange", n.updateLiveEdgeStatus),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							var t = e.prototype.createEl.call(this, "button", {
									className: "vjs-seek-to-live-control vjs-control"
							});
							return this.textEl_ = at("span", {
									className: "vjs-seek-to-live-text",
									innerHTML: this.localize("LIVE")
							}, {
									"aria-hidden": "true"
							}),
							t.appendChild(this.textEl_),
							t
					}
					,
					i.updateLiveEdgeStatus = function(e) {
							!this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0),
							this.addClass("vjs-at-live-edge"),
							this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1),
							this.removeClass("vjs-at-live-edge"),
							this.controlText("Seek to live, currently behind live"))
					}
					,
					i.handleClick = function() {
							this.player_.liveTracker.seekToLiveEdge()
					}
					,
					i.dispose = function() {
							this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus),
							this.textEl_ = null,
							e.prototype.dispose.call(this)
					}
					,
					t
			}(er);
			pr.prototype.controlText_ = "Seek to live, currently playing live",
			vi.registerComponent("SeekToLive", pr);
			var fr = function(e, t, i) {
					return e = Number(e),
					Math.min(i, Math.max(t, isNaN(e) ? t : e))
			}
				, mr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).bar = n.getChild(n.options_.barName),
							n.vertical(!!n.options_.vertical),
							n.enable(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.enabled = function() {
							return this.enabled_
					}
					,
					i.enable = function() {
							this.enabled() || (this.on("mousedown", this.handleMouseDown),
							this.on("touchstart", this.handleMouseDown),
							this.on("keydown", this.handleKeyDown),
							this.on("click", this.handleClick),
							this.on(this.player_, "controlsvisible", this.update),
							this.playerEvent && this.on(this.player_, this.playerEvent, this.update),
							this.removeClass("disabled"),
							this.setAttribute("tabindex", 0),
							this.enabled_ = !0)
					}
					,
					i.disable = function() {
							if (this.enabled()) {
									var e = this.bar.el_.ownerDocument;
									this.off("mousedown", this.handleMouseDown),
									this.off("touchstart", this.handleMouseDown),
									this.off("keydown", this.handleKeyDown),
									this.off("click", this.handleClick),
									this.off(this.player_, "controlsvisible", this.update),
									this.off(e, "mousemove", this.handleMouseMove),
									this.off(e, "mouseup", this.handleMouseUp),
									this.off(e, "touchmove", this.handleMouseMove),
									this.off(e, "touchend", this.handleMouseUp),
									this.removeAttribute("tabindex"),
									this.addClass("disabled"),
									this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
									this.enabled_ = !1
							}
					}
					,
					i.createEl = function(t, i, n) {
							return void 0 === i && (i = {}),
							void 0 === n && (n = {}),
							i.className = i.className + " vjs-slider",
							i = Ke({
									tabIndex: 0
							}, i),
							n = Ke({
									role: "slider",
									"aria-valuenow": 0,
									"aria-valuemin": 0,
									"aria-valuemax": 100,
									tabIndex: 0
							}, n),
							e.prototype.createEl.call(this, t, i, n)
					}
					,
					i.handleMouseDown = function(e) {
							var t = this.bar.el_.ownerDocument;
							"mousedown" === e.type && e.preventDefault(),
							"touchstart" !== e.type || Oi || e.preventDefault(),
							vt(),
							this.addClass("vjs-sliding"),
							this.trigger("slideractive"),
							this.on(t, "mousemove", this.handleMouseMove),
							this.on(t, "mouseup", this.handleMouseUp),
							this.on(t, "touchmove", this.handleMouseMove),
							this.on(t, "touchend", this.handleMouseUp),
							this.handleMouseMove(e)
					}
					,
					i.handleMouseMove = function(e) {}
					,
					i.handleMouseUp = function() {
							var e = this.bar.el_.ownerDocument;
							yt(),
							this.removeClass("vjs-sliding"),
							this.trigger("sliderinactive"),
							this.off(e, "mousemove", this.handleMouseMove),
							this.off(e, "mouseup", this.handleMouseUp),
							this.off(e, "touchmove", this.handleMouseMove),
							this.off(e, "touchend", this.handleMouseUp),
							this.update()
					}
					,
					i.update = function() {
							var e = this;
							if (this.el_ && this.bar) {
									var t = this.getProgress();
									return t === this.progress_ || (this.progress_ = t,
									this.requestAnimationFrame((function() {
											var i = e.vertical() ? "height" : "width";
											e.bar.el().style[i] = (100 * t).toFixed(2) + "%"
									}
									))),
									t
							}
					}
					,
					i.getProgress = function() {
							return Number(fr(this.getPercent(), 0, 1).toFixed(4))
					}
					,
					i.calculateDistance = function(e) {
							var t = Tt(this.el_, e);
							return this.vertical() ? t.y : t.x
					}
					,
					i.handleKeyDown = function(t) {
							g.a.isEventKey(t, "Left") || g.a.isEventKey(t, "Down") ? (t.preventDefault(),
							t.stopPropagation(),
							this.stepBack()) : g.a.isEventKey(t, "Right") || g.a.isEventKey(t, "Up") ? (t.preventDefault(),
							t.stopPropagation(),
							this.stepForward()) : e.prototype.handleKeyDown.call(this, t)
					}
					,
					i.handleClick = function(e) {
							e.stopPropagation(),
							e.preventDefault()
					}
					,
					i.vertical = function(e) {
							if (void 0 === e)
									return this.vertical_ || !1;
							this.vertical_ = !!e,
							this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
					}
					,
					t
			}(vi);
			vi.registerComponent("Slider", mr);
			var gr = function(e, t) {
					return fr(e / t * 100, 0, 100).toFixed(2) + "%"
			}
				, vr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).partEls_ = [],
							n.on(t, "progress", n.update),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							var t = e.prototype.createEl.call(this, "div", {
									className: "vjs-load-progress"
							})
								, i = at("span", {
									className: "vjs-control-text"
							})
								, n = at("span", {
									textContent: this.localize("Loaded")
							})
								, r = s.a.createTextNode(": ");
							return this.percentageEl_ = at("span", {
									className: "vjs-control-text-loaded-percentage",
									textContent: "0%"
							}),
							t.appendChild(i),
							i.appendChild(n),
							i.appendChild(r),
							i.appendChild(this.percentageEl_),
							t
					}
					,
					i.dispose = function() {
							this.partEls_ = null,
							this.percentageEl_ = null,
							e.prototype.dispose.call(this)
					}
					,
					i.update = function(e) {
							var t = this;
							this.requestAnimationFrame((function() {
									var e = t.player_.liveTracker
										, i = t.player_.buffered()
										, n = e && e.isLive() ? e.seekableEnd() : t.player_.duration()
										, r = t.player_.bufferedEnd()
										, a = t.partEls_
										, s = gr(r, n);
									t.percent_ !== s && (t.el_.style.width = s,
									st(t.percentageEl_, s),
									t.percent_ = s);
									for (var o = 0; o < i.length; o++) {
											var u = i.start(o)
												, l = i.end(o)
												, c = a[o];
											c || (c = t.el_.appendChild(at()),
											a[o] = c),
											c.dataset.start === u && c.dataset.end === l || (c.dataset.start = u,
											c.dataset.end = l,
											c.style.left = gr(u, r),
											c.style.width = gr(l - u, r))
									}
									for (var h = a.length; h > i.length; h--)
											t.el_.removeChild(a[h - 1]);
									a.length = i.length
							}
							))
					}
					,
					t
			}(vi);
			vi.registerComponent("LoadProgressBar", vr);
			var yr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).update = ti(ei(c()(n), n.update), 30),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-time-tooltip"
							}, {
									"aria-hidden": "true"
							})
					}
					,
					i.update = function(e, t, i) {
							var n = _t(this.el_)
								, r = _t(this.player_.el())
								, a = e.width * t;
							if (r && n) {
									var s = e.left - r.left + a
										, o = e.width - a + (r.right - e.right)
										, u = n.width / 2;
									s < u ? u += u - s : o < u && (u = o),
									u < 0 ? u = 0 : u > n.width && (u = n.width),
									this.el_.style.right = "-" + u + "px",
									this.write(i)
							}
					}
					,
					i.write = function(e) {
							st(this.el_, e)
					}
					,
					i.updateTime = function(e, t, i, n) {
							var r = this;
							this.rafId_ && this.cancelAnimationFrame(this.rafId_),
							this.rafId_ = this.requestAnimationFrame((function() {
									var a, s = r.player_.duration();
									if (r.player_.liveTracker && r.player_.liveTracker.isLive()) {
											var o = r.player_.liveTracker.liveWindow()
												, u = o - t * o;
											a = (u < 1 ? "" : "-") + sr(u, o)
									} else
											a = sr(i, s);
									r.update(e, t, a),
									n && n()
							}
							))
					}
					,
					t
			}(vi);
			vi.registerComponent("TimeTooltip", yr);
			var _r = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).update = ti(ei(c()(n), n.update), 30),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-play-progress vjs-slider-bar"
							}, {
									"aria-hidden": "true"
							})
					}
					,
					i.update = function(e, t) {
							var i = this.getChild("timeTooltip");
							if (i) {
									var n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
									i.updateTime(e, t, n)
							}
					}
					,
					t
			}(vi);
			_r.prototype.options_ = {
					children: []
			},
			Mi || ki || _r.prototype.options_.children.push("timeTooltip"),
			vi.registerComponent("PlayProgressBar", _r);
			var br = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).update = ti(ei(c()(n), n.update), 30),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-mouse-display"
							})
					}
					,
					i.update = function(e, t) {
							var i = this
								, n = t * this.player_.duration();
							this.getChild("timeTooltip").updateTime(e, t, n, (function() {
									i.el_.style.left = e.width * t + "px"
							}
							))
					}
					,
					t
			}(vi);
			br.prototype.options_ = {
					children: ["timeTooltip"]
			},
			vi.registerComponent("MouseTimeDisplay", br);
			var Tr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).setEventHandlers_(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.setEventHandlers_ = function() {
							this.update_ = ei(this, this.update),
							this.update = ti(this.update_, 30),
							this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
							this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update),
							this.updateInterval = null,
							this.on(this.player_, ["playing"], this.enableInterval_),
							this.on(this.player_, ["ended", "pause", "waiting"], this.disableInterval_),
							"hidden"in s.a && "visibilityState"in s.a && this.on(s.a, "visibilitychange", this.toggleVisibility_)
					}
					,
					i.toggleVisibility_ = function(e) {
							s.a.hidden ? this.disableInterval_(e) : (this.enableInterval_(),
							this.update())
					}
					,
					i.enableInterval_ = function() {
							this.updateInterval || (this.updateInterval = this.setInterval(this.update, 30))
					}
					,
					i.disableInterval_ = function(e) {
							this.player_.liveTracker && this.player_.liveTracker.isLive() && "ended" !== e.type || this.updateInterval && (this.clearInterval(this.updateInterval),
							this.updateInterval = null)
					}
					,
					i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-progress-holder"
							}, {
									"aria-label": this.localize("Progress Bar")
							})
					}
					,
					i.update = function(t) {
							var i = this
								, n = e.prototype.update.call(this);
							return this.requestAnimationFrame((function() {
									var e = i.player_.ended() ? i.player_.duration() : i.getCurrentTime_()
										, t = i.player_.liveTracker
										, r = i.player_.duration();
									t && t.isLive() && (r = i.player_.liveTracker.liveCurrentTime()),
									i.percent_ !== n && (i.el_.setAttribute("aria-valuenow", (100 * n).toFixed(2)),
									i.percent_ = n),
									i.currentTime_ === e && i.duration_ === r || (i.el_.setAttribute("aria-valuetext", i.localize("progress bar timing: currentTime={1} duration={2}", [sr(e, r), sr(r, r)], "{1} of {2}")),
									i.currentTime_ = e,
									i.duration_ = r),
									i.bar && i.bar.update(_t(i.el()), i.getProgress())
							}
							)),
							n
					}
					,
					i.getCurrentTime_ = function() {
							return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
					}
					,
					i.getPercent = function() {
							var e, t = this.getCurrentTime_(), i = this.player_.liveTracker;
							return i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(),
							i.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(),
							e
					}
					,
					i.handleMouseDown = function(t) {
							At(t) && (t.stopPropagation(),
							this.player_.scrubbing(!0),
							this.videoWasPlaying = !this.player_.paused(),
							this.player_.pause(),
							e.prototype.handleMouseDown.call(this, t))
					}
					,
					i.handleMouseMove = function(e) {
							if (At(e)) {
									var t, i = this.calculateDistance(e), n = this.player_.liveTracker;
									if (n && n.isLive()) {
											var r = n.seekableStart()
												, a = n.liveCurrentTime();
											if ((t = r + i * n.liveWindow()) >= a && (t = a),
											t <= r && (t = r + .1),
											t === 1 / 0)
													return
									} else
											(t = i * this.player_.duration()) === this.player_.duration() && (t -= .1);
									this.player_.currentTime(t)
							}
					}
					,
					i.enable = function() {
							e.prototype.enable.call(this);
							var t = this.getChild("mouseTimeDisplay");
							t && t.show()
					}
					,
					i.disable = function() {
							e.prototype.disable.call(this);
							var t = this.getChild("mouseTimeDisplay");
							t && t.hide()
					}
					,
					i.handleMouseUp = function(t) {
							e.prototype.handleMouseUp.call(this, t),
							t && t.stopPropagation(),
							this.player_.scrubbing(!1),
							this.player_.trigger({
									type: "timeupdate",
									target: this,
									manuallyTriggered: !0
							}),
							this.videoWasPlaying ? Zi(this.player_.play()) : this.update_()
					}
					,
					i.stepForward = function() {
							this.player_.currentTime(this.player_.currentTime() + 5)
					}
					,
					i.stepBack = function() {
							this.player_.currentTime(this.player_.currentTime() - 5)
					}
					,
					i.handleAction = function(e) {
							this.player_.paused() ? this.player_.play() : this.player_.pause()
					}
					,
					i.handleKeyDown = function(t) {
							if (g.a.isEventKey(t, "Space") || g.a.isEventKey(t, "Enter"))
									t.preventDefault(),
									t.stopPropagation(),
									this.handleAction(t);
							else if (g.a.isEventKey(t, "Home"))
									t.preventDefault(),
									t.stopPropagation(),
									this.player_.currentTime(0);
							else if (g.a.isEventKey(t, "End"))
									t.preventDefault(),
									t.stopPropagation(),
									this.player_.currentTime(this.player_.duration());
							else if (/^[0-9]$/.test(g()(t))) {
									t.preventDefault(),
									t.stopPropagation();
									var i = 10 * (g.a.codes[g()(t)] - g.a.codes[0]) / 100;
									this.player_.currentTime(this.player_.duration() * i)
							} else
									g.a.isEventKey(t, "PgDn") ? (t.preventDefault(),
									t.stopPropagation(),
									this.player_.currentTime(this.player_.currentTime() - 60)) : g.a.isEventKey(t, "PgUp") ? (t.preventDefault(),
									t.stopPropagation(),
									this.player_.currentTime(this.player_.currentTime() + 60)) : e.prototype.handleKeyDown.call(this, t)
					}
					,
					t
			}(mr);
			Tr.prototype.options_ = {
					children: ["loadProgressBar", "playProgressBar"],
					barName: "playProgressBar"
			},
			Mi || ki || Tr.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"),
			vi.registerComponent("SeekBar", Tr);
			var Sr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).handleMouseMove = ti(ei(c()(n), n.handleMouseMove), 30),
							n.throttledHandleMouseSeek = ti(ei(c()(n), n.handleMouseSeek), 30),
							n.enable(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-progress-control vjs-control"
							})
					}
					,
					i.handleMouseMove = function(e) {
							var t = this.getChild("seekBar");
							if (t) {
									var i = t.getChild("playProgressBar")
										, n = t.getChild("mouseTimeDisplay");
									if (i || n) {
											var r = t.el()
												, a = _t(r)
												, s = Tt(r, e).x;
											s = fr(0, 1, s),
											n && n.update(a, s),
											i && i.update(a, t.getProgress())
									}
							}
					}
					,
					i.handleMouseSeek = function(e) {
							var t = this.getChild("seekBar");
							t && t.handleMouseMove(e)
					}
					,
					i.enabled = function() {
							return this.enabled_
					}
					,
					i.disable = function() {
							this.children().forEach((function(e) {
									return e.disable && e.disable()
							}
							)),
							this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown),
							this.off(this.el_, "mousemove", this.handleMouseMove),
							this.handleMouseUp(),
							this.addClass("disabled"),
							this.enabled_ = !1)
					}
					,
					i.enable = function() {
							this.children().forEach((function(e) {
									return e.enable && e.enable()
							}
							)),
							this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown),
							this.on(this.el_, "mousemove", this.handleMouseMove),
							this.removeClass("disabled"),
							this.enabled_ = !0)
					}
					,
					i.handleMouseDown = function(e) {
							var t = this.el_.ownerDocument
								, i = this.getChild("seekBar");
							i && i.handleMouseDown(e),
							this.on(t, "mousemove", this.throttledHandleMouseSeek),
							this.on(t, "touchmove", this.throttledHandleMouseSeek),
							this.on(t, "mouseup", this.handleMouseUp),
							this.on(t, "touchend", this.handleMouseUp)
					}
					,
					i.handleMouseUp = function(e) {
							var t = this.el_.ownerDocument
								, i = this.getChild("seekBar");
							i && i.handleMouseUp(e),
							this.off(t, "mousemove", this.throttledHandleMouseSeek),
							this.off(t, "touchmove", this.throttledHandleMouseSeek),
							this.off(t, "mouseup", this.handleMouseUp),
							this.off(t, "touchend", this.handleMouseUp)
					}
					,
					t
			}(vi);
			Sr.prototype.options_ = {
					children: ["seekBar"]
			},
			vi.registerComponent("ProgressControl", Sr);
			var wr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).on(t, ["enterpictureinpicture", "leavepictureinpicture"], n.handlePictureInPictureChange),
							s.a.pictureInPictureEnabled || n.disable(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-picture-in-picture-control " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.handlePictureInPictureChange = function(e) {
							this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") : this.controlText("Picture-in-Picture")
					}
					,
					i.handleClick = function(e) {
							this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture()
					}
					,
					t
			}(er);
			wr.prototype.controlText_ = "Picture-in-Picture",
			vi.registerComponent("PictureInPictureToggle", wr);
			var kr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).on(t, "fullscreenchange", n.handleFullscreenChange),
							!1 === s.a[t.fsApi_.fullscreenEnabled] && n.disable(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.handleFullscreenChange = function(e) {
							this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
					}
					,
					i.handleClick = function(e) {
							this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
					}
					,
					t
			}(er);
			kr.prototype.controlText_ = "Fullscreen",
			vi.registerComponent("FullscreenToggle", kr);
			var Er = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					return d()(t, e),
					t.prototype.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-volume-level",
									innerHTML: '<span class="vjs-control-text"></span>'
							})
					}
					,
					t
			}(vi);
			vi.registerComponent("VolumeLevel", Er);
			var Cr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).on("slideractive", n.updateLastVolume_),
							n.on(t, "volumechange", n.updateARIAAttributes),
							t.ready((function() {
									return n.updateARIAAttributes()
							}
							)),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-volume-bar vjs-slider-bar"
							}, {
									"aria-label": this.localize("Volume Level"),
									"aria-live": "polite"
							})
					}
					,
					i.handleMouseDown = function(t) {
							At(t) && e.prototype.handleMouseDown.call(this, t)
					}
					,
					i.handleMouseMove = function(e) {
							At(e) && (this.checkMuted(),
							this.player_.volume(this.calculateDistance(e)))
					}
					,
					i.checkMuted = function() {
							this.player_.muted() && this.player_.muted(!1)
					}
					,
					i.getPercent = function() {
							return this.player_.muted() ? 0 : this.player_.volume()
					}
					,
					i.stepForward = function() {
							this.checkMuted(),
							this.player_.volume(this.player_.volume() + .1)
					}
					,
					i.stepBack = function() {
							this.checkMuted(),
							this.player_.volume(this.player_.volume() - .1)
					}
					,
					i.updateARIAAttributes = function(e) {
							var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
							this.el_.setAttribute("aria-valuenow", t),
							this.el_.setAttribute("aria-valuetext", t + "%")
					}
					,
					i.volumeAsPercentage_ = function() {
							return Math.round(100 * this.player_.volume())
					}
					,
					i.updateLastVolume_ = function() {
							var e = this
								, t = this.player_.volume();
							this.one("sliderinactive", (function() {
									0 === e.player_.volume() && e.player_.lastVolume_(t)
							}
							))
					}
					,
					t
			}(mr);
			Cr.prototype.options_ = {
					children: ["volumeLevel"],
					barName: "volumeLevel"
			},
			Cr.prototype.playerEvent = "volumechange",
			vi.registerComponent("VolumeBar", Cr);
			var Ar = function(e) {
					function t(t, i) {
							var n;
							return void 0 === i && (i = {}),
							i.vertical = i.vertical || !1,
							(void 0 === i.volumeBar || Qe(i.volumeBar)) && (i.volumeBar = i.volumeBar || {},
							i.volumeBar.vertical = i.vertical),
							n = e.call(this, t, i) || this,
							function(e, t) {
									t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"),
									e.on(t, "loadstart", (function() {
											t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
									}
									))
							}(c()(n), t),
							n.throttledHandleMouseMove = ti(ei(c()(n), n.handleMouseMove), 30),
							n.on("mousedown", n.handleMouseDown),
							n.on("touchstart", n.handleMouseDown),
							n.on(n.volumeBar, ["focus", "slideractive"], (function() {
									n.volumeBar.addClass("vjs-slider-active"),
									n.addClass("vjs-slider-active"),
									n.trigger("slideractive")
							}
							)),
							n.on(n.volumeBar, ["blur", "sliderinactive"], (function() {
									n.volumeBar.removeClass("vjs-slider-active"),
									n.removeClass("vjs-slider-active"),
									n.trigger("sliderinactive")
							}
							)),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							var t = "vjs-volume-horizontal";
							return this.options_.vertical && (t = "vjs-volume-vertical"),
							e.prototype.createEl.call(this, "div", {
									className: "vjs-volume-control vjs-control " + t
							})
					}
					,
					i.handleMouseDown = function(e) {
							var t = this.el_.ownerDocument;
							this.on(t, "mousemove", this.throttledHandleMouseMove),
							this.on(t, "touchmove", this.throttledHandleMouseMove),
							this.on(t, "mouseup", this.handleMouseUp),
							this.on(t, "touchend", this.handleMouseUp)
					}
					,
					i.handleMouseUp = function(e) {
							var t = this.el_.ownerDocument;
							this.off(t, "mousemove", this.throttledHandleMouseMove),
							this.off(t, "touchmove", this.throttledHandleMouseMove),
							this.off(t, "mouseup", this.handleMouseUp),
							this.off(t, "touchend", this.handleMouseUp)
					}
					,
					i.handleMouseMove = function(e) {
							this.volumeBar.handleMouseMove(e)
					}
					,
					t
			}(vi);
			Ar.prototype.options_ = {
					children: ["volumeBar"]
			},
			vi.registerComponent("VolumeControl", Ar);
			var xr = function(e) {
					function t(t, i) {
							var n;
							return n = e.call(this, t, i) || this,
							function(e, t) {
									t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"),
									e.on(t, "loadstart", (function() {
											t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
									}
									))
							}(c()(n), t),
							n.on(t, ["loadstart", "volumechange"], n.update),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-mute-control " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.handleClick = function(e) {
							var t = this.player_.volume()
								, i = this.player_.lastVolume_();
							if (0 === t) {
									var n = i < .1 ? .1 : i;
									this.player_.volume(n),
									this.player_.muted(!1)
							} else
									this.player_.muted(!this.player_.muted())
					}
					,
					i.update = function(e) {
							this.updateIcon_(),
							this.updateControlText_()
					}
					,
					i.updateIcon_ = function() {
							var e = this.player_.volume()
								, t = 3;
							Mi && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted),
							0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
							for (var i = 0; i < 4; i++)
									ct(this.el_, "vjs-vol-" + i);
							lt(this.el_, "vjs-vol-" + t)
					}
					,
					i.updateControlText_ = function() {
							var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
							this.controlText() !== e && this.controlText(e)
					}
					,
					t
			}(er);
			xr.prototype.controlText_ = "Mute",
			vi.registerComponent("MuteToggle", xr);
			var Or = function(e) {
					function t(t, i) {
							var n;
							return void 0 === i && (i = {}),
							void 0 !== i.inline ? i.inline = i.inline : i.inline = !0,
							(void 0 === i.volumeControl || Qe(i.volumeControl)) && (i.volumeControl = i.volumeControl || {},
							i.volumeControl.vertical = !i.inline),
							(n = e.call(this, t, i) || this).on(t, ["loadstart"], n.volumePanelState_),
							n.on(n.muteToggle, "keyup", n.handleKeyPress),
							n.on(n.volumeControl, "keyup", n.handleVolumeControlKeyUp),
							n.on("keydown", n.handleKeyPress),
							n.on("mouseover", n.handleMouseOver),
							n.on("mouseout", n.handleMouseOut),
							n.on(n.volumeControl, ["slideractive"], n.sliderActive_),
							n.on(n.volumeControl, ["sliderinactive"], n.sliderInactive_),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.sliderActive_ = function() {
							this.addClass("vjs-slider-active")
					}
					,
					i.sliderInactive_ = function() {
							this.removeClass("vjs-slider-active")
					}
					,
					i.volumePanelState_ = function() {
							this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"),
							this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
					}
					,
					i.createEl = function() {
							var t = "vjs-volume-panel-horizontal";
							return this.options_.inline || (t = "vjs-volume-panel-vertical"),
							e.prototype.createEl.call(this, "div", {
									className: "vjs-volume-panel vjs-control " + t
							})
					}
					,
					i.dispose = function() {
							this.handleMouseOut(),
							e.prototype.dispose.call(this)
					}
					,
					i.handleVolumeControlKeyUp = function(e) {
							g.a.isEventKey(e, "Esc") && this.muteToggle.focus()
					}
					,
					i.handleMouseOver = function(e) {
							this.addClass("vjs-hover"),
							Yt(s.a, "keyup", ei(this, this.handleKeyPress))
					}
					,
					i.handleMouseOut = function(e) {
							this.removeClass("vjs-hover"),
							Xt(s.a, "keyup", ei(this, this.handleKeyPress))
					}
					,
					i.handleKeyPress = function(e) {
							g.a.isEventKey(e, "Esc") && this.handleMouseOut()
					}
					,
					t
			}(vi);
			Or.prototype.options_ = {
					children: ["muteToggle", "volumeControl"]
			},
			vi.registerComponent("VolumePanel", Or);
			var Pr = function(e) {
					function t(t, i) {
							var n;
							return n = e.call(this, t, i) || this,
							i && (n.menuButton_ = i.menuButton),
							n.focusedChild_ = -1,
							n.on("keydown", n.handleKeyDown),
							n.boundHandleBlur_ = ei(c()(n), n.handleBlur),
							n.boundHandleTapClick_ = ei(c()(n), n.handleTapClick),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.addEventListenerForItem = function(e) {
							e instanceof vi && (this.on(e, "blur", this.boundHandleBlur_),
							this.on(e, ["tap", "click"], this.boundHandleTapClick_))
					}
					,
					i.removeEventListenerForItem = function(e) {
							e instanceof vi && (this.off(e, "blur", this.boundHandleBlur_),
							this.off(e, ["tap", "click"], this.boundHandleTapClick_))
					}
					,
					i.removeChild = function(t) {
							"string" == typeof t && (t = this.getChild(t)),
							this.removeEventListenerForItem(t),
							e.prototype.removeChild.call(this, t)
					}
					,
					i.addItem = function(e) {
							var t = this.addChild(e);
							t && this.addEventListenerForItem(t)
					}
					,
					i.createEl = function() {
							var t = this.options_.contentElType || "ul";
							this.contentEl_ = at(t, {
									className: "vjs-menu-content"
							}),
							this.contentEl_.setAttribute("role", "menu");
							var i = e.prototype.createEl.call(this, "div", {
									append: this.contentEl_,
									className: "vjs-menu"
							});
							return i.appendChild(this.contentEl_),
							Yt(i, "click", (function(e) {
									e.preventDefault(),
									e.stopImmediatePropagation()
							}
							)),
							i
					}
					,
					i.dispose = function() {
							this.contentEl_ = null,
							this.boundHandleBlur_ = null,
							this.boundHandleTapClick_ = null,
							e.prototype.dispose.call(this)
					}
					,
					i.handleBlur = function(e) {
							var t = e.relatedTarget || s.a.activeElement;
							if (!this.children().some((function(e) {
									return e.el() === t
							}
							))) {
									var i = this.menuButton_;
									i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton()
							}
					}
					,
					i.handleTapClick = function(e) {
							if (this.menuButton_) {
									this.menuButton_.unpressButton();
									var t = this.children();
									if (!Array.isArray(t))
											return;
									var i = t.filter((function(t) {
											return t.el() === e.target
									}
									))[0];
									if (!i)
											return;
									"CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus()
							}
					}
					,
					i.handleKeyDown = function(e) {
							g.a.isEventKey(e, "Left") || g.a.isEventKey(e, "Down") ? (e.preventDefault(),
							e.stopPropagation(),
							this.stepForward()) : (g.a.isEventKey(e, "Right") || g.a.isEventKey(e, "Up")) && (e.preventDefault(),
							e.stopPropagation(),
							this.stepBack())
					}
					,
					i.stepForward = function() {
							var e = 0;
							void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1),
							this.focus(e)
					}
					,
					i.stepBack = function() {
							var e = 0;
							void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1),
							this.focus(e)
					}
					,
					i.focus = function(e) {
							void 0 === e && (e = 0);
							var t = this.children().slice();
							t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(),
							t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1),
							this.focusedChild_ = e,
							t[e].el_.focus())
					}
					,
					t
			}(vi);
			vi.registerComponent("Menu", Pr);
			var Ir = function(e) {
					function t(t, i) {
							var n;
							void 0 === i && (i = {}),
							(n = e.call(this, t, i) || this).menuButton_ = new er(t,i),
							n.menuButton_.controlText(n.controlText_),
							n.menuButton_.el_.setAttribute("aria-haspopup", "true");
							var r = er.prototype.buildCSSClass();
							return n.menuButton_.el_.className = n.buildCSSClass() + " " + r,
							n.menuButton_.removeClass("vjs-control"),
							n.addChild(n.menuButton_),
							n.update(),
							n.enabled_ = !0,
							n.on(n.menuButton_, "tap", n.handleClick),
							n.on(n.menuButton_, "click", n.handleClick),
							n.on(n.menuButton_, "keydown", n.handleKeyDown),
							n.on(n.menuButton_, "mouseenter", (function() {
									n.addClass("vjs-hover"),
									n.menu.show(),
									Yt(s.a, "keyup", ei(c()(n), n.handleMenuKeyUp))
							}
							)),
							n.on("mouseleave", n.handleMouseLeave),
							n.on("keydown", n.handleSubmenuKeyDown),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.update = function() {
							var e = this.createMenu();
							this.menu && (this.menu.dispose(),
							this.removeChild(this.menu)),
							this.menu = e,
							this.addChild(e),
							this.buttonPressed_ = !1,
							this.menuButton_.el_.setAttribute("aria-expanded", "false"),
							this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
					}
					,
					i.createMenu = function() {
							var e = new Pr(this.player_,{
									menuButton: this
							});
							if (this.hideThreshold_ = 0,
							this.options_.title) {
									var t = at("li", {
											className: "vjs-menu-title",
											innerHTML: mi(this.options_.title),
											tabIndex: -1
									});
									this.hideThreshold_ += 1;
									var i = new vi(this.player_,{
											el: t
									});
									e.addItem(i)
							}
							if (this.items = this.createItems(),
							this.items)
									for (var n = 0; n < this.items.length; n++)
											e.addItem(this.items[n]);
							return e
					}
					,
					i.createItems = function() {}
					,
					i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: this.buildWrapperCSSClass()
							}, {})
					}
					,
					i.buildWrapperCSSClass = function() {
							var t = "vjs-menu-button";
							return !0 === this.options_.inline ? t += "-inline" : t += "-popup",
							"vjs-menu-button " + t + " " + er.prototype.buildCSSClass() + " " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.buildCSSClass = function() {
							var t = "vjs-menu-button";
							return !0 === this.options_.inline ? t += "-inline" : t += "-popup",
							"vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.controlText = function(e, t) {
							return void 0 === t && (t = this.menuButton_.el()),
							this.menuButton_.controlText(e, t)
					}
					,
					i.dispose = function() {
							this.handleMouseLeave(),
							e.prototype.dispose.call(this)
					}
					,
					i.handleClick = function(e) {
							this.buttonPressed_ ? this.unpressButton() : this.pressButton()
					}
					,
					i.handleMouseLeave = function(e) {
							this.removeClass("vjs-hover"),
							Xt(s.a, "keyup", ei(this, this.handleMenuKeyUp))
					}
					,
					i.focus = function() {
							this.menuButton_.focus()
					}
					,
					i.blur = function() {
							this.menuButton_.blur()
					}
					,
					i.handleKeyDown = function(e) {
							g.a.isEventKey(e, "Esc") || g.a.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(),
							g.a.isEventKey(e, "Tab") || (e.preventDefault(),
							this.menuButton_.focus())) : (g.a.isEventKey(e, "Up") || g.a.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(),
							this.pressButton()))
					}
					,
					i.handleMenuKeyUp = function(e) {
							(g.a.isEventKey(e, "Esc") || g.a.isEventKey(e, "Tab")) && this.removeClass("vjs-hover")
					}
					,
					i.handleSubmenuKeyPress = function(e) {
							this.handleSubmenuKeyDown(e)
					}
					,
					i.handleSubmenuKeyDown = function(e) {
							(g.a.isEventKey(e, "Esc") || g.a.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(),
							g.a.isEventKey(e, "Tab") || (e.preventDefault(),
							this.menuButton_.focus()))
					}
					,
					i.pressButton = function() {
							if (this.enabled_) {
									if (this.buttonPressed_ = !0,
									this.menu.show(),
									this.menu.lockShowing(),
									this.menuButton_.el_.setAttribute("aria-expanded", "true"),
									Mi && nt())
											return;
									this.menu.focus()
							}
					}
					,
					i.unpressButton = function() {
							this.enabled_ && (this.buttonPressed_ = !1,
							this.menu.unlockShowing(),
							this.menu.hide(),
							this.menuButton_.el_.setAttribute("aria-expanded", "false"))
					}
					,
					i.disable = function() {
							this.unpressButton(),
							this.enabled_ = !1,
							this.addClass("vjs-disabled"),
							this.menuButton_.disable()
					}
					,
					i.enable = function() {
							this.enabled_ = !0,
							this.removeClass("vjs-disabled"),
							this.menuButton_.enable()
					}
					,
					t
			}(vi);
			vi.registerComponent("MenuButton", Ir);
			var Lr = function(e) {
					function t(t, i) {
							var n, r = i.tracks;
							if ((n = e.call(this, t, i) || this).items.length <= 1 && n.hide(),
							!r)
									return c()(n);
							var a = ei(c()(n), n.update);
							return r.addEventListener("removetrack", a),
							r.addEventListener("addtrack", a),
							n.player_.on("ready", a),
							n.player_.on("dispose", (function() {
									r.removeEventListener("removetrack", a),
									r.removeEventListener("addtrack", a)
							}
							)),
							n
					}
					return d()(t, e),
					t
			}(Ir);
			vi.registerComponent("TrackButton", Lr);
			var Dr = ["Tab", "Esc", "Up", "Down", "Right", "Left"]
				, Rr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).selectable = i.selectable,
							n.isSelected_ = i.selected || !1,
							n.multiSelectable = i.multiSelectable,
							n.selected(n.isSelected_),
							n.selectable ? n.multiSelectable ? n.el_.setAttribute("role", "menuitemcheckbox") : n.el_.setAttribute("role", "menuitemradio") : n.el_.setAttribute("role", "menuitem"),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function(t, i, n) {
							return this.nonIconControl = !0,
							e.prototype.createEl.call(this, "li", Ke({
									className: "vjs-menu-item",
									innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
									tabIndex: -1
							}, i), n)
					}
					,
					i.handleKeyDown = function(t) {
							Dr.some((function(e) {
									return g.a.isEventKey(t, e)
							}
							)) || e.prototype.handleKeyDown.call(this, t)
					}
					,
					i.handleClick = function(e) {
							this.selected(!0)
					}
					,
					i.selected = function(e) {
							this.selectable && (e ? (this.addClass("vjs-selected"),
							this.el_.setAttribute("aria-checked", "true"),
							this.controlText(", selected"),
							this.isSelected_ = !0) : (this.removeClass("vjs-selected"),
							this.el_.setAttribute("aria-checked", "false"),
							this.controlText(""),
							this.isSelected_ = !1))
					}
					,
					t
			}(Yn);
			vi.registerComponent("MenuItem", Rr);
			var Nr = function(e) {
					function t(t, i) {
							var n, a = i.track, o = t.textTracks();
							i.label = a.label || a.language || "Unknown",
							i.selected = "showing" === a.mode,
							(n = e.call(this, t, i) || this).track = a,
							n.kinds = (i.kinds || [i.kind || n.track.kind]).filter(Boolean);
							var u, l = function() {
									for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
											t[i] = arguments[i];
									n.handleTracksChange.apply(c()(n), t)
							}, h = function() {
									for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
											t[i] = arguments[i];
									n.handleSelectedLanguageChange.apply(c()(n), t)
							};
							(t.on(["loadstart", "texttrackchange"], l),
							o.addEventListener("change", l),
							o.addEventListener("selectedlanguagechange", h),
							n.on("dispose", (function() {
									t.off(["loadstart", "texttrackchange"], l),
									o.removeEventListener("change", l),
									o.removeEventListener("selectedlanguagechange", h)
							}
							)),
							void 0 === o.onchange) && n.on(["tap", "click"], (function() {
									if ("object" != typeof r.a.Event)
											try {
													u = new r.a.Event("change")
											} catch (e) {}
									u || (u = s.a.createEvent("Event")).initEvent("change", !0, !0),
									o.dispatchEvent(u)
							}
							));
							return n.handleTracksChange(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.handleClick = function(t) {
							var i = this.track
								, n = this.player_.textTracks();
							if (e.prototype.handleClick.call(this, t),
							n)
									for (var r = 0; r < n.length; r++) {
											var a = n[r];
											-1 !== this.kinds.indexOf(a.kind) && (a === i ? "showing" !== a.mode && (a.mode = "showing") : "disabled" !== a.mode && (a.mode = "disabled"))
									}
					}
					,
					i.handleTracksChange = function(e) {
							var t = "showing" === this.track.mode;
							t !== this.isSelected_ && this.selected(t)
					}
					,
					i.handleSelectedLanguageChange = function(e) {
							if ("showing" === this.track.mode) {
									var t = this.player_.cache_.selectedLanguage;
									if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind)
											return;
									this.player_.cache_.selectedLanguage = {
											enabled: !0,
											language: this.track.language,
											kind: this.track.kind
									}
							}
					}
					,
					i.dispose = function() {
							this.track = null,
							e.prototype.dispose.call(this)
					}
					,
					t
			}(Rr);
			vi.registerComponent("TextTrackMenuItem", Nr);
			var Ur = function(e) {
					function t(t, i) {
							return i.track = {
									player: t,
									kind: i.kind,
									kinds: i.kinds,
									default: !1,
									mode: "disabled"
							},
							i.kinds || (i.kinds = [i.kind]),
							i.label ? i.track.label = i.label : i.track.label = i.kinds.join(" and ") + " off",
							i.selectable = !0,
							i.multiSelectable = !1,
							e.call(this, t, i) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.handleTracksChange = function(e) {
							for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
									var a = t[n];
									if (this.options_.kinds.indexOf(a.kind) > -1 && "showing" === a.mode) {
											i = !1;
											break
									}
							}
							i !== this.isSelected_ && this.selected(i)
					}
					,
					i.handleSelectedLanguageChange = function(e) {
							for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
									var a = t[n];
									if (["captions", "descriptions", "subtitles"].indexOf(a.kind) > -1 && "showing" === a.mode) {
											i = !1;
											break
									}
							}
							i && (this.player_.cache_.selectedLanguage = {
									enabled: !1
							})
					}
					,
					t
			}(Nr);
			vi.registerComponent("OffTextTrackMenuItem", Ur);
			var Mr = function(e) {
					function t(t, i) {
							return void 0 === i && (i = {}),
							i.tracks = t.textTracks(),
							e.call(this, t, i) || this
					}
					return d()(t, e),
					t.prototype.createItems = function(e, t) {
							var i;
							void 0 === e && (e = []),
							void 0 === t && (t = Nr),
							this.label_ && (i = this.label_ + " off"),
							e.push(new Ur(this.player_,{
									kinds: this.kinds_,
									kind: this.kind_,
									label: i
							})),
							this.hideThreshold_ += 1;
							var n = this.player_.textTracks();
							Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
							for (var r = 0; r < n.length; r++) {
									var a = n[r];
									if (this.kinds_.indexOf(a.kind) > -1) {
											var s = new t(this.player_,{
													track: a,
													kinds: this.kinds_,
													kind: this.kind_,
													selectable: !0,
													multiSelectable: !1
											});
											s.addClass("vjs-" + a.kind + "-menu-item"),
											e.push(s)
									}
							}
							return e
					}
					,
					t
			}(Lr);
			vi.registerComponent("TextTrackButton", Mr);
			var jr = function(e) {
					function t(t, i) {
							var n, r = i.track, a = i.cue, s = t.currentTime();
							return i.selectable = !0,
							i.multiSelectable = !1,
							i.label = a.text,
							i.selected = a.startTime <= s && s < a.endTime,
							(n = e.call(this, t, i) || this).track = r,
							n.cue = a,
							r.addEventListener("cuechange", ei(c()(n), n.update)),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.handleClick = function(t) {
							e.prototype.handleClick.call(this),
							this.player_.currentTime(this.cue.startTime),
							this.update(this.cue.startTime)
					}
					,
					i.update = function(e) {
							var t = this.cue
								, i = this.player_.currentTime();
							this.selected(t.startTime <= i && i < t.endTime)
					}
					,
					t
			}(Rr);
			vi.registerComponent("ChaptersTrackMenuItem", jr);
			var Br = function(e) {
					function t(t, i, n) {
							return e.call(this, t, i, n) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-chapters-button " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.buildWrapperCSSClass = function() {
							return "vjs-chapters-button " + e.prototype.buildWrapperCSSClass.call(this)
					}
					,
					i.update = function(t) {
							this.track_ && (!t || "addtrack" !== t.type && "removetrack" !== t.type) || this.setTrack(this.findChaptersTrack()),
							e.prototype.update.call(this)
					}
					,
					i.setTrack = function(e) {
							if (this.track_ !== e) {
									if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)),
									this.track_) {
											var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
											t && t.removeEventListener("load", this.updateHandler_),
											this.track_ = null
									}
									if (this.track_ = e,
									this.track_) {
											this.track_.mode = "hidden";
											var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
											i && i.addEventListener("load", this.updateHandler_)
									}
							}
					}
					,
					i.findChaptersTrack = function() {
							for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
									var i = e[t];
									if (i.kind === this.kind_)
											return i
							}
					}
					,
					i.getMenuCaption = function() {
							return this.track_ && this.track_.label ? this.track_.label : this.localize(mi(this.kind_))
					}
					,
					i.createMenu = function() {
							return this.options_.title = this.getMenuCaption(),
							e.prototype.createMenu.call(this)
					}
					,
					i.createItems = function() {
							var e = [];
							if (!this.track_)
									return e;
							var t = this.track_.cues;
							if (!t)
									return e;
							for (var i = 0, n = t.length; i < n; i++) {
									var r = t[i]
										, a = new jr(this.player_,{
											track: this.track_,
											cue: r
									});
									e.push(a)
							}
							return e
					}
					,
					t
			}(Mr);
			Br.prototype.kind_ = "chapters",
			Br.prototype.controlText_ = "Chapters",
			vi.registerComponent("ChaptersButton", Br);
			var Fr = function(e) {
					function t(t, i, n) {
							var r;
							r = e.call(this, t, i, n) || this;
							var a = t.textTracks()
								, s = ei(c()(r), r.handleTracksChange);
							return a.addEventListener("change", s),
							r.on("dispose", (function() {
									a.removeEventListener("change", s)
							}
							)),
							r
					}
					d()(t, e);
					var i = t.prototype;
					return i.handleTracksChange = function(e) {
							for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) {
									var a = t[n];
									if (a.kind !== this.kind_ && "showing" === a.mode) {
											i = !0;
											break
									}
							}
							i ? this.disable() : this.enable()
					}
					,
					i.buildCSSClass = function() {
							return "vjs-descriptions-button " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.buildWrapperCSSClass = function() {
							return "vjs-descriptions-button " + e.prototype.buildWrapperCSSClass.call(this)
					}
					,
					t
			}(Mr);
			Fr.prototype.kind_ = "descriptions",
			Fr.prototype.controlText_ = "Descriptions",
			vi.registerComponent("DescriptionsButton", Fr);
			var qr = function(e) {
					function t(t, i, n) {
							return e.call(this, t, i, n) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-subtitles-button " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.buildWrapperCSSClass = function() {
							return "vjs-subtitles-button " + e.prototype.buildWrapperCSSClass.call(this)
					}
					,
					t
			}(Mr);
			qr.prototype.kind_ = "subtitles",
			qr.prototype.controlText_ = "Subtitles",
			vi.registerComponent("SubtitlesButton", qr);
			var Hr = function(e) {
					function t(t, i) {
							var n;
							return i.track = {
									player: t,
									kind: i.kind,
									label: i.kind + " settings",
									selectable: !1,
									default: !1,
									mode: "disabled"
							},
							i.selectable = !1,
							i.name = "CaptionSettingsMenuItem",
							(n = e.call(this, t, i) || this).addClass("vjs-texttrack-settings"),
							n.controlText(", opens " + i.kind + " settings dialog"),
							n
					}
					return d()(t, e),
					t.prototype.handleClick = function(e) {
							this.player().getChild("textTrackSettings").open()
					}
					,
					t
			}(Nr);
			vi.registerComponent("CaptionSettingsMenuItem", Hr);
			var Vr = function(e) {
					function t(t, i, n) {
							return e.call(this, t, i, n) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-captions-button " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.buildWrapperCSSClass = function() {
							return "vjs-captions-button " + e.prototype.buildWrapperCSSClass.call(this)
					}
					,
					i.createItems = function() {
							var t = [];
							return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Hr(this.player_,{
									kind: this.kind_
							})),
							this.hideThreshold_ += 1),
							e.prototype.createItems.call(this, t)
					}
					,
					t
			}(Mr);
			Vr.prototype.kind_ = "captions",
			Vr.prototype.controlText_ = "Captions",
			vi.registerComponent("CaptionsButton", Vr);
			var Wr = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					return d()(t, e),
					t.prototype.createEl = function(t, i, n) {
							var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
							return "captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "),
							r += "</span>",
							e.prototype.createEl.call(this, t, Ke({
									innerHTML: r
							}, i), n)
					}
					,
					t
			}(Nr);
			vi.registerComponent("SubsCapsMenuItem", Wr);
			var zr = function(e) {
					function t(t, i) {
							var n;
							return void 0 === i && (i = {}),
							(n = e.call(this, t, i) || this).label_ = "subtitles",
							["en", "en-us", "en-ca", "fr-ca"].indexOf(n.player_.language_) > -1 && (n.label_ = "captions"),
							n.menuButton_.controlText(mi(n.label_)),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-subs-caps-button " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.buildWrapperCSSClass = function() {
							return "vjs-subs-caps-button " + e.prototype.buildWrapperCSSClass.call(this)
					}
					,
					i.createItems = function() {
							var t = [];
							return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Hr(this.player_,{
									kind: this.label_
							})),
							this.hideThreshold_ += 1),
							t = e.prototype.createItems.call(this, t, Wr)
					}
					,
					t
			}(Mr);
			zr.prototype.kinds_ = ["captions", "subtitles"],
			zr.prototype.controlText_ = "Subtitles",
			vi.registerComponent("SubsCapsButton", zr);
			var Gr = function(e) {
					function t(t, i) {
							var n, r = i.track, a = t.audioTracks();
							i.label = r.label || r.language || "Unknown",
							i.selected = r.enabled,
							(n = e.call(this, t, i) || this).track = r,
							n.addClass("vjs-" + r.kind + "-menu-item");
							var s = function() {
									for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
											t[i] = arguments[i];
									n.handleTracksChange.apply(c()(n), t)
							};
							return a.addEventListener("change", s),
							n.on("dispose", (function() {
									a.removeEventListener("change", s)
							}
							)),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function(t, i, n) {
							var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
							return "main-desc" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "),
							r += "</span>",
							e.prototype.createEl.call(this, t, Ke({
									innerHTML: r
							}, i), n)
					}
					,
					i.handleClick = function(t) {
							var i = this.player_.audioTracks();
							e.prototype.handleClick.call(this, t);
							for (var n = 0; n < i.length; n++) {
									var r = i[n];
									r.enabled = r === this.track
							}
					}
					,
					i.handleTracksChange = function(e) {
							this.selected(this.track.enabled)
					}
					,
					t
			}(Rr);
			vi.registerComponent("AudioTrackMenuItem", Gr);
			var Yr = function(e) {
					function t(t, i) {
							return void 0 === i && (i = {}),
							i.tracks = t.audioTracks(),
							e.call(this, t, i) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-audio-button " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.buildWrapperCSSClass = function() {
							return "vjs-audio-button " + e.prototype.buildWrapperCSSClass.call(this)
					}
					,
					i.createItems = function(e) {
							void 0 === e && (e = []),
							this.hideThreshold_ = 1;
							for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
									var n = t[i];
									e.push(new Gr(this.player_,{
											track: n,
											selectable: !0,
											multiSelectable: !1
									}))
							}
							return e
					}
					,
					t
			}(Lr);
			Yr.prototype.controlText_ = "Audio Track",
			vi.registerComponent("AudioTrackButton", Yr);
			var Xr = function(e) {
					function t(t, i) {
							var n, r = i.rate, a = parseFloat(r, 10);
							return i.label = r,
							i.selected = 1 === a,
							i.selectable = !0,
							i.multiSelectable = !1,
							(n = e.call(this, t, i) || this).label = r,
							n.rate = a,
							n.on(t, "ratechange", n.update),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.handleClick = function(t) {
							e.prototype.handleClick.call(this),
							this.player().playbackRate(this.rate)
					}
					,
					i.update = function(e) {
							this.selected(this.player().playbackRate() === this.rate)
					}
					,
					t
			}(Rr);
			Xr.prototype.contentElType = "button",
			vi.registerComponent("PlaybackRateMenuItem", Xr);
			var Kr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).updateVisibility(),
							n.updateLabel(),
							n.on(t, "loadstart", n.updateVisibility),
							n.on(t, "ratechange", n.updateLabel),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							var t = e.prototype.createEl.call(this);
							return this.labelEl_ = at("div", {
									className: "vjs-playback-rate-value",
									innerHTML: "1x"
							}),
							t.appendChild(this.labelEl_),
							t
					}
					,
					i.dispose = function() {
							this.labelEl_ = null,
							e.prototype.dispose.call(this)
					}
					,
					i.buildCSSClass = function() {
							return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.buildWrapperCSSClass = function() {
							return "vjs-playback-rate " + e.prototype.buildWrapperCSSClass.call(this)
					}
					,
					i.createMenu = function() {
							var e = new Pr(this.player())
								, t = this.playbackRates();
							if (t)
									for (var i = t.length - 1; i >= 0; i--)
											e.addChild(new Xr(this.player(),{
													rate: t[i] + "x"
											}));
							return e
					}
					,
					i.updateARIAAttributes = function() {
							this.el().setAttribute("aria-valuenow", this.player().playbackRate())
					}
					,
					i.handleClick = function(e) {
							for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
									if (i[r] > t) {
											n = i[r];
											break
									}
							this.player().playbackRate(n)
					}
					,
					i.playbackRates = function() {
							return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
					}
					,
					i.playbackRateSupported = function() {
							return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
					}
					,
					i.updateVisibility = function(e) {
							this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
					}
					,
					i.updateLabel = function(e) {
							this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
					}
					,
					t
			}(Ir);
			Kr.prototype.controlText_ = "Playback Rate",
			vi.registerComponent("PlaybackRateMenuButton", Kr);
			var $r = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: this.buildCSSClass()
							})
					}
					,
					t
			}(vi);
			vi.registerComponent("Spacer", $r);
			var Qr = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.createEl = function() {
							var t = e.prototype.createEl.call(this, {
									className: this.buildCSSClass()
							});
							return t.innerHTML = " ",
							t
					}
					,
					t
			}($r);
			vi.registerComponent("CustomControlSpacer", Qr);
			var Jr = function(e) {
					function t() {
							return e.apply(this, arguments) || this
					}
					return d()(t, e),
					t.prototype.createEl = function() {
							return e.prototype.createEl.call(this, "div", {
									className: "vjs-control-bar",
									dir: "ltr"
							})
					}
					,
					t
			}(vi);
			Jr.prototype.options_ = {
					children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
			},
			"exitPictureInPicture"in s.a && Jr.prototype.options_.children.splice(Jr.prototype.options_.children.length - 1, 0, "pictureInPictureToggle"),
			vi.registerComponent("ControlBar", Jr);
			var Zr = function(e) {
					function t(t, i) {
							var n;
							return (n = e.call(this, t, i) || this).on(t, "error", n.open),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.buildCSSClass = function() {
							return "vjs-error-display " + e.prototype.buildCSSClass.call(this)
					}
					,
					i.content = function() {
							var e = this.player().error();
							return e ? this.localize(e.message) : ""
					}
					,
					t
			}(rn);
			Zr.prototype.options_ = u()({}, rn.prototype.options_, {
					pauseOnOpen: !1,
					fillAlways: !0,
					temporary: !1,
					uncloseable: !0
			}),
			vi.registerComponent("ErrorDisplay", Zr);
			var ea = ["#000", "Black"]
				, ta = ["#00F", "Blue"]
				, ia = ["#0FF", "Cyan"]
				, na = ["#0F0", "Green"]
				, ra = ["#F0F", "Magenta"]
				, aa = ["#F00", "Red"]
				, sa = ["#FFF", "White"]
				, oa = ["#FF0", "Yellow"]
				, ua = ["1", "Opaque"]
				, la = ["0.5", "Semi-Transparent"]
				, ca = ["0", "Transparent"]
				, ha = {
					backgroundColor: {
							selector: ".vjs-bg-color > select",
							id: "captions-background-color-%s",
							label: "Color",
							options: [ea, sa, aa, na, ta, oa, ra, ia]
					},
					backgroundOpacity: {
							selector: ".vjs-bg-opacity > select",
							id: "captions-background-opacity-%s",
							label: "Transparency",
							options: [ua, la, ca]
					},
					color: {
							selector: ".vjs-fg-color > select",
							id: "captions-foreground-color-%s",
							label: "Color",
							options: [sa, ea, aa, na, ta, oa, ra, ia]
					},
					edgeStyle: {
							selector: ".vjs-edge-style > select",
							id: "%s",
							label: "Text Edge Style",
							options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
					},
					fontFamily: {
							selector: ".vjs-font-family > select",
							id: "captions-font-family-%s",
							label: "Font Family",
							options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
					},
					fontPercent: {
							selector: ".vjs-font-percent > select",
							id: "captions-font-size-%s",
							label: "Font Size",
							options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
							default: 2,
							parser: function(e) {
									return "1.00" === e ? null : Number(e)
							}
					},
					textOpacity: {
							selector: ".vjs-text-opacity > select",
							id: "captions-foreground-opacity-%s",
							label: "Transparency",
							options: [ua, la]
					},
					windowColor: {
							selector: ".vjs-window-color > select",
							id: "captions-window-color-%s",
							label: "Color"
					},
					windowOpacity: {
							selector: ".vjs-window-opacity > select",
							id: "captions-window-opacity-%s",
							label: "Transparency",
							options: [ca, la, ua]
					}
			};
			function da(e, t) {
					if (t && (e = t(e)),
					e && "none" !== e)
							return e
			}
			ha.windowColor.options = ha.backgroundColor.options;
			var pa = function(e) {
					function t(t, i) {
							var n;
							return i.temporary = !1,
							(n = e.call(this, t, i) || this).updateDisplay = ei(c()(n), n.updateDisplay),
							n.fill(),
							n.hasBeenOpened_ = n.hasBeenFilled_ = !0,
							n.endDialog = at("p", {
									className: "vjs-control-text",
									textContent: n.localize("End of dialog window.")
							}),
							n.el().appendChild(n.endDialog),
							n.setDefaults(),
							void 0 === i.persistTextTrackSettings && (n.options_.persistTextTrackSettings = n.options_.playerOptions.persistTextTrackSettings),
							n.on(n.$(".vjs-done-button"), "click", (function() {
									n.saveSettings(),
									n.close()
							}
							)),
							n.on(n.$(".vjs-default-button"), "click", (function() {
									n.setDefaults(),
									n.updateDisplay()
							}
							)),
							Xe(ha, (function(e) {
									n.on(n.$(e.selector), "change", n.updateDisplay)
							}
							)),
							n.options_.persistTextTrackSettings && n.restoreSettings(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.dispose = function() {
							this.endDialog = null,
							e.prototype.dispose.call(this)
					}
					,
					i.createElSelect_ = function(e, t, i) {
							var n = this;
							void 0 === t && (t = ""),
							void 0 === i && (i = "label");
							var r = ha[e]
								, a = r.id.replace("%s", this.id_)
								, s = [t, a].join(" ").trim();
							return ["<" + i + ' id="' + a + '" class="' + ("label" === i ? "vjs-label" : "") + '">', this.localize(r.label), "</" + i + ">", '<select aria-labelledby="' + s + '">'].concat(r.options.map((function(e) {
									var t = a + "-" + e[1].replace(/\W+/g, "");
									return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + s + " " + t + '">', n.localize(e[1]), "</option>"].join("")
							}
							))).concat("</select>").join("")
					}
					,
					i.createElFgColor_ = function() {
							var e = "captions-text-legend-" + this.id_;
							return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
					}
					,
					i.createElBgColor_ = function() {
							var e = "captions-background-" + this.id_;
							return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
					}
					,
					i.createElWinColor_ = function() {
							var e = "captions-window-" + this.id_;
							return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
					}
					,
					i.createElColors_ = function() {
							return at("div", {
									className: "vjs-track-settings-colors",
									innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
							})
					}
					,
					i.createElFont_ = function() {
							return at("div", {
									className: "vjs-track-settings-font",
									innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
							})
					}
					,
					i.createElControls_ = function() {
							var e = this.localize("restore all settings to the default values");
							return at("div", {
									className: "vjs-track-settings-controls",
									innerHTML: ['<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
							})
					}
					,
					i.content = function() {
							return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
					}
					,
					i.label = function() {
							return this.localize("Caption Settings Dialog")
					}
					,
					i.description = function() {
							return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
					}
					,
					i.buildCSSClass = function() {
							return e.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
					}
					,
					i.getValues = function() {
							var e, t, i, n = this;
							return t = function(e, t, i) {
									var r, a, s = (r = n.$(t.selector),
									a = t.parser,
									da(r.options[r.options.selectedIndex].value, a));
									return void 0 !== s && (e[i] = s),
									e
							}
							,
							void 0 === (i = {}) && (i = 0),
							Ye(e = ha).reduce((function(i, n) {
									return t(i, e[n], n)
							}
							), i)
					}
					,
					i.setValues = function(e) {
							var t = this;
							Xe(ha, (function(i, n) {
									!function(e, t, i) {
											if (t)
													for (var n = 0; n < e.options.length; n++)
															if (da(e.options[n].value, i) === t) {
																	e.selectedIndex = n;
																	break
															}
									}(t.$(i.selector), e[n], i.parser)
							}
							))
					}
					,
					i.setDefaults = function() {
							var e = this;
							Xe(ha, (function(t) {
									var i = t.hasOwnProperty("default") ? t.default : 0;
									e.$(t.selector).selectedIndex = i
							}
							))
					}
					,
					i.restoreSettings = function() {
							var e;
							try {
									e = JSON.parse(r.a.localStorage.getItem("vjs-text-track-settings"))
							} catch (e) {
									We.warn(e)
							}
							e && this.setValues(e)
					}
					,
					i.saveSettings = function() {
							if (this.options_.persistTextTrackSettings) {
									var e = this.getValues();
									try {
											Object.keys(e).length ? r.a.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e)) : r.a.localStorage.removeItem("vjs-text-track-settings")
									} catch (e) {
											We.warn(e)
									}
							}
					}
					,
					i.updateDisplay = function() {
							var e = this.player_.getChild("textTrackDisplay");
							e && e.updateDisplay()
					}
					,
					i.conditionalBlur_ = function() {
							this.previouslyActiveEl_ = null;
							var e = this.player_.controlBar
								, t = e && e.subsCapsButton
								, i = e && e.captionsButton;
							t ? t.focus() : i && i.focus()
					}
					,
					t
			}(rn);
			vi.registerComponent("TextTrackSettings", pa);
			var fa = function(e) {
					function t(t, i) {
							var n, a = i.ResizeObserver || r.a.ResizeObserver;
							null === i.ResizeObserver && (a = !1);
							var s = gi({
									createEl: !a,
									reportTouchActivity: !1
							}, i);
							return (n = e.call(this, t, s) || this).ResizeObserver = i.ResizeObserver || r.a.ResizeObserver,
							n.loadListener_ = null,
							n.resizeObserver_ = null,
							n.debouncedHandler_ = function(e, t, i, n) {
									var a;
									void 0 === n && (n = r.a);
									var s = function() {
											var r = this
												, s = arguments
												, o = function() {
													a = null,
													o = null,
													i || e.apply(r, s)
											};
											!a && i && e.apply(r, s),
											n.clearTimeout(a),
											a = n.setTimeout(o, t)
									};
									return s.cancel = function() {
											n.clearTimeout(a),
											a = null
									}
									,
									s
							}((function() {
									n.resizeHandler()
							}
							), 100, !1, c()(n)),
							a ? (n.resizeObserver_ = new n.ResizeObserver(n.debouncedHandler_),
							n.resizeObserver_.observe(t.el())) : (n.loadListener_ = function() {
									if (n.el_ && n.el_.contentWindow) {
											var e = n.debouncedHandler_
												, t = n.unloadListener_ = function() {
													Xt(this, "resize", e),
													Xt(this, "unload", t),
													t = null
											}
											;
											Yt(n.el_.contentWindow, "unload", t),
											Yt(n.el_.contentWindow, "resize", e)
									}
							}
							,
							n.one("load", n.loadListener_)),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.createEl = function() {
							return e.prototype.createEl.call(this, "iframe", {
									className: "vjs-resize-manager",
									tabIndex: -1
							}, {
									"aria-hidden": "true"
							})
					}
					,
					i.resizeHandler = function() {
							this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
					}
					,
					i.dispose = function() {
							this.debouncedHandler_ && this.debouncedHandler_.cancel(),
							this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()),
							this.resizeObserver_.disconnect()),
							this.loadListener_ && this.off("load", this.loadListener_),
							this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow),
							this.ResizeObserver = null,
							this.resizeObserver = null,
							this.debouncedHandler_ = null,
							this.loadListener_ = null,
							e.prototype.dispose.call(this)
					}
					,
					t
			}(vi);
			vi.registerComponent("ResizeManager", fa);
			var ma = function(e) {
					function t(t, i) {
							var n, r = gi({
									createEl: !1
							}, i);
							return (n = e.call(this, t, r) || this).reset_(),
							n.on(n.player_, "durationchange", n.handleDurationchange),
							Ii && "hidden"in s.a && "visibilityState"in s.a && n.on(s.a, "visibilitychange", n.handleVisibilityChange),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.handleVisibilityChange = function() {
							this.player_.duration() === 1 / 0 && (s.a.hidden ? this.stopTracking() : this.startTracking())
					}
					,
					i.isBehind_ = function() {
							if (!this.timeupdateSeen_)
									return !1;
							var e = this.liveCurrentTime()
								, t = this.player_.currentTime()
								, i = 2 * this.seekableIncrement_ + .07;
							return e !== 1 / 0 && e - i >= t
					}
					,
					i.trackLive_ = function() {
							this.pastSeekEnd_ = this.pastSeekEnd_;
							var e = this.player_.seekable();
							if (e && e.length) {
									var t, i, n, r = this.seekableEnd();
									r !== this.lastSeekEnd_ && (this.lastSeekEnd_ && (this.seekableIncrementList_ = this.seekableIncrementList_.slice(-11),
									this.seekableIncrementList_.push(Math.abs(r - this.lastSeekEnd_)),
									this.seekableIncrementList_.length > 3 && (this.seekableIncrement_ = (t = this.seekableIncrementList_,
									i = Math.floor(t.length / 2),
									n = [].concat(t).sort((function(e, t) {
											return e - t
									}
									)),
									t.length % 2 != 0 ? n[i] : (n[i - 1] + n[i]) / 2))),
									this.pastSeekEnd_ = 0,
									this.lastSeekEnd_ = r,
									this.trigger("seekableendchange")),
									this.pastSeekEnd() > 1.5 * this.seekableIncrement_ ? this.pastSeekEnd_ = 0 : this.pastSeekEnd_ = this.pastSeekEnd() + .03,
									this.isBehind_() !== this.behindLiveEdge() && (this.behindLiveEdge_ = this.isBehind_(),
									this.trigger("liveedgechange"))
							}
					}
					,
					i.handleDurationchange = function() {
							this.player_.duration() === 1 / 0 ? this.startTracking() : this.stopTracking()
					}
					,
					i.startTracking = function() {
							var e = this;
							this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()),
							this.trackingInterval_ = this.setInterval(this.trackLive_, 30),
							this.trackLive_(),
							this.on(this.player_, "play", this.trackLive_),
							this.on(this.player_, "pause", this.trackLive_),
							this.timeupdateSeen_ || (this.one(this.player_, "play", this.handlePlay),
							this.handleTimeupdate = function() {
									e.timeupdateSeen_ = !0,
									e.handleTimeupdate = null
							}
							,
							this.one(this.player_, "timeupdate", this.handleTimeupdate)))
					}
					,
					i.handlePlay = function() {
							this.one(this.player_, "timeupdate", this.seekToLiveEdge)
					}
					,
					i.reset_ = function() {
							this.pastSeekEnd_ = 0,
							this.lastSeekEnd_ = null,
							this.behindLiveEdge_ = null,
							this.timeupdateSeen_ = !1,
							this.clearInterval(this.trackingInterval_),
							this.trackingInterval_ = null,
							this.seekableIncrement_ = 12,
							this.seekableIncrementList_ = [],
							this.off(this.player_, "play", this.trackLive_),
							this.off(this.player_, "pause", this.trackLive_),
							this.off(this.player_, "play", this.handlePlay),
							this.off(this.player_, "timeupdate", this.seekToLiveEdge),
							this.handleTimeupdate && (this.off(this.player_, "timeupdate", this.handleTimeupdate),
							this.handleTimeupdate = null)
					}
					,
					i.stopTracking = function() {
							this.isTracking() && this.reset_()
					}
					,
					i.seekableEnd = function() {
							for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--; )
									t.push(e.end(i));
							return t.length ? t.sort()[t.length - 1] : 1 / 0
					}
					,
					i.seekableStart = function() {
							for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--; )
									t.push(e.start(i));
							return t.length ? t.sort()[0] : 0
					}
					,
					i.liveWindow = function() {
							var e = this.liveCurrentTime();
							return e === 1 / 0 ? 1 / 0 : e - this.seekableStart()
					}
					,
					i.isLive = function() {
							return this.isTracking()
					}
					,
					i.atLiveEdge = function() {
							return !this.behindLiveEdge()
					}
					,
					i.liveCurrentTime = function() {
							return this.pastSeekEnd() + this.seekableEnd()
					}
					,
					i.pastSeekEnd = function() {
							return this.pastSeekEnd_
					}
					,
					i.behindLiveEdge = function() {
							return this.behindLiveEdge_
					}
					,
					i.isTracking = function() {
							return "number" == typeof this.trackingInterval_
					}
					,
					i.seekToLiveEdge = function() {
							this.atLiveEdge() || (this.player_.currentTime(this.liveCurrentTime()),
							this.player_.paused() && this.player_.play())
					}
					,
					i.dispose = function() {
							this.stopTracking(),
							e.prototype.dispose.call(this)
					}
					,
					t
			}(vi);
			vi.registerComponent("LiveTracker", ma);
			var ga, va = function(e) {
					var t = e.el();
					if (t.hasAttribute("src"))
							return e.triggerSourceset(t.src),
							!0;
					var i = e.$$("source")
						, n = []
						, r = "";
					if (!i.length)
							return !1;
					for (var a = 0; a < i.length; a++) {
							var s = i[a].src;
							s && -1 === n.indexOf(s) && n.push(s)
					}
					return !!n.length && (1 === n.length && (r = n[0]),
					e.triggerSourceset(r),
					!0)
			}, ya = Object.defineProperty({}, "innerHTML", {
					get: function() {
							return this.cloneNode(!0).innerHTML
					},
					set: function(e) {
							var t = s.a.createElement(this.nodeName.toLowerCase());
							t.innerHTML = e;
							for (var i = s.a.createDocumentFragment(); t.childNodes.length; )
									i.appendChild(t.childNodes[0]);
							return this.innerText = "",
							r.a.Element.prototype.appendChild.call(this, i),
							this.innerHTML
					}
			}), _a = function(e, t) {
					for (var i = {}, n = 0; n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get); n++)
							;
					return i.enumerable = !0,
					i.configurable = !0,
					i
			}, ba = function(e) {
					var t = e.el();
					if (!t.resetSourceWatch_) {
							var i = {}
								, n = function(e) {
									return _a([e.el(), r.a.HTMLMediaElement.prototype, r.a.Element.prototype, ya], "innerHTML")
							}(e)
								, a = function(i) {
									return function() {
											for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
													r[a] = arguments[a];
											var s = i.apply(t, r);
											return va(e),
											s
									}
							};
							["append", "appendChild", "insertAdjacentHTML"].forEach((function(e) {
									t[e] && (i[e] = t[e],
									t[e] = a(i[e]))
							}
							)),
							Object.defineProperty(t, "innerHTML", gi(n, {
									set: a(n.set)
							})),
							t.resetSourceWatch_ = function() {
									t.resetSourceWatch_ = null,
									Object.keys(i).forEach((function(e) {
											t[e] = i[e]
									}
									)),
									Object.defineProperty(t, "innerHTML", n)
							}
							,
							e.one("sourceset", t.resetSourceWatch_)
					}
			}, Ta = Object.defineProperty({}, "src", {
					get: function() {
							return this.hasAttribute("src") ? bn(r.a.Element.prototype.getAttribute.call(this, "src")) : ""
					},
					set: function(e) {
							return r.a.Element.prototype.setAttribute.call(this, "src", e),
							e
					}
			}), Sa = function(e) {
					if (e.featuresSourceset) {
							var t = e.el();
							if (!t.resetSourceset_) {
									var i = function(e) {
											return _a([e.el(), r.a.HTMLMediaElement.prototype, Ta], "src")
									}(e)
										, n = t.setAttribute
										, a = t.load;
									Object.defineProperty(t, "src", gi(i, {
											set: function(n) {
													var r = i.set.call(t, n);
													return e.triggerSourceset(t.src),
													r
											}
									})),
									t.setAttribute = function(i, r) {
											var a = n.call(t, i, r);
											return /src/i.test(i) && e.triggerSourceset(t.src),
											a
									}
									,
									t.load = function() {
											var i = a.call(t);
											return va(e) || (e.triggerSourceset(""),
											ba(e)),
											i
									}
									,
									t.currentSrc ? e.triggerSourceset(t.currentSrc) : va(e) || ba(e),
									t.resetSourceset_ = function() {
											t.resetSourceset_ = null,
											t.load = a,
											t.setAttribute = n,
											Object.defineProperty(t, "src", i),
											t.resetSourceWatch_ && t.resetSourceWatch_()
									}
							}
					}
			}, wa = function(e, t, i, n) {
					void 0 === n && (n = !0);
					var r = function(i) {
							return Object.defineProperty(e, t, {
									value: i,
									enumerable: !0,
									writable: !0
							})
					}
						, a = {
							configurable: !0,
							enumerable: !0,
							get: function() {
									var e = i();
									return r(e),
									e
							}
					};
					return n && (a.set = r),
					Object.defineProperty(e, t, a)
			}, ka = function(e) {
					function t(t, i) {
							var n;
							n = e.call(this, t, i) || this;
							var r = t.source
								, a = !1;
							if (r && (n.el_.currentSrc !== r.src || t.tag && 3 === t.tag.initNetworkState_) ? n.setSource(r) : n.handleLateInit_(n.el_),
							t.enableSourceset && n.setupSourcesetHandling_(),
							n.el_.hasChildNodes()) {
									for (var s = n.el_.childNodes, o = s.length, u = []; o--; ) {
											var l = s[o];
											"track" === l.nodeName.toLowerCase() && (n.featuresNativeTextTracks ? (n.remoteTextTrackEls().addTrackElement_(l),
											n.remoteTextTracks().addTrack(l.track),
											n.textTracks().addTrack(l.track),
											a || n.el_.hasAttribute("crossorigin") || !Sn(l.src) || (a = !0)) : u.push(l))
									}
									for (var c = 0; c < u.length; c++)
											n.el_.removeChild(u[c])
							}
							return n.proxyNativeTracks_(),
							n.featuresNativeTextTracks && a && We.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."),
							n.restoreMetadataTracksInIOSNativePlayer_(),
							(Ri || Ui || Ci) && !0 === t.nativeControlsForTouch && n.setControls(!0),
							n.proxyWebkitFullscreen_(),
							n.triggerReady(),
							n
					}
					d()(t, e);
					var i = t.prototype;
					return i.dispose = function() {
							this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(),
							t.disposeMediaElement(this.el_),
							this.options_ = null,
							e.prototype.dispose.call(this)
					}
					,
					i.setupSourcesetHandling_ = function() {
							Sa(this)
					}
					,
					i.restoreMetadataTracksInIOSNativePlayer_ = function() {
							var e, t = this.textTracks(), i = function() {
									e = [];
									for (var i = 0; i < t.length; i++) {
											var n = t[i];
											"metadata" === n.kind && e.push({
													track: n,
													storedMode: n.mode
											})
									}
							};
							i(),
							t.addEventListener("change", i),
							this.on("dispose", (function() {
									return t.removeEventListener("change", i)
							}
							));
							var n = function i() {
									for (var n = 0; n < e.length; n++) {
											var r = e[n];
											"disabled" === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
									}
									t.removeEventListener("change", i)
							};
							this.on("webkitbeginfullscreen", (function() {
									t.removeEventListener("change", i),
									t.removeEventListener("change", n),
									t.addEventListener("change", n)
							}
							)),
							this.on("webkitendfullscreen", (function() {
									t.removeEventListener("change", i),
									t.addEventListener("change", i),
									t.removeEventListener("change", n)
							}
							))
					}
					,
					i.overrideNative_ = function(e, t) {
							var i = this;
							if (t === this["featuresNative" + e + "Tracks"]) {
									var n = e.toLowerCase();
									this[n + "TracksListeners_"] && Object.keys(this[n + "TracksListeners_"]).forEach((function(e) {
											i.el()[n + "Tracks"].removeEventListener(e, i[n + "TracksListeners_"][e])
									}
									)),
									this["featuresNative" + e + "Tracks"] = !t,
									this[n + "TracksListeners_"] = null,
									this.proxyNativeTracksForType_(n)
							}
					}
					,
					i.overrideNativeAudioTracks = function(e) {
							this.overrideNative_("Audio", e)
					}
					,
					i.overrideNativeVideoTracks = function(e) {
							this.overrideNative_("Video", e)
					}
					,
					i.proxyNativeTracksForType_ = function(e) {
							var t = this
								, i = Pn[e]
								, n = this.el()[i.getterName]
								, r = this[i.getterName]();
							if (this["featuresNative" + i.capitalName + "Tracks"] && n && n.addEventListener) {
									var a = {
											change: function(e) {
													r.trigger({
															type: "change",
															target: r,
															currentTarget: r,
															srcElement: r
													})
											},
											addtrack: function(e) {
													r.addTrack(e.track)
											},
											removetrack: function(e) {
													r.removeTrack(e.track)
											}
									}
										, s = function() {
											for (var e = [], t = 0; t < r.length; t++) {
													for (var i = !1, a = 0; a < n.length; a++)
															if (n[a] === r[t]) {
																	i = !0;
																	break
															}
													i || e.push(r[t])
											}
											for (; e.length; )
													r.removeTrack(e.shift())
									};
									this[i.getterName + "Listeners_"] = a,
									Object.keys(a).forEach((function(e) {
											var i = a[e];
											n.addEventListener(e, i),
											t.on("dispose", (function(t) {
													return n.removeEventListener(e, i)
											}
											))
									}
									)),
									this.on("loadstart", s),
									this.on("dispose", (function(e) {
											return t.off("loadstart", s)
									}
									))
							}
					}
					,
					i.proxyNativeTracks_ = function() {
							var e = this;
							Pn.names.forEach((function(t) {
									e.proxyNativeTracksForType_(t)
							}
							))
					}
					,
					i.createEl = function() {
							var e = this.options_.tag;
							if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
									if (e) {
											var i = e.cloneNode(!0);
											e.parentNode && e.parentNode.insertBefore(i, e),
											t.disposeMediaElement(e),
											e = i
									} else {
											e = s.a.createElement("video");
											var n = gi({}, this.options_.tag && pt(this.options_.tag));
											Ri && !0 === this.options_.nativeControlsForTouch || delete n.controls,
											dt(e, Ke(n, {
													id: this.options_.techId,
													class: "vjs-tech"
											}))
									}
									e.playerId = this.options_.playerId
							}
							void 0 !== this.options_.preload && mt(e, "preload", this.options_.preload);
							for (var r = ["loop", "muted", "playsinline", "autoplay"], a = 0; a < r.length; a++) {
									var o = r[a]
										, u = this.options_[o];
									void 0 !== u && (u ? mt(e, o, o) : gt(e, o),
									e[o] = u)
							}
							return e
					}
					,
					i.handleLateInit_ = function(e) {
							if (0 !== e.networkState && 3 !== e.networkState) {
									if (0 === e.readyState) {
											var t = !1
												, i = function() {
													t = !0
											};
											this.on("loadstart", i);
											var n = function() {
													t || this.trigger("loadstart")
											};
											return this.on("loadedmetadata", n),
											void this.ready((function() {
													this.off("loadstart", i),
													this.off("loadedmetadata", n),
													t || this.trigger("loadstart")
											}
											))
									}
									var r = ["loadstart"];
									r.push("loadedmetadata"),
									e.readyState >= 2 && r.push("loadeddata"),
									e.readyState >= 3 && r.push("canplay"),
									e.readyState >= 4 && r.push("canplaythrough"),
									this.ready((function() {
											r.forEach((function(e) {
													this.trigger(e)
											}
											), this)
									}
									))
							}
					}
					,
					i.setCurrentTime = function(e) {
							try {
									this.el_.currentTime = e
							} catch (e) {
									We(e, "Video is not ready. (Video.js)")
							}
					}
					,
					i.duration = function() {
							var e = this;
							if (this.el_.duration === 1 / 0 && ki && Oi && 0 === this.el_.currentTime) {
									return this.on("timeupdate", (function t() {
											e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"),
											e.off("timeupdate", t))
									}
									)),
									NaN
							}
							return this.el_.duration || NaN
					}
					,
					i.width = function() {
							return this.el_.offsetWidth
					}
					,
					i.height = function() {
							return this.el_.offsetHeight
					}
					,
					i.proxyWebkitFullscreen_ = function() {
							var e = this;
							if ("webkitDisplayingFullscreen"in this.el_) {
									var t = function() {
											this.trigger("fullscreenchange", {
													isFullscreen: !1
											})
									}
										, i = function() {
											"webkitPresentationMode"in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t),
											this.trigger("fullscreenchange", {
													isFullscreen: !0
											}))
									};
									this.on("webkitbeginfullscreen", i),
									this.on("dispose", (function() {
											e.off("webkitbeginfullscreen", i),
											e.off("webkitendfullscreen", t)
									}
									))
							}
					}
					,
					i.supportsFullScreen = function() {
							if ("function" == typeof this.el_.webkitEnterFullScreen) {
									var e = r.a.navigator && r.a.navigator.userAgent || "";
									if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e))
											return !0
							}
							return !1
					}
					,
					i.enterFullScreen = function() {
							var e = this.el_;
							e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(),
							this.setTimeout((function() {
									e.pause(),
									e.webkitEnterFullScreen()
							}
							), 0)) : e.webkitEnterFullScreen()
					}
					,
					i.exitFullScreen = function() {
							this.el_.webkitExitFullScreen()
					}
					,
					i.requestPictureInPicture = function() {
							return this.el_.requestPictureInPicture()
					}
					,
					i.src = function(e) {
							if (void 0 === e)
									return this.el_.src;
							this.setSrc(e)
					}
					,
					i.reset = function() {
							t.resetMediaElement(this.el_)
					}
					,
					i.currentSrc = function() {
							return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
					}
					,
					i.setControls = function(e) {
							this.el_.controls = !!e
					}
					,
					i.addTextTrack = function(t, i, n) {
							return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, i, n) : e.prototype.addTextTrack.call(this, t, i, n)
					}
					,
					i.createRemoteTextTrack = function(t) {
							if (!this.featuresNativeTextTracks)
									return e.prototype.createRemoteTextTrack.call(this, t);
							var i = s.a.createElement("track");
							return t.kind && (i.kind = t.kind),
							t.label && (i.label = t.label),
							(t.language || t.srclang) && (i.srclang = t.language || t.srclang),
							t.default && (i.default = t.default),
							t.id && (i.id = t.id),
							t.src && (i.src = t.src),
							i
					}
					,
					i.addRemoteTextTrack = function(t, i) {
							var n = e.prototype.addRemoteTextTrack.call(this, t, i);
							return this.featuresNativeTextTracks && this.el().appendChild(n),
							n
					}
					,
					i.removeRemoteTextTrack = function(t) {
							if (e.prototype.removeRemoteTextTrack.call(this, t),
							this.featuresNativeTextTracks)
									for (var i = this.$$("track"), n = i.length; n--; )
											t !== i[n] && t !== i[n].track || this.el().removeChild(i[n])
					}
					,
					i.getVideoPlaybackQuality = function() {
							if ("function" == typeof this.el().getVideoPlaybackQuality)
									return this.el().getVideoPlaybackQuality();
							var e = {};
							return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount,
							e.totalVideoFrames = this.el().webkitDecodedFrameCount),
							r.a.performance && "function" == typeof r.a.performance.now ? e.creationTime = r.a.performance.now() : r.a.performance && r.a.performance.timing && "number" == typeof r.a.performance.timing.navigationStart && (e.creationTime = r.a.Date.now() - r.a.performance.timing.navigationStart),
							e
					}
					,
					t
			}(Dn);
			wa(ka, "TEST_VID", (function() {
					if (tt()) {
							var e = s.a.createElement("video")
								, t = s.a.createElement("track");
							return t.kind = "captions",
							t.srclang = "en",
							t.label = "English",
							e.appendChild(t),
							e
					}
			}
			)),
			ka.isSupported = function() {
					try {
							ka.TEST_VID.volume = .5
					} catch (e) {
							return !1
					}
					return !(!ka.TEST_VID || !ka.TEST_VID.canPlayType)
			}
			,
			ka.canPlayType = function(e) {
					return ka.TEST_VID.canPlayType(e)
			}
			,
			ka.canPlaySource = function(e, t) {
					return ka.canPlayType(e.type)
			}
			,
			ka.canControlVolume = function() {
					try {
							var e = ka.TEST_VID.volume;
							return ka.TEST_VID.volume = e / 2 + .1,
							e !== ka.TEST_VID.volume
					} catch (e) {
							return !1
					}
			}
			,
			ka.canMuteVolume = function() {
					try {
							var e = ka.TEST_VID.muted;
							return ka.TEST_VID.muted = !e,
							ka.TEST_VID.muted ? mt(ka.TEST_VID, "muted", "muted") : gt(ka.TEST_VID, "muted"),
							e !== ka.TEST_VID.muted
					} catch (e) {
							return !1
					}
			}
			,
			ka.canControlPlaybackRate = function() {
					if (ki && Oi && Pi < 58)
							return !1;
					try {
							var e = ka.TEST_VID.playbackRate;
							return ka.TEST_VID.playbackRate = e / 2 + .1,
							e !== ka.TEST_VID.playbackRate
					} catch (e) {
							return !1
					}
			}
			,
			ka.canOverrideAttributes = function() {
					try {
							var e = function() {};
							Object.defineProperty(s.a.createElement("video"), "src", {
									get: e,
									set: e
							}),
							Object.defineProperty(s.a.createElement("audio"), "src", {
									get: e,
									set: e
							}),
							Object.defineProperty(s.a.createElement("video"), "innerHTML", {
									get: e,
									set: e
							}),
							Object.defineProperty(s.a.createElement("audio"), "innerHTML", {
									get: e,
									set: e
							})
					} catch (e) {
							return !1
					}
					return !0
			}
			,
			ka.supportsNativeTextTracks = function() {
					return ji || Mi && Oi
			}
			,
			ka.supportsNativeVideoTracks = function() {
					return !(!ka.TEST_VID || !ka.TEST_VID.videoTracks)
			}
			,
			ka.supportsNativeAudioTracks = function() {
					return !(!ka.TEST_VID || !ka.TEST_VID.audioTracks)
			}
			,
			ka.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"],
			[["featuresVolumeControl", "canControlVolume"], ["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach((function(e) {
					var t = e[0]
						, i = e[1];
					wa(ka.prototype, t, (function() {
							return ka[i]()
					}
					), !0)
			}
			)),
			ka.prototype.movingMediaElementInDOM = !Mi,
			ka.prototype.featuresFullscreenResize = !0,
			ka.prototype.featuresProgressEvents = !0,
			ka.prototype.featuresTimeupdateEvents = !0,
			ka.patchCanPlayType = function() {
					Ei >= 4 && !Ai && !Oi && (ga = ka.TEST_VID && ka.TEST_VID.constructor.prototype.canPlayType,
					ka.TEST_VID.constructor.prototype.canPlayType = function(e) {
							return e && /^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e) ? "maybe" : ga.call(this, e)
					}
					)
			}
			,
			ka.unpatchCanPlayType = function() {
					var e = ka.TEST_VID.constructor.prototype.canPlayType;
					return ga && (ka.TEST_VID.constructor.prototype.canPlayType = ga),
					e
			}
			,
			ka.patchCanPlayType(),
			ka.disposeMediaElement = function(e) {
					if (e) {
							for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes(); )
									e.removeChild(e.firstChild);
							e.removeAttribute("src"),
							"function" == typeof e.load && function() {
									try {
											e.load()
									} catch (e) {}
							}()
					}
			}
			,
			ka.resetMediaElement = function(e) {
					if (e) {
							for (var t = e.querySelectorAll("source"), i = t.length; i--; )
									e.removeChild(t[i]);
							e.removeAttribute("src"),
							"function" == typeof e.load && function() {
									try {
											e.load()
									} catch (e) {}
							}()
					}
			}
			,
			["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach((function(e) {
					ka.prototype[e] = function() {
							return this.el_[e] || this.el_.hasAttribute(e)
					}
			}
			)),
			["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach((function(e) {
					ka.prototype["set" + mi(e)] = function(t) {
							this.el_[e] = t,
							t ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e)
					}
			}
			)),
			["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach((function(e) {
					ka.prototype[e] = function() {
							return this.el_[e]
					}
			}
			)),
			["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach((function(e) {
					ka.prototype["set" + mi(e)] = function(t) {
							this.el_[e] = t
					}
			}
			)),
			["pause", "load", "play"].forEach((function(e) {
					ka.prototype[e] = function() {
							return this.el_[e]()
					}
			}
			)),
			Dn.withSourceHandlers(ka),
			ka.nativeSourceHandler = {},
			ka.nativeSourceHandler.canPlayType = function(e) {
					try {
							return ka.TEST_VID.canPlayType(e)
					} catch (e) {
							return ""
					}
			}
			,
			ka.nativeSourceHandler.canHandleSource = function(e, t) {
					if (e.type)
							return ka.nativeSourceHandler.canPlayType(e.type);
					if (e.src) {
							var i = Tn(e.src);
							return ka.nativeSourceHandler.canPlayType("video/" + i)
					}
					return ""
			}
			,
			ka.nativeSourceHandler.handleSource = function(e, t, i) {
					t.setSrc(e.src)
			}
			,
			ka.nativeSourceHandler.dispose = function() {}
			,
			ka.registerSourceHandler(ka.nativeSourceHandler),
			Dn.registerTech("Html5", ka);
			var Ea = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"]
				, Ca = {
					canplay: "CanPlay",
					canplaythrough: "CanPlayThrough",
					playing: "Playing",
					seeked: "Seeked"
			}
				, Aa = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"]
				, xa = {};
			Aa.forEach((function(e) {
					var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
					xa[e] = "vjs-layout-" + t
			}
			));
			var Oa = {
					tiny: 210,
					xsmall: 320,
					small: 425,
					medium: 768,
					large: 1440,
					xlarge: 2560,
					huge: 1 / 0
			}
				, Pa = function(e) {
					function t(i, n, r) {
							var a;
							if (i.id = i.id || n.id || "vjs_video_" + Ft(),
							(n = Ke(t.getTagSettings(i), n)).initChildren = !1,
							n.createEl = !1,
							n.evented = !1,
							n.reportTouchActivity = !1,
							!n.language)
									if ("function" == typeof i.closest) {
											var o = i.closest("[lang]");
											o && o.getAttribute && (n.language = o.getAttribute("lang"))
									} else
											for (var u = i; u && 1 === u.nodeType; ) {
													if (pt(u).hasOwnProperty("lang")) {
															n.language = u.getAttribute("lang");
															break
													}
													u = u.parentNode
											}
							if ((a = e.call(this, null, n, r) || this).boundDocumentFullscreenChange_ = ei(c()(a), a.documentFullscreenChange_),
							a.boundFullWindowOnEscKey_ = ei(c()(a), a.fullWindowOnEscKey),
							a.isFullscreen_ = !1,
							a.log = ze(a.id_),
							a.fsApi_ = zi,
							a.isPosterFromTech_ = !1,
							a.queuedCallbacks_ = [],
							a.isReady_ = !1,
							a.hasStarted_ = !1,
							a.userActive_ = !1,
							!a.options_ || !a.options_.techOrder || !a.options_.techOrder.length)
									throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
							if (a.tag = i,
							a.tagAttributes = i && pt(i),
							a.language(a.options_.language),
							n.languages) {
									var l = {};
									Object.getOwnPropertyNames(n.languages).forEach((function(e) {
											l[e.toLowerCase()] = n.languages[e]
									}
									)),
									a.languages_ = l
							} else
									a.languages_ = t.prototype.options_.languages;
							a.resetCache_(),
							a.poster_ = n.poster || "",
							a.controls_ = !!n.controls,
							i.controls = !1,
							i.removeAttribute("controls"),
							a.changingSrc_ = !1,
							a.playCallbacks_ = [],
							a.playTerminatedQueue_ = [],
							i.hasAttribute("autoplay") ? a.autoplay(!0) : a.autoplay(a.options_.autoplay),
							n.plugins && Object.keys(n.plugins).forEach((function(e) {
									if ("function" != typeof a[e])
											throw new Error('plugin "' + e + '" does not exist')
							}
							)),
							a.scrubbing_ = !1,
							a.el_ = a.createEl(),
							hi(c()(a), {
									eventBusKey: "el_"
							}),
							a.fsApi_.requestFullscreen && (Yt(s.a, a.fsApi_.fullscreenchange, a.boundDocumentFullscreenChange_),
							a.on(a.fsApi_.fullscreenchange, a.boundDocumentFullscreenChange_)),
							a.fluid_ && a.on("playerreset", a.updateStyleEl_);
							var h = gi(a.options_);
							n.plugins && Object.keys(n.plugins).forEach((function(e) {
									a[e](n.plugins[e])
							}
							)),
							a.options_.playerOptions = h,
							a.middleware_ = [],
							a.initChildren(),
							a.isAudio("audio" === i.nodeName.toLowerCase()),
							a.controls() ? a.addClass("vjs-controls-enabled") : a.addClass("vjs-controls-disabled"),
							a.el_.setAttribute("role", "region"),
							a.isAudio() ? a.el_.setAttribute("aria-label", a.localize("Audio Player")) : a.el_.setAttribute("aria-label", a.localize("Video Player")),
							a.isAudio() && a.addClass("vjs-audio"),
							a.flexNotSupported_() && a.addClass("vjs-no-flex"),
							Ri && a.addClass("vjs-touch-enabled"),
							Mi || a.addClass("vjs-workinghover"),
							t.players[a.id_] = c()(a);
							var d = "7.7.5".split(".")[0];
							return a.addClass("vjs-v" + d),
							a.userActive(!0),
							a.reportUserActivity(),
							a.one("play", a.listenForUserActivity_),
							a.on("stageclick", a.handleStageClick_),
							a.on("keydown", a.handleKeyDown),
							a.breakpoints(a.options_.breakpoints),
							a.responsive(a.options_.responsive),
							a
					}
					d()(t, e);
					var i = t.prototype;
					return i.dispose = function() {
							var i = this;
							this.trigger("dispose"),
							this.off("dispose"),
							Xt(s.a, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_),
							Xt(s.a, "keydown", this.boundFullWindowOnEscKey_),
							this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_),
							this.styleEl_ = null),
							t.players[this.id_] = null,
							this.tag && this.tag.player && (this.tag.player = null),
							this.el_ && this.el_.player && (this.el_.player = null),
							this.tech_ && (this.tech_.dispose(),
							this.isPosterFromTech_ = !1,
							this.poster_ = ""),
							this.playerElIngest_ && (this.playerElIngest_ = null),
							this.tag && (this.tag = null),
							function(e) {
									Nn[e.id()] = null
							}(this),
							Ln.names.forEach((function(e) {
									var t = Ln[e]
										, n = i[t.getterName]();
									n && n.off && n.off()
							}
							)),
							e.prototype.dispose.call(this)
					}
					,
					i.createEl = function() {
							var t, i = this.tag, n = this.playerElIngest_ = i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute("data-vjs-player"), a = "video-js" === this.tag.tagName.toLowerCase();
							n ? t = this.el_ = i.parentNode : a || (t = this.el_ = e.prototype.createEl.call(this, "div"));
							var o = pt(i);
							if (a) {
									for (t = this.el_ = i,
									i = this.tag = s.a.createElement("video"); t.children.length; )
											i.appendChild(t.firstChild);
									ut(t, "video-js") || lt(t, "video-js"),
									t.appendChild(i),
									n = this.playerElIngest_ = t,
									Object.keys(t).forEach((function(e) {
											try {
													i[e] = t[e]
											} catch (e) {}
									}
									))
							}
							if (i.setAttribute("tabindex", "-1"),
							o.tabindex = "-1",
							(Ii || Oi && Di) && (i.setAttribute("role", "application"),
							o.role = "application"),
							i.removeAttribute("width"),
							i.removeAttribute("height"),
							"width"in o && delete o.width,
							"height"in o && delete o.height,
							Object.getOwnPropertyNames(o).forEach((function(e) {
									a && "class" === e || t.setAttribute(e, o[e]),
									a && i.setAttribute(e, o[e])
							}
							)),
							i.playerId = i.id,
							i.id += "_html5_api",
							i.className = "vjs-tech",
							i.player = t.player = this,
							this.addClass("vjs-paused"),
							!0 !== r.a.VIDEOJS_NO_DYNAMIC_STYLE) {
									this.styleEl_ = Mt("vjs-styles-dimensions");
									var u = Ot(".vjs-styles-defaults")
										, l = Ot("head");
									l.insertBefore(this.styleEl_, u ? u.nextSibling : l.firstChild)
							}
							this.fill_ = !1,
							this.fluid_ = !1,
							this.width(this.options_.width),
							this.height(this.options_.height),
							this.fill(this.options_.fill),
							this.fluid(this.options_.fluid),
							this.aspectRatio(this.options_.aspectRatio);
							for (var c = i.getElementsByTagName("a"), h = 0; h < c.length; h++) {
									var d = c.item(h);
									lt(d, "vjs-hidden"),
									d.setAttribute("hidden", "hidden")
							}
							return i.initNetworkState_ = i.networkState,
							i.parentNode && !n && i.parentNode.insertBefore(t, i),
							ot(i, t),
							this.children_.unshift(i),
							this.el_.setAttribute("lang", this.language_),
							this.el_ = t,
							t
					}
					,
					i.width = function(e) {
							return this.dimension("width", e)
					}
					,
					i.height = function(e) {
							return this.dimension("height", e)
					}
					,
					i.dimension = function(e, t) {
							var i = e + "_";
							if (void 0 === t)
									return this[i] || 0;
							if ("" === t || "auto" === t)
									return this[i] = void 0,
									void this.updateStyleEl_();
							var n = parseFloat(t);
							isNaN(n) ? We.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = n,
							this.updateStyleEl_())
					}
					,
					i.fluid = function(e) {
							if (void 0 === e)
									return !!this.fluid_;
							var t, i;
							this.fluid_ = !!e,
							ni(this) && this.off("playerreset", this.updateStyleEl_),
							e ? (this.addClass("vjs-fluid"),
							this.fill(!1),
							ni(t = function() {
									this.on("playerreset", this.updateStyleEl_)
							}
							) ? i() : (t.eventedCallbacks || (t.eventedCallbacks = []),
							t.eventedCallbacks.push(i))) : this.removeClass("vjs-fluid"),
							this.updateStyleEl_()
					}
					,
					i.fill = function(e) {
							if (void 0 === e)
									return !!this.fill_;
							this.fill_ = !!e,
							e ? (this.addClass("vjs-fill"),
							this.fluid(!1)) : this.removeClass("vjs-fill")
					}
					,
					i.aspectRatio = function(e) {
							if (void 0 === e)
									return this.aspectRatio_;
							if (!/^\d+\:\d+$/.test(e))
									throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
							this.aspectRatio_ = e,
							this.fluid(!0),
							this.updateStyleEl_()
					}
					,
					i.updateStyleEl_ = function() {
							if (!0 !== r.a.VIDEOJS_NO_DYNAMIC_STYLE) {
									var e, t, i, n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"), a = n[1] / n[0];
									e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / a : this.videoWidth() || 300,
									t = void 0 !== this.height_ ? this.height_ : e * a,
									i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions",
									this.addClass(i),
									jt(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * a + "%;\n      }\n    ")
							} else {
									var s = "number" == typeof this.width_ ? this.width_ : this.options_.width
										, o = "number" == typeof this.height_ ? this.height_ : this.options_.height
										, u = this.tech_ && this.tech_.el();
									u && (s >= 0 && (u.width = s),
									o >= 0 && (u.height = o))
							}
					}
					,
					i.loadTech_ = function(e, t) {
							var i = this;
							this.tech_ && this.unloadTech_();
							var n = mi(e)
								, r = e.charAt(0).toLowerCase() + e.slice(1);
							"Html5" !== n && this.tag && (Dn.getTech("Html5").disposeMediaElement(this.tag),
							this.tag.player = null,
							this.tag = null),
							this.techName_ = n,
							this.isReady_ = !1;
							var a = {
									source: t,
									autoplay: "string" != typeof this.autoplay() && this.autoplay(),
									nativeControlsForTouch: this.options_.nativeControlsForTouch,
									playerId: this.id(),
									techId: this.id() + "_" + r + "_api",
									playsinline: this.options_.playsinline,
									preload: this.options_.preload,
									loop: this.options_.loop,
									muted: this.options_.muted,
									poster: this.poster(),
									language: this.language(),
									playerElIngest: this.playerElIngest_ || !1,
									"vtt.js": this.options_["vtt.js"],
									canOverridePoster: !!this.options_.techCanOverridePoster,
									enableSourceset: this.options_.enableSourceset,
									Promise: this.options_.Promise
							};
							Ln.names.forEach((function(e) {
									var t = Ln[e];
									a[t.getterName] = i[t.privateName]
							}
							)),
							Ke(a, this.options_[n]),
							Ke(a, this.options_[r]),
							Ke(a, this.options_[e.toLowerCase()]),
							this.tag && (a.tag = this.tag),
							t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (a.startTime = this.cache_.currentTime);
							var s = Dn.getTech(e);
							if (!s)
									throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
							this.tech_ = new s(a),
							this.tech_.ready(ei(this, this.handleTechReady_), !0),
							nn(this.textTracksJson_ || [], this.tech_),
							Ea.forEach((function(e) {
									i.on(i.tech_, e, i["handleTech" + mi(e) + "_"])
							}
							)),
							Object.keys(Ca).forEach((function(e) {
									i.on(i.tech_, e, (function(t) {
											0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
													callback: i["handleTech" + Ca[e] + "_"].bind(i),
													event: t
											}) : i["handleTech" + Ca[e] + "_"](t)
									}
									))
							}
							)),
							this.on(this.tech_, "loadstart", this.handleTechLoadStart_),
							this.on(this.tech_, "sourceset", this.handleTechSourceset_),
							this.on(this.tech_, "waiting", this.handleTechWaiting_),
							this.on(this.tech_, "ended", this.handleTechEnded_),
							this.on(this.tech_, "seeking", this.handleTechSeeking_),
							this.on(this.tech_, "play", this.handleTechPlay_),
							this.on(this.tech_, "firstplay", this.handleTechFirstPlay_),
							this.on(this.tech_, "pause", this.handleTechPause_),
							this.on(this.tech_, "durationchange", this.handleTechDurationChange_),
							this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_),
							this.on(this.tech_, "enterpictureinpicture", this.handleTechEnterPictureInPicture_),
							this.on(this.tech_, "leavepictureinpicture", this.handleTechLeavePictureInPicture_),
							this.on(this.tech_, "error", this.handleTechError_),
							this.on(this.tech_, "loadedmetadata", this.updateStyleEl_),
							this.on(this.tech_, "posterchange", this.handleTechPosterChange_),
							this.on(this.tech_, "textdata", this.handleTechTextData_),
							this.on(this.tech_, "ratechange", this.handleTechRateChange_),
							this.usingNativeControls(this.techGet_("controls")),
							this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
							this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || ot(this.tech_.el(), this.el()),
							this.tag && (this.tag.player = null,
							this.tag = null)
					}
					,
					i.unloadTech_ = function() {
							var e = this;
							Ln.names.forEach((function(t) {
									var i = Ln[t];
									e[i.privateName] = e[i.getterName]()
							}
							)),
							this.textTracksJson_ = tn(this.tech_),
							this.isReady_ = !1,
							this.tech_.dispose(),
							this.tech_ = !1,
							this.isPosterFromTech_ && (this.poster_ = "",
							this.trigger("posterchange")),
							this.isPosterFromTech_ = !1
					}
					,
					i.tech = function(e) {
							return void 0 === e && We.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"),
							this.tech_
					}
					,
					i.addTechControlsListeners_ = function() {
							this.removeTechControlsListeners_(),
							this.on(this.tech_, "mouseup", this.handleTechClick_),
							this.on(this.tech_, "dblclick", this.handleTechDoubleClick_),
							this.on(this.tech_, "touchstart", this.handleTechTouchStart_),
							this.on(this.tech_, "touchmove", this.handleTechTouchMove_),
							this.on(this.tech_, "touchend", this.handleTechTouchEnd_),
							this.on(this.tech_, "tap", this.handleTechTap_)
					}
					,
					i.removeTechControlsListeners_ = function() {
							this.off(this.tech_, "tap", this.handleTechTap_),
							this.off(this.tech_, "touchstart", this.handleTechTouchStart_),
							this.off(this.tech_, "touchmove", this.handleTechTouchMove_),
							this.off(this.tech_, "touchend", this.handleTechTouchEnd_),
							this.off(this.tech_, "mouseup", this.handleTechClick_),
							this.off(this.tech_, "dblclick", this.handleTechDoubleClick_)
					}
					,
					i.handleTechReady_ = function() {
							this.triggerReady(),
							this.cache_.volume && this.techCall_("setVolume", this.cache_.volume),
							this.handleTechPosterChange_(),
							this.handleTechDurationChange_()
					}
					,
					i.handleTechLoadStart_ = function() {
							this.removeClass("vjs-ended"),
							this.removeClass("vjs-seeking"),
							this.error(null),
							this.handleTechDurationChange_(),
							this.paused() ? (this.hasStarted(!1),
							this.trigger("loadstart")) : (this.trigger("loadstart"),
							this.trigger("firstplay")),
							this.manualAutoplay_(this.autoplay())
					}
					,
					i.manualAutoplay_ = function(e) {
							var t = this;
							if (this.tech_ && "string" == typeof e) {
									var i, n = function() {
											var e = t.muted();
											t.muted(!0);
											var i = function() {
													t.muted(e)
											};
											t.playTerminatedQueue_.push(i);
											var n = t.play();
											if (Ji(n))
													return n.catch(i)
									};
									if ("any" === e && !0 !== this.muted() ? Ji(i = this.play()) && (i = i.catch(n)) : i = "muted" === e && !0 !== this.muted() ? n() : this.play(),
									Ji(i))
											return i.then((function() {
													t.trigger({
															type: "autoplay-success",
															autoplay: e
													})
											}
											)).catch((function(i) {
													t.trigger({
															type: "autoplay-failure",
															autoplay: e
													})
											}
											))
							}
					}
					,
					i.updateSourceCaches_ = function(e) {
							void 0 === e && (e = "");
							var t = e
								, i = "";
							"string" != typeof t && (t = e.src,
							i = e.type),
							this.cache_.source = this.cache_.source || {},
							this.cache_.sources = this.cache_.sources || [],
							t && !i && (i = function(e, t) {
									if (!t)
											return "";
									if (e.cache_.source.src === t && e.cache_.source.type)
											return e.cache_.source.type;
									var i = e.cache_.sources.filter((function(e) {
											return e.src === t
									}
									));
									if (i.length)
											return i[0].type;
									for (var n = e.$$("source"), r = 0; r < n.length; r++) {
											var a = n[r];
											if (a.type && a.src && a.src === t)
													return a.type
									}
									return Wn(t)
							}(this, t)),
							this.cache_.source = gi({}, e, {
									src: t,
									type: i
							});
							for (var n = this.cache_.sources.filter((function(e) {
									return e.src && e.src === t
							}
							)), r = [], a = this.$$("source"), s = [], o = 0; o < a.length; o++) {
									var u = pt(a[o]);
									r.push(u),
									u.src && u.src === t && s.push(u.src)
							}
							s.length && !n.length ? this.cache_.sources = r : n.length || (this.cache_.sources = [this.cache_.source]),
							this.cache_.src = t
					}
					,
					i.handleTechSourceset_ = function(e) {
							var t = this;
							if (!this.changingSrc_) {
									var i = function(e) {
											return t.updateSourceCaches_(e)
									}
										, n = this.currentSource().src
										, r = e.src;
									n && !/^blob:/.test(n) && /^blob:/.test(r) && (!this.lastSource_ || this.lastSource_.tech !== r && this.lastSource_.player !== n) && (i = function() {}
									),
									i(r),
									e.src || this.tech_.any(["sourceset", "loadstart"], (function(e) {
											if ("sourceset" !== e.type) {
													var i = t.techGet("currentSrc");
													t.lastSource_.tech = i,
													t.updateSourceCaches_(i)
											}
									}
									))
							}
							this.lastSource_ = {
									player: this.currentSource().src,
									tech: e.src
							},
							this.trigger({
									src: e.src,
									type: "sourceset"
							})
					}
					,
					i.hasStarted = function(e) {
							if (void 0 === e)
									return this.hasStarted_;
							e !== this.hasStarted_ && (this.hasStarted_ = e,
							this.hasStarted_ ? (this.addClass("vjs-has-started"),
							this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
					}
					,
					i.handleTechPlay_ = function() {
							this.removeClass("vjs-ended"),
							this.removeClass("vjs-paused"),
							this.addClass("vjs-playing"),
							this.hasStarted(!0),
							this.trigger("play")
					}
					,
					i.handleTechRateChange_ = function() {
							this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach((function(e) {
									return e.callback(e.event)
							}
							)),
							this.queuedCallbacks_ = []),
							this.cache_.lastPlaybackRate = this.tech_.playbackRate(),
							this.trigger("ratechange")
					}
					,
					i.handleTechWaiting_ = function() {
							var e = this;
							this.addClass("vjs-waiting"),
							this.trigger("waiting");
							var t = this.currentTime();
							this.on("timeupdate", (function i() {
									t !== e.currentTime() && (e.removeClass("vjs-waiting"),
									e.off("timeupdate", i))
							}
							))
					}
					,
					i.handleTechCanPlay_ = function() {
							this.removeClass("vjs-waiting"),
							this.trigger("canplay")
					}
					,
					i.handleTechCanPlayThrough_ = function() {
							this.removeClass("vjs-waiting"),
							this.trigger("canplaythrough")
					}
					,
					i.handleTechPlaying_ = function() {
							this.removeClass("vjs-waiting"),
							this.trigger("playing")
					}
					,
					i.handleTechSeeking_ = function() {
							this.addClass("vjs-seeking"),
							this.trigger("seeking")
					}
					,
					i.handleTechSeeked_ = function() {
							this.removeClass("vjs-seeking"),
							this.removeClass("vjs-ended"),
							this.trigger("seeked")
					}
					,
					i.handleTechFirstPlay_ = function() {
							this.options_.starttime && (We.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),
							this.currentTime(this.options_.starttime)),
							this.addClass("vjs-has-started"),
							this.trigger("firstplay")
					}
					,
					i.handleTechPause_ = function() {
							this.removeClass("vjs-playing"),
							this.addClass("vjs-paused"),
							this.trigger("pause")
					}
					,
					i.handleTechEnded_ = function() {
							this.addClass("vjs-ended"),
							this.options_.loop ? (this.currentTime(0),
							this.play()) : this.paused() || this.pause(),
							this.trigger("ended")
					}
					,
					i.handleTechDurationChange_ = function() {
							this.duration(this.techGet_("duration"))
					}
					,
					i.handleTechClick_ = function(e) {
							At(e) && this.controls_ && (this.paused() ? Zi(this.play()) : this.pause())
					}
					,
					i.handleTechDoubleClick_ = function(e) {
							this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), (function(t) {
									return t.contains(e.target)
							}
							)) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, e) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
					}
					,
					i.handleTechTap_ = function() {
							this.userActive(!this.userActive())
					}
					,
					i.handleTechTouchStart_ = function() {
							this.userWasActive = this.userActive()
					}
					,
					i.handleTechTouchMove_ = function() {
							this.userWasActive && this.reportUserActivity()
					}
					,
					i.handleTechTouchEnd_ = function(e) {
							e.preventDefault()
					}
					,
					i.handleStageClick_ = function() {
							this.reportUserActivity()
					}
					,
					i.toggleFullscreenClass_ = function() {
							this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
					}
					,
					i.documentFullscreenChange_ = function(e) {
							var t = e.target.player;
							if (!t || t === this) {
									var i = this.el()
										, n = s.a[this.fsApi_.fullscreenElement] === i;
									!n && i.matches ? n = i.matches(":" + this.fsApi_.fullscreen) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + this.fsApi_.fullscreen)),
									this.isFullscreen(n)
							}
					}
					,
					i.handleTechFullscreenChange_ = function(e, t) {
							t && this.isFullscreen(t.isFullscreen)
					}
					,
					i.togglePictureInPictureClass_ = function() {
							this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture")
					}
					,
					i.handleTechEnterPictureInPicture_ = function(e) {
							this.isInPictureInPicture(!0)
					}
					,
					i.handleTechLeavePictureInPicture_ = function(e) {
							this.isInPictureInPicture(!1)
					}
					,
					i.handleTechError_ = function() {
							var e = this.tech_.error();
							this.error(e)
					}
					,
					i.handleTechTextData_ = function() {
							var e = null;
							arguments.length > 1 && (e = arguments[1]),
							this.trigger("textdata", e)
					}
					,
					i.getCache = function() {
							return this.cache_
					}
					,
					i.resetCache_ = function() {
							this.cache_ = {
									currentTime: 0,
									inactivityTimeout: this.options_.inactivityTimeout,
									duration: NaN,
									lastVolume: 1,
									lastPlaybackRate: this.defaultPlaybackRate(),
									media: null,
									src: "",
									source: {},
									sources: [],
									volume: 1
							}
					}
					,
					i.techCall_ = function(e, t) {
							this.ready((function() {
									if (e in Fn)
											return function(e, t, i, n) {
													return t[i](e.reduce(Hn(i), n))
											}(this.middleware_, this.tech_, e, t);
									if (e in qn)
											return jn(this.middleware_, this.tech_, e, t);
									try {
											this.tech_ && this.tech_[e](t)
									} catch (e) {
											throw We(e),
											e
									}
							}
							), !0)
					}
					,
					i.techGet_ = function(e) {
							if (this.tech_ && this.tech_.isReady_) {
									if (e in Bn)
											return function(e, t, i) {
													return e.reduceRight(Hn(i), t[i]())
											}(this.middleware_, this.tech_, e);
									if (e in qn)
											return jn(this.middleware_, this.tech_, e);
									try {
											return this.tech_[e]()
									} catch (t) {
											if (void 0 === this.tech_[e])
													throw We("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t),
													t;
											if ("TypeError" === t.name)
													throw We("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t),
													this.tech_.isReady_ = !1,
													t;
											throw We(t),
											t
									}
							}
					}
					,
					i.play = function() {
							var e = this
								, t = this.options_.Promise || r.a.Promise;
							return t ? new t((function(t) {
									e.play_(t)
							}
							)) : this.play_()
					}
					,
					i.play_ = function(e) {
							var t = this;
							void 0 === e && (e = Zi),
							this.playCallbacks_.push(e);
							var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
							if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_),
							this.waitToPlay_ = null),
							!this.isReady_ || !i)
									return this.waitToPlay_ = function(e) {
											t.play_()
									}
									,
									this.one(["ready", "loadstart"], this.waitToPlay_),
									void (i || !ji && !Mi || this.load());
							var n = this.techGet_("play");
							null === n ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n)
					}
					,
					i.runPlayTerminatedQueue_ = function() {
							var e = this.playTerminatedQueue_.slice(0);
							this.playTerminatedQueue_ = [],
							e.forEach((function(e) {
									e()
							}
							))
					}
					,
					i.runPlayCallbacks_ = function(e) {
							var t = this.playCallbacks_.slice(0);
							this.playCallbacks_ = [],
							this.playTerminatedQueue_ = [],
							t.forEach((function(t) {
									t(e)
							}
							))
					}
					,
					i.pause = function() {
							this.techCall_("pause")
					}
					,
					i.paused = function() {
							return !1 !== this.techGet_("paused")
					}
					,
					i.played = function() {
							return this.techGet_("played") || Hi(0, 0)
					}
					,
					i.scrubbing = function(e) {
							if (void 0 === e)
									return this.scrubbing_;
							this.scrubbing_ = !!e,
							e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
					}
					,
					i.currentTime = function(e) {
							return void 0 !== e ? (e < 0 && (e = 0),
							void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0,
							this.cache_.currentTime)
					}
					,
					i.duration = function(e) {
							if (void 0 === e)
									return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
							(e = parseFloat(e)) < 0 && (e = 1 / 0),
							e !== this.cache_.duration && (this.cache_.duration = e,
							e === 1 / 0 ? (this.addClass("vjs-live"),
							this.options_.liveui && this.player_.liveTracker && this.addClass("vjs-liveui")) : (this.removeClass("vjs-live"),
							this.removeClass("vjs-liveui")),
							isNaN(e) || this.trigger("durationchange"))
					}
					,
					i.remainingTime = function() {
							return this.duration() - this.currentTime()
					}
					,
					i.remainingTimeDisplay = function() {
							return Math.floor(this.duration()) - Math.floor(this.currentTime())
					}
					,
					i.buffered = function() {
							var e = this.techGet_("buffered");
							return e && e.length || (e = Hi(0, 0)),
							e
					}
					,
					i.bufferedPercent = function() {
							return Vi(this.buffered(), this.duration())
					}
					,
					i.bufferedEnd = function() {
							var e = this.buffered()
								, t = this.duration()
								, i = e.end(e.length - 1);
							return i > t && (i = t),
							i
					}
					,
					i.volume = function(e) {
							var t;
							return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))),
							this.cache_.volume = t,
							this.techCall_("setVolume", t),
							void (t > 0 && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")),
							isNaN(t) ? 1 : t)
					}
					,
					i.muted = function(e) {
							if (void 0 === e)
									return this.techGet_("muted") || !1;
							this.techCall_("setMuted", e)
					}
					,
					i.defaultMuted = function(e) {
							return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
					}
					,
					i.lastVolume_ = function(e) {
							if (void 0 === e || 0 === e)
									return this.cache_.lastVolume;
							this.cache_.lastVolume = e
					}
					,
					i.supportsFullScreen = function() {
							return this.techGet_("supportsFullScreen") || !1
					}
					,
					i.isFullscreen = function(e) {
							if (void 0 !== e) {
									var t = this.isFullscreen_;
									return this.isFullscreen_ = Boolean(e),
									this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"),
									void this.toggleFullscreenClass_()
							}
							return this.isFullscreen_
					}
					,
					i.requestFullscreen = function(e) {
							var t, i = this;
							if (this.fsApi_.prefixed || (t = this.options_.fullscreen && this.options_.fullscreen.options || {},
							void 0 !== e && (t = e)),
							this.fsApi_.requestFullscreen) {
									var n = this.el_[this.fsApi_.requestFullscreen](t);
									return n && n.then((function() {
											return i.isFullscreen(!0)
									}
									), (function() {
											return i.isFullscreen(!1)
									}
									)),
									n
							}
							this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : this.enterFullWindow()
					}
					,
					i.exitFullscreen = function() {
							var e = this;
							if (this.fsApi_.requestFullscreen) {
									var t = s.a[this.fsApi_.exitFullscreen]();
									return t && t.then((function() {
											return e.isFullscreen(!1)
									}
									)),
									t
							}
							this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : this.exitFullWindow()
					}
					,
					i.enterFullWindow = function() {
							this.isFullscreen(!0),
							this.isFullWindow = !0,
							this.docOrigOverflow = s.a.documentElement.style.overflow,
							Yt(s.a, "keydown", this.boundFullWindowOnEscKey_),
							s.a.documentElement.style.overflow = "hidden",
							lt(s.a.body, "vjs-full-window"),
							this.trigger("enterFullWindow")
					}
					,
					i.fullWindowOnEscKey = function(e) {
							g.a.isEventKey(e, "Esc") && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
					}
					,
					i.exitFullWindow = function() {
							this.isFullscreen(!1),
							this.isFullWindow = !1,
							Xt(s.a, "keydown", this.boundFullWindowOnEscKey_),
							s.a.documentElement.style.overflow = this.docOrigOverflow,
							ct(s.a.body, "vjs-full-window"),
							this.trigger("exitFullWindow")
					}
					,
					i.isInPictureInPicture = function(e) {
							return void 0 !== e ? (this.isInPictureInPicture_ = !!e,
							void this.togglePictureInPictureClass_()) : !!this.isInPictureInPicture_
					}
					,
					i.requestPictureInPicture = function() {
							if ("pictureInPictureEnabled"in s.a)
									return this.techGet_("requestPictureInPicture")
					}
					,
					i.exitPictureInPicture = function() {
							if ("pictureInPictureEnabled"in s.a)
									return s.a.exitPictureInPicture()
					}
					,
					i.handleKeyDown = function(e) {
							var t = this.options_.userActions;
							if (t && t.hotkeys) {
									(function(e) {
											var t = e.tagName.toLowerCase();
											if (e.isContentEditable)
													return !0;
											if ("input" === t)
													return -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(e.type);
											return -1 !== ["textarea"].indexOf(t)
									}
									)(this.el_.ownerDocument.activeElement) || ("function" == typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e))
							}
					}
					,
					i.handleHotkeys = function(e) {
							var t = this.options_.userActions ? this.options_.userActions.hotkeys : {}
								, i = t.fullscreenKey
								, n = void 0 === i ? function(e) {
									return g.a.isEventKey(e, "f")
							}
							: i
								, r = t.muteKey
								, a = void 0 === r ? function(e) {
									return g.a.isEventKey(e, "m")
							}
							: r
								, o = t.playPauseKey
								, u = void 0 === o ? function(e) {
									return g.a.isEventKey(e, "k") || g.a.isEventKey(e, "Space")
							}
							: o;
							if (n.call(this, e)) {
									e.preventDefault(),
									e.stopPropagation();
									var l = vi.getComponent("FullscreenToggle");
									!1 !== s.a[this.fsApi_.fullscreenEnabled] && l.prototype.handleClick.call(this, e)
							} else if (a.call(this, e)) {
									e.preventDefault(),
									e.stopPropagation(),
									vi.getComponent("MuteToggle").prototype.handleClick.call(this, e)
							} else if (u.call(this, e)) {
									e.preventDefault(),
									e.stopPropagation(),
									vi.getComponent("PlayToggle").prototype.handleClick.call(this, e)
							}
					}
					,
					i.canPlayType = function(e) {
							for (var t, i = 0, n = this.options_.techOrder; i < n.length; i++) {
									var r = n[i]
										, a = Dn.getTech(r);
									if (a || (a = vi.getComponent(r)),
									a) {
											if (a.isSupported() && (t = a.canPlayType(e)))
													return t
									} else
											We.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
							}
							return ""
					}
					,
					i.selectSource = function(e) {
							var t, i = this, n = this.options_.techOrder.map((function(e) {
									return [e, Dn.getTech(e)]
							}
							)).filter((function(e) {
									var t = e[0]
										, i = e[1];
									return i ? i.isSupported() : (We.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'),
									!1)
							}
							)), r = function(e, t, i) {
									var n;
									return e.some((function(e) {
											return t.some((function(t) {
													if (n = i(e, t))
															return !0
											}
											))
									}
									)),
									n
							}, a = function(e, t) {
									var n = e[0];
									if (e[1].canPlaySource(t, i.options_[n.toLowerCase()]))
											return {
													source: t,
													tech: n
											}
							};
							return (this.options_.sourceOrder ? r(e, n, (t = a,
							function(e, i) {
									return t(i, e)
							}
							)) : r(n, e, a)) || !1
					}
					,
					i.src = function(e) {
							var t = this;
							if (void 0 === e)
									return this.cache_.src || "";
							var i = function e(t) {
									if (Array.isArray(t)) {
											var i = [];
											t.forEach((function(t) {
													t = e(t),
													Array.isArray(t) ? i = i.concat(t) : $e(t) && i.push(t)
											}
											)),
											t = i
									} else
											t = "string" == typeof t && t.trim() ? [zn({
													src: t
											})] : $e(t) && "string" == typeof t.src && t.src && t.src.trim() ? [zn(t)] : [];
									return t
							}(e);
							i.length ? (this.changingSrc_ = !0,
							this.cache_.sources = i,
							this.updateSourceCaches_(i[0]),
							Mn(this, i[0], (function(e, n) {
									var r, a;
									if (t.middleware_ = n,
									t.cache_.sources = i,
									t.updateSourceCaches_(e),
									t.src_(e))
											return i.length > 1 ? t.src(i.slice(1)) : (t.changingSrc_ = !1,
											t.setTimeout((function() {
													this.error({
															code: 4,
															message: this.localize(this.options_.notSupportedMessage)
													})
											}
											), 0),
											void t.triggerReady());
									r = n,
									a = t.tech_,
									r.forEach((function(e) {
											return e.setTech && e.setTech(a)
									}
									))
							}
							))) : this.setTimeout((function() {
									this.error({
											code: 4,
											message: this.localize(this.options_.notSupportedMessage)
									})
							}
							), 0)
					}
					,
					i.src_ = function(e) {
							var t, i, n = this, r = this.selectSource([e]);
							return !r || (t = r.tech,
							i = this.techName_,
							mi(t) !== mi(i) ? (this.changingSrc_ = !0,
							this.loadTech_(r.tech, r.source),
							this.tech_.ready((function() {
									n.changingSrc_ = !1
							}
							)),
							!1) : (this.ready((function() {
									this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src),
									this.changingSrc_ = !1
							}
							), !0),
							!1))
					}
					,
					i.load = function() {
							this.techCall_("load")
					}
					,
					i.reset = function() {
							var e = this
								, t = this.options_.Promise || r.a.Promise;
							this.paused() || !t ? this.doReset_() : Zi(this.play().then((function() {
									return e.doReset_()
							}
							)))
					}
					,
					i.doReset_ = function() {
							this.tech_ && this.tech_.clearTracks("text"),
							this.resetCache_(),
							this.poster(""),
							this.loadTech_(this.options_.techOrder[0], null),
							this.techCall_("reset"),
							this.resetControlBarUI_(),
							ni(this) && this.trigger("playerreset")
					}
					,
					i.resetControlBarUI_ = function() {
							this.resetProgressBar_(),
							this.resetPlaybackRate_(),
							this.resetVolumeBar_()
					}
					,
					i.resetProgressBar_ = function() {
							this.currentTime(0);
							var e = this.controlBar
								, t = e.durationDisplay
								, i = e.remainingTimeDisplay;
							t && t.updateContent(),
							i && i.updateContent()
					}
					,
					i.resetPlaybackRate_ = function() {
							this.playbackRate(this.defaultPlaybackRate()),
							this.handleTechRateChange_()
					}
					,
					i.resetVolumeBar_ = function() {
							this.volume(1),
							this.trigger("volumechange")
					}
					,
					i.currentSources = function() {
							var e = this.currentSource()
								, t = [];
							return 0 !== Object.keys(e).length && t.push(e),
							this.cache_.sources || t
					}
					,
					i.currentSource = function() {
							return this.cache_.source || {}
					}
					,
					i.currentSrc = function() {
							return this.currentSource() && this.currentSource().src || ""
					}
					,
					i.currentType = function() {
							return this.currentSource() && this.currentSource().type || ""
					}
					,
					i.preload = function(e) {
							return void 0 !== e ? (this.techCall_("setPreload", e),
							void (this.options_.preload = e)) : this.techGet_("preload")
					}
					,
					i.autoplay = function(e) {
							if (void 0 === e)
									return this.options_.autoplay || !1;
							var t;
							"string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e,
							this.manualAutoplay_(e),
							t = !1) : this.options_.autoplay = !!e,
							t = void 0 === t ? this.options_.autoplay : t,
							this.tech_ && this.techCall_("setAutoplay", t)
					}
					,
					i.playsinline = function(e) {
							return void 0 !== e ? (this.techCall_("setPlaysinline", e),
							this.options_.playsinline = e,
							this) : this.techGet_("playsinline")
					}
					,
					i.loop = function(e) {
							return void 0 !== e ? (this.techCall_("setLoop", e),
							void (this.options_.loop = e)) : this.techGet_("loop")
					}
					,
					i.poster = function(e) {
							if (void 0 === e)
									return this.poster_;
							e || (e = ""),
							e !== this.poster_ && (this.poster_ = e,
							this.techCall_("setPoster", e),
							this.isPosterFromTech_ = !1,
							this.trigger("posterchange"))
					}
					,
					i.handleTechPosterChange_ = function() {
							if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
									var e = this.tech_.poster() || "";
									e !== this.poster_ && (this.poster_ = e,
									this.isPosterFromTech_ = !0,
									this.trigger("posterchange"))
							}
					}
					,
					i.controls = function(e) {
							if (void 0 === e)
									return !!this.controls_;
							e = !!e,
							this.controls_ !== e && (this.controls_ = e,
							this.usingNativeControls() && this.techCall_("setControls", e),
							this.controls_ ? (this.removeClass("vjs-controls-disabled"),
							this.addClass("vjs-controls-enabled"),
							this.trigger("controlsenabled"),
							this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"),
							this.addClass("vjs-controls-disabled"),
							this.trigger("controlsdisabled"),
							this.usingNativeControls() || this.removeTechControlsListeners_()))
					}
					,
					i.usingNativeControls = function(e) {
							if (void 0 === e)
									return !!this.usingNativeControls_;
							e = !!e,
							this.usingNativeControls_ !== e && (this.usingNativeControls_ = e,
							this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"),
							this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"),
							this.trigger("usingcustomcontrols")))
					}
					,
					i.error = function(e) {
							if (void 0 === e)
									return this.error_ || null;
							if (this.options_.suppressNotSupportedError && e && 4 === e.code) {
									var t = function() {
											this.error(e)
									};
									return this.options_.suppressNotSupportedError = !1,
									this.any(["click", "touchstart"], t),
									void this.one("loadstart", (function() {
											this.off(["click", "touchstart"], t)
									}
									))
							}
							if (null === e)
									return this.error_ = e,
									this.removeClass("vjs-error"),
									void (this.errorDisplay && this.errorDisplay.close());
							this.error_ = new $i(e),
							this.addClass("vjs-error"),
							We.error("(CODE:" + this.error_.code + " " + $i.errorTypes[this.error_.code] + ")", this.error_.message, this.error_),
							this.trigger("error")
					}
					,
					i.reportUserActivity = function(e) {
							this.userActivity_ = !0
					}
					,
					i.userActive = function(e) {
							if (void 0 === e)
									return this.userActive_;
							if ((e = !!e) !== this.userActive_) {
									if (this.userActive_ = e,
									this.userActive_)
											return this.userActivity_ = !0,
											this.removeClass("vjs-user-inactive"),
											this.addClass("vjs-user-active"),
											void this.trigger("useractive");
									this.tech_ && this.tech_.one("mousemove", (function(e) {
											e.stopPropagation(),
											e.preventDefault()
									}
									)),
									this.userActivity_ = !1,
									this.removeClass("vjs-user-active"),
									this.addClass("vjs-user-inactive"),
									this.trigger("userinactive")
							}
					}
					,
					i.listenForUserActivity_ = function() {
							var e, t, i, n = ei(this, this.reportUserActivity), r = function(t) {
									n(),
									this.clearInterval(e)
							};
							this.on("mousedown", (function() {
									n(),
									this.clearInterval(e),
									e = this.setInterval(n, 250)
							}
							)),
							this.on("mousemove", (function(e) {
									e.screenX === t && e.screenY === i || (t = e.screenX,
									i = e.screenY,
									n())
							}
							)),
							this.on("mouseup", r),
							this.on("mouseleave", r);
							var a, s = this.getChild("controlBar");
							!s || Mi || ki || (s.on("mouseenter", (function(e) {
									this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout,
									this.player().options_.inactivityTimeout = 0
							}
							)),
							s.on("mouseleave", (function(e) {
									this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
							}
							))),
							this.on("keydown", n),
							this.on("keyup", n),
							this.setInterval((function() {
									if (this.userActivity_) {
											this.userActivity_ = !1,
											this.userActive(!0),
											this.clearTimeout(a);
											var e = this.options_.inactivityTimeout;
											e <= 0 || (a = this.setTimeout((function() {
													this.userActivity_ || this.userActive(!1)
											}
											), e))
									}
							}
							), 250)
					}
					,
					i.playbackRate = function(e) {
							if (void 0 === e)
									return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
							this.techCall_("setPlaybackRate", e)
					}
					,
					i.defaultPlaybackRate = function(e) {
							return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
					}
					,
					i.isAudio = function(e) {
							if (void 0 === e)
									return !!this.isAudio_;
							this.isAudio_ = !!e
					}
					,
					i.addTextTrack = function(e, t, i) {
							if (this.tech_)
									return this.tech_.addTextTrack(e, t, i)
					}
					,
					i.addRemoteTextTrack = function(e, t) {
							if (this.tech_)
									return this.tech_.addRemoteTextTrack(e, t)
					}
					,
					i.removeRemoteTextTrack = function(e) {
							void 0 === e && (e = {});
							var t = e.track;
							if (t || (t = e),
							this.tech_)
									return this.tech_.removeRemoteTextTrack(t)
					}
					,
					i.getVideoPlaybackQuality = function() {
							return this.techGet_("getVideoPlaybackQuality")
					}
					,
					i.videoWidth = function() {
							return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
					}
					,
					i.videoHeight = function() {
							return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
					}
					,
					i.language = function(e) {
							if (void 0 === e)
									return this.language_;
							this.language_ = String(e).toLowerCase()
					}
					,
					i.languages = function() {
							return gi(t.prototype.options_.languages, this.languages_)
					}
					,
					i.toJSON = function() {
							var e = gi(this.options_)
								, t = e.tracks;
							e.tracks = [];
							for (var i = 0; i < t.length; i++) {
									var n = t[i];
									(n = gi(n)).player = void 0,
									e.tracks[i] = n
							}
							return e
					}
					,
					i.createModal = function(e, t) {
							var i = this;
							(t = t || {}).content = e || "";
							var n = new rn(this,t);
							return this.addChild(n),
							n.on("dispose", (function() {
									i.removeChild(n)
							}
							)),
							n.open(),
							n
					}
					,
					i.updateCurrentBreakpoint_ = function() {
							if (this.responsive())
									for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < Aa.length; i++) {
											var n = Aa[i];
											if (t <= this.breakpoints_[n]) {
													if (e === n)
															return;
													e && this.removeClass(xa[e]),
													this.addClass(xa[n]),
													this.breakpoint_ = n;
													break
											}
									}
					}
					,
					i.removeCurrentBreakpoint_ = function() {
							var e = this.currentBreakpointClass();
							this.breakpoint_ = "",
							e && this.removeClass(e)
					}
					,
					i.breakpoints = function(e) {
							return void 0 === e || (this.breakpoint_ = "",
							this.breakpoints_ = Ke({}, Oa, e),
							this.updateCurrentBreakpoint_()),
							Ke(this.breakpoints_)
					}
					,
					i.responsive = function(e) {
							return void 0 === e ? this.responsive_ : (e = Boolean(e)) !== this.responsive_ ? (this.responsive_ = e,
							e ? (this.on("playerresize", this.updateCurrentBreakpoint_),
							this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_),
							this.removeCurrentBreakpoint_()),
							e) : void 0
					}
					,
					i.currentBreakpoint = function() {
							return this.breakpoint_
					}
					,
					i.currentBreakpointClass = function() {
							return xa[this.breakpoint_] || ""
					}
					,
					i.loadMedia = function(e, t) {
							var i = this;
							if (e && "object" == typeof e) {
									this.reset(),
									this.cache_.media = gi(e);
									var n = this.cache_.media
										, r = n.artwork
										, a = n.poster
										, s = n.src
										, o = n.textTracks;
									!r && a && (this.cache_.media.artwork = [{
											src: a,
											type: Wn(a)
									}]),
									s && this.src(s),
									a && this.poster(a),
									Array.isArray(o) && o.forEach((function(e) {
											return i.addRemoteTextTrack(e, !1)
									}
									)),
									this.ready(t)
							}
					}
					,
					i.getMedia = function() {
							if (!this.cache_.media) {
									var e = this.poster()
										, t = {
											src: this.currentSources(),
											textTracks: Array.prototype.map.call(this.remoteTextTracks(), (function(e) {
													return {
															kind: e.kind,
															label: e.label,
															language: e.language,
															src: e.src
													}
											}
											))
									};
									return e && (t.poster = e,
									t.artwork = [{
											src: t.poster,
											type: Wn(t.poster)
									}]),
									t
							}
							return gi(this.cache_.media)
					}
					,
					t.getTagSettings = function(e) {
							var t = {
									sources: [],
									tracks: []
							}
								, i = pt(e)
								, n = i["data-setup"];
							if (ut(e, "vjs-fill") && (i.fill = !0),
							ut(e, "vjs-fluid") && (i.fluid = !0),
							null !== n) {
									var r = f()(n || "{}")
										, a = r[0]
										, s = r[1];
									a && We.error(a),
									Ke(i, s)
							}
							if (Ke(t, i),
							e.hasChildNodes())
									for (var o = e.childNodes, u = 0, l = o.length; u < l; u++) {
											var c = o[u]
												, h = c.nodeName.toLowerCase();
											"source" === h ? t.sources.push(pt(c)) : "track" === h && t.tracks.push(pt(c))
									}
							return t
					}
					,
					i.flexNotSupported_ = function() {
							var e = s.a.createElement("i");
							return !("flexBasis"in e.style || "webkitFlexBasis"in e.style || "mozFlexBasis"in e.style || "msFlexBasis"in e.style || "msFlexOrder"in e.style)
					}
					,
					t
			}(vi);
			Ln.names.forEach((function(e) {
					var t = Ln[e];
					Pa.prototype[t.getterName] = function() {
							return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass,
							this[t.privateName])
					}
			}
			)),
			Pa.players = {};
			var Ia = r.a.navigator;
			Pa.prototype.options_ = {
					techOrder: Dn.defaultTechOrder_,
					html5: {},
					flash: {},
					inactivityTimeout: 2e3,
					playbackRates: [],
					liveui: !1,
					children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
					language: Ia && (Ia.languages && Ia.languages[0] || Ia.userLanguage || Ia.language) || "en",
					languages: {},
					notSupportedMessage: "No compatible source was found for this media.",
					fullscreen: {
							options: {
									navigationUI: "hide"
							}
					},
					breakpoints: {},
					responsive: !1
			},
			["ended", "seeking", "seekable", "networkState", "readyState"].forEach((function(e) {
					Pa.prototype[e] = function() {
							return this.techGet_(e)
					}
			}
			)),
			Ea.forEach((function(e) {
					Pa.prototype["handleTech" + mi(e) + "_"] = function() {
							return this.trigger(e)
					}
			}
			)),
			vi.registerComponent("Player", Pa);
			var La = {}
				, Da = function(e) {
					return La.hasOwnProperty(e)
			}
				, Ra = function(e) {
					return Da(e) ? La[e] : void 0
			}
				, Na = function(e, t) {
					e.activePlugins_ = e.activePlugins_ || {},
					e.activePlugins_[t] = !0
			}
				, Ua = function(e, t, i) {
					var n = (i ? "before" : "") + "pluginsetup";
					e.trigger(n, t),
					e.trigger(n + ":" + t.name, t)
			}
				, Ma = function(e, t) {
					return t.prototype.name = e,
					function() {
							Ua(this, {
									name: e,
									plugin: t,
									instance: null
							}, !0);
							for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
									n[r] = arguments[r];
							var a = S()(t, [this].concat(n));
							return this[e] = function() {
									return a
							}
							,
							Ua(this, a.getEventHash()),
							a
					}
			}
				, ja = function() {
					function e(t) {
							if (this.constructor === e)
									throw new Error("Plugin must be sub-classed; not directly instantiated.");
							this.player = t,
							hi(this),
							delete this.trigger,
							pi(this, this.constructor.defaultState),
							Na(t, this.name),
							this.dispose = ei(this, this.dispose),
							t.on("dispose", this.dispose)
					}
					var t = e.prototype;
					return t.version = function() {
							return this.constructor.VERSION
					}
					,
					t.getEventHash = function(e) {
							return void 0 === e && (e = {}),
							e.name = this.name,
							e.plugin = this.constructor,
							e.instance = this,
							e
					}
					,
					t.trigger = function(e, t) {
							return void 0 === t && (t = {}),
							Kt(this.eventBusEl_, e, this.getEventHash(t))
					}
					,
					t.handleStateChanged = function(e) {}
					,
					t.dispose = function() {
							var e = this.name
								, t = this.player;
							this.trigger("dispose"),
							this.off(),
							t.off("dispose", this.dispose),
							t.activePlugins_[e] = !1,
							this.player = this.state = null,
							t[e] = Ma(e, La[e])
					}
					,
					e.isBasic = function(t) {
							var i = "string" == typeof t ? Ra(t) : t;
							return "function" == typeof i && !e.prototype.isPrototypeOf(i.prototype)
					}
					,
					e.registerPlugin = function(t, i) {
							if ("string" != typeof t)
									throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + typeof t + ".");
							if (Da(t))
									We.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!');
							else if (Pa.prototype.hasOwnProperty(t))
									throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!');
							if ("function" != typeof i)
									throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + typeof i + ".");
							return La[t] = i,
							"plugin" !== t && (e.isBasic(i) ? Pa.prototype[t] = function(e, t) {
									var i = function() {
											Ua(this, {
													name: e,
													plugin: t,
													instance: null
											}, !0);
											var i = t.apply(this, arguments);
											return Na(this, e),
											Ua(this, {
													name: e,
													plugin: t,
													instance: i
											}),
											i
									};
									return Object.keys(t).forEach((function(e) {
											i[e] = t[e]
									}
									)),
									i
							}(t, i) : Pa.prototype[t] = Ma(t, i)),
							i
					}
					,
					e.deregisterPlugin = function(e) {
							if ("plugin" === e)
									throw new Error("Cannot de-register base plugin.");
							Da(e) && (delete La[e],
							delete Pa.prototype[e])
					}
					,
					e.getPlugins = function(e) {
							var t;
							return void 0 === e && (e = Object.keys(La)),
							e.forEach((function(e) {
									var i = Ra(e);
									i && ((t = t || {})[e] = i)
							}
							)),
							t
					}
					,
					e.getPluginVersion = function(e) {
							var t = Ra(e);
							return t && t.VERSION || ""
					}
					,
					e
			}();
			ja.getPlugin = Ra,
			ja.BASE_PLUGIN_NAME = "plugin",
			ja.registerPlugin("plugin", ja),
			Pa.prototype.usingPlugin = function(e) {
					return !!this.activePlugins_ && !0 === this.activePlugins_[e]
			}
			,
			Pa.prototype.hasPlugin = function(e) {
					return !!Da(e)
			}
			;
			var Ba = function(e) {
					return 0 === e.indexOf("#") ? e.slice(1) : e
			};
			function Fa(e, t, i) {
					var n = Fa.getPlayer(e);
					if (n)
							return t && We.warn('Player "' + e + '" is already initialised. Options will not be applied.'),
							i && n.ready(i),
							n;
					var r = "string" == typeof e ? Ot("#" + Ba(e)) : e;
					if (!it(r))
							throw new TypeError("The element or ID supplied is not valid. (videojs)");
					r.ownerDocument.defaultView && r.ownerDocument.body.contains(r) || We.warn("The element supplied is not included in the DOM"),
					t = t || {},
					Fa.hooks("beforesetup").forEach((function(e) {
							var i = e(r, gi(t));
							$e(i) && !Array.isArray(i) ? t = gi(t, i) : We.error("please return an object in beforesetup hooks")
					}
					));
					var a = vi.getComponent("Player");
					return n = new a(r,t,i),
					Fa.hooks("setup").forEach((function(e) {
							return e(n)
					}
					)),
					n
			}
			if (Fa.hooks_ = {},
			Fa.hooks = function(e, t) {
					return Fa.hooks_[e] = Fa.hooks_[e] || [],
					t && (Fa.hooks_[e] = Fa.hooks_[e].concat(t)),
					Fa.hooks_[e]
			}
			,
			Fa.hook = function(e, t) {
					Fa.hooks(e, t)
			}
			,
			Fa.hookOnce = function(e, t) {
					Fa.hooks(e, [].concat(t).map((function(t) {
							return function i() {
									return Fa.removeHook(e, i),
									t.apply(void 0, arguments)
							}
					}
					)))
			}
			,
			Fa.removeHook = function(e, t) {
					var i = Fa.hooks(e).indexOf(t);
					return !(i <= -1) && (Fa.hooks_[e] = Fa.hooks_[e].slice(),
					Fa.hooks_[e].splice(i, 1),
					!0)
			}
			,
			!0 !== r.a.VIDEOJS_NO_DYNAMIC_STYLE && tt()) {
					var qa = Ot(".vjs-styles-defaults");
					if (!qa) {
							qa = Mt("vjs-styles-defaults");
							var Ha = Ot("head");
							Ha && Ha.insertBefore(qa, Ha.firstChild),
							jt(qa, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
					}
			}
			Rt(1, Fa),
			Fa.VERSION = "7.7.5",
			Fa.options = Pa.prototype.options_,
			Fa.getPlayers = function() {
					return Pa.players
			}
			,
			Fa.getPlayer = function(e) {
					var t, i = Pa.players;
					if ("string" == typeof e) {
							var n = Ba(e)
								, r = i[n];
							if (r)
									return r;
							t = Ot("#" + n)
					} else
							t = e;
					if (it(t)) {
							var a = t
								, s = a.player
								, o = a.playerId;
							if (s || i[o])
									return s || i[o]
					}
			}
			,
			Fa.getAllPlayers = function() {
					return Object.keys(Pa.players).map((function(e) {
							return Pa.players[e]
					}
					)).filter(Boolean)
			}
			,
			Fa.players = Pa.players,
			Fa.getComponent = vi.getComponent,
			Fa.registerComponent = function(e, t) {
					Dn.isTech(t) && We.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),
					vi.registerComponent.call(vi, e, t)
			}
			,
			Fa.getTech = Dn.getTech,
			Fa.registerTech = Dn.registerTech,
			Fa.use = function(e, t) {
					Rn[e] = Rn[e] || [],
					Rn[e].push(t)
			}
			,
			Object.defineProperty(Fa, "middleware", {
					value: {},
					writeable: !1,
					enumerable: !0
			}),
			Object.defineProperty(Fa.middleware, "TERMINATOR", {
					value: Un,
					writeable: !1,
					enumerable: !0
			}),
			Fa.browser = Bi,
			Fa.TOUCH_ENABLED = Ri,
			Fa.extend = function(e, t) {
					void 0 === t && (t = {});
					var i = function() {
							e.apply(this, arguments)
					}
						, n = {};
					for (var r in "object" == typeof t ? (t.constructor !== Object.prototype.constructor && (i = t.constructor),
					n = t) : "function" == typeof t && (i = t),
					k()(i, e),
					e && (i.super_ = e),
					n)
							n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
					return i
			}
			,
			Fa.mergeOptions = gi,
			Fa.bind = ei,
			Fa.registerPlugin = ja.registerPlugin,
			Fa.deregisterPlugin = ja.deregisterPlugin,
			Fa.plugin = function(e, t) {
					return We.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),
					ja.registerPlugin(e, t)
			}
			,
			Fa.getPlugins = ja.getPlugins,
			Fa.getPlugin = ja.getPlugin,
			Fa.getPluginVersion = ja.getPluginVersion,
			Fa.addLanguage = function(e, t) {
					var i;
					return e = ("" + e).toLowerCase(),
					Fa.options.languages = gi(Fa.options.languages, ((i = {})[e] = t,
					i)),
					Fa.options.languages[e]
			}
			,
			Fa.log = We,
			Fa.createLogger = ze,
			Fa.createTimeRange = Fa.createTimeRanges = Hi,
			Fa.formatTime = sr,
			Fa.setFormatTime = function(e) {
					ar = e
			}
			,
			Fa.resetFormatTime = function() {
					ar = rr
			}
			,
			Fa.parseUrl = _n,
			Fa.isCrossOrigin = Sn,
			Fa.EventTarget = ii,
			Fa.on = Yt,
			Fa.one = $t,
			Fa.off = Xt,
			Fa.trigger = Kt,
			Fa.xhr = y.a,
			Fa.TextTrack = Cn,
			Fa.AudioTrack = An,
			Fa.VideoTrack = xn,
			["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach((function(e) {
					Fa[e] = function() {
							return We.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"),
							It[e].apply(null, arguments)
					}
			}
			)),
			Fa.computedStyle = Je,
			Fa.dom = It,
			Fa.url = wn,
			Fa.defineLazyProperty = wa;
			var Va = function(e, t) {
					return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = C.a.buildAbsoluteURL(r.a.location.href, e)),
					C.a.buildAbsoluteURL(e, t))
			}
				, Wa = function(e, t, i) {
					return e && i.responseURL && t !== i.responseURL ? i.responseURL : t
			}
				, za = function(e, t) {
					if (!(e instanceof t))
							throw new TypeError("Cannot call a class as a function")
			}
				, Ga = function() {
					function e(e, t) {
							for (var i = 0; i < t.length; i++) {
									var n = t[i];
									n.enumerable = n.enumerable || !1,
									n.configurable = !0,
									"value"in n && (n.writable = !0),
									Object.defineProperty(e, n.key, n)
							}
					}
					return function(t, i, n) {
							return i && e(t.prototype, i),
							n && e(t, n),
							t
					}
			}()
				, Ya = function(e, t) {
					if ("function" != typeof t && null !== t)
							throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
							constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0
							}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}
				, Xa = function(e, t) {
					if (!e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
				, Ka = function(e, t) {
					if (Array.isArray(e))
							return e;
					if (Symbol.iterator in Object(e))
							return function(e, t) {
									var i = []
										, n = !0
										, r = !1
										, a = void 0;
									try {
											for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value),
											!t || i.length !== t); n = !0)
													;
									} catch (e) {
											r = !0,
											a = e
									} finally {
											try {
													!n && o.return && o.return()
											} finally {
													if (r)
															throw a
											}
									}
									return i
							}(e, t);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
				, $a = Fa.mergeOptions
				, Qa = Fa.EventTarget
				, Ja = Fa.log
				, Za = function(e, t) {
					["AUDIO", "SUBTITLES"].forEach((function(i) {
							for (var n in e.mediaGroups[i])
									for (var r in e.mediaGroups[i][n]) {
											var a = e.mediaGroups[i][n][r];
											t(a, i, n, r)
									}
					}
					))
			}
				, es = function(e, t) {
					var i = $a(e, {})
						, n = i.playlists[t.uri];
					if (!n)
							return null;
					if (n.segments && t.segments && n.segments.length === t.segments.length && n.endList === t.endList && n.mediaSequence === t.mediaSequence)
							return null;
					var r = $a(n, t);
					n.segments && (r.segments = function(e, t, i) {
							var n = t.slice();
							i = i || 0;
							for (var r = Math.min(e.length, t.length + i), a = i; a < r; a++)
									n[a - i] = $a(e[a], n[a - i]);
							return n
					}(n.segments, t.segments, t.mediaSequence - n.mediaSequence)),
					r.segments.forEach((function(e) {
							!function(e, t) {
									e.resolvedUri || (e.resolvedUri = Va(t, e.uri)),
									e.key && !e.key.resolvedUri && (e.key.resolvedUri = Va(t, e.key.uri)),
									e.map && !e.map.resolvedUri && (e.map.resolvedUri = Va(t, e.map.uri))
							}(e, r.resolvedUri)
					}
					));
					for (var a = 0; a < i.playlists.length; a++)
							i.playlists[a].uri === t.uri && (i.playlists[a] = r);
					return i.playlists[t.uri] = r,
					i
			}
				, ts = function(e) {
					for (var t = e.playlists.length; t--; ) {
							var i = e.playlists[t];
							e.playlists[i.uri] = i,
							i.resolvedUri = Va(e.uri, i.uri),
							i.id = t,
							i.attributes || (i.attributes = {},
							Ja.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
					}
			}
				, is = function(e) {
					Za(e, (function(t) {
							t.uri && (t.resolvedUri = Va(e.uri, t.uri))
					}
					))
			}
				, ns = function(e, t) {
					var i = e.segments[e.segments.length - 1];
					return t && i && i.duration ? 1e3 * i.duration : 500 * (e.targetDuration || 10)
			}
				, rs = function(e) {
					function t(e, i) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							za(this, t);
							var r = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
								, a = n.withCredentials
								, s = void 0 !== a && a
								, o = n.handleManifestRedirects
								, u = void 0 !== o && o;
							r.srcUrl = e,
							r.hls_ = i,
							r.withCredentials = s,
							r.handleManifestRedirects = u;
							var l = i.options_;
							if (r.customTagParsers = l && l.customTagParsers || [],
							r.customTagMappers = l && l.customTagMappers || [],
							!r.srcUrl)
									throw new Error("A non-empty playlist URL is required");
							return r.state = "HAVE_NOTHING",
							r.on("mediaupdatetimeout", (function() {
									"HAVE_METADATA" === r.state && (r.state = "HAVE_CURRENT_METADATA",
									r.request = r.hls_.xhr({
											uri: Va(r.master.uri, r.media().uri),
											withCredentials: r.withCredentials
									}, (function(e, t) {
											if (r.request)
													return e ? r.playlistRequestError(r.request, r.media().uri, "HAVE_METADATA") : void r.haveMetadata(r.request, r.media().uri)
									}
									)))
							}
							)),
							r
					}
					return Ya(t, e),
					Ga(t, [{
							key: "playlistRequestError",
							value: function(e, t, i) {
									this.request = null,
									i && (this.state = i),
									this.error = {
											playlist: this.master.playlists[t],
											status: e.status,
											message: "HLS playlist request error at URL: " + t + ".",
											responseText: e.responseText,
											code: e.status >= 500 ? 4 : 2
									},
									this.trigger("error")
							}
					}, {
							key: "haveMetadata",
							value: function(e, t) {
									var i = this;
									this.request = null,
									this.state = "HAVE_METADATA";
									var n = new R;
									this.customTagParsers.forEach((function(e) {
											return n.addParser(e)
									}
									)),
									this.customTagMappers.forEach((function(e) {
											return n.addTagMapper(e)
									}
									)),
									n.push(e.responseText),
									n.end(),
									n.manifest.uri = t,
									n.manifest.attributes = n.manifest.attributes || {};
									var a = es(this.master, n.manifest);
									this.targetDuration = n.manifest.targetDuration,
									a ? (this.master = a,
									this.media_ = this.master.playlists[n.manifest.uri]) : this.trigger("playlistunchanged"),
									this.media().endList || (r.a.clearTimeout(this.mediaUpdateTimeout),
									this.mediaUpdateTimeout = r.a.setTimeout((function() {
											i.trigger("mediaupdatetimeout")
									}
									), ns(this.media(), !!a))),
									this.trigger("loadedplaylist")
							}
					}, {
							key: "dispose",
							value: function() {
									this.stopRequest(),
									r.a.clearTimeout(this.mediaUpdateTimeout),
									r.a.clearTimeout(this.finalRenditionTimeout)
							}
					}, {
							key: "stopRequest",
							value: function() {
									if (this.request) {
											var e = this.request;
											this.request = null,
											e.onreadystatechange = null,
											e.abort()
									}
							}
					}, {
							key: "media",
							value: function(e, t) {
									var i = this;
									if (!e)
											return this.media_;
									if ("HAVE_NOTHING" === this.state)
											throw new Error("Cannot switch media playlist from " + this.state);
									if ("string" == typeof e) {
											if (!this.master.playlists[e])
													throw new Error("Unknown playlist URI: " + e);
											e = this.master.playlists[e]
									}
									if (r.a.clearTimeout(this.finalRenditionTimeout),
									t) {
											var n = e.targetDuration / 2 * 1e3 || 5e3;
											this.finalRenditionTimeout = r.a.setTimeout(this.media.bind(this, e, !1), n)
									} else {
											var a = this.state
												, s = !this.media_ || e.uri !== this.media_.uri;
											if (this.master.playlists[e.uri].endList)
													return this.request && (this.request.onreadystatechange = null,
													this.request.abort(),
													this.request = null),
													this.state = "HAVE_METADATA",
													this.media_ = e,
													void (s && (this.trigger("mediachanging"),
													this.trigger("mediachange")));
											if (s) {
													if (this.state = "SWITCHING_MEDIA",
													this.request) {
															if (e.resolvedUri === this.request.url)
																	return;
															this.request.onreadystatechange = null,
															this.request.abort(),
															this.request = null
													}
													this.media_ && this.trigger("mediachanging"),
													this.request = this.hls_.xhr({
															uri: e.resolvedUri,
															withCredentials: this.withCredentials
													}, (function(t, n) {
															if (i.request) {
																	if (e.resolvedUri = Wa(i.handleManifestRedirects, e.resolvedUri, n),
																	t)
																			return i.playlistRequestError(i.request, e.uri, a);
																	i.haveMetadata(n, e.uri),
																	"HAVE_MASTER" === a ? i.trigger("loadedmetadata") : i.trigger("mediachange")
															}
													}
													))
											}
									}
							}
					}, {
							key: "pause",
							value: function() {
									this.stopRequest(),
									r.a.clearTimeout(this.mediaUpdateTimeout),
									"HAVE_NOTHING" === this.state && (this.started = !1),
									"SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
							}
					}, {
							key: "load",
							value: function(e) {
									var t = this;
									r.a.clearTimeout(this.mediaUpdateTimeout);
									var i = this.media();
									if (e) {
											var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
											this.mediaUpdateTimeout = r.a.setTimeout((function() {
													return t.load()
											}
											), n)
									} else
											this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
							}
					}, {
							key: "start",
							value: function() {
									var e = this;
									this.started = !0,
									this.request = this.hls_.xhr({
											uri: this.srcUrl,
											withCredentials: this.withCredentials
									}, (function(t, i) {
											if (e.request) {
													if (e.request = null,
													t)
															return e.error = {
																	status: i.status,
																	message: "HLS playlist request error at URL: " + e.srcUrl + ".",
																	responseText: i.responseText,
																	code: 2
															},
															"HAVE_NOTHING" === e.state && (e.started = !1),
															e.trigger("error");
													var n = new R;
													return e.customTagParsers.forEach((function(e) {
															return n.addParser(e)
													}
													)),
													e.customTagMappers.forEach((function(e) {
															return n.addTagMapper(e)
													}
													)),
													n.push(i.responseText),
													n.end(),
													e.state = "HAVE_MASTER",
													e.srcUrl = Wa(e.handleManifestRedirects, e.srcUrl, i),
													n.manifest.uri = e.srcUrl,
													n.manifest.playlists ? (e.master = n.manifest,
													ts(e.master),
													is(e.master),
													e.trigger("loadedplaylist"),
													void (e.request || e.media(n.manifest.playlists[0]))) : (e.master = {
															mediaGroups: {
																	AUDIO: {},
																	VIDEO: {},
																	"CLOSED-CAPTIONS": {},
																	SUBTITLES: {}
															},
															uri: r.a.location.href,
															playlists: [{
																	uri: e.srcUrl,
																	id: 0,
																	resolvedUri: e.srcUrl,
																	attributes: {}
															}]
													},
													e.master.playlists[e.srcUrl] = e.master.playlists[0],
													e.haveMetadata(i, e.srcUrl),
													e.trigger("loadedmetadata"))
											}
									}
									))
							}
					}]),
					t
			}(Qa)
				, as = Fa.createTimeRange
				, ss = function(e, t, i) {
					var n, r;
					return void 0 === t && (t = e.mediaSequence + e.segments.length),
					t < e.mediaSequence ? 0 : (n = function(e, t) {
							var i = 0
								, n = t - e.mediaSequence
								, r = e.segments[n];
							if (r) {
									if (void 0 !== r.start)
											return {
													result: r.start,
													precise: !0
											};
									if (void 0 !== r.end)
											return {
													result: r.end - r.duration,
													precise: !0
											}
							}
							for (; n--; ) {
									if (void 0 !== (r = e.segments[n]).end)
											return {
													result: i + r.end,
													precise: !0
											};
									if (i += r.duration,
									void 0 !== r.start)
											return {
													result: i + r.start,
													precise: !0
											}
							}
							return {
									result: i,
									precise: !1
							}
					}(e, t)).precise ? n.result : (r = function(e, t) {
							for (var i = 0, n = void 0, r = t - e.mediaSequence; r < e.segments.length; r++) {
									if (void 0 !== (n = e.segments[r]).start)
											return {
													result: n.start - i,
													precise: !0
											};
									if (i += n.duration,
									void 0 !== n.end)
											return {
													result: n.end - i,
													precise: !0
											}
							}
							return {
									result: -1,
									precise: !1
							}
					}(e, t)).precise ? r.result : n.result + i
			}
				, os = function(e, t, i) {
					if (!e)
							return 0;
					if ("number" != typeof i && (i = 0),
					void 0 === t) {
							if (e.totalDuration)
									return e.totalDuration;
							if (!e.endList)
									return r.a.Infinity
					}
					return ss(e, t, i)
			}
				, us = function(e, t, i) {
					var n = 0;
					if (t > i) {
							var r = [i, t];
							t = r[0],
							i = r[1]
					}
					if (t < 0) {
							for (var a = t; a < Math.min(0, i); a++)
									n += e.targetDuration;
							t = 0
					}
					for (var s = t; s < i; s++)
							n += e.segments[s].duration;
					return n
			}
				, ls = function(e) {
					if (!e.segments.length)
							return 0;
					for (var t = e.segments.length - 1, i = e.segments[t].duration || e.targetDuration, n = i + 2 * e.targetDuration; t-- && !((i += e.segments[t].duration) >= n); )
							;
					return Math.max(0, t)
			}
				, cs = function(e, t, i) {
					if (!e || !e.segments)
							return null;
					if (e.endList)
							return os(e);
					if (null === t)
							return null;
					t = t || 0;
					var n = i ? ls(e) : e.segments.length;
					return ss(e, e.mediaSequence + n, t)
			}
				, hs = function(e) {
					return e - Math.floor(e) == 0
			}
				, ds = function(e, t) {
					if (hs(t))
							return t + .1 * e;
					for (var i = t.toString().split(".")[1].length, n = 1; n <= i; n++) {
							var r = Math.pow(10, n)
								, a = t * r;
							if (hs(a) || n === i)
									return (a + e) / r
					}
			}
				, ps = ds.bind(null, 1)
				, fs = ds.bind(null, -1)
				, ms = function(e) {
					return e.excludeUntil && e.excludeUntil > Date.now()
			}
				, gs = function(e) {
					return e.excludeUntil && e.excludeUntil === 1 / 0
			}
				, vs = function(e) {
					var t = ms(e);
					return !e.disabled && !t
			}
				, ys = function(e, t) {
					return t.attributes && t.attributes[e]
			}
				, _s = function(e, t) {
					if (1 === e.playlists.length)
							return !0;
					var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
					return 0 === e.playlists.filter((function(e) {
							return !!vs(e) && (e.attributes.BANDWIDTH || 0) < i
					}
					)).length
			}
				, bs = {
					duration: os,
					seekable: function(e, t) {
							var i = t || 0
								, n = cs(e, t, !0);
							return null === n ? as() : as(i, n)
					},
					safeLiveIndex: ls,
					getMediaInfoForTime: function(e, t, i, n) {
							var r = void 0
								, a = void 0
								, s = e.segments.length
								, o = t - n;
							if (o < 0) {
									if (i > 0)
											for (r = i - 1; r >= 0; r--)
													if (a = e.segments[r],
													(o += fs(a.duration)) > 0)
															return {
																	mediaIndex: r,
																	startTime: n - us(e, i, r)
															};
									return {
											mediaIndex: 0,
											startTime: t
									}
							}
							if (i < 0) {
									for (r = i; r < 0; r++)
											if ((o -= e.targetDuration) < 0)
													return {
															mediaIndex: 0,
															startTime: t
													};
									i = 0
							}
							for (r = i; r < s; r++)
									if (a = e.segments[r],
									(o -= ps(a.duration)) < 0)
											return {
													mediaIndex: r,
													startTime: n + us(e, i, r)
											};
							return {
									mediaIndex: s - 1,
									startTime: t
							}
					},
					isEnabled: vs,
					isDisabled: function(e) {
							return e.disabled
					},
					isBlacklisted: ms,
					isIncompatible: gs,
					playlistEnd: cs,
					isAes: function(e) {
							for (var t = 0; t < e.segments.length; t++)
									if (e.segments[t].key)
											return !0;
							return !1
					},
					isFmp4: function(e) {
							for (var t = 0; t < e.segments.length; t++)
									if (e.segments[t].map)
											return !0;
							return !1
					},
					hasAttribute: ys,
					estimateSegmentRequestTime: function(e, t, i) {
							var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
							if (!ys("BANDWIDTH", i))
									return NaN;
							var r = e * i.attributes.BANDWIDTH;
							return (r - 8 * n) / t
					},
					isLowestEnabledRendition: _s
			}
				, Ts = Fa.xhr
				, Ss = Fa.mergeOptions
				, ws = function() {
					return function e(t, i) {
							t = Ss({
									timeout: 45e3
							}, t);
							var n = e.beforeRequest || Fa.Hls.xhr.beforeRequest;
							if (n && "function" == typeof n) {
									var r = n(t);
									r && (t = r)
							}
							var a = Ts(t, (function(e, t) {
									var n = a.response;
									!e && n && (a.responseTime = Date.now(),
									a.roundTripTime = a.responseTime - a.requestTime,
									a.bytesReceived = n.byteLength || n.length,
									a.bandwidth || (a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3))),
									t.headers && (a.responseHeaders = t.headers),
									e && "ETIMEDOUT" === e.code && (a.timedout = !0),
									e || a.aborted || 200 === t.statusCode || 206 === t.statusCode || 0 === t.statusCode || (e = new Error("XHR Failed with a response of: " + (a && (n || a.responseText)))),
									i(e, a)
							}
							))
								, s = a.abort;
							return a.abort = function() {
									return a.aborted = !0,
									s.apply(a, arguments)
							}
							,
							a.uri = t.uri,
							a.requestTime = Date.now(),
							a
					}
			}
				, ks = function(e) {
					var t, i, n = {};
					return e.byterange && (n.Range = (t = e.byterange,
					i = t.offset + t.length - 1,
					"bytes=" + t.offset + "-" + i)),
					n
			}
				, Es = function(e, t) {
					return e.start(t) + "-" + e.end(t)
			}
				, Cs = function(e, t) {
					var i = e.toString(16);
					return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "")
			}
				, As = function(e) {
					return e >= 32 && e < 126 ? String.fromCharCode(e) : "."
			}
				, xs = function(e) {
					var t = {};
					return Object.keys(e).forEach((function(i) {
							var n = e[i];
							ArrayBuffer.isView(n) ? t[i] = {
									bytes: n.buffer,
									byteOffset: n.byteOffset,
									byteLength: n.byteLength
							} : t[i] = n
					}
					)),
					t
			}
				, Os = function(e) {
					var t = e.byterange || {
							length: 1 / 0,
							offset: 0
					};
					return [t.length, t.offset, e.resolvedUri].join(",")
			}
				, Ps = function(e) {
					return e.resolvedUri
			}
				, Is = function(e) {
					for (var t = Array.prototype.slice.call(e), i = "", n = 0; n < t.length / 16; n++)
							i += t.slice(16 * n, 16 * n + 16).map(Cs).join("") + " " + t.slice(16 * n, 16 * n + 16).map(As).join("") + "\n";
					return i
			}
				, Ls = Object.freeze({
					createTransferableMessage: xs,
					initSegmentId: Os,
					segmentKeyId: Ps,
					hexDump: Is,
					tagDump: function(e) {
							var t = e.bytes;
							return Is(t)
					},
					textRanges: function(e) {
							var t = ""
								, i = void 0;
							for (i = 0; i < e.length; i++)
									t += Es(e, i) + " ";
							return t
					}
			})
				, Ds = function(e) {
					var t = e.playlist
						, i = e.time
						, n = void 0 === i ? void 0 : i
						, r = e.callback;
					if (!r)
							throw new Error("getProgramTime: callback must be provided");
					if (!t || void 0 === n)
							return r({
									message: "getProgramTime: playlist and time must be provided"
							});
					var a = function(e, t) {
							if (!t || !t.segments || 0 === t.segments.length)
									return null;
							for (var i = 0, n = void 0, r = 0; r < t.segments.length && !(e <= (i = (n = t.segments[r]).videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationEnd : i + n.duration)); r++)
									;
							var a = t.segments[t.segments.length - 1];
							if (a.videoTimingInfo && a.videoTimingInfo.transmuxedPresentationEnd < e)
									return null;
							if (e > i) {
									if (e > i + .25 * a.duration)
											return null;
									n = a
							}
							return {
									segment: n,
									estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : i - n.duration,
									type: n.videoTimingInfo ? "accurate" : "estimate"
							}
					}(n, t);
					if (!a)
							return r({
									message: "valid programTime was not found"
							});
					if ("estimate" === a.type)
							return r({
									message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
									seekTime: a.estimatedStart
							});
					var s = {
							mediaSeconds: n
					}
						, o = function(e, t) {
							if (!t.dateTimeObject)
									return null;
							var i = t.videoTimingInfo.transmuxerPrependedSeconds
								, n = e - (t.videoTimingInfo.transmuxedPresentationStart + i);
							return new Date(t.dateTimeObject.getTime() + 1e3 * n)
					}(n, a.segment);
					return o && (s.programDateTime = o.toISOString()),
					r(null, s)
			}
				, Rs = function e(t) {
					var i = t.programTime
						, n = t.playlist
						, r = t.retryCount
						, a = void 0 === r ? 2 : r
						, s = t.seekTo
						, o = t.pauseAfterSeek
						, u = void 0 === o || o
						, l = t.tech
						, c = t.callback;
					if (!c)
							throw new Error("seekToProgramTime: callback must be provided");
					if (void 0 === i || !n || !s)
							return c({
									message: "seekToProgramTime: programTime, seekTo and playlist must be provided"
							});
					if (!n.endList && !l.hasStarted_)
							return c({
									message: "player must be playing a live stream to start buffering"
							});
					if (!function(e) {
							if (!e.segments || 0 === e.segments.length)
									return !1;
							for (var t = 0; t < e.segments.length; t++) {
									if (!e.segments[t].dateTimeObject)
											return !1
							}
							return !0
					}(n))
							return c({
									message: "programDateTime tags must be provided in the manifest " + n.resolvedUri
							});
					var h = function(e, t) {
							var i = void 0;
							try {
									i = new Date(e)
							} catch (e) {
									return null
							}
							if (!t || !t.segments || 0 === t.segments.length)
									return null;
							var n = t.segments[0];
							if (i < n.dateTimeObject)
									return null;
							for (var r = 0; r < t.segments.length - 1; r++) {
									if (n = t.segments[r],
									i < t.segments[r + 1].dateTimeObject)
											break
							}
							var a, s = t.segments[t.segments.length - 1], o = s.dateTimeObject, u = s.videoTimingInfo ? (a = s.videoTimingInfo).transmuxedPresentationEnd - a.transmuxedPresentationStart - a.transmuxerPrependedSeconds : s.duration + .25 * s.duration;
							return i > new Date(o.getTime() + 1e3 * u) ? null : (i > o && (n = s),
							{
									segment: n,
									estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : bs.duration(t, t.mediaSequence + t.segments.indexOf(n)),
									type: n.videoTimingInfo ? "accurate" : "estimate"
							})
					}(i, n);
					if (!h)
							return c({
									message: i + " was not found in the stream"
							});
					var d = h.segment
						, p = function(e, t) {
							var i = void 0
								, n = void 0;
							try {
									i = new Date(e),
									n = new Date(t)
							} catch (e) {}
							var r = i.getTime();
							return (n.getTime() - r) / 1e3
					}(d.dateTimeObject, i);
					if ("estimate" === h.type)
							return 0 === a ? c({
									message: i + " is not buffered yet. Try again"
							}) : (s(h.estimatedStart + p),
							void l.one("seeked", (function() {
									e({
											programTime: i,
											playlist: n,
											retryCount: a - 1,
											seekTo: s,
											pauseAfterSeek: u,
											tech: l,
											callback: c
									})
							}
							)));
					var f = d.start + p;
					l.one("seeked", (function() {
							return c(null, l.currentTime())
					}
					)),
					u && l.pause(),
					s(f)
			}
				, Ns = function(e, t) {
					var i = []
						, n = void 0;
					if (e && e.length)
							for (n = 0; n < e.length; n++)
									t(e.start(n), e.end(n)) && i.push([e.start(n), e.end(n)]);
					return Fa.createTimeRanges(i)
			}
				, Us = function(e, t) {
					return Ns(e, (function(e, i) {
							return e - .1 <= t && i + .1 >= t
					}
					))
			}
				, Ms = function(e, t) {
					return Ns(e, (function(e) {
							return e - 1 / 30 >= t
					}
					))
			}
				, js = function(e) {
					var t = [];
					if (!e || !e.length)
							return "";
					for (var i = 0; i < e.length; i++)
							t.push(e.start(i) + " => " + e.end(i));
					return t.join(", ")
			}
				, Bs = function(e) {
					for (var t = [], i = 0; i < e.length; i++)
							t.push({
									start: e.start(i),
									end: e.end(i)
							});
					return t
			}
				, Fs = function(e, t, i) {
					var n = void 0
						, r = void 0;
					if (i && i.cues)
							for (n = i.cues.length; n--; )
									(r = i.cues[n]).startTime <= t && r.endTime >= e && i.removeCue(r)
			}
				, qs = function(e) {
					return isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE : e
			}
				, Hs = function(e, t, i) {
					var n = r.a.WebKitDataCue || r.a.VTTCue;
					if (t && t.forEach((function(e) {
							var t = e.stream;
							this.inbandTextTracks_[t].addCue(new n(e.startTime + this.timestampOffset,e.endTime + this.timestampOffset,e.text))
					}
					), e),
					i) {
							var a = qs(e.mediaSource_.duration);
							if (i.forEach((function(e) {
									var t = e.cueTime + this.timestampOffset;
									!("number" != typeof t || r.a.isNaN(t) || t < 0) && t < 1 / 0 && e.frames.forEach((function(e) {
											var i = new n(t,t,e.value || e.url || e.data || "");
											i.frame = e,
											i.value = e,
											function(e) {
													Object.defineProperties(e.frame, {
															id: {
																	get: function() {
																			return Fa.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),
																			e.value.key
																	}
															},
															value: {
																	get: function() {
																			return Fa.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),
																			e.value.data
																	}
															},
															privateData: {
																	get: function() {
																			return Fa.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),
																			e.value.data
																	}
															}
													})
											}(i),
											this.metadataTrack_.addCue(i)
									}
									), this)
							}
							), e),
							e.metadataTrack_ && e.metadataTrack_.cues && e.metadataTrack_.cues.length) {
									for (var s = e.metadataTrack_.cues, o = [], u = 0; u < s.length; u++)
											s[u] && o.push(s[u]);
									var l = o.reduce((function(e, t) {
											var i = e[t.startTime] || [];
											return i.push(t),
											e[t.startTime] = i,
											e
									}
									), {})
										, c = Object.keys(l).sort((function(e, t) {
											return Number(e) - Number(t)
									}
									));
									c.forEach((function(e, t) {
											var i = l[e]
												, n = Number(c[t + 1]) || a;
											i.forEach((function(e) {
													e.endTime = n
											}
											))
									}
									))
							}
					}
			}
				, Vs = "undefined" != typeof window ? window : {}
				, Ws = "undefined" == typeof Symbol ? "__target" : Symbol()
				, zs = Vs.BlobBuilder || Vs.WebKitBlobBuilder || Vs.MozBlobBuilder || Vs.MSBlobBuilder
				, Gs = Vs.URL || Vs.webkitURL || Gs && Gs.msURL
				, Ys = Vs.Worker;
			function Xs(e, t) {
					return function(i) {
							var n = this;
							if (!t)
									return new Ys(e);
							if (Ys && !i) {
									var r = Js(t.toString().replace(/^function.+?{/, "").slice(0, -1));
									return this[Ws] = new Ys(r),
									function(e, t) {
											if (!e || !t)
													return;
											var i = e.terminate;
											e.objURL = t,
											e.terminate = function() {
													e.objURL && Gs.revokeObjectURL(e.objURL),
													i.call(e)
											}
									}(this[Ws], r),
									this[Ws]
							}
							var a = {
									postMessage: function(e) {
											n.onmessage && setTimeout((function() {
													n.onmessage({
															data: e,
															target: a
													})
											}
											))
									}
							};
							t.call(a),
							this.postMessage = function(e) {
									setTimeout((function() {
											a.onmessage({
													data: e,
													target: n
											})
									}
									))
							}
							,
							this.isThisThread = !0
					}
			}
			if (Ys) {
					var Ks, $s = Js("self.onmessage = function () {}"), Qs = new Uint8Array(1);
					try {
							(Ks = new Ys($s)).postMessage(Qs, [Qs.buffer])
					} catch (e) {
							Ys = null
					} finally {
							Gs.revokeObjectURL($s),
							Ks && Ks.terminate()
					}
			}
			function Js(e) {
					try {
							return Gs.createObjectURL(new Blob([e],{
									type: "application/javascript"
							}))
					} catch (i) {
							var t = new zs;
							return t.append(e),
							Gs.createObjectURL(t.getBlob(type))
					}
			}
			var Zs = new Xs("./transmuxer-worker.worker.js",(function(e, t) {
					var i = this;
					!function() {
							var e = function() {
									this.init = function() {
											var e = {};
											this.on = function(t, i) {
													e[t] || (e[t] = []),
													e[t] = e[t].concat(i)
											}
											,
											this.off = function(t, i) {
													var n;
													return !!e[t] && (n = e[t].indexOf(i),
													e[t] = e[t].slice(),
													e[t].splice(n, 1),
													n > -1)
											}
											,
											this.trigger = function(t) {
													var i, n, r, a;
													if (i = e[t])
															if (2 === arguments.length)
																	for (r = i.length,
																	n = 0; n < r; ++n)
																			i[n].call(this, arguments[1]);
															else {
																	for (a = [],
																	n = arguments.length,
																	n = 1; n < arguments.length; ++n)
																			a.push(arguments[n]);
																	for (r = i.length,
																	n = 0; n < r; ++n)
																			i[n].apply(this, a)
															}
											}
											,
											this.dispose = function() {
													e = {}
											}
									}
							};
							e.prototype.pipe = function(e) {
									return this.on("data", (function(t) {
											e.push(t)
									}
									)),
									this.on("done", (function(t) {
											e.flush(t)
									}
									)),
									this.on("partialdone", (function(t) {
											e.partialFlush(t)
									}
									)),
									this.on("endedtimeline", (function(t) {
											e.endTimeline(t)
									}
									)),
									this.on("reset", (function(t) {
											e.reset(t)
									}
									)),
									e
							}
							,
							e.prototype.push = function(e) {
									this.trigger("data", e)
							}
							,
							e.prototype.flush = function(e) {
									this.trigger("done", e)
							}
							,
							e.prototype.partialFlush = function(e) {
									this.trigger("partialdone", e)
							}
							,
							e.prototype.endTimeline = function(e) {
									this.trigger("endedtimeline", e)
							}
							,
							e.prototype.reset = function(e) {
									this.trigger("reset", e)
							}
							;
							var t, n, r, a, s, o, u, l, c, h, d, p, f, m, g, v, y, _, b, T, S, w, k, E, C, A, x, O, P, I, L, D, R, N, U, M, j, B, F, q, H = e, V = Math.pow(2, 32) - 1;
							!function() {
									var e;
									if (w = {
											avc1: [],
											avcC: [],
											btrt: [],
											dinf: [],
											dref: [],
											esds: [],
											ftyp: [],
											hdlr: [],
											mdat: [],
											mdhd: [],
											mdia: [],
											mfhd: [],
											minf: [],
											moof: [],
											moov: [],
											mp4a: [],
											mvex: [],
											mvhd: [],
											pasp: [],
											sdtp: [],
											smhd: [],
											stbl: [],
											stco: [],
											stsc: [],
											stsd: [],
											stsz: [],
											stts: [],
											styp: [],
											tfdt: [],
											tfhd: [],
											traf: [],
											trak: [],
											trun: [],
											trex: [],
											tkhd: [],
											vmhd: []
									},
									"undefined" != typeof Uint8Array) {
											for (e in w)
													w.hasOwnProperty(e) && (w[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
											k = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]),
											C = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]),
											E = new Uint8Array([0, 0, 0, 1]),
											A = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
											x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
											O = {
													video: A,
													audio: x
											},
											L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
											I = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
											D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
											R = D,
											N = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
											U = D,
											P = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
									}
							}(),
							t = function(e) {
									var t, i, n = [], r = 0;
									for (t = 1; t < arguments.length; t++)
											n.push(arguments[t]);
									for (t = n.length; t--; )
											r += n[t].byteLength;
									for (i = new Uint8Array(r + 8),
									new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0, i.byteLength),
									i.set(e, 4),
									t = 0,
									r = 8; t < n.length; t++)
											i.set(n[t], r),
											r += n[t].byteLength;
									return i
							}
							,
							n = function() {
									return t(w.dinf, t(w.dref, L))
							}
							,
							r = function(e) {
									return t(w.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
							}
							,
							g = function(e) {
									return t(w.hdlr, O[e])
							}
							,
							m = function(e) {
									var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
									return e.samplerate && (i[12] = e.samplerate >>> 24 & 255,
									i[13] = e.samplerate >>> 16 & 255,
									i[14] = e.samplerate >>> 8 & 255,
									i[15] = 255 & e.samplerate),
									t(w.mdhd, i)
							}
							,
							f = function(e) {
									return t(w.mdia, m(e), g(e.type), o(e))
							}
							,
							s = function(e) {
									return t(w.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
							}
							,
							o = function(e) {
									return t(w.minf, "video" === e.type ? t(w.vmhd, P) : t(w.smhd, I), n(), y(e))
							}
							,
							u = function(e, i) {
									for (var n = [], r = i.length; r--; )
											n[r] = b(i[r]);
									return t.apply(null, [w.moof, s(e)].concat(n))
							}
							,
							l = function(e) {
									for (var i = e.length, n = []; i--; )
											n[i] = d(e[i]);
									return t.apply(null, [w.moov, h(4294967295)].concat(n).concat(c(e)))
							}
							,
							c = function(e) {
									for (var i = e.length, n = []; i--; )
											n[i] = T(e[i]);
									return t.apply(null, [w.mvex].concat(n))
							}
							,
							h = function(e) {
									var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
									return t(w.mvhd, i)
							}
							,
							v = function(e) {
									var i, n, r = e.samples || [], a = new Uint8Array(4 + r.length);
									for (n = 0; n < r.length; n++)
											i = r[n].flags,
											a[n + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
									return t(w.sdtp, a)
							}
							,
							y = function(e) {
									return t(w.stbl, _(e), t(w.stts, U), t(w.stsc, R), t(w.stsz, N), t(w.stco, D))
							}
							,
							_ = function(e) {
									return t(w.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? M(e) : j(e))
							}
							,
							M = function(e) {
									var i, n, r = e.sps || [], a = e.pps || [], s = [], o = [];
									for (i = 0; i < r.length; i++)
											s.push((65280 & r[i].byteLength) >>> 8),
											s.push(255 & r[i].byteLength),
											s = s.concat(Array.prototype.slice.call(r[i]));
									for (i = 0; i < a.length; i++)
											o.push((65280 & a[i].byteLength) >>> 8),
											o.push(255 & a[i].byteLength),
											o = o.concat(Array.prototype.slice.call(a[i]));
									if (n = [w.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), t(w.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([r.length], s, [a.length], o))), t(w.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))],
									e.sarRatio) {
											var u = e.sarRatio[0]
												, l = e.sarRatio[1];
											n.push(t(w.pasp, new Uint8Array([(4278190080 & u) >> 24, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, (4278190080 & l) >> 24, (16711680 & l) >> 16, (65280 & l) >> 8, 255 & l])))
									}
									return t.apply(null, n)
							}
							,
							j = function(e) {
									return t(w.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), r(e))
							}
							,
							p = function(e) {
									var i = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
									return t(w.tkhd, i)
							}
							,
							b = function(e) {
									var i, n, r, a, s, o;
									return i = t(w.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
									s = Math.floor(e.baseMediaDecodeTime / (V + 1)),
									o = Math.floor(e.baseMediaDecodeTime % (V + 1)),
									n = t(w.tfdt, new Uint8Array([1, 0, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o])),
									92,
									"audio" === e.type ? (r = S(e, 92),
									t(w.traf, i, n, r)) : (a = v(e),
									r = S(e, a.length + 92),
									t(w.traf, i, n, r, a))
							}
							,
							d = function(e) {
									return e.duration = e.duration || 4294967295,
									t(w.trak, p(e), f(e))
							}
							,
							T = function(e) {
									var i = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
									return "video" !== e.type && (i[i.length - 1] = 0),
									t(w.trex, i)
							}
							,
							q = function(e, t) {
									var i = 0
										, n = 0
										, r = 0
										, a = 0;
									return e.length && (void 0 !== e[0].duration && (i = 1),
									void 0 !== e[0].size && (n = 2),
									void 0 !== e[0].flags && (r = 4),
									void 0 !== e[0].compositionTimeOffset && (a = 8)),
									[0, 0, i | n | r | a, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
							}
							,
							F = function(e, i) {
									var n, r, a, s;
									for (i += 20 + 16 * (r = e.samples || []).length,
									n = q(r, i),
									s = 0; s < r.length; s++)
											a = r[s],
											n = n.concat([(4278190080 & a.duration) >>> 24, (16711680 & a.duration) >>> 16, (65280 & a.duration) >>> 8, 255 & a.duration, (4278190080 & a.size) >>> 24, (16711680 & a.size) >>> 16, (65280 & a.size) >>> 8, 255 & a.size, a.flags.isLeading << 2 | a.flags.dependsOn, a.flags.isDependedOn << 6 | a.flags.hasRedundancy << 4 | a.flags.paddingValue << 1 | a.flags.isNonSyncSample, 61440 & a.flags.degradationPriority, 15 & a.flags.degradationPriority, (4278190080 & a.compositionTimeOffset) >>> 24, (16711680 & a.compositionTimeOffset) >>> 16, (65280 & a.compositionTimeOffset) >>> 8, 255 & a.compositionTimeOffset]);
									return t(w.trun, new Uint8Array(n))
							}
							,
							B = function(e, i) {
									var n, r, a, s;
									for (i += 20 + 8 * (r = e.samples || []).length,
									n = q(r, i),
									s = 0; s < r.length; s++)
											a = r[s],
											n = n.concat([(4278190080 & a.duration) >>> 24, (16711680 & a.duration) >>> 16, (65280 & a.duration) >>> 8, 255 & a.duration, (4278190080 & a.size) >>> 24, (16711680 & a.size) >>> 16, (65280 & a.size) >>> 8, 255 & a.size]);
									return t(w.trun, new Uint8Array(n))
							}
							,
							S = function(e, t) {
									return "audio" === e.type ? B(e, t) : F(e, t)
							}
							;
							a = function() {
									return t(w.ftyp, k, E, k, C)
							}
							;
							var W, z, G, Y, X, K, $, Q, J = function(e) {
									return t(w.mdat, e)
							}, Z = u, ee = function(e) {
									var t, i = a(), n = l(e);
									return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i),
									t.set(n, i.byteLength),
									t
							}, te = function(e, t) {
									var i = {
											size: 0,
											flags: {
													isLeading: 0,
													dependsOn: 1,
													isDependedOn: 0,
													hasRedundancy: 0,
													degradationPriority: 0,
													isNonSyncSample: 1
											}
									};
									return i.dataOffset = t,
									i.compositionTimeOffset = e.pts - e.dts,
									i.duration = e.duration,
									i.size = 4 * e.length,
									i.size += e.byteLength,
									e.keyFrame && (i.flags.dependsOn = 2,
									i.flags.isNonSyncSample = 0),
									i
							}, ie = function(e) {
									var t, i, n = [], r = [];
									for (r.byteLength = 0,
									r.nalCount = 0,
									r.duration = 0,
									n.byteLength = 0,
									t = 0; t < e.length; t++)
											"access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts,
											r.byteLength += n.byteLength,
											r.nalCount += n.length,
											r.duration += n.duration,
											r.push(n)),
											(n = [i]).byteLength = i.data.byteLength,
											n.pts = i.pts,
											n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0),
											n.duration = i.dts - n.dts,
											n.byteLength += i.data.byteLength,
											n.push(i));
									return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration),
									r.byteLength += n.byteLength,
									r.nalCount += n.length,
									r.duration += n.duration,
									r.push(n),
									r
							}, ne = function(e) {
									var t, i, n = [], r = [];
									for (n.byteLength = 0,
									n.nalCount = 0,
									n.duration = 0,
									n.pts = e[0].pts,
									n.dts = e[0].dts,
									r.byteLength = 0,
									r.nalCount = 0,
									r.duration = 0,
									r.pts = e[0].pts,
									r.dts = e[0].dts,
									t = 0; t < e.length; t++)
											(i = e[t]).keyFrame ? (n.length && (r.push(n),
											r.byteLength += n.byteLength,
											r.nalCount += n.nalCount,
											r.duration += n.duration),
											(n = [i]).nalCount = i.length,
											n.byteLength = i.byteLength,
											n.pts = i.pts,
											n.dts = i.dts,
											n.duration = i.duration) : (n.duration += i.duration,
											n.nalCount += i.length,
											n.byteLength += i.byteLength,
											n.push(i));
									return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration),
									r.byteLength += n.byteLength,
									r.nalCount += n.nalCount,
									r.duration += n.duration,
									r.push(n),
									r
							}, re = function(e) {
									var t;
									return !e[0][0].keyFrame && e.length > 1 && (t = e.shift(),
									e.byteLength -= t.byteLength,
									e.nalCount -= t.nalCount,
									e[0][0].dts = t.dts,
									e[0][0].pts = t.pts,
									e[0][0].duration += t.duration),
									e
							}, ae = function(e, t) {
									var i, n, r, a, s, o = t || 0, u = [];
									for (i = 0; i < e.length; i++)
											for (a = e[i],
											n = 0; n < a.length; n++)
													s = a[n],
													o += (r = te(s, o)).size,
													u.push(r);
									return u
							}, se = function(e) {
									var t, i, n, r, a, s, o = 0, u = e.byteLength, l = e.nalCount, c = new Uint8Array(u + 4 * l), h = new DataView(c.buffer);
									for (t = 0; t < e.length; t++)
											for (r = e[t],
											i = 0; i < r.length; i++)
													for (a = r[i],
													n = 0; n < a.length; n++)
															s = a[n],
															h.setUint32(o, s.data.byteLength),
															o += 4,
															c.set(s.data, o),
															o += s.data.byteLength;
									return c
							}, oe = [33, 16, 5, 32, 164, 27], ue = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], le = function(e) {
									for (var t = []; e--; )
											t.push(0);
									return t
							}, ce = {
									96e3: [oe, [227, 64], le(154), [56]],
									88200: [oe, [231], le(170), [56]],
									64e3: [oe, [248, 192], le(240), [56]],
									48e3: [oe, [255, 192], le(268), [55, 148, 128], le(54), [112]],
									44100: [oe, [255, 192], le(268), [55, 163, 128], le(84), [112]],
									32e3: [oe, [255, 192], le(268), [55, 234], le(226), [112]],
									24e3: [oe, [255, 192], le(268), [55, 255, 128], le(268), [111, 112], le(126), [224]],
									16e3: [oe, [255, 192], le(268), [55, 255, 128], le(268), [111, 255], le(269), [223, 108], le(195), [1, 192]],
									12e3: [ue, le(268), [3, 127, 248], le(268), [6, 255, 240], le(268), [13, 255, 224], le(268), [27, 253, 128], le(259), [56]],
									11025: [ue, le(268), [3, 127, 248], le(268), [6, 255, 240], le(268), [13, 255, 224], le(268), [27, 255, 192], le(268), [55, 175, 128], le(108), [112]],
									8e3: [ue, le(268), [3, 121, 16], le(47), [7]]
							}, he = (W = ce,
							Object.keys(W).reduce((function(e, t) {
									return e[t] = new Uint8Array(W[t].reduce((function(e, t) {
											return e.concat(t)
									}
									), [])),
									e
							}
							), {}));
							K = function(e, t) {
									return z(X(e, t))
							}
							,
							$ = function(e, t) {
									return G(Y(e), t)
							}
							,
							Q = function(e, t, i) {
									return Y(i ? e : e - t)
							}
							;
							var de = 9e4
								, pe = (z = function(e) {
									return 9e4 * e
							}
							,
							G = function(e, t) {
									return e * t
							}
							,
							Y = function(e) {
									return e / 9e4
							}
							,
							X = function(e, t) {
									return e / t
							}
							,
							K)
								, fe = $
								, me = Q
								, ge = function(e, t, i, n) {
									var r, a, s, o, u, l = 0, c = 0, h = 0;
									if (t.length && (r = pe(e.baseMediaDecodeTime, e.samplerate),
									a = Math.ceil(de / (e.samplerate / 1024)),
									i && n && (l = r - Math.max(i, n),
									h = (c = Math.floor(l / a)) * a),
									!(c < 1 || h > de / 2))) {
											for ((s = he[e.samplerate]) || (s = t[0].data),
											o = 0; o < c; o++)
													u = t[0],
													t.splice(0, 0, {
															data: s,
															dts: u.dts - a,
															pts: u.pts - a
													});
											e.baseMediaDecodeTime -= Math.floor(fe(h, e.samplerate))
									}
							}
								, ve = function(e, t, i) {
									return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0,
									e.filter((function(e) {
											return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts),
											t.minSegmentPts = t.minSegmentDts,
											!0)
									}
									)))
							}
								, ye = function(e) {
									var t, i, n = [];
									for (t = 0; t < e.length; t++)
											i = e[t],
											n.push({
													size: i.data.byteLength,
													duration: 1024
											});
									return n
							}
								, _e = function(e) {
									var t, i, n = 0, r = new Uint8Array(function(e) {
											var t, i = 0;
											for (t = 0; t < e.length; t++)
													i += e[t].data.byteLength;
											return i
									}(e));
									for (t = 0; t < e.length; t++)
											i = e[t],
											r.set(i.data, n),
											n += i.data.byteLength;
									return r
							}
								, be = de
								, Te = function(e) {
									delete e.minSegmentDts,
									delete e.maxSegmentDts,
									delete e.minSegmentPts,
									delete e.maxSegmentPts
							}
								, Se = function(e, t) {
									var i, n = e.minSegmentDts;
									return t || (n -= e.timelineStartInfo.dts),
									i = e.timelineStartInfo.baseMediaDecodeTime,
									i += n,
									i = Math.max(0, i),
									"audio" === e.type && (i *= e.samplerate / be,
									i = Math.floor(i)),
									i
							}
								, we = function(e, t) {
									"number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts),
									void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts),
									void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)),
									"number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts),
									void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts),
									void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
							}
								, ke = function(e) {
									for (var t = 0, i = {
											payloadType: -1,
											payloadSize: 0
									}, n = 0, r = 0; t < e.byteLength && 128 !== e[t]; ) {
											for (; 255 === e[t]; )
													n += 255,
													t++;
											for (n += e[t++]; 255 === e[t]; )
													r += 255,
													t++;
											if (r += e[t++],
											!i.payload && 4 === n) {
													i.payloadType = n,
													i.payloadSize = r,
													i.payload = e.subarray(t, t + r);
													break
											}
											t += r,
											n = 0,
											r = 0
									}
									return i
							}
								, Ee = function(e) {
									return 181 !== e.payload[0] || 49 != (e.payload[1] << 8 | e.payload[2]) || "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) || 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
							}
								, Ce = function(e, t) {
									var i, n, r, a, s = [];
									if (!(64 & t[0]))
											return s;
									for (n = 31 & t[0],
									i = 0; i < n; i++)
											a = {
													type: 3 & t[(r = 3 * i) + 2],
													pts: e
											},
											4 & t[r + 2] && (a.ccData = t[r + 3] << 8 | t[r + 4],
											s.push(a));
									return s
							}
								, Ae = 4
								, xe = function e() {
									e.prototype.init.call(this),
									this.captionPackets_ = [],
									this.ccStreams_ = [new De(0,0), new De(0,1), new De(1,0), new De(1,1)],
									this.reset(),
									this.ccStreams_.forEach((function(e) {
											e.on("data", this.trigger.bind(this, "data")),
											e.on("partialdone", this.trigger.bind(this, "partialdone")),
											e.on("done", this.trigger.bind(this, "done"))
									}
									), this)
							};
							(xe.prototype = new H).push = function(e) {
									var t, i, n;
									if ("sei_rbsp" === e.nalUnitType && (t = ke(e.escapedRBSP)).payloadType === Ae && (i = Ee(t)))
											if (e.dts < this.latestDts_)
													this.ignoreNextEqualDts_ = !0;
											else {
													if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_)
															return this.numSameDts_--,
															void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
													n = Ce(e.pts, i),
													this.captionPackets_ = this.captionPackets_.concat(n),
													this.latestDts_ !== e.dts && (this.numSameDts_ = 0),
													this.numSameDts_++,
													this.latestDts_ = e.dts
											}
							}
							,
							xe.prototype.flushCCStreams = function(e) {
									this.ccStreams_.forEach((function(t) {
											return "flush" === e ? t.flush() : t.partialFlush()
									}
									), this)
							}
							,
							xe.prototype.flushStream = function(e) {
									this.captionPackets_.length ? (this.captionPackets_.forEach((function(e, t) {
											e.presortIndex = t
									}
									)),
									this.captionPackets_.sort((function(e, t) {
											return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
									}
									)),
									this.captionPackets_.forEach((function(e) {
											e.type < 2 && this.dispatchCea608Packet(e)
									}
									), this),
									this.captionPackets_.length = 0,
									this.flushCCStreams(e)) : this.flushCCStreams(e)
							}
							,
							xe.prototype.flush = function() {
									return this.flushStream("flush")
							}
							,
							xe.prototype.partialFlush = function() {
									return this.flushStream("partialFlush")
							}
							,
							xe.prototype.reset = function() {
									this.latestDts_ = null,
									this.ignoreNextEqualDts_ = !1,
									this.numSameDts_ = 0,
									this.activeCea608Channel_ = [null, null],
									this.ccStreams_.forEach((function(e) {
											e.reset()
									}
									))
							}
							,
							xe.prototype.dispatchCea608Packet = function(e) {
									this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null : this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
									null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
							}
							,
							xe.prototype.setsChannel1Active = function(e) {
									return 4096 == (30720 & e.ccData)
							}
							,
							xe.prototype.setsChannel2Active = function(e) {
									return 6144 == (30720 & e.ccData)
							}
							,
							xe.prototype.setsTextOrXDSActive = function(e) {
									return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 == (30974 & e.ccData)
							}
							;
							var Oe = {
									42: 225,
									92: 233,
									94: 237,
									95: 243,
									96: 250,
									123: 231,
									124: 247,
									125: 209,
									126: 241,
									127: 9608,
									304: 174,
									305: 176,
									306: 189,
									307: 191,
									308: 8482,
									309: 162,
									310: 163,
									311: 9834,
									312: 224,
									313: 160,
									314: 232,
									315: 226,
									316: 234,
									317: 238,
									318: 244,
									319: 251,
									544: 193,
									545: 201,
									546: 211,
									547: 218,
									548: 220,
									549: 252,
									550: 8216,
									551: 161,
									552: 42,
									553: 39,
									554: 8212,
									555: 169,
									556: 8480,
									557: 8226,
									558: 8220,
									559: 8221,
									560: 192,
									561: 194,
									562: 199,
									563: 200,
									564: 202,
									565: 203,
									566: 235,
									567: 206,
									568: 207,
									569: 239,
									570: 212,
									571: 217,
									572: 249,
									573: 219,
									574: 171,
									575: 187,
									800: 195,
									801: 227,
									802: 205,
									803: 204,
									804: 236,
									805: 210,
									806: 242,
									807: 213,
									808: 245,
									809: 123,
									810: 125,
									811: 92,
									812: 94,
									813: 95,
									814: 124,
									815: 126,
									816: 196,
									817: 228,
									818: 214,
									819: 246,
									820: 223,
									821: 165,
									822: 164,
									823: 9474,
									824: 197,
									825: 229,
									826: 216,
									827: 248,
									828: 9484,
									829: 9488,
									830: 9492,
									831: 9496
							}
								, Pe = function(e) {
									return null === e ? "" : (e = Oe[e] || e,
									String.fromCharCode(e))
							}
								, Ie = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152]
								, Le = function() {
									for (var e = [], t = 15; t--; )
											e.push("");
									return e
							}
								, De = function e(t, i) {
									e.prototype.init.call(this),
									this.field_ = t || 0,
									this.dataChannel_ = i || 0,
									this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)),
									this.setConstants(),
									this.reset(),
									this.push = function(e) {
											var t, i, n, r, a;
											if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
													if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null),
													n = t >>> 8,
													r = 255 & t,
													t !== this.PADDING_)
															if (t === this.RESUME_CAPTION_LOADING_)
																	this.mode_ = "popOn";
															else if (t === this.END_OF_CAPTION_)
																	this.mode_ = "popOn",
																	this.clearFormatting(e.pts),
																	this.flushDisplayed(e.pts),
																	i = this.displayed_,
																	this.displayed_ = this.nonDisplayed_,
																	this.nonDisplayed_ = i,
																	this.startPts_ = e.pts;
															else if (t === this.ROLL_UP_2_ROWS_)
																	this.rollUpRows_ = 2,
																	this.setRollUp(e.pts);
															else if (t === this.ROLL_UP_3_ROWS_)
																	this.rollUpRows_ = 3,
																	this.setRollUp(e.pts);
															else if (t === this.ROLL_UP_4_ROWS_)
																	this.rollUpRows_ = 4,
																	this.setRollUp(e.pts);
															else if (t === this.CARRIAGE_RETURN_)
																	this.clearFormatting(e.pts),
																	this.flushDisplayed(e.pts),
																	this.shiftRowsUp_(),
																	this.startPts_ = e.pts;
															else if (t === this.BACKSPACE_)
																	"popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
															else if (t === this.ERASE_DISPLAYED_MEMORY_)
																	this.flushDisplayed(e.pts),
																	this.displayed_ = Le();
															else if (t === this.ERASE_NON_DISPLAYED_MEMORY_)
																	this.nonDisplayed_ = Le();
															else if (t === this.RESUME_DIRECT_CAPTIONING_)
																	"paintOn" !== this.mode_ && (this.flushDisplayed(e.pts),
																	this.displayed_ = Le()),
																	this.mode_ = "paintOn",
																	this.startPts_ = e.pts;
															else if (this.isSpecialCharacter(n, r))
																	a = Pe((n = (3 & n) << 8) | r),
																	this[this.mode_](e.pts, a),
																	this.column_++;
															else if (this.isExtCharacter(n, r))
																	"popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1),
																	a = Pe((n = (3 & n) << 8) | r),
																	this[this.mode_](e.pts, a),
																	this.column_++;
															else if (this.isMidRowCode(n, r))
																	this.clearFormatting(e.pts),
																	this[this.mode_](e.pts, " "),
																	this.column_++,
																	14 == (14 & r) && this.addFormatting(e.pts, ["i"]),
																	1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
															else if (this.isOffsetControlCode(n, r))
																	this.column_ += 3 & r;
															else if (this.isPAC(n, r)) {
																	var s = Ie.indexOf(7968 & t);
																	"rollUp" === this.mode_ && (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1),
																	this.setRollUp(e.pts, s)),
																	s !== this.row_ && (this.clearFormatting(e.pts),
																	this.row_ = s),
																	1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]),
																	16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
																	this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
															} else
																	this.isNormalChar(n) && (0 === r && (r = null),
																	a = Pe(n),
																	a += Pe(r),
																	this[this.mode_](e.pts, a),
																	this.column_ += a.length)
											} else
													this.lastControlCode_ = null
									}
							};
							De.prototype = new H,
							De.prototype.flushDisplayed = function(e) {
									var t = this.displayed_.map((function(e) {
											try {
													return e.trim()
											} catch (e) {
													return console.error("Skipping malformed caption."),
													""
											}
									}
									)).join("\n").replace(/^\n+|\n+$/g, "");
									t.length && this.trigger("data", {
											startPts: this.startPts_,
											endPts: e,
											text: t,
											stream: this.name_
									})
							}
							,
							De.prototype.reset = function() {
									this.mode_ = "popOn",
									this.topRow_ = 0,
									this.startPts_ = 0,
									this.displayed_ = Le(),
									this.nonDisplayed_ = Le(),
									this.lastControlCode_ = null,
									this.column_ = 0,
									this.row_ = 14,
									this.rollUpRows_ = 2,
									this.formatting_ = []
							}
							,
							De.prototype.setConstants = function() {
									0 === this.dataChannel_ ? (this.BASE_ = 16,
									this.EXT_ = 17,
									this.CONTROL_ = (20 | this.field_) << 8,
									this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24,
									this.EXT_ = 25,
									this.CONTROL_ = (28 | this.field_) << 8,
									this.OFFSET_ = 31),
									this.PADDING_ = 0,
									this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_,
									this.END_OF_CAPTION_ = 47 | this.CONTROL_,
									this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_,
									this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_,
									this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_,
									this.CARRIAGE_RETURN_ = 45 | this.CONTROL_,
									this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_,
									this.BACKSPACE_ = 33 | this.CONTROL_,
									this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_,
									this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
							}
							,
							De.prototype.isSpecialCharacter = function(e, t) {
									return e === this.EXT_ && t >= 48 && t <= 63
							}
							,
							De.prototype.isExtCharacter = function(e, t) {
									return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && t <= 63
							}
							,
							De.prototype.isMidRowCode = function(e, t) {
									return e === this.EXT_ && t >= 32 && t <= 47
							}
							,
							De.prototype.isOffsetControlCode = function(e, t) {
									return e === this.OFFSET_ && t >= 33 && t <= 35
							}
							,
							De.prototype.isPAC = function(e, t) {
									return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && t <= 127
							}
							,
							De.prototype.isColorPAC = function(e) {
									return e >= 64 && e <= 79 || e >= 96 && e <= 127
							}
							,
							De.prototype.isNormalChar = function(e) {
									return e >= 32 && e <= 127
							}
							,
							De.prototype.setRollUp = function(e, t) {
									if ("rollUp" !== this.mode_ && (this.row_ = 14,
									this.mode_ = "rollUp",
									this.flushDisplayed(e),
									this.nonDisplayed_ = Le(),
									this.displayed_ = Le()),
									void 0 !== t && t !== this.row_)
											for (var i = 0; i < this.rollUpRows_; i++)
													this.displayed_[t - i] = this.displayed_[this.row_ - i],
													this.displayed_[this.row_ - i] = "";
									void 0 === t && (t = this.row_),
									this.topRow_ = t - this.rollUpRows_ + 1
							}
							,
							De.prototype.addFormatting = function(e, t) {
									this.formatting_ = this.formatting_.concat(t);
									var i = t.reduce((function(e, t) {
											return e + "<" + t + ">"
									}
									), "");
									this[this.mode_](e, i)
							}
							,
							De.prototype.clearFormatting = function(e) {
									if (this.formatting_.length) {
											var t = this.formatting_.reverse().reduce((function(e, t) {
													return e + "</" + t + ">"
											}
											), "");
											this.formatting_ = [],
											this[this.mode_](e, t)
									}
							}
							,
							De.prototype.popOn = function(e, t) {
									var i = this.nonDisplayed_[this.row_];
									i += t,
									this.nonDisplayed_[this.row_] = i
							}
							,
							De.prototype.rollUp = function(e, t) {
									var i = this.displayed_[this.row_];
									i += t,
									this.displayed_[this.row_] = i
							}
							,
							De.prototype.shiftRowsUp_ = function() {
									var e;
									for (e = 0; e < this.topRow_; e++)
											this.displayed_[e] = "";
									for (e = this.row_ + 1; e < 15; e++)
											this.displayed_[e] = "";
									for (e = this.topRow_; e < this.row_; e++)
											this.displayed_[e] = this.displayed_[e + 1];
									this.displayed_[this.row_] = ""
							}
							,
							De.prototype.paintOn = function(e, t) {
									var i = this.displayed_[this.row_];
									i += t,
									this.displayed_[this.row_] = i
							}
							;
							var Re = {
									CaptionStream: xe,
									Cea608Stream: De
							}
								, Ne = {
									H264_STREAM_TYPE: 27,
									ADTS_STREAM_TYPE: 15,
									METADATA_STREAM_TYPE: 21
							}
								, Ue = function(e, t) {
									var i = 1;
									for (e > t && (i = -1); Math.abs(t - e) > 4294967296; )
											e += 8589934592 * i;
									return e
							}
								, Me = function e(t) {
									var i, n;
									e.prototype.init.call(this),
									this.type_ = t || "shared",
									this.push = function(e) {
											"shared" !== this.type_ && e.type !== this.type_ || (void 0 === n && (n = e.dts),
											e.dts = Ue(e.dts, n),
											e.pts = Ue(e.pts, n),
											i = e.dts,
											this.trigger("data", e))
									}
									,
									this.flush = function() {
											n = i,
											this.trigger("done")
									}
									,
									this.endTimeline = function() {
											this.flush(),
											this.trigger("endedtimeline")
									}
									,
									this.discontinuity = function() {
											n = void 0,
											i = void 0
									}
									,
									this.reset = function() {
											this.discontinuity(),
											this.trigger("reset")
									}
							};
							Me.prototype = new H;
							var je, Be = Me, Fe = function(e, t, i) {
									var n, r = "";
									for (n = t; n < i; n++)
											r += "%" + ("00" + e[n].toString(16)).slice(-2);
									return r
							}, qe = function(e, t, i) {
									return decodeURIComponent(Fe(e, t, i))
							}, He = function(e) {
									return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
							}, Ve = {
									TXXX: function(e) {
											var t;
											if (3 === e.data[0]) {
													for (t = 1; t < e.data.length; t++)
															if (0 === e.data[t]) {
																	e.description = qe(e.data, 1, t),
																	e.value = qe(e.data, t + 1, e.data.length).replace(/\0*$/, "");
																	break
															}
													e.data = e.value
											}
									},
									WXXX: function(e) {
											var t;
											if (3 === e.data[0])
													for (t = 1; t < e.data.length; t++)
															if (0 === e.data[t]) {
																	e.description = qe(e.data, 1, t),
																	e.url = qe(e.data, t + 1, e.data.length);
																	break
															}
									},
									PRIV: function(e) {
											var t, i;
											for (t = 0; t < e.data.length; t++)
													if (0 === e.data[t]) {
															e.owner = (i = e.data,
															unescape(Fe(i, 0, t)));
															break
													}
											e.privateData = e.data.subarray(t + 1),
											e.data = e.privateData
									}
							};
							(je = function(e) {
									var t, i = {
											debug: !(!e || !e.debug),
											descriptor: e && e.descriptor
									}, n = 0, r = [], a = 0;
									if (je.prototype.init.call(this),
									this.dispatchType = Ne.METADATA_STREAM_TYPE.toString(16),
									i.descriptor)
											for (t = 0; t < i.descriptor.length; t++)
													this.dispatchType += ("00" + i.descriptor[t].toString(16)).slice(-2);
									this.push = function(e) {
											var t, s, o, u, l;
											if ("timed-metadata" === e.type)
													if (e.dataAlignmentIndicator && (a = 0,
													r.length = 0),
													0 === r.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0)))
															i.debug && console.log("Skipping unrecognized metadata packet");
													else if (r.push(e),
													a += e.data.byteLength,
													1 === r.length && (n = He(e.data.subarray(6, 10)),
													n += 10),
													!(a < n)) {
															for (t = {
																	data: new Uint8Array(n),
																	frames: [],
																	pts: r[0].pts,
																	dts: r[0].dts
															},
															l = 0; l < n; )
																	t.data.set(r[0].data.subarray(0, n - l), l),
																	l += r[0].data.byteLength,
																	a -= r[0].data.byteLength,
																	r.shift();
															s = 10,
															64 & t.data[5] && (s += 4,
															s += He(t.data.subarray(10, 14)),
															n -= He(t.data.subarray(16, 20)));
															do {
																	if ((o = He(t.data.subarray(s + 4, s + 8))) < 1)
																			return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
																	if ((u = {
																			id: String.fromCharCode(t.data[s], t.data[s + 1], t.data[s + 2], t.data[s + 3]),
																			data: t.data.subarray(s + 10, s + o + 10)
																	}).key = u.id,
																	Ve[u.id] && (Ve[u.id](u),
																	"com.apple.streaming.transportStreamTimestamp" === u.owner)) {
																			var c = u.data
																				, h = (1 & c[3]) << 30 | c[4] << 22 | c[5] << 14 | c[6] << 6 | c[7] >>> 2;
																			h *= 4,
																			h += 3 & c[7],
																			u.timeStamp = h,
																			void 0 === t.pts && void 0 === t.dts && (t.pts = u.timeStamp,
																			t.dts = u.timeStamp),
																			this.trigger("timestamp", u)
																	}
																	t.frames.push(u),
																	s += 10,
																	s += o
															} while (s < n);
															this.trigger("data", t)
													}
									}
							}
							).prototype = new H;
							var We, ze, Ge, Ye = je, Xe = Be;
							(We = function() {
									var e = new Uint8Array(188)
										, t = 0;
									We.prototype.init.call(this),
									this.push = function(i) {
											var n, r = 0, a = 188;
											for (t ? ((n = new Uint8Array(i.byteLength + t)).set(e.subarray(0, t)),
											n.set(i, t),
											t = 0) : n = i; a < n.byteLength; )
													71 !== n[r] || 71 !== n[a] ? (r++,
													a++) : (this.trigger("data", n.subarray(r, a)),
													r += 188,
													a += 188);
											r < n.byteLength && (e.set(n.subarray(r), 0),
											t = n.byteLength - r)
									}
									,
									this.flush = function() {
											188 === t && 71 === e[0] && (this.trigger("data", e),
											t = 0),
											this.trigger("done")
									}
									,
									this.endTimeline = function() {
											this.flush(),
											this.trigger("endedtimeline")
									}
									,
									this.reset = function() {
											t = 0,
											this.trigger("reset")
									}
							}
							).prototype = new H,
							(ze = function() {
									var e, t, i, n;
									ze.prototype.init.call(this),
									n = this,
									this.packetsWaitingForPmt = [],
									this.programMapTable = void 0,
									e = function(e, n) {
											var r = 0;
											n.payloadUnitStartIndicator && (r += e[r] + 1),
											"pat" === n.type ? t(e.subarray(r), n) : i(e.subarray(r), n)
									}
									,
									t = function(e, t) {
											t.section_number = e[7],
											t.last_section_number = e[8],
											n.pmtPid = (31 & e[10]) << 8 | e[11],
											t.pmtPid = n.pmtPid
									}
									,
									i = function(e, t) {
											var i, r;
											if (1 & e[5]) {
													for (n.programMapTable = {
															video: null,
															audio: null,
															"timed-metadata": {}
													},
													i = 3 + ((15 & e[1]) << 8 | e[2]) - 4,
													r = 12 + ((15 & e[10]) << 8 | e[11]); r < i; ) {
															var a = e[r]
																, s = (31 & e[r + 1]) << 8 | e[r + 2];
															a === Ne.H264_STREAM_TYPE && null === n.programMapTable.video ? n.programMapTable.video = s : a === Ne.ADTS_STREAM_TYPE && null === n.programMapTable.audio ? n.programMapTable.audio = s : a === Ne.METADATA_STREAM_TYPE && (n.programMapTable["timed-metadata"][s] = a),
															r += 5 + ((15 & e[r + 3]) << 8 | e[r + 4])
													}
													t.programMapTable = n.programMapTable
											}
									}
									,
									this.push = function(t) {
											var i = {}
												, n = 4;
											if (i.payloadUnitStartIndicator = !!(64 & t[1]),
											i.pid = 31 & t[1],
											i.pid <<= 8,
											i.pid |= t[2],
											(48 & t[3]) >>> 4 > 1 && (n += t[n] + 1),
											0 === i.pid)
													i.type = "pat",
													e(t.subarray(n), i),
													this.trigger("data", i);
											else if (i.pid === this.pmtPid)
													for (i.type = "pmt",
													e(t.subarray(n), i),
													this.trigger("data", i); this.packetsWaitingForPmt.length; )
															this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
											else
													void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, n, i]) : this.processPes_(t, n, i)
									}
									,
									this.processPes_ = function(e, t, i) {
											i.pid === this.programMapTable.video ? i.streamType = Ne.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = Ne.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid],
											i.type = "pes",
											i.data = e.subarray(t),
											this.trigger("data", i)
									}
							}
							).prototype = new H,
							ze.STREAM_TYPES = {
									h264: 27,
									adts: 15
							},
							(Ge = function() {
									var e, t = this, i = {
											data: [],
											size: 0
									}, n = {
											data: [],
											size: 0
									}, r = {
											data: [],
											size: 0
									}, a = function(e, i, n) {
											var r, a, s = new Uint8Array(e.size), o = {
													type: i
											}, u = 0, l = 0;
											if (e.data.length && !(e.size < 9)) {
													for (o.trackId = e.data[0].pid,
													u = 0; u < e.data.length; u++)
															a = e.data[u],
															s.set(a.data, l),
															l += a.data.byteLength;
													var c, h, d;
													c = s,
													(h = o).packetLength = 6 + (c[4] << 8 | c[5]),
													h.dataAlignmentIndicator = 0 != (4 & c[6]),
													192 & (d = c[7]) && (h.pts = (14 & c[9]) << 27 | (255 & c[10]) << 20 | (254 & c[11]) << 12 | (255 & c[12]) << 5 | (254 & c[13]) >>> 3,
													h.pts *= 4,
													h.pts += (6 & c[13]) >>> 1,
													h.dts = h.pts,
													64 & d && (h.dts = (14 & c[14]) << 27 | (255 & c[15]) << 20 | (254 & c[16]) << 12 | (255 & c[17]) << 5 | (254 & c[18]) >>> 3,
													h.dts *= 4,
													h.dts += (6 & c[18]) >>> 1)),
													h.data = c.subarray(9 + c[8]),
													r = "video" === i || o.packetLength <= e.size,
													(n || r) && (e.size = 0,
													e.data.length = 0),
													r && t.trigger("data", o)
											}
									};
									Ge.prototype.init.call(this),
									this.push = function(s) {
											({
													pat: function() {},
													pes: function() {
															var e, t;
															switch (s.streamType) {
															case Ne.H264_STREAM_TYPE:
															case Ne.H264_STREAM_TYPE:
																	e = i,
																	t = "video";
																	break;
															case Ne.ADTS_STREAM_TYPE:
																	e = n,
																	t = "audio";
																	break;
															case Ne.METADATA_STREAM_TYPE:
																	e = r,
																	t = "timed-metadata";
																	break;
															default:
																	return
															}
															s.payloadUnitStartIndicator && a(e, t, !0),
															e.data.push(s),
															e.size += s.data.byteLength
													},
													pmt: function() {
															var i = {
																	type: "metadata",
																	tracks: []
															};
															null !== (e = s.programMapTable).video && i.tracks.push({
																	timelineStartInfo: {
																			baseMediaDecodeTime: 0
																	},
																	id: +e.video,
																	codec: "avc",
																	type: "video"
															}),
															null !== e.audio && i.tracks.push({
																	timelineStartInfo: {
																			baseMediaDecodeTime: 0
																	},
																	id: +e.audio,
																	codec: "adts",
																	type: "audio"
															}),
															t.trigger("data", i)
													}
											})[s.type]()
									}
									,
									this.reset = function() {
											i.size = 0,
											i.data.length = 0,
											n.size = 0,
											n.data.length = 0,
											this.trigger("reset")
									}
									,
									this.flushStreams_ = function() {
											a(i, "video"),
											a(n, "audio"),
											a(r, "timed-metadata")
									}
									,
									this.flush = function() {
											this.flushStreams_(),
											this.trigger("done")
									}
							}
							).prototype = new H;
							var Ke = {
									PAT_PID: 0,
									MP2T_PACKET_LENGTH: 188,
									TransportPacketStream: We,
									TransportParseStream: ze,
									ElementaryStream: Ge,
									TimestampRolloverStream: Xe,
									CaptionStream: Re.CaptionStream,
									Cea608Stream: Re.Cea608Stream,
									MetadataStream: Ye
							};
							for (var $e in Ne)
									Ne.hasOwnProperty($e) && (Ke[$e] = Ne[$e]);
							var Qe, Je = Ke, Ze = de, et = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
							(Qe = function(e) {
									var t, i = 0;
									Qe.prototype.init.call(this),
									this.push = function(n) {
											var r, a, s, o, u, l, c = 0;
											if (e || (i = 0),
											"audio" === n.type)
													for (t ? (o = t,
													(t = new Uint8Array(o.byteLength + n.data.byteLength)).set(o),
													t.set(n.data, o.byteLength)) : t = n.data; c + 5 < t.length; )
															if (255 === t[c] && 240 == (246 & t[c + 1])) {
																	if (a = 2 * (1 & ~t[c + 1]),
																	r = (3 & t[c + 3]) << 11 | t[c + 4] << 3 | (224 & t[c + 5]) >> 5,
																	l = (u = 1024 * (1 + (3 & t[c + 6]))) * Ze / et[(60 & t[c + 2]) >>> 2],
																	s = c + r,
																	t.byteLength < s)
																			return;
																	if (this.trigger("data", {
																			pts: n.pts + i * l,
																			dts: n.dts + i * l,
																			sampleCount: u,
																			audioobjecttype: 1 + (t[c + 2] >>> 6 & 3),
																			channelcount: (1 & t[c + 2]) << 2 | (192 & t[c + 3]) >>> 6,
																			samplerate: et[(60 & t[c + 2]) >>> 2],
																			samplingfrequencyindex: (60 & t[c + 2]) >>> 2,
																			samplesize: 16,
																			data: t.subarray(c + 7 + a, s)
																	}),
																	i++,
																	t.byteLength === s)
																			return void (t = void 0);
																	t = t.subarray(s)
															} else
																	c++
									}
									,
									this.flush = function() {
											i = 0,
											this.trigger("done")
									}
									,
									this.reset = function() {
											t = void 0,
											this.trigger("reset")
									}
									,
									this.endTimeline = function() {
											t = void 0,
											this.trigger("endedtimeline")
									}
							}
							).prototype = new H;
							var tt, it, nt, rt = Qe, at = function(e) {
									var t = e.byteLength
										, i = 0
										, n = 0;
									this.length = function() {
											return 8 * t
									}
									,
									this.bitsAvailable = function() {
											return 8 * t + n
									}
									,
									this.loadWord = function() {
											var r = e.byteLength - t
												, a = new Uint8Array(4)
												, s = Math.min(4, t);
											if (0 === s)
													throw new Error("no bytes available");
											a.set(e.subarray(r, r + s)),
											i = new DataView(a.buffer).getUint32(0),
											n = 8 * s,
											t -= s
									}
									,
									this.skipBits = function(e) {
											var r;
											n > e ? (i <<= e,
											n -= e) : (e -= n,
											e -= 8 * (r = Math.floor(e / 8)),
											t -= r,
											this.loadWord(),
											i <<= e,
											n -= e)
									}
									,
									this.readBits = function(e) {
											var r = Math.min(n, e)
												, a = i >>> 32 - r;
											return (n -= r) > 0 ? i <<= r : t > 0 && this.loadWord(),
											(r = e - r) > 0 ? a << r | this.readBits(r) : a
									}
									,
									this.skipLeadingZeros = function() {
											var e;
											for (e = 0; e < n; ++e)
													if (0 != (i & 2147483648 >>> e))
															return i <<= e,
															n -= e,
															e;
											return this.loadWord(),
											e + this.skipLeadingZeros()
									}
									,
									this.skipUnsignedExpGolomb = function() {
											this.skipBits(1 + this.skipLeadingZeros())
									}
									,
									this.skipExpGolomb = function() {
											this.skipBits(1 + this.skipLeadingZeros())
									}
									,
									this.readUnsignedExpGolomb = function() {
											var e = this.skipLeadingZeros();
											return this.readBits(e + 1) - 1
									}
									,
									this.readExpGolomb = function() {
											var e = this.readUnsignedExpGolomb();
											return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
									}
									,
									this.readBoolean = function() {
											return 1 === this.readBits(1)
									}
									,
									this.readUnsignedByte = function() {
											return this.readBits(8)
									}
									,
									this.loadWord()
							};
							(it = function() {
									var e, t, i = 0;
									it.prototype.init.call(this),
									this.push = function(n) {
											var r;
											t ? ((r = new Uint8Array(t.byteLength + n.data.byteLength)).set(t),
											r.set(n.data, t.byteLength),
											t = r) : t = n.data;
											for (var a = t.byteLength; i < a - 3; i++)
													if (1 === t[i + 2]) {
															e = i + 5;
															break
													}
											for (; e < a; )
													switch (t[e]) {
													case 0:
															if (0 !== t[e - 1]) {
																	e += 2;
																	break
															}
															if (0 !== t[e - 2]) {
																	e++;
																	break
															}
															i + 3 !== e - 2 && this.trigger("data", t.subarray(i + 3, e - 2));
															do {
																	e++
															} while (1 !== t[e] && e < a);
															i = e - 2,
															e += 3;
															break;
													case 1:
															if (0 !== t[e - 1] || 0 !== t[e - 2]) {
																	e += 3;
																	break
															}
															this.trigger("data", t.subarray(i + 3, e - 2)),
															i = e - 2,
															e += 3;
															break;
													default:
															e += 3
													}
											t = t.subarray(i),
											e -= i,
											i = 0
									}
									,
									this.reset = function() {
											t = null,
											i = 0,
											this.trigger("reset")
									}
									,
									this.flush = function() {
											t && t.byteLength > 3 && this.trigger("data", t.subarray(i + 3)),
											t = null,
											i = 0,
											this.trigger("done")
									}
									,
									this.endTimeline = function() {
											this.flush(),
											this.trigger("endedtimeline")
									}
							}
							).prototype = new H,
							nt = {
									100: !0,
									110: !0,
									122: !0,
									244: !0,
									44: !0,
									83: !0,
									86: !0,
									118: !0,
									128: !0,
									138: !0,
									139: !0,
									134: !0
							},
							(tt = function() {
									var e, t, i, n, r, a, s, o = new it;
									tt.prototype.init.call(this),
									e = this,
									this.push = function(e) {
											"video" === e.type && (t = e.trackId,
											i = e.pts,
											n = e.dts,
											o.push(e))
									}
									,
									o.on("data", (function(s) {
											var o = {
													trackId: t,
													pts: i,
													dts: n,
													data: s
											};
											switch (31 & s[0]) {
											case 5:
													o.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
													break;
											case 6:
													o.nalUnitType = "sei_rbsp",
													o.escapedRBSP = r(s.subarray(1));
													break;
											case 7:
													o.nalUnitType = "seq_parameter_set_rbsp",
													o.escapedRBSP = r(s.subarray(1)),
													o.config = a(o.escapedRBSP);
													break;
											case 8:
													o.nalUnitType = "pic_parameter_set_rbsp";
													break;
											case 9:
													o.nalUnitType = "access_unit_delimiter_rbsp"
											}
											e.trigger("data", o)
									}
									)),
									o.on("done", (function() {
											e.trigger("done")
									}
									)),
									o.on("partialdone", (function() {
											e.trigger("partialdone")
									}
									)),
									o.on("reset", (function() {
											e.trigger("reset")
									}
									)),
									o.on("endedtimeline", (function() {
											e.trigger("endedtimeline")
									}
									)),
									this.flush = function() {
											o.flush()
									}
									,
									this.partialFlush = function() {
											o.partialFlush()
									}
									,
									this.reset = function() {
											o.reset()
									}
									,
									this.endTimeline = function() {
											o.endTimeline()
									}
									,
									s = function(e, t) {
											var i, n = 8, r = 8;
											for (i = 0; i < e; i++)
													0 !== r && (r = (n + t.readExpGolomb() + 256) % 256),
													n = 0 === r ? n : r
									}
									,
									r = function(e) {
											for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; )
													0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2),
													a += 2) : a++;
											if (0 === r.length)
													return e;
											t = n - r.length,
											i = new Uint8Array(t);
											var s = 0;
											for (a = 0; a < t; s++,
											a++)
													s === r[0] && (s++,
													r.shift()),
													i[a] = e[s];
											return i
									}
									,
									a = function(e) {
											var t, i, n, r, a, o, u, l, c, h, d, p, f, m = 0, g = 0, v = 0, y = 0, _ = 1;
											if (i = (t = new at(e)).readUnsignedByte(),
											r = t.readUnsignedByte(),
											n = t.readUnsignedByte(),
											t.skipUnsignedExpGolomb(),
											nt[i] && (3 === (a = t.readUnsignedExpGolomb()) && t.skipBits(1),
											t.skipUnsignedExpGolomb(),
											t.skipUnsignedExpGolomb(),
											t.skipBits(1),
											t.readBoolean()))
													for (d = 3 !== a ? 8 : 12,
													f = 0; f < d; f++)
															t.readBoolean() && s(f < 6 ? 16 : 64, t);
											if (t.skipUnsignedExpGolomb(),
											0 === (o = t.readUnsignedExpGolomb()))
													t.readUnsignedExpGolomb();
											else if (1 === o)
													for (t.skipBits(1),
													t.skipExpGolomb(),
													t.skipExpGolomb(),
													u = t.readUnsignedExpGolomb(),
													f = 0; f < u; f++)
															t.skipExpGolomb();
											if (t.skipUnsignedExpGolomb(),
											t.skipBits(1),
											l = t.readUnsignedExpGolomb(),
											c = t.readUnsignedExpGolomb(),
											0 === (h = t.readBits(1)) && t.skipBits(1),
											t.skipBits(1),
											t.readBoolean() && (m = t.readUnsignedExpGolomb(),
											g = t.readUnsignedExpGolomb(),
											v = t.readUnsignedExpGolomb(),
											y = t.readUnsignedExpGolomb()),
											t.readBoolean() && t.readBoolean()) {
													switch (t.readUnsignedByte()) {
													case 1:
															p = [1, 1];
															break;
													case 2:
															p = [12, 11];
															break;
													case 3:
															p = [10, 11];
															break;
													case 4:
															p = [16, 11];
															break;
													case 5:
															p = [40, 33];
															break;
													case 6:
															p = [24, 11];
															break;
													case 7:
															p = [20, 11];
															break;
													case 8:
															p = [32, 11];
															break;
													case 9:
															p = [80, 33];
															break;
													case 10:
															p = [18, 11];
															break;
													case 11:
															p = [15, 11];
															break;
													case 12:
															p = [64, 33];
															break;
													case 13:
															p = [160, 99];
															break;
													case 14:
															p = [4, 3];
															break;
													case 15:
															p = [3, 2];
															break;
													case 16:
															p = [2, 1];
															break;
													case 255:
															p = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
													}
													p && (_ = p[0] / p[1])
											}
											return {
													profileIdc: i,
													levelIdc: n,
													profileCompatibility: r,
													width: Math.ceil((16 * (l + 1) - 2 * m - 2 * g) * _),
													height: (2 - h) * (c + 1) * 16 - 2 * v - 2 * y,
													sarRatio: p
											}
									}
							}
							).prototype = new H;
							var st, ot = {
									H264Stream: tt,
									NalByteStream: it
							}, ut = function(e) {
									return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
							}, lt = function(e, t) {
									var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
									return (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
							}, ct = function(e, t) {
									var i = (224 & e[t + 5]) >> 5
										, n = e[t + 4] << 3;
									return 6144 & e[t + 3] | n | i
							};
							(st = function() {
									var e = new Uint8Array
										, t = 0;
									st.prototype.init.call(this),
									this.setTimestamp = function(e) {
											t = e
									}
									,
									this.push = function(i) {
											var n, r, a, s, o = 0, u = 0;
											for (e.length ? (s = e.length,
											(e = new Uint8Array(i.byteLength + s)).set(e.subarray(0, s)),
											e.set(i, s)) : e = i; e.length - u >= 3; )
													if (e[u] !== "I".charCodeAt(0) || e[u + 1] !== "D".charCodeAt(0) || e[u + 2] !== "3".charCodeAt(0))
															if (255 != (255 & e[u]) || 240 != (240 & e[u + 1]))
																	u++;
															else {
																	if (e.length - u < 7)
																			break;
																	if (u + (o = ct(e, u)) > e.length)
																			break;
																	a = {
																			type: "audio",
																			data: e.subarray(u, u + o),
																			pts: t,
																			dts: t
																	},
																	this.trigger("data", a),
																	u += o
															}
													else {
															if (e.length - u < 10)
																	break;
															if (u + (o = lt(e, u)) > e.length)
																	break;
															r = {
																	type: "timed-metadata",
																	data: e.subarray(u, u + o)
															},
															this.trigger("data", r),
															u += o
													}
											n = e.length - u,
											e = n > 0 ? e.subarray(u) : new Uint8Array
									}
									,
									this.reset = function() {
											e = new Uint8Array,
											this.trigger("reset")
									}
									,
									this.endTimeline = function() {
											e = new Uint8Array,
											this.trigger("endedtimeline")
									}
							}
							).prototype = new H;
							var ht, dt, pt, ft, mt = st, gt = ot.H264Stream, vt = ut, yt = de, _t = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], bt = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"], Tt = function(e, t) {
									var i;
									if (e.length !== t.length)
											return !1;
									for (i = 0; i < e.length; i++)
											if (e[i] !== t[i])
													return !1;
									return !0
							}, St = function(e, t, i, n, r, a) {
									return {
											start: {
													dts: e,
													pts: e + (i - t)
											},
											end: {
													dts: e + (n - t),
													pts: e + (r - i)
											},
											prependedContentDuration: a,
											baseMediaDecodeTime: e
									}
							};
							(dt = function(e, t) {
									var i = []
										, n = 0
										, r = 0
										, a = 0
										, s = 1 / 0;
									t = t || {},
									dt.prototype.init.call(this),
									this.push = function(t) {
											we(e, t),
											e && _t.forEach((function(i) {
													e[i] = t[i]
											}
											)),
											i.push(t)
									}
									,
									this.setEarliestDts = function(t) {
											r = t - e.timelineStartInfo.baseMediaDecodeTime
									}
									,
									this.setVideoBaseMediaDecodeTime = function(e) {
											s = e
									}
									,
									this.setAudioAppendStart = function(e) {
											a = e
									}
									,
									this.flush = function() {
											var o, u, l, c, h;
											0 !== i.length ? (o = ve(i, e, r),
											e.baseMediaDecodeTime = Se(e, t.keepOriginalTimestamps),
											ge(e, o, a, s),
											e.samples = ye(o),
											l = J(_e(o)),
											i = [],
											u = Z(n, [e]),
											c = new Uint8Array(u.byteLength + l.byteLength),
											n++,
											c.set(u),
											c.set(l, u.byteLength),
											Te(e),
											h = Math.ceil(1024 * yt / e.samplerate),
											o.length && this.trigger("timingInfo", {
													start: o[0].dts,
													end: o[0].dts + o.length * h
											}),
											this.trigger("data", {
													track: e,
													boxes: c
											}),
											this.trigger("done", "AudioSegmentStream")) : this.trigger("done", "AudioSegmentStream")
									}
									,
									this.reset = function() {
											Te(e),
											i = [],
											this.trigger("reset")
									}
							}
							).prototype = new H,
							(ht = function(e, t) {
									var i, n, r = 0, a = [], s = [];
									t = t || {},
									ht.prototype.init.call(this),
									delete e.minPTS,
									this.gopCache_ = [],
									this.push = function(t) {
											we(e, t),
											"seq_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.config,
											e.sps = [t.data],
											bt.forEach((function(t) {
													e[t] = i[t]
											}
											), this)),
											"pic_parameter_set_rbsp" !== t.nalUnitType || n || (n = t.data,
											e.pps = [t.data]),
											a.push(t)
									}
									,
									this.flush = function() {
											for (var i, n, o, u, l, c, h, d, p = 0; a.length && "access_unit_delimiter_rbsp" !== a[0].nalUnitType; )
													a.shift();
											if (0 === a.length)
													return this.resetStream_(),
													void this.trigger("done", "VideoSegmentStream");
											if (i = ie(a),
											(o = ne(i))[0][0].keyFrame || ((n = this.getGopForFusion_(a[0], e)) ? (p = n.duration,
											o.unshift(n),
											o.byteLength += n.byteLength,
											o.nalCount += n.nalCount,
											o.pts = n.pts,
											o.dts = n.dts,
											o.duration += n.duration) : o = re(o)),
											s.length) {
													var f;
													if (!(f = t.alignGopsAtEnd ? this.alignGopsAtEnd_(o) : this.alignGopsAtStart_(o)))
															return this.gopCache_.unshift({
																	gop: o.pop(),
																	pps: e.pps,
																	sps: e.sps
															}),
															this.gopCache_.length = Math.min(6, this.gopCache_.length),
															a = [],
															this.resetStream_(),
															void this.trigger("done", "VideoSegmentStream");
													Te(e),
													o = f
											}
											we(e, o),
											e.samples = ae(o),
											l = J(se(o)),
											e.baseMediaDecodeTime = Se(e, t.keepOriginalTimestamps),
											this.trigger("processedGopsInfo", o.map((function(e) {
													return {
															pts: e.pts,
															dts: e.dts,
															byteLength: e.byteLength
													}
											}
											))),
											h = o[0],
											d = o[o.length - 1],
											this.trigger("segmentTimingInfo", St(e.baseMediaDecodeTime, h.dts, h.pts, d.dts + d.duration, d.pts + d.duration, p)),
											this.trigger("timingInfo", {
													start: o[0].dts,
													end: o[o.length - 1].dts + o[o.length - 1].duration
											}),
											this.gopCache_.unshift({
													gop: o.pop(),
													pps: e.pps,
													sps: e.sps
											}),
											this.gopCache_.length = Math.min(6, this.gopCache_.length),
											a = [],
											this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime),
											this.trigger("timelineStartInfo", e.timelineStartInfo),
											u = Z(r, [e]),
											c = new Uint8Array(u.byteLength + l.byteLength),
											r++,
											c.set(u),
											c.set(l, u.byteLength),
											this.trigger("data", {
													track: e,
													boxes: c
											}),
											this.resetStream_(),
											this.trigger("done", "VideoSegmentStream")
									}
									,
									this.reset = function() {
											this.resetStream_(),
											a = [],
											this.gopCache_.length = 0,
											s.length = 0,
											this.trigger("reset")
									}
									,
									this.resetStream_ = function() {
											Te(e),
											i = void 0,
											n = void 0
									}
									,
									this.getGopForFusion_ = function(t) {
											var i, n, r, a, s, o = 1 / 0;
											for (s = 0; s < this.gopCache_.length; s++)
													r = (a = this.gopCache_[s]).gop,
													e.pps && Tt(e.pps[0], a.pps[0]) && e.sps && Tt(e.sps[0], a.sps[0]) && (r.dts < e.timelineStartInfo.dts || (i = t.dts - r.dts - r.duration) >= -1e4 && i <= 45e3 && (!n || o > i) && (n = a,
													o = i));
											return n ? n.gop : null
									}
									,
									this.alignGopsAtStart_ = function(e) {
											var t, i, n, r, a, o, u, l;
											for (a = e.byteLength,
											o = e.nalCount,
											u = e.duration,
											t = i = 0; t < s.length && i < e.length && (n = s[t],
											r = e[i],
											n.pts !== r.pts); )
													r.pts > n.pts ? t++ : (i++,
													a -= r.byteLength,
													o -= r.nalCount,
													u -= r.duration);
											return 0 === i ? e : i === e.length ? null : ((l = e.slice(i)).byteLength = a,
											l.duration = u,
											l.nalCount = o,
											l.pts = l[0].pts,
											l.dts = l[0].dts,
											l)
									}
									,
									this.alignGopsAtEnd_ = function(e) {
											var t, i, n, r, a, o, u;
											for (t = s.length - 1,
											i = e.length - 1,
											a = null,
											o = !1; t >= 0 && i >= 0; ) {
													if (n = s[t],
													r = e[i],
													n.pts === r.pts) {
															o = !0;
															break
													}
													n.pts > r.pts ? t-- : (t === s.length - 1 && (a = i),
													i--)
											}
											if (!o && null === a)
													return null;
											if (0 === (u = o ? i : a))
													return e;
											var l = e.slice(u)
												, c = l.reduce((function(e, t) {
													return e.byteLength += t.byteLength,
													e.duration += t.duration,
													e.nalCount += t.nalCount,
													e
											}
											), {
													byteLength: 0,
													duration: 0,
													nalCount: 0
											});
											return l.byteLength = c.byteLength,
											l.duration = c.duration,
											l.nalCount = c.nalCount,
											l.pts = l[0].pts,
											l.dts = l[0].dts,
											l
									}
									,
									this.alignGopsWith = function(e) {
											s = e
									}
							}
							).prototype = new H,
							(ft = function(e, t) {
									this.numberOfTracks = 0,
									this.metadataStream = t,
									void 0 !== (e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0,
									"boolean" == typeof e.keepOriginalTimestamps ? this.keepOriginalTimestamps = e.keepOriginalTimestamps : this.keepOriginalTimestamps = !1,
									this.pendingTracks = [],
									this.videoTrack = null,
									this.pendingBoxes = [],
									this.pendingCaptions = [],
									this.pendingMetadata = [],
									this.pendingBytes = 0,
									this.emittedTracks = 0,
									ft.prototype.init.call(this),
									this.push = function(e) {
											return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track),
											this.pendingBytes += e.boxes.byteLength,
											"video" === e.track.type && (this.videoTrack = e.track,
											this.pendingBoxes.push(e.boxes)),
											void ("audio" === e.track.type && (this.audioTrack = e.track,
											this.pendingBoxes.unshift(e.boxes))))
									}
							}
							).prototype = new H,
							ft.prototype.flush = function(e) {
									var t, i, n, r, a = 0, s = {
											captions: [],
											captionStreams: {},
											metadata: [],
											info: {}
									}, o = 0;
									if (this.pendingTracks.length < this.numberOfTracks) {
											if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e)
													return;
											if (this.remuxTracks)
													return;
											if (0 === this.pendingTracks.length)
													return this.emittedTracks++,
													void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
													this.emittedTracks = 0))
									}
									if (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts,
									bt.forEach((function(e) {
											s.info[e] = this.videoTrack[e]
									}
									), this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts,
									_t.forEach((function(e) {
											s.info[e] = this.audioTrack[e]
									}
									), this)),
									this.videoTrack || this.audioTrack) {
											for (1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined",
											this.emittedTracks += this.pendingTracks.length,
											n = ee(this.pendingTracks),
											s.initSegment = new Uint8Array(n.byteLength),
											s.initSegment.set(n),
											s.data = new Uint8Array(this.pendingBytes),
											r = 0; r < this.pendingBoxes.length; r++)
													s.data.set(this.pendingBoxes[r], a),
													a += this.pendingBoxes[r].byteLength;
											for (r = 0; r < this.pendingCaptions.length; r++)
													(t = this.pendingCaptions[r]).startTime = me(t.startPts, o, this.keepOriginalTimestamps),
													t.endTime = me(t.endPts, o, this.keepOriginalTimestamps),
													s.captionStreams[t.stream] = !0,
													s.captions.push(t);
											for (r = 0; r < this.pendingMetadata.length; r++)
													(i = this.pendingMetadata[r]).cueTime = me(i.pts, o, this.keepOriginalTimestamps),
													s.metadata.push(i);
											for (s.metadata.dispatchType = this.metadataStream.dispatchType,
											this.pendingTracks.length = 0,
											this.videoTrack = null,
											this.pendingBoxes.length = 0,
											this.pendingCaptions.length = 0,
											this.pendingBytes = 0,
											this.pendingMetadata.length = 0,
											this.trigger("data", s),
											r = 0; r < s.captions.length; r++)
													t = s.captions[r],
													this.trigger("caption", t);
											for (r = 0; r < s.metadata.length; r++)
													i = s.metadata[r],
													this.trigger("id3Frame", i)
									}
									this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
									this.emittedTracks = 0)
							}
							,
							ft.prototype.setRemux = function(e) {
									this.remuxTracks = e
							}
							,
							(pt = function(e) {
									var t, i, n = this, r = !0;
									pt.prototype.init.call(this),
									e = e || {},
									this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0,
									this.transmuxPipeline_ = {},
									this.setupAacPipeline = function() {
											var r = {};
											this.transmuxPipeline_ = r,
											r.type = "aac",
											r.metadataStream = new Je.MetadataStream,
											r.aacStream = new mt,
											r.audioTimestampRolloverStream = new Je.TimestampRolloverStream("audio"),
											r.timedMetadataTimestampRolloverStream = new Je.TimestampRolloverStream("timed-metadata"),
											r.adtsStream = new rt,
											r.coalesceStream = new ft(e,r.metadataStream),
											r.headOfPipeline = r.aacStream,
											r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream),
											r.aacStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream),
											r.metadataStream.on("timestamp", (function(e) {
													r.aacStream.setTimestamp(e.timeStamp)
											}
											)),
											r.aacStream.on("data", (function(a) {
													"timed-metadata" !== a.type || r.audioSegmentStream || (i = i || {
															timelineStartInfo: {
																	baseMediaDecodeTime: n.baseMediaDecodeTime
															},
															codec: "adts",
															type: "audio"
													},
													r.coalesceStream.numberOfTracks++,
													r.audioSegmentStream = new dt(i,e),
													r.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")),
													r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)),
													n.trigger("trackinfo", {
															hasAudio: !!i,
															hasVideo: !!t
													})
											}
											)),
											r.coalesceStream.on("data", this.trigger.bind(this, "data")),
											r.coalesceStream.on("done", this.trigger.bind(this, "done"))
									}
									,
									this.setupTsPipeline = function() {
											var r = {};
											this.transmuxPipeline_ = r,
											r.type = "ts",
											r.metadataStream = new Je.MetadataStream,
											r.packetStream = new Je.TransportPacketStream,
											r.parseStream = new Je.TransportParseStream,
											r.elementaryStream = new Je.ElementaryStream,
											r.timestampRolloverStream = new Je.TimestampRolloverStream,
											r.adtsStream = new rt,
											r.h264Stream = new gt,
											r.captionStream = new Je.CaptionStream,
											r.coalesceStream = new ft(e,r.metadataStream),
											r.headOfPipeline = r.packetStream,
											r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream),
											r.timestampRolloverStream.pipe(r.h264Stream),
											r.timestampRolloverStream.pipe(r.adtsStream),
											r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream),
											r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream),
											r.elementaryStream.on("data", (function(a) {
													var s;
													if ("metadata" === a.type) {
															for (s = a.tracks.length; s--; )
																	t || "video" !== a.tracks[s].type ? i || "audio" !== a.tracks[s].type || ((i = a.tracks[s]).timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime) : (t = a.tracks[s]).timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime;
															t && !r.videoSegmentStream && (r.coalesceStream.numberOfTracks++,
															r.videoSegmentStream = new ht(t,e),
															r.videoSegmentStream.on("timelineStartInfo", (function(e) {
																	i && (i.timelineStartInfo = e,
																	r.audioSegmentStream.setEarliestDts(e.dts))
															}
															)),
															r.videoSegmentStream.on("processedGopsInfo", n.trigger.bind(n, "gopInfo")),
															r.videoSegmentStream.on("segmentTimingInfo", n.trigger.bind(n, "videoSegmentTimingInfo")),
															r.videoSegmentStream.on("baseMediaDecodeTime", (function(e) {
																	i && r.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
															}
															)),
															r.videoSegmentStream.on("timingInfo", n.trigger.bind(n, "videoTimingInfo")),
															r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)),
															i && !r.audioSegmentStream && (r.coalesceStream.numberOfTracks++,
															r.audioSegmentStream = new dt(i,e),
															r.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")),
															r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)),
															n.trigger("trackinfo", {
																	hasAudio: !!i,
																	hasVideo: !!t
															})
													}
											}
											)),
											r.coalesceStream.on("data", this.trigger.bind(this, "data")),
											r.coalesceStream.on("id3Frame", (function(e) {
													e.dispatchType = r.metadataStream.dispatchType,
													n.trigger("id3Frame", e)
											}
											)),
											r.coalesceStream.on("caption", this.trigger.bind(this, "caption")),
											r.coalesceStream.on("done", this.trigger.bind(this, "done"))
									}
									,
									this.setBaseMediaDecodeTime = function(n) {
											var r = this.transmuxPipeline_;
											e.keepOriginalTimestamps || (this.baseMediaDecodeTime = n),
											i && (i.timelineStartInfo.dts = void 0,
											i.timelineStartInfo.pts = void 0,
											Te(i),
											e.keepOriginalTimestamps || (i.timelineStartInfo.baseMediaDecodeTime = n),
											r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()),
											t && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = []),
											t.timelineStartInfo.dts = void 0,
											t.timelineStartInfo.pts = void 0,
											Te(t),
											r.captionStream.reset(),
											e.keepOriginalTimestamps || (t.timelineStartInfo.baseMediaDecodeTime = n)),
											r.timestampRolloverStream && r.timestampRolloverStream.discontinuity()
									}
									,
									this.setAudioAppendStart = function(e) {
											i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
									}
									,
									this.setRemux = function(t) {
											var i = this.transmuxPipeline_;
											e.remux = t,
											i && i.coalesceStream && i.coalesceStream.setRemux(t)
									}
									,
									this.alignGopsWith = function(e) {
											t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
									}
									,
									this.push = function(e) {
											if (r) {
													var t = vt(e);
													t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(),
													r = !1
											}
											this.transmuxPipeline_.headOfPipeline.push(e)
									}
									,
									this.flush = function() {
											r = !0,
											this.transmuxPipeline_.headOfPipeline.flush()
									}
									,
									this.endTimeline = function() {
											this.transmuxPipeline_.headOfPipeline.endTimeline()
									}
									,
									this.reset = function() {
											this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset()
									}
									,
									this.resetCaptions = function() {
											this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
									}
							}
							).prototype = new H;
							var wt = {
									Transmuxer: pt,
									VideoSegmentStream: ht,
									AudioSegmentStream: dt,
									AUDIO_PROPERTIES: _t,
									VIDEO_PROPERTIES: bt,
									generateVideoSegmentTimingInfo: St
							}
								, kt = function() {
									function e(e, t) {
											for (var i = 0; i < t.length; i++) {
													var n = t[i];
													n.enumerable = n.enumerable || !1,
													n.configurable = !0,
													"value"in n && (n.writable = !0),
													Object.defineProperty(e, n.key, n)
											}
									}
									return function(t, i, n) {
											return i && e(t.prototype, i),
											n && e(t, n),
											t
									}
							}()
								, Et = function() {
									function e(t, i) {
											!function(e, t) {
													if (!(e instanceof t))
															throw new TypeError("Cannot call a class as a function")
											}(this, e),
											this.options = i || {},
											this.self = t,
											this.init()
									}
									return kt(e, [{
											key: "init",
											value: function() {
													this.transmuxer && this.transmuxer.dispose(),
													this.transmuxer = new wt.Transmuxer(this.options),
													function(e, t) {
															t.on("data", (function(t) {
																	var i = t.initSegment;
																	t.initSegment = {
																			data: i.buffer,
																			byteOffset: i.byteOffset,
																			byteLength: i.byteLength
																	};
																	var n = t.data;
																	t.data = n.buffer,
																	e.postMessage({
																			action: "data",
																			segment: t,
																			byteOffset: n.byteOffset,
																			byteLength: n.byteLength
																	}, [t.data])
															}
															)),
															t.captionStream && t.captionStream.on("data", (function(t) {
																	e.postMessage({
																			action: "caption",
																			data: t
																	})
															}
															)),
															t.on("done", (function(t) {
																	e.postMessage({
																			action: "done"
																	})
															}
															)),
															t.on("gopInfo", (function(t) {
																	e.postMessage({
																			action: "gopInfo",
																			gopInfo: t
																	})
															}
															)),
															t.on("videoSegmentTimingInfo", (function(t) {
																	e.postMessage({
																			action: "videoSegmentTimingInfo",
																			videoSegmentTimingInfo: t
																	})
															}
															))
													}(this.self, this.transmuxer)
											}
									}, {
											key: "push",
											value: function(e) {
													var t = new Uint8Array(e.data,e.byteOffset,e.byteLength);
													this.transmuxer.push(t)
											}
									}, {
											key: "reset",
											value: function() {
													this.init()
											}
									}, {
											key: "setTimestampOffset",
											value: function(e) {
													var t = e.timestampOffset || 0;
													this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * t))
											}
									}, {
											key: "setAudioAppendStart",
											value: function(e) {
													this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * e.appendStart))
											}
									}, {
											key: "flush",
											value: function(e) {
													this.transmuxer.flush()
											}
									}, {
											key: "resetCaptions",
											value: function() {
													this.transmuxer.resetCaptions()
											}
									}, {
											key: "alignGopsWith",
											value: function(e) {
													this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
											}
									}]),
									e
							}();
							new function(e) {
									e.onmessage = function(t) {
											"init" === t.data.action && t.data.options ? this.messageHandlers = new Et(e,t.data.options) : (this.messageHandlers || (this.messageHandlers = new Et(e)),
											t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data))
									}
							}
							(i)
					}()
			}
			))
				, eo = {
					videoCodec: "avc1",
					videoObjectTypeIndicator: ".4d400d",
					audioProfile: "2"
			}
				, to = function(e) {
					return e.map((function(e) {
							return e.replace(/avc1\.(\d+)\.(\d+)/i, (function(e, t, i) {
									return "avc1." + ("00" + Number(t).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
							}
							))
					}
					))
			}
				, io = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
						, t = {
							codecCount: 0
					}
						, i = void 0;
					return t.codecCount = e.split(",").length,
					t.codecCount = t.codecCount || 2,
					(i = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e)) && (t.videoCodec = i[2],
					t.videoObjectTypeIndicator = i[3]),
					t.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e),
					t.audioProfile = t.audioProfile && t.audioProfile[2],
					t
			}
				, no = function(e, t, i) {
					return e + "/" + t + '; codecs="' + i.filter((function(e) {
							return !!e
					}
					)).join(", ") + '"'
			}
				, ro = function(e, t) {
					var i = function(e) {
							return e.segments && e.segments.length && e.segments[0].map ? "mp4" : "mp2t"
					}(t)
						, n = function(e) {
							var t = e.attributes || {};
							return t.CODECS ? io(t.CODECS) : eo
					}(t)
						, r = t.attributes || {}
						, a = !0
						, s = !1;
					if (!t)
							return [];
					if (e.mediaGroups.AUDIO && r.AUDIO) {
							var o = e.mediaGroups.AUDIO[r.AUDIO];
							if (o)
									for (var u in s = !0,
									a = !1,
									o)
											if (!o[u].uri && !o[u].playlists) {
													a = !0;
													break
											}
					}
					s && !n.audioProfile && (a || (n.audioProfile = function(e, t) {
							if (!e.mediaGroups.AUDIO || !t)
									return null;
							var i = e.mediaGroups.AUDIO[t];
							if (!i)
									return null;
							for (var n in i) {
									var r = i[n];
									if (r.default && r.playlists)
											return io(r.playlists[0].attributes.CODECS).audioProfile
							}
							return null
					}(e, r.AUDIO)),
					n.audioProfile || (Fa.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),
					n.audioProfile = eo.audioProfile));
					var l = {};
					n.videoCodec && (l.video = "" + n.videoCodec + n.videoObjectTypeIndicator),
					n.audioProfile && (l.audio = "mp4a.40." + n.audioProfile);
					var c = no("audio", i, [l.audio])
						, h = no("video", i, [l.video])
						, d = no("video", i, [l.video, l.audio]);
					return s ? !a && l.video ? [h, c] : a || l.video ? [d, c] : [c, c] : l.video ? [d] : [c]
			}
				, ao = function(e) {
					var t = {
							type: "",
							parameters: {}
					}
						, i = e.trim().split(";");
					return t.type = i.shift().trim(),
					i.forEach((function(e) {
							var i = e.trim().split("=");
							if (i.length > 1) {
									var n = i[0].replace(/"/g, "").trim()
										, r = i[1].replace(/"/g, "").trim();
									t.parameters[n] = r
							}
					}
					)),
					t
			}
				, so = function(e) {
					return /mp4a\.\d+.\d+/i.test(e)
			}
				, oo = function(e) {
					return /avc1\.[\da-f]+/i.test(e)
			}
				, uo = function(e, t, i) {
					if (null == t || !e.length)
							return [];
					var n = Math.ceil(9e4 * (t - i + 3))
						, r = void 0;
					for (r = 0; r < e.length && !(e[r].pts > n); r++)
							;
					return e.slice(r)
			}
				, lo = function(e) {
					function t(e, i) {
							za(this, t);
							var n = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, Fa.EventTarget));
							n.timestampOffset_ = 0,
							n.pendingBuffers_ = [],
							n.bufferUpdating_ = !1,
							n.mediaSource_ = e,
							n.codecs_ = i,
							n.audioCodec_ = null,
							n.videoCodec_ = null,
							n.audioDisabled_ = !1,
							n.appendAudioInitSegment_ = !0,
							n.gopBuffer_ = [],
							n.timeMapping_ = 0,
							n.safeAppend_ = Fa.browser.IE_VERSION >= 11;
							var r = {
									remux: !1,
									alignGopsAtEnd: n.safeAppend_
							};
							return n.codecs_.forEach((function(e) {
									so(e) ? n.audioCodec_ = e : oo(e) && (n.videoCodec_ = e)
							}
							)),
							n.transmuxer_ = new Zs,
							n.transmuxer_.postMessage({
									action: "init",
									options: r
							}),
							n.transmuxer_.onmessage = function(e) {
									return "data" === e.data.action ? n.data_(e) : "done" === e.data.action ? n.done_(e) : "gopInfo" === e.data.action ? n.appendGopInfo_(e) : "videoSegmentTimingInfo" === e.data.action ? n.videoSegmentTimingInfo_(e.data.videoSegmentTimingInfo) : void 0
							}
							,
							Object.defineProperty(n, "timestampOffset", {
									get: function() {
											return this.timestampOffset_
									},
									set: function(e) {
											"number" == typeof e && e >= 0 && (this.timestampOffset_ = e,
											this.appendAudioInitSegment_ = !0,
											this.gopBuffer_.length = 0,
											this.timeMapping_ = 0,
											this.transmuxer_.postMessage({
													action: "setTimestampOffset",
													timestampOffset: e
											}))
									}
							}),
							Object.defineProperty(n, "appendWindowStart", {
									get: function() {
											return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
									},
									set: function(e) {
											this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = e),
											this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = e)
									}
							}),
							Object.defineProperty(n, "updating", {
									get: function() {
											return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
									}
							}),
							Object.defineProperty(n, "buffered", {
									get: function() {
											return function(e, t, i) {
													var n = null
														, r = null
														, a = 0
														, s = []
														, o = [];
													if (!e && !t)
															return Fa.createTimeRange();
													if (!e)
															return t.buffered;
													if (!t)
															return e.buffered;
													if (i)
															return e.buffered;
													if (0 === e.buffered.length && 0 === t.buffered.length)
															return Fa.createTimeRange();
													for (var u = e.buffered, l = t.buffered, c = u.length; c--; )
															s.push({
																	time: u.start(c),
																	type: "start"
															}),
															s.push({
																	time: u.end(c),
																	type: "end"
															});
													for (c = l.length; c--; )
															s.push({
																	time: l.start(c),
																	type: "start"
															}),
															s.push({
																	time: l.end(c),
																	type: "end"
															});
													for (s.sort((function(e, t) {
															return e.time - t.time
													}
													)),
													c = 0; c < s.length; c++)
															"start" === s[c].type ? 2 === ++a && (n = s[c].time) : "end" === s[c].type && 1 === --a && (r = s[c].time),
															null !== n && null !== r && (o.push([n, r]),
															n = null,
															r = null);
													return Fa.createTimeRanges(o)
											}(this.videoBuffer_, this.audioBuffer_, this.audioDisabled_)
									}
							}),
							n
					}
					return Ya(t, e),
					Ga(t, [{
							key: "data_",
							value: function(e) {
									var t = e.data.segment;
									t.data = new Uint8Array(t.data,e.data.byteOffset,e.data.byteLength),
									t.initSegment = new Uint8Array(t.initSegment.data,t.initSegment.byteOffset,t.initSegment.byteLength),
									function(e, t, i) {
											var n = t.player_;
											if (i.captions && i.captions.length)
													for (var r in e.inbandTextTracks_ || (e.inbandTextTracks_ = {}),
													i.captionStreams)
															if (!e.inbandTextTracks_[r]) {
																	n.tech_.trigger({
																			type: "usage",
																			name: "hls-608"
																	});
																	var a = n.textTracks().getTrackById(r);
																	e.inbandTextTracks_[r] = a || n.addRemoteTextTrack({
																			kind: "captions",
																			id: r,
																			label: r
																	}, !1).track
															}
											i.metadata && i.metadata.length && !e.metadataTrack_ && (e.metadataTrack_ = n.addRemoteTextTrack({
													kind: "metadata",
													label: "Timed Metadata"
											}, !1).track,
											e.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
									}(this, this.mediaSource_, t),
									this.pendingBuffers_.push(t)
							}
					}, {
							key: "done_",
							value: function(e) {
									"closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0
							}
					}, {
							key: "videoSegmentTimingInfo_",
							value: function(e) {
									var t = {
											start: {
													decode: e.start.dts / 9e4,
													presentation: e.start.pts / 9e4
											},
											end: {
													decode: e.end.dts / 9e4,
													presentation: e.end.pts / 9e4
											},
											baseMediaDecodeTime: e.baseMediaDecodeTime / 9e4
									};
									e.prependedContentDuration && (t.prependedContentDuration = e.prependedContentDuration / 9e4),
									this.trigger({
											type: "videoSegmentTimingInfo",
											videoSegmentTimingInfo: t
									})
							}
					}, {
							key: "createRealSourceBuffers_",
							value: function() {
									var e = this
										, t = ["audio", "video"];
									t.forEach((function(i) {
											if (e[i + "Codec_"] && !e[i + "Buffer_"]) {
													var n = null;
													if (e.mediaSource_[i + "Buffer_"])
															(n = e.mediaSource_[i + "Buffer_"]).updating = !1;
													else {
															var r = i + '/mp4;codecs="' + e[i + "Codec_"] + '"';
															n = function(e, t) {
																	var i = e.addSourceBuffer(t)
																		, n = Object.create(null);
																	n.updating = !1,
																	n.realBuffer_ = i;
																	var r = function(e) {
																			"function" == typeof i[e] ? n[e] = function() {
																					return i[e].apply(i, arguments)
																			}
																			: void 0 === n[e] && Object.defineProperty(n, e, {
																					get: function() {
																							return i[e]
																					},
																					set: function(t) {
																							return i[e] = t
																					}
																			})
																	};
																	for (var a in i)
																			r(a);
																	return n
															}(e.mediaSource_.nativeMediaSource_, r),
															e.mediaSource_[i + "Buffer_"] = n
													}
													e[i + "Buffer_"] = n,
													["update", "updatestart", "updateend"].forEach((function(r) {
															n.addEventListener(r, (function() {
																	if ("audio" !== i || !e.audioDisabled_)
																			return "updateend" === r && (e[i + "Buffer_"].updating = !1),
																			t.every((function(t) {
																					return !("audio" !== t || !e.audioDisabled_) || (i === t || !e[t + "Buffer_"] || !e[t + "Buffer_"].updating)
																			}
																			)) ? e.trigger(r) : void 0
															}
															))
													}
													))
											}
									}
									))
							}
					}, {
							key: "appendBuffer",
							value: function(e) {
									if (this.bufferUpdating_ = !0,
									this.audioBuffer_ && this.audioBuffer_.buffered.length) {
											var t = this.audioBuffer_.buffered;
											this.transmuxer_.postMessage({
													action: "setAudioAppendStart",
													appendStart: t.end(t.length - 1)
											})
									}
									this.videoBuffer_ && this.transmuxer_.postMessage({
											action: "alignGopsWith",
											gopsToAlignWith: uo(this.gopBuffer_, this.mediaSource_.player_ ? this.mediaSource_.player_.currentTime() : null, this.timeMapping_)
									}),
									this.transmuxer_.postMessage({
											action: "push",
											data: e.buffer,
											byteOffset: e.byteOffset,
											byteLength: e.byteLength
									}, [e.buffer]),
									this.transmuxer_.postMessage({
											action: "flush"
									})
							}
					}, {
							key: "appendGopInfo_",
							value: function(e) {
									this.gopBuffer_ = function(e, t, i) {
											if (!t.length)
													return e;
											if (i)
													return t.slice();
											for (var n = t[0].pts, r = 0; r < e.length && !(e[r].pts >= n); r++)
													;
											return e.slice(0, r).concat(t)
									}(this.gopBuffer_, e.data.gopInfo, this.safeAppend_)
							}
					}, {
							key: "remove",
							value: function(e, t) {
									if (this.videoBuffer_ && (this.videoBuffer_.updating = !0,
									this.videoBuffer_.remove(e, t),
									this.gopBuffer_ = function(e, t, i, n) {
											for (var r = Math.ceil(9e4 * (t - n)), a = Math.ceil(9e4 * (i - n)), s = e.slice(), o = e.length; o-- && !(e[o].pts <= a); )
													;
											if (-1 === o)
													return s;
											for (var u = o + 1; u-- && !(e[u].pts <= r); )
													;
											return u = Math.max(u, 0),
											s.splice(u, o - u + 1),
											s
									}(this.gopBuffer_, e, t, this.timeMapping_)),
									!this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0,
									this.audioBuffer_.remove(e, t)),
									Fs(e, t, this.metadataTrack_),
									this.inbandTextTracks_)
											for (var i in this.inbandTextTracks_)
													Fs(e, t, this.inbandTextTracks_[i])
							}
					}, {
							key: "processPendingSegments_",
							value: function() {
									var e = {
											video: {
													segments: [],
													bytes: 0
											},
											audio: {
													segments: [],
													bytes: 0
											},
											captions: [],
											metadata: []
									};
									if (!this.pendingBuffers_.length)
											return this.trigger("updateend"),
											void (this.bufferUpdating_ = !1);
									e = this.pendingBuffers_.reduce((function(e, t) {
											var i = t.type
												, n = t.data
												, r = t.initSegment;
											return e[i].segments.push(n),
											e[i].bytes += n.byteLength,
											e[i].initSegment = r,
											t.captions && (e.captions = e.captions.concat(t.captions)),
											t.info && (e[i].info = t.info),
											t.metadata && (e.metadata = e.metadata.concat(t.metadata)),
											e
									}
									), e),
									this.videoBuffer_ || this.audioBuffer_ || (0 === e.video.bytes && (this.videoCodec_ = null),
									0 === e.audio.bytes && (this.audioCodec_ = null),
									this.createRealSourceBuffers_()),
									e.audio.info && this.mediaSource_.trigger({
											type: "audioinfo",
											info: e.audio.info
									}),
									e.video.info && this.mediaSource_.trigger({
											type: "videoinfo",
											info: e.video.info
									}),
									this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (e.audio.segments.unshift(e.audio.initSegment),
									e.audio.bytes += e.audio.initSegment.byteLength),
									this.appendAudioInitSegment_ = !1);
									var t = !1;
									this.videoBuffer_ && e.video.bytes ? (e.video.segments.unshift(e.video.initSegment),
									e.video.bytes += e.video.initSegment.byteLength,
									this.concatAndAppendSegments_(e.video, this.videoBuffer_)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (t = !0),
									Hs(this, e.captions, e.metadata),
									!this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(e.audio, this.audioBuffer_),
									this.pendingBuffers_.length = 0,
									t && this.trigger("updateend"),
									this.bufferUpdating_ = !1
							}
					}, {
							key: "concatAndAppendSegments_",
							value: function(e, t) {
									var i = 0
										, n = void 0;
									if (e.bytes) {
											n = new Uint8Array(e.bytes),
											e.segments.forEach((function(e) {
													n.set(e, i),
													i += e.byteLength
											}
											));
											try {
													t.updating = !0,
													t.appendBuffer(n)
											} catch (e) {
													this.mediaSource_.player_ && this.mediaSource_.player_.error({
															code: -3,
															type: "APPEND_BUFFER_ERR",
															message: e.message,
															originalError: e
													})
											}
									}
							}
					}, {
							key: "abort",
							value: function() {
									this.videoBuffer_ && this.videoBuffer_.abort(),
									!this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(),
									this.transmuxer_ && this.transmuxer_.postMessage({
											action: "reset"
									}),
									this.pendingBuffers_.length = 0,
									this.bufferUpdating_ = !1
							}
					}]),
					t
			}(Fa.EventTarget)
				, co = function(e) {
					function t() {
							za(this, t);
							var e = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
								, i = void 0;
							for (i in e.nativeMediaSource_ = new r.a.MediaSource,
							e.nativeMediaSource_)
									i in t.prototype || "function" != typeof e.nativeMediaSource_[i] || (e[i] = e.nativeMediaSource_[i].bind(e.nativeMediaSource_));
							return e.duration_ = NaN,
							Object.defineProperty(e, "duration", {
									get: function() {
											return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
									},
									set: function(e) {
											this.duration_ = e,
											e === 1 / 0 || (this.nativeMediaSource_.duration = e)
									}
							}),
							Object.defineProperty(e, "seekable", {
									get: function() {
											return this.duration_ === 1 / 0 ? Fa.createTimeRanges([[0, this.nativeMediaSource_.duration]]) : this.nativeMediaSource_.seekable
									}
							}),
							Object.defineProperty(e, "readyState", {
									get: function() {
											return this.nativeMediaSource_.readyState
									}
							}),
							Object.defineProperty(e, "activeSourceBuffers", {
									get: function() {
											return this.activeSourceBuffers_
									}
							}),
							e.sourceBuffers = [],
							e.activeSourceBuffers_ = [],
							e.updateActiveSourceBuffers_ = function() {
									if (e.activeSourceBuffers_.length = 0,
									1 === e.sourceBuffers.length) {
											var t = e.sourceBuffers[0];
											return t.appendAudioInitSegment_ = !0,
											t.audioDisabled_ = !t.audioCodec_,
											void e.activeSourceBuffers_.push(t)
									}
									for (var i = !1, n = !0, r = 0; r < e.player_.audioTracks().length; r++) {
											var a = e.player_.audioTracks()[r];
											if (a.enabled && "main" !== a.kind) {
													i = !0,
													n = !1;
													break
											}
									}
									e.sourceBuffers.forEach((function(t, r) {
											if (t.appendAudioInitSegment_ = !0,
											t.videoCodec_ && t.audioCodec_)
													t.audioDisabled_ = i;
											else if (t.videoCodec_ && !t.audioCodec_)
													t.audioDisabled_ = !0,
													n = !1;
											else if (!t.videoCodec_ && t.audioCodec_ && (t.audioDisabled_ = r ? n : !n,
											t.audioDisabled_))
													return;
											e.activeSourceBuffers_.push(t)
									}
									))
							}
							,
							e.onPlayerMediachange_ = function() {
									e.sourceBuffers.forEach((function(e) {
											e.appendAudioInitSegment_ = !0
									}
									))
							}
							,
							e.onHlsReset_ = function() {
									e.sourceBuffers.forEach((function(e) {
											e.transmuxer_ && e.transmuxer_.postMessage({
													action: "resetCaptions"
											})
									}
									))
							}
							,
							e.onHlsSegmentTimeMapping_ = function(t) {
									e.sourceBuffers.forEach((function(e) {
											return e.timeMapping_ = t.mapping
									}
									))
							}
							,
							["sourceopen", "sourceclose", "sourceended"].forEach((function(e) {
									this.nativeMediaSource_.addEventListener(e, this.trigger.bind(this))
							}
							), e),
							e.on("sourceopen", (function(t) {
									var i = s.a.querySelector('[src="' + e.url_ + '"]');
									i && (e.player_ = Fa(i.parentNode),
									e.player_ && (e.player_.tech_.on("hls-reset", e.onHlsReset_),
									e.player_.tech_.on("hls-segment-time-mapping", e.onHlsSegmentTimeMapping_),
									e.player_.audioTracks && e.player_.audioTracks() && (e.player_.audioTracks().on("change", e.updateActiveSourceBuffers_),
									e.player_.audioTracks().on("addtrack", e.updateActiveSourceBuffers_),
									e.player_.audioTracks().on("removetrack", e.updateActiveSourceBuffers_)),
									e.player_.on("mediachange", e.onPlayerMediachange_)))
							}
							)),
							e.on("sourceended", (function(t) {
									for (var i = qs(e.duration), n = 0; n < e.sourceBuffers.length; n++) {
											var r = e.sourceBuffers[n]
												, a = r.metadataTrack_ && r.metadataTrack_.cues;
											a && a.length && (a[a.length - 1].endTime = i)
									}
							}
							)),
							e.on("sourceclose", (function(e) {
									this.sourceBuffers.forEach((function(e) {
											e.transmuxer_ && e.transmuxer_.terminate()
									}
									)),
									this.sourceBuffers.length = 0,
									this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_),
									this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_),
									this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)),
									this.player_.el_ && this.player_.off("mediachange", this.onPlayerMediachange_),
									this.player_.tech_ && this.player_.tech_.el_ && (this.player_.tech_.off("hls-reset", this.onHlsReset_),
									this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
							}
							)),
							e
					}
					return Ya(t, e),
					Ga(t, [{
							key: "addSeekableRange_",
							value: function(e, t) {
									var i = void 0;
									if (this.duration !== 1 / 0)
											throw (i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError",
											i.code = 11,
											i;
									(t > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = t)
							}
					}, {
							key: "addSourceBuffer",
							value: function(e) {
									var t = void 0
										, i = ao(e);
									if (/^(video|audio)\/mp2t$/i.test(i.type)) {
											var n = [];
											i.parameters && i.parameters.codecs && (n = i.parameters.codecs.split(","),
											n = (n = to(n)).filter((function(e) {
													return so(e) || oo(e)
											}
											))),
											0 === n.length && (n = ["avc1.4d400d", "mp4a.40.2"]),
											t = new lo(this,n),
											0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(),
											t.createRealSourceBuffers_(),
											this.sourceBuffers[0].audioDisabled_ = !0)
									} else
											t = this.nativeMediaSource_.addSourceBuffer(e);
									return this.sourceBuffers.push(t),
									t
							}
					}]),
					t
			}(Fa.EventTarget)
				, ho = 0;
			Fa.mediaSources = {};
			var po = function(e, t) {
					var i = Fa.mediaSources[e];
					if (!i)
							throw new Error("Media Source not found (Video.js)");
					i.trigger({
							type: "sourceopen",
							swfId: t
					})
			}
				, fo = function() {
					return !!r.a.MediaSource && !!r.a.MediaSource.isTypeSupported && r.a.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
			}
				, mo = function() {
					if (this.MediaSource = {
							open: po,
							supportsNativeMediaSources: fo
					},
					fo())
							return new co;
					throw new Error("Cannot use create a virtual MediaSource for this video")
			};
			mo.open = po,
			mo.supportsNativeMediaSources = fo;
			var go = {
					createObjectURL: function(e) {
							var t = void 0;
							return e instanceof co ? (t = r.a.URL.createObjectURL(e.nativeMediaSource_),
							e.url_ = t,
							t) : e instanceof co ? (t = "blob:vjs-media-source/" + ho,
							ho++,
							Fa.mediaSources[t] = e,
							t) : (t = r.a.URL.createObjectURL(e),
							e.url_ = t,
							t)
					}
			};
			Fa.MediaSource = mo,
			Fa.URL = go;
			var vo = Fa.EventTarget
				, yo = Fa.mergeOptions
				, _o = function(e, t) {
					for (var i = void 0, n = yo(e, {
							duration: t.duration,
							minimumUpdatePeriod: t.minimumUpdatePeriod
					}), r = 0; r < t.playlists.length; r++) {
							var a = es(n, t.playlists[r]);
							a ? n = a : i = !0
					}
					return Za(t, (function(e, t, r, a) {
							if (e.playlists && e.playlists.length) {
									var s = e.playlists[0].uri
										, o = es(n, e.playlists[0]);
									o && ((n = o).mediaGroups[t][r][a].playlists[0] = n.playlists[s],
									i = !1)
							}
					}
					)),
					i ? null : n
			}
				, bo = function(e) {
					var t = e.byterange.offset + e.byterange.length - 1;
					return e.uri + "-" + e.byterange.offset + "-" + t
			}
				, To = function(e, t) {
					var i, n, r = {};
					for (var a in e) {
							var s = e[a].sidx;
							if (s) {
									var o = bo(s);
									if (!t[o])
											break;
									var u = t[o].sidxInfo;
									i = u,
									n = s,
									(Boolean(!i.map && !n.map) || Boolean(i.map && n.map && i.map.byterange.offset === n.map.byterange.offset && i.map.byterange.length === n.map.byterange.length)) && i.uri === n.uri && i.byterange.offset === n.byterange.offset && i.byterange.length === n.byterange.length && (r[o] = t[o])
							}
					}
					return r
			}
				, So = function(e, t, i, n, r) {
					var a = {
							uri: Wa(n.handleManifestRedirects, e.resolvedUri),
							byterange: e.byterange,
							playlist: t
					};
					return i(Fa.mergeOptions(a, {
							responseType: "arraybuffer",
							headers: ks(a)
					}), r)
			}
				, wo = function(e) {
					function t(e, i) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
								, r = arguments[3];
							za(this, t);
							var a = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
								, s = n.withCredentials
								, o = void 0 !== s && s
								, u = n.handleManifestRedirects
								, l = void 0 !== u && u;
							if (a.hls_ = i,
							a.withCredentials = o,
							a.handleManifestRedirects = l,
							!e)
									throw new Error("A non-empty playlist URL or playlist is required");
							return a.on("minimumUpdatePeriod", (function() {
									a.refreshXml_()
							}
							)),
							a.on("mediaupdatetimeout", (function() {
									a.refreshMedia_(a.media().uri)
							}
							)),
							a.state = "HAVE_NOTHING",
							a.loadedPlaylists_ = {},
							"string" == typeof e ? (a.srcUrl = e,
							a.sidxMapping_ = {},
							Xa(a)) : (a.setupChildLoader(r, e),
							a)
					}
					return Ya(t, e),
					Ga(t, [{
							key: "setupChildLoader",
							value: function(e, t) {
									this.masterPlaylistLoader_ = e,
									this.childPlaylist_ = t
							}
					}, {
							key: "dispose",
							value: function() {
									this.stopRequest(),
									this.loadedPlaylists_ = {},
									r.a.clearTimeout(this.minimumUpdatePeriodTimeout_),
									r.a.clearTimeout(this.mediaRequest_),
									r.a.clearTimeout(this.mediaUpdateTimeout)
							}
					}, {
							key: "hasPendingRequest",
							value: function() {
									return this.request || this.mediaRequest_
							}
					}, {
							key: "stopRequest",
							value: function() {
									if (this.request) {
											var e = this.request;
											this.request = null,
											e.onreadystatechange = null,
											e.abort()
									}
							}
					}, {
							key: "sidxRequestFinished_",
							value: function(e, t, i, n) {
									var r = this;
									return function(a, s) {
											if (r.request) {
													if (r.request = null,
													a)
															return r.error = {
																	status: s.status,
																	message: "DASH playlist request error at URL: " + e.uri,
																	response: s.response,
																	code: 2
															},
															i && (r.state = i),
															r.trigger("error"),
															n(t, null);
													var o = new Uint8Array(s.response)
														, u = Ae.a.parseSidx(o.subarray(8));
													return n(t, u)
											}
									}
							}
					}, {
							key: "media",
							value: function(e) {
									var t = this;
									if (!e)
											return this.media_;
									if ("HAVE_NOTHING" === this.state)
											throw new Error("Cannot switch media playlist from " + this.state);
									var i = this.state;
									if ("string" == typeof e) {
											if (!this.master.playlists[e])
													throw new Error("Unknown playlist URI: " + e);
											e = this.master.playlists[e]
									}
									var n = !this.media_ || e.uri !== this.media_.uri;
									if (n && this.loadedPlaylists_[e.uri] && this.loadedPlaylists_[e.uri].endList)
											return this.state = "HAVE_METADATA",
											this.media_ = e,
											void (n && (this.trigger("mediachanging"),
											this.trigger("mediachange")));
									if (n)
											if (this.media_ && this.trigger("mediachanging"),
											e.sidx) {
													var a = void 0
														, s = void 0;
													this.masterPlaylistLoader_ ? (a = this.masterPlaylistLoader_.master,
													s = this.masterPlaylistLoader_.sidxMapping_) : (a = this.master,
													s = this.sidxMapping_);
													var o = bo(e.sidx);
													s[o] = {
															sidxInfo: e.sidx
													},
													this.request = So(e.sidx, e, this.hls_.xhr, {
															handleManifestRedirects: this.handleManifestRedirects
													}, this.sidxRequestFinished_(e, a, i, (function(n, r) {
															if (!n || !r)
																	throw new Error("failed to request sidx");
															s[o].sidx = r,
															t.haveMetadata({
																	startingState: i,
																	playlist: n.playlists[e.uri]
															})
													}
													)))
											} else
													this.mediaRequest_ = r.a.setTimeout(this.haveMetadata.bind(this, {
															startingState: i,
															playlist: e
													}), 0)
							}
					}, {
							key: "haveMetadata",
							value: function(e) {
									var t = e.startingState
										, i = e.playlist;
									this.state = "HAVE_METADATA",
									this.loadedPlaylists_[i.uri] = i,
									this.mediaRequest_ = null,
									this.refreshMedia_(i.uri),
									"HAVE_MASTER" === t ? this.trigger("loadedmetadata") : this.trigger("mediachange")
							}
					}, {
							key: "pause",
							value: function() {
									this.stopRequest(),
									r.a.clearTimeout(this.mediaUpdateTimeout),
									r.a.clearTimeout(this.minimumUpdatePeriodTimeout_),
									"HAVE_NOTHING" === this.state && (this.started = !1)
							}
					}, {
							key: "load",
							value: function(e) {
									var t = this;
									r.a.clearTimeout(this.mediaUpdateTimeout),
									r.a.clearTimeout(this.minimumUpdatePeriodTimeout_);
									var i = this.media();
									if (e) {
											var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
											this.mediaUpdateTimeout = r.a.setTimeout((function() {
													return t.load()
											}
											), n)
									} else
											this.started ? this.trigger("loadedplaylist") : this.start()
							}
					}, {
							key: "parseMasterXml",
							value: function() {
									var e = ke(this.masterXml_, {
											manifestUri: this.srcUrl,
											clientOffset: this.clientOffset_,
											sidxMapping: this.sidxMapping_
									});
									e.uri = this.srcUrl;
									for (var t = 0; t < e.playlists.length; t++) {
											var i = "placeholder-uri-" + t;
											e.playlists[t].uri = i,
											e.playlists[i] = e.playlists[t]
									}
									return Za(e, (function(t, i, n, r) {
											if (t.playlists && t.playlists.length) {
													var a = "placeholder-uri-" + i + "-" + n + "-" + r;
													t.playlists[0].uri = a,
													e.playlists[a] = t.playlists[0]
											}
									}
									)),
									ts(e),
									is(e),
									e
							}
					}, {
							key: "start",
							value: function() {
									var e = this;
									this.started = !0,
									this.masterPlaylistLoader_ ? this.mediaRequest_ = r.a.setTimeout(this.haveMaster_.bind(this), 0) : this.request = this.hls_.xhr({
											uri: this.srcUrl,
											withCredentials: this.withCredentials
									}, (function(t, i) {
											if (e.request) {
													if (e.request = null,
													t)
															return e.error = {
																	status: i.status,
																	message: "DASH playlist request error at URL: " + e.srcUrl,
																	responseText: i.responseText,
																	code: 2
															},
															"HAVE_NOTHING" === e.state && (e.started = !1),
															e.trigger("error");
													e.masterXml_ = i.responseText,
													i.responseHeaders && i.responseHeaders.date ? e.masterLoaded_ = Date.parse(i.responseHeaders.date) : e.masterLoaded_ = Date.now(),
													e.srcUrl = Wa(e.handleManifestRedirects, e.srcUrl, i),
													e.syncClientServerClock_(e.onClientServerClockSync_.bind(e))
											}
									}
									))
							}
					}, {
							key: "syncClientServerClock_",
							value: function(e) {
									var t = this
										, i = Ee(this.masterXml_);
									return null === i ? (this.clientOffset_ = this.masterLoaded_ - Date.now(),
									e()) : "DIRECT" === i.method ? (this.clientOffset_ = i.value - Date.now(),
									e()) : void (this.request = this.hls_.xhr({
											uri: Va(this.srcUrl, i.value),
											method: i.method,
											withCredentials: this.withCredentials
									}, (function(n, r) {
											if (t.request) {
													if (n)
															return t.clientOffset_ = t.masterLoaded_ - Date.now(),
															e();
													var a = void 0;
													a = "HEAD" === i.method ? r.responseHeaders && r.responseHeaders.date ? Date.parse(r.responseHeaders.date) : t.masterLoaded_ : Date.parse(r.responseText),
													t.clientOffset_ = a - Date.now(),
													e()
											}
									}
									)))
							}
					}, {
							key: "haveMaster_",
							value: function() {
									this.state = "HAVE_MASTER",
									this.mediaRequest_ = null,
									this.masterPlaylistLoader_ ? this.media_ || this.media(this.childPlaylist_) : (this.master = this.parseMasterXml(),
									this.trigger("loadedplaylist"))
							}
					}, {
							key: "onClientServerClockSync_",
							value: function() {
									var e = this;
									this.haveMaster_(),
									this.hasPendingRequest() || this.media_ || this.media(this.master.playlists[0]),
									this.master && this.master.minimumUpdatePeriod && (this.minimumUpdatePeriodTimeout_ = r.a.setTimeout((function() {
											e.trigger("minimumUpdatePeriod")
									}
									), this.master.minimumUpdatePeriod))
							}
					}, {
							key: "refreshXml_",
							value: function() {
									var e = this;
									this.request = this.hls_.xhr({
											uri: this.srcUrl,
											withCredentials: this.withCredentials
									}, (function(t, i) {
											if (e.request) {
													if (e.request = null,
													t)
															return e.error = {
																	status: i.status,
																	message: "DASH playlist request error at URL: " + e.srcUrl,
																	responseText: i.responseText,
																	code: 2
															},
															"HAVE_NOTHING" === e.state && (e.started = !1),
															e.trigger("error");
													e.masterXml_ = i.responseText,
													e.sidxMapping_ = function(e, t, i, n) {
															var r = ke(e, {
																	manifestUri: t,
																	clientOffset: i
															})
																, a = To(r.playlists, n);
															return Za(r, (function(e, t, i, r) {
																	if (e.playlists && e.playlists.length) {
																			var s = e.playlists;
																			a = yo(a, To(s, n))
																	}
															}
															)),
															a
													}(e.masterXml_, e.srcUrl, e.clientOffset_, e.sidxMapping_);
													var n = e.parseMasterXml()
														, a = _o(e.master, n)
														, s = e.media().sidx;
													if (a)
															if (s) {
																	var o = bo(s);
																	if (!e.sidxMapping_[o]) {
																			var u = e.media();
																			e.request = So(u.sidx, u, e.hls_.xhr, {
																					handleManifestRedirects: e.handleManifestRedirects
																			}, e.sidxRequestFinished_(u, n, e.state, (function(t, i) {
																					if (!t || !i)
																							throw new Error("failed to request sidx on minimumUpdatePeriod");
																					e.sidxMapping_[o].sidx = i,
																					e.minimumUpdatePeriodTimeout_ = r.a.setTimeout((function() {
																							e.trigger("minimumUpdatePeriod")
																					}
																					), e.master.minimumUpdatePeriod),
																					e.refreshMedia_(e.media().uri)
																			}
																			)))
																	}
															} else
																	e.master = a;
													e.minimumUpdatePeriodTimeout_ = r.a.setTimeout((function() {
															e.trigger("minimumUpdatePeriod")
													}
													), e.master.minimumUpdatePeriod)
											}
									}
									))
							}
					}, {
							key: "refreshMedia_",
							value: function(e) {
									var t = this;
									if (!e)
											throw new Error("refreshMedia_ must take a media uri");
									var i = void 0
										, n = void 0;
									this.masterPlaylistLoader_ ? (i = this.masterPlaylistLoader_.master,
									n = this.masterPlaylistLoader_.parseMasterXml()) : (i = this.master,
									n = this.parseMasterXml());
									var a = _o(i, n);
									a ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = a : this.master = a,
									this.media_ = a.playlists[e]) : (this.media_ = n.playlists[e],
									this.trigger("playlistunchanged")),
									this.media().endList || (this.mediaUpdateTimeout = r.a.setTimeout((function() {
											t.trigger("mediaupdatetimeout")
									}
									), ns(this.media(), !!a))),
									this.trigger("loadedplaylist")
							}
					}]),
					t
			}(vo)
				, ko = function(e) {
					return Fa.log.debug ? Fa.log.debug.bind(Fa, "VHS:", e + " >") : function() {}
			};
			function Eo() {}
			var Co = function() {
					function e(t, i, n, r) {
							za(this, e),
							this.callbacks_ = [],
							this.pendingCallback_ = null,
							this.timestampOffset_ = 0,
							this.mediaSource = t,
							this.processedAppend_ = !1,
							this.type_ = n,
							this.mimeType_ = i,
							this.logger_ = ko("SourceUpdater[" + n + "][" + i + "]"),
							"closed" === t.readyState ? t.addEventListener("sourceopen", this.createSourceBuffer_.bind(this, i, r)) : this.createSourceBuffer_(i, r)
					}
					return Ga(e, [{
							key: "createSourceBuffer_",
							value: function(e, t) {
									var i = this;
									this.sourceBuffer_ = this.mediaSource.addSourceBuffer(e),
									this.logger_("created SourceBuffer"),
									t && (t.trigger("sourcebufferadded"),
									this.mediaSource.sourceBuffers.length < 2) ? t.on("sourcebufferadded", (function() {
											i.start_()
									}
									)) : this.start_()
							}
					}, {
							key: "start_",
							value: function() {
									var e = this;
									this.started_ = !0,
									this.onUpdateendCallback_ = function() {
											var t = e.pendingCallback_;
											e.pendingCallback_ = null,
											e.sourceBuffer_.removing = !1,
											e.logger_("buffered [" + js(e.buffered()) + "]"),
											t && t(),
											e.runCallback_()
									}
									,
									this.sourceBuffer_.addEventListener("updateend", this.onUpdateendCallback_),
									this.runCallback_()
							}
					}, {
							key: "abort",
							value: function(e) {
									var t = this;
									this.processedAppend_ && this.queueCallback_((function() {
											t.sourceBuffer_.abort()
									}
									), e)
							}
					}, {
							key: "appendBuffer",
							value: function(e, t) {
									var i = this;
									this.processedAppend_ = !0,
									this.queueCallback_((function() {
											e.videoSegmentTimingInfoCallback && i.sourceBuffer_.addEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback),
											i.sourceBuffer_.appendBuffer(e.bytes)
									}
									), (function() {
											e.videoSegmentTimingInfoCallback && i.sourceBuffer_.removeEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback),
											t()
									}
									))
							}
					}, {
							key: "buffered",
							value: function() {
									return this.sourceBuffer_ ? this.sourceBuffer_.buffered : Fa.createTimeRanges()
							}
					}, {
							key: "remove",
							value: function(e, t) {
									var i = this
										, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eo;
									this.processedAppend_ && this.queueCallback_((function() {
											i.logger_("remove [" + e + " => " + t + "]"),
											i.sourceBuffer_.removing = !0,
											i.sourceBuffer_.remove(e, t)
									}
									), n)
							}
					}, {
							key: "updating",
							value: function() {
									return !this.sourceBuffer_ || this.sourceBuffer_.updating || !!this.pendingCallback_ && this.pendingCallback_ !== Eo
							}
					}, {
							key: "timestampOffset",
							value: function(e) {
									var t = this;
									return void 0 !== e && (this.queueCallback_((function() {
											t.sourceBuffer_.timestampOffset = e,
											t.runCallback_()
									}
									)),
									this.timestampOffset_ = e),
									this.timestampOffset_
							}
					}, {
							key: "queueCallback_",
							value: function(e, t) {
									this.callbacks_.push([e.bind(this), t]),
									this.runCallback_()
							}
					}, {
							key: "runCallback_",
							value: function() {
									var e = void 0;
									!this.updating() && this.callbacks_.length && this.started_ && (e = this.callbacks_.shift(),
									this.pendingCallback_ = e[1],
									e[0]())
							}
					}, {
							key: "dispose",
							value: function() {
									var e = this
										, t = function t() {
											e.sourceBuffer_ && "open" === e.mediaSource.readyState && e.sourceBuffer_.abort(),
											e.sourceBuffer_.removeEventListener("updateend", t)
									};
									this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_),
									this.sourceBuffer_.removing ? this.sourceBuffer_.addEventListener("updateend", t) : t()
							}
					}]),
					e
			}()
				, Ao = {
					GOAL_BUFFER_LENGTH: 30,
					MAX_GOAL_BUFFER_LENGTH: 60,
					GOAL_BUFFER_LENGTH_RATE: 1,
					INITIAL_BANDWIDTH: 4194304,
					BANDWIDTH_VARIANCE: 1.2,
					BUFFER_LOW_WATER_LINE: 0,
					MAX_BUFFER_LOW_WATER_LINE: 30,
					BUFFER_LOW_WATER_LINE_RATE: 1
			}
				, xo = 2
				, Oo = -101
				, Po = -102
				, Io = function(e) {
					e.forEach((function(e) {
							e.abort()
					}
					))
			}
				, Lo = function(e, t) {
					return t.timedout ? {
							status: t.status,
							message: "HLS request timed-out at URL: " + t.uri,
							code: Oo,
							xhr: t
					} : t.aborted ? {
							status: t.status,
							message: "HLS request aborted at URL: " + t.uri,
							code: Po,
							xhr: t
					} : e ? {
							status: t.status,
							message: "HLS request errored at URL: " + t.uri,
							code: xo,
							xhr: t
					} : null
			}
				, Do = function(e, t, i) {
					var n = 0
						, r = !1;
					return function(a, s) {
							if (!r)
									return a ? (r = !0,
									Io(e),
									i(a, s)) : (n += 1) === e.length ? (s.endOfAllRequests = Date.now(),
									s.encryptedBytes ? function(e, t, i) {
											e.addEventListener("message", (function n(r) {
													if (r.data.source === t.requestId) {
															e.removeEventListener("message", n);
															var a = r.data.decrypted;
															return t.bytes = new Uint8Array(a.bytes,a.byteOffset,a.byteLength),
															i(null, t)
													}
											}
											));
											var n = void 0;
											n = t.key.bytes.slice ? t.key.bytes.slice() : new Uint32Array(Array.prototype.slice.call(t.key.bytes)),
											e.postMessage(xs({
													source: t.requestId,
													encrypted: t.encryptedBytes,
													key: n,
													iv: t.key.iv
											}), [t.encryptedBytes.buffer, n.buffer])
									}(t, s, i) : i(null, s)) : void 0
					}
			}
				, Ro = function(e, t) {
					return function(i) {
							var n, r, a;
							return e.stats = Fa.mergeOptions(e.stats, (r = (n = i).target,
							(a = {
									bandwidth: 1 / 0,
									bytesReceived: 0,
									roundTripTime: Date.now() - r.requestTime || 0
							}).bytesReceived = n.loaded,
							a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3),
							a)),
							!e.stats.firstBytesReceivedAt && e.stats.bytesReceived && (e.stats.firstBytesReceivedAt = Date.now()),
							t(i, e)
					}
			}
				, No = function(e, t, i, n, r, a, s) {
					var o = []
						, u = Do(o, i, s);
					if (r.key && !r.key.bytes) {
							var l = e(Fa.mergeOptions(t, {
									uri: r.key.resolvedUri,
									responseType: "arraybuffer"
							}), function(e, t) {
									return function(i, n) {
											var r = n.response
												, a = Lo(i, n);
											if (a)
													return t(a, e);
											if (16 !== r.byteLength)
													return t({
															status: n.status,
															message: "Invalid HLS key at URL: " + n.uri,
															code: xo,
															xhr: n
													}, e);
											var s = new DataView(r);
											return e.key.bytes = new Uint32Array([s.getUint32(0), s.getUint32(4), s.getUint32(8), s.getUint32(12)]),
											t(null, e)
									}
							}(r, u));
							o.push(l)
					}
					if (r.map && !r.map.bytes) {
							var c = e(Fa.mergeOptions(t, {
									uri: r.map.resolvedUri,
									responseType: "arraybuffer",
									headers: ks(r.map)
							}), function(e, t, i) {
									return function(n, r) {
											var a = r.response
												, s = Lo(n, r);
											return s ? i(s, e) : 0 === a.byteLength ? i({
													status: r.status,
													message: "Empty HLS segment content at URL: " + r.uri,
													code: xo,
													xhr: r
											}, e) : (e.map.bytes = new Uint8Array(r.response),
											t && !t.isInitialized() && t.init(),
											e.map.timescales = Oe.a.timescale(e.map.bytes),
											e.map.videoTrackIds = Oe.a.videoTrackIds(e.map.bytes),
											i(null, e))
									}
							}(r, n, u));
							o.push(c)
					}
					var h = e(Fa.mergeOptions(t, {
							uri: r.resolvedUri,
							responseType: "arraybuffer",
							headers: ks(r)
					}), function(e, t, i) {
							return function(n, r) {
									var a = r.response
										, s = Lo(n, r)
										, o = void 0;
									return s ? i(s, e) : 0 === a.byteLength ? i({
											status: r.status,
											message: "Empty HLS segment content at URL: " + r.uri,
											code: xo,
											xhr: r
									}, e) : (e.stats = function(e) {
											return {
													bandwidth: e.bandwidth,
													bytesReceived: e.bytesReceived || 0,
													roundTripTime: e.roundTripTime || 0
											}
									}(r),
									e.key ? e.encryptedBytes = new Uint8Array(r.response) : e.bytes = new Uint8Array(r.response),
									t && e.map && e.map.bytes && (t.isInitialized() || t.init(),
									(o = t.parse(e.bytes, e.map.videoTrackIds, e.map.timescales)) && o.captions && (e.captionStreams = o.captionStreams,
									e.fmp4Captions = o.captions)),
									i(null, e))
							}
					}(r, n, u));
					return h.addEventListener("progress", Ro(r, a)),
					o.push(h),
					function() {
							return Io(o)
					}
			}
				, Uo = function(e, t) {
					var i;
					return e && (i = r.a.getComputedStyle(e)) ? i[t] : ""
			}
				, Mo = function(e, t) {
					var i = e.slice();
					e.sort((function(e, n) {
							var r = t(e, n);
							return 0 === r ? i.indexOf(e) - i.indexOf(n) : r
					}
					))
			}
				, jo = function(e, t) {
					var i = void 0
						, n = void 0;
					return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH),
					i = i || r.a.Number.MAX_VALUE,
					t.attributes.BANDWIDTH && (n = t.attributes.BANDWIDTH),
					i - (n = n || r.a.Number.MAX_VALUE)
			}
				, Bo = function(e, t, i) {
					if (!e || !t)
							return !1;
					var n = i === e.segments.length;
					return e.endList && "open" === t.readyState && n
			}
				, Fo = function(e) {
					return "number" == typeof e && isFinite(e)
			}
				, qo = function(e) {
					function t(e) {
							za(this, t);
							var i = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
							if (!e)
									throw new TypeError("Initialization settings are required");
							if ("function" != typeof e.currentTime)
									throw new TypeError("No currentTime getter specified");
							if (!e.mediaSource)
									throw new TypeError("No MediaSource specified");
							return i.bandwidth = e.bandwidth,
							i.throughput = {
									rate: 0,
									count: 0
							},
							i.roundTrip = NaN,
							i.resetStats_(),
							i.mediaIndex = null,
							i.hasPlayed_ = e.hasPlayed,
							i.currentTime_ = e.currentTime,
							i.seekable_ = e.seekable,
							i.seeking_ = e.seeking,
							i.duration_ = e.duration,
							i.mediaSource_ = e.mediaSource,
							i.hls_ = e.hls,
							i.loaderType_ = e.loaderType,
							i.startingMedia_ = void 0,
							i.segmentMetadataTrack_ = e.segmentMetadataTrack,
							i.goalBufferLength_ = e.goalBufferLength,
							i.sourceType_ = e.sourceType,
							i.inbandTextTracks_ = e.inbandTextTracks,
							i.state_ = "INIT",
							i.checkBufferTimeout_ = null,
							i.error_ = void 0,
							i.currentTimeline_ = -1,
							i.pendingSegment_ = null,
							i.mimeType_ = null,
							i.sourceUpdater_ = null,
							i.xhrOptions_ = null,
							i.activeInitSegmentId_ = null,
							i.initSegments_ = {},
							i.cacheEncryptionKeys_ = e.cacheEncryptionKeys,
							i.keyCache_ = {},
							"main" === i.loaderType_ ? i.captionParser_ = new Ie.a : i.captionParser_ = null,
							i.decrypter_ = e.decrypter,
							i.syncController_ = e.syncController,
							i.syncPoint_ = {
									segmentIndex: 0,
									time: 0
							},
							i.syncController_.on("syncinfoupdate", (function() {
									return i.trigger("syncinfoupdate")
							}
							)),
							i.mediaSource_.addEventListener("sourceopen", (function() {
									return i.ended_ = !1
							}
							)),
							i.fetchAtBuffer_ = !1,
							i.logger_ = ko("SegmentLoader[" + i.loaderType_ + "]"),
							Object.defineProperty(i, "state", {
									get: function() {
											return this.state_
									},
									set: function(e) {
											e !== this.state_ && (this.logger_(this.state_ + " -> " + e),
											this.state_ = e)
									}
							}),
							i
					}
					return Ya(t, e),
					Ga(t, [{
							key: "resetStats_",
							value: function() {
									this.mediaBytesTransferred = 0,
									this.mediaRequests = 0,
									this.mediaRequestsAborted = 0,
									this.mediaRequestsTimedout = 0,
									this.mediaRequestsErrored = 0,
									this.mediaTransferDuration = 0,
									this.mediaSecondsLoaded = 0
							}
					}, {
							key: "dispose",
							value: function() {
									this.state = "DISPOSED",
									this.pause(),
									this.abort_(),
									this.sourceUpdater_ && this.sourceUpdater_.dispose(),
									this.resetStats_(),
									this.captionParser_ && this.captionParser_.reset()
							}
					}, {
							key: "abort",
							value: function() {
									"WAITING" === this.state ? (this.abort_(),
									this.state = "READY",
									this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
							}
					}, {
							key: "abort_",
							value: function() {
									this.pendingSegment_ && this.pendingSegment_.abortRequests(),
									this.pendingSegment_ = null
							}
					}, {
							key: "error",
							value: function(e) {
									return void 0 !== e && (this.error_ = e),
									this.pendingSegment_ = null,
									this.error_
							}
					}, {
							key: "endOfStream",
							value: function() {
									this.ended_ = !0,
									this.pause(),
									this.trigger("ended")
							}
					}, {
							key: "buffered_",
							value: function() {
									return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : Fa.createTimeRanges()
							}
					}, {
							key: "initSegment",
							value: function(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
									if (!e)
											return null;
									var i = Os(e)
										, n = this.initSegments_[i];
									return t && !n && e.bytes && (this.initSegments_[i] = n = {
											resolvedUri: e.resolvedUri,
											byterange: e.byterange,
											bytes: e.bytes,
											timescales: e.timescales,
											videoTrackIds: e.videoTrackIds
									}),
									n || e
							}
					}, {
							key: "segmentKey",
							value: function(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
									if (!e)
											return null;
									var i = Ps(e)
										, n = this.keyCache_[i];
									this.cacheEncryptionKeys_ && t && !n && e.bytes && (this.keyCache_[i] = n = {
											resolvedUri: e.resolvedUri,
											bytes: e.bytes
									});
									var r = {
											resolvedUri: (n || e).resolvedUri
									};
									return n && (r.bytes = n.bytes),
									r
							}
					}, {
							key: "couldBeginLoading_",
							value: function() {
									return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
							}
					}, {
							key: "load",
							value: function() {
									if (this.monitorBuffer_(),
									this.playlist_) {
											if (this.syncController_.setDateTimeMapping(this.playlist_),
											"INIT" === this.state && this.couldBeginLoading_())
													return this.init_();
											!this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
									}
							}
					}, {
							key: "init_",
							value: function() {
									return this.state = "READY",
									this.sourceUpdater_ = new Co(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),
									this.resetEverything(),
									this.monitorBuffer_()
							}
					}, {
							key: "playlist",
							value: function(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
									if (e) {
											var i = this.playlist_
												, n = this.pendingSegment_;
											this.playlist_ = e,
											this.xhrOptions_ = t,
											this.hasPlayed_() || (e.syncInfo = {
													mediaSequence: e.mediaSequence,
													time: 0
											});
											var r = null;
											if (i && (i.id ? r = i.id : i.uri && (r = i.uri)),
											this.logger_("playlist update [" + r + " => " + (e.id || e.uri) + "]"),
											this.trigger("syncinfoupdate"),
											"INIT" === this.state && this.couldBeginLoading_())
													return this.init_();
											if (i && i.uri === e.uri) {
													var a = e.mediaSequence - i.mediaSequence;
													this.logger_("live window shift [" + a + "]"),
													null !== this.mediaIndex && (this.mediaIndex -= a),
													n && (n.mediaIndex -= a,
													n.mediaIndex >= 0 && (n.segment = e.segments[n.mediaIndex])),
													this.syncController_.saveExpiredSegmentInfo(i, e)
											} else
													null !== this.mediaIndex && this.resyncLoader()
									}
							}
					}, {
							key: "pause",
							value: function() {
									this.checkBufferTimeout_ && (r.a.clearTimeout(this.checkBufferTimeout_),
									this.checkBufferTimeout_ = null)
							}
					}, {
							key: "paused",
							value: function() {
									return null === this.checkBufferTimeout_
							}
					}, {
							key: "mimeType",
							value: function(e, t) {
									this.mimeType_ || (this.mimeType_ = e,
									this.sourceBufferEmitter_ = t,
									"INIT" === this.state && this.couldBeginLoading_() && this.init_())
							}
					}, {
							key: "resetEverything",
							value: function(e) {
									this.ended_ = !1,
									this.resetLoader(),
									this.remove(0, this.duration_(), e),
									this.captionParser_ && this.captionParser_.clearAllCaptions(),
									this.trigger("reseteverything")
							}
					}, {
							key: "resetLoader",
							value: function() {
									this.fetchAtBuffer_ = !1,
									this.resyncLoader()
							}
					}, {
							key: "resyncLoader",
							value: function() {
									this.mediaIndex = null,
									this.syncPoint_ = null,
									this.abort()
							}
					}, {
							key: "remove",
							value: function(e, t, i) {
									if (this.sourceUpdater_ && this.sourceUpdater_.remove(e, t, i),
									Fs(e, t, this.segmentMetadataTrack_),
									this.inbandTextTracks_)
											for (var n in this.inbandTextTracks_)
													Fs(e, t, this.inbandTextTracks_[n])
							}
					}, {
							key: "monitorBuffer_",
							value: function() {
									this.checkBufferTimeout_ && r.a.clearTimeout(this.checkBufferTimeout_),
									this.checkBufferTimeout_ = r.a.setTimeout(this.monitorBufferTick_.bind(this), 1)
							}
					}, {
							key: "monitorBufferTick_",
							value: function() {
									"READY" === this.state && this.fillBuffer_(),
									this.checkBufferTimeout_ && r.a.clearTimeout(this.checkBufferTimeout_),
									this.checkBufferTimeout_ = r.a.setTimeout(this.monitorBufferTick_.bind(this), 500)
							}
					}, {
							key: "fillBuffer_",
							value: function() {
									if (!this.sourceUpdater_.updating()) {
											this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
											var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
											e && (this.isEndOfStream_(e.mediaIndex) ? this.endOfStream() : (e.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && (e.timeline !== this.currentTimeline_ && (this.syncController_.reset(),
											e.timestampOffset = e.startOfSegment,
											this.captionParser_ && this.captionParser_.clearAllCaptions()),
											this.loadSegment_(e)))
									}
							}
					}, {
							key: "isEndOfStream_",
							value: function(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.playlist_;
									return Bo(t, this.mediaSource_, e) && !this.sourceUpdater_.updating()
							}
					}, {
							key: "checkBuffer_",
							value: function(e, t, i, n, r, a) {
									var s = 0
										, o = void 0;
									e.length && (s = e.end(e.length - 1));
									var u = Math.max(0, s - r);
									if (!t.segments.length)
											return null;
									if (u >= this.goalBufferLength_())
											return null;
									if (!n && u >= 1)
											return null;
									if (null === a)
											return i = this.getSyncSegmentCandidate_(t),
											this.generateSegmentInfo_(t, i, null, !0);
									if (null !== i) {
											t.segments[i];
											return o = s,
											this.generateSegmentInfo_(t, i + 1, o, !1)
									}
									if (this.fetchAtBuffer_) {
											var l = bs.getMediaInfoForTime(t, s, a.segmentIndex, a.time);
											i = l.mediaIndex,
											o = l.startTime
									} else {
											var c = bs.getMediaInfoForTime(t, r, a.segmentIndex, a.time);
											i = c.mediaIndex,
											o = c.startTime
									}
									return this.generateSegmentInfo_(t, i, o, !1)
							}
					}, {
							key: "getSyncSegmentCandidate_",
							value: function(e) {
									var t = this;
									if (-1 === this.currentTimeline_)
											return 0;
									var i = e.segments.map((function(e, t) {
											return {
													timeline: e.timeline,
													segmentIndex: t
											}
									}
									)).filter((function(e) {
											return e.timeline === t.currentTimeline_
									}
									));
									return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0)
							}
					}, {
							key: "generateSegmentInfo_",
							value: function(e, t, i, n) {
									if (t < 0 || t >= e.segments.length)
											return null;
									var r = e.segments[t];
									return {
											requestId: "segment-loader-" + Math.random(),
											uri: r.resolvedUri,
											mediaIndex: t,
											isSyncRequest: n,
											startOfSegment: i,
											playlist: e,
											bytes: null,
											encryptedBytes: null,
											timestampOffset: null,
											timeline: r.timeline,
											duration: r.duration,
											segment: r
									}
							}
					}, {
							key: "abortRequestEarly_",
							value: function(e) {
									if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH)
											return !1;
									if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3)
											return !1;
									var t = this.currentTime_()
										, i = e.bandwidth
										, n = this.pendingSegment_.duration
										, r = bs.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived)
										, a = function(e, t) {
											var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
												, n = e.length ? e.end(e.length - 1) : 0;
											return (n - t) / i
									}(this.buffered_(), t, this.hls_.tech_.playbackRate()) - 1;
									if (r <= a)
											return !1;
									var s = function(e) {
											var t = e.master
												, i = e.currentTime
												, n = e.bandwidth
												, r = e.duration
												, a = e.segmentDuration
												, s = e.timeUntilRebuffer
												, o = e.currentTimeline
												, u = e.syncController
												, l = t.playlists.filter((function(e) {
													return !bs.isIncompatible(e)
											}
											))
												, c = l.filter(bs.isEnabled);
											c.length || (c = l.filter((function(e) {
													return !bs.isDisabled(e)
											}
											)));
											var h = c.filter(bs.hasAttribute.bind(null, "BANDWIDTH")).map((function(e) {
													var t = u.getSyncPoint(e, r, o, i) ? 1 : 2;
													return {
															playlist: e,
															rebufferingImpact: bs.estimateSegmentRequestTime(a, n, e) * t - s
													}
											}
											))
												, d = h.filter((function(e) {
													return e.rebufferingImpact <= 0
											}
											));
											return Mo(d, (function(e, t) {
													return jo(t.playlist, e.playlist)
											}
											)),
											d.length ? d[0] : (Mo(h, (function(e, t) {
													return e.rebufferingImpact - t.rebufferingImpact
											}
											)),
											h[0] || null)
									}({
											master: this.hls_.playlists.master,
											currentTime: t,
											bandwidth: i,
											duration: this.duration_(),
											segmentDuration: n,
											timeUntilRebuffer: a,
											currentTimeline: this.currentTimeline_,
											syncController: this.syncController_
									});
									if (s) {
											var o = r - a - s.rebufferingImpact
												, u = .5;
											return a <= 1 / 30 && (u = 1),
											!s.playlist || s.playlist.uri === this.playlist_.uri || o < u ? !1 : (this.bandwidth = s.playlist.attributes.BANDWIDTH * Ao.BANDWIDTH_VARIANCE + 1,
											this.abort(),
											this.trigger("earlyabort"),
											!0)
									}
							}
					}, {
							key: "handleProgress_",
							value: function(e, t) {
									this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(t.stats) && this.trigger("progress")
							}
					}, {
							key: "loadSegment_",
							value: function(e) {
									this.state = "WAITING",
									this.pendingSegment_ = e,
									this.trimBackBuffer_(e),
									e.abortRequests = No(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.captionParser_, this.createSimplifiedSegmentObj_(e), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
							}
					}, {
							key: "trimBackBuffer_",
							value: function(e) {
									var t = function(e, t, i) {
											var n = void 0;
											return n = e.length && e.start(0) > 0 && e.start(0) < t ? e.start(0) : t - 30,
											Math.min(n, t - i)
									}(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
									t > 0 && this.remove(0, t)
							}
					}, {
							key: "createSimplifiedSegmentObj_",
							value: function(e) {
									var t = e.segment
										, i = {
											resolvedUri: t.resolvedUri,
											byterange: t.byterange,
											requestId: e.requestId
									};
									if (t.key) {
											var n = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
											i.key = this.segmentKey(t.key),
											i.key.iv = n
									}
									return t.map && (i.map = this.initSegment(t.map)),
									i
							}
					}, {
							key: "segmentRequestFinished_",
							value: function(e, t) {
									if (this.mediaRequests += 1,
									t.stats && (this.mediaBytesTransferred += t.stats.bytesReceived,
									this.mediaTransferDuration += t.stats.roundTripTime),
									this.pendingSegment_) {
											if (t.requestId === this.pendingSegment_.requestId) {
													if (e)
															return this.pendingSegment_ = null,
															this.state = "READY",
															e.code === Po ? void (this.mediaRequestsAborted += 1) : (this.pause(),
															e.code === Oo ? (this.mediaRequestsTimedout += 1,
															this.bandwidth = 1,
															this.roundTrip = NaN,
															void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1,
															this.error(e),
															void this.trigger("error")));
													this.bandwidth = t.stats.bandwidth,
													this.roundTrip = t.stats.roundTripTime,
													t.map && (t.map = this.initSegment(t.map, !0)),
													t.key && this.segmentKey(t.key, !0),
													this.processSegmentResponse_(t)
											}
									} else
											this.mediaRequestsAborted += 1
							}
					}, {
							key: "processSegmentResponse_",
							value: function(e) {
									var t = this.pendingSegment_;
									t.bytes = e.bytes,
									e.map && (t.segment.map.bytes = e.map.bytes),
									t.endOfAllRequests = e.endOfAllRequests,
									e.fmp4Captions && (!function(e, t, i) {
											for (var n in i)
													if (!e[n]) {
															t.trigger({
																	type: "usage",
																	name: "hls-608"
															});
															var r = t.textTracks().getTrackById(n);
															e[n] = r || t.addRemoteTextTrack({
																	kind: "captions",
																	id: n,
																	label: n
															}, !1).track
													}
									}(this.inbandTextTracks_, this.hls_.tech_, e.captionStreams),
									function(e) {
											var t = e.inbandTextTracks
												, i = e.captionArray
												, n = e.timestampOffset;
											if (i) {
													var r = window.WebKitDataCue || window.VTTCue;
													i.forEach((function(e) {
															var i = e.stream
																, a = e.startTime
																, s = e.endTime;
															t[i] && (a += n,
															s += n,
															t[i].addCue(new r(a,s,e.text)))
													}
													))
											}
									}({
											inbandTextTracks: this.inbandTextTracks_,
											captionArray: e.fmp4Captions,
											timestampOffset: 0
									}),
									this.captionParser_ && this.captionParser_.clearParsedCaptions()),
									this.handleSegment_()
							}
					}, {
							key: "handleSegment_",
							value: function() {
									var e = this;
									if (this.pendingSegment_) {
											var t = this.pendingSegment_
												, i = t.segment
												, n = this.syncController_.probeSegmentInfo(t);
											void 0 === this.startingMedia_ && n && (n.containsAudio || n.containsVideo) && (this.startingMedia_ = {
													containsAudio: n.containsAudio,
													containsVideo: n.containsVideo
											});
											var r, a, s, o = (r = this.loaderType_,
											a = this.startingMedia_,
											s = n,
											"main" === r && a && s ? s.containsAudio || s.containsVideo ? a.containsVideo && !s.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !a.containsVideo && s.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null);
											if (o)
													return this.error({
															message: o,
															blacklistDuration: 1 / 0
													}),
													void this.trigger("error");
											if (t.isSyncRequest)
													return this.trigger("syncinfoupdate"),
													this.pendingSegment_ = null,
													void (this.state = "READY");
											if (null !== t.timestampOffset && t.timestampOffset !== this.sourceUpdater_.timestampOffset()) {
													if (n && n.segmentTimestampInfo) {
															var u = n.segmentTimestampInfo[0].ptsTime
																, l = n.segmentTimestampInfo[0].dtsTime;
															t.timestampOffset -= u - l
													}
													this.sourceUpdater_.timestampOffset(t.timestampOffset),
													this.trigger("timestampoffset")
											}
											var c = this.syncController_.mappingForTimeline(t.timeline);
											if (null !== c && this.trigger({
													type: "segmenttimemapping",
													mapping: c
											}),
											this.state = "APPENDING",
											i.map) {
													var h = Os(i.map);
													if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== h) {
															var d = this.initSegment(i.map);
															this.sourceUpdater_.appendBuffer({
																	bytes: d.bytes
															}, (function() {
																	e.activeInitSegmentId_ = h
															}
															))
													}
											}
											t.byteLength = t.bytes.byteLength,
											"number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration,
											this.logger_(function(e) {
													var t = e.segment
														, i = t.start
														, n = t.end
														, r = e.playlist
														, a = r.mediaSequence
														, s = r.id
														, o = r.segments
														, u = void 0 === o ? [] : o
														, l = e.mediaIndex
														, c = e.timeline;
													return ["appending [" + l + "] of [" + a + ", " + (a + u.length) + "] from playlist [" + s + "]", "[" + i + " => " + n + "] in timeline [" + c + "]"].join(" ")
											}(t)),
											this.sourceUpdater_.appendBuffer({
													bytes: t.bytes,
													videoSegmentTimingInfoCallback: this.handleVideoSegmentTimingInfo_.bind(this, t.requestId)
											}, this.handleUpdateEnd_.bind(this))
									} else
											this.state = "READY"
							}
					}, {
							key: "handleVideoSegmentTimingInfo_",
							value: function(e, t) {
									if (this.pendingSegment_ && e === this.pendingSegment_.requestId) {
											var i = this.pendingSegment_.segment;
											i.videoTimingInfo || (i.videoTimingInfo = {}),
											i.videoTimingInfo.transmuxerPrependedSeconds = t.videoSegmentTimingInfo.prependedContentDuration || 0,
											i.videoTimingInfo.transmuxedPresentationStart = t.videoSegmentTimingInfo.start.presentation,
											i.videoTimingInfo.transmuxedPresentationEnd = t.videoSegmentTimingInfo.end.presentation,
											i.videoTimingInfo.baseMediaDecodeTime = t.videoSegmentTimingInfo.baseMediaDecodeTime
									}
							}
					}, {
							key: "handleUpdateEnd_",
							value: function() {
									if (!this.pendingSegment_)
											return this.state = "READY",
											void (this.paused() || this.monitorBuffer_());
									var e = this.pendingSegment_
										, t = e.segment
										, i = null !== this.mediaIndex;
									this.pendingSegment_ = null,
									this.recordThroughput_(e),
									this.addSegmentMetadataCue_(e),
									this.state = "READY",
									this.mediaIndex = e.mediaIndex,
									this.fetchAtBuffer_ = !0,
									this.currentTimeline_ = e.timeline,
									this.trigger("syncinfoupdate"),
									t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration ? this.resetEverything() : (i && this.trigger("bandwidthupdate"),
									this.trigger("progress"),
									this.isEndOfStream_(e.mediaIndex + 1, e.playlist) && this.endOfStream(),
									this.paused() || this.monitorBuffer_())
							}
					}, {
							key: "recordThroughput_",
							value: function(e) {
									var t = this.throughput.rate
										, i = Date.now() - e.endOfAllRequests + 1
										, n = Math.floor(e.byteLength / i * 8 * 1e3);
									this.throughput.rate += (n - t) / ++this.throughput.count
							}
					}, {
							key: "addSegmentMetadataCue_",
							value: function(e) {
									if (this.segmentMetadataTrack_) {
											var t = e.segment
												, i = t.start
												, n = t.end;
											if (Fo(i) && Fo(n)) {
													Fs(i, n, this.segmentMetadataTrack_);
													var a = r.a.WebKitDataCue || r.a.VTTCue
														, s = {
															custom: t.custom,
															dateTimeObject: t.dateTimeObject,
															dateTimeString: t.dateTimeString,
															bandwidth: e.playlist.attributes.BANDWIDTH,
															resolution: e.playlist.attributes.RESOLUTION,
															codecs: e.playlist.attributes.CODECS,
															byteLength: e.byteLength,
															uri: e.uri,
															timeline: e.timeline,
															playlist: e.playlist.uri,
															start: i,
															end: n
													}
														, o = new a(i,n,JSON.stringify(s));
													o.value = s,
													this.segmentMetadataTrack_.addCue(o)
											}
									}
							}
					}]),
					t
			}(Fa.EventTarget)
				, Ho = function(e) {
					return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
			}
				, Vo = new Uint8Array("\n\n".split("").map((function(e) {
					return e.charCodeAt(0)
			}
			)))
				, Wo = function(e) {
					function t(e) {
							var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							za(this, t);
							var n = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
							return n.mediaSource_ = null,
							n.subtitlesTrack_ = null,
							n
					}
					return Ya(t, e),
					Ga(t, [{
							key: "buffered_",
							value: function() {
									if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length)
											return Fa.createTimeRanges();
									var e = this.subtitlesTrack_.cues
										, t = e[0].startTime
										, i = e[e.length - 1].startTime;
									return Fa.createTimeRanges([[t, i]])
							}
					}, {
							key: "initSegment",
							value: function(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
									if (!e)
											return null;
									var i = Os(e)
										, n = this.initSegments_[i];
									if (t && !n && e.bytes) {
											var r = Vo.byteLength + e.bytes.byteLength
												, a = new Uint8Array(r);
											a.set(e.bytes),
											a.set(Vo, e.bytes.byteLength),
											this.initSegments_[i] = n = {
													resolvedUri: e.resolvedUri,
													byterange: e.byterange,
													bytes: a
											}
									}
									return n || e
							}
					}, {
							key: "couldBeginLoading_",
							value: function() {
									return this.playlist_ && this.subtitlesTrack_ && !this.paused()
							}
					}, {
							key: "init_",
							value: function() {
									return this.state = "READY",
									this.resetEverything(),
									this.monitorBuffer_()
							}
					}, {
							key: "track",
							value: function(e) {
									return void 0 === e || (this.subtitlesTrack_ = e,
									"INIT" === this.state && this.couldBeginLoading_() && this.init_()),
									this.subtitlesTrack_
							}
					}, {
							key: "remove",
							value: function(e, t) {
									Fs(e, t, this.subtitlesTrack_)
							}
					}, {
							key: "fillBuffer_",
							value: function() {
									var e = this;
									this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
									var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
									if (t = this.skipEmptySegments_(t)) {
											if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
													return this.syncController_.one("timestampoffset", (function() {
															e.state = "READY",
															e.paused() || e.monitorBuffer_()
													}
													)),
													void (this.state = "WAITING_ON_TIMELINE")
											}
											this.loadSegment_(t)
									}
							}
					}, {
							key: "skipEmptySegments_",
							value: function(e) {
									for (; e && e.segment.empty; )
											e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
									return e
							}
					}, {
							key: "handleSegment_",
							value: function() {
									var e = this;
									if (this.pendingSegment_ && this.subtitlesTrack_) {
											this.state = "APPENDING";
											var t = this.pendingSegment_
												, i = t.segment;
											if ("function" != typeof r.a.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
													var n = void 0
														, a = function() {
															e.subtitlesTrack_.tech_.off("vttjsloaded", n),
															e.error({
																	message: "Error loading vtt.js"
															}),
															e.state = "READY",
															e.pause(),
															e.trigger("error")
													};
													return n = function() {
															e.subtitlesTrack_.tech_.off("vttjserror", a),
															e.handleSegment_()
													}
													,
													this.state = "WAITING_ON_VTTJS",
													this.subtitlesTrack_.tech_.one("vttjsloaded", n),
													void this.subtitlesTrack_.tech_.one("vttjserror", a)
											}
											i.requested = !0;
											try {
													this.parseVTTCues_(t)
											} catch (e) {
													return this.error({
															message: e.message
													}),
													this.state = "READY",
													this.pause(),
													this.trigger("error")
											}
											if (this.updateTimeMapping_(t, this.syncController_.timelines[t.timeline], this.playlist_),
											t.isSyncRequest)
													return this.trigger("syncinfoupdate"),
													this.pendingSegment_ = null,
													void (this.state = "READY");
											t.byteLength = t.bytes.byteLength,
											this.mediaSecondsLoaded += i.duration,
											t.cues.length && this.remove(t.cues[0].endTime, t.cues[t.cues.length - 1].endTime),
											t.cues.forEach((function(t) {
													e.subtitlesTrack_.addCue(t)
											}
											)),
											this.handleUpdateEnd_()
									} else
											this.state = "READY"
							}
					}, {
							key: "parseVTTCues_",
							value: function(e) {
									var t = void 0
										, i = !1;
									"function" == typeof r.a.TextDecoder ? t = new r.a.TextDecoder("utf8") : (t = r.a.WebVTT.StringDecoder(),
									i = !0);
									var n = new r.a.WebVTT.Parser(r.a,r.a.vttjs,t);
									if (e.cues = [],
									e.timestampmap = {
											MPEGTS: 0,
											LOCAL: 0
									},
									n.oncue = e.cues.push.bind(e.cues),
									n.ontimestampmap = function(t) {
											return e.timestampmap = t
									}
									,
									n.onparsingerror = function(e) {
											Fa.log.warn("Error encountered when parsing cues: " + e.message)
									}
									,
									e.segment.map) {
											var a = e.segment.map.bytes;
											i && (a = Ho(a)),
											n.parse(a)
									}
									var s = e.bytes;
									i && (s = Ho(s)),
									n.parse(s),
									n.flush()
							}
					}, {
							key: "updateTimeMapping_",
							value: function(e, t, i) {
									var n = e.segment;
									if (t)
											if (e.cues.length) {
													var r = e.timestampmap
														, a = r.MPEGTS / 9e4 - r.LOCAL + t.mapping;
													if (e.cues.forEach((function(e) {
															e.startTime += a,
															e.endTime += a
													}
													)),
													!i.syncInfo) {
															var s = e.cues[0].startTime
																, o = e.cues[e.cues.length - 1].startTime;
															i.syncInfo = {
																	mediaSequence: i.mediaSequence + e.mediaIndex,
																	time: Math.min(s, o - n.duration)
															}
													}
											} else
													n.empty = !0
							}
					}]),
					t
			}(qo)
				, zo = function(e, t) {
					for (var i = e.cues, n = 0; n < i.length; n++) {
							var r = i[n];
							if (t >= r.adStartTime && t <= r.adEndTime)
									return r
					}
					return null
			}
				, Go = De.a.inspect
				, Yo = [{
					name: "VOD",
					run: function(e, t, i, n, r) {
							if (i !== 1 / 0) {
									return {
											time: 0,
											segmentIndex: 0
									}
							}
							return null
					}
			}, {
					name: "ProgramDateTime",
					run: function(e, t, i, n, r) {
							if (!e.datetimeToDisplayTime)
									return null;
							var a = t.segments || []
								, s = null
								, o = null;
							r = r || 0;
							for (var u = 0; u < a.length; u++) {
									var l = a[u];
									if (l.dateTimeObject) {
											var c = l.dateTimeObject.getTime() / 1e3 + e.datetimeToDisplayTime
												, h = Math.abs(r - c);
											if (null !== o && (0 === h || o < h))
													break;
											o = h,
											s = {
													time: c,
													segmentIndex: u
											}
									}
							}
							return s
					}
			}, {
					name: "Segment",
					run: function(e, t, i, n, r) {
							var a = t.segments || []
								, s = null
								, o = null;
							r = r || 0;
							for (var u = 0; u < a.length; u++) {
									var l = a[u];
									if (l.timeline === n && void 0 !== l.start) {
											var c = Math.abs(r - l.start);
											if (null !== o && o < c)
													break;
											(!s || null === o || o >= c) && (o = c,
											s = {
													time: l.start,
													segmentIndex: u
											})
									}
							}
							return s
					}
			}, {
					name: "Discontinuity",
					run: function(e, t, i, n, r) {
							var a = null;
							if (r = r || 0,
							t.discontinuityStarts && t.discontinuityStarts.length)
									for (var s = null, o = 0; o < t.discontinuityStarts.length; o++) {
											var u = t.discontinuityStarts[o]
												, l = t.discontinuitySequence + o + 1
												, c = e.discontinuities[l];
											if (c) {
													var h = Math.abs(r - c.time);
													if (null !== s && s < h)
															break;
													(!a || null === s || s >= h) && (s = h,
													a = {
															time: c.time,
															segmentIndex: u
													})
											}
									}
							return a
					}
			}, {
					name: "Playlist",
					run: function(e, t, i, n, r) {
							return t.syncInfo ? {
									time: t.syncInfo.time,
									segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence
							} : null
					}
			}]
				, Xo = function(e) {
					function t() {
							za(this, t);
							var e = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
							return e.inspectCache_ = void 0,
							e.timelines = [],
							e.discontinuities = [],
							e.datetimeToDisplayTime = null,
							e.logger_ = ko("SyncController"),
							e
					}
					return Ya(t, e),
					Ga(t, [{
							key: "getSyncPoint",
							value: function(e, t, i, n) {
									var r = this.runStrategies_(e, t, i, n);
									return r.length ? this.selectSyncPoint_(r, {
											key: "time",
											value: n
									}) : null
							}
					}, {
							key: "getExpiredTime",
							value: function(e, t) {
									if (!e || !e.segments)
											return null;
									var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
									if (!i.length)
											return null;
									var n = this.selectSyncPoint_(i, {
											key: "segmentIndex",
											value: 0
									});
									return n.segmentIndex > 0 && (n.time *= -1),
									Math.abs(n.time + us(e, n.segmentIndex, 0))
							}
					}, {
							key: "runStrategies_",
							value: function(e, t, i, n) {
									for (var r = [], a = 0; a < Yo.length; a++) {
											var s = Yo[a]
												, o = s.run(this, e, t, i, n);
											o && (o.strategy = s.name,
											r.push({
													strategy: s.name,
													syncPoint: o
											}))
									}
									return r
							}
					}, {
							key: "selectSyncPoint_",
							value: function(e, t) {
									for (var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, a = 1; a < e.length; a++) {
											var s = Math.abs(e[a].syncPoint[t.key] - t.value);
											s < n && (n = s,
											i = e[a].syncPoint,
											r = e[a].strategy)
									}
									return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy [" + r + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"),
									i
							}
					}, {
							key: "saveExpiredSegmentInfo",
							value: function(e, t) {
									for (var i = t.mediaSequence - e.mediaSequence - 1; i >= 0; i--) {
											var n = e.segments[i];
											if (n && void 0 !== n.start) {
													t.syncInfo = {
															mediaSequence: e.mediaSequence + i,
															time: n.start
													},
													this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + ", mediaSequence: " + t.syncInfo.mediaSequence + "]"),
													this.trigger("syncinfoupdate");
													break
											}
									}
							}
					}, {
							key: "setDateTimeMapping",
							value: function(e) {
									if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) {
											var t = e.segments[0].dateTimeObject.getTime() / 1e3;
											this.datetimeToDisplayTime = -t
									}
							}
					}, {
							key: "reset",
							value: function() {
									this.inspectCache_ = void 0
							}
					}, {
							key: "probeSegmentInfo",
							value: function(e) {
									var t = e.segment
										, i = e.playlist
										, n = void 0;
									return (n = t.map ? this.probeMp4Segment_(e) : this.probeTsSegment_(e)) && this.calculateSegmentTimeMapping_(e, n) && (this.saveDiscontinuitySyncInfo_(e),
									i.syncInfo || (i.syncInfo = {
											mediaSequence: i.mediaSequence + e.mediaIndex,
											time: t.start
									})),
									n
							}
					}, {
							key: "probeMp4Segment_",
							value: function(e) {
									var t = e.segment
										, i = Oe.a.timescale(t.map.bytes)
										, n = Oe.a.compositionStartTime(i, e.bytes);
									return null !== e.timestampOffset && (e.timestampOffset -= n),
									{
											start: n,
											end: n + t.duration
									}
							}
					}, {
							key: "probeTsSegment_",
							value: function(e) {
									var t = Go(e.bytes, this.inspectCache_)
										, i = void 0
										, n = void 0
										, r = void 0;
									return t ? (t.video && 2 === t.video.length ? (this.inspectCache_ = t.video[1].dts,
									i = t.video[0].dtsTime,
									n = t.video[1].dtsTime,
									r = t.video) : t.audio && 2 === t.audio.length && (this.inspectCache_ = t.audio[1].dts,
									i = t.audio[0].dtsTime,
									n = t.audio[1].dtsTime,
									r = t.audio),
									{
											segmentTimestampInfo: r,
											start: i,
											end: n,
											containsVideo: t.video && 2 === t.video.length,
											containsAudio: t.audio && 2 === t.audio.length
									}) : null
							}
					}, {
							key: "timestampOffsetForTimeline",
							value: function(e) {
									return void 0 === this.timelines[e] ? null : this.timelines[e].time
							}
					}, {
							key: "mappingForTimeline",
							value: function(e) {
									return void 0 === this.timelines[e] ? null : this.timelines[e].mapping
							}
					}, {
							key: "calculateSegmentTimeMapping_",
							value: function(e, t) {
									var i = e.segment
										, n = this.timelines[e.timeline];
									if (null !== e.timestampOffset)
											n = {
													time: e.startOfSegment,
													mapping: e.startOfSegment - t.start
											},
											this.timelines[e.timeline] = n,
											this.trigger("timestampoffset"),
											this.logger_("time mapping for timeline " + e.timeline + ": [time: " + n.time + "] [mapping: " + n.mapping + "]"),
											i.start = e.startOfSegment,
											i.end = t.end + n.mapping;
									else {
											if (!n)
													return !1;
											i.start = t.start + n.mapping,
											i.end = t.end + n.mapping
									}
									return !0
							}
					}, {
							key: "saveDiscontinuitySyncInfo_",
							value: function(e) {
									var t = e.playlist
										, i = e.segment;
									if (i.discontinuity)
											this.discontinuities[i.timeline] = {
													time: i.start,
													accuracy: 0
											};
									else if (t.discontinuityStarts && t.discontinuityStarts.length)
											for (var n = 0; n < t.discontinuityStarts.length; n++) {
													var r = t.discontinuityStarts[n]
														, a = t.discontinuitySequence + n + 1
														, s = r - e.mediaIndex
														, o = Math.abs(s);
													if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
															var u = void 0;
															u = s < 0 ? i.start - us(t, e.mediaIndex, r) : i.end + us(t, e.mediaIndex + 1, r),
															this.discontinuities[a] = {
																	time: u,
																	accuracy: o
															}
													}
											}
							}
					}]),
					t
			}(Fa.EventTarget)
				, Ko = new Xs("./decrypter-worker.worker.js",(function(e, t) {
					var i = this;
					!function() {
							var e = function(e, t) {
									if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function")
							}
								, t = function() {
									function e(e, t) {
											for (var i = 0; i < t.length; i++) {
													var n = t[i];
													n.enumerable = n.enumerable || !1,
													n.configurable = !0,
													"value"in n && (n.writable = !0),
													Object.defineProperty(e, n.key, n)
											}
									}
									return function(t, i, n) {
											return i && e(t.prototype, i),
											n && e(t, n),
											t
									}
							}()
								, n = null
								, r = function() {
									function t(i) {
											e(this, t),
											n || (n = function() {
													var e = [[[], [], [], [], []], [[], [], [], [], []]]
														, t = e[0]
														, i = e[1]
														, n = t[4]
														, r = i[4]
														, a = void 0
														, s = void 0
														, o = void 0
														, u = []
														, l = []
														, c = void 0
														, h = void 0
														, d = void 0
														, p = void 0
														, f = void 0;
													for (a = 0; a < 256; a++)
															l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
													for (s = o = 0; !n[s]; s ^= c || 1,
													o = l[o] || 1)
															for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99,
															n[s] = d,
															r[d] = s,
															f = 16843009 * u[h = u[c = u[s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s,
															p = 257 * u[d] ^ 16843008 * d,
															a = 0; a < 4; a++)
																	t[a][s] = p = p << 24 ^ p >>> 8,
																	i[a][d] = f = f << 24 ^ f >>> 8;
													for (a = 0; a < 5; a++)
															t[a] = t[a].slice(0),
															i[a] = i[a].slice(0);
													return e
											}()),
											this._tables = [[n[0][0].slice(), n[0][1].slice(), n[0][2].slice(), n[0][3].slice(), n[0][4].slice()], [n[1][0].slice(), n[1][1].slice(), n[1][2].slice(), n[1][3].slice(), n[1][4].slice()]];
											var r = void 0
												, a = void 0
												, s = void 0
												, o = void 0
												, u = void 0
												, l = this._tables[0][4]
												, c = this._tables[1]
												, h = i.length
												, d = 1;
											if (4 !== h && 6 !== h && 8 !== h)
													throw new Error("Invalid aes key size");
											for (o = i.slice(0),
											u = [],
											this._key = [o, u],
											r = h; r < 4 * h + 28; r++)
													s = o[r - 1],
													(r % h == 0 || 8 === h && r % h == 4) && (s = l[s >>> 24] << 24 ^ l[s >> 16 & 255] << 16 ^ l[s >> 8 & 255] << 8 ^ l[255 & s],
													r % h == 0 && (s = s << 8 ^ s >>> 24 ^ d << 24,
													d = d << 1 ^ 283 * (d >> 7))),
													o[r] = o[r - h] ^ s;
											for (a = 0; r; a++,
											r--)
													s = o[3 & a ? r : r - 4],
													u[a] = r <= 4 || a < 4 ? s : c[0][l[s >>> 24]] ^ c[1][l[s >> 16 & 255]] ^ c[2][l[s >> 8 & 255]] ^ c[3][l[255 & s]]
									}
									return t.prototype.decrypt = function(e, t, i, n, r, a) {
											var s = this._key[1]
												, o = e ^ s[0]
												, u = n ^ s[1]
												, l = i ^ s[2]
												, c = t ^ s[3]
												, h = void 0
												, d = void 0
												, p = void 0
												, f = s.length / 4 - 2
												, m = void 0
												, g = 4
												, v = this._tables[1]
												, y = v[0]
												, _ = v[1]
												, b = v[2]
												, T = v[3]
												, S = v[4];
											for (m = 0; m < f; m++)
													h = y[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g],
													d = y[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1],
													p = y[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2],
													c = y[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3],
													g += 4,
													o = h,
													u = d,
													l = p;
											for (m = 0; m < 4; m++)
													r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++],
													h = o,
													o = u,
													u = l,
													l = c,
													c = h
									}
									,
									t
							}()
								, a = function() {
									function t() {
											e(this, t),
											this.listeners = {}
									}
									return t.prototype.on = function(e, t) {
											this.listeners[e] || (this.listeners[e] = []),
											this.listeners[e].push(t)
									}
									,
									t.prototype.off = function(e, t) {
											if (!this.listeners[e])
													return !1;
											var i = this.listeners[e].indexOf(t);
											return this.listeners[e].splice(i, 1),
											i > -1
									}
									,
									t.prototype.trigger = function(e) {
											var t = this.listeners[e];
											if (t)
													if (2 === arguments.length)
															for (var i = t.length, n = 0; n < i; ++n)
																	t[n].call(this, arguments[1]);
													else
															for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s)
																	t[s].apply(this, r)
									}
									,
									t.prototype.dispose = function() {
											this.listeners = {}
									}
									,
									t.prototype.pipe = function(e) {
											this.on("data", (function(t) {
													e.push(t)
											}
											))
									}
									,
									t
							}()
								, s = function(t) {
									function i() {
											e(this, i);
											var n = function(e, t) {
													if (!e)
															throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
													return !t || "object" != typeof t && "function" != typeof t ? e : t
											}(this, t.call(this, a));
											return n.jobs = [],
											n.delay = 1,
											n.timeout_ = null,
											n
									}
									return function(e, t) {
											if ("function" != typeof t && null !== t)
													throw new TypeError("Super expression must either be null or a function, not " + typeof t);
											e.prototype = Object.create(t && t.prototype, {
													constructor: {
															value: e,
															enumerable: !1,
															writable: !0,
															configurable: !0
													}
											}),
											t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
									}(i, t),
									i.prototype.processJob_ = function() {
											this.jobs.shift()(),
											this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
									}
									,
									i.prototype.push = function(e) {
											this.jobs.push(e),
											this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
									}
									,
									i
							}(a)
								, o = function(e) {
									return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
							}
								, u = function() {
									function i(t, n, r, a) {
											e(this, i);
											var u = i.STEP
												, l = new Int32Array(t.buffer)
												, c = new Uint8Array(t.byteLength)
												, h = 0;
											for (this.asyncStream_ = new s,
											this.asyncStream_.push(this.decryptChunk_(l.subarray(h, h + u), n, r, c)),
											h = u; h < l.length; h += u)
													r = new Uint32Array([o(l[h - 4]), o(l[h - 3]), o(l[h - 2]), o(l[h - 1])]),
													this.asyncStream_.push(this.decryptChunk_(l.subarray(h, h + u), n, r, c));
											this.asyncStream_.push((function() {
													var e;
													a(null, (e = c).subarray(0, e.byteLength - e[e.byteLength - 1]))
											}
											))
									}
									return i.prototype.decryptChunk_ = function(e, t, i, n) {
											return function() {
													var a = function(e, t, i) {
															var n = new Int32Array(e.buffer,e.byteOffset,e.byteLength >> 2)
																, a = new r(Array.prototype.slice.call(t))
																, s = new Uint8Array(e.byteLength)
																, u = new Int32Array(s.buffer)
																, l = void 0
																, c = void 0
																, h = void 0
																, d = void 0
																, p = void 0
																, f = void 0
																, m = void 0
																, g = void 0
																, v = void 0;
															for (l = i[0],
															c = i[1],
															h = i[2],
															d = i[3],
															v = 0; v < n.length; v += 4)
																	p = o(n[v]),
																	f = o(n[v + 1]),
																	m = o(n[v + 2]),
																	g = o(n[v + 3]),
																	a.decrypt(p, f, m, g, u, v),
																	u[v] = o(u[v] ^ l),
																	u[v + 1] = o(u[v + 1] ^ c),
																	u[v + 2] = o(u[v + 2] ^ h),
																	u[v + 3] = o(u[v + 3] ^ d),
																	l = p,
																	c = f,
																	h = m,
																	d = g;
															return s
													}(e, t, i);
													n.set(a, e.byteOffset)
											}
									}
									,
									t(i, null, [{
											key: "STEP",
											get: function() {
													return 32e3
											}
									}]),
									i
							}();
							new function(e) {
									e.onmessage = function(t) {
											var i = t.data
												, n = new Uint8Array(i.encrypted.bytes,i.encrypted.byteOffset,i.encrypted.byteLength)
												, r = new Uint32Array(i.key.bytes,i.key.byteOffset,i.key.byteLength / 4)
												, a = new Uint32Array(i.iv.bytes,i.iv.byteOffset,i.iv.byteLength / 4);
											new u(n,r,a,(function(t, n) {
													var r, a;
													e.postMessage((r = {
															source: i.source,
															decrypted: n
													},
													a = {},
													Object.keys(r).forEach((function(e) {
															var t = r[e];
															ArrayBuffer.isView(t) ? a[e] = {
																	bytes: t.buffer,
																	byteOffset: t.byteOffset,
																	byteLength: t.byteLength
															} : a[e] = t
													}
													)),
													a), [n.buffer])
											}
											))
									}
							}
							(i)
					}()
			}
			))
				, $o = function(e) {
					var t = e.default ? "main" : "alternative";
					return e.characteristics && e.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (t = "main-desc"),
					t
			}
				, Qo = function(e, t) {
					e.abort(),
					e.pause(),
					t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(),
					t.activePlaylistLoader = null)
			}
				, Jo = function(e, t) {
					t.activePlaylistLoader = e,
					e.load()
			}
				, Zo = {
					AUDIO: function(e, t) {
							return function() {
									var i = t.segmentLoaders[e]
										, n = t.mediaTypes[e]
										, r = t.blacklistCurrentPlaylist;
									Qo(i, n);
									var a = n.activeTrack()
										, s = n.activeGroup()
										, o = (s.filter((function(e) {
											return e.default
									}
									))[0] || s[0]).id
										, u = n.tracks[o];
									if (a !== u) {
											for (var l in Fa.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),
											n.tracks)
													n.tracks[l].enabled = n.tracks[l] === u;
											n.onTrackChanged()
									} else
											r({
													message: "Problem encountered loading the default audio track."
											})
							}
					},
					SUBTITLES: function(e, t) {
							return function() {
									var i = t.segmentLoaders[e]
										, n = t.mediaTypes[e];
									Fa.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),
									Qo(i, n);
									var r = n.activeTrack();
									r && (r.mode = "disabled"),
									n.onTrackChanged()
							}
					}
			}
				, eu = {
					AUDIO: function(e, t, i) {
							if (t) {
									var n = i.tech
										, r = i.requestOptions
										, a = i.segmentLoaders[e];
									t.on("loadedmetadata", (function() {
											var e = t.media();
											a.playlist(e, r),
											(!n.paused() || e.endList && "none" !== n.preload()) && a.load()
									}
									)),
									t.on("loadedplaylist", (function() {
											a.playlist(t.media(), r),
											n.paused() || a.load()
									}
									)),
									t.on("error", Zo[e](e, i))
							}
					},
					SUBTITLES: function(e, t, i) {
							var n = i.tech
								, r = i.requestOptions
								, a = i.segmentLoaders[e]
								, s = i.mediaTypes[e];
							t.on("loadedmetadata", (function() {
									var e = t.media();
									a.playlist(e, r),
									a.track(s.activeTrack()),
									(!n.paused() || e.endList && "none" !== n.preload()) && a.load()
							}
							)),
							t.on("loadedplaylist", (function() {
									a.playlist(t.media(), r),
									n.paused() || a.load()
							}
							)),
							t.on("error", Zo[e](e, i))
					}
			}
				, tu = {
					AUDIO: function(e, t) {
							var i = t.hls
								, n = t.sourceType
								, r = t.segmentLoaders[e]
								, a = t.requestOptions
								, s = t.master.mediaGroups
								, o = t.mediaTypes[e]
								, u = o.groups
								, l = o.tracks
								, c = t.masterPlaylistLoader;
							for (var h in s[e] && 0 !== Object.keys(s[e]).length || (s[e] = {
									main: {
											default: {
													default: !0
											}
									}
							}),
							s[e])
									for (var d in u[h] || (u[h] = []),
									s[e][h]) {
											var p = s[e][h][d]
												, f = void 0;
											if (f = p.resolvedUri ? new rs(p.resolvedUri,i,a) : p.playlists && "dash" === n ? new wo(p.playlists[0],i,a,c) : null,
											p = Fa.mergeOptions({
													id: d,
													playlistLoader: f
											}, p),
											eu[e](e, p.playlistLoader, t),
											u[h].push(p),
											void 0 === l[d]) {
													var m = new Fa.AudioTrack({
															id: d,
															kind: $o(p),
															enabled: !1,
															language: p.language,
															default: p.default,
															label: d
													});
													l[d] = m
											}
									}
							r.on("error", Zo[e](e, t))
					},
					SUBTITLES: function(e, t) {
							var i = t.tech
								, n = t.hls
								, r = t.sourceType
								, a = t.segmentLoaders[e]
								, s = t.requestOptions
								, o = t.master.mediaGroups
								, u = t.mediaTypes[e]
								, l = u.groups
								, c = u.tracks
								, h = t.masterPlaylistLoader;
							for (var d in o[e])
									for (var p in l[d] || (l[d] = []),
									o[e][d])
											if (!o[e][d][p].forced) {
													var f = o[e][d][p]
														, m = void 0;
													if ("hls" === r ? m = new rs(f.resolvedUri,n,s) : "dash" === r && (m = new wo(f.playlists[0],n,s,h)),
													f = Fa.mergeOptions({
															id: p,
															playlistLoader: m
													}, f),
													eu[e](e, f.playlistLoader, t),
													l[d].push(f),
													void 0 === c[p]) {
															var g = i.addRemoteTextTrack({
																	id: p,
																	kind: "subtitles",
																	default: f.default && f.autoselect,
																	language: f.language,
																	label: p
															}, !1).track;
															c[p] = g
													}
											}
							a.on("error", Zo[e](e, t))
					},
					"CLOSED-CAPTIONS": function(e, t) {
							var i = t.tech
								, n = t.master.mediaGroups
								, r = t.mediaTypes[e]
								, a = r.groups
								, s = r.tracks;
							for (var o in n[e])
									for (var u in a[o] || (a[o] = []),
									n[e][o]) {
											var l = n[e][o][u];
											if (l.instreamId.match(/CC\d/) && (a[o].push(Fa.mergeOptions({
													id: u
											}, l)),
											void 0 === s[u])) {
													var c = i.addRemoteTextTrack({
															id: l.instreamId,
															kind: "captions",
															default: l.default && l.autoselect,
															language: l.language,
															label: u
													}, !1).track;
													s[u] = c
											}
									}
					}
			}
				, iu = {
					AUDIO: function(e, t) {
							return function() {
									var i = t.mediaTypes[e].tracks;
									for (var n in i)
											if (i[n].enabled)
													return i[n];
									return null
							}
					},
					SUBTITLES: function(e, t) {
							return function() {
									var i = t.mediaTypes[e].tracks;
									for (var n in i)
											if ("showing" === i[n].mode)
													return i[n];
									return null
							}
					}
			}
				, nu = function(e) {
					["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(t) {
							tu[t](t, e)
					}
					));
					var t = e.mediaTypes
						, i = e.masterPlaylistLoader
						, n = e.tech
						, r = e.hls;
					["AUDIO", "SUBTITLES"].forEach((function(i) {
							t[i].activeGroup = function(e, t) {
									return function(i) {
											var n = t.masterPlaylistLoader
												, r = t.mediaTypes[e].groups
												, a = n.media();
											if (!a)
													return null;
											var s = null;
											return a.attributes[e] && (s = r[a.attributes[e]]),
											s = s || r.main,
											void 0 === i ? s : null === i ? null : s.filter((function(e) {
													return e.id === i.id
											}
											))[0] || null
									}
							}(i, e),
							t[i].activeTrack = iu[i](i, e),
							t[i].onGroupChanged = function(e, t) {
									return function() {
											var i = t.segmentLoaders
												, n = i[e]
												, r = i.main
												, a = t.mediaTypes[e]
												, s = a.activeTrack()
												, o = a.activeGroup(s)
												, u = a.activePlaylistLoader;
											Qo(n, a),
											o && (o.playlistLoader ? (n.resyncLoader(),
											Jo(o.playlistLoader, a)) : u && r.resetEverything())
									}
							}(i, e),
							t[i].onTrackChanged = function(e, t) {
									return function() {
											var i = t.segmentLoaders
												, n = i[e]
												, r = i.main
												, a = t.mediaTypes[e]
												, s = a.activeTrack()
												, o = a.activeGroup(s)
												, u = a.activePlaylistLoader;
											Qo(n, a),
											o && (o.playlistLoader ? u !== o.playlistLoader ? (n.track && n.track(s),
											n.resetEverything(),
											Jo(o.playlistLoader, a)) : Jo(o.playlistLoader, a) : r.resetEverything())
									}
							}(i, e)
					}
					));
					var a = t.AUDIO.activeGroup()
						, s = (a.filter((function(e) {
							return e.default
					}
					))[0] || a[0]).id;
					t.AUDIO.tracks[s].enabled = !0,
					t.AUDIO.onTrackChanged(),
					i.on("mediachange", (function() {
							["AUDIO", "SUBTITLES"].forEach((function(e) {
									return t[e].onGroupChanged()
							}
							))
					}
					));
					var o = function() {
							t.AUDIO.onTrackChanged(),
							n.trigger({
									type: "usage",
									name: "hls-audio-change"
							})
					};
					for (var u in n.audioTracks().addEventListener("change", o),
					n.remoteTextTracks().addEventListener("change", t.SUBTITLES.onTrackChanged),
					r.on("dispose", (function() {
							n.audioTracks().removeEventListener("change", o),
							n.remoteTextTracks().removeEventListener("change", t.SUBTITLES.onTrackChanged)
					}
					)),
					n.clearTracks("audio"),
					t.AUDIO.tracks)
							n.audioTracks().addTrack(t.AUDIO.tracks[u])
			}
				, ru = void 0
				, au = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"]
				, su = function(e) {
					return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
			}
				, ou = function(e) {
					function t(e) {
							za(this, t);
							var i, n = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)), r = e.url, a = e.handleManifestRedirects, s = e.withCredentials, o = e.tech, u = e.bandwidth, l = e.externHls, c = e.useCueTags, h = e.blacklistDuration, d = e.enableLowInitialPlaylist, p = e.sourceType, f = e.seekTo, m = e.cacheEncryptionKeys;
							if (!r)
									throw new Error("A non-empty playlist URL is required");
							ru = l,
							n.withCredentials = s,
							n.tech_ = o,
							n.hls_ = o.hls,
							n.seekTo_ = f,
							n.sourceType_ = p,
							n.useCueTags_ = c,
							n.blacklistDuration = h,
							n.enableLowInitialPlaylist = d,
							n.useCueTags_ && (n.cueTagsTrack_ = n.tech_.addTextTrack("metadata", "ad-cues"),
							n.cueTagsTrack_.inBandMetadataTrackDispatchType = ""),
							n.requestOptions_ = {
									withCredentials: s,
									handleManifestRedirects: a,
									timeout: null
							},
							n.mediaTypes_ = (i = {},
							["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(e) {
									i[e] = {
											groups: {},
											tracks: {},
											activePlaylistLoader: null,
											activeGroup: Eo,
											activeTrack: Eo,
											onGroupChanged: Eo,
											onTrackChanged: Eo
									}
							}
							)),
							i),
							n.mediaSource = new Fa.MediaSource,
							n.mediaSource.addEventListener("sourceopen", n.handleSourceOpen_.bind(n)),
							n.seekable_ = Fa.createTimeRanges(),
							n.hasPlayed_ = function() {
									return !1
							}
							,
							n.syncController_ = new Xo(e),
							n.segmentMetadataTrack_ = o.addRemoteTextTrack({
									kind: "metadata",
									label: "segment-metadata"
							}, !1).track,
							n.decrypter_ = new Ko,
							n.inbandTextTracks_ = {};
							var g = {
									hls: n.hls_,
									mediaSource: n.mediaSource,
									currentTime: n.tech_.currentTime.bind(n.tech_),
									seekable: function() {
											return n.seekable()
									},
									seeking: function() {
											return n.tech_.seeking()
									},
									duration: function() {
											return n.mediaSource.duration
									},
									hasPlayed: function() {
											return n.hasPlayed_()
									},
									goalBufferLength: function() {
											return n.goalBufferLength()
									},
									bandwidth: u,
									syncController: n.syncController_,
									decrypter: n.decrypter_,
									sourceType: n.sourceType_,
									inbandTextTracks: n.inbandTextTracks_,
									cacheEncryptionKeys: m
							};
							return n.masterPlaylistLoader_ = "dash" === n.sourceType_ ? new wo(r,n.hls_,n.requestOptions_) : new rs(r,n.hls_,n.requestOptions_),
							n.setupMasterPlaylistLoaderListeners_(),
							n.mainSegmentLoader_ = new qo(Fa.mergeOptions(g, {
									segmentMetadataTrack: n.segmentMetadataTrack_,
									loaderType: "main"
							}),e),
							n.audioSegmentLoader_ = new qo(Fa.mergeOptions(g, {
									loaderType: "audio"
							}),e),
							n.subtitleSegmentLoader_ = new Wo(Fa.mergeOptions(g, {
									loaderType: "vtt"
							}),e),
							n.setupSegmentLoaderListeners_(),
							au.forEach((function(e) {
									n[e + "_"] = su.bind(n, e)
							}
							)),
							n.logger_ = ko("MPC"),
							n.masterPlaylistLoader_.load(),
							n
					}
					return Ya(t, e),
					Ga(t, [{
							key: "setupMasterPlaylistLoaderListeners_",
							value: function() {
									var e = this;
									this.masterPlaylistLoader_.on("loadedmetadata", (function() {
											var t = e.masterPlaylistLoader_.media()
												, i = 1.5 * t.targetDuration * 1e3;
											_s(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = i,
											t.endList && "none" !== e.tech_.preload() && (e.mainSegmentLoader_.playlist(t, e.requestOptions_),
											e.mainSegmentLoader_.load()),
											nu({
													sourceType: e.sourceType_,
													segmentLoaders: {
															AUDIO: e.audioSegmentLoader_,
															SUBTITLES: e.subtitleSegmentLoader_,
															main: e.mainSegmentLoader_
													},
													tech: e.tech_,
													requestOptions: e.requestOptions_,
													masterPlaylistLoader: e.masterPlaylistLoader_,
													hls: e.hls_,
													master: e.master(),
													mediaTypes: e.mediaTypes_,
													blacklistCurrentPlaylist: e.blacklistCurrentPlaylist.bind(e)
											}),
											e.triggerPresenceUsage_(e.master(), t);
											try {
													e.setupSourceBuffers_()
											} catch (t) {
													return Fa.log.warn("Failed to create SourceBuffers", t),
													e.mediaSource.endOfStream("decode")
											}
											e.setupFirstPlay(),
											!e.mediaTypes_.AUDIO.activePlaylistLoader || e.mediaTypes_.AUDIO.activePlaylistLoader.media() ? e.trigger("selectedinitialmedia") : e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", (function() {
													e.trigger("selectedinitialmedia")
											}
											))
									}
									)),
									this.masterPlaylistLoader_.on("loadedplaylist", (function() {
											var t = e.masterPlaylistLoader_.media();
											if (!t) {
													e.excludeUnsupportedVariants_();
													var i = void 0;
													return e.enableLowInitialPlaylist && (i = e.selectInitialPlaylist()),
													i || (i = e.selectPlaylist()),
													e.initialMedia_ = i,
													void e.masterPlaylistLoader_.media(e.initialMedia_)
											}
											if (e.useCueTags_ && e.updateAdCues_(t),
											e.mainSegmentLoader_.playlist(t, e.requestOptions_),
											e.updateDuration(),
											e.tech_.paused() || (e.mainSegmentLoader_.load(),
											e.audioSegmentLoader_ && e.audioSegmentLoader_.load()),
											!t.endList) {
													var n = function() {
															var t = e.seekable();
															0 !== t.length && e.mediaSource.addSeekableRange_(t.start(0), t.end(0))
													};
													if (e.duration() !== 1 / 0) {
															e.tech_.one("durationchange", (function t() {
																	e.duration() === 1 / 0 ? n() : e.tech_.one("durationchange", t)
															}
															))
													} else
															n()
											}
									}
									)),
									this.masterPlaylistLoader_.on("error", (function() {
											e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)
									}
									)),
									this.masterPlaylistLoader_.on("mediachanging", (function() {
											e.mainSegmentLoader_.abort(),
											e.mainSegmentLoader_.pause()
									}
									)),
									this.masterPlaylistLoader_.on("mediachange", (function() {
											var t = e.masterPlaylistLoader_.media()
												, i = 1.5 * t.targetDuration * 1e3;
											_s(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = i,
											e.mainSegmentLoader_.playlist(t, e.requestOptions_),
											e.mainSegmentLoader_.load(),
											e.tech_.trigger({
													type: "mediachange",
													bubbles: !0
											})
									}
									)),
									this.masterPlaylistLoader_.on("playlistunchanged", (function() {
											var t = e.masterPlaylistLoader_.media();
											e.stuckAtPlaylistEnd_(t) && (e.blacklistCurrentPlaylist({
													message: "Playlist no longer updating."
											}),
											e.tech_.trigger("playliststuck"))
									}
									)),
									this.masterPlaylistLoader_.on("renditiondisabled", (function() {
											e.tech_.trigger({
													type: "usage",
													name: "hls-rendition-disabled"
											})
									}
									)),
									this.masterPlaylistLoader_.on("renditionenabled", (function() {
											e.tech_.trigger({
													type: "usage",
													name: "hls-rendition-enabled"
											})
									}
									))
							}
					}, {
							key: "triggerPresenceUsage_",
							value: function(e, t) {
									var i = e.mediaGroups || {}
										, n = !0
										, r = Object.keys(i.AUDIO);
									for (var a in i.AUDIO)
											for (var s in i.AUDIO[a]) {
													i.AUDIO[a][s].uri || (n = !1)
											}
									n && this.tech_.trigger({
											type: "usage",
											name: "hls-demuxed"
									}),
									Object.keys(i.SUBTITLES).length && this.tech_.trigger({
											type: "usage",
											name: "hls-webvtt"
									}),
									ru.Playlist.isAes(t) && this.tech_.trigger({
											type: "usage",
											name: "hls-aes"
									}),
									ru.Playlist.isFmp4(t) && this.tech_.trigger({
											type: "usage",
											name: "hls-fmp4"
									}),
									r.length && Object.keys(i.AUDIO[r[0]]).length > 1 && this.tech_.trigger({
											type: "usage",
											name: "hls-alternate-audio"
									}),
									this.useCueTags_ && this.tech_.trigger({
											type: "usage",
											name: "hls-playlist-cue-tags"
									})
							}
					}, {
							key: "setupSegmentLoaderListeners_",
							value: function() {
									var e = this;
									this.mainSegmentLoader_.on("bandwidthupdate", (function() {
											var t = e.selectPlaylist()
												, i = e.masterPlaylistLoader_.media()
												, n = e.tech_.buffered()
												, r = n.length ? n.end(n.length - 1) - e.tech_.currentTime() : 0
												, a = e.bufferLowWaterLine();
											(!i.endList || e.duration() < Ao.MAX_BUFFER_LOW_WATER_LINE || t.attributes.BANDWIDTH < i.attributes.BANDWIDTH || r >= a) && e.masterPlaylistLoader_.media(t),
											e.tech_.trigger("bandwidthupdate")
									}
									)),
									this.mainSegmentLoader_.on("progress", (function() {
											e.trigger("progress")
									}
									)),
									this.mainSegmentLoader_.on("error", (function() {
											e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())
									}
									)),
									this.mainSegmentLoader_.on("syncinfoupdate", (function() {
											e.onSyncInfoUpdate_()
									}
									)),
									this.mainSegmentLoader_.on("timestampoffset", (function() {
											e.tech_.trigger({
													type: "usage",
													name: "hls-timestamp-offset"
											})
									}
									)),
									this.audioSegmentLoader_.on("syncinfoupdate", (function() {
											e.onSyncInfoUpdate_()
									}
									)),
									this.mainSegmentLoader_.on("ended", (function() {
											e.onEndOfStream()
									}
									)),
									this.mainSegmentLoader_.on("earlyabort", (function() {
											e.blacklistCurrentPlaylist({
													message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
											}, 120)
									}
									)),
									this.mainSegmentLoader_.on("reseteverything", (function() {
											e.tech_.trigger("hls-reset")
									}
									)),
									this.mainSegmentLoader_.on("segmenttimemapping", (function(t) {
											e.tech_.trigger({
													type: "hls-segment-time-mapping",
													mapping: t.mapping
											})
									}
									)),
									this.audioSegmentLoader_.on("ended", (function() {
											e.onEndOfStream()
									}
									))
							}
					}, {
							key: "mediaSecondsLoaded_",
							value: function() {
									return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
							}
					}, {
							key: "load",
							value: function() {
									this.mainSegmentLoader_.load(),
									this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(),
									this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
							}
					}, {
							key: "smoothQualityChange_",
							value: function() {
									var e = this.selectPlaylist();
									e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e),
									this.mainSegmentLoader_.resetLoader())
							}
					}, {
							key: "fastQualityChange_",
							value: function() {
									var e = this
										, t = this.selectPlaylist();
									t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t),
									this.mainSegmentLoader_.resetEverything((function() {
											Fa.browser.IE_VERSION || Fa.browser.IS_EDGE ? e.tech_.setCurrentTime(e.tech_.currentTime() + .04) : e.tech_.setCurrentTime(e.tech_.currentTime())
									}
									)))
							}
					}, {
							key: "play",
							value: function() {
									if (!this.setupFirstPlay()) {
											this.tech_.ended() && this.seekTo_(0),
											this.hasPlayed_() && this.load();
											var e = this.tech_.seekable();
											return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.seekTo_(e.end(e.length - 1)) : void 0
									}
							}
					}, {
							key: "setupFirstPlay",
							value: function() {
									var e = this
										, t = this.masterPlaylistLoader_.media();
									if (!t || this.tech_.paused() || this.hasPlayed_())
											return !1;
									if (!t.endList) {
											var i = this.seekable();
											if (!i.length)
													return !1;
											if (Fa.browser.IE_VERSION && 0 === this.tech_.readyState())
													return this.tech_.one("loadedmetadata", (function() {
															e.trigger("firstplay"),
															e.seekTo_(i.end(0)),
															e.hasPlayed_ = function() {
																	return !0
															}
													}
													)),
													!1;
											this.trigger("firstplay"),
											this.seekTo_(i.end(0))
									}
									return this.hasPlayed_ = function() {
											return !0
									}
									,
									this.load(),
									!0
							}
					}, {
							key: "handleSourceOpen_",
							value: function() {
									try {
											this.setupSourceBuffers_()
									} catch (e) {
											return Fa.log.warn("Failed to create Source Buffers", e),
											this.mediaSource.endOfStream("decode")
									}
									if (this.tech_.autoplay()) {
											var e = this.tech_.play();
											void 0 !== e && "function" == typeof e.then && e.then(null, (function(e) {}
											))
									}
									this.trigger("sourceopen")
							}
					}, {
							key: "onEndOfStream",
							value: function() {
									var e = this.mainSegmentLoader_.ended_;
									if (this.mediaTypes_.AUDIO.activePlaylistLoader && (e = !this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_),
									e) {
											this.logger_("calling mediaSource.endOfStream()");
											try {
													this.mediaSource.endOfStream()
											} catch (e) {
													Fa.log.warn("Failed to call media source endOfStream", e)
											}
									}
							}
					}, {
							key: "stuckAtPlaylistEnd_",
							value: function(e) {
									if (!this.seekable().length)
											return !1;
									var t = this.syncController_.getExpiredTime(e, this.mediaSource.duration);
									if (null === t)
											return !1;
									var i = ru.Playlist.playlistEnd(e, t)
										, n = this.tech_.currentTime()
										, r = this.tech_.buffered();
									if (!r.length)
											return i - n <= .1;
									var a = r.end(r.length - 1);
									return a - n <= .1 && i - a <= .1
							}
					}, {
							key: "blacklistCurrentPlaylist",
							value: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
										, t = arguments[1]
										, i = void 0
										, n = void 0;
									if (i = e.playlist || this.masterPlaylistLoader_.media(),
									t = t || e.blacklistDuration || this.blacklistDuration,
									!i) {
											this.error = e;
											try {
													return this.mediaSource.endOfStream("network")
											} catch (e) {
													return this.trigger("error")
											}
									}
									var r = 1 === this.masterPlaylistLoader_.master.playlists.filter(vs).length
										, a = this.masterPlaylistLoader_.master.playlists;
									return 1 === a.length ? (Fa.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the only playlist."),
									this.tech_.trigger("retryplaylist"),
									this.masterPlaylistLoader_.load(r)) : (r && (Fa.log.warn("Removing all playlists from the blacklist because the last rendition is about to be blacklisted."),
									a.forEach((function(e) {
											e.excludeUntil !== 1 / 0 && delete e.excludeUntil
									}
									)),
									this.tech_.trigger("retryplaylist")),
									i.excludeUntil = Date.now() + 1e3 * t,
									this.tech_.trigger("blacklistplaylist"),
									this.tech_.trigger({
											type: "usage",
											name: "hls-rendition-blacklisted"
									}),
									n = this.selectPlaylist(),
									Fa.log.warn("Problem encountered with the current HLS playlist." + (e.message ? " " + e.message : "") + " Switching to another playlist."),
									this.masterPlaylistLoader_.media(n, r))
							}
					}, {
							key: "pauseLoading",
							value: function() {
									this.mainSegmentLoader_.pause(),
									this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(),
									this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
							}
					}, {
							key: "setCurrentTime",
							value: function(e) {
									var t = Us(this.tech_.buffered(), e);
									return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length ? e : (this.mainSegmentLoader_.resetEverything(),
									this.mainSegmentLoader_.abort(),
									this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(),
									this.audioSegmentLoader_.abort()),
									this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(),
									this.subtitleSegmentLoader_.abort()),
									void this.load()) : 0
							}
					}, {
							key: "duration",
							value: function() {
									return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : ru.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
							}
					}, {
							key: "seekable",
							value: function() {
									return this.seekable_
							}
					}, {
							key: "onSyncInfoUpdate_",
							value: function() {
									var e = void 0
										, t = void 0;
									if (this.masterPlaylistLoader_) {
											var i = this.masterPlaylistLoader_.media();
											if (i) {
													var n = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
													if (null !== n && 0 !== (e = ru.Playlist.seekable(i, n)).length) {
															if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
																	if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(),
																	null === (n = this.syncController_.getExpiredTime(i, this.mediaSource.duration)))
																			return;
																	if (0 === (t = ru.Playlist.seekable(i, n)).length)
																			return
															}
															var r = void 0
																, a = void 0;
															this.seekable_ && this.seekable_.length && (r = this.seekable_.end(0),
															a = this.seekable_.start(0)),
															t ? t.start(0) > e.end(0) || e.start(0) > t.end(0) ? this.seekable_ = e : this.seekable_ = Fa.createTimeRanges([[t.start(0) > e.start(0) ? t.start(0) : e.start(0), t.end(0) < e.end(0) ? t.end(0) : e.end(0)]]) : this.seekable_ = e,
															this.seekable_ && this.seekable_.length && this.seekable_.end(0) === r && this.seekable_.start(0) === a || (this.logger_("seekable updated [" + js(this.seekable_) + "]"),
															this.tech_.trigger("seekablechanged"))
													}
											}
									}
							}
					}, {
							key: "updateDuration",
							value: function() {
									var e = this
										, t = this.mediaSource.duration
										, i = ru.Playlist.duration(this.masterPlaylistLoader_.media())
										, n = this.tech_.buffered()
										, r = function t() {
											e.logger_("Setting duration from " + e.mediaSource.duration + " => " + i);
											try {
													e.mediaSource.duration = i
											} catch (e) {
													Fa.log.warn("Failed to set media source duration", e)
											}
											e.tech_.trigger("durationchange"),
											e.mediaSource.removeEventListener("sourceopen", t)
									};
									n.length > 0 && (i = Math.max(i, n.end(n.length - 1))),
									t !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", r) : r())
							}
					}, {
							key: "dispose",
							value: function() {
									var e = this;
									this.decrypter_.terminate(),
									this.masterPlaylistLoader_.dispose(),
									this.mainSegmentLoader_.dispose(),
									["AUDIO", "SUBTITLES"].forEach((function(t) {
											var i = e.mediaTypes_[t].groups;
											for (var n in i)
													i[n].forEach((function(e) {
															e.playlistLoader && e.playlistLoader.dispose()
													}
													))
									}
									)),
									this.audioSegmentLoader_.dispose(),
									this.subtitleSegmentLoader_.dispose()
							}
					}, {
							key: "master",
							value: function() {
									return this.masterPlaylistLoader_.master
							}
					}, {
							key: "media",
							value: function() {
									return this.masterPlaylistLoader_.media() || this.initialMedia_
							}
					}, {
							key: "setupSourceBuffers_",
							value: function() {
									var e, t = this.masterPlaylistLoader_.media();
									if (t && "open" === this.mediaSource.readyState) {
											if ((e = ro(this.masterPlaylistLoader_.master, t)).length < 1)
													return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri,
													this.mediaSource.endOfStream("decode");
											this.configureLoaderMimeTypes_(e),
											this.excludeIncompatibleVariants_(t)
									}
							}
					}, {
							key: "configureLoaderMimeTypes_",
							value: function(e) {
									var t = e.length > 1 && -1 === e[0].indexOf(",") && e[0] !== e[1] ? new Fa.EventTarget : null;
									this.mainSegmentLoader_.mimeType(e[0], t),
									e[1] && this.audioSegmentLoader_.mimeType(e[1], t)
							}
					}, {
							key: "excludeUnsupportedVariants_",
							value: function() {
									this.master().playlists.forEach((function(e) {
											var t;
											e.attributes.CODECS && r.a.MediaSource && r.a.MediaSource.isTypeSupported && !r.a.MediaSource.isTypeSupported('video/mp4; codecs="' + (t = e.attributes.CODECS,
											t.replace(/avc1\.(\d+)\.(\d+)/i, (function(e) {
													return to([e])[0]
											}
											))) + '"') && (e.excludeUntil = 1 / 0)
									}
									))
							}
					}, {
							key: "excludeIncompatibleVariants_",
							value: function(e) {
									var t = 2
										, i = null
										, n = void 0;
									e.attributes.CODECS && (n = io(e.attributes.CODECS),
									i = n.videoCodec,
									t = n.codecCount),
									this.master().playlists.forEach((function(e) {
											var n = {
													codecCount: 2,
													videoCodec: null
											};
											e.attributes.CODECS && (n = io(e.attributes.CODECS)),
											n.codecCount !== t && (e.excludeUntil = 1 / 0),
											n.videoCodec !== i && (e.excludeUntil = 1 / 0)
									}
									))
							}
					}, {
							key: "updateAdCues_",
							value: function(e) {
									var t = 0
										, i = this.seekable();
									i.length && (t = i.start(0)),
									function(e, t) {
											var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
											if (e.segments)
													for (var n = i, a = void 0, s = 0; s < e.segments.length; s++) {
															var o = e.segments[s];
															if (a || (a = zo(t, n + o.duration / 2)),
															a) {
																	if ("cueIn"in o) {
																			a.endTime = n,
																			a.adEndTime = n,
																			n += o.duration,
																			a = null;
																			continue
																	}
																	if (n < a.endTime) {
																			n += o.duration;
																			continue
																	}
																	a.endTime += o.duration
															} else if ("cueOut"in o && ((a = new r.a.VTTCue(n,n + o.duration,o.cueOut)).adStartTime = n,
															a.adEndTime = n + parseFloat(o.cueOut),
															t.addCue(a)),
															"cueOutCont"in o) {
																	var u = void 0
																		, l = void 0
																		, c = o.cueOutCont.split("/").map(parseFloat)
																		, h = Ka(c, 2);
																	u = h[0],
																	l = h[1],
																	(a = new r.a.VTTCue(n,n + o.duration,"")).adStartTime = n - u,
																	a.adEndTime = a.adStartTime + l,
																	t.addCue(a)
															}
															n += o.duration
													}
									}(e, this.cueTagsTrack_, t)
							}
					}, {
							key: "goalBufferLength",
							value: function() {
									var e = this.tech_.currentTime()
										, t = Ao.GOAL_BUFFER_LENGTH
										, i = Ao.GOAL_BUFFER_LENGTH_RATE
										, n = Math.max(t, Ao.MAX_GOAL_BUFFER_LENGTH);
									return Math.min(t + e * i, n)
							}
					}, {
							key: "bufferLowWaterLine",
							value: function() {
									var e = this.tech_.currentTime()
										, t = Ao.BUFFER_LOW_WATER_LINE
										, i = Ao.BUFFER_LOW_WATER_LINE_RATE
										, n = Math.max(t, Ao.MAX_BUFFER_LOW_WATER_LINE);
									return Math.min(t + e * i, n)
							}
					}]),
					t
			}(Fa.EventTarget)
				, uu = function e(t, i, n) {
					za(this, e);
					var r, a, s, o = t.masterPlaylistController_, u = o[(t.options_.smoothQualityChange ? "smooth" : "fast") + "QualityChange_"].bind(o);
					if (i.attributes.RESOLUTION) {
							var l = i.attributes.RESOLUTION;
							this.width = l.width,
							this.height = l.height
					}
					this.bandwidth = i.attributes.BANDWIDTH,
					this.id = n,
					this.enabled = (r = t.playlists,
					a = i.uri,
					s = u,
					function(e) {
							var t = r.master.playlists[a]
								, i = gs(t)
								, n = vs(t);
							return void 0 === e ? n : (e ? delete t.disabled : t.disabled = !0,
							e === n || i || (s(),
							e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")),
							e)
					}
					)
			}
				, lu = ["seeking", "seeked", "pause", "playing", "error"]
				, cu = function() {
					function e(t) {
							var i = this;
							za(this, e),
							this.tech_ = t.tech,
							this.seekable = t.seekable,
							this.seekTo = t.seekTo,
							this.allowSeeksWithinUnsafeLiveWindow = t.allowSeeksWithinUnsafeLiveWindow,
							this.media = t.media,
							this.consecutiveUpdates = 0,
							this.lastRecordedTime = null,
							this.timer_ = null,
							this.checkCurrentTimeTimeout_ = null,
							this.logger_ = ko("PlaybackWatcher"),
							this.logger_("initialize");
							var n = function() {
									return i.monitorCurrentTime_()
							}
								, a = function() {
									return i.techWaiting_()
							}
								, s = function() {
									return i.cancelTimer_()
							}
								, o = function() {
									return i.fixesBadSeeks_()
							};
							this.tech_.on("seekablechanged", o),
							this.tech_.on("waiting", a),
							this.tech_.on(lu, s),
							this.tech_.on("canplay", n),
							this.dispose = function() {
									i.logger_("dispose"),
									i.tech_.off("seekablechanged", o),
									i.tech_.off("waiting", a),
									i.tech_.off(lu, s),
									i.tech_.off("canplay", n),
									i.checkCurrentTimeTimeout_ && r.a.clearTimeout(i.checkCurrentTimeTimeout_),
									i.cancelTimer_()
							}
					}
					return Ga(e, [{
							key: "monitorCurrentTime_",
							value: function() {
									this.checkCurrentTime_(),
									this.checkCurrentTimeTimeout_ && r.a.clearTimeout(this.checkCurrentTimeTimeout_),
									this.checkCurrentTimeTimeout_ = r.a.setTimeout(this.monitorCurrentTime_.bind(this), 250)
							}
					}, {
							key: "checkCurrentTime_",
							value: function() {
									if (this.tech_.seeking() && this.fixesBadSeeks_())
											return this.consecutiveUpdates = 0,
											void (this.lastRecordedTime = this.tech_.currentTime());
									if (!this.tech_.paused() && !this.tech_.seeking()) {
											var e = this.tech_.currentTime()
												, t = this.tech_.buffered();
											if (this.lastRecordedTime === e && (!t.length || e + .1 >= t.end(t.length - 1)))
													return this.techWaiting_();
											this.consecutiveUpdates >= 5 && e === this.lastRecordedTime ? (this.consecutiveUpdates++,
											this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0,
											this.lastRecordedTime = e)
									}
							}
					}, {
							key: "cancelTimer_",
							value: function() {
									this.consecutiveUpdates = 0,
									this.timer_ && (this.logger_("cancelTimer_"),
									clearTimeout(this.timer_)),
									this.timer_ = null
							}
					}, {
							key: "fixesBadSeeks_",
							value: function() {
									if (!this.tech_.seeking())
											return !1;
									var e = this.seekable()
										, t = this.tech_.currentTime()
										, i = void 0;
									this.afterSeekableWindow_(e, t, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (i = e.end(e.length - 1));
									this.beforeSeekableWindow_(e, t) && (i = e.start(0) + .1);
									return void 0 !== i && (this.logger_("Trying to seek outside of seekable at time " + t + " with seekable range " + js(e) + ". Seeking to " + i + "."),
									this.seekTo(i),
									!0)
							}
					}, {
							key: "waiting_",
							value: function() {
									if (!this.techWaiting_()) {
											var e = this.tech_.currentTime()
												, t = this.tech_.buffered()
												, i = Us(t, e);
											return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(),
											this.seekTo(e),
											this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."),
											void this.tech_.trigger({
													type: "usage",
													name: "hls-unknown-waiting"
											})) : void 0
									}
							}
					}, {
							key: "techWaiting_",
							value: function() {
									var e = this.seekable()
										, t = this.tech_.currentTime();
									if (this.tech_.seeking() && this.fixesBadSeeks_())
											return !0;
									if (this.tech_.seeking() || null !== this.timer_)
											return !0;
									if (this.beforeSeekableWindow_(e, t)) {
											var i = e.end(e.length - 1);
											return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i),
											this.cancelTimer_(),
											this.seekTo(i),
											this.tech_.trigger({
													type: "usage",
													name: "hls-live-resync"
											}),
											!0
									}
									var n = this.tech_.buffered()
										, r = Ms(n, t);
									if (this.videoUnderflow_(r, n, t))
											return this.cancelTimer_(),
											this.seekTo(t),
											this.tech_.trigger({
													type: "usage",
													name: "hls-video-underflow"
											}),
											!0;
									if (r.length > 0) {
											var a = r.start(0) - t;
											return this.logger_("Stopped at " + t + ", setting timer for " + a + ", seeking to " + r.start(0)),
											this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, t),
											!0
									}
									return !1
							}
					}, {
							key: "afterSeekableWindow_",
							value: function(e, t, i) {
									var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
									if (!e.length)
											return !1;
									var r = e.end(e.length - 1) + .1
										, a = !i.endList;
									return a && n && (r = e.end(e.length - 1) + 3 * i.targetDuration),
									t > r
							}
					}, {
							key: "beforeSeekableWindow_",
							value: function(e, t) {
									return !!(e.length && e.start(0) > 0 && t < e.start(0) - .1)
							}
					}, {
							key: "videoUnderflow_",
							value: function(e, t, i) {
									if (0 === e.length) {
											var n = this.gapFromVideoUnderflow_(t, i);
											if (n)
													return this.logger_("Encountered a gap in video from " + n.start + " to " + n.end + ". Seeking to current time " + i),
													!0
									}
									return !1
							}
					}, {
							key: "skipTheGap_",
							value: function(e) {
									var t = this.tech_.buffered()
										, i = this.tech_.currentTime()
										, n = Ms(t, i);
									this.cancelTimer_(),
									0 !== n.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)),
									this.seekTo(n.start(0) + 1 / 30),
									this.tech_.trigger({
											type: "usage",
											name: "hls-gap-skip"
									}))
							}
					}, {
							key: "gapFromVideoUnderflow_",
							value: function(e, t) {
									for (var i = function(e) {
											if (e.length < 2)
													return Fa.createTimeRanges();
											for (var t = [], i = 1; i < e.length; i++) {
													var n = e.end(i - 1)
														, r = e.start(i);
													t.push([n, r])
											}
											return Fa.createTimeRanges(t)
									}(e), n = 0; n < i.length; n++) {
											var r = i.start(n)
												, a = i.end(n);
											if (t - r < 4 && t - r > 2)
													return {
															start: r,
															end: a
													}
									}
									return null
							}
					}]),
					e
			}()
				, hu = {
					errorInterval: 30,
					getSource: function(e) {
							return e(this.tech({
									IWillNotUseThisInPlugins: !0
							}).currentSource_)
					}
			}
				, du = function(e) {
					!function e(t, i) {
							var n = 0
								, r = 0
								, a = Fa.mergeOptions(hu, i);
							t.ready((function() {
									t.trigger({
											type: "usage",
											name: "hls-error-reload-initialized"
									})
							}
							));
							var s = function() {
									r && t.currentTime(r)
							}
								, o = function(e) {
									null != e && (r = t.duration() !== 1 / 0 && t.currentTime() || 0,
									t.one("loadedmetadata", s),
									t.src(e),
									t.trigger({
											type: "usage",
											name: "hls-error-reload"
									}),
									t.play())
							}
								, u = function() {
									if (Date.now() - n < 1e3 * a.errorInterval)
											t.trigger({
													type: "usage",
													name: "hls-error-reload-canceled"
											});
									else {
											if (a.getSource && "function" == typeof a.getSource)
													return n = Date.now(),
													a.getSource.call(t, o);
											Fa.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
									}
							}
								, l = function e() {
									t.off("loadedmetadata", s),
									t.off("error", u),
									t.off("dispose", e)
							};
							t.on("error", u),
							t.on("dispose", l),
							t.reloadSourceOnError = function(i) {
									l(),
									e(t, i)
							}
					}(this, e)
			};
			Fa.use("*", (function(e) {
					return {
							setSource: function(e, t) {
									t(null, e)
							},
							setCurrentTime: function(t) {
									return e.vhs && e.currentSource().src === e.vhs.source_.src && e.vhs.setCurrentTime(t),
									t
							},
							play: function() {
									e.vhs && e.currentSource().src === e.vhs.source_.src && e.vhs.setCurrentTime(e.tech_.currentTime())
							}
					}
			}
			));
			var pu = {
					PlaylistLoader: rs,
					Playlist: bs,
					Decrypter: He,
					AsyncStream: Be,
					decrypt: qe,
					utils: Ls,
					STANDARD_PLAYLIST_SELECTOR: function() {
							return function(e, t, i, n, a) {
									var s = e.playlists.map((function(e) {
											var t, i;
											return t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
											i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height,
											{
													bandwidth: e.attributes.BANDWIDTH || r.a.Number.MAX_VALUE,
													width: t,
													height: i,
													playlist: e
											}
									}
									));
									Mo(s, (function(e, t) {
											return e.bandwidth - t.bandwidth
									}
									));
									var o = (s = s.filter((function(e) {
											return !bs.isIncompatible(e.playlist)
									}
									))).filter((function(e) {
											return bs.isEnabled(e.playlist)
									}
									));
									o.length || (o = s.filter((function(e) {
											return !bs.isDisabled(e.playlist)
									}
									)));
									var u = o.filter((function(e) {
											return e.bandwidth * Ao.BANDWIDTH_VARIANCE < t
									}
									))
										, l = u[u.length - 1]
										, c = u.filter((function(e) {
											return e.bandwidth === l.bandwidth
									}
									))[0];
									if (!1 === a) {
											var h = c || o[0] || s[0];
											return h ? h.playlist : null
									}
									var d = u.filter((function(e) {
											return e.width && e.height
									}
									));
									Mo(d, (function(e, t) {
											return e.width - t.width
									}
									));
									var p = d.filter((function(e) {
											return e.width === i && e.height === n
									}
									));
									l = p[p.length - 1];
									var f = p.filter((function(e) {
											return e.bandwidth === l.bandwidth
									}
									))[0]
										, m = void 0
										, g = void 0
										, v = void 0;
									f || (g = (m = d.filter((function(e) {
											return e.width > i || e.height > n
									}
									))).filter((function(e) {
											return e.width === m[0].width && e.height === m[0].height
									}
									)),
									l = g[g.length - 1],
									v = g.filter((function(e) {
											return e.bandwidth === l.bandwidth
									}
									))[0]);
									var y = v || f || c || o[0] || s[0];
									return y ? y.playlist : null
							}(this.playlists.master, this.systemBandwidth, parseInt(Uo(this.tech_.el(), "width"), 10), parseInt(Uo(this.tech_.el(), "height"), 10), this.limitRenditionByPlayerDimensions)
					},
					INITIAL_PLAYLIST_SELECTOR: function() {
							var e = this.playlists.master.playlists.filter(bs.isEnabled);
							return Mo(e, (function(e, t) {
									return jo(e, t)
							}
							)),
							e.filter((function(e) {
									return io(e.attributes.CODECS).videoCodec
							}
							))[0] || null
					},
					comparePlaylistBandwidth: jo,
					comparePlaylistResolution: function(e, t) {
							var i = void 0
								, n = void 0;
							return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width),
							i = i || r.a.Number.MAX_VALUE,
							t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width),
							i === (n = n || r.a.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - n
					},
					xhr: ws()
			};
			["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach((function(e) {
					Object.defineProperty(pu, e, {
							get: function() {
									return Fa.log.warn("using Hls." + e + " is UNSAFE be sure you know what you are doing"),
									Ao[e]
							},
							set: function(t) {
									Fa.log.warn("using Hls." + e + " is UNSAFE be sure you know what you are doing"),
									"number" != typeof t || t < 0 ? Fa.log.warn("value of Hls." + e + " must be greater than or equal to 0") : Ao[e] = t
							}
					})
			}
			));
			var fu = function(e) {
					if (/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e))
							return "hls";
					return /^application\/dash\+xml/i.test(e) ? "dash" : null
			}
				, mu = function(e, t) {
					for (var i = t.media(), n = -1, r = 0; r < e.length; r++)
							if (e[r].id === i.uri) {
									n = r;
									break
							}
					e.selectedIndex_ = n,
					e.trigger({
							selectedIndex: n,
							type: "change"
					})
			};
			pu.canPlaySource = function() {
					return Fa.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
			}
			;
			var gu = function(e) {
					var t = e.masterPlaylistController_.mainSegmentLoader_
						, i = e.masterPlaylistController_.audioSegmentLoader_
						, n = Fa.players[e.tech_.options_.playerId];
					if (n.eme) {
							var r = function(e, t, i) {
									if (!e)
											return e;
									var n = void 0
										, r = void 0;
									if (i.mimeType_)
											n = t.mimeType_,
											r = i.mimeType_;
									else {
											var a = ao(t.mimeType_)
												, s = a.parameters.codecs.split(",")
												, o = void 0
												, u = void 0;
											s.forEach((function(e) {
													e = e.trim(),
													so(e) ? o = e : oo(e) && (u = e)
											}
											)),
											n = a.type + '; codecs="' + u + '"',
											r = a.type.replace("video", "audio") + '; codecs="' + o + '"'
									}
									var l = {}
										, c = t.playlist_;
									for (var h in e)
											l[h] = {
													audioContentType: r,
													videoContentType: n
											},
											c.contentProtection && c.contentProtection[h] && c.contentProtection[h].pssh && (l[h].pssh = c.contentProtection[h].pssh),
											"string" == typeof e[h] && (l[h].url = e[h]);
									return Fa.mergeOptions(e, l)
							}(e.source_.keySystems, t, i);
							r && (n.currentSource().keySystems = r,
							11 !== Fa.browser.IE_VERSION && n.eme.initializeMediaKeys && n.eme.initializeMediaKeys())
					}
			}
				, vu = function() {
					if (!window.localStorage)
							return null;
					var e = window.localStorage.getItem("videojs-vhs");
					if (!e)
							return null;
					try {
							return JSON.parse(e)
					} catch (e) {
							return null
					}
			};
			pu.supportsNativeHls = function() {
					var e = s.a.createElement("video");
					if (!Fa.getTech("Html5").isSupported())
							return !1;
					return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some((function(t) {
							return /maybe|probably/i.test(e.canPlayType(t))
					}
					))
			}(),
			pu.supportsNativeDash = !!Fa.getTech("Html5").isSupported() && /maybe|probably/i.test(s.a.createElement("video").canPlayType("application/dash+xml")),
			pu.supportsTypeNatively = function(e) {
					return "hls" === e ? pu.supportsNativeHls : "dash" === e && pu.supportsNativeDash
			}
			,
			pu.isSupported = function() {
					return Fa.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
			}
			;
			var yu = function(e) {
					function t(e, i, n) {
							za(this, t);
							var r = Xa(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n.hls));
							if (i.options_ && i.options_.playerId) {
									var a = Fa(i.options_.playerId);
									a.hasOwnProperty("hls") || Object.defineProperty(a, "hls", {
											get: function() {
													return Fa.log.warn("player.hls is deprecated. Use player.tech().hls instead."),
													i.trigger({
															type: "usage",
															name: "hls-player-access"
													}),
													r
											},
											configurable: !0
									}),
									a.vhs = r,
									a.dash = r,
									r.player_ = a
							}
							if (r.tech_ = i,
							r.source_ = e,
							r.stats = {},
							r.setOptions_(),
							r.options_.overrideNative && i.overrideNativeAudioTracks && i.overrideNativeVideoTracks)
									i.overrideNativeAudioTracks(!0),
									i.overrideNativeVideoTracks(!0);
							else if (r.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks))
									throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
							return r.on(s.a, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], (function(e) {
									var t = s.a.fullscreenElement || s.a.webkitFullscreenElement || s.a.mozFullScreenElement || s.a.msFullscreenElement;
									t && t.contains(r.tech_.el()) && r.masterPlaylistController_.smoothQualityChange_()
							}
							)),
							r.on(r.tech_, "seeking", (function() {
									0 === this.tech_.currentTime() && this.tech_.player_.loop() && this.setCurrentTime(0)
							}
							)),
							r.on(r.tech_, "error", (function() {
									this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
							}
							)),
							r.on(r.tech_, "play", r.play),
							r
					}
					return Ya(t, e),
					Ga(t, [{
							key: "setOptions_",
							value: function() {
									var e = this;
									if (this.options_.withCredentials = this.options_.withCredentials || !1,
									this.options_.handleManifestRedirects = this.options_.handleManifestRedirects || !1,
									this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions,
									this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1,
									this.options_.useBandwidthFromLocalStorage = void 0 !== this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1,
									this.options_.customTagParsers = this.options_.customTagParsers || [],
									this.options_.customTagMappers = this.options_.customTagMappers || [],
									this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1,
									"number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300),
									"number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) {
											var t = vu();
											t && t.bandwidth && (this.options_.bandwidth = t.bandwidth,
											this.tech_.trigger({
													type: "usage",
													name: "hls-bandwidth-from-local-storage"
											})),
											t && t.throughput && (this.options_.throughput = t.throughput,
											this.tech_.trigger({
													type: "usage",
													name: "hls-throughput-from-local-storage"
											}))
									}
									"number" != typeof this.options_.bandwidth && (this.options_.bandwidth = Ao.INITIAL_BANDWIDTH),
									this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === Ao.INITIAL_BANDWIDTH,
									["withCredentials", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects", "cacheEncryptionKeys"].forEach((function(t) {
											void 0 !== e.source_[t] && (e.options_[t] = e.source_[t])
									}
									)),
									this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions
							}
					}, {
							key: "src",
							value: function(e, t) {
									var i = this;
									e && (this.setOptions_(),
									this.options_.url = this.source_.src,
									this.options_.tech = this.tech_,
									this.options_.externHls = pu,
									this.options_.sourceType = fu(t),
									this.options_.seekTo = function(e) {
											i.tech_.setCurrentTime(e),
											i.setCurrentTime(e)
									}
									,
									this.masterPlaylistController_ = new ou(this.options_),
									this.playbackWatcher_ = new cu(Fa.mergeOptions(this.options_, {
											seekable: function() {
													return i.seekable()
											},
											media: function() {
													return i.masterPlaylistController_.media()
											}
									})),
									this.masterPlaylistController_.on("error", (function() {
											Fa.players[i.tech_.options_.playerId].error(i.masterPlaylistController_.error)
									}
									)),
									this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : pu.STANDARD_PLAYLIST_SELECTOR.bind(this),
									this.masterPlaylistController_.selectInitialPlaylist = pu.INITIAL_PLAYLIST_SELECTOR.bind(this),
									this.playlists = this.masterPlaylistController_.masterPlaylistLoader_,
									this.mediaSource = this.masterPlaylistController_.mediaSource,
									Object.defineProperties(this, {
											selectPlaylist: {
													get: function() {
															return this.masterPlaylistController_.selectPlaylist
													},
													set: function(e) {
															this.masterPlaylistController_.selectPlaylist = e.bind(this)
													}
											},
											throughput: {
													get: function() {
															return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
													},
													set: function(e) {
															this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e,
															this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
													}
											},
											bandwidth: {
													get: function() {
															return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
													},
													set: function(e) {
															this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e,
															this.masterPlaylistController_.mainSegmentLoader_.throughput = {
																	rate: 0,
																	count: 0
															}
													}
											},
											systemBandwidth: {
													get: function() {
															var e = 1 / (this.bandwidth || 1)
																, t = void 0;
															return t = this.throughput > 0 ? 1 / this.throughput : 0,
															Math.floor(1 / (e + t))
													},
													set: function() {
															Fa.log.error('The "systemBandwidth" property is read-only')
													}
											}
									}),
									this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth),
									this.options_.throughput && (this.throughput = this.options_.throughput),
									Object.defineProperties(this.stats, {
											bandwidth: {
													get: function() {
															return i.bandwidth || 0
													},
													enumerable: !0
											},
											mediaRequests: {
													get: function() {
															return i.masterPlaylistController_.mediaRequests_() || 0
													},
													enumerable: !0
											},
											mediaRequestsAborted: {
													get: function() {
															return i.masterPlaylistController_.mediaRequestsAborted_() || 0
													},
													enumerable: !0
											},
											mediaRequestsTimedout: {
													get: function() {
															return i.masterPlaylistController_.mediaRequestsTimedout_() || 0
													},
													enumerable: !0
											},
											mediaRequestsErrored: {
													get: function() {
															return i.masterPlaylistController_.mediaRequestsErrored_() || 0
													},
													enumerable: !0
											},
											mediaTransferDuration: {
													get: function() {
															return i.masterPlaylistController_.mediaTransferDuration_() || 0
													},
													enumerable: !0
											},
											mediaBytesTransferred: {
													get: function() {
															return i.masterPlaylistController_.mediaBytesTransferred_() || 0
													},
													enumerable: !0
											},
											mediaSecondsLoaded: {
													get: function() {
															return i.masterPlaylistController_.mediaSecondsLoaded_() || 0
													},
													enumerable: !0
											},
											buffered: {
													get: function() {
															return Bs(i.tech_.buffered())
													},
													enumerable: !0
											},
											currentTime: {
													get: function() {
															return i.tech_.currentTime()
													},
													enumerable: !0
											},
											currentSource: {
													get: function() {
															return i.tech_.currentSource_
													},
													enumerable: !0
											},
											currentTech: {
													get: function() {
															return i.tech_.name_
													},
													enumerable: !0
											},
											duration: {
													get: function() {
															return i.tech_.duration()
													},
													enumerable: !0
											},
											master: {
													get: function() {
															return i.playlists.master
													},
													enumerable: !0
											},
											playerDimensions: {
													get: function() {
															return i.tech_.currentDimensions()
													},
													enumerable: !0
											},
											seekable: {
													get: function() {
															return Bs(i.tech_.seekable())
													},
													enumerable: !0
											},
											timestamp: {
													get: function() {
															return Date.now()
													},
													enumerable: !0
											},
											videoPlaybackQuality: {
													get: function() {
															return i.tech_.getVideoPlaybackQuality()
													},
													enumerable: !0
											}
									}),
									this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),
									this.tech_.on("bandwidthupdate", (function() {
											i.options_.useBandwidthFromLocalStorage && function(e) {
													if (!window.localStorage)
															return !1;
													var t = vu();
													t = t ? Fa.mergeOptions(t, e) : e;
													try {
															window.localStorage.setItem("videojs-vhs", JSON.stringify(t))
													} catch (e) {
															return !1
													}
											}({
													bandwidth: i.bandwidth,
													throughput: Math.round(i.throughput)
											})
									}
									)),
									this.masterPlaylistController_.on("selectedinitialmedia", (function() {
											var e, t;
											t = (e = i).playlists,
											e.representations = function() {
													return t.master.playlists.filter((function(e) {
															return !gs(e)
													}
													)).map((function(t, i) {
															return new uu(e,t,t.uri)
													}
													))
											}
											,
											gu(i)
									}
									)),
									this.on(this.masterPlaylistController_, "progress", (function() {
											this.tech_.trigger("progress")
									}
									)),
									this.tech_.ready((function() {
											return i.setupQualityLevels_()
									}
									)),
									this.tech_.el() && this.tech_.src(Fa.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
							}
					}, {
							key: "setupQualityLevels_",
							value: function() {
									var e = this
										, t = Fa.players[this.tech_.options_.playerId];
									t && t.qualityLevels && (this.qualityLevels_ = t.qualityLevels(),
									this.masterPlaylistController_.on("selectedinitialmedia", (function() {
											var t, i;
											t = e.qualityLevels_,
											(i = e).representations().forEach((function(e) {
													t.addQualityLevel(e)
											}
											)),
											mu(t, i.playlists)
									}
									)),
									this.playlists.on("mediachange", (function() {
											mu(e.qualityLevels_, e.playlists)
									}
									)))
							}
					}, {
							key: "play",
							value: function() {
									this.masterPlaylistController_.play()
							}
					}, {
							key: "setCurrentTime",
							value: function(e) {
									this.masterPlaylistController_.setCurrentTime(e)
							}
					}, {
							key: "duration",
							value: function() {
									return this.masterPlaylistController_.duration()
							}
					}, {
							key: "seekable",
							value: function() {
									return this.masterPlaylistController_.seekable()
							}
					}, {
							key: "dispose",
							value: function() {
									this.playbackWatcher_ && this.playbackWatcher_.dispose(),
									this.masterPlaylistController_ && this.masterPlaylistController_.dispose(),
									this.qualityLevels_ && this.qualityLevels_.dispose(),
									this.player_ && (delete this.player_.vhs,
									delete this.player_.dash,
									delete this.player_.hls),
									this.tech_ && this.tech_.hls && delete this.tech_.hls,
									function e(t, i, n) {
											null === t && (t = Function.prototype);
											var r = Object.getOwnPropertyDescriptor(t, i);
											if (void 0 === r) {
													var a = Object.getPrototypeOf(t);
													return null === a ? void 0 : e(a, i, n)
											}
											if ("value"in r)
													return r.value;
											var s = r.get;
											return void 0 !== s ? s.call(n) : void 0
									}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
							}
					}, {
							key: "convertToProgramTime",
							value: function(e, t) {
									return Ds({
											playlist: this.masterPlaylistController_.media(),
											time: e,
											callback: t
									})
							}
					}, {
							key: "seekToProgramTime",
							value: function(e, t) {
									var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
										, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
									return Rs({
											programTime: e,
											playlist: this.masterPlaylistController_.media(),
											retryCount: n,
											pauseAfterSeek: i,
											seekTo: this.options_.seekTo,
											tech: this.options_.tech,
											callback: t
									})
							}
					}]),
					t
			}(Fa.getComponent("Component"))
				, _u = {
					name: "videojs-http-streaming",
					VERSION: "1.11.2",
					canHandleSource: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
								, i = Fa.mergeOptions(Fa.options, t);
							return _u.canPlayType(e.type, i)
					},
					handleSource: function(e, t) {
							var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
								, n = Fa.mergeOptions(Fa.options, i);
							return t.hls = new yu(e,t,n),
							t.hls.xhr = ws(),
							t.hls.src(e.src, e.type),
							t.hls
					},
					canPlayType: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
								, i = Fa.mergeOptions(Fa.options, t)
								, n = i.hls.overrideNative
								, r = fu(e)
								, a = r && (!pu.supportsTypeNatively(r) || n);
							return a ? "maybe" : ""
					}
			};
			void 0 !== Fa.MediaSource && void 0 !== Fa.URL || (Fa.MediaSource = mo,
			Fa.URL = go),
			mo.supportsNativeMediaSources() && Fa.getTech("Html5").registerSourceHandler(_u, 0),
			Fa.HlsHandler = yu,
			Fa.HlsSourceHandler = _u,
			Fa.Hls = pu,
			Fa.use || Fa.registerComponent("Hls", pu),
			Fa.options.hls = Fa.options.hls || {},
			Fa.registerPlugin ? Fa.registerPlugin("reloadSourceOnError", du) : Fa.plugin("reloadSourceOnError", du);
			t.default = Fa
	},
	//aaaaqqqq777
	"8VTv": function(e, t, i) {
			var n;
			(n = {
					youtube: i("qBcj").default,
			}).hasOwnProperty(window.App.playerType) && (window.player = new n[window.App.playerType],
			player.enabled && (player.ready((function() {
					if (window.playerReady = !0,
					"0" !== getUrlParameter("video")) {
							"cloud" !== window.App.playerType && window.App.autoplay && "0" !== getUrlParameter("ap") && player.play(),
							document.querySelector("[data-player-thumbnail]").style.display = "none";
							var e = document.querySelector("[data-player-play]")
								, t = document.querySelector("[data-player-mobile-play]")
								, i = document.querySelector("[data-player-unmute]")
								, n = document.querySelector("[data-player-dim]");
							n.style.visibility = "visible",
							window.App.isMobile && (t.style.display = "flex"),
							i.style.display = window.App.muted && "1" !== getUrlParameter("m") ? "flex" : "none",
							window.App.isMobile || "0" !== getUrlParameter("ap") || (e.style.display = "flex",
							i.style.display = "none",
							player.unmute()),
							player.onPause((function() {
									e.style.display = "flex",
									n.classList.remove("is-dimmed")
							}
							)),
							player.onPlay((function() {
									e.style.display = "none",
									n.classList.add("is-dimmed")
							}
							));
							var r = function(i) {
									i.preventDefault(),
									player.play(),
									e.style.display = "none",
									t.style.display = "none"
							};
							e.addEventListener("click", r),
							t.addEventListener("click", r),
							i.addEventListener("click", (function(e) {
									e.preventDefault(),
									player.unmute(),
									i.style.display = "none"
							}
							))
					} else
							player.style.display = "none"
			}
			)),
			window.scrollToPlayer = function() {
					window.scrollToElement(document.body)
			}
			))
	},
	"8oxB": function(e, t) {
			var i, n, r = e.exports = {};
			function a() {
					throw new Error("setTimeout has not been defined")
			}
			function s() {
					throw new Error("clearTimeout has not been defined")
			}
			function o(e) {
					if (i === setTimeout)
							return setTimeout(e, 0);
					if ((i === a || !i) && setTimeout)
							return i = setTimeout,
							setTimeout(e, 0);
					try {
							return i(e, 0)
					} catch (t) {
							try {
									return i.call(null, e, 0)
							} catch (t) {
									return i.call(this, e, 0)
							}
					}
			}
			!function() {
					try {
							i = "function" == typeof setTimeout ? setTimeout : a
					} catch (e) {
							i = a
					}
					try {
							n = "function" == typeof clearTimeout ? clearTimeout : s
					} catch (e) {
							n = s
					}
			}();
			var u, l = [], c = !1, h = -1;
			function d() {
					c && u && (c = !1,
					u.length ? l = u.concat(l) : h = -1,
					l.length && p())
			}
			function p() {
					if (!c) {
							var e = o(d);
							c = !0;
							for (var t = l.length; t; ) {
									for (u = l,
									l = []; ++h < t; )
											u && u[h].run();
									h = -1,
									t = l.length
							}
							u = null,
							c = !1,
							function(e) {
									if (n === clearTimeout)
											return clearTimeout(e);
									if ((n === s || !n) && clearTimeout)
											return n = clearTimeout,
											clearTimeout(e);
									try {
											n(e)
									} catch (t) {
											try {
													return n.call(null, e)
											} catch (t) {
													return n.call(this, e)
											}
									}
							}(e)
					}
			}
			function f(e, t) {
					this.fun = e,
					this.array = t
			}
			function m() {}
			r.nextTick = function(e) {
					var t = new Array(arguments.length - 1);
					if (arguments.length > 1)
							for (var i = 1; i < arguments.length; i++)
									t[i - 1] = arguments[i];
					l.push(new f(e,t)),
					1 !== l.length || c || o(p)
			}
			,
			f.prototype.run = function() {
					this.fun.apply(null, this.array)
			}
			,
			r.title = "browser",
			r.browser = !0,
			r.env = {},
			r.argv = [],
			r.version = "",
			r.versions = {},
			r.on = m,
			r.addListener = m,
			r.once = m,
			r.off = m,
			r.removeListener = m,
			r.removeAllListeners = m,
			r.emit = m,
			r.prependListener = m,
			r.prependOnceListener = m,
			r.listeners = function(e) {
					return []
			}
			,
			r.binding = function(e) {
					throw new Error("process.binding is not supported")
			}
			,
			r.cwd = function() {
					return "/"
			}
			,
			r.chdir = function(e) {
					throw new Error("process.chdir is not supported")
			}
			,
			r.umask = function() {
					return 0
			}
	},
	"9/Zf": function(e, t, i) {
			"use strict";
			(function(e) {
					i.d(t, "b", (function() {
							return a
					}
					)),
					i.d(t, "c", (function() {
							return s
					}
					)),
					i.d(t, "a", (function() {
							return o
					}
					));
					var n = i("+A1k")
						, r = (i("+924"),
					{});
					function a() {
							return Object(n.b)() ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : r
					}
					function s() {
							var e = a()
								, t = e.crypto || e.msCrypto;
							if (void 0 !== t && t.getRandomValues) {
									var i = new Uint16Array(8);
									t.getRandomValues(i),
									i[3] = 4095 & i[3] | 16384,
									i[4] = 16383 & i[4] | 32768;
									var n = function(e) {
											for (var t = e.toString(16); t.length < 4; )
													t = "0" + t;
											return t
									};
									return n(i[0]) + n(i[1]) + n(i[2]) + n(i[3]) + n(i[4]) + n(i[5]) + n(i[6]) + n(i[7])
							}
							return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
									var t = 16 * Math.random() | 0;
									return ("x" === e ? t : 3 & t | 8).toString(16)
							}
							))
					}
					function o(e) {
							var t = a();
							if (!("console"in t))
									return e();
							var i = t.console
								, n = {};
							["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
									e in t.console && i[e].__sentry_original__ && (n[e] = i[e],
									i[e] = i[e].__sentry_original__)
							}
							));
							var r = e();
							return Object.keys(n).forEach((function(e) {
									i[e] = n[e]
							}
							)),
							r
					}
			}
			).call(this, i("yLpj"))
	},
	"9AQC": function(e, t, i) {
			"use strict";
			function n(e) {
					switch (Object.prototype.toString.call(e)) {
					case "[object Error]":
					case "[object Exception]":
					case "[object DOMException]":
							return !0;
					default:
							return d(e, Error)
					}
			}
			function r(e) {
					return "[object String]" === Object.prototype.toString.call(e)
			}
			function a(e) {
					return null === e || "object" != typeof e && "function" != typeof e
			}
			function s(e) {
					return "[object Object]" === Object.prototype.toString.call(e)
			}
			function o(e) {
					return "undefined" != typeof Event && d(e, Event)
			}
			function u(e) {
					return "undefined" != typeof Element && d(e, Element)
			}
			function l(e) {
					return "[object RegExp]" === Object.prototype.toString.call(e)
			}
			function c(e) {
					return Boolean(e && e.then && "function" == typeof e.then)
			}
			function h(e) {
					return s(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
			}
			function d(e, t) {
					try {
							return e instanceof t
					} catch (e) {
							return !1
					}
			}
			i.d(t, "b", (function() {
					return n
			}
			)),
			i.d(t, "h", (function() {
					return r
			}
			)),
			i.d(t, "f", (function() {
					return a
			}
			)),
			i.d(t, "e", (function() {
					return s
			}
			)),
			i.d(t, "c", (function() {
					return o
			}
			)),
			i.d(t, "a", (function() {
					return u
			}
			)),
			i.d(t, "g", (function() {
					return l
			}
			)),
			i.d(t, "j", (function() {
					return c
			}
			)),
			i.d(t, "i", (function() {
					return h
			}
			)),
			i.d(t, "d", (function() {
					return d
			}
			))
	},
	BF8C: function(e, t, i) {
			"use strict";
			var n = i("19KI")
				, r = i("pVnL")
				, a = i("g2LC");
			function s(e, t, i) {
					var n = e;
					return a(t) ? (i = t,
					"string" == typeof e && (n = {
							uri: e
					})) : n = r({}, t, {
							uri: e
					}),
					n.callback = i,
					n
			}
			function o(e, t, i) {
					return u(t = s(e, t, i))
			}
			function u(e) {
					if (void 0 === e.callback)
							throw new Error("callback argument missing");
					var t = !1
						, i = function(i, n, r) {
							t || (t = !0,
							e.callback(i, n, r))
					};
					function n() {
							var e = void 0;
							if (e = l.response ? l.response : l.responseText || function(e) {
									try {
											if ("document" === e.responseType)
													return e.responseXML;
											var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
											if ("" === e.responseType && !t)
													return e.responseXML
									} catch (e) {}
									return null
							}(l),
							g)
									try {
											e = JSON.parse(e)
									} catch (e) {}
							return e
					}
					function r(e) {
							return clearTimeout(c),
							e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
							e.statusCode = 0,
							i(e, v)
					}
					function a() {
							if (!u) {
									var t;
									clearTimeout(c),
									t = e.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
									var r = v
										, a = null;
									return 0 !== t ? (r = {
											body: n(),
											statusCode: t,
											method: d,
											headers: {},
											url: h,
											rawRequest: l
									},
									l.getAllResponseHeaders && (r.headers = function(e) {
											var t = {};
											return e ? (e.trim().split("\n").forEach((function(e) {
													var i = e.indexOf(":")
														, n = e.slice(0, i).trim().toLowerCase()
														, r = e.slice(i + 1).trim();
													void 0 === t[n] ? t[n] = r : Array.isArray(t[n]) ? t[n].push(r) : t[n] = [t[n], r]
											}
											)),
											t) : t
									}(l.getAllResponseHeaders()))) : a = new Error("Internal XMLHttpRequest Error"),
									i(a, r, r.body)
							}
					}
					var s, u, l = e.xhr || null;
					l || (l = e.cors || e.useXDR ? new o.XDomainRequest : new o.XMLHttpRequest);
					var c, h = l.url = e.uri || e.url, d = l.method = e.method || "GET", p = e.body || e.data, f = l.headers = e.headers || {}, m = !!e.sync, g = !1, v = {
							body: void 0,
							headers: {},
							statusCode: 0,
							method: d,
							url: h,
							rawRequest: l
					};
					if ("json"in e && !1 !== e.json && (g = !0,
					f.accept || f.Accept || (f.Accept = "application/json"),
					"GET" !== d && "HEAD" !== d && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"),
					p = JSON.stringify(!0 === e.json ? p : e.json))),
					l.onreadystatechange = function() {
							4 === l.readyState && setTimeout(a, 0)
					}
					,
					l.onload = a,
					l.onerror = r,
					l.onprogress = function() {}
					,
					l.onabort = function() {
							u = !0
					}
					,
					l.ontimeout = r,
					l.open(d, h, !m, e.username, e.password),
					m || (l.withCredentials = !!e.withCredentials),
					!m && e.timeout > 0 && (c = setTimeout((function() {
							if (!u) {
									u = !0,
									l.abort("timeout");
									var e = new Error("XMLHttpRequest timeout");
									e.code = "ETIMEDOUT",
									r(e)
							}
					}
					), e.timeout)),
					l.setRequestHeader)
							for (s in f)
									f.hasOwnProperty(s) && l.setRequestHeader(s, f[s]);
					else if (e.headers && !function(e) {
							for (var t in e)
									if (e.hasOwnProperty(t))
											return !1;
							return !0
					}(e.headers))
							throw new Error("Headers cannot be set on an XDomainRequest object");
					return "responseType"in e && (l.responseType = e.responseType),
					"beforeSend"in e && "function" == typeof e.beforeSend && e.beforeSend(l),
					l.send(p || null),
					l
			}
			e.exports = o,
			e.exports.default = o,
			o.XMLHttpRequest = n.XMLHttpRequest || function() {}
			,
			o.XDomainRequest = "withCredentials"in new o.XMLHttpRequest ? o.XMLHttpRequest : n.XDomainRequest,
			function(e, t) {
					for (var i = 0; i < e.length; i++)
							t(e[i])
			}(["get", "put", "post", "patch", "head", "delete"], (function(e) {
					o["delete" === e ? "del" : e] = function(t, i, n) {
							return (i = s(t, i, n)).method = e.toUpperCase(),
							u(i)
					}
			}
			))
	},
	DnfW: function(e, t) {
			document.querySelectorAll("[data-show-element]").forEach((function(e) {
					e.addEventListener("click", (function(t) {
							t.preventDefault();
							var i = document.querySelector(e.hash);
							i && (i.style.display = e.hasAttribute("data-show-element-flex") ? "flex" : "block",
							i.scrollIntoView({
									behavior: "smooth"
							}))
					}
					))
			}
			))
	},
	EHsL: function(e, t) {
			var i, n, r;
			n = window.document.title,
			r = !1,
			window.addEventListener("blur", (function() {
					i = setInterval((function() {
							document.title = r ? n : window.App.unfocusedTitle,
							r = !r
					}
					), 1e3)
			}
			)),
			window.addEventListener("focus", (function() {
					clearInterval(i),
					document.title = n
			}
			))
	},
	H7XF: function(e, t, i) {
			"use strict";
			t.byteLength = function(e) {
					var t = l(e)
						, i = t[0]
						, n = t[1];
					return 3 * (i + n) / 4 - n
			}
			,
			t.toByteArray = function(e) {
					var t, i, n = l(e), s = n[0], o = n[1], u = new a(function(e, t, i) {
							return 3 * (t + i) / 4 - i
					}(0, s, o)), c = 0, h = o > 0 ? s - 4 : s;
					for (i = 0; i < h; i += 4)
							t = r[e.charCodeAt(i)] << 18 | r[e.charCodeAt(i + 1)] << 12 | r[e.charCodeAt(i + 2)] << 6 | r[e.charCodeAt(i + 3)],
							u[c++] = t >> 16 & 255,
							u[c++] = t >> 8 & 255,
							u[c++] = 255 & t;
					2 === o && (t = r[e.charCodeAt(i)] << 2 | r[e.charCodeAt(i + 1)] >> 4,
					u[c++] = 255 & t);
					1 === o && (t = r[e.charCodeAt(i)] << 10 | r[e.charCodeAt(i + 1)] << 4 | r[e.charCodeAt(i + 2)] >> 2,
					u[c++] = t >> 8 & 255,
					u[c++] = 255 & t);
					return u
			}
			,
			t.fromByteArray = function(e) {
					for (var t, i = e.length, r = i % 3, a = [], s = 0, o = i - r; s < o; s += 16383)
							a.push(c(e, s, s + 16383 > o ? o : s + 16383));
					1 === r ? (t = e[i - 1],
					a.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === r && (t = (e[i - 2] << 8) + e[i - 1],
					a.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
					return a.join("")
			}
			;
			for (var n = [], r = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, u = s.length; o < u; ++o)
					n[o] = s[o],
					r[s.charCodeAt(o)] = o;
			function l(e) {
					var t = e.length;
					if (t % 4 > 0)
							throw new Error("Invalid string. Length must be a multiple of 4");
					var i = e.indexOf("=");
					return -1 === i && (i = t),
					[i, i === t ? 0 : 4 - i % 4]
			}
			function c(e, t, i) {
					for (var r, a, s = [], o = t; o < i; o += 3)
							r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]),
							s.push(n[(a = r) >> 18 & 63] + n[a >> 12 & 63] + n[a >> 6 & 63] + n[63 & a]);
					return s.join("")
			}
			r["-".charCodeAt(0)] = 62,
			r["_".charCodeAt(0)] = 63
	},
	HA9e: function(e, t) {
			var i = document.querySelector("[data-scroll-to-top]");
			if (i) {
					var n = window.innerHeight;
					window.addEventListener("scroll", (function() {
							i.style.display = window.scrollY > n ? "flex" : "none"
					}
					)),
					i.addEventListener("click", (function() {
							!function e() {
									var t = document.documentElement.scrollTop || document.body.scrollTop;
									t > 0 && (window.requestAnimationFrame(e),
									window.scrollTo(0, t - t / 8))
							}()
					}
					))
			}
	},
	"JW/Y": function(e, t, i) {
			"use strict";
			var n = i("QykG")
				, r = function(e, t) {
					var i = 1;
					for (e > t && (i = -1); Math.abs(t - e) > 4294967296; )
							e += 8589934592 * i;
					return e
			}
				, a = function(e) {
					var t, i;
					a.prototype.init.call(this),
					this.type_ = e || "shared",
					this.push = function(e) {
							"shared" !== this.type_ && e.type !== this.type_ || (void 0 === i && (i = e.dts),
							e.dts = r(e.dts, i),
							e.pts = r(e.pts, i),
							t = e.dts,
							this.trigger("data", e))
					}
					,
					this.flush = function() {
							i = t,
							this.trigger("done")
					}
					,
					this.endTimeline = function() {
							this.flush(),
							this.trigger("endedtimeline")
					}
					,
					this.discontinuity = function() {
							i = void 0,
							t = void 0
					}
					,
					this.reset = function() {
							this.discontinuity(),
							this.trigger("reset")
					}
			};
			a.prototype = new n,
			e.exports = {
					TimestampRolloverStream: a,
					handleRollover: r
			}
	},
	K4wu: function(e, t, i) {
			var n = i("vgmO")
				, r = e.exports = {
					WebVTT: i("0CxO"),
					VTTCue: i("sDzi"),
					VTTRegion: i("+X0y")
			};
			n.vttjs = r,
			n.WebVTT = r.WebVTT;
			var a = r.VTTCue
				, s = r.VTTRegion
				, o = n.VTTCue
				, u = n.VTTRegion;
			r.shim = function() {
					n.VTTCue = a,
					n.VTTRegion = s
			}
			,
			r.restore = function() {
					n.VTTCue = o,
					n.VTTRegion = u
			}
			,
			n.VTTCue || r.shim()
	},
	KAYj: function(e, t, i) {
			"use strict";
			var n, r, a, s, o, u = i("f+Ey").toUnsigned, l = i("f+Ey").toHexString, c = i("mvqA");
			n = function(e) {
					return c.findBox(e, ["moov", "trak"]).reduce((function(e, t) {
							var i, n, r, a, s;
							return (i = c.findBox(t, ["tkhd"])[0]) ? (n = i[0],
							a = u(i[r = 0 === n ? 12 : 20] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]),
							(s = c.findBox(t, ["mdia", "mdhd"])[0]) ? (r = 0 === (n = s[0]) ? 12 : 20,
							e[a] = u(s[r] << 24 | s[r + 1] << 16 | s[r + 2] << 8 | s[r + 3]),
							e) : null) : null
					}
					), {})
			}
			,
			r = function(e, t) {
					var i, n, r;
					return i = c.findBox(t, ["moof", "traf"]),
					n = [].concat.apply([], i.map((function(t) {
							return c.findBox(t, ["tfhd"]).map((function(i) {
									var n, r;
									return n = u(i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7]),
									r = e[n] || 9e4,
									(c.findBox(t, ["tfdt"]).map((function(e) {
											var t, i;
											return t = e[0],
											i = u(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]),
											1 === t && (i *= Math.pow(2, 32),
											i += u(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])),
											i
									}
									))[0] || 1 / 0) / r
							}
							))
					}
					))),
					r = Math.min.apply(null, n),
					isFinite(r) ? r : 0
			}
			,
			a = function(e, t) {
					var i, n = c.findBox(t, ["moof", "traf"]), r = 0, a = 0;
					if (n && n.length)
							for (var s = c.parseTraf(n[0]), o = 0; o < s.boxes.length; o++)
									"tfhd" === s.boxes[o].type ? i = s.boxes[o].trackId : "tfdt" === s.boxes[o].type ? r = s.boxes[o].baseMediaDecodeTime : "trun" === s.boxes[o].type && s.boxes[o].samples.length && (a = s.boxes[o].samples[0].compositionTimeOffset || 0);
					return (r + a) / (e[i] || 9e4)
			}
			,
			s = function(e) {
					var t = c.findBox(e, ["moov", "trak"])
						, i = [];
					return t.forEach((function(e) {
							var t = c.findBox(e, ["mdia", "hdlr"])
								, n = c.findBox(e, ["tkhd"]);
							t.forEach((function(e, t) {
									var r, a, s = c.parseType(e.subarray(8, 12)), o = n[t];
									"vide" === s && (a = 0 === (r = new DataView(o.buffer,o.byteOffset,o.byteLength)).getUint8(0) ? r.getUint32(12) : r.getUint32(20),
									i.push(a))
							}
							))
					}
					)),
					i
			}
			,
			o = function(e) {
					var t = c.findBox(e, ["moov", "trak"])
						, i = [];
					return t.forEach((function(e) {
							var t, n, r = {}, a = c.findBox(e, ["tkhd"])[0];
							a && (n = (t = new DataView(a.buffer,a.byteOffset,a.byteLength)).getUint8(0),
							r.id = 0 === n ? t.getUint32(12) : t.getUint32(20));
							var s = c.findBox(e, ["mdia", "hdlr"])[0];
							if (s) {
									var o = c.parseType(s.subarray(8, 12));
									r.type = "vide" === o ? "video" : "soun" === o ? "audio" : o
							}
							var h = c.findBox(e, ["mdia", "minf", "stbl", "stsd"])[0];
							if (h) {
									var d = h.subarray(8);
									r.codec = c.parseType(d.subarray(4, 8));
									var p, f = c.findBox(d, [r.codec])[0];
									f && (/^[a-z]vc[1-9]$/i.test(r.codec) ? (p = f.subarray(78),
									"avcC" === c.parseType(p.subarray(4, 8)) && p.length > 11 ? (r.codec += ".",
									r.codec += l(p[9]),
									r.codec += l(p[10]),
									r.codec += l(p[11])) : r.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(r.codec) && (p = f.subarray(28),
									"esds" === c.parseType(p.subarray(4, 8)) && p.length > 20 && 0 !== p[19] ? (r.codec += "." + l(p[19]),
									r.codec += "." + l(p[20] >>> 2 & 63).replace(/^0/, "")) : r.codec = "mp4a.40.2"))
							}
							var m = c.findBox(e, ["mdia", "mdhd"])[0];
							if (m && a) {
									var g = 0 === n ? 12 : 20;
									r.timescale = u(m[g] << 24 | m[g + 1] << 16 | m[g + 2] << 8 | m[g + 3])
							}
							i.push(r)
					}
					)),
					i
			}
			,
			e.exports = {
					findBox: c.findBox,
					parseType: c.parseType,
					timescale: n,
					startTime: r,
					compositionStartTime: a,
					videoTrackIds: s,
					tracks: o
			}
	},
	KdhP: function(e, t, i) {
			function n(e) {
					this.options = e || {
							locator: {}
					}
			}
			function r() {
					this.cdata = !1
			}
			function a(e, t) {
					t.lineNumber = e.lineNumber,
					t.columnNumber = e.columnNumber
			}
			function s(e) {
					if (e)
							return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]"
			}
			function o(e, t, i) {
					return "string" == typeof e ? e.substr(t, i) : e.length >= t + i || t ? new java.lang.String(e,t,i) + "" : e
			}
			function u(e, t) {
					e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t)
			}
			n.prototype.parseFromString = function(e, t) {
					var i = this.options
						, n = new l
						, a = i.domBuilder || new r
						, o = i.errorHandler
						, u = i.locator
						, c = i.xmlns || {}
						, h = {
							lt: "<",
							gt: ">",
							amp: "&",
							quot: '"',
							apos: "'"
					};
					return u && a.setDocumentLocator(u),
					n.errorHandler = function(e, t, i) {
							if (!e) {
									if (t instanceof r)
											return t;
									e = t
							}
							var n = {}
								, a = e instanceof Function;
							function o(t) {
									var r = e[t];
									!r && a && (r = 2 == e.length ? function(i) {
											e(t, i)
									}
									: e),
									n[t] = r && function(e) {
											r("[xmldom " + t + "]\t" + e + s(i))
									}
									|| function() {}
							}
							return i = i || {},
							o("warning"),
							o("error"),
							o("fatalError"),
							n
					}(o, a, u),
					n.domBuilder = i.domBuilder || a,
					/\/x?html?$/.test(t) && (h.nbsp = " ",
					h.copy = "©",
					c[""] = "http://www.w3.org/1999/xhtml"),
					c.xml = c.xml || "http://www.w3.org/XML/1998/namespace",
					e ? n.parse(e, c, h) : n.errorHandler.error("invalid doc source"),
					a.doc
			}
			,
			r.prototype = {
					startDocument: function() {
							this.doc = (new c).createDocument(null, null, null),
							this.locator && (this.doc.documentURI = this.locator.systemId)
					},
					startElement: function(e, t, i, n) {
							var r = this.doc
								, s = r.createElementNS(e, i || t)
								, o = n.length;
							u(this, s),
							this.currentElement = s,
							this.locator && a(this.locator, s);
							for (var l = 0; l < o; l++) {
									e = n.getURI(l);
									var c = n.getValue(l)
										, h = (i = n.getQName(l),
									r.createAttributeNS(e, i));
									this.locator && a(n.getLocator(l), h),
									h.value = h.nodeValue = c,
									s.setAttributeNode(h)
							}
					},
					endElement: function(e, t, i) {
							var n = this.currentElement;
							n.tagName;
							this.currentElement = n.parentNode
					},
					startPrefixMapping: function(e, t) {},
					endPrefixMapping: function(e) {},
					processingInstruction: function(e, t) {
							var i = this.doc.createProcessingInstruction(e, t);
							this.locator && a(this.locator, i),
							u(this, i)
					},
					ignorableWhitespace: function(e, t, i) {},
					characters: function(e, t, i) {
							if (e = o.apply(this, arguments)) {
									if (this.cdata)
											var n = this.doc.createCDATASection(e);
									else
											n = this.doc.createTextNode(e);
									this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(e) && this.doc.appendChild(n),
									this.locator && a(this.locator, n)
							}
					},
					skippedEntity: function(e) {},
					endDocument: function() {
							this.doc.normalize()
					},
					setDocumentLocator: function(e) {
							(this.locator = e) && (e.lineNumber = 0)
					},
					comment: function(e, t, i) {
							e = o.apply(this, arguments);
							var n = this.doc.createComment(e);
							this.locator && a(this.locator, n),
							u(this, n)
					},
					startCDATA: function() {
							this.cdata = !0
					},
					endCDATA: function() {
							this.cdata = !1
					},
					startDTD: function(e, t, i) {
							var n = this.doc.implementation;
							if (n && n.createDocumentType) {
									var r = n.createDocumentType(e, t, i);
									this.locator && a(this.locator, r),
									u(this, r)
							}
					},
					warning: function(e) {
							console.warn("[xmldom warning]\t" + e, s(this.locator))
					},
					error: function(e) {
							console.error("[xmldom error]\t" + e, s(this.locator))
					},
					fatalError: function(e) {
							throw console.error("[xmldom fatalError]\t" + e, s(this.locator)),
							e
					}
			},
			"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, (function(e) {
					r.prototype[e] = function() {
							return null
					}
			}
			));
			var l = i("1h1e").XMLReader
				, c = t.DOMImplementation = i("dJxt").DOMImplementation;
			t.XMLSerializer = i("dJxt").XMLSerializer,
			t.DOMParser = n
	},
	NsZL: function(e, t) {
			var i, n, r, a, s, o, u;
			i = function(e) {
					return 9e4 * e
			}
			,
			n = function(e, t) {
					return e * t
			}
			,
			r = function(e) {
					return e / 9e4
			}
			,
			a = function(e, t) {
					return e / t
			}
			,
			s = function(e, t) {
					return i(a(e, t))
			}
			,
			o = function(e, t) {
					return n(r(e), t)
			}
			,
			u = function(e, t, i) {
					return r(i ? e : e - t)
			}
			,
			e.exports = {
					ONE_SECOND_IN_TS: 9e4,
					secondsToVideoTs: i,
					secondsToAudioTs: n,
					videoTsToSeconds: r,
					audioTsToSeconds: a,
					audioTsToVideoTs: s,
					videoTsToAudioTs: o,
					metadataTsToSeconds: u
			}
	},
	Nv4c: function(e, t) {
			document.querySelectorAll("[data-form]").forEach((function(e) {
					var t = e.querySelector("form")
						, i = e.querySelector("[data-form-error]")
						, n = e.querySelector("[data-form-success]");
					t && i && n && t.addEventListener("submit", (function(e) {
							e.preventDefault();
							var r = new XMLHttpRequest;
							r.onreadystatechange = function() {
									if (this.readyState === XMLHttpRequest.DONE)
											if (422 !== this.status)
													200 === this.status ? (t.style.display = "none",
													i.style.display = "none",
													n.style.display = "block") : (i.style.display = "block",
													n.style.display = "none");
											else {
													var e = JSON.parse(this.response);
													t.querySelectorAll("[data-form-field-error]").forEach((function(t) {
															var i = t.id.slice(0, -5);
															t.innerHTML = e.hasOwnProperty(i) ? e[i] : "",
															t.style.display = e.hasOwnProperty(i) ? "block" : "none"
													}
													))
											}
							}
							,
							r.open("POST", t.action, !0),
							r.send(new FormData(t))
					}
					))
			}
			))
	},
	O61S: function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("p46w")
				, r = i.n(n);
			!function() {
					var e = document.querySelector("[data-cta]")
						, t = document.querySelector("[data-cta-hide]");
					if (e && !1 !== window.App.ctaTimer) {
							var i = r.a.get("visited")
								, n = parseInt(i)
								, a = (new Date).getTime()
								, s = 1e3 * (void 0 !== n && n + 6e4 <= a ? 60 : window.App.ctaTimer);
							void 0 === i && r.a.set("visited", (new Date).getTime(), {
									expires: 365
							}),
							setTimeout((function() {
									var i = setInterval((function() {
											void 0 !== window.playerReady && (e.style.display = "flex",
											t && (t.style.display = "none"),
											getStarted(),
											clearInterval(i))
									}
									), 100)
							}
							), s)
					}
			}()
	},
	PJYZ: function(e, t) {
			e.exports = function(e) {
					if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
			}
	},
	PaVT: function(e, t, i) {
			"use strict";
			i.r(t),
			window._wq = window._wq || [];
			var n = function() {
					this.el = document.querySelector("[data-player]"),
					this.enabled = null !== this.el,
					this.isReady = !1
			};
			n.prototype = {
					ready: function(e) {
							var t = this;
							_wq.push({
									id: window.App.videoId,
									onReady: function(i) {
											t.player = i,
											t.isReady = !0,
											e.call(t)
									}
							})
					},
					onPlay: function(e) {
							this.player.bind("play", e)
					},
					onPause: function(e) {
							this.player.bind("pause", e)
					},
					play: function() {
							this.isReady && this.player.play()
					},
					pause: function() {
							this.isReady && this.player.pause()
					},
					mute: function() {
							this.isReady && this.player.mute()
					},
					unmute: function() {
							this.isReady && this.player.unmute()
					}
			},
			t.default = n
	},
	Qj6V: function(e, t, i) {
			"use strict";
			var n = i("rnXk")
				, r = function(e) {
					var t = 31 & e[1];
					return t <<= 8,
					t |= e[2]
			}
				, a = function(e) {
					return !!(64 & e[1])
			}
				, s = function(e) {
					var t = 0;
					return (48 & e[3]) >>> 4 > 1 && (t += e[4] + 1),
					t
			}
				, o = function(e) {
					switch (e) {
					case 5:
							return "slice_layer_without_partitioning_rbsp_idr";
					case 6:
							return "sei_rbsp";
					case 7:
							return "seq_parameter_set_rbsp";
					case 8:
							return "pic_parameter_set_rbsp";
					case 9:
							return "access_unit_delimiter_rbsp";
					default:
							return null
					}
			};
			e.exports = {
					parseType: function(e, t) {
							var i = r(e);
							return 0 === i ? "pat" : i === t ? "pmt" : t ? "pes" : null
					},
					parsePat: function(e) {
							var t = a(e)
								, i = 4 + s(e);
							return t && (i += e[i] + 1),
							(31 & e[i + 10]) << 8 | e[i + 11]
					},
					parsePmt: function(e) {
							var t = {}
								, i = a(e)
								, n = 4 + s(e);
							if (i && (n += e[n] + 1),
							1 & e[n + 5]) {
									var r;
									r = 3 + ((15 & e[n + 1]) << 8 | e[n + 2]) - 4;
									for (var o = 12 + ((15 & e[n + 10]) << 8 | e[n + 11]); o < r; ) {
											var u = n + o;
											t[(31 & e[u + 1]) << 8 | e[u + 2]] = e[u],
											o += 5 + ((15 & e[u + 3]) << 8 | e[u + 4])
									}
									return t
							}
					},
					parsePayloadUnitStartIndicator: a,
					parsePesType: function(e, t) {
							switch (t[r(e)]) {
							case n.H264_STREAM_TYPE:
									return "video";
							case n.ADTS_STREAM_TYPE:
									return "audio";
							case n.METADATA_STREAM_TYPE:
									return "timed-metadata";
							default:
									return null
							}
					},
					parsePesTime: function(e) {
							if (!a(e))
									return null;
							var t = 4 + s(e);
							if (t >= e.byteLength)
									return null;
							var i, n = null;
							return 192 & (i = e[t + 7]) && ((n = {}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3,
							n.pts *= 4,
							n.pts += (6 & e[t + 13]) >>> 1,
							n.dts = n.pts,
							64 & i && (n.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3,
							n.dts *= 4,
							n.dts += (6 & e[t + 18]) >>> 1)),
							n
					},
					videoPacketContainsKeyFrame: function(e) {
							for (var t = 4 + s(e), i = e.subarray(t), n = 0, r = 0, a = !1; r < i.byteLength - 3; r++)
									if (1 === i[r + 2]) {
											n = r + 5;
											break
									}
							for (; n < i.byteLength; )
									switch (i[n]) {
									case 0:
											if (0 !== i[n - 1]) {
													n += 2;
													break
											}
											if (0 !== i[n - 2]) {
													n++;
													break
											}
											r + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === o(31 & i[r + 3]) && (a = !0);
											do {
													n++
											} while (1 !== i[n] && n < i.length);
											r = n - 2,
											n += 3;
											break;
									case 1:
											if (0 !== i[n - 1] || 0 !== i[n - 2]) {
													n += 3;
													break
											}
											"slice_layer_without_partitioning_rbsp_idr" === o(31 & i[r + 3]) && (a = !0),
											r = n - 2,
											n += 3;
											break;
									default:
											n += 3
									}
							return i = i.subarray(r),
							n -= r,
							r = 0,
							i && i.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === o(31 & i[r + 3]) && (a = !0),
							a
					}
			}
	},
	QykG: function(e, t, i) {
			"use strict";
			var n = function() {
					this.init = function() {
							var e = {};
							this.on = function(t, i) {
									e[t] || (e[t] = []),
									e[t] = e[t].concat(i)
							}
							,
							this.off = function(t, i) {
									var n;
									return !!e[t] && (n = e[t].indexOf(i),
									e[t] = e[t].slice(),
									e[t].splice(n, 1),
									n > -1)
							}
							,
							this.trigger = function(t) {
									var i, n, r, a;
									if (i = e[t])
											if (2 === arguments.length)
													for (r = i.length,
													n = 0; n < r; ++n)
															i[n].call(this, arguments[1]);
											else {
													for (a = [],
													n = arguments.length,
													n = 1; n < arguments.length; ++n)
															a.push(arguments[n]);
													for (r = i.length,
													n = 0; n < r; ++n)
															i[n].apply(this, a)
											}
							}
							,
							this.dispose = function() {
									e = {}
							}
					}
			};
			n.prototype.pipe = function(e) {
					return this.on("data", (function(t) {
							e.push(t)
					}
					)),
					this.on("done", (function(t) {
							e.flush(t)
					}
					)),
					this.on("partialdone", (function(t) {
							e.partialFlush(t)
					}
					)),
					this.on("endedtimeline", (function(t) {
							e.endTimeline(t)
					}
					)),
					this.on("reset", (function(t) {
							e.reset(t)
					}
					)),
					e
			}
			,
			n.prototype.push = function(e) {
					this.trigger("data", e)
			}
			,
			n.prototype.flush = function(e) {
					this.trigger("done", e)
			}
			,
			n.prototype.partialFlush = function(e) {
					this.trigger("partialdone", e)
			}
			,
			n.prototype.endTimeline = function(e) {
					this.trigger("endedtimeline", e)
			}
			,
			n.prototype.reset = function(e) {
					this.trigger("reset", e)
			}
			,
			e.exports = n
	},
	SQjN: function(e, t) {
			!function() {
					var e = function(e) {
							var t = e.querySelector("iframe");
							e.querySelector("[data-youtube-container]").style.height = t.offsetHeight - 122 + "px"
					};
					window.resizePlayers = function(t) {
							var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
							setTimeout((function() {
									t.querySelectorAll("[data-youtube-embed]:not(.is-plain)").forEach((function(t) {
											e(t)
									}
									))
							}
							), i)
					}
					;
					document.querySelectorAll("[data-youtube-embed]:not(.is-plain)").forEach((function(t) {
							t.querySelector("iframe").onload = function() {
									e(t),
									window.addEventListener("resize", _debounce((function() {
											e(t)
									}
									), 250))
							}
					}
					))
			}()
	},
	SksO: function(e, t) {
			function i(t, n) {
					return e.exports = i = Object.setPrototypeOf || function(e, t) {
							return e.__proto__ = t,
							e
					}
					,
					i(t, n)
			}
			e.exports = i
	},
	Tmm6: function(e, t, i) {
			"use strict";
			var n = i("QykG")
				, r = i("3G1x")
				, a = function() {
					a.prototype.init.call(this),
					this.captionPackets_ = [],
					this.ccStreams_ = [new c(0,0), new c(0,1), new c(1,0), new c(1,1)],
					this.reset(),
					this.ccStreams_.forEach((function(e) {
							e.on("data", this.trigger.bind(this, "data")),
							e.on("partialdone", this.trigger.bind(this, "partialdone")),
							e.on("done", this.trigger.bind(this, "done"))
					}
					), this)
			};
			a.prototype = new n,
			a.prototype.push = function(e) {
					var t, i, n;
					if ("sei_rbsp" === e.nalUnitType && (t = r.parseSei(e.escapedRBSP)).payloadType === r.USER_DATA_REGISTERED_ITU_T_T35 && (i = r.parseUserData(t)))
							if (e.dts < this.latestDts_)
									this.ignoreNextEqualDts_ = !0;
							else {
									if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_)
											return this.numSameDts_--,
											void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
									n = r.parseCaptionPackets(e.pts, i),
									this.captionPackets_ = this.captionPackets_.concat(n),
									this.latestDts_ !== e.dts && (this.numSameDts_ = 0),
									this.numSameDts_++,
									this.latestDts_ = e.dts
							}
			}
			,
			a.prototype.flushCCStreams = function(e) {
					this.ccStreams_.forEach((function(t) {
							return "flush" === e ? t.flush() : t.partialFlush()
					}
					), this)
			}
			,
			a.prototype.flushStream = function(e) {
					this.captionPackets_.length ? (this.captionPackets_.forEach((function(e, t) {
							e.presortIndex = t
					}
					)),
					this.captionPackets_.sort((function(e, t) {
							return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
					}
					)),
					this.captionPackets_.forEach((function(e) {
							e.type < 2 && this.dispatchCea608Packet(e)
					}
					), this),
					this.captionPackets_.length = 0,
					this.flushCCStreams(e)) : this.flushCCStreams(e)
			}
			,
			a.prototype.flush = function() {
					return this.flushStream("flush")
			}
			,
			a.prototype.partialFlush = function() {
					return this.flushStream("partialFlush")
			}
			,
			a.prototype.reset = function() {
					this.latestDts_ = null,
					this.ignoreNextEqualDts_ = !1,
					this.numSameDts_ = 0,
					this.activeCea608Channel_ = [null, null],
					this.ccStreams_.forEach((function(e) {
							e.reset()
					}
					))
			}
			,
			a.prototype.dispatchCea608Packet = function(e) {
					this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null : this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
					null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
			}
			,
			a.prototype.setsChannel1Active = function(e) {
					return 4096 == (30720 & e.ccData)
			}
			,
			a.prototype.setsChannel2Active = function(e) {
					return 6144 == (30720 & e.ccData)
			}
			,
			a.prototype.setsTextOrXDSActive = function(e) {
					return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 == (30974 & e.ccData)
			}
			;
			var s = {
					42: 225,
					92: 233,
					94: 237,
					95: 243,
					96: 250,
					123: 231,
					124: 247,
					125: 209,
					126: 241,
					127: 9608,
					304: 174,
					305: 176,
					306: 189,
					307: 191,
					308: 8482,
					309: 162,
					310: 163,
					311: 9834,
					312: 224,
					313: 160,
					314: 232,
					315: 226,
					316: 234,
					317: 238,
					318: 244,
					319: 251,
					544: 193,
					545: 201,
					546: 211,
					547: 218,
					548: 220,
					549: 252,
					550: 8216,
					551: 161,
					552: 42,
					553: 39,
					554: 8212,
					555: 169,
					556: 8480,
					557: 8226,
					558: 8220,
					559: 8221,
					560: 192,
					561: 194,
					562: 199,
					563: 200,
					564: 202,
					565: 203,
					566: 235,
					567: 206,
					568: 207,
					569: 239,
					570: 212,
					571: 217,
					572: 249,
					573: 219,
					574: 171,
					575: 187,
					800: 195,
					801: 227,
					802: 205,
					803: 204,
					804: 236,
					805: 210,
					806: 242,
					807: 213,
					808: 245,
					809: 123,
					810: 125,
					811: 92,
					812: 94,
					813: 95,
					814: 124,
					815: 126,
					816: 196,
					817: 228,
					818: 214,
					819: 246,
					820: 223,
					821: 165,
					822: 164,
					823: 9474,
					824: 197,
					825: 229,
					826: 216,
					827: 248,
					828: 9484,
					829: 9488,
					830: 9492,
					831: 9496
			}
				, o = function(e) {
					return null === e ? "" : (e = s[e] || e,
					String.fromCharCode(e))
			}
				, u = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152]
				, l = function() {
					for (var e = [], t = 15; t--; )
							e.push("");
					return e
			}
				, c = function(e, t) {
					c.prototype.init.call(this),
					this.field_ = e || 0,
					this.dataChannel_ = t || 0,
					this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)),
					this.setConstants(),
					this.reset(),
					this.push = function(e) {
							var t, i, n, r, a;
							if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
									if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null),
									n = t >>> 8,
									r = 255 & t,
									t !== this.PADDING_)
											if (t === this.RESUME_CAPTION_LOADING_)
													this.mode_ = "popOn";
											else if (t === this.END_OF_CAPTION_)
													this.mode_ = "popOn",
													this.clearFormatting(e.pts),
													this.flushDisplayed(e.pts),
													i = this.displayed_,
													this.displayed_ = this.nonDisplayed_,
													this.nonDisplayed_ = i,
													this.startPts_ = e.pts;
											else if (t === this.ROLL_UP_2_ROWS_)
													this.rollUpRows_ = 2,
													this.setRollUp(e.pts);
											else if (t === this.ROLL_UP_3_ROWS_)
													this.rollUpRows_ = 3,
													this.setRollUp(e.pts);
											else if (t === this.ROLL_UP_4_ROWS_)
													this.rollUpRows_ = 4,
													this.setRollUp(e.pts);
											else if (t === this.CARRIAGE_RETURN_)
													this.clearFormatting(e.pts),
													this.flushDisplayed(e.pts),
													this.shiftRowsUp_(),
													this.startPts_ = e.pts;
											else if (t === this.BACKSPACE_)
													"popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
											else if (t === this.ERASE_DISPLAYED_MEMORY_)
													this.flushDisplayed(e.pts),
													this.displayed_ = l();
											else if (t === this.ERASE_NON_DISPLAYED_MEMORY_)
													this.nonDisplayed_ = l();
											else if (t === this.RESUME_DIRECT_CAPTIONING_)
													"paintOn" !== this.mode_ && (this.flushDisplayed(e.pts),
													this.displayed_ = l()),
													this.mode_ = "paintOn",
													this.startPts_ = e.pts;
											else if (this.isSpecialCharacter(n, r))
													a = o((n = (3 & n) << 8) | r),
													this[this.mode_](e.pts, a),
													this.column_++;
											else if (this.isExtCharacter(n, r))
													"popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1),
													a = o((n = (3 & n) << 8) | r),
													this[this.mode_](e.pts, a),
													this.column_++;
											else if (this.isMidRowCode(n, r))
													this.clearFormatting(e.pts),
													this[this.mode_](e.pts, " "),
													this.column_++,
													14 == (14 & r) && this.addFormatting(e.pts, ["i"]),
													1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
											else if (this.isOffsetControlCode(n, r))
													this.column_ += 3 & r;
											else if (this.isPAC(n, r)) {
													var s = u.indexOf(7968 & t);
													"rollUp" === this.mode_ && (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1),
													this.setRollUp(e.pts, s)),
													s !== this.row_ && (this.clearFormatting(e.pts),
													this.row_ = s),
													1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]),
													16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
													this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
											} else
													this.isNormalChar(n) && (0 === r && (r = null),
													a = o(n),
													a += o(r),
													this[this.mode_](e.pts, a),
													this.column_ += a.length)
							} else
									this.lastControlCode_ = null
					}
			};
			c.prototype = new n,
			c.prototype.flushDisplayed = function(e) {
					var t = this.displayed_.map((function(e) {
							try {
									return e.trim()
							} catch (e) {
									return console.error("Skipping malformed caption."),
									""
							}
					}
					)).join("\n").replace(/^\n+|\n+$/g, "");
					t.length && this.trigger("data", {
							startPts: this.startPts_,
							endPts: e,
							text: t,
							stream: this.name_
					})
			}
			,
			c.prototype.reset = function() {
					this.mode_ = "popOn",
					this.topRow_ = 0,
					this.startPts_ = 0,
					this.displayed_ = l(),
					this.nonDisplayed_ = l(),
					this.lastControlCode_ = null,
					this.column_ = 0,
					this.row_ = 14,
					this.rollUpRows_ = 2,
					this.formatting_ = []
			}
			,
			c.prototype.setConstants = function() {
					0 === this.dataChannel_ ? (this.BASE_ = 16,
					this.EXT_ = 17,
					this.CONTROL_ = (20 | this.field_) << 8,
					this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24,
					this.EXT_ = 25,
					this.CONTROL_ = (28 | this.field_) << 8,
					this.OFFSET_ = 31),
					this.PADDING_ = 0,
					this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_,
					this.END_OF_CAPTION_ = 47 | this.CONTROL_,
					this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_,
					this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_,
					this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_,
					this.CARRIAGE_RETURN_ = 45 | this.CONTROL_,
					this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_,
					this.BACKSPACE_ = 33 | this.CONTROL_,
					this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_,
					this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
			}
			,
			c.prototype.isSpecialCharacter = function(e, t) {
					return e === this.EXT_ && t >= 48 && t <= 63
			}
			,
			c.prototype.isExtCharacter = function(e, t) {
					return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && t <= 63
			}
			,
			c.prototype.isMidRowCode = function(e, t) {
					return e === this.EXT_ && t >= 32 && t <= 47
			}
			,
			c.prototype.isOffsetControlCode = function(e, t) {
					return e === this.OFFSET_ && t >= 33 && t <= 35
			}
			,
			c.prototype.isPAC = function(e, t) {
					return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && t <= 127
			}
			,
			c.prototype.isColorPAC = function(e) {
					return e >= 64 && e <= 79 || e >= 96 && e <= 127
			}
			,
			c.prototype.isNormalChar = function(e) {
					return e >= 32 && e <= 127
			}
			,
			c.prototype.setRollUp = function(e, t) {
					if ("rollUp" !== this.mode_ && (this.row_ = 14,
					this.mode_ = "rollUp",
					this.flushDisplayed(e),
					this.nonDisplayed_ = l(),
					this.displayed_ = l()),
					void 0 !== t && t !== this.row_)
							for (var i = 0; i < this.rollUpRows_; i++)
									this.displayed_[t - i] = this.displayed_[this.row_ - i],
									this.displayed_[this.row_ - i] = "";
					void 0 === t && (t = this.row_),
					this.topRow_ = t - this.rollUpRows_ + 1
			}
			,
			c.prototype.addFormatting = function(e, t) {
					this.formatting_ = this.formatting_.concat(t);
					var i = t.reduce((function(e, t) {
							return e + "<" + t + ">"
					}
					), "");
					this[this.mode_](e, i)
			}
			,
			c.prototype.clearFormatting = function(e) {
					if (this.formatting_.length) {
							var t = this.formatting_.reverse().reduce((function(e, t) {
									return e + "</" + t + ">"
							}
							), "");
							this.formatting_ = [],
							this[this.mode_](e, t)
					}
			}
			,
			c.prototype.popOn = function(e, t) {
					var i = this.nonDisplayed_[this.row_];
					i += t,
					this.nonDisplayed_[this.row_] = i
			}
			,
			c.prototype.rollUp = function(e, t) {
					var i = this.displayed_[this.row_];
					i += t,
					this.displayed_[this.row_] = i
			}
			,
			c.prototype.shiftRowsUp_ = function() {
					var e;
					for (e = 0; e < this.topRow_; e++)
							this.displayed_[e] = "";
					for (e = this.row_ + 1; e < 15; e++)
							this.displayed_[e] = "";
					for (e = this.topRow_; e < this.row_; e++)
							this.displayed_[e] = this.displayed_[e + 1];
					this.displayed_[this.row_] = ""
			}
			,
			c.prototype.paintOn = function(e, t) {
					var i = this.displayed_[this.row_];
					i += t,
					this.displayed_[this.row_] = i
			}
			,
			e.exports = {
					CaptionStream: a,
					Cea608Stream: c
			}
	},
	UL75: function(e, t) {
			window.Dropdown = function(e) {
					this.dropdown = e,
					this.dropdownContent = e.querySelector("[data-dropdown-content]"),
					this.handleToggle(),
					this.handleClickOutside()
			}
			,
			Dropdown.prototype = {
					open: function() {
							this.dropdown.classList.add("open"),
							this.dropdownContent.classList.add("open")
					},
					close: function() {
							this.dropdown.classList.remove("open"),
							this.dropdownContent.classList.remove("open")
					},
					isOpen: function() {
							return this.dropdown.classList.contains("open")
					},
					handleToggle: function() {
							var e = this;
							this.dropdown.querySelector("[data-dropdown-toggle]").addEventListener("click", (function(t) {
									t.preventDefault(),
									e.isOpen() ? e.close() : e.open()
							}
							))
					},
					handleClickOutside: function() {
							var e = this;
							document.addEventListener("click", (function(t) {
									if (e.isOpen()) {
											e.dropdown;
											var i = t.target;
											if (i.closest("[data-dropdown-content]"))
													return e.close();
											do {
													if (i == e.dropdown)
															return;
													i = i.parentNode
											} while (i);
											e.close()
									}
							}
							))
					}
			},
			document.querySelectorAll("[data-dropdown]").forEach((function(e) {
					new Dropdown(e)
			}
			))
	},
	VbXa: function(e, t) {
			e.exports = function(e, t) {
					e.prototype = Object.create(t.prototype),
					e.prototype.constructor = e,
					e.__proto__ = t
			}
	},
	"X8+f": function(e, t, i) {
			"use strict";
			function n(e) {
					return e && "object" == typeof e && "default"in e ? e.default : e
			}
			var r = n(i("0Tbm"))
				, a = n(i("vgmO"));
			e.exports = function(e, t) {
					return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = r.buildAbsoluteURL(a.location && a.location.href || "", e)),
					r.buildAbsoluteURL(e, t))
			}
	},
	XDow: function(e, t) {
			!function() {
					var e = document.querySelector("[data-buy-button]")
						, t = document.querySelector("[data-buy-button-price]")
						, i = document.querySelector("[data-product-addon1]")
						, n = document.querySelector("[data-product-addon2]");
					if (e && t && i && n) {
							var r = function() {
									var r = "base";
									i.checked && (r = "addon1"),
									n.checked && (r = "addon2"),
									i.checked && n.checked && (r = "full"),
									t.innerHTML = App.productVariants[r][0],
									e.href = App.productVariants[r][1]
							};
							i.addEventListener("click", r),
							n.addEventListener("click", r)
					}
			}()
	},
	YvAh: function(e, t, i) {
			"use strict";
			var n;
			function r(e, t, i) {
					return t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
					}) : e[t] = i,
					e
			}
			i.r(t);
			var a = i("8OJ3").default
				, s = function() {
					this.el = document.querySelector("[data-player] .video-js"),
					this.enabled = null !== this.el,
					this.el && (this.player = a(this.el, {
							preload: "auto",
							controls: !1,
							loop: !1,
							autoplay: !0
					}),
					this.handleClickToPause())
			};
			s.prototype = (r(n = {
					ready: function(e) {
							this.player.ready(e)
					},
					onPause: function(e) {
							this.player.on("pause", e)
					}
			}, "onPause", (function(e) {
					this.player.on("pause", e)
			}
			)),
			r(n, "play", (function() {
					this.player.play()
			}
			)),
			r(n, "pause", (function() {
					this.player.pause()
			}
			)),
			r(n, "mute", (function() {
					this.player.muted(!0)
			}
			)),
			r(n, "unmute", (function() {
					this.player.muted(!1)
			}
			)),
			r(n, "handleClickToPause", (function() {
					var e = this;
					this.el.addEventListener("click", (function() {
							e.player.paused() ? e.player.play() : e.player.pause()
					}
					))
			}
			)),
			n),
			t.default = s
	},
	bD3e: function(e, t) {
			!function() {
					var e = document.querySelector("[data-members-area]")
						, t = document.querySelector("[data-members-area-loader]");
					if ((e || t) && (!e || t)) {
							var i, n = 1;
							i = setInterval((function() {
									if (n > 5)
											window.location = "/login";
									else {
											var e = new XMLHttpRequest;
											e.addEventListener("load", (function() {
													JSON.parse(this.responseText).ready && (location.reload(!0),
													clearInterval(i)),
													n++
											}
											)),
											e.open("GET", "/members/check"),
											e.send()
									}
							}
							), 1e3)
					}
			}()
	},
	bUC5: function(e, t, i) {
			//i("7MRW"),
			i("o0O0"),
			//i("c6qX"),
			//i("UL75"),
			//i("Nv4c"),
			//i("co6R"),
			i("8VTv")
			//i("O61S"),
			//i("HA9e"),
			//i("XDow"),
			//i("bD3e"),
			//i("DnfW"),
			//i("EHsL"),
			//i("lhgG"),
			//i("SQjN"),
			//i("6NT9"),
			//i("blvv")
	},
	blvv: function(e, t) {
			window.hideTranscriptButton = function() {
					var e = document.querySelector("[data-transcript-button]");
					e && (e.style.display = "none")
			}
	},
	c6qX: function(e, t) {
			window.modalZIndex = 9998,
			window.modals = {
					open: 0,
					list: {}
			},
			window.Modal = function(e) {
					this.name = e.id,
					this.modal = e,
					this.handleActions(),
					this.handleClose()
			}
			,
			window.Modal.prototype = {
					open: function() {
							var e = this;
							this.modal.style.display = "block",
							this.modal.classList.add("modal-enter"),
							setTimeout((function() {
									e.modal.classList.remove("modal-enter")
							}
							), 100),
							this.modal.setAttribute("data-open", !0),
							document.body.style.overflow = "hidden",
							window.modals.open++,
							window.player && window.player.pause()
					},
					close: function() {
							var e = this;
							this.modal.classList.add("modal-enter"),
							setTimeout((function() {
									e.modal.classList.remove("modal-enter"),
									e.modal.style.display = "none"
							}
							), 100),
							this.modal.removeAttribute("data-open"),
							window.modals.open--,
							0 === window.modals.open && (document.body.style.overflow = "auto",
							window.player && window.player.play())
					},
					isOpen: function() {
							return this.modal.getAttribute("data-open")
					},
					handleActions: function() {
							var e = this;
							this.modal.querySelectorAll("[data-modal-action]").forEach((function(t) {
									t.addEventListener("click", (function(i) {
											var n = t.hash;
											n.length && (i.preventDefault(),
											"#close" !== n && openModal(n.substr(1)),
											setTimeout((function() {
													e.close()
											}
											), 150))
									}
									))
							}
							))
					},
					handleClose: function() {
							var e = this;
							this.modal.querySelectorAll("[data-modal-close]").forEach((function(t) {
									t.addEventListener("click", (function(t) {
											t.preventDefault(),
											e.close()
									}
									))
							}
							))
					}
			},
			window.getModal = function(e) {
					if (!window.modals.list.hasOwnProperty(e)) {
							var t = Array.prototype.slice.call(document.querySelectorAll("[data-modal]")).filter((function(t) {
									return t.id === e + "Modal"
							}
							));
							t.length && (window.modals.list[e] = new Modal(t[0]))
					}
					return window.modals.list[e]
			}
			,
			window.openModal = function(e) {
					var t = window.getModal(e);
					t.isOpen() || t.open(),
					t.modal.style.zIndex = window.modalZIndex,
					window.modalZIndex++
			}
			,
			window.closeModal = function(e) {
					var t = window.getModal(e);
					t.close(),
					window.modalZIndex--,
					t.modal.style.zIndex = window.modalZIndex
			}
	},
	co6R: function(e, t) {
			!function() {
					if ("0" !== getUrlParameter("exit", "1") && null !== App.exitPopup) {
							var e = !1;
							if (window.showExitPopup = function(t) {
									if (t.clientY <= 0) {
											var i = window.getModal("transcript");
											e || i && (!i || i.isOpen()) || (openModal(App.exitPopup + "ExitPopup"),
											e = !0),
											i && i.isOpen() && window.getModal("transcriptExitPopup") && openModal("transcriptExitPopup")
									}
							}
							,
							App.softExitPopup && document.querySelector("html").addEventListener("mouseleave", window.showExitPopup),
							App.hardExitPopup) {
									for (var t = !1, i = document.getElementsByTagName("A"), n = 0; n < i.length; n++)
											"_blank" !== i[n].target ? "function" != typeof i[n].onclick && (i[n].onclick = function() {
													t = !0
											}
											) : "function" != typeof i[n].onclick && (i[n].onclick = function() {
													t = !1
											}
											);
									window.onbeforeunload = function() {
											if (!t)
													return window.scrollTo(0, 0),
													window.onbeforeunload = function() {
															t = !0
													}
													,
													window.showExitPopup(),
													"Wait! We have this awesome new offer"
									}
							}
					} else
							window.showExitPopup = function() {}
			}()
	},
	dJxt: function(e, t) {
			function i(e, t) {
					for (var i in e)
							t[i] = e[i]
			}
			function n(e, t) {
					var n = e.prototype;
					if (Object.create) {
							var r = Object.create(t.prototype);
							n.__proto__ = r
					}
					if (!(n instanceof t)) {
							function a() {}
							a.prototype = t.prototype,
							i(n, a = new a),
							e.prototype = n = a
					}
					n.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e),
					n.constructor = e)
			}
			var r = {}
				, a = r.ELEMENT_NODE = 1
				, s = r.ATTRIBUTE_NODE = 2
				, o = r.TEXT_NODE = 3
				, u = r.CDATA_SECTION_NODE = 4
				, l = r.ENTITY_REFERENCE_NODE = 5
				, c = r.ENTITY_NODE = 6
				, h = r.PROCESSING_INSTRUCTION_NODE = 7
				, d = r.COMMENT_NODE = 8
				, p = r.DOCUMENT_NODE = 9
				, f = r.DOCUMENT_TYPE_NODE = 10
				, m = r.DOCUMENT_FRAGMENT_NODE = 11
				, g = r.NOTATION_NODE = 12
				, v = {}
				, y = {}
				, _ = (v.INDEX_SIZE_ERR = (y[1] = "Index size error",
			1),
			v.DOMSTRING_SIZE_ERR = (y[2] = "DOMString size error",
			2),
			v.HIERARCHY_REQUEST_ERR = (y[3] = "Hierarchy request error",
			3))
				, b = (v.WRONG_DOCUMENT_ERR = (y[4] = "Wrong document",
			4),
			v.INVALID_CHARACTER_ERR = (y[5] = "Invalid character",
			5),
			v.NO_DATA_ALLOWED_ERR = (y[6] = "No data allowed",
			6),
			v.NO_MODIFICATION_ALLOWED_ERR = (y[7] = "No modification allowed",
			7),
			v.NOT_FOUND_ERR = (y[8] = "Not found",
			8))
				, T = (v.NOT_SUPPORTED_ERR = (y[9] = "Not supported",
			9),
			v.INUSE_ATTRIBUTE_ERR = (y[10] = "Attribute in use",
			10));
			v.INVALID_STATE_ERR = (y[11] = "Invalid state",
			11),
			v.SYNTAX_ERR = (y[12] = "Syntax error",
			12),
			v.INVALID_MODIFICATION_ERR = (y[13] = "Invalid modification",
			13),
			v.NAMESPACE_ERR = (y[14] = "Invalid namespace",
			14),
			v.INVALID_ACCESS_ERR = (y[15] = "Invalid access",
			15);
			function S(e, t) {
					if (t instanceof Error)
							var i = t;
					else
							i = this,
							Error.call(this, y[e]),
							this.message = y[e],
							Error.captureStackTrace && Error.captureStackTrace(this, S);
					return i.code = e,
					t && (this.message = this.message + ": " + t),
					i
			}
			function w() {}
			function k(e, t) {
					this._node = e,
					this._refresh = t,
					E(this)
			}
			function E(e) {
					var t = e._node._inc || e._node.ownerDocument._inc;
					if (e._inc != t) {
							var n = e._refresh(e._node);
							te(e, "length", n.length),
							i(n, e),
							e._inc = t
					}
			}
			function C() {}
			function A(e, t) {
					for (var i = e.length; i--; )
							if (e[i] === t)
									return i
			}
			function x(e, t, i, n) {
					if (n ? t[A(t, n)] = i : t[t.length++] = i,
					e) {
							i.ownerElement = e;
							var r = e.ownerDocument;
							r && (n && N(r, e, n),
							function(e, t, i) {
									e && e._inc++,
									"http://www.w3.org/2000/xmlns/" == i.namespaceURI && (t._nsMap[i.prefix ? i.localName : ""] = i.value)
							}(r, e, i))
					}
			}
			function O(e, t, i) {
					var n = A(t, i);
					if (!(n >= 0))
							throw S(b, new Error(e.tagName + "@" + i));
					for (var r = t.length - 1; n < r; )
							t[n] = t[++n];
					if (t.length = r,
					e) {
							var a = e.ownerDocument;
							a && (N(a, e, i),
							i.ownerElement = null)
					}
			}
			function P(e) {
					if (this._features = {},
					e)
							for (var t in e)
									this._features = e[t]
			}
			function I() {}
			function L(e) {
					return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";"
			}
			function D(e, t) {
					if (t(e))
							return !0;
					if (e = e.firstChild)
							do {
									if (D(e, t))
											return !0
							} while (e = e.nextSibling)
			}
			function R() {}
			function N(e, t, i, n) {
					e && e._inc++,
					"http://www.w3.org/2000/xmlns/" == i.namespaceURI && delete t._nsMap[i.prefix ? i.localName : ""]
			}
			function U(e, t, i) {
					if (e && e._inc) {
							e._inc++;
							var n = t.childNodes;
							if (i)
									n[n.length++] = i;
							else {
									for (var r = t.firstChild, a = 0; r; )
											n[a++] = r,
											r = r.nextSibling;
									n.length = a
							}
					}
			}
			function M(e, t) {
					var i = t.previousSibling
						, n = t.nextSibling;
					return i ? i.nextSibling = n : e.firstChild = n,
					n ? n.previousSibling = i : e.lastChild = i,
					U(e.ownerDocument, e),
					t
			}
			function j(e, t, i) {
					var n = t.parentNode;
					if (n && n.removeChild(t),
					t.nodeType === m) {
							var r = t.firstChild;
							if (null == r)
									return t;
							var a = t.lastChild
					} else
							r = a = t;
					var s = i ? i.previousSibling : e.lastChild;
					r.previousSibling = s,
					a.nextSibling = i,
					s ? s.nextSibling = r : e.firstChild = r,
					null == i ? e.lastChild = a : i.previousSibling = a;
					do {
							r.parentNode = e
					} while (r !== a && (r = r.nextSibling));
					return U(e.ownerDocument || e, e),
					t.nodeType == m && (t.firstChild = t.lastChild = null),
					t
			}
			function B() {
					this._nsMap = {}
			}
			function F() {}
			function q() {}
			function H() {}
			function V() {}
			function W() {}
			function z() {}
			function G() {}
			function Y() {}
			function X() {}
			function K() {}
			function $() {}
			function Q() {}
			function J(e, t) {
					var i = []
						, n = 9 == this.nodeType ? this.documentElement : this
						, r = n.prefix
						, a = n.namespaceURI;
					if (a && null == r && null == (r = n.lookupPrefix(a)))
							var s = [{
									namespace: a,
									prefix: null
							}];
					return ee(this, i, e, t, s),
					i.join("")
			}
			function Z(e, t, i) {
					var n = e.prefix || ""
						, r = e.namespaceURI;
					if (!n && !r)
							return !1;
					if ("xml" === n && "http://www.w3.org/XML/1998/namespace" === r || "http://www.w3.org/2000/xmlns/" == r)
							return !1;
					for (var a = i.length; a--; ) {
							var s = i[a];
							if (s.prefix == n)
									return s.namespace != r
					}
					return !0
			}
			function ee(e, t, i, n, r) {
					if (n) {
							if (!(e = n(e)))
									return;
							if ("string" == typeof e)
									return void t.push(e)
					}
					switch (e.nodeType) {
					case a:
							r || (r = []);
							r.length;
							var c = e.attributes
								, g = c.length
								, v = e.firstChild
								, y = e.tagName;
							i = "http://www.w3.org/1999/xhtml" === e.namespaceURI || i,
							t.push("<", y);
							for (var _ = 0; _ < g; _++) {
									"xmlns" == (b = c.item(_)).prefix ? r.push({
											prefix: b.localName,
											namespace: b.value
									}) : "xmlns" == b.nodeName && r.push({
											prefix: "",
											namespace: b.value
									})
							}
							for (_ = 0; _ < g; _++) {
									var b;
									if (Z(b = c.item(_), 0, r)) {
											var T = b.prefix || ""
												, S = b.namespaceURI
												, w = T ? " xmlns:" + T : " xmlns";
											t.push(w, '="', S, '"'),
											r.push({
													prefix: T,
													namespace: S
											})
									}
									ee(b, t, i, n, r)
							}
							if (Z(e, 0, r)) {
									T = e.prefix || "",
									S = e.namespaceURI,
									w = T ? " xmlns:" + T : " xmlns";
									t.push(w, '="', S, '"'),
									r.push({
											prefix: T,
											namespace: S
									})
							}
							if (v || i && !/^(?:meta|link|img|br|hr|input)$/i.test(y)) {
									if (t.push(">"),
									i && /^script$/i.test(y))
											for (; v; )
													v.data ? t.push(v.data) : ee(v, t, i, n, r),
													v = v.nextSibling;
									else
											for (; v; )
													ee(v, t, i, n, r),
													v = v.nextSibling;
									t.push("</", y, ">")
							} else
									t.push("/>");
							return;
					case p:
					case m:
							for (v = e.firstChild; v; )
									ee(v, t, i, n, r),
									v = v.nextSibling;
							return;
					case s:
							return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, L), '"');
					case o:
							return t.push(e.data.replace(/[<&]/g, L));
					case u:
							return t.push("<![CDATA[", e.data, "]]>");
					case d:
							return t.push("\x3c!--", e.data, "--\x3e");
					case f:
							var k = e.publicId
								, E = e.systemId;
							if (t.push("<!DOCTYPE ", e.name),
							k)
									t.push(' PUBLIC "', k),
									E && "." != E && t.push('" "', E),
									t.push('">');
							else if (E && "." != E)
									t.push(' SYSTEM "', E, '">');
							else {
									var C = e.internalSubset;
									C && t.push(" [", C, "]"),
									t.push(">")
							}
							return;
					case h:
							return t.push("<?", e.target, " ", e.data, "?>");
					case l:
							return t.push("&", e.nodeName, ";");
					default:
							t.push("??", e.nodeName)
					}
			}
			function te(e, t, i) {
					e[t] = i
			}
			S.prototype = Error.prototype,
			i(v, S),
			w.prototype = {
					length: 0,
					item: function(e) {
							return this[e] || null
					},
					toString: function(e, t) {
							for (var i = [], n = 0; n < this.length; n++)
									ee(this[n], i, e, t);
							return i.join("")
					}
			},
			k.prototype.item = function(e) {
					return E(this),
					this[e]
			}
			,
			n(k, w),
			C.prototype = {
					length: 0,
					item: w.prototype.item,
					getNamedItem: function(e) {
							for (var t = this.length; t--; ) {
									var i = this[t];
									if (i.nodeName == e)
											return i
							}
					},
					setNamedItem: function(e) {
							var t = e.ownerElement;
							if (t && t != this._ownerElement)
									throw new S(T);
							var i = this.getNamedItem(e.nodeName);
							return x(this._ownerElement, this, e, i),
							i
					},
					setNamedItemNS: function(e) {
							var t, i = e.ownerElement;
							if (i && i != this._ownerElement)
									throw new S(T);
							return t = this.getNamedItemNS(e.namespaceURI, e.localName),
							x(this._ownerElement, this, e, t),
							t
					},
					removeNamedItem: function(e) {
							var t = this.getNamedItem(e);
							return O(this._ownerElement, this, t),
							t
					},
					removeNamedItemNS: function(e, t) {
							var i = this.getNamedItemNS(e, t);
							return O(this._ownerElement, this, i),
							i
					},
					getNamedItemNS: function(e, t) {
							for (var i = this.length; i--; ) {
									var n = this[i];
									if (n.localName == t && n.namespaceURI == e)
											return n
							}
							return null
					}
			},
			P.prototype = {
					hasFeature: function(e, t) {
							var i = this._features[e.toLowerCase()];
							return !(!i || t && !(t in i))
					},
					createDocument: function(e, t, i) {
							var n = new R;
							if (n.implementation = this,
							n.childNodes = new w,
							n.doctype = i,
							i && n.appendChild(i),
							t) {
									var r = n.createElementNS(e, t);
									n.appendChild(r)
							}
							return n
					},
					createDocumentType: function(e, t, i) {
							var n = new z;
							return n.name = e,
							n.nodeName = e,
							n.publicId = t,
							n.systemId = i,
							n
					}
			},
			I.prototype = {
					firstChild: null,
					lastChild: null,
					previousSibling: null,
					nextSibling: null,
					attributes: null,
					parentNode: null,
					childNodes: null,
					ownerDocument: null,
					nodeValue: null,
					namespaceURI: null,
					prefix: null,
					localName: null,
					insertBefore: function(e, t) {
							return j(this, e, t)
					},
					replaceChild: function(e, t) {
							this.insertBefore(e, t),
							t && this.removeChild(t)
					},
					removeChild: function(e) {
							return M(this, e)
					},
					appendChild: function(e) {
							return this.insertBefore(e, null)
					},
					hasChildNodes: function() {
							return null != this.firstChild
					},
					cloneNode: function(e) {
							return function e(t, i, n) {
									var r = new i.constructor;
									for (var o in i) {
											var u = i[o];
											"object" != typeof u && u != r[o] && (r[o] = u)
									}
									i.childNodes && (r.childNodes = new w);
									switch (r.ownerDocument = t,
									r.nodeType) {
									case a:
											var l = i.attributes
												, c = r.attributes = new C
												, h = l.length;
											c._ownerElement = r;
											for (var d = 0; d < h; d++)
													r.setAttributeNode(e(t, l.item(d), !0));
											break;
									case s:
											n = !0
									}
									if (n)
											for (var p = i.firstChild; p; )
													r.appendChild(e(t, p, n)),
													p = p.nextSibling;
									return r
							}(this.ownerDocument || this, this, e)
					},
					normalize: function() {
							for (var e = this.firstChild; e; ) {
									var t = e.nextSibling;
									t && t.nodeType == o && e.nodeType == o ? (this.removeChild(t),
									e.appendData(t.data)) : (e.normalize(),
									e = t)
							}
					},
					isSupported: function(e, t) {
							return this.ownerDocument.implementation.hasFeature(e, t)
					},
					hasAttributes: function() {
							return this.attributes.length > 0
					},
					lookupPrefix: function(e) {
							for (var t = this; t; ) {
									var i = t._nsMap;
									if (i)
											for (var n in i)
													if (i[n] == e)
															return n;
									t = t.nodeType == s ? t.ownerDocument : t.parentNode
							}
							return null
					},
					lookupNamespaceURI: function(e) {
							for (var t = this; t; ) {
									var i = t._nsMap;
									if (i && e in i)
											return i[e];
									t = t.nodeType == s ? t.ownerDocument : t.parentNode
							}
							return null
					},
					isDefaultNamespace: function(e) {
							return null == this.lookupPrefix(e)
					}
			},
			i(r, I),
			i(r, I.prototype),
			R.prototype = {
					nodeName: "#document",
					nodeType: p,
					doctype: null,
					documentElement: null,
					_inc: 1,
					insertBefore: function(e, t) {
							if (e.nodeType == m) {
									for (var i = e.firstChild; i; ) {
											var n = i.nextSibling;
											this.insertBefore(i, t),
											i = n
									}
									return e
							}
							return null == this.documentElement && e.nodeType == a && (this.documentElement = e),
							j(this, e, t),
							e.ownerDocument = this,
							e
					},
					removeChild: function(e) {
							return this.documentElement == e && (this.documentElement = null),
							M(this, e)
					},
					importNode: function(e, t) {
							return function e(t, i, n) {
									var r;
									switch (i.nodeType) {
									case a:
											(r = i.cloneNode(!1)).ownerDocument = t;
									case m:
											break;
									case s:
											n = !0
									}
									r || (r = i.cloneNode(!1));
									if (r.ownerDocument = t,
									r.parentNode = null,
									n)
											for (var o = i.firstChild; o; )
													r.appendChild(e(t, o, n)),
													o = o.nextSibling;
									return r
							}(this, e, t)
					},
					getElementById: function(e) {
							var t = null;
							return D(this.documentElement, (function(i) {
									if (i.nodeType == a && i.getAttribute("id") == e)
											return t = i,
											!0
							}
							)),
							t
					},
					createElement: function(e) {
							var t = new B;
							return t.ownerDocument = this,
							t.nodeName = e,
							t.tagName = e,
							t.childNodes = new w,
							(t.attributes = new C)._ownerElement = t,
							t
					},
					createDocumentFragment: function() {
							var e = new K;
							return e.ownerDocument = this,
							e.childNodes = new w,
							e
					},
					createTextNode: function(e) {
							var t = new H;
							return t.ownerDocument = this,
							t.appendData(e),
							t
					},
					createComment: function(e) {
							var t = new V;
							return t.ownerDocument = this,
							t.appendData(e),
							t
					},
					createCDATASection: function(e) {
							var t = new W;
							return t.ownerDocument = this,
							t.appendData(e),
							t
					},
					createProcessingInstruction: function(e, t) {
							var i = new $;
							return i.ownerDocument = this,
							i.tagName = i.target = e,
							i.nodeValue = i.data = t,
							i
					},
					createAttribute: function(e) {
							var t = new F;
							return t.ownerDocument = this,
							t.name = e,
							t.nodeName = e,
							t.localName = e,
							t.specified = !0,
							t
					},
					createEntityReference: function(e) {
							var t = new X;
							return t.ownerDocument = this,
							t.nodeName = e,
							t
					},
					createElementNS: function(e, t) {
							var i = new B
								, n = t.split(":")
								, r = i.attributes = new C;
							return i.childNodes = new w,
							i.ownerDocument = this,
							i.nodeName = t,
							i.tagName = t,
							i.namespaceURI = e,
							2 == n.length ? (i.prefix = n[0],
							i.localName = n[1]) : i.localName = t,
							r._ownerElement = i,
							i
					},
					createAttributeNS: function(e, t) {
							var i = new F
								, n = t.split(":");
							return i.ownerDocument = this,
							i.nodeName = t,
							i.name = t,
							i.namespaceURI = e,
							i.specified = !0,
							2 == n.length ? (i.prefix = n[0],
							i.localName = n[1]) : i.localName = t,
							i
					}
			},
			n(R, I),
			B.prototype = {
					nodeType: a,
					hasAttribute: function(e) {
							return null != this.getAttributeNode(e)
					},
					getAttribute: function(e) {
							var t = this.getAttributeNode(e);
							return t && t.value || ""
					},
					getAttributeNode: function(e) {
							return this.attributes.getNamedItem(e)
					},
					setAttribute: function(e, t) {
							var i = this.ownerDocument.createAttribute(e);
							i.value = i.nodeValue = "" + t,
							this.setAttributeNode(i)
					},
					removeAttribute: function(e) {
							var t = this.getAttributeNode(e);
							t && this.removeAttributeNode(t)
					},
					appendChild: function(e) {
							return e.nodeType === m ? this.insertBefore(e, null) : function(e, t) {
									var i = t.parentNode;
									if (i) {
											var n = e.lastChild;
											i.removeChild(t);
											n = e.lastChild
									}
									return n = e.lastChild,
									t.parentNode = e,
									t.previousSibling = n,
									t.nextSibling = null,
									n ? n.nextSibling = t : e.firstChild = t,
									e.lastChild = t,
									U(e.ownerDocument, e, t),
									t
							}(this, e)
					},
					setAttributeNode: function(e) {
							return this.attributes.setNamedItem(e)
					},
					setAttributeNodeNS: function(e) {
							return this.attributes.setNamedItemNS(e)
					},
					removeAttributeNode: function(e) {
							return this.attributes.removeNamedItem(e.nodeName)
					},
					removeAttributeNS: function(e, t) {
							var i = this.getAttributeNodeNS(e, t);
							i && this.removeAttributeNode(i)
					},
					hasAttributeNS: function(e, t) {
							return null != this.getAttributeNodeNS(e, t)
					},
					getAttributeNS: function(e, t) {
							var i = this.getAttributeNodeNS(e, t);
							return i && i.value || ""
					},
					setAttributeNS: function(e, t, i) {
							var n = this.ownerDocument.createAttributeNS(e, t);
							n.value = n.nodeValue = "" + i,
							this.setAttributeNode(n)
					},
					getAttributeNodeNS: function(e, t) {
							return this.attributes.getNamedItemNS(e, t)
					},
					getElementsByTagName: function(e) {
							return new k(this,(function(t) {
									var i = [];
									return D(t, (function(n) {
											n === t || n.nodeType != a || "*" !== e && n.tagName != e || i.push(n)
									}
									)),
									i
							}
							))
					},
					getElementsByTagNameNS: function(e, t) {
							return new k(this,(function(i) {
									var n = [];
									return D(i, (function(r) {
											r === i || r.nodeType !== a || "*" !== e && r.namespaceURI !== e || "*" !== t && r.localName != t || n.push(r)
									}
									)),
									n
							}
							))
					}
			},
			R.prototype.getElementsByTagName = B.prototype.getElementsByTagName,
			R.prototype.getElementsByTagNameNS = B.prototype.getElementsByTagNameNS,
			n(B, I),
			F.prototype.nodeType = s,
			n(F, I),
			q.prototype = {
					data: "",
					substringData: function(e, t) {
							return this.data.substring(e, e + t)
					},
					appendData: function(e) {
							e = this.data + e,
							this.nodeValue = this.data = e,
							this.length = e.length
					},
					insertData: function(e, t) {
							this.replaceData(e, 0, t)
					},
					appendChild: function(e) {
							throw new Error(y[_])
					},
					deleteData: function(e, t) {
							this.replaceData(e, t, "")
					},
					replaceData: function(e, t, i) {
							i = this.data.substring(0, e) + i + this.data.substring(e + t),
							this.nodeValue = this.data = i,
							this.length = i.length
					}
			},
			n(q, I),
			H.prototype = {
					nodeName: "#text",
					nodeType: o,
					splitText: function(e) {
							var t = this.data
								, i = t.substring(e);
							t = t.substring(0, e),
							this.data = this.nodeValue = t,
							this.length = t.length;
							var n = this.ownerDocument.createTextNode(i);
							return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling),
							n
					}
			},
			n(H, q),
			V.prototype = {
					nodeName: "#comment",
					nodeType: d
			},
			n(V, q),
			W.prototype = {
					nodeName: "#cdata-section",
					nodeType: u
			},
			n(W, q),
			z.prototype.nodeType = f,
			n(z, I),
			G.prototype.nodeType = g,
			n(G, I),
			Y.prototype.nodeType = c,
			n(Y, I),
			X.prototype.nodeType = l,
			n(X, I),
			K.prototype.nodeName = "#document-fragment",
			K.prototype.nodeType = m,
			n(K, I),
			$.prototype.nodeType = h,
			n($, I),
			Q.prototype.serializeToString = function(e, t, i) {
					return J.call(e, t, i)
			}
			,
			I.prototype.toString = J;
			try {
					if (Object.defineProperty) {
							Object.defineProperty(k.prototype, "length", {
									get: function() {
											return E(this),
											this.$$length
									}
							}),
							Object.defineProperty(I.prototype, "textContent", {
									get: function() {
											return function e(t) {
													switch (t.nodeType) {
													case a:
													case m:
															var i = [];
															for (t = t.firstChild; t; )
																	7 !== t.nodeType && 8 !== t.nodeType && i.push(e(t)),
																	t = t.nextSibling;
															return i.join("");
													default:
															return t.nodeValue
													}
											}(this)
									},
									set: function(e) {
											switch (this.nodeType) {
											case a:
											case m:
													for (; this.firstChild; )
															this.removeChild(this.firstChild);
													(e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
													break;
											default:
													this.data = e,
													this.value = e,
													this.nodeValue = e
											}
									}
							}),
							te = function(e, t, i) {
									e["$$" + t] = i
							}
					}
			} catch (e) {}
			t.DOMImplementation = P,
			t.XMLSerializer = Q
	},
	"f+Ey": function(e, t) {
			e.exports = {
					toUnsigned: function(e) {
							return e >>> 0
					},
					toHexString: function(e) {
							return ("00" + e.toString(16)).slice(-2)
					}
			}
	},
	g2LC: function(e, t) {
			e.exports = function(e) {
					if (!e)
							return !1;
					var t = i.call(e);
					return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
			}
			;
			var i = Object.prototype.toString
	},
	gqAi: function(e, t) {},
	gtzJ: function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
					return A
			}
			)),
			i.d(t, "b", (function() {
					return x
			}
			));
			var n = i("mrSG")
				, r = i("9/Zf")
				, a = i("kdvv")
				, s = Object(r.b)()
				, o = "Sentry Logger "
				, u = function() {
					function e() {
							this._enabled = !1
					}
					return e.prototype.disable = function() {
							this._enabled = !1
					}
					,
					e.prototype.enable = function() {
							this._enabled = !0
					}
					,
					e.prototype.log = function() {
							for (var e = [], t = 0; t < arguments.length; t++)
									e[t] = arguments[t];
							this._enabled && Object(r.a)((function() {
									s.console.log(o + "[Log]: " + e.join(" "))
							}
							))
					}
					,
					e.prototype.warn = function() {
							for (var e = [], t = 0; t < arguments.length; t++)
									e[t] = arguments[t];
							this._enabled && Object(r.a)((function() {
									s.console.warn(o + "[Warn]: " + e.join(" "))
							}
							))
					}
					,
					e.prototype.error = function() {
							for (var e = [], t = 0; t < arguments.length; t++)
									e[t] = arguments[t];
							this._enabled && Object(r.a)((function() {
									s.console.error(o + "[Error]: " + e.join(" "))
							}
							))
					}
					,
					e
			}();
			s.__SENTRY__ = s.__SENTRY__ || {};
			var l, c = s.__SENTRY__.logger || (s.__SENTRY__.logger = new u), h = i("+A1k"), d = i("9AQC");
			!function(e) {
					e.PENDING = "PENDING",
					e.RESOLVED = "RESOLVED",
					e.REJECTED = "REJECTED"
			}(l || (l = {}));
			var p, f = function() {
					function e(e) {
							var t = this;
							this._state = l.PENDING,
							this._handlers = [],
							this._resolve = function(e) {
									t._setResult(l.RESOLVED, e)
							}
							,
							this._reject = function(e) {
									t._setResult(l.REJECTED, e)
							}
							,
							this._setResult = function(e, i) {
									t._state === l.PENDING && (Object(d.j)(i) ? i.then(t._resolve, t._reject) : (t._state = e,
									t._value = i,
									t._executeHandlers()))
							}
							,
							this._attachHandler = function(e) {
									t._handlers = t._handlers.concat(e),
									t._executeHandlers()
							}
							,
							this._executeHandlers = function() {
									if (t._state !== l.PENDING) {
											var e = t._handlers.slice();
											t._handlers = [],
											e.forEach((function(e) {
													e.done || (t._state === l.RESOLVED && e.onfulfilled && e.onfulfilled(t._value),
													t._state === l.REJECTED && e.onrejected && e.onrejected(t._value),
													e.done = !0)
											}
											))
									}
							}
							;
							try {
									e(this._resolve, this._reject)
							} catch (e) {
									this._reject(e)
							}
					}
					return e.resolve = function(t) {
							return new e((function(e) {
									e(t)
							}
							))
					}
					,
					e.reject = function(t) {
							return new e((function(e, i) {
									i(t)
							}
							))
					}
					,
					e.all = function(t) {
							return new e((function(i, n) {
									if (Array.isArray(t))
											if (0 !== t.length) {
													var r = t.length
														, a = [];
													t.forEach((function(t, s) {
															e.resolve(t).then((function(e) {
																	a[s] = e,
																	0 === (r -= 1) && i(a)
															}
															)).then(null, n)
													}
													))
											} else
													i([]);
									else
											n(new TypeError("Promise.all requires an array as input."))
							}
							))
					}
					,
					e.prototype.then = function(t, i) {
							var n = this;
							return new e((function(e, r) {
									n._attachHandler({
											done: !1,
											onfulfilled: function(i) {
													if (t)
															try {
																	return void e(t(i))
															} catch (e) {
																	return void r(e)
															}
													else
															e(i)
											},
											onrejected: function(t) {
													if (i)
															try {
																	return void e(i(t))
															} catch (e) {
																	return void r(e)
															}
													else
															r(t)
											}
									})
							}
							))
					}
					,
					e.prototype.catch = function(e) {
							return this.then((function(e) {
									return e
							}
							), e)
					}
					,
					e.prototype.finally = function(t) {
							var i = this;
							return new e((function(e, n) {
									var r, a;
									return i.then((function(e) {
											a = !1,
											r = e,
											t && t()
									}
									), (function(e) {
											a = !0,
											r = e,
											t && t()
									}
									)).then((function() {
											a ? n(r) : e(r)
									}
									))
							}
							))
					}
					,
					e.prototype.toString = function() {
							return "[object SyncPromise]"
					}
					,
					e
			}(), m = function() {
					function e() {
							this._notifyingListeners = !1,
							this._scopeListeners = [],
							this._eventProcessors = [],
							this._breadcrumbs = [],
							this._user = {},
							this._tags = {},
							this._extra = {},
							this._contexts = {}
					}
					return e.clone = function(t) {
							var i = new e;
							return t && (i._breadcrumbs = Object(n.b)(t._breadcrumbs),
							i._tags = Object(n.a)({}, t._tags),
							i._extra = Object(n.a)({}, t._extra),
							i._contexts = Object(n.a)({}, t._contexts),
							i._user = t._user,
							i._level = t._level,
							i._span = t._span,
							i._session = t._session,
							i._transactionName = t._transactionName,
							i._fingerprint = t._fingerprint,
							i._eventProcessors = Object(n.b)(t._eventProcessors)),
							i
					}
					,
					e.prototype.addScopeListener = function(e) {
							this._scopeListeners.push(e)
					}
					,
					e.prototype.addEventProcessor = function(e) {
							return this._eventProcessors.push(e),
							this
					}
					,
					e.prototype.setUser = function(e) {
							return this._user = e || {},
							this._session && this._session.update({
									user: e
							}),
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.getUser = function() {
							return this._user
					}
					,
					e.prototype.setTags = function(e) {
							return this._tags = Object(n.a)(Object(n.a)({}, this._tags), e),
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.setTag = function(e, t) {
							var i;
							return this._tags = Object(n.a)(Object(n.a)({}, this._tags), ((i = {})[e] = t,
							i)),
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.setExtras = function(e) {
							return this._extra = Object(n.a)(Object(n.a)({}, this._extra), e),
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.setExtra = function(e, t) {
							var i;
							return this._extra = Object(n.a)(Object(n.a)({}, this._extra), ((i = {})[e] = t,
							i)),
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.setFingerprint = function(e) {
							return this._fingerprint = e,
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.setLevel = function(e) {
							return this._level = e,
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.setTransactionName = function(e) {
							return this._transactionName = e,
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.setTransaction = function(e) {
							return this.setTransactionName(e)
					}
					,
					e.prototype.setContext = function(e, t) {
							var i;
							return null === t ? delete this._contexts[e] : this._contexts = Object(n.a)(Object(n.a)({}, this._contexts), ((i = {})[e] = t,
							i)),
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.setSpan = function(e) {
							return this._span = e,
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.getSpan = function() {
							return this._span
					}
					,
					e.prototype.getTransaction = function() {
							var e, t, i, n, r = this.getSpan();
							return (null === (e = r) || void 0 === e ? void 0 : e.transaction) ? null === (t = r) || void 0 === t ? void 0 : t.transaction : (null === (n = null === (i = r) || void 0 === i ? void 0 : i.spanRecorder) || void 0 === n ? void 0 : n.spans[0]) ? r.spanRecorder.spans[0] : void 0
					}
					,
					e.prototype.setSession = function(e) {
							return e ? this._session = e : delete this._session,
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.getSession = function() {
							return this._session
					}
					,
					e.prototype.update = function(t) {
							if (!t)
									return this;
							if ("function" == typeof t) {
									var i = t(this);
									return i instanceof e ? i : this
							}
							return t instanceof e ? (this._tags = Object(n.a)(Object(n.a)({}, this._tags), t._tags),
							this._extra = Object(n.a)(Object(n.a)({}, this._extra), t._extra),
							this._contexts = Object(n.a)(Object(n.a)({}, this._contexts), t._contexts),
							t._user && Object.keys(t._user).length && (this._user = t._user),
							t._level && (this._level = t._level),
							t._fingerprint && (this._fingerprint = t._fingerprint)) : Object(d.e)(t) && (t = t,
							this._tags = Object(n.a)(Object(n.a)({}, this._tags), t.tags),
							this._extra = Object(n.a)(Object(n.a)({}, this._extra), t.extra),
							this._contexts = Object(n.a)(Object(n.a)({}, this._contexts), t.contexts),
							t.user && (this._user = t.user),
							t.level && (this._level = t.level),
							t.fingerprint && (this._fingerprint = t.fingerprint)),
							this
					}
					,
					e.prototype.clear = function() {
							return this._breadcrumbs = [],
							this._tags = {},
							this._extra = {},
							this._user = {},
							this._contexts = {},
							this._level = void 0,
							this._transactionName = void 0,
							this._fingerprint = void 0,
							this._span = void 0,
							this._session = void 0,
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.addBreadcrumb = function(e, t) {
							var i = Object(n.a)({
									timestamp: Object(a.a)()
							}, e);
							return this._breadcrumbs = void 0 !== t && t >= 0 ? Object(n.b)(this._breadcrumbs, [i]).slice(-t) : Object(n.b)(this._breadcrumbs, [i]),
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.clearBreadcrumbs = function() {
							return this._breadcrumbs = [],
							this._notifyScopeListeners(),
							this
					}
					,
					e.prototype.applyToEvent = function(e, t) {
							var i;
							if (this._extra && Object.keys(this._extra).length && (e.extra = Object(n.a)(Object(n.a)({}, this._extra), e.extra)),
							this._tags && Object.keys(this._tags).length && (e.tags = Object(n.a)(Object(n.a)({}, this._tags), e.tags)),
							this._user && Object.keys(this._user).length && (e.user = Object(n.a)(Object(n.a)({}, this._user), e.user)),
							this._contexts && Object.keys(this._contexts).length && (e.contexts = Object(n.a)(Object(n.a)({}, this._contexts), e.contexts)),
							this._level && (e.level = this._level),
							this._transactionName && (e.transaction = this._transactionName),
							this._span) {
									e.contexts = Object(n.a)({
											trace: this._span.getTraceContext()
									}, e.contexts);
									var r = null === (i = this._span.transaction) || void 0 === i ? void 0 : i.name;
									r && (e.tags = Object(n.a)({
											transaction: r
									}, e.tags))
							}
							return this._applyFingerprint(e),
							e.breadcrumbs = Object(n.b)(e.breadcrumbs || [], this._breadcrumbs),
							e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0,
							this._notifyEventProcessors(Object(n.b)(g(), this._eventProcessors), e, t)
					}
					,
					e.prototype._notifyEventProcessors = function(e, t, i, r) {
							var a = this;
							return void 0 === r && (r = 0),
							new f((function(s, o) {
									var u = e[r];
									if (null === t || "function" != typeof u)
											s(t);
									else {
											var l = u(Object(n.a)({}, t), i);
											Object(d.j)(l) ? l.then((function(t) {
													return a._notifyEventProcessors(e, t, i, r + 1).then(s)
											}
											)).then(null, o) : a._notifyEventProcessors(e, l, i, r + 1).then(s).then(null, o)
									}
							}
							))
					}
					,
					e.prototype._notifyScopeListeners = function() {
							var e = this;
							this._notifyingListeners || (this._notifyingListeners = !0,
							this._scopeListeners.forEach((function(t) {
									t(e)
							}
							)),
							this._notifyingListeners = !1)
					}
					,
					e.prototype._applyFingerprint = function(e) {
							e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [],
							this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
							e.fingerprint && !e.fingerprint.length && delete e.fingerprint
					}
					,
					e
			}();
			function g() {
					var e = Object(r.b)();
					return e.__SENTRY__ = e.__SENTRY__ || {},
					e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [],
					e.__SENTRY__.globalEventProcessors
			}
			!function(e) {
					e.Ok = "ok",
					e.Exited = "exited",
					e.Crashed = "crashed",
					e.Abnormal = "abnormal"
			}(p || (p = {}));
			var v = i("6PXS")
				, y = function() {
					function e(e) {
							this.errors = 0,
							this.sid = Object(r.c)(),
							this.timestamp = Date.now(),
							this.started = Date.now(),
							this.duration = 0,
							this.status = p.Ok,
							e && this.update(e)
					}
					return e.prototype.update = function(e) {
							void 0 === e && (e = {}),
							e.user && (e.user.ip_address && (this.ipAddress = e.user.ip_address),
							e.did || (this.did = e.user.id || e.user.email || e.user.username)),
							this.timestamp = e.timestamp || Date.now(),
							e.sid && (this.sid = 32 === e.sid.length ? e.sid : Object(r.c)()),
							e.did && (this.did = "" + e.did),
							"number" == typeof e.started && (this.started = e.started),
							"number" == typeof e.duration ? this.duration = e.duration : this.duration = this.timestamp - this.started,
							e.release && (this.release = e.release),
							e.environment && (this.environment = e.environment),
							e.ipAddress && (this.ipAddress = e.ipAddress),
							e.userAgent && (this.userAgent = e.userAgent),
							"number" == typeof e.errors && (this.errors = e.errors),
							e.status && (this.status = e.status)
					}
					,
					e.prototype.close = function(e) {
							e ? this.update({
									status: e
							}) : this.status === p.Ok ? this.update({
									status: p.Exited
							}) : this.update()
					}
					,
					e.prototype.toJSON = function() {
							return Object(v.a)({
									sid: "" + this.sid,
									init: !0,
									started: new Date(this.started).toISOString(),
									timestamp: new Date(this.timestamp).toISOString(),
									status: this.status,
									errors: this.errors,
									did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
									duration: this.duration,
									attrs: Object(v.a)({
											release: this.release,
											environment: this.environment,
											ip_address: this.ipAddress,
											user_agent: this.userAgent
									})
							})
					}
					,
					e
			}()
				, _ = function() {
					function e(e, t, i) {
							void 0 === t && (t = new m),
							void 0 === i && (i = 3),
							this._version = i,
							this._stack = [{}],
							this.getStackTop().scope = t,
							this.bindClient(e)
					}
					return e.prototype.isOlderThan = function(e) {
							return this._version < e
					}
					,
					e.prototype.bindClient = function(e) {
							this.getStackTop().client = e,
							e && e.setupIntegrations && e.setupIntegrations()
					}
					,
					e.prototype.pushScope = function() {
							var e = m.clone(this.getScope());
							return this.getStack().push({
									client: this.getClient(),
									scope: e
							}),
							e
					}
					,
					e.prototype.popScope = function() {
							return !(this.getStack().length <= 1) && !!this.getStack().pop()
					}
					,
					e.prototype.withScope = function(e) {
							var t = this.pushScope();
							try {
									e(t)
							} finally {
									this.popScope()
							}
					}
					,
					e.prototype.getClient = function() {
							return this.getStackTop().client
					}
					,
					e.prototype.getScope = function() {
							return this.getStackTop().scope
					}
					,
					e.prototype.getStack = function() {
							return this._stack
					}
					,
					e.prototype.getStackTop = function() {
							return this._stack[this._stack.length - 1]
					}
					,
					e.prototype.captureException = function(e, t) {
							var i = this._lastEventId = Object(r.c)()
								, a = t;
							if (!t) {
									var s = void 0;
									try {
											throw new Error("Sentry syntheticException")
									} catch (e) {
											s = e
									}
									a = {
											originalException: e,
											syntheticException: s
									}
							}
							return this._invokeClient("captureException", e, Object(n.a)(Object(n.a)({}, a), {
									event_id: i
							})),
							i
					}
					,
					e.prototype.captureMessage = function(e, t, i) {
							var a = this._lastEventId = Object(r.c)()
								, s = i;
							if (!i) {
									var o = void 0;
									try {
											throw new Error(e)
									} catch (e) {
											o = e
									}
									s = {
											originalException: e,
											syntheticException: o
									}
							}
							return this._invokeClient("captureMessage", e, t, Object(n.a)(Object(n.a)({}, s), {
									event_id: a
							})),
							a
					}
					,
					e.prototype.captureEvent = function(e, t) {
							var i = this._lastEventId = Object(r.c)();
							return this._invokeClient("captureEvent", e, Object(n.a)(Object(n.a)({}, t), {
									event_id: i
							})),
							i
					}
					,
					e.prototype.lastEventId = function() {
							return this._lastEventId
					}
					,
					e.prototype.addBreadcrumb = function(e, t) {
							var i = this.getStackTop()
								, s = i.scope
								, o = i.client;
							if (s && o) {
									var u = o.getOptions && o.getOptions() || {}
										, l = u.beforeBreadcrumb
										, c = void 0 === l ? null : l
										, h = u.maxBreadcrumbs
										, d = void 0 === h ? 100 : h;
									if (!(d <= 0)) {
											var p = Object(a.a)()
												, f = Object(n.a)({
													timestamp: p
											}, e)
												, m = c ? Object(r.a)((function() {
													return c(f, t)
											}
											)) : f;
											null !== m && s.addBreadcrumb(m, Math.min(d, 100))
									}
							}
					}
					,
					e.prototype.setUser = function(e) {
							var t = this.getScope();
							t && t.setUser(e)
					}
					,
					e.prototype.setTags = function(e) {
							var t = this.getScope();
							t && t.setTags(e)
					}
					,
					e.prototype.setExtras = function(e) {
							var t = this.getScope();
							t && t.setExtras(e)
					}
					,
					e.prototype.setTag = function(e, t) {
							var i = this.getScope();
							i && i.setTag(e, t)
					}
					,
					e.prototype.setExtra = function(e, t) {
							var i = this.getScope();
							i && i.setExtra(e, t)
					}
					,
					e.prototype.setContext = function(e, t) {
							var i = this.getScope();
							i && i.setContext(e, t)
					}
					,
					e.prototype.configureScope = function(e) {
							var t = this.getStackTop()
								, i = t.scope
								, n = t.client;
							i && n && e(i)
					}
					,
					e.prototype.run = function(e) {
							var t = T(this);
							try {
									e(this)
							} finally {
									T(t)
							}
					}
					,
					e.prototype.getIntegration = function(e) {
							var t = this.getClient();
							if (!t)
									return null;
							try {
									return t.getIntegration(e)
							} catch (t) {
									return c.warn("Cannot retrieve integration " + e.id + " from the current Hub"),
									null
							}
					}
					,
					e.prototype.startSpan = function(e) {
							return this._callExtensionMethod("startSpan", e)
					}
					,
					e.prototype.startTransaction = function(e, t) {
							return this._callExtensionMethod("startTransaction", e, t)
					}
					,
					e.prototype.traceHeaders = function() {
							return this._callExtensionMethod("traceHeaders")
					}
					,
					e.prototype.startSession = function(e) {
							this.endSession();
							var t = this.getStackTop()
								, i = t.scope
								, r = t.client
								, a = r && r.getOptions() || {}
								, s = a.release
								, o = a.environment
								, u = new y(Object(n.a)(Object(n.a)({
									release: s,
									environment: o
							}, i && {
									user: i.getUser()
							}), e));
							return i && i.setSession(u),
							u
					}
					,
					e.prototype.endSession = function() {
							var e = this.getStackTop()
								, t = e.scope
								, i = e.client;
							if (t) {
									var n = t.getSession && t.getSession();
									n && (n.close(),
									i && i.captureSession && i.captureSession(n),
									t.setSession())
							}
					}
					,
					e.prototype._invokeClient = function(e) {
							for (var t, i = [], r = 1; r < arguments.length; r++)
									i[r - 1] = arguments[r];
							var a = this.getStackTop()
								, s = a.scope
								, o = a.client;
							o && o[e] && (t = o)[e].apply(t, Object(n.b)(i, [s]))
					}
					,
					e.prototype._callExtensionMethod = function(e) {
							for (var t = [], i = 1; i < arguments.length; i++)
									t[i - 1] = arguments[i];
							var n = b()
								, r = n.__SENTRY__;
							if (r && r.extensions && "function" == typeof r.extensions[e])
									return r.extensions[e].apply(this, t);
							c.warn("Extension method " + e + " couldn't be found, doing nothing.")
					}
					,
					e
			}();
			function b() {
					var e = Object(r.b)();
					return e.__SENTRY__ = e.__SENTRY__ || {
							extensions: {},
							hub: void 0
					},
					e
			}
			function T(e) {
					var t = b()
						, i = k(t);
					return E(t, e),
					i
			}
			function S() {
					var e = b();
					return w(e) && !k(e).isOlderThan(3) || E(e, new _),
					Object(h.b)() ? function(e) {
							try {
									var t = (n = b().__SENTRY__) && n.extensions && n.extensions.domain && n.extensions.domain.active;
									if (!t)
											return k(e);
									if (!w(t) || k(t).isOlderThan(3)) {
											var i = k(e).getStackTop();
											E(t, new _(i.client,m.clone(i.scope)))
									}
									return k(t)
							} catch (t) {
									return k(e)
							}
							var n
					}(e) : k(e)
			}
			function w(e) {
					return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
			}
			function k(e) {
					return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {},
					e.__SENTRY__.hub = new _),
					e.__SENTRY__.hub
			}
			function E(e, t) {
					return !!e && (e.__SENTRY__ = e.__SENTRY__ || {},
					e.__SENTRY__.hub = t,
					!0)
			}
			function C(e) {
					for (var t = [], i = 1; i < arguments.length; i++)
							t[i - 1] = arguments[i];
					var r = S();
					if (r && r[e])
							return r[e].apply(r, Object(n.b)(t));
					throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
			}
			function A(e, t) {
					var i;
					try {
							throw new Error(e)
					} catch (e) {
							i = e
					}
					var r = "string" != typeof t ? {
							captureContext: t
					} : void 0;
					return C("captureMessage", e, "string" == typeof t ? t : void 0, Object(n.a)({
							originalException: e,
							syntheticException: i
					}, r))
			}
			function x(e) {
					C("withScope", e)
			}
	},
	hQev: function(e, t, i) {
			"use strict";
			(function(t) {
					var n, r = (n = i("vgmO")) && "object" == typeof n && "default"in n ? n.default : n;
					e.exports = function(e) {
							for (var i, n = (i = e,
							r.atob ? r.atob(i) : t.from(i, "base64").toString("binary")), a = new Uint8Array(n.length), s = 0; s < n.length; s++)
									a[s] = n.charCodeAt(s);
							return a
					}
			}
			).call(this, i("tjlA").Buffer)
	},
	iWKX: function(e, t) {},
	jBAH: function(e, t) {
			e.exports = function(e, t) {
					var i, n = null;
					try {
							i = JSON.parse(e, t)
					} catch (e) {
							n = e
					}
					return [n, i]
			}
	},
	"kVK+": function(e, t) {
			t.read = function(e, t, i, n, r) {
					var a, s, o = 8 * r - n - 1, u = (1 << o) - 1, l = u >> 1, c = -7, h = i ? r - 1 : 0, d = i ? -1 : 1, p = e[t + h];
					for (h += d,
					a = p & (1 << -c) - 1,
					p >>= -c,
					c += o; c > 0; a = 256 * a + e[t + h],
					h += d,
					c -= 8)
							;
					for (s = a & (1 << -c) - 1,
					a >>= -c,
					c += n; c > 0; s = 256 * s + e[t + h],
					h += d,
					c -= 8)
							;
					if (0 === a)
							a = 1 - l;
					else {
							if (a === u)
									return s ? NaN : 1 / 0 * (p ? -1 : 1);
							s += Math.pow(2, n),
							a -= l
					}
					return (p ? -1 : 1) * s * Math.pow(2, a - n)
			}
			,
			t.write = function(e, t, i, n, r, a) {
					var s, o, u, l = 8 * a - r - 1, c = (1 << l) - 1, h = c >> 1, d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : a - 1, f = n ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
					for (t = Math.abs(t),
					isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0,
					s = c) : (s = Math.floor(Math.log(t) / Math.LN2),
					t * (u = Math.pow(2, -s)) < 1 && (s--,
					u *= 2),
					(t += s + h >= 1 ? d / u : d * Math.pow(2, 1 - h)) * u >= 2 && (s++,
					u /= 2),
					s + h >= c ? (o = 0,
					s = c) : s + h >= 1 ? (o = (t * u - 1) * Math.pow(2, r),
					s += h) : (o = t * Math.pow(2, h - 1) * Math.pow(2, r),
					s = 0)); r >= 8; e[i + p] = 255 & o,
					p += f,
					o /= 256,
					r -= 8)
							;
					for (s = s << r | o,
					l += r; l > 0; e[i + p] = 255 & s,
					p += f,
					s /= 256,
					l -= 8)
							;
					e[i + p - f] |= 128 * m
			}
	},
	kdvv: function(e, t, i) {
			"use strict";
			(function(e) {
					i.d(t, "a", (function() {
							return u
					}
					));
					var n = i("9/Zf")
						, r = i("+A1k")
						, a = {
							nowSeconds: function() {
									return Date.now() / 1e3
							}
					};
					var s = Object(r.b)() ? function() {
							try {
									return Object(r.a)(e, "perf_hooks").performance
							} catch (e) {
									return
							}
					}() : function() {
							var e = Object(n.b)().performance;
							if (e && e.now)
									return {
											now: function() {
													return e.now()
											},
											timeOrigin: Date.now() - e.now()
									}
					}()
						, o = void 0 === s ? a : {
							nowSeconds: function() {
									return (s.timeOrigin + s.now()) / 1e3
							}
					}
						, u = a.nowSeconds.bind(a);
					o.nowSeconds.bind(o),
					function() {
							var e = Object(n.b)().performance;
							if (e)
									e.timeOrigin ? e.timeOrigin : e.timing && e.timing.navigationStart || Date.now()
					}()
			}
			).call(this, i("3UD+")(e))
	},
	lhgG: function(e, t) {
			document.querySelectorAll("[data-countdown]").forEach((function(e) {
					var t, i = !1, n = e.querySelector("[data-countdown-timer]"), r = parseInt(e.getAttribute("data-time")), a = e.querySelector("[data-countdown-message]"), s = e.querySelector("[data-countdown-finished-message]"), o = function(e) {
							return ("0" + e).slice(-2)
					}, u = setInterval((function() {
							if (window.elementIsVisible(n) || i) {
									i || (t = new Date(Date.parse(new Date) + 1e3 * r),
									i = !0,
									t = t);
									var e = function(e) {
											var t = Date.parse(e) - Date.parse(new Date)
												, i = Math.floor(t / 1e3 % 60)
												, n = Math.floor(t / 1e3 / 60 % 60)
												, r = Math.floor(t / 36e5 % 24);
											return {
													total: t,
													days: Math.floor(t / 864e5),
													hours: r,
													minutes: n,
													seconds: i
											}
									}(t)
										, l = "";
									e.days > 0 && (l = e.days + ":"),
									e.hours > 0 && (l += o(e.hours) + ":"),
									l += o(e.minutes) + ":",
									l += o(e.seconds),
									n.innerHTML = l,
									e.total <= 0 && (a.style.display = "none",
									s.style.display = "inline",
									clearInterval(u))
							}
					}
					), 1e3)
			}
			))
	},
	// mrSG: function(e, t, i) {
	// 		"use strict";
	// 		i.d(t, "a", (function() {
	// 				return n
	// 		}
	// 		)),
	// 		i.d(t, "c", (function() {
	// 				return r
	// 		}
	// 		)),
	// 		i.d(t, "b", (function() {
	// 				return s
	// 		}
	// 		));
	// 		var n = function() {
	// 				return (n = Object.assign || function(e) {
	// 						for (var t, i = 1, n = arguments.length; i < n; i++)
	// 								for (var r in t = arguments[i])
	// 										Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
	// 						return e
	// 				}
	// 				).apply(this, arguments)
	// 		};
	// 		function r(e) {
	// 				var t = "function" == typeof Symbol && Symbol.iterator
	// 					, i = t && e[t]
	// 					, n = 0;
	// 				if (i)
	// 						return i.call(e);
	// 				if (e && "number" == typeof e.length)
	// 						return {
	// 								next: function() {
	// 										return e && n >= e.length && (e = void 0),
	// 										{
	// 												value: e && e[n++],
	// 												done: !e
	// 										}
	// 								}
	// 						};
	// 				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
	// 		}
	// 		function a(e, t) {
	// 				var i = "function" == typeof Symbol && e[Symbol.iterator];
	// 				if (!i)
	// 						return e;
	// 				var n, r, a = i.call(e), s = [];
	// 				try {
	// 						for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
	// 								s.push(n.value)
	// 				} catch (e) {
	// 						r = {
	// 								error: e
	// 						}
	// 				} finally {
	// 						try {
	// 								n && !n.done && (i = a.return) && i.call(a)
	// 						} finally {
	// 								if (r)
	// 										throw r.error
	// 						}
	// 				}
	// 				return s
	// 		}
	// 		function s() {
	// 				for (var e = [], t = 0; t < arguments.length; t++)
	// 						e = e.concat(a(arguments[t]));
	// 				return e
	// 		}
	// },
	// mvqA: function(e, t, i) {
	// 		"use strict";
	// 		var n, r, a = i("f+Ey").toUnsigned, s = function(e) {
	// 				return new Date(1e3 * e - 20828448e5)
	// 		}, o = function(e) {
	// 				return {
	// 						isLeading: (12 & e[0]) >>> 2,
	// 						dependsOn: 3 & e[0],
	// 						isDependedOn: (192 & e[1]) >>> 6,
	// 						hasRedundancy: (48 & e[1]) >>> 4,
	// 						paddingValue: (14 & e[1]) >>> 1,
	// 						isNonSyncSample: 1 & e[1],
	// 						degradationPriority: e[2] << 8 | e[3]
	// 				}
	// 		}, u = function(e) {
	// 				var t = "";
	// 				return t += String.fromCharCode(e[0]),
	// 				t += String.fromCharCode(e[1]),
	// 				t += String.fromCharCode(e[2]),
	// 				t += String.fromCharCode(e[3])
	// 		}, l = function(e, t) {
	// 				var i, n, r, s, o, c = [];
	// 				if (!t.length)
	// 						return null;
	// 				for (i = 0; i < e.byteLength; )
	// 						n = a(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]),
	// 						r = u(e.subarray(i + 4, i + 8)),
	// 						s = n > 1 ? i + n : e.byteLength,
	// 						r === t[0] && (1 === t.length ? c.push(e.subarray(i + 8, s)) : (o = l(e.subarray(i + 8, s), t.slice(1))).length && (c = c.concat(o))),
	// 						i = s;
	// 				return c
	// 		}, c = function(e) {
	// 				var t, i, n = new DataView(e.buffer,e.byteOffset,e.byteLength), r = [];
	// 				for (t = 0; t + 4 < e.length; t += i)
	// 						if (i = n.getUint32(t),
	// 						t += 4,
	// 						i <= 0)
	// 								r.push("<span style='color:red;'>MALFORMED DATA</span>");
	// 						else
	// 								switch (31 & e[t]) {
	// 								case 1:
	// 										r.push("slice_layer_without_partitioning_rbsp");
	// 										break;
	// 								case 5:
	// 										r.push("slice_layer_without_partitioning_rbsp_idr");
	// 										break;
	// 								case 6:
	// 										r.push("sei_rbsp");
	// 										break;
	// 								case 7:
	// 										r.push("seq_parameter_set_rbsp");
	// 										break;
	// 								case 8:
	// 										r.push("pic_parameter_set_rbsp");
	// 										break;
	// 								case 9:
	// 										r.push("access_unit_delimiter_rbsp");
	// 										break;
	// 								default:
	// 										r.push("UNKNOWN NAL - " + e[t] & 31)
	// 								}
	// 				return r
	// 		}, h = {
	// 				avc1: function(e) {
	// 						var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
	// 						return {
	// 								dataReferenceIndex: t.getUint16(6),
	// 								width: t.getUint16(24),
	// 								height: t.getUint16(26),
	// 								horizresolution: t.getUint16(28) + t.getUint16(30) / 16,
	// 								vertresolution: t.getUint16(32) + t.getUint16(34) / 16,
	// 								frameCount: t.getUint16(40),
	// 								depth: t.getUint16(74),
	// 								config: n(e.subarray(78, e.byteLength))
	// 						}
	// 				},
	// 				avcC: function(e) {
	// 						var t, i, n, r, a = new DataView(e.buffer,e.byteOffset,e.byteLength), s = {
	// 								configurationVersion: e[0],
	// 								avcProfileIndication: e[1],
	// 								profileCompatibility: e[2],
	// 								avcLevelIndication: e[3],
	// 								lengthSizeMinusOne: 3 & e[4],
	// 								sps: [],
	// 								pps: []
	// 						}, o = 31 & e[5];
	// 						for (n = 6,
	// 						r = 0; r < o; r++)
	// 								i = a.getUint16(n),
	// 								n += 2,
	// 								s.sps.push(new Uint8Array(e.subarray(n, n + i))),
	// 								n += i;
	// 						for (t = e[n],
	// 						n++,
	// 						r = 0; r < t; r++)
	// 								i = a.getUint16(n),
	// 								n += 2,
	// 								s.pps.push(new Uint8Array(e.subarray(n, n + i))),
	// 								n += i;
	// 						return s
	// 				},
	// 				btrt: function(e) {
	// 						var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
	// 						return {
	// 								bufferSizeDB: t.getUint32(0),
	// 								maxBitrate: t.getUint32(4),
	// 								avgBitrate: t.getUint32(8)
	// 						}
	// 				},
	// 				esds: function(e) {
	// 						return {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								esId: e[6] << 8 | e[7],
	// 								streamPriority: 31 & e[8],
	// 								decoderConfig: {
	// 										objectProfileIndication: e[11],
	// 										streamType: e[12] >>> 2 & 63,
	// 										bufferSize: e[13] << 16 | e[14] << 8 | e[15],
	// 										maxBitrate: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19],
	// 										avgBitrate: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23],
	// 										decoderConfigDescriptor: {
	// 												tag: e[24],
	// 												length: e[25],
	// 												audioObjectType: e[26] >>> 3 & 31,
	// 												samplingFrequencyIndex: (7 & e[26]) << 1 | e[27] >>> 7 & 1,
	// 												channelConfiguration: e[27] >>> 3 & 15
	// 										}
	// 								}
	// 						}
	// 				},
	// 				ftyp: function(e) {
	// 						for (var t = new DataView(e.buffer,e.byteOffset,e.byteLength), i = {
	// 								majorBrand: u(e.subarray(0, 4)),
	// 								minorVersion: t.getUint32(4),
	// 								compatibleBrands: []
	// 						}, n = 8; n < e.byteLength; )
	// 								i.compatibleBrands.push(u(e.subarray(n, n + 4))),
	// 								n += 4;
	// 						return i
	// 				},
	// 				dinf: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				dref: function(e) {
	// 						return {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								dataReferences: n(e.subarray(8))
	// 						}
	// 				},
	// 				hdlr: function(e) {
	// 						var t = {
	// 								version: new DataView(e.buffer,e.byteOffset,e.byteLength).getUint8(0),
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								handlerType: u(e.subarray(8, 12)),
	// 								name: ""
	// 						}
	// 							, i = 8;
	// 						for (i = 24; i < e.byteLength; i++) {
	// 								if (0 === e[i]) {
	// 										i++;
	// 										break
	// 								}
	// 								t.name += String.fromCharCode(e[i])
	// 						}
	// 						return t.name = decodeURIComponent(escape(t.name)),
	// 						t
	// 				},
	// 				mdat: function(e) {
	// 						return {
	// 								byteLength: e.byteLength,
	// 								nals: c(e)
	// 						}
	// 				},
	// 				mdhd: function(e) {
	// 						var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = 4, r = {
	// 								version: i.getUint8(0),
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								language: ""
	// 						};
	// 						return 1 === r.version ? (n += 4,
	// 						r.creationTime = s(i.getUint32(n)),
	// 						n += 8,
	// 						r.modificationTime = s(i.getUint32(n)),
	// 						n += 4,
	// 						r.timescale = i.getUint32(n),
	// 						n += 8,
	// 						r.duration = i.getUint32(n)) : (r.creationTime = s(i.getUint32(n)),
	// 						n += 4,
	// 						r.modificationTime = s(i.getUint32(n)),
	// 						n += 4,
	// 						r.timescale = i.getUint32(n),
	// 						n += 4,
	// 						r.duration = i.getUint32(n)),
	// 						n += 4,
	// 						t = i.getUint16(n),
	// 						r.language += String.fromCharCode(96 + (t >> 10)),
	// 						r.language += String.fromCharCode(96 + ((992 & t) >> 5)),
	// 						r.language += String.fromCharCode(96 + (31 & t)),
	// 						r
	// 				},
	// 				mdia: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				mfhd: function(e) {
	// 						return {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								sequenceNumber: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
	// 						}
	// 				},
	// 				minf: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				mp4a: function(e) {
	// 						var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
	// 							, i = {
	// 								dataReferenceIndex: t.getUint16(6),
	// 								channelcount: t.getUint16(16),
	// 								samplesize: t.getUint16(18),
	// 								samplerate: t.getUint16(24) + t.getUint16(26) / 65536
	// 						};
	// 						return e.byteLength > 28 && (i.streamDescriptor = n(e.subarray(28))[0]),
	// 						i
	// 				},
	// 				moof: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				moov: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				mvex: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				mvhd: function(e) {
	// 						var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
	// 							, i = 4
	// 							, n = {
	// 								version: t.getUint8(0),
	// 								flags: new Uint8Array(e.subarray(1, 4))
	// 						};
	// 						return 1 === n.version ? (i += 4,
	// 						n.creationTime = s(t.getUint32(i)),
	// 						i += 8,
	// 						n.modificationTime = s(t.getUint32(i)),
	// 						i += 4,
	// 						n.timescale = t.getUint32(i),
	// 						i += 8,
	// 						n.duration = t.getUint32(i)) : (n.creationTime = s(t.getUint32(i)),
	// 						i += 4,
	// 						n.modificationTime = s(t.getUint32(i)),
	// 						i += 4,
	// 						n.timescale = t.getUint32(i),
	// 						i += 4,
	// 						n.duration = t.getUint32(i)),
	// 						i += 4,
	// 						n.rate = t.getUint16(i) + t.getUint16(i + 2) / 16,
	// 						i += 4,
	// 						n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8,
	// 						i += 2,
	// 						i += 2,
	// 						i += 8,
	// 						n.matrix = new Uint32Array(e.subarray(i, i + 36)),
	// 						i += 36,
	// 						i += 24,
	// 						n.nextTrackId = t.getUint32(i),
	// 						n
	// 				},
	// 				pdin: function(e) {
	// 						var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
	// 						return {
	// 								version: t.getUint8(0),
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								rate: t.getUint32(4),
	// 								initialDelay: t.getUint32(8)
	// 						}
	// 				},
	// 				sdtp: function(e) {
	// 						var t, i = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								samples: []
	// 						};
	// 						for (t = 4; t < e.byteLength; t++)
	// 								i.samples.push({
	// 										dependsOn: (48 & e[t]) >> 4,
	// 										isDependedOn: (12 & e[t]) >> 2,
	// 										hasRedundancy: 3 & e[t]
	// 								});
	// 						return i
	// 				},
	// 				sidx: function(e) {
	// 						var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								references: [],
	// 								referenceId: i.getUint32(4),
	// 								timescale: i.getUint32(8),
	// 								earliestPresentationTime: i.getUint32(12),
	// 								firstOffset: i.getUint32(16)
	// 						}, r = i.getUint16(22);
	// 						for (t = 24; r; t += 12,
	// 						r--)
	// 								n.references.push({
	// 										referenceType: (128 & e[t]) >>> 7,
	// 										referencedSize: 2147483647 & i.getUint32(t),
	// 										subsegmentDuration: i.getUint32(t + 4),
	// 										startsWithSap: !!(128 & e[t + 8]),
	// 										sapType: (112 & e[t + 8]) >>> 4,
	// 										sapDeltaTime: 268435455 & i.getUint32(t + 8)
	// 								});
	// 						return n
	// 				},
	// 				smhd: function(e) {
	// 						return {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								balance: e[4] + e[5] / 256
	// 						}
	// 				},
	// 				stbl: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				stco: function(e) {
	// 						var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								chunkOffsets: []
	// 						}, r = i.getUint32(4);
	// 						for (t = 8; r; t += 4,
	// 						r--)
	// 								n.chunkOffsets.push(i.getUint32(t));
	// 						return n
	// 				},
	// 				stsc: function(e) {
	// 						var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = i.getUint32(4), r = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								sampleToChunks: []
	// 						};
	// 						for (t = 8; n; t += 12,
	// 						n--)
	// 								r.sampleToChunks.push({
	// 										firstChunk: i.getUint32(t),
	// 										samplesPerChunk: i.getUint32(t + 4),
	// 										sampleDescriptionIndex: i.getUint32(t + 8)
	// 								});
	// 						return r
	// 				},
	// 				stsd: function(e) {
	// 						return {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								sampleDescriptions: n(e.subarray(8))
	// 						}
	// 				},
	// 				stsz: function(e) {
	// 						var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								sampleSize: i.getUint32(4),
	// 								entries: []
	// 						};
	// 						for (t = 12; t < e.byteLength; t += 4)
	// 								n.entries.push(i.getUint32(t));
	// 						return n
	// 				},
	// 				stts: function(e) {
	// 						var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								timeToSamples: []
	// 						}, r = i.getUint32(4);
	// 						for (t = 8; r; t += 8,
	// 						r--)
	// 								n.timeToSamples.push({
	// 										sampleCount: i.getUint32(t),
	// 										sampleDelta: i.getUint32(t + 4)
	// 								});
	// 						return n
	// 				},
	// 				styp: function(e) {
	// 						return h.ftyp(e)
	// 				},
	// 				tfdt: function(e) {
	// 						var t = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								baseMediaDecodeTime: a(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7])
	// 						};
	// 						return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32),
	// 						t.baseMediaDecodeTime += a(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])),
	// 						t
	// 				},
	// 				tfhd: function(e) {
	// 						var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								trackId: i.getUint32(4)
	// 						}, r = 1 & n.flags[2], a = 2 & n.flags[2], s = 8 & n.flags[2], o = 16 & n.flags[2], u = 32 & n.flags[2], l = 65536 & n.flags[0], c = 131072 & n.flags[0];
	// 						return t = 8,
	// 						r && (t += 4,
	// 						n.baseDataOffset = i.getUint32(12),
	// 						t += 4),
	// 						a && (n.sampleDescriptionIndex = i.getUint32(t),
	// 						t += 4),
	// 						s && (n.defaultSampleDuration = i.getUint32(t),
	// 						t += 4),
	// 						o && (n.defaultSampleSize = i.getUint32(t),
	// 						t += 4),
	// 						u && (n.defaultSampleFlags = i.getUint32(t)),
	// 						l && (n.durationIsEmpty = !0),
	// 						!r && c && (n.baseDataOffsetIsMoof = !0),
	// 						n
	// 				},
	// 				tkhd: function(e) {
	// 						var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
	// 							, i = 4
	// 							, n = {
	// 								version: t.getUint8(0),
	// 								flags: new Uint8Array(e.subarray(1, 4))
	// 						};
	// 						return 1 === n.version ? (i += 4,
	// 						n.creationTime = s(t.getUint32(i)),
	// 						i += 8,
	// 						n.modificationTime = s(t.getUint32(i)),
	// 						i += 4,
	// 						n.trackId = t.getUint32(i),
	// 						i += 4,
	// 						i += 8,
	// 						n.duration = t.getUint32(i)) : (n.creationTime = s(t.getUint32(i)),
	// 						i += 4,
	// 						n.modificationTime = s(t.getUint32(i)),
	// 						i += 4,
	// 						n.trackId = t.getUint32(i),
	// 						i += 4,
	// 						i += 4,
	// 						n.duration = t.getUint32(i)),
	// 						i += 4,
	// 						i += 8,
	// 						n.layer = t.getUint16(i),
	// 						i += 2,
	// 						n.alternateGroup = t.getUint16(i),
	// 						i += 2,
	// 						n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8,
	// 						i += 2,
	// 						i += 2,
	// 						n.matrix = new Uint32Array(e.subarray(i, i + 36)),
	// 						i += 36,
	// 						n.width = t.getUint16(i) + t.getUint16(i + 2) / 16,
	// 						i += 4,
	// 						n.height = t.getUint16(i) + t.getUint16(i + 2) / 16,
	// 						n
	// 				},
	// 				traf: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				trak: function(e) {
	// 						return {
	// 								boxes: n(e)
	// 						}
	// 				},
	// 				trex: function(e) {
	// 						var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
	// 						return {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								trackId: t.getUint32(4),
	// 								defaultSampleDescriptionIndex: t.getUint32(8),
	// 								defaultSampleDuration: t.getUint32(12),
	// 								defaultSampleSize: t.getUint32(16),
	// 								sampleDependsOn: 3 & e[20],
	// 								sampleIsDependedOn: (192 & e[21]) >> 6,
	// 								sampleHasRedundancy: (48 & e[21]) >> 4,
	// 								samplePaddingValue: (14 & e[21]) >> 1,
	// 								sampleIsDifferenceSample: !!(1 & e[21]),
	// 								sampleDegradationPriority: t.getUint16(22)
	// 						}
	// 				},
	// 				trun: function(e) {
	// 						var t, i = {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								samples: []
	// 						}, n = new DataView(e.buffer,e.byteOffset,e.byteLength), r = 1 & i.flags[2], a = 4 & i.flags[2], s = 1 & i.flags[1], u = 2 & i.flags[1], l = 4 & i.flags[1], c = 8 & i.flags[1], h = n.getUint32(4), d = 8;
	// 						for (r && (i.dataOffset = n.getInt32(d),
	// 						d += 4),
	// 						a && h && (t = {
	// 								flags: o(e.subarray(d, d + 4))
	// 						},
	// 						d += 4,
	// 						s && (t.duration = n.getUint32(d),
	// 						d += 4),
	// 						u && (t.size = n.getUint32(d),
	// 						d += 4),
	// 						c && (t.compositionTimeOffset = n.getUint32(d),
	// 						d += 4),
	// 						i.samples.push(t),
	// 						h--); h--; )
	// 								t = {},
	// 								s && (t.duration = n.getUint32(d),
	// 								d += 4),
	// 								u && (t.size = n.getUint32(d),
	// 								d += 4),
	// 								l && (t.flags = o(e.subarray(d, d + 4)),
	// 								d += 4),
	// 								c && (t.compositionTimeOffset = n.getUint32(d),
	// 								d += 4),
	// 								i.samples.push(t);
	// 						return i
	// 				},
	// 				"url ": function(e) {
	// 						return {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4))
	// 						}
	// 				},
	// 				vmhd: function(e) {
	// 						var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
	// 						return {
	// 								version: e[0],
	// 								flags: new Uint8Array(e.subarray(1, 4)),
	// 								graphicsmode: t.getUint16(4),
	// 								opcolor: new Uint16Array([t.getUint16(6), t.getUint16(8), t.getUint16(10)])
	// 						}
	// 				}
	// 		};
	// 		n = function(e) {
	// 				for (var t, i, n, r, a, s = 0, o = [], l = new ArrayBuffer(e.length), c = new Uint8Array(l), d = 0; d < e.length; ++d)
	// 						c[d] = e[d];
	// 				for (t = new DataView(l); s < e.byteLength; )
	// 						i = t.getUint32(s),
	// 						n = u(e.subarray(s + 4, s + 8)),
	// 						r = i > 1 ? s + i : e.byteLength,
	// 						(a = (h[n] || function(e) {
	// 								return {
	// 										data: e
	// 								}
	// 						}
	// 						)(e.subarray(s + 8, r))).size = i,
	// 						a.type = n,
	// 						o.push(a),
	// 						s = r;
	// 				return o
	// 		}
	// 		,
	// 		r = function(e, t) {
	// 				var i;
	// 				return t = t || 0,
	// 				i = new Array(2 * t + 1).join(" "),
	// 				e.map((function(e, n) {
	// 						return i + e.type + "\n" + Object.keys(e).filter((function(e) {
	// 								return "type" !== e && "boxes" !== e
	// 						}
	// 						)).map((function(t) {
	// 								var n = i + "  " + t + ": "
	// 									, r = e[t];
	// 								if (r instanceof Uint8Array || r instanceof Uint32Array) {
	// 										var a = Array.prototype.slice.call(new Uint8Array(r.buffer,r.byteOffset,r.byteLength)).map((function(e) {
	// 												return " " + ("00" + e.toString(16)).slice(-2)
	// 										}
	// 										)).join("").match(/.{1,24}/g);
	// 										return a ? 1 === a.length ? n + "<" + a.join("").slice(1) + ">" : n + "<\n" + a.map((function(e) {
	// 												return i + "  " + e
	// 										}
	// 										)).join("\n") + "\n" + i + "  >" : n + "<>"
	// 								}
	// 								return n + JSON.stringify(r, null, 2).split("\n").map((function(e, t) {
	// 										return 0 === t ? e : i + "  " + e
	// 								}
	// 								)).join("\n")
	// 						}
	// 						)).join("\n") + (e.boxes ? "\n" + r(e.boxes, t + 1) : "")
	// 				}
	// 				)).join("\n")
	// 		}
	// 		,
	// 		e.exports = {
	// 				inspect: n,
	// 				textify: r,
	// 				parseType: u,
	// 				findBox: l,
	// 				parseTraf: h.traf,
	// 				parseTfdt: h.tfdt,
	// 				parseHdlr: h.hdlr,
	// 				parseTfhd: h.tfhd,
	// 				parseTrun: h.trun,
	// 				parseSidx: h.sidx
	// 		}
	// },
	//aaaaqqqq7777
	o0O0: function(e, t) {
			// window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach),
			// Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
			// Element.prototype.closest || (Element.prototype.closest = function(e) {
			// 		var t = this;
			// 		do {
			// 				if (t.matches(e))
			// 						return t;
			// 				t = t.parentElement || t.parentNode
			// 		} while (null !== t && 1 === t.nodeType);
			// 		return null
			// }
			// ),
			window.getUrlParameter = function(e) {
					e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
					var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
					return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
			}
			// ,
			// window.elementIsVisible = function(e) {
			// 		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
			// }
			// ,
			// window.scrollToElement = function(e) {
			// 		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
			// 		0 === t ? e.scrollIntoView({
			// 				behavior: "smooth"
			// 		}) : window.scrollTo({
			// 				top: e.getBoundingClientRect().top - document.body.getBoundingClientRect().top - t,
			// 				behavior: "smooth"
			// 		})
			// }
			// ,
			// window._debounce = function(e, t, i) {
			// 		var n;
			// 		return function() {
			// 				var r = this
			// 					, a = arguments
			// 					, s = function() {
			// 						n = null,
			// 						i || e.apply(r, a)
			// 				}
			// 					, o = i && !n;
			// 				clearTimeout(n),
			// 				n = setTimeout(s, t),
			// 				o && e.apply(r, a)
			// 		}
			// }
	},
	// p46w: function(e, t, i) {
	// 		var n, r;
	// 		!function(a) {
	// 				if (void 0 === (r = "function" == typeof (n = a) ? n.call(t, i, t, e) : n) || (e.exports = r),
	// 				!0,
	// 				e.exports = a(),
	// 				!!0) {
	// 						var s = window.Cookies
	// 							, o = window.Cookies = a();
	// 						o.noConflict = function() {
	// 								return window.Cookies = s,
	// 								o
	// 						}
	// 				}
	// 		}((function() {
	// 				function e() {
	// 						for (var e = 0, t = {}; e < arguments.length; e++) {
	// 								var i = arguments[e];
	// 								for (var n in i)
	// 										t[n] = i[n]
	// 						}
	// 						return t
	// 				}
	// 				function t(e) {
	// 						return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
	// 				}
	// 				return function i(n) {
	// 						function r() {}
	// 						function a(t, i, a) {
	// 								if ("undefined" != typeof document) {
	// 										"number" == typeof (a = e({
	// 												path: "/"
	// 										}, r.defaults, a)).expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)),
	// 										a.expires = a.expires ? a.expires.toUTCString() : "";
	// 										try {
	// 												var s = JSON.stringify(i);
	// 												/^[\{\[]/.test(s) && (i = s)
	// 										} catch (e) {}
	// 										i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
	// 										t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
	// 										var o = "";
	// 										for (var u in a)
	// 												a[u] && (o += "; " + u,
	// 												!0 !== a[u] && (o += "=" + a[u].split(";")[0]));
	// 										return document.cookie = t + "=" + i + o
	// 								}
	// 						}
	// 						function s(e, i) {
	// 								if ("undefined" != typeof document) {
	// 										for (var r = {}, a = document.cookie ? document.cookie.split("; ") : [], s = 0; s < a.length; s++) {
	// 												var o = a[s].split("=")
	// 													, u = o.slice(1).join("=");
	// 												i || '"' !== u.charAt(0) || (u = u.slice(1, -1));
	// 												try {
	// 														var l = t(o[0]);
	// 														if (u = (n.read || n)(u, l) || t(u),
	// 														i)
	// 																try {
	// 																		u = JSON.parse(u)
	// 																} catch (e) {}
	// 														if (r[l] = u,
	// 														e === l)
	// 																break
	// 												} catch (e) {}
	// 										}
	// 										return e ? r[e] : r
	// 								}
	// 						}
	// 						return r.set = a,
	// 						r.get = function(e) {
	// 								return s(e, !1)
	// 						}
	// 						,
	// 						r.getJSON = function(e) {
	// 								return s(e, !0)
	// 						}
	// 						,
	// 						r.remove = function(t, i) {
	// 								a(t, "", e(i, {
	// 										expires: -1
	// 								}))
	// 						}
	// 						,
	// 						r.defaults = {},
	// 						r.withConverter = i,
	// 						r
	// 				}((function() {}
	// 				))
	// 		}
	// 		))
	// },
	pRiV: function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
					return n
			}
			));
			function n(e) {
					try {
							return e && "function" == typeof e && e.name || "<anonymous>"
					} catch (e) {
							return "<anonymous>"
					}
			}
	},
	pVnL: function(e, t) {
			function i() {
					return e.exports = i = Object.assign || function(e) {
							for (var t = 1; t < arguments.length; t++) {
									var i = arguments[t];
									for (var n in i)
											Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
							}
							return e
					}
					,
					i.apply(this, arguments)
			}
			e.exports = i
	},
	qBcj: function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("gtzJ")
				, r = function() {
					this.el = document.querySelector("[data-player]"),
					this.enabled = null !== this.el,
					this.isReady = !1,
					this.start = performance.now(),
					this.subtitlesContainer = this.el.querySelector("[data-player-subtitles]"),
					this.injectScript(),
					this.injectPauseOverlay()
			};
			r.prototype = {
					injectScript: function() {
							var e = document.createElement("script")
								, t = document.getElementsByTagName("script")[0];
							e.src = "https://www.youtube.com/iframe_api",
							t.parentNode.insertBefore(e, t)
					},
					injectPauseOverlay: function() {
							this.pauseOverlay = document.createElement("div"),
							this.pauseOverlay.style.width = "100%",
							this.pauseOverlay.style.height = "100%",
							this.pauseOverlay.style.position = "absolute",
							this.pauseOverlay.style.top = 0,
							this.pauseOverlay.style.left = 0,
							this.pauseOverlay.style.zIndex = 100,
							this.el.querySelector("[data-player-wrapper]").appendChild(this.pauseOverlay);
							var e = this;
							this.pauseOverlay.addEventListener("click", (function() {
									e.pause()
							}
							))
					},
					ready: function(e) {
							var t = this;
							window.onYouTubeIframeAPIReady = function() {
									t.player = new YT.Player("player",{
											width: "100%",
											videoId: window.App.videoId,
											playerVars: {
													mute: !window.App.isMobile,
													controls: 0,
													modestbranding: 1,
													rel: 0,
													playsinline: 1,
													start: 0,
													cc_load_policy: window.App.subtitles
											},
											events: {
													onReady: function() {
															t.resizePlayer(),
															window.addEventListener("resize", (function() {
																	t.resizePlayer()
															}
															)),
															document.querySelector("[data-player-dim]"),
															t.triggerReadyCallback(e)
													},
													onApiChange: function() {
															t.player.setOption("captions", "fontSize", 2)
													}
											}
									})
							}
					},
					triggerReadyCallback: function(e) {
							var t = this
								, i = this.getLoadTime(this.start);
							i > window.App.loadThreshold && n.b((function(e) {
									e.setLevel("info"),
									e.setExtra("Load time (sec):", {
											"Since page start": Math.floor(t.getLoadTime(window.App.start)),
											"Since player init": Math.floor(i)
									}),
									n.a("[YouTube] Slow player load time")
							}
							)),
							this.isReady = !0,
							e.call()
					},
					getLoadTime: function(e) {
							return (performance.now() - e) / 1e3
					},
					resizePlayer: function() {
							this.el.style.height = document.getElementById("player").offsetHeight - 122 + "px"
					},
					onPlay: function(e) {
							var t = this;
							this.player.addEventListener("onStateChange", (function(i) {
									i.data === YT.PlayerState.PLAYING && (e.call(),
									t.showSubtitles())
							}
							))
					},
					onPause: function(e) {
							var t = this;
							this.player.addEventListener("onStateChange", (function(i) {
									i.data === YT.PlayerState.PAUSED && (e.call(),
									t.pauseSubtitles())
							}
							))
					},
					play: function() {
							this.isReady && this.player.playVideo()
					},
					pause: function() {
							this.isReady && this.player.pauseVideo()
					},
					mute: function() {
							this.isReady && this.player.mute()
					},
					unmute: function() {
							this.isReady && this.player.unMute()
					},
					showSubtitles: function() {
							if (window.App.subtitlesData.length) {
									var e = this;
									this.subtitlesInterval = setInterval((function() {
											var t = e.subtitlesContainer.innerHTML
												, i = e.getSubtitleText(e.player.getCurrentTime());
											e.subtitlesContainer.style.display = "" === i ? "none" : "block",
											t !== i && (e.subtitlesContainer.innerHTML = i)
									}
									), 100)
							}
					},
					pauseSubtitles: function() {
							window.App.subtitlesData.length && clearInterval(this.subtitlesInterval)
					},
					getSubtitleText: function(e) {
							var t = window.App.subtitlesData.filter((function(t) {
									return e > t.startTime && e < t.endTime
							}
							));
							return t.length ? t.pop().text.replace(/\n/g, "<br> ") : ""
					}
			},
			t.default = r
	},
	// qOD0: function(e, t, i) {
	// 		"use strict";
	// 		var n = i("3G1x").discardEmulationPreventionBytes
	// 			, r = i("Tmm6").CaptionStream
	// 			, a = i("KAYj")
	// 			, s = i("mvqA")
	// 			, o = function(e, t) {
	// 				for (var i = e, n = 0; n < t.length; n++) {
	// 						var r = t[n];
	// 						if (i < r.size)
	// 								return r;
	// 						i -= r.size
	// 				}
	// 				return null
	// 		}
	// 			, u = function(e, t) {
	// 				var i = a.findBox(e, ["moof", "traf"])
	// 					, r = a.findBox(e, ["mdat"])
	// 					, u = {}
	// 					, l = [];
	// 				return r.forEach((function(e, t) {
	// 						var n = i[t];
	// 						l.push({
	// 								mdat: e,
	// 								traf: n
	// 						})
	// 				}
	// 				)),
	// 				l.forEach((function(e) {
	// 						var i, r = e.mdat, l = e.traf, c = a.findBox(l, ["tfhd"]), h = s.parseTfhd(c[0]), d = h.trackId, p = a.findBox(l, ["tfdt"]), f = p.length > 0 ? s.parseTfdt(p[0]).baseMediaDecodeTime : 0, m = a.findBox(l, ["trun"]);
	// 						t === d && m.length > 0 && (i = function(e, t, i) {
	// 								var r, a, s, u, l = new DataView(e.buffer,e.byteOffset,e.byteLength), c = [];
	// 								for (a = 0; a + 4 < e.length; a += s)
	// 										if (s = l.getUint32(a),
	// 										a += 4,
	// 										!(s <= 0))
	// 												switch (31 & e[a]) {
	// 												case 6:
	// 														var h = e.subarray(a + 1, a + 1 + s)
	// 															, d = o(a, t);
	// 														r = {
	// 																nalUnitType: "sei_rbsp",
	// 																size: s,
	// 																data: h,
	// 																escapedRBSP: n(h),
	// 																trackId: i
	// 														},
	// 														d ? (r.pts = d.pts,
	// 														r.dts = d.dts,
	// 														u = d) : (r.pts = u.pts,
	// 														r.dts = u.dts),
	// 														c.push(r)
	// 												}
	// 								return c
	// 						}(r, function(e, t, i) {
	// 								var n = t
	// 									, r = i.defaultSampleDuration || 0
	// 									, a = i.defaultSampleSize || 0
	// 									, o = i.trackId
	// 									, u = [];
	// 								return e.forEach((function(e) {
	// 										var t = s.parseTrun(e).samples;
	// 										t.forEach((function(e) {
	// 												void 0 === e.duration && (e.duration = r),
	// 												void 0 === e.size && (e.size = a),
	// 												e.trackId = o,
	// 												e.dts = n,
	// 												void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0),
	// 												e.pts = n + e.compositionTimeOffset,
	// 												n += e.duration
	// 										}
	// 										)),
	// 										u = u.concat(t)
	// 								}
	// 								)),
	// 								u
	// 						}(m, f, h), d),
	// 						u[d] || (u[d] = []),
	// 						u[d] = u[d].concat(i))
	// 				}
	// 				)),
	// 				u
	// 		};
	// 		e.exports = function() {
	// 				var e, t, i, n, a, s, o = !1;
	// 				this.isInitialized = function() {
	// 						return o
	// 				}
	// 				,
	// 				this.init = function(t) {
	// 						e = new r,
	// 						o = !0,
	// 						s = !!t && t.isPartial,
	// 						e.on("data", (function(e) {
	// 								e.startTime = e.startPts / n,
	// 								e.endTime = e.endPts / n,
	// 								a.captions.push(e),
	// 								a.captionStreams[e.stream] = !0
	// 						}
	// 						))
	// 				}
	// 				,
	// 				this.isNewInit = function(e, t) {
	// 						return !(e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length) && (i !== e[0] || n !== t[i])
	// 				}
	// 				,
	// 				this.parse = function(e, r, s) {
	// 						var o;
	// 						if (!this.isInitialized())
	// 								return null;
	// 						if (!r || !s)
	// 								return null;
	// 						if (this.isNewInit(r, s))
	// 								i = r[0],
	// 								n = s[i];
	// 						else if (null === i || !n)
	// 								return t.push(e),
	// 								null;
	// 						for (; t.length > 0; ) {
	// 								var l = t.shift();
	// 								this.parse(l, r, s)
	// 						}
	// 						return null !== (o = function(e, t, i) {
	// 								return null === t ? null : {
	// 										seiNals: u(e, t)[t],
	// 										timescale: i
	// 								}
	// 						}(e, i, n)) && o.seiNals ? (this.pushNals(o.seiNals),
	// 						this.flushStream(),
	// 						a) : null
	// 				}
	// 				,
	// 				this.pushNals = function(t) {
	// 						if (!this.isInitialized() || !t || 0 === t.length)
	// 								return null;
	// 						t.forEach((function(t) {
	// 								e.push(t)
	// 						}
	// 						))
	// 				}
	// 				,
	// 				this.flushStream = function() {
	// 						if (!this.isInitialized())
	// 								return null;
	// 						s ? e.partialFlush() : e.flush()
	// 				}
	// 				,
	// 				this.clearParsedCaptions = function() {
	// 						a.captions = [],
	// 						a.captionStreams = {}
	// 				}
	// 				,
	// 				this.resetCaptionStream = function() {
	// 						if (!this.isInitialized())
	// 								return null;
	// 						e.reset()
	// 				}
	// 				,
	// 				this.clearAllCaptions = function() {
	// 						this.clearParsedCaptions(),
	// 						this.resetCaptionStream()
	// 				}
	// 				,
	// 				this.reset = function() {
	// 						t = [],
	// 						i = null,
	// 						n = null,
	// 						a ? this.clearParsedCaptions() : a = {
	// 								captions: [],
	// 								captionStreams: {}
	// 						},
	// 						this.resetCaptionStream()
	// 				}
	// 				,
	// 				this.reset()
	// 		}
	// },
	"rP/I": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("gtzJ")
				, r = function() {
					this.el = document.querySelector("[data-player]"),
					this.player = this.el.querySelector("video"),
					this.enabled = null !== this.player,
					this.isReady = !1,
					this.start = performance.now(),
					this.player.disablePictureInPicture = !0,
					this.subtitlesContainer = this.el.querySelector("[data-player-subtitles]"),
					this.injectPauseOverlay()
			};
			r.prototype = {
					injectPauseOverlay: function() {
							this.pauseOverlay = document.createElement("div"),
							this.pauseOverlay.style.width = "100%",
							this.pauseOverlay.style.height = "100%",
							this.pauseOverlay.style.position = "absolute",
							this.pauseOverlay.style.top = 0,
							this.pauseOverlay.style.left = 0,
							this.pauseOverlay.style.zIndex = 100,
							this.el.querySelector("[data-player-wrapper]").appendChild(this.pauseOverlay);
							var e = this;
							this.pauseOverlay.addEventListener("click", (function() {
									e.pause()
							}
							))
					},
					ready: function(e) {
							var t = this;
							this.player.readyState >= this.player.HAVE_FUTURE_DATA ? this.triggerReadyCallback(e, "readyState: HAVE_FUTURE_DATA") : this.player.addEventListener("loadedmetadata", (function() {
									t.triggerReadyCallback(e, "event: loadedmetadata")
							}
							), !1),
							setTimeout((function() {
									t.isReady || (n.a("[Google Cloud] Player load timeout"),
									t.triggerReadyCallback(e, "timeout"))
							}
							), 1e4)
					},
					triggerReadyCallback: function(e) {
							var t = this
								, i = this.getLoadTime(this.start);
							i > window.App.loadThreshold && n.b((function(e) {
									e.setLevel("info"),
									e.setExtra("Load time (sec):", {
											"Since page start": Math.floor(t.getLoadTime(window.App.start)),
											"Since player init": Math.floor(i)
									}),
									n.a("[Google Cloud] Slow player load time")
							}
							)),
							this.isReady = !0,
							e.call(this)
					},
					getLoadTime: function(e) {
							return (performance.now() - e) / 1e3
					},
					onPlay: function(e) {
							var t = this;
							this.player.addEventListener("play", (function() {
									e.call(this),
									t.showSubtitles()
							}
							))
					},
					onPause: function(e) {
							var t = this;
							this.player.addEventListener("pause", (function() {
									e.call(this),
									t.pauseSubtitles()
							}
							))
					},
					play: function() {
							this.player.play()
					},
					pause: function() {
							this.player.pause()
					},
					mute: function() {
							this.player.muted = !0
					},
					unmute: function() {
							this.player.muted = !1
					},
					showSubtitles: function() {
							if (window.App.subtitlesData.length) {
									var e = this;
									this.subtitlesInterval = setInterval((function() {
											var t = e.subtitlesContainer.innerHTML
												, i = e.getSubtitleText(e.player.currentTime);
											e.subtitlesContainer.style.display = "" === i ? "none" : "block",
											t !== i && (e.subtitlesContainer.innerHTML = i)
									}
									), 100)
							}
					},
					pauseSubtitles: function() {
							window.App.subtitlesData.length && clearInterval(this.subtitlesInterval)
					},
					getSubtitleText: function(e) {
							var t = window.App.subtitlesData.filter((function(t) {
									return e > t.startTime && e < t.endTime
							}
							));
							return t.length ? t.pop().text.replace(/\n/g, "<br> ") : ""
					}
			},
			t.default = r
	},
	// rnXk: function(e, t, i) {
	// 		"use strict";
	// 		e.exports = {
	// 				H264_STREAM_TYPE: 27,
	// 				ADTS_STREAM_TYPE: 15,
	// 				METADATA_STREAM_TYPE: 21
	// 		}
	// },
	// sDzi: function(e, t) {
	// 		var i = {
	// 				"": 1,
	// 				lr: 1,
	// 				rl: 1
	// 		}
	// 			, n = {
	// 				start: 1,
	// 				center: 1,
	// 				end: 1,
	// 				left: 1,
	// 				right: 1,
	// 				auto: 1,
	// 				"line-left": 1,
	// 				"line-right": 1
	// 		};
	// 		function r(e) {
	// 				return "string" == typeof e && (!!n[e.toLowerCase()] && e.toLowerCase())
	// 		}
	// 		function a(e, t, n) {
	// 				this.hasBeenReset = !1;
	// 				var a = ""
	// 					, s = !1
	// 					, o = e
	// 					, u = t
	// 					, l = n
	// 					, c = null
	// 					, h = ""
	// 					, d = !0
	// 					, p = "auto"
	// 					, f = "start"
	// 					, m = "auto"
	// 					, g = "auto"
	// 					, v = 100
	// 					, y = "center";
	// 				Object.defineProperties(this, {
	// 						id: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return a
	// 								},
	// 								set: function(e) {
	// 										a = "" + e
	// 								}
	// 						},
	// 						pauseOnExit: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return s
	// 								},
	// 								set: function(e) {
	// 										s = !!e
	// 								}
	// 						},
	// 						startTime: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return o
	// 								},
	// 								set: function(e) {
	// 										if ("number" != typeof e)
	// 												throw new TypeError("Start time must be set to a number.");
	// 										o = e,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						endTime: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return u
	// 								},
	// 								set: function(e) {
	// 										if ("number" != typeof e)
	// 												throw new TypeError("End time must be set to a number.");
	// 										u = e,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						text: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return l
	// 								},
	// 								set: function(e) {
	// 										l = "" + e,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						region: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return c
	// 								},
	// 								set: function(e) {
	// 										c = e,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						vertical: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return h
	// 								},
	// 								set: function(e) {
	// 										var t = function(e) {
	// 												return "string" == typeof e && (!!i[e.toLowerCase()] && e.toLowerCase())
	// 										}(e);
	// 										if (!1 === t)
	// 												throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
	// 										h = t,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						snapToLines: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return d
	// 								},
	// 								set: function(e) {
	// 										d = !!e,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						line: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return p
	// 								},
	// 								set: function(e) {
	// 										if ("number" != typeof e && "auto" !== e)
	// 												throw new SyntaxError("Line: an invalid number or illegal string was specified.");
	// 										p = e,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						lineAlign: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return f
	// 								},
	// 								set: function(e) {
	// 										var t = r(e);
	// 										t ? (f = t,
	// 										this.hasBeenReset = !0) : console.warn("lineAlign: an invalid or illegal string was specified.")
	// 								}
	// 						},
	// 						position: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return m
	// 								},
	// 								set: function(e) {
	// 										if (e < 0 || e > 100)
	// 												throw new Error("Position must be between 0 and 100.");
	// 										m = e,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						positionAlign: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return g
	// 								},
	// 								set: function(e) {
	// 										var t = r(e);
	// 										t ? (g = t,
	// 										this.hasBeenReset = !0) : console.warn("positionAlign: an invalid or illegal string was specified.")
	// 								}
	// 						},
	// 						size: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return v
	// 								},
	// 								set: function(e) {
	// 										if (e < 0 || e > 100)
	// 												throw new Error("Size must be between 0 and 100.");
	// 										v = e,
	// 										this.hasBeenReset = !0
	// 								}
	// 						},
	// 						align: {
	// 								enumerable: !0,
	// 								get: function() {
	// 										return y
	// 								},
	// 								set: function(e) {
	// 										var t = r(e);
	// 										if (!t)
	// 												throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
	// 										y = t,
	// 										this.hasBeenReset = !0
	// 								}
	// 						}
	// 				}),
	// 				this.displayState = void 0
	// 		}
	// 		a.prototype.getCueAsHTML = function() {
	// 				return WebVTT.convertCueToDOMTree(window, this.text)
	// 		}
	// 		,
	// 		e.exports = a
	// },
	// sXyB: function(e, t, i) {
	// 		var n = i("SksO");
	// 		function r() {
	// 				if ("undefined" == typeof Reflect || !Reflect.construct)
	// 						return !1;
	// 				if (Reflect.construct.sham)
	// 						return !1;
	// 				if ("function" == typeof Proxy)
	// 						return !0;
	// 				try {
	// 						return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
	// 						))),
	// 						!0
	// 				} catch (e) {
	// 						return !1
	// 				}
	// 		}
	// 		function a(t, i, s) {
	// 				return r() ? e.exports = a = Reflect.construct : e.exports = a = function(e, t, i) {
	// 						var r = [null];
	// 						r.push.apply(r, t);
	// 						var a = new (Function.bind.apply(e, r));
	// 						return i && n(a, i.prototype),
	// 						a
	// 				}
	// 				,
	// 				a.apply(null, arguments)
	// 		}
	// 		e.exports = a
	// },
	// tjlA: function(e, t, i) {
	// 		"use strict";
	// 		(function(e) {
	// 				var n = i("H7XF")
	// 					, r = i("kVK+")
	// 					, a = i("49sm");
	// 				function s() {
	// 						return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
	// 				}
	// 				function o(e, t) {
	// 						if (s() < t)
	// 								throw new RangeError("Invalid typed array length");
	// 						return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)),
	// 						e.length = t),
	// 						e
	// 				}
	// 				function u(e, t, i) {
	// 						if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
	// 								return new u(e,t,i);
	// 						if ("number" == typeof e) {
	// 								if ("string" == typeof t)
	// 										throw new Error("If encoding is specified then the first argument must be a string");
	// 								return h(this, e)
	// 						}
	// 						return l(this, e, t, i)
	// 				}
	// 				function l(e, t, i, n) {
	// 						if ("number" == typeof t)
	// 								throw new TypeError('"value" argument must not be a number');
	// 						return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, i, n) {
	// 								if (t.byteLength,
	// 								i < 0 || t.byteLength < i)
	// 										throw new RangeError("'offset' is out of bounds");
	// 								if (t.byteLength < i + (n || 0))
	// 										throw new RangeError("'length' is out of bounds");
	// 								t = void 0 === i && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,i) : new Uint8Array(t,i,n);
	// 								u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = d(e, t);
	// 								return e
	// 						}(e, t, i, n) : "string" == typeof t ? function(e, t, i) {
	// 								"string" == typeof i && "" !== i || (i = "utf8");
	// 								if (!u.isEncoding(i))
	// 										throw new TypeError('"encoding" must be a valid string encoding');
	// 								var n = 0 | f(t, i)
	// 									, r = (e = o(e, n)).write(t, i);
	// 								r !== n && (e = e.slice(0, r));
	// 								return e
	// 						}(e, t, i) : function(e, t) {
	// 								if (u.isBuffer(t)) {
	// 										var i = 0 | p(t.length);
	// 										return 0 === (e = o(e, i)).length || t.copy(e, 0, 0, i),
	// 										e
	// 								}
	// 								if (t) {
	// 										if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
	// 												return "number" != typeof t.length || (n = t.length) != n ? o(e, 0) : d(e, t);
	// 										if ("Buffer" === t.type && a(t.data))
	// 												return d(e, t.data)
	// 								}
	// 								var n;
	// 								throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
	// 						}(e, t)
	// 				}
	// 				function c(e) {
	// 						if ("number" != typeof e)
	// 								throw new TypeError('"size" argument must be a number');
	// 						if (e < 0)
	// 								throw new RangeError('"size" argument must not be negative')
	// 				}
	// 				function h(e, t) {
	// 						if (c(t),
	// 						e = o(e, t < 0 ? 0 : 0 | p(t)),
	// 						!u.TYPED_ARRAY_SUPPORT)
	// 								for (var i = 0; i < t; ++i)
	// 										e[i] = 0;
	// 						return e
	// 				}
	// 				function d(e, t) {
	// 						var i = t.length < 0 ? 0 : 0 | p(t.length);
	// 						e = o(e, i);
	// 						for (var n = 0; n < i; n += 1)
	// 								e[n] = 255 & t[n];
	// 						return e
	// 				}
	// 				function p(e) {
	// 						if (e >= s())
	// 								throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
	// 						return 0 | e
	// 				}
	// 				function f(e, t) {
	// 						if (u.isBuffer(e))
	// 								return e.length;
	// 						if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
	// 								return e.byteLength;
	// 						"string" != typeof e && (e = "" + e);
	// 						var i = e.length;
	// 						if (0 === i)
	// 								return 0;
	// 						for (var n = !1; ; )
	// 								switch (t) {
	// 								case "ascii":
	// 								case "latin1":
	// 								case "binary":
	// 										return i;
	// 								case "utf8":
	// 								case "utf-8":
	// 								case void 0:
	// 										return F(e).length;
	// 								case "ucs2":
	// 								case "ucs-2":
	// 								case "utf16le":
	// 								case "utf-16le":
	// 										return 2 * i;
	// 								case "hex":
	// 										return i >>> 1;
	// 								case "base64":
	// 										return q(e).length;
	// 								default:
	// 										if (n)
	// 												return F(e).length;
	// 										t = ("" + t).toLowerCase(),
	// 										n = !0
	// 								}
	// 				}
	// 				function m(e, t, i) {
	// 						var n = !1;
	// 						if ((void 0 === t || t < 0) && (t = 0),
	// 						t > this.length)
	// 								return "";
	// 						if ((void 0 === i || i > this.length) && (i = this.length),
	// 						i <= 0)
	// 								return "";
	// 						if ((i >>>= 0) <= (t >>>= 0))
	// 								return "";
	// 						for (e || (e = "utf8"); ; )
	// 								switch (e) {
	// 								case "hex":
	// 										return O(this, t, i);
	// 								case "utf8":
	// 								case "utf-8":
	// 										return C(this, t, i);
	// 								case "ascii":
	// 										return A(this, t, i);
	// 								case "latin1":
	// 								case "binary":
	// 										return x(this, t, i);
	// 								case "base64":
	// 										return E(this, t, i);
	// 								case "ucs2":
	// 								case "ucs-2":
	// 								case "utf16le":
	// 								case "utf-16le":
	// 										return P(this, t, i);
	// 								default:
	// 										if (n)
	// 												throw new TypeError("Unknown encoding: " + e);
	// 										e = (e + "").toLowerCase(),
	// 										n = !0
	// 								}
	// 				}
	// 				function g(e, t, i) {
	// 						var n = e[t];
	// 						e[t] = e[i],
	// 						e[i] = n
	// 				}
	// 				function v(e, t, i, n, r) {
	// 						if (0 === e.length)
	// 								return -1;
	// 						if ("string" == typeof i ? (n = i,
	// 						i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648),
	// 						i = +i,
	// 						isNaN(i) && (i = r ? 0 : e.length - 1),
	// 						i < 0 && (i = e.length + i),
	// 						i >= e.length) {
	// 								if (r)
	// 										return -1;
	// 								i = e.length - 1
	// 						} else if (i < 0) {
	// 								if (!r)
	// 										return -1;
	// 								i = 0
	// 						}
	// 						if ("string" == typeof t && (t = u.from(t, n)),
	// 						u.isBuffer(t))
	// 								return 0 === t.length ? -1 : y(e, t, i, n, r);
	// 						if ("number" == typeof t)
	// 								return t &= 255,
	// 								u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : y(e, [t], i, n, r);
	// 						throw new TypeError("val must be string, number or Buffer")
	// 				}
	// 				function y(e, t, i, n, r) {
	// 						var a, s = 1, o = e.length, u = t.length;
	// 						if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
	// 								if (e.length < 2 || t.length < 2)
	// 										return -1;
	// 								s = 2,
	// 								o /= 2,
	// 								u /= 2,
	// 								i /= 2
	// 						}
	// 						function l(e, t) {
	// 								return 1 === s ? e[t] : e.readUInt16BE(t * s)
	// 						}
	// 						if (r) {
	// 								var c = -1;
	// 								for (a = i; a < o; a++)
	// 										if (l(e, a) === l(t, -1 === c ? 0 : a - c)) {
	// 												if (-1 === c && (c = a),
	// 												a - c + 1 === u)
	// 														return c * s
	// 										} else
	// 												-1 !== c && (a -= a - c),
	// 												c = -1
	// 						} else
	// 								for (i + u > o && (i = o - u),
	// 								a = i; a >= 0; a--) {
	// 										for (var h = !0, d = 0; d < u; d++)
	// 												if (l(e, a + d) !== l(t, d)) {
	// 														h = !1;
	// 														break
	// 												}
	// 										if (h)
	// 												return a
	// 								}
	// 						return -1
	// 				}
	// 				function _(e, t, i, n) {
	// 						i = Number(i) || 0;
	// 						var r = e.length - i;
	// 						n ? (n = Number(n)) > r && (n = r) : n = r;
	// 						var a = t.length;
	// 						if (a % 2 != 0)
	// 								throw new TypeError("Invalid hex string");
	// 						n > a / 2 && (n = a / 2);
	// 						for (var s = 0; s < n; ++s) {
	// 								var o = parseInt(t.substr(2 * s, 2), 16);
	// 								if (isNaN(o))
	// 										return s;
	// 								e[i + s] = o
	// 						}
	// 						return s
	// 				}
	// 				function b(e, t, i, n) {
	// 						return H(F(t, e.length - i), e, i, n)
	// 				}
	// 				function T(e, t, i, n) {
	// 						return H(function(e) {
	// 								for (var t = [], i = 0; i < e.length; ++i)
	// 										t.push(255 & e.charCodeAt(i));
	// 								return t
	// 						}(t), e, i, n)
	// 				}
	// 				function S(e, t, i, n) {
	// 						return T(e, t, i, n)
	// 				}
	// 				function w(e, t, i, n) {
	// 						return H(q(t), e, i, n)
	// 				}
	// 				function k(e, t, i, n) {
	// 						return H(function(e, t) {
	// 								for (var i, n, r, a = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
	// 										i = e.charCodeAt(s),
	// 										n = i >> 8,
	// 										r = i % 256,
	// 										a.push(r),
	// 										a.push(n);
	// 								return a
	// 						}(t, e.length - i), e, i, n)
	// 				}
	// 				function E(e, t, i) {
	// 						return 0 === t && i === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, i))
	// 				}
	// 				function C(e, t, i) {
	// 						i = Math.min(e.length, i);
	// 						for (var n = [], r = t; r < i; ) {
	// 								var a, s, o, u, l = e[r], c = null, h = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
	// 								if (r + h <= i)
	// 										switch (h) {
	// 										case 1:
	// 												l < 128 && (c = l);
	// 												break;
	// 										case 2:
	// 												128 == (192 & (a = e[r + 1])) && (u = (31 & l) << 6 | 63 & a) > 127 && (c = u);
	// 												break;
	// 										case 3:
	// 												a = e[r + 1],
	// 												s = e[r + 2],
	// 												128 == (192 & a) && 128 == (192 & s) && (u = (15 & l) << 12 | (63 & a) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (c = u);
	// 												break;
	// 										case 4:
	// 												a = e[r + 1],
	// 												s = e[r + 2],
	// 												o = e[r + 3],
	// 												128 == (192 & a) && 128 == (192 & s) && 128 == (192 & o) && (u = (15 & l) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & o) > 65535 && u < 1114112 && (c = u)
	// 										}
	// 								null === c ? (c = 65533,
	// 								h = 1) : c > 65535 && (c -= 65536,
	// 								n.push(c >>> 10 & 1023 | 55296),
	// 								c = 56320 | 1023 & c),
	// 								n.push(c),
	// 								r += h
	// 						}
	// 						return function(e) {
	// 								var t = e.length;
	// 								if (t <= 4096)
	// 										return String.fromCharCode.apply(String, e);
	// 								var i = ""
	// 									, n = 0;
	// 								for (; n < t; )
	// 										i += String.fromCharCode.apply(String, e.slice(n, n += 4096));
	// 								return i
	// 						}(n)
	// 				}
	// 				t.Buffer = u,
	// 				t.SlowBuffer = function(e) {
	// 						+e != e && (e = 0);
	// 						return u.alloc(+e)
	// 				}
	// 				,
	// 				t.INSPECT_MAX_BYTES = 50,
	// 				u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
	// 						try {
	// 								var e = new Uint8Array(1);
	// 								return e.__proto__ = {
	// 										__proto__: Uint8Array.prototype,
	// 										foo: function() {
	// 												return 42
	// 										}
	// 								},
	// 								42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
	// 						} catch (e) {
	// 								return !1
	// 						}
	// 				}(),
	// 				t.kMaxLength = s(),
	// 				u.poolSize = 8192,
	// 				u._augment = function(e) {
	// 						return e.__proto__ = u.prototype,
	// 						e
	// 				}
	// 				,
	// 				u.from = function(e, t, i) {
	// 						return l(null, e, t, i)
	// 				}
	// 				,
	// 				u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype,
	// 				u.__proto__ = Uint8Array,
	// 				"undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
	// 						value: null,
	// 						configurable: !0
	// 				})),
	// 				u.alloc = function(e, t, i) {
	// 						return function(e, t, i, n) {
	// 								return c(t),
	// 								t <= 0 ? o(e, t) : void 0 !== i ? "string" == typeof n ? o(e, t).fill(i, n) : o(e, t).fill(i) : o(e, t)
	// 						}(null, e, t, i)
	// 				}
	// 				,
	// 				u.allocUnsafe = function(e) {
	// 						return h(null, e)
	// 				}
	// 				,
	// 				u.allocUnsafeSlow = function(e) {
	// 						return h(null, e)
	// 				}
	// 				,
	// 				u.isBuffer = function(e) {
	// 						return !(null == e || !e._isBuffer)
	// 				}
	// 				,
	// 				u.compare = function(e, t) {
	// 						if (!u.isBuffer(e) || !u.isBuffer(t))
	// 								throw new TypeError("Arguments must be Buffers");
	// 						if (e === t)
	// 								return 0;
	// 						for (var i = e.length, n = t.length, r = 0, a = Math.min(i, n); r < a; ++r)
	// 								if (e[r] !== t[r]) {
	// 										i = e[r],
	// 										n = t[r];
	// 										break
	// 								}
	// 						return i < n ? -1 : n < i ? 1 : 0
	// 				}
	// 				,
	// 				u.isEncoding = function(e) {
	// 						switch (String(e).toLowerCase()) {
	// 						case "hex":
	// 						case "utf8":
	// 						case "utf-8":
	// 						case "ascii":
	// 						case "latin1":
	// 						case "binary":
	// 						case "base64":
	// 						case "ucs2":
	// 						case "ucs-2":
	// 						case "utf16le":
	// 						case "utf-16le":
	// 								return !0;
	// 						default:
	// 								return !1
	// 						}
	// 				}
	// 				,
	// 				u.concat = function(e, t) {
	// 						if (!a(e))
	// 								throw new TypeError('"list" argument must be an Array of Buffers');
	// 						if (0 === e.length)
	// 								return u.alloc(0);
	// 						var i;
	// 						if (void 0 === t)
	// 								for (t = 0,
	// 								i = 0; i < e.length; ++i)
	// 										t += e[i].length;
	// 						var n = u.allocUnsafe(t)
	// 							, r = 0;
	// 						for (i = 0; i < e.length; ++i) {
	// 								var s = e[i];
	// 								if (!u.isBuffer(s))
	// 										throw new TypeError('"list" argument must be an Array of Buffers');
	// 								s.copy(n, r),
	// 								r += s.length
	// 						}
	// 						return n
	// 				}
	// 				,
	// 				u.byteLength = f,
	// 				u.prototype._isBuffer = !0,
	// 				u.prototype.swap16 = function() {
	// 						var e = this.length;
	// 						if (e % 2 != 0)
	// 								throw new RangeError("Buffer size must be a multiple of 16-bits");
	// 						for (var t = 0; t < e; t += 2)
	// 								g(this, t, t + 1);
	// 						return this
	// 				}
	// 				,
	// 				u.prototype.swap32 = function() {
	// 						var e = this.length;
	// 						if (e % 4 != 0)
	// 								throw new RangeError("Buffer size must be a multiple of 32-bits");
	// 						for (var t = 0; t < e; t += 4)
	// 								g(this, t, t + 3),
	// 								g(this, t + 1, t + 2);
	// 						return this
	// 				}
	// 				,
	// 				u.prototype.swap64 = function() {
	// 						var e = this.length;
	// 						if (e % 8 != 0)
	// 								throw new RangeError("Buffer size must be a multiple of 64-bits");
	// 						for (var t = 0; t < e; t += 8)
	// 								g(this, t, t + 7),
	// 								g(this, t + 1, t + 6),
	// 								g(this, t + 2, t + 5),
	// 								g(this, t + 3, t + 4);
	// 						return this
	// 				}
	// 				,
	// 				u.prototype.toString = function() {
	// 						var e = 0 | this.length;
	// 						return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : m.apply(this, arguments)
	// 				}
	// 				,
	// 				u.prototype.equals = function(e) {
	// 						if (!u.isBuffer(e))
	// 								throw new TypeError("Argument must be a Buffer");
	// 						return this === e || 0 === u.compare(this, e)
	// 				}
	// 				,
	// 				u.prototype.inspect = function() {
	// 						var e = ""
	// 							, i = t.INSPECT_MAX_BYTES;
	// 						return this.length > 0 && (e = this.toString("hex", 0, i).match(/.{2}/g).join(" "),
	// 						this.length > i && (e += " ... ")),
	// 						"<Buffer " + e + ">"
	// 				}
	// 				,
	// 				u.prototype.compare = function(e, t, i, n, r) {
	// 						if (!u.isBuffer(e))
	// 								throw new TypeError("Argument must be a Buffer");
	// 						if (void 0 === t && (t = 0),
	// 						void 0 === i && (i = e ? e.length : 0),
	// 						void 0 === n && (n = 0),
	// 						void 0 === r && (r = this.length),
	// 						t < 0 || i > e.length || n < 0 || r > this.length)
	// 								throw new RangeError("out of range index");
	// 						if (n >= r && t >= i)
	// 								return 0;
	// 						if (n >= r)
	// 								return -1;
	// 						if (t >= i)
	// 								return 1;
	// 						if (this === e)
	// 								return 0;
	// 						for (var a = (r >>>= 0) - (n >>>= 0), s = (i >>>= 0) - (t >>>= 0), o = Math.min(a, s), l = this.slice(n, r), c = e.slice(t, i), h = 0; h < o; ++h)
	// 								if (l[h] !== c[h]) {
	// 										a = l[h],
	// 										s = c[h];
	// 										break
	// 								}
	// 						return a < s ? -1 : s < a ? 1 : 0
	// 				}
	// 				,
	// 				u.prototype.includes = function(e, t, i) {
	// 						return -1 !== this.indexOf(e, t, i)
	// 				}
	// 				,
	// 				u.prototype.indexOf = function(e, t, i) {
	// 						return v(this, e, t, i, !0)
	// 				}
	// 				,
	// 				u.prototype.lastIndexOf = function(e, t, i) {
	// 						return v(this, e, t, i, !1)
	// 				}
	// 				,
	// 				u.prototype.write = function(e, t, i, n) {
	// 						if (void 0 === t)
	// 								n = "utf8",
	// 								i = this.length,
	// 								t = 0;
	// 						else if (void 0 === i && "string" == typeof t)
	// 								n = t,
	// 								i = this.length,
	// 								t = 0;
	// 						else {
	// 								if (!isFinite(t))
	// 										throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
	// 								t |= 0,
	// 								isFinite(i) ? (i |= 0,
	// 								void 0 === n && (n = "utf8")) : (n = i,
	// 								i = void 0)
	// 						}
	// 						var r = this.length - t;
	// 						if ((void 0 === i || i > r) && (i = r),
	// 						e.length > 0 && (i < 0 || t < 0) || t > this.length)
	// 								throw new RangeError("Attempt to write outside buffer bounds");
	// 						n || (n = "utf8");
	// 						for (var a = !1; ; )
	// 								switch (n) {
	// 								case "hex":
	// 										return _(this, e, t, i);
	// 								case "utf8":
	// 								case "utf-8":
	// 										return b(this, e, t, i);
	// 								case "ascii":
	// 										return T(this, e, t, i);
	// 								case "latin1":
	// 								case "binary":
	// 										return S(this, e, t, i);
	// 								case "base64":
	// 										return w(this, e, t, i);
	// 								case "ucs2":
	// 								case "ucs-2":
	// 								case "utf16le":
	// 								case "utf-16le":
	// 										return k(this, e, t, i);
	// 								default:
	// 										if (a)
	// 												throw new TypeError("Unknown encoding: " + n);
	// 										n = ("" + n).toLowerCase(),
	// 										a = !0
	// 								}
	// 				}
	// 				,
	// 				u.prototype.toJSON = function() {
	// 						return {
	// 								type: "Buffer",
	// 								data: Array.prototype.slice.call(this._arr || this, 0)
	// 						}
	// 				}
	// 				;
	// 				function A(e, t, i) {
	// 						var n = "";
	// 						i = Math.min(e.length, i);
	// 						for (var r = t; r < i; ++r)
	// 								n += String.fromCharCode(127 & e[r]);
	// 						return n
	// 				}
	// 				function x(e, t, i) {
	// 						var n = "";
	// 						i = Math.min(e.length, i);
	// 						for (var r = t; r < i; ++r)
	// 								n += String.fromCharCode(e[r]);
	// 						return n
	// 				}
	// 				function O(e, t, i) {
	// 						var n = e.length;
	// 						(!t || t < 0) && (t = 0),
	// 						(!i || i < 0 || i > n) && (i = n);
	// 						for (var r = "", a = t; a < i; ++a)
	// 								r += B(e[a]);
	// 						return r
	// 				}
	// 				function P(e, t, i) {
	// 						for (var n = e.slice(t, i), r = "", a = 0; a < n.length; a += 2)
	// 								r += String.fromCharCode(n[a] + 256 * n[a + 1]);
	// 						return r
	// 				}
	// 				function I(e, t, i) {
	// 						if (e % 1 != 0 || e < 0)
	// 								throw new RangeError("offset is not uint");
	// 						if (e + t > i)
	// 								throw new RangeError("Trying to access beyond buffer length")
	// 				}
	// 				function L(e, t, i, n, r, a) {
	// 						if (!u.isBuffer(e))
	// 								throw new TypeError('"buffer" argument must be a Buffer instance');
	// 						if (t > r || t < a)
	// 								throw new RangeError('"value" argument is out of bounds');
	// 						if (i + n > e.length)
	// 								throw new RangeError("Index out of range")
	// 				}
	// 				function D(e, t, i, n) {
	// 						t < 0 && (t = 65535 + t + 1);
	// 						for (var r = 0, a = Math.min(e.length - i, 2); r < a; ++r)
	// 								e[i + r] = (t & 255 << 8 * (n ? r : 1 - r)) >>> 8 * (n ? r : 1 - r)
	// 				}
	// 				function R(e, t, i, n) {
	// 						t < 0 && (t = 4294967295 + t + 1);
	// 						for (var r = 0, a = Math.min(e.length - i, 4); r < a; ++r)
	// 								e[i + r] = t >>> 8 * (n ? r : 3 - r) & 255
	// 				}
	// 				function N(e, t, i, n, r, a) {
	// 						if (i + n > e.length)
	// 								throw new RangeError("Index out of range");
	// 						if (i < 0)
	// 								throw new RangeError("Index out of range")
	// 				}
	// 				function U(e, t, i, n, a) {
	// 						return a || N(e, 0, i, 4),
	// 						r.write(e, t, i, n, 23, 4),
	// 						i + 4
	// 				}
	// 				function M(e, t, i, n, a) {
	// 						return a || N(e, 0, i, 8),
	// 						r.write(e, t, i, n, 52, 8),
	// 						i + 8
	// 				}
	// 				u.prototype.slice = function(e, t) {
	// 						var i, n = this.length;
	// 						if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
	// 						(t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
	// 						t < e && (t = e),
	// 						u.TYPED_ARRAY_SUPPORT)
	// 								(i = this.subarray(e, t)).__proto__ = u.prototype;
	// 						else {
	// 								var r = t - e;
	// 								i = new u(r,void 0);
	// 								for (var a = 0; a < r; ++a)
	// 										i[a] = this[a + e]
	// 						}
	// 						return i
	// 				}
	// 				,
	// 				u.prototype.readUIntLE = function(e, t, i) {
	// 						e |= 0,
	// 						t |= 0,
	// 						i || I(e, t, this.length);
	// 						for (var n = this[e], r = 1, a = 0; ++a < t && (r *= 256); )
	// 								n += this[e + a] * r;
	// 						return n
	// 				}
	// 				,
	// 				u.prototype.readUIntBE = function(e, t, i) {
	// 						e |= 0,
	// 						t |= 0,
	// 						i || I(e, t, this.length);
	// 						for (var n = this[e + --t], r = 1; t > 0 && (r *= 256); )
	// 								n += this[e + --t] * r;
	// 						return n
	// 				}
	// 				,
	// 				u.prototype.readUInt8 = function(e, t) {
	// 						return t || I(e, 1, this.length),
	// 						this[e]
	// 				}
	// 				,
	// 				u.prototype.readUInt16LE = function(e, t) {
	// 						return t || I(e, 2, this.length),
	// 						this[e] | this[e + 1] << 8
	// 				}
	// 				,
	// 				u.prototype.readUInt16BE = function(e, t) {
	// 						return t || I(e, 2, this.length),
	// 						this[e] << 8 | this[e + 1]
	// 				}
	// 				,
	// 				u.prototype.readUInt32LE = function(e, t) {
	// 						return t || I(e, 4, this.length),
	// 						(this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
	// 				}
	// 				,
	// 				u.prototype.readUInt32BE = function(e, t) {
	// 						return t || I(e, 4, this.length),
	// 						16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
	// 				}
	// 				,
	// 				u.prototype.readIntLE = function(e, t, i) {
	// 						e |= 0,
	// 						t |= 0,
	// 						i || I(e, t, this.length);
	// 						for (var n = this[e], r = 1, a = 0; ++a < t && (r *= 256); )
	// 								n += this[e + a] * r;
	// 						return n >= (r *= 128) && (n -= Math.pow(2, 8 * t)),
	// 						n
	// 				}
	// 				,
	// 				u.prototype.readIntBE = function(e, t, i) {
	// 						e |= 0,
	// 						t |= 0,
	// 						i || I(e, t, this.length);
	// 						for (var n = t, r = 1, a = this[e + --n]; n > 0 && (r *= 256); )
	// 								a += this[e + --n] * r;
	// 						return a >= (r *= 128) && (a -= Math.pow(2, 8 * t)),
	// 						a
	// 				}
	// 				,
	// 				u.prototype.readInt8 = function(e, t) {
	// 						return t || I(e, 1, this.length),
	// 						128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
	// 				}
	// 				,
	// 				u.prototype.readInt16LE = function(e, t) {
	// 						t || I(e, 2, this.length);
	// 						var i = this[e] | this[e + 1] << 8;
	// 						return 32768 & i ? 4294901760 | i : i
	// 				}
	// 				,
	// 				u.prototype.readInt16BE = function(e, t) {
	// 						t || I(e, 2, this.length);
	// 						var i = this[e + 1] | this[e] << 8;
	// 						return 32768 & i ? 4294901760 | i : i
	// 				}
	// 				,
	// 				u.prototype.readInt32LE = function(e, t) {
	// 						return t || I(e, 4, this.length),
	// 						this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
	// 				}
	// 				,
	// 				u.prototype.readInt32BE = function(e, t) {
	// 						return t || I(e, 4, this.length),
	// 						this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
	// 				}
	// 				,
	// 				u.prototype.readFloatLE = function(e, t) {
	// 						return t || I(e, 4, this.length),
	// 						r.read(this, e, !0, 23, 4)
	// 				}
	// 				,
	// 				u.prototype.readFloatBE = function(e, t) {
	// 						return t || I(e, 4, this.length),
	// 						r.read(this, e, !1, 23, 4)
	// 				}
	// 				,
	// 				u.prototype.readDoubleLE = function(e, t) {
	// 						return t || I(e, 8, this.length),
	// 						r.read(this, e, !0, 52, 8)
	// 				}
	// 				,
	// 				u.prototype.readDoubleBE = function(e, t) {
	// 						return t || I(e, 8, this.length),
	// 						r.read(this, e, !1, 52, 8)
	// 				}
	// 				,
	// 				u.prototype.writeUIntLE = function(e, t, i, n) {
	// 						(e = +e,
	// 						t |= 0,
	// 						i |= 0,
	// 						n) || L(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
	// 						var r = 1
	// 							, a = 0;
	// 						for (this[t] = 255 & e; ++a < i && (r *= 256); )
	// 								this[t + a] = e / r & 255;
	// 						return t + i
	// 				}
	// 				,
	// 				u.prototype.writeUIntBE = function(e, t, i, n) {
	// 						(e = +e,
	// 						t |= 0,
	// 						i |= 0,
	// 						n) || L(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
	// 						var r = i - 1
	// 							, a = 1;
	// 						for (this[t + r] = 255 & e; --r >= 0 && (a *= 256); )
	// 								this[t + r] = e / a & 255;
	// 						return t + i
	// 				}
	// 				,
	// 				u.prototype.writeUInt8 = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 1, 255, 0),
	// 						u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
	// 						this[t] = 255 & e,
	// 						t + 1
	// 				}
	// 				,
	// 				u.prototype.writeUInt16LE = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 2, 65535, 0),
	// 						u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
	// 						this[t + 1] = e >>> 8) : D(this, e, t, !0),
	// 						t + 2
	// 				}
	// 				,
	// 				u.prototype.writeUInt16BE = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 2, 65535, 0),
	// 						u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
	// 						this[t + 1] = 255 & e) : D(this, e, t, !1),
	// 						t + 2
	// 				}
	// 				,
	// 				u.prototype.writeUInt32LE = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 4, 4294967295, 0),
	// 						u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
	// 						this[t + 2] = e >>> 16,
	// 						this[t + 1] = e >>> 8,
	// 						this[t] = 255 & e) : R(this, e, t, !0),
	// 						t + 4
	// 				}
	// 				,
	// 				u.prototype.writeUInt32BE = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 4, 4294967295, 0),
	// 						u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
	// 						this[t + 1] = e >>> 16,
	// 						this[t + 2] = e >>> 8,
	// 						this[t + 3] = 255 & e) : R(this, e, t, !1),
	// 						t + 4
	// 				}
	// 				,
	// 				u.prototype.writeIntLE = function(e, t, i, n) {
	// 						if (e = +e,
	// 						t |= 0,
	// 						!n) {
	// 								var r = Math.pow(2, 8 * i - 1);
	// 								L(this, e, t, i, r - 1, -r)
	// 						}
	// 						var a = 0
	// 							, s = 1
	// 							, o = 0;
	// 						for (this[t] = 255 & e; ++a < i && (s *= 256); )
	// 								e < 0 && 0 === o && 0 !== this[t + a - 1] && (o = 1),
	// 								this[t + a] = (e / s >> 0) - o & 255;
	// 						return t + i
	// 				}
	// 				,
	// 				u.prototype.writeIntBE = function(e, t, i, n) {
	// 						if (e = +e,
	// 						t |= 0,
	// 						!n) {
	// 								var r = Math.pow(2, 8 * i - 1);
	// 								L(this, e, t, i, r - 1, -r)
	// 						}
	// 						var a = i - 1
	// 							, s = 1
	// 							, o = 0;
	// 						for (this[t + a] = 255 & e; --a >= 0 && (s *= 256); )
	// 								e < 0 && 0 === o && 0 !== this[t + a + 1] && (o = 1),
	// 								this[t + a] = (e / s >> 0) - o & 255;
	// 						return t + i
	// 				}
	// 				,
	// 				u.prototype.writeInt8 = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 1, 127, -128),
	// 						u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
	// 						e < 0 && (e = 255 + e + 1),
	// 						this[t] = 255 & e,
	// 						t + 1
	// 				}
	// 				,
	// 				u.prototype.writeInt16LE = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 2, 32767, -32768),
	// 						u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
	// 						this[t + 1] = e >>> 8) : D(this, e, t, !0),
	// 						t + 2
	// 				}
	// 				,
	// 				u.prototype.writeInt16BE = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 2, 32767, -32768),
	// 						u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
	// 						this[t + 1] = 255 & e) : D(this, e, t, !1),
	// 						t + 2
	// 				}
	// 				,
	// 				u.prototype.writeInt32LE = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 4, 2147483647, -2147483648),
	// 						u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
	// 						this[t + 1] = e >>> 8,
	// 						this[t + 2] = e >>> 16,
	// 						this[t + 3] = e >>> 24) : R(this, e, t, !0),
	// 						t + 4
	// 				}
	// 				,
	// 				u.prototype.writeInt32BE = function(e, t, i) {
	// 						return e = +e,
	// 						t |= 0,
	// 						i || L(this, e, t, 4, 2147483647, -2147483648),
	// 						e < 0 && (e = 4294967295 + e + 1),
	// 						u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
	// 						this[t + 1] = e >>> 16,
	// 						this[t + 2] = e >>> 8,
	// 						this[t + 3] = 255 & e) : R(this, e, t, !1),
	// 						t + 4
	// 				}
	// 				,
	// 				u.prototype.writeFloatLE = function(e, t, i) {
	// 						return U(this, e, t, !0, i)
	// 				}
	// 				,
	// 				u.prototype.writeFloatBE = function(e, t, i) {
	// 						return U(this, e, t, !1, i)
	// 				}
	// 				,
	// 				u.prototype.writeDoubleLE = function(e, t, i) {
	// 						return M(this, e, t, !0, i)
	// 				}
	// 				,
	// 				u.prototype.writeDoubleBE = function(e, t, i) {
	// 						return M(this, e, t, !1, i)
	// 				}
	// 				,
	// 				u.prototype.copy = function(e, t, i, n) {
	// 						if (i || (i = 0),
	// 						n || 0 === n || (n = this.length),
	// 						t >= e.length && (t = e.length),
	// 						t || (t = 0),
	// 						n > 0 && n < i && (n = i),
	// 						n === i)
	// 								return 0;
	// 						if (0 === e.length || 0 === this.length)
	// 								return 0;
	// 						if (t < 0)
	// 								throw new RangeError("targetStart out of bounds");
	// 						if (i < 0 || i >= this.length)
	// 								throw new RangeError("sourceStart out of bounds");
	// 						if (n < 0)
	// 								throw new RangeError("sourceEnd out of bounds");
	// 						n > this.length && (n = this.length),
	// 						e.length - t < n - i && (n = e.length - t + i);
	// 						var r, a = n - i;
	// 						if (this === e && i < t && t < n)
	// 								for (r = a - 1; r >= 0; --r)
	// 										e[r + t] = this[r + i];
	// 						else if (a < 1e3 || !u.TYPED_ARRAY_SUPPORT)
	// 								for (r = 0; r < a; ++r)
	// 										e[r + t] = this[r + i];
	// 						else
	// 								Uint8Array.prototype.set.call(e, this.subarray(i, i + a), t);
	// 						return a
	// 				}
	// 				,
	// 				u.prototype.fill = function(e, t, i, n) {
	// 						if ("string" == typeof e) {
	// 								if ("string" == typeof t ? (n = t,
	// 								t = 0,
	// 								i = this.length) : "string" == typeof i && (n = i,
	// 								i = this.length),
	// 								1 === e.length) {
	// 										var r = e.charCodeAt(0);
	// 										r < 256 && (e = r)
	// 								}
	// 								if (void 0 !== n && "string" != typeof n)
	// 										throw new TypeError("encoding must be a string");
	// 								if ("string" == typeof n && !u.isEncoding(n))
	// 										throw new TypeError("Unknown encoding: " + n)
	// 						} else
	// 								"number" == typeof e && (e &= 255);
	// 						if (t < 0 || this.length < t || this.length < i)
	// 								throw new RangeError("Out of range index");
	// 						if (i <= t)
	// 								return this;
	// 						var a;
	// 						if (t >>>= 0,
	// 						i = void 0 === i ? this.length : i >>> 0,
	// 						e || (e = 0),
	// 						"number" == typeof e)
	// 								for (a = t; a < i; ++a)
	// 										this[a] = e;
	// 						else {
	// 								var s = u.isBuffer(e) ? e : F(new u(e,n).toString())
	// 									, o = s.length;
	// 								for (a = 0; a < i - t; ++a)
	// 										this[a + t] = s[a % o]
	// 						}
	// 						return this
	// 				}
	// 				;
	// 				var j = /[^+\/0-9A-Za-z-_]/g;
	// 				function B(e) {
	// 						return e < 16 ? "0" + e.toString(16) : e.toString(16)
	// 				}
	// 				function F(e, t) {
	// 						var i;
	// 						t = t || 1 / 0;
	// 						for (var n = e.length, r = null, a = [], s = 0; s < n; ++s) {
	// 								if ((i = e.charCodeAt(s)) > 55295 && i < 57344) {
	// 										if (!r) {
	// 												if (i > 56319) {
	// 														(t -= 3) > -1 && a.push(239, 191, 189);
	// 														continue
	// 												}
	// 												if (s + 1 === n) {
	// 														(t -= 3) > -1 && a.push(239, 191, 189);
	// 														continue
	// 												}
	// 												r = i;
	// 												continue
	// 										}
	// 										if (i < 56320) {
	// 												(t -= 3) > -1 && a.push(239, 191, 189),
	// 												r = i;
	// 												continue
	// 										}
	// 										i = 65536 + (r - 55296 << 10 | i - 56320)
	// 								} else
	// 										r && (t -= 3) > -1 && a.push(239, 191, 189);
	// 								if (r = null,
	// 								i < 128) {
	// 										if ((t -= 1) < 0)
	// 												break;
	// 										a.push(i)
	// 								} else if (i < 2048) {
	// 										if ((t -= 2) < 0)
	// 												break;
	// 										a.push(i >> 6 | 192, 63 & i | 128)
	// 								} else if (i < 65536) {
	// 										if ((t -= 3) < 0)
	// 												break;
	// 										a.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
	// 								} else {
	// 										if (!(i < 1114112))
	// 												throw new Error("Invalid code point");
	// 										if ((t -= 4) < 0)
	// 												break;
	// 										a.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
	// 								}
	// 						}
	// 						return a
	// 				}
	// 				function q(e) {
	// 						return n.toByteArray(function(e) {
	// 								if ((e = function(e) {
	// 										return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
	// 								}(e).replace(j, "")).length < 2)
	// 										return "";
	// 								for (; e.length % 4 != 0; )
	// 										e += "=";
	// 								return e
	// 						}(e))
	// 				}
	// 				function H(e, t, i, n) {
	// 						for (var r = 0; r < n && !(r + i >= t.length || r >= e.length); ++r)
	// 								t[r + i] = e[r];
	// 						return r
	// 				}
	// 		}
	// 		).call(this, i("yLpj"))
	// },
	vFt6: function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
					return r
			}
			));
			var n = i("9AQC");
			function r(e) {
					try {
							for (var t = e, i = [], n = 0, r = 0, s = " > ".length, o = void 0; t && n++ < 5 && !("html" === (o = a(t)) || n > 1 && r + i.length * s + o.length >= 80); )
									i.push(o),
									r += o.length,
									t = t.parentNode;
							return i.reverse().join(" > ")
					} catch (e) {
							return "<unknown>"
					}
			}
			function a(e) {
					var t, i, r, a, s, o = e, u = [];
					if (!o || !o.tagName)
							return "";
					if (u.push(o.tagName.toLowerCase()),
					o.id && u.push("#" + o.id),
					(t = o.className) && Object(n.h)(t))
							for (i = t.split(/\s+/),
							s = 0; s < i.length; s++)
									u.push("." + i[s]);
					var l = ["type", "name", "title", "alt"];
					for (s = 0; s < l.length; s++)
							r = l[s],
							(a = o.getAttribute(r)) && u.push("[" + r + '="' + a + '"]');
					return u.join("")
			}
	},
	vgmO: function(e, t, i) {
			(function(t) {
					var i;
					i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
					e.exports = i
			}
			).call(this, i("yLpj"))
	},
	wCA9: function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
					return n
			}
			));
			var n = function() {
					function e() {
							this._hasWeakSet = "function" == typeof WeakSet,
							this._inner = this._hasWeakSet ? new WeakSet : []
					}
					return e.prototype.memoize = function(e) {
							if (this._hasWeakSet)
									return !!this._inner.has(e) || (this._inner.add(e),
									!1);
							for (var t = 0; t < this._inner.length; t++) {
									if (this._inner[t] === e)
											return !0
							}
							return this._inner.push(e),
							!1
					}
					,
					e.prototype.unmemoize = function(e) {
							if (this._hasWeakSet)
									this._inner.delete(e);
							else
									for (var t = 0; t < this._inner.length; t++)
											if (this._inner[t] === e) {
													this._inner.splice(t, 1);
													break
											}
					}
					,
					e
			}()
	},
	yLpj: function(e, t) {
			var i;
			i = function() {
					return this
			}();
			try {
					i = i || new Function("return this")()
			} catch (e) {
					"object" == typeof window && (i = window)
			}
			e.exports = i
	}
});
