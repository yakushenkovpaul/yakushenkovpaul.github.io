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
	"8VTv": function(e, t, i) {
			var n;
			(n = {
					youtube: i("qBcj").default,
			}).hasOwnProperty('youtube') && (window.player = new n['youtube'],
			player.enabled && (player.ready((function() {
					if (window.playerReady = !0,
					"0" !== getUrlParameter("video")) {
							"cloud" !== 'youtube' && "0" !== getUrlParameter("ap") && player.play(),
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

	bUC5: function(e, t, i) {
			i("o0O0"),
			i("8VTv")
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
	iWKX: function(e, t) {},
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
	mrSG: function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
					return n
			}
			)),
			i.d(t, "c", (function() {
					return r
			}
			)),
			i.d(t, "b", (function() {
					return s
			}
			));
			var n = function() {
					return (n = Object.assign || function(e) {
							for (var t, i = 1, n = arguments.length; i < n; i++)
									for (var r in t = arguments[i])
											Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
							return e
					}
					).apply(this, arguments)
			};
			function r(e) {
					var t = "function" == typeof Symbol && Symbol.iterator
						, i = t && e[t]
						, n = 0;
					if (i)
							return i.call(e);
					if (e && "number" == typeof e.length)
							return {
									next: function() {
											return e && n >= e.length && (e = void 0),
											{
													value: e && e[n++],
													done: !e
											}
									}
							};
					throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}
			function a(e, t) {
					var i = "function" == typeof Symbol && e[Symbol.iterator];
					if (!i)
							return e;
					var n, r, a = i.call(e), s = [];
					try {
							for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
									s.push(n.value)
					} catch (e) {
							r = {
									error: e
							}
					} finally {
							try {
									n && !n.done && (i = a.return) && i.call(a)
							} finally {
									if (r)
											throw r.error
							}
					}
					return s
			}
			function s() {
					for (var e = [], t = 0; t < arguments.length; t++)
							e = e.concat(a(arguments[t]));
					return e
			}
	},
	o0O0: function(e, t) {
			window.getUrlParameter = function(e) {
					e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
					var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
					return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
			}
	},
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