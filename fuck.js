! function() {
    const e = "/collab-vm/user-vm/";
    var t = {
            DEBUG: !1,
            DEBUG_NO_TIMEOUT: !1,
            DEBUG_NO_NSFW: !1,
            DEBUG_NO_CONNECT: !1,
            DEBUG_VM_LIST: !1,
            DEBUG_VM_LIST: !1,
            debugLog: function() {
                this.DEBUG && console.log.apply(null, arguments)
            },
            rootDir: e,
            chatSound: e + "notify",
            serverAddress: "computernewb.com/collab-vm/beacon",
            additionalNodes: ["collabhost.computernewb.com/collab-vm/", "ru.private.hugryy.ru:6001","pc.elijah-dev.tk/collab-vm", "pc.elijah-dev.tk/cvm", "193.122.158.29:6004", "cvm.outofmemory.online:6004", "135.148.138.106:6004", "193.122.158.29:6005", "193.122.158.29:6006", "193.122.158.29:6007", "193.122.158.29:6008", "193.122.158.29:6009", "193.122.158.29:6010", "193.122.158.29:6011", "193.122.158.29:6012", "132.145.154.145:6006", "132.145.154.145:6007", "20.125.113.228:6004", "20.125.113.228:6005", "192.187.100.2/dankvm", "86.20.132.115:6004", "darkok.xyz:3037/cvmws", "darkok.xyz:61000", "mv.darkok.xyz/6005", "209.124.223.10:6004", "150.136.160.182:6004", "150.136.246.126:6007", "43.252.213.116:6004", "43.252.213.116:6005", "150.136.246.126:6004", "150.136.246.126:6005", "150.136.246.126:6006", "68.108.111.228:6004", "70.175.44.148:6004", "ayunvm.glitch.me:80", "uvmhost.ml:6005", "naemvm.cf:6004", "naemvm.cf:6005"]
        },
        n = {
            language: "en_US",
            type: "qwerty",
            width: 22,
            keys: {
                Back: 65288,
                Tab: 65289,
                Enter: 65293,
                Esc: 65307,
                Home: 65360,
                PgUp: 65365,
                PgDn: 65366,
                End: 65367,
                Ins: 65379,
                F1: 65470,
                F2: 65471,
                F3: 65472,
                F4: 65473,
                F5: 65474,
                F6: 65475,
                F7: 65476,
                F8: 65477,
                F9: 65478,
                F10: 65479,
                F11: 65480,
                F12: 65481,
                Del: 65535,
                Space: " ",
                Left: [{
                    title: "←",
                    keysym: 65361
                }],
                Up: [{
                    title: "↑",
                    keysym: 65362
                }],
                Right: [{
                    title: "→",
                    keysym: 65363
                }],
                Down: [{
                    title: "↓",
                    keysym: 65364
                }],
                Menu: [{
                    title: "Menu",
                    modifier: "super",
                    keysym: 65383
                }],
                LShift: [{
                    title: "Shift",
                    modifier: "shift",
                    keysym: 65505
                }],
                RShift: [{
                    title: "Shift",
                    modifier: "shift",
                    keysym: 65506
                }],
                LCtrl: [{
                    title: "Ctrl",
                    modifier: "control",
                    keysym: 65507
                }],
                RCtrl: [{
                    title: "Ctrl",
                    modifier: "control",
                    keysym: 65508
                }],
                Caps: [{
                    title: "Caps",
                    modifier: "caps",
                    keysym: 65509
                }],
                LAlt: [{
                    title: "Alt",
                    modifier: "alt",
                    keysym: 65513
                }],
                RAlt: [{
                    title: "Alt",
                    modifier: "alt",
                    keysym: 65514
                }],
                Super: [{
                    title: "Super",
                    modifier: "super",
                    keysym: 65515
                }],
                "`": [{
                    title: "`",
                    requires: []
                }, {
                    title: "~",
                    requires: ["shift"]
                }],
                1: [{
                    title: "1",
                    requires: []
                }, {
                    title: "!",
                    requires: ["shift"]
                }],
                2: [{
                    title: "2",
                    requires: []
                }, {
                    title: "@",
                    requires: ["shift"]
                }],
                3: [{
                    title: "3",
                    requires: []
                }, {
                    title: "#",
                    requires: ["shift"]
                }],
                4: [{
                    title: "4",
                    requires: []
                }, {
                    title: "$",
                    requires: ["shift"]
                }],
                5: [{
                    title: "5",
                    requires: []
                }, {
                    title: "%",
                    requires: ["shift"]
                }],
                6: [{
                    title: "6",
                    requires: []
                }, {
                    title: "^",
                    requires: ["shift"]
                }],
                7: [{
                    title: "7",
                    requires: []
                }, {
                    title: "&",
                    requires: ["shift"]
                }],
                8: [{
                    title: "8",
                    requires: []
                }, {
                    title: "*",
                    requires: ["shift"]
                }],
                9: [{
                    title: "9",
                    requires: []
                }, {
                    title: "(",
                    requires: ["shift"]
                }],
                0: [{
                    title: "0",
                    requires: []
                }, {
                    title: ")",
                    requires: ["shift"]
                }],
                "-": [{
                    title: "-",
                    requires: []
                }, {
                    title: "_",
                    requires: ["shift"]
                }],
                "=": [{
                    title: "=",
                    requires: []
                }, {
                    title: "+",
                    requires: ["shift"]
                }],
                ",": [{
                    title: ",",
                    requires: []
                }, {
                    title: "<",
                    requires: ["shift"]
                }],
                ".": [{
                    title: ".",
                    requires: []
                }, {
                    title: ">",
                    requires: ["shift"]
                }],
                "/": [{
                    title: "/",
                    requires: []
                }, {
                    title: "?",
                    requires: ["shift"]
                }],
                "[": [{
                    title: "[",
                    requires: []
                }, {
                    title: "{",
                    requires: ["shift"]
                }],
                "]": [{
                    title: "]",
                    requires: []
                }, {
                    title: "}",
                    requires: ["shift"]
                }],
                "\\": [{
                    title: "\\",
                    requires: []
                }, {
                    title: "|",
                    requires: ["shift"]
                }],
                ";": [{
                    title: ";",
                    requires: []
                }, {
                    title: ":",
                    requires: ["shift"]
                }],
                "'": [{
                    title: "'",
                    requires: []
                }, {
                    title: '"',
                    requires: ["shift"]
                }],
                q: [{
                    title: "q",
                    requires: []
                }, {
                    title: "Q",
                    requires: ["caps"]
                }, {
                    title: "Q",
                    requires: ["shift"]
                }, {
                    title: "q",
                    requires: ["caps", "shift"]
                }],
                w: [{
                    title: "w",
                    requires: []
                }, {
                    title: "W",
                    requires: ["caps"]
                }, {
                    title: "W",
                    requires: ["shift"]
                }, {
                    title: "w",
                    requires: ["caps", "shift"]
                }],
                e: [{
                    title: "e",
                    requires: []
                }, {
                    title: "E",
                    requires: ["caps"]
                }, {
                    title: "E",
                    requires: ["shift"]
                }, {
                    title: "e",
                    requires: ["caps", "shift"]
                }],
                r: [{
                    title: "r",
                    requires: []
                }, {
                    title: "R",
                    requires: ["caps"]
                }, {
                    title: "R",
                    requires: ["shift"]
                }, {
                    title: "r",
                    requires: ["caps", "shift"]
                }],
                t: [{
                    title: "t",
                    requires: []
                }, {
                    title: "T",
                    requires: ["caps"]
                }, {
                    title: "T",
                    requires: ["shift"]
                }, {
                    title: "t",
                    requires: ["caps", "shift"]
                }],
                y: [{
                    title: "y",
                    requires: []
                }, {
                    title: "Y",
                    requires: ["caps"]
                }, {
                    title: "Y",
                    requires: ["shift"]
                }, {
                    title: "y",
                    requires: ["caps", "shift"]
                }],
                u: [{
                    title: "u",
                    requires: []
                }, {
                    title: "U",
                    requires: ["caps"]
                }, {
                    title: "U",
                    requires: ["shift"]
                }, {
                    title: "u",
                    requires: ["caps", "shift"]
                }],
                i: [{
                    title: "i",
                    requires: []
                }, {
                    title: "I",
                    requires: ["caps"]
                }, {
                    title: "I",
                    requires: ["shift"]
                }, {
                    title: "i",
                    requires: ["caps", "shift"]
                }],
                o: [{
                    title: "o",
                    requires: []
                }, {
                    title: "O",
                    requires: ["caps"]
                }, {
                    title: "O",
                    requires: ["shift"]
                }, {
                    title: "o",
                    requires: ["caps", "shift"]
                }],
                p: [{
                    title: "p",
                    requires: []
                }, {
                    title: "P",
                    requires: ["caps"]
                }, {
                    title: "P",
                    requires: ["shift"]
                }, {
                    title: "p",
                    requires: ["caps", "shift"]
                }],
                a: [{
                    title: "a",
                    requires: []
                }, {
                    title: "A",
                    requires: ["caps"]
                }, {
                    title: "A",
                    requires: ["shift"]
                }, {
                    title: "a",
                    requires: ["caps", "shift"]
                }],
                s: [{
                    title: "s",
                    requires: []
                }, {
                    title: "S",
                    requires: ["caps"]
                }, {
                    title: "S",
                    requires: ["shift"]
                }, {
                    title: "s",
                    requires: ["caps", "shift"]
                }],
                d: [{
                    title: "d",
                    requires: []
                }, {
                    title: "D",
                    requires: ["caps"]
                }, {
                    title: "D",
                    requires: ["shift"]
                }, {
                    title: "d",
                    requires: ["caps", "shift"]
                }],
                f: [{
                    title: "f",
                    requires: []
                }, {
                    title: "F",
                    requires: ["caps"]
                }, {
                    title: "F",
                    requires: ["shift"]
                }, {
                    title: "f",
                    requires: ["caps", "shift"]
                }],
                g: [{
                    title: "g",
                    requires: []
                }, {
                    title: "G",
                    requires: ["caps"]
                }, {
                    title: "G",
                    requires: ["shift"]
                }, {
                    title: "g",
                    requires: ["caps", "shift"]
                }],
                h: [{
                    title: "h",
                    requires: []
                }, {
                    title: "H",
                    requires: ["caps"]
                }, {
                    title: "H",
                    requires: ["shift"]
                }, {
                    title: "h",
                    requires: ["caps", "shift"]
                }],
                j: [{
                    title: "j",
                    requires: []
                }, {
                    title: "J",
                    requires: ["caps"]
                }, {
                    title: "J",
                    requires: ["shift"]
                }, {
                    title: "j",
                    requires: ["caps", "shift"]
                }],
                k: [{
                    title: "k",
                    requires: []
                }, {
                    title: "K",
                    requires: ["caps"]
                }, {
                    title: "K",
                    requires: ["shift"]
                }, {
                    title: "k",
                    requires: ["caps", "shift"]
                }],
                l: [{
                    title: "l",
                    requires: []
                }, {
                    title: "L",
                    requires: ["caps"]
                }, {
                    title: "L",
                    requires: ["shift"]
                }, {
                    title: "l",
                    requires: ["caps", "shift"]
                }],
                z: [{
                    title: "z",
                    requires: []
                }, {
                    title: "Z",
                    requires: ["caps"]
                }, {
                    title: "Z",
                    requires: ["shift"]
                }, {
                    title: "z",
                    requires: ["caps", "shift"]
                }],
                x: [{
                    title: "x",
                    requires: []
                }, {
                    title: "X",
                    requires: ["caps"]
                }, {
                    title: "X",
                    requires: ["shift"]
                }, {
                    title: "x",
                    requires: ["caps", "shift"]
                }],
                c: [{
                    title: "c",
                    requires: []
                }, {
                    title: "C",
                    requires: ["caps"]
                }, {
                    title: "C",
                    requires: ["shift"]
                }, {
                    title: "c",
                    requires: ["caps", "shift"]
                }],
                v: [{
                    title: "v",
                    requires: []
                }, {
                    title: "V",
                    requires: ["caps"]
                }, {
                    title: "V",
                    requires: ["shift"]
                }, {
                    title: "v",
                    requires: ["caps", "shift"]
                }],
                b: [{
                    title: "b",
                    requires: []
                }, {
                    title: "B",
                    requires: ["caps"]
                }, {
                    title: "B",
                    requires: ["shift"]
                }, {
                    title: "b",
                    requires: ["caps", "shift"]
                }],
                n: [{
                    title: "n",
                    requires: []
                }, {
                    title: "N",
                    requires: ["caps"]
                }, {
                    title: "N",
                    requires: ["shift"]
                }, {
                    title: "n",
                    requires: ["caps", "shift"]
                }],
                m: [{
                    title: "m",
                    requires: []
                }, {
                    title: "M",
                    requires: ["caps"]
                }, {
                    title: "M",
                    requires: ["shift"]
                }, {
                    title: "m",
                    requires: ["caps", "shift"]
                }]
            },
            layout: [
                ["Esc", .7, "F1", "F2", "F3", "F4", .7, "F5", "F6", "F7", "F8", .7, "F9", "F10", "F11", "F12"],
                [.1], {
                    main: {
                        alpha: [
                            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Back"],
                            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
                            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
                            ["LShift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "RShift"],
                            ["LCtrl", "Super", "LAlt", "Space", "RAlt", "Menu", "RCtrl"]
                        ],
                        movement: [
                            ["Ins", "Home", "PgUp"],
                            ["Del", "End", "PgDn"],
                            [1],
                            ["Up"],
                            ["Left", "Down", "Right"]
                        ]
                    }
                }
            ],
            keyWidths: {
                Back: 2,
                Tab: 1.5,
                "\\": 1.5,
                Caps: 1.85,
                Enter: 2.25,
                LShift: 2.1,
                RShift: 3.1,
                LCtrl: 1.6,
                Super: 1.6,
                LAlt: 1.6,
                Space: 6.1,
                RAlt: 1.6,
                Menu: 1.6,
                RCtrl: 1.6,
                Ins: 1.6,
                Home: 1.6,
                PgUp: 1.6,
                Del: 1.6,
                End: 1.6,
                PgDn: 1.6
            }
        };
    "object" != typeof JSON && (JSON = {}),
        function() {
            function e(e) {
                return e < 10 ? "0" + e : e
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
                return this.valueOf()
            });
            var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                n = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                r, a, i = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                o;

            function s(e) {
                return n.lastIndex = 0, n.test(e) ? '"' + e.replace(n, (function(e) {
                    var t = i[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })) + '"' : '"' + e + '"'
            }

            function u(e, t) {
                var n, i, l, c, d, h = r,
                    f = t[e];
                switch (f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(e)), "function" == typeof o && (f = o.call(t, e, f)), typeof f) {
                    case "string":
                        return s(f);
                    case "number":
                        return isFinite(f) ? String(f) : "null";
                    case "boolean":
                    case "null":
                        return String(f);
                    case "object":
                        if (!f) return "null";
                        if (r += a, d = [], "[object Array]" === Object.prototype.toString.apply(f)) {
                            for (c = f.length, n = 0; n < c; n += 1) d[n] = u(n, f) || "null";
                            return l = 0 === d.length ? "[]" : r ? "[\n" + r + d.join(",\n" + r) + "\n" + h + "]" : "[" + d.join(",") + "]", r = h, l
                        }
                        if (o && "object" == typeof o)
                            for (c = o.length, n = 0; n < c; n += 1) "string" == typeof o[n] && (l = u(i = o[n], f)) && d.push(s(i) + (r ? ": " : ":") + l);
                        else
                            for (i in f) Object.prototype.hasOwnProperty.call(f, i) && (l = u(i, f)) && d.push(s(i) + (r ? ": " : ":") + l);
                        return l = 0 === d.length ? "{}" : r ? "{\n" + r + d.join(",\n" + r) + "\n" + h + "}" : "{" + d.join(",") + "}", r = h, l
                }
            }
            "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
                var i;
                if (r = "", a = "", "number" == typeof n)
                    for (i = 0; i < n; i += 1) a += " ";
                else "string" == typeof n && (a = n);
                if (o = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                return u("", {
                    "": e
                })
            }), "function" != typeof JSON.parse && (JSON.parse = function(e, n) {
                var r;

                function a(e, t) {
                    var r, i, o = e[t];
                    if (o && "object" == typeof o)
                        for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (i = a(o, r)) ? o[r] = i : delete o[r]);
                    return n.call(e, t, o)
                }
                if (e = String(e), t.lastIndex = 0, t.test(e) && (e = e.replace(t, (function(e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }))), /^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return r = eval("(" + e + ")"), "function" == typeof n ? a({
                    "": r
                }, "") : r;
                throw new SyntaxError("JSON.parse")
            })
        }();
    var r = {};

    function a() {
        var e;
        return (e = e || {}).Display = function() {
            var t = this,
                n = 0,
                r = 0,
                a = 1,
                i = document.createElement("div");
            i.style.position = "relative", i.style.width = n + "px", i.style.height = r + "px", i.style.transformOrigin = i.style.webkitTransformOrigin = i.style.MozTransformOrigin = i.style.OTransformOrigin = i.style.msTransformOrigin = "0 0";
            var o = new e.Display.VisibleLayer(n, r),
                s = new e.Display.VisibleLayer(0, 0);
            s.setChannelMask(e.Layer.SRC), i.appendChild(o.getElement()), i.appendChild(s.getElement());
            var u = document.createElement("div");
            u.style.position = "relative", u.style.width = n * a + "px", u.style.height = r * a + "px", u.appendChild(i), this.cursorHotspotX = 0, this.cursorHotspotY = 0, this.cursorX = 0, this.cursorY = 0, this.onresize = null, this.oncursor = null;
            var l = [],
                c = [];

            function d() {
                for (var e = 0; e < c.length;) {
                    var t = c[e];
                    if (!t.isReady()) break;
                    t.flush(), e++
                }
                c.splice(0, e)
            }

            function h(e, t) {
                this.isReady = function() {
                    for (var e = 0; e < t.length; e++)
                        if (t[e].blocked) return !1;
                    return !0
                }, this.flush = function() {
                    for (var n = 0; n < t.length; n++) t[n].execute();
                    e && e()
                }
            }

            function f(e, t) {
                var n = this;
                this.blocked = t, this.unblock = function() {
                    n.blocked && (n.blocked = !1, d())
                }, this.execute = function() {
                    e && e()
                }
            }

            function p(e, t) {
                var n = new f(e, t);
                return l.push(n), n
            }
            this.getElement = function() {
                return u
            }, this.getWidth = function() {
                return n
            }, this.getHeight = function() {
                return r
            }, this.getDefaultLayer = function() {
                return o
            }, this.getCursorLayer = function() {
                return s
            }, this.createLayer = function() {
                var t = new e.Display.VisibleLayer(n, r);
                return t.move(o, 0, 0, 0), t
            }, this.createBuffer = function() {
                var t = new e.Layer(0, 0);
                return t.autosize = 1, t
            }, this.flush = function(e) {
                c.push(new h(e, l)), l = [], d()
            }, this.setCursor = function(e, n, r, a, i, o, u) {
                p((function() {
                    t.cursorHotspotX = e, t.cursorHotspotY = n, s.resize(o, u), s.copy(r, a, i, o, u, 0, 0), t.moveCursor(t.cursorX, t.cursorY), t.oncursor && t.oncursor(s.getCanvas(), e, n)
                }))
            }, this.showCursor = function(e) {
                var t = s.getElement(),
                    n = t.parentNode;
                !1 === e ? n && n.removeChild(t) : n !== i && i.appendChild(t)
            }, this.moveCursor = function(e, n) {
                s.translate(e - t.cursorHotspotX, n - t.cursorHotspotY), t.cursorX = e, t.cursorY = n
            }, this.resize = function(e, s, l) {
                p((function() {
                    e.resize(s, l), e === o && (n = s, r = l, i.style.width = n + "px", i.style.height = r + "px", u.style.width = n * a + "px", u.style.height = r * a + "px", t.onresize && t.onresize(s, l))
                }))
            }, this.drawImage = function(e, t, n, r) {
                p((function() {
                    e.drawImage(t, n, r)
                }))
            }, this.draw = function(e, t, n, r) {
                var a = p((function() {
                        e.drawImage(t, n, i)
                    }), !0),
                    i = new Image;
                i.onload = a.unblock, i.src = r
            }, this.play = function(e, t, n, r) {
                var a = document.createElement("video");
                a.type = t, a.src = r, a.addEventListener("play", (function() {
                    ! function t() {
                        e.drawImage(0, 0, a), a.ended || window.setTimeout(t, 20)
                    }()
                }), !1), p(a.play)
            }, this.transfer = function(e, t, n, r, a, i, o, s, u) {
                p((function() {
                    i.transfer(e, t, n, r, a, o, s, u)
                }))
            }, this.put = function(e, t, n, r, a, i, o, s) {
                p((function() {
                    i.put(e, t, n, r, a, o, s)
                }))
            }, this.copy = function(e, t, n, r, a, i, o, s) {
                p((function() {
                    i.copy(e, t, n, r, a, o, s)
                }))
            }, this.moveTo = function(e, t, n) {
                p((function() {
                    e.moveTo(t, n)
                }))
            }, this.lineTo = function(e, t, n) {
                p((function() {
                    e.lineTo(t, n)
                }))
            }, this.arc = function(e, t, n, r, a, i, o) {
                p((function() {
                    e.arc(t, n, r, a, i, o)
                }))
            }, this.curveTo = function(e, t, n, r, a, i, o) {
                p((function() {
                    e.curveTo(t, n, r, a, i, o)
                }))
            }, this.close = function(e) {
                p((function() {
                    e.close()
                }))
            }, this.rect = function(e, t, n, r, a) {
                p((function() {
                    e.rect(t, n, r, a)
                }))
            }, this.clip = function(e) {
                p((function() {
                    e.clip()
                }))
            }, this.strokeColor = function(e, t, n, r, a, i, o, s) {
                p((function() {
                    e.strokeColor(t, n, r, a, i, o, s)
                }))
            }, this.fillColor = function(e, t, n, r, a) {
                p((function() {
                    e.fillColor(t, n, r, a)
                }))
            }, this.strokeLayer = function(e, t, n, r, a) {
                p((function() {
                    e.strokeLayer(t, n, r, a)
                }))
            }, this.fillLayer = function(e, t) {
                p((function() {
                    e.fillLayer(t)
                }))
            }, this.push = function(e) {
                p((function() {
                    e.push()
                }))
            }, this.pop = function(e) {
                p((function() {
                    e.pop()
                }))
            }, this.reset = function(e) {
                p((function() {
                    e.reset()
                }))
            }, this.setTransform = function(e, t, n, r, a, i, o) {
                p((function() {
                    e.setTransform(t, n, r, a, i, o)
                }))
            }, this.transform = function(e, t, n, r, a, i, o) {
                p((function() {
                    e.transform(t, n, r, a, i, o)
                }))
            }, this.setChannelMask = function(e, t) {
                p((function() {
                    e.setChannelMask(t)
                }))
            }, this.setMiterLimit = function(e, t) {
                p((function() {
                    e.setMiterLimit(t)
                }))
            }, this.scale = function(e) {
                i.style.transform = i.style.WebkitTransform = i.style.MozTransform = i.style.OTransform = i.style.msTransform = "scale(" + e + "," + e + ")", a = e, u.style.width = n * a + "px", u.style.height = r * a + "px"
            }, this.getScale = function() {
                return a
            }, this.flatten = function() {
                var e = document.createElement("canvas");
                e.width = o.width, e.height = o.height;
                var t = e.getContext("2d");
                return function e(n, r, a) {
                    if (n.width > 0 && n.height > 0) {
                        var i = t.globalAlpha;
                        t.globalAlpha *= n.alpha / 255, t.drawImage(n.getCanvas(), r, a);
                        for (var o = function(e) {
                                var t = [];
                                for (var n in e.children) t.push(e.children[n]);
                                return t.sort((function(e, t) {
                                    var n = e.z - t.z;
                                    if (0 !== n) return n;
                                    var r = e.getElement(),
                                        a = t.getElement().compareDocumentPosition(r);
                                    return a & Node.DOCUMENT_POSITION_PRECEDING ? -1 : a & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : 0
                                })), t
                            }(n), s = 0; s < o.length; s++) {
                            var u = o[s];
                            e(u, r + u.x, a + u.y)
                        }
                        t.globalAlpha = i
                    }
                }(o, 0, 0), e
            }
        }, e.Display.VisibleLayer = function(t, n) {
            e.Layer.apply(this, [t, n]);
            var r = this;
            this.__unique_id = e.Display.VisibleLayer.__next_id++, this.alpha = 255, this.x = 0, this.y = 0, this.z = 0, this.matrix = [1, 0, 0, 1, 0, 0], this.parent = null, this.children = {};
            var a = r.getCanvas();
            a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px";
            var i = document.createElement("div");
            i.appendChild(a), i.style.width = t + "px", i.style.height = n + "px", i.style.position = "absolute", i.style.left = "0px", i.style.top = "0px", i.style.overflow = "hidden";
            var o = this.resize;
            this.resize = function(e, t) {
                i.style.width = e + "px", i.style.height = t + "px", o(e, t)
            }, this.getElement = function() {
                return i
            };
            var s = "translate(0px, 0px)",
                u = "matrix(1, 0, 0, 1, 0, 0)";
            this.translate = function(e, t) {
                r.x = e, r.y = t, s = "translate(" + e + "px," + t + "px)", i.style.transform = i.style.WebkitTransform = i.style.MozTransform = i.style.OTransform = i.style.msTransform = s + " " + u
            }, this.move = function(e, t, n, a) {
                r.parent !== e && (r.parent && delete r.parent.children[r.__unique_id], r.parent = e, e.children[r.__unique_id] = r, e.getElement().appendChild(i));
                r.translate(t, n), r.z = a, i.style.zIndex = a
            }, this.shade = function(e) {
                r.alpha = e, i.style.opacity = e / 255
            }, this.dispose = function() {
                r.parent && (delete r.parent.children[r.__unique_id], r.parent = null), i.parentNode && i.parentNode.removeChild(i)
            }, this.distort = function(e, t, n, a, o, l) {
                r.matrix = [e, t, n, a, o, l], u = "matrix(" + e + "," + t + "," + n + "," + a + "," + o + "," + l + ")", i.style.transform = i.style.WebkitTransform = i.style.MozTransform = i.style.OTransform = i.style.msTransform = s + " " + u
            }
        }, e.Display.VisibleLayer.__next_id = 0, (e = e || {}).Parser = function() {
            var e = this,
                t = "",
                n = [],
                r = -1,
                a = 0;
            this.receive = function(i) {
                for (a > 4096 && r >= a && (t = t.substring(a), r -= a, a = 0), t += i; r < t.length;) {
                    if (r >= a) {
                        var o = t.substring(a, r),
                            s = t.substring(r, r + 1);
                        if (n.push(o), ";" == s) {
                            var u = n.shift();
                            null != e.oninstruction && e.oninstruction(u, n), n.length = 0
                        } else if ("," != s) throw new Error("Illegal terminator.");
                        a = r + 1
                    }
                    var l = t.indexOf(".", a);
                    if (-1 == l) {
                        a = t.length;
                        break
                    }
                    var c = parseInt(t.substring(r + 1, l));
                    if (isNaN(c)) throw new Error("Non-numeric character in element length.");
                    r = (a = l + 1) + c
                }
            }, this.oninstruction = null
        }, (e = e || {}).Client = function(t) {
            var n = this,
                r = 2,
                a = 3,
                i = 0,
                o = {
                    0: "butt",
                    1: "round",
                    2: "square"
                },
                s = {
                    0: "bevel",
                    1: "miter",
                    2: "round"
                },
                u = new e.Display,
                l = {},
                c = [],
                d = [],
                h = [],
                f = new e.IntegerPool,
                p = [];

            function g(e) {
                e != i && (i = e, n.onstatechange && n.onstatechange(i))
            }

            function m() {
                return i == a || i == r
            }

            function v(e) {
                var t = l[e];
                return t || (t = 0 === e ? u.getDefaultLayer() : e > 0 ? u.createLayer() : u.createBuffer(), l[e] = t), t
            }
            this.getDisplay = function() {
                return u
            }, this.sendSize = function(e, n) {
                m() && t.sendMessage("size", e, n)
            }, this.sendKeyEvent = function(e, n) {
                m() && t.sendMessage("key", n, e)
            }, this.sendMouseState = function(e) {
                if (m()) {
                    u.moveCursor(Math.floor(e.x), Math.floor(e.y));
                    var n = 0;
                    e.left && (n |= 1), e.middle && (n |= 2), e.right && (n |= 4), e.up && (n |= 8), e.down && (n |= 16), t.sendMessage("mouse", Math.floor(e.x), Math.floor(e.y), n)
                }
            }, this.setClipboard = function(t) {
                if (m()) {
                    for (var r = n.createClipboardStream("text/plain"), a = new e.StringWriter(r), i = 0; i < t.length; i += 4096) a.sendText(t.substring(i, i + 4096));
                    a.sendEnd()
                }
            }, this.createFileStream = function(r, a) {
                var i = f.next();
                t.sendMessage("file", i, r, a);
                var o = p[i] = new e.OutputStream(n, i),
                    s = o.sendEnd;
                return o.sendEnd = function() {
                    s(), f.free(i), delete p[i]
                }, o
            }, this.createPipeStream = function(r, a) {
                var i = f.next();
                t.sendMessage("pipe", i, r, a);
                var o = p[i] = new e.OutputStream(n, i),
                    s = o.sendEnd;
                return o.sendEnd = function() {
                    s(), f.free(i), delete p[i]
                }, o
            }, this.createClipboardStream = function(r) {
                var a = f.next();
                t.sendMessage("clipboard", a, r);
                var i = p[a] = new e.OutputStream(n, a),
                    o = i.sendEnd;
                return i.sendEnd = function() {
                    o(), f.free(a), delete p[a]
                }, i
            }, this.sendAck = function(e, n, r) {
                m() && t.sendMessage("ack", e, n, r)
            }, this.sendBlob = function(e, n) {
                m() && t.sendMessage("blob", e, n)
            }, this.endStream = function(e) {
                m() && t.sendMessage("end", e)
            }, this.onstatechange = null, this.onname = null, this.onerror = null, this.onclipboard = null, this.onfile = null, this.onpipe = null, this.onsync = null, this.onturn = null, this.onchat = null, this.onrename = null, this.onadduser = null, this.onremuser = null, this.onconnect = null, this.onlist = null, this.onvote = null, this.onaction = null;
            var y = {
                    "miter-limit": function(e, t) {
                        u.setMiterLimit(e, parseFloat(t))
                    }
                },
                b = {
                    turn: function(e) {
                        n.onturn && n.onturn(e)
                    },
                    rename: function(e) {
                        n.onrename && n.onrename(e)
                    },
                    chat: function(e) {
                        n.onchat && n.onchat(e)
                    },
                    admin: function(e) {
                        n.onadmin && n.onadmin(e)
                    },
                    adduser: function(e) {
                        n.onadduser && n.onadduser(e)
                    },
                    remuser: function(e) {
                        n.onremuser && n.onremuser(e)
                    },
                    connect: function(e) {
                        n.onconnect && n.onconnect(e)
                    },
                    list: function(e) {
                        n.onlist && n.onlist(e)
                    },
                    vote: function(e) {
                        n.onvote && n.onvote(e)
                    },
                    action: function(e) {
                        n.onaction && n.onaction(e)
                    },
                    file: function(e) {
                        n.onfile && n.onfile(e)
                    },
                    nop: function() {
                        t.sendMessage("nop")
                    },
                    ack: function(t) {
                        var n = parseInt(t[0]),
                            r = t[1],
                            a = parseInt(t[2]),
                            i = p[n];
                        i && (i.onack && i.onack(new e.Status(a, r)), a >= 256 && (f.free(n), delete p[n]))
                    },
                    arc: function(e) {
                        var t = v(parseInt(e[0])),
                            n = parseInt(e[1]),
                            r = parseInt(e[2]),
                            a = parseInt(e[3]),
                            i = parseFloat(e[4]),
                            o = parseFloat(e[5]),
                            s = parseInt(e[6]);
                        u.arc(t, n, r, a, i, o, 0 != s)
                    },
                    audio: function(t) {
                        var r, a, i = parseInt(t[0]),
                            o = (r = parseInt(t[1]), null == (a = d[r]) && (a = d[r] = new e.AudioChannel), a),
                            s = t[2],
                            u = parseFloat(t[3]),
                            l = h[i] = new e.InputStream(n, i),
                            c = new e.BlobReader(l, s);
                        c.onend = function() {
                            o.play(s, u, c.getBlob())
                        }, n.sendAck(i, "OK", 0)
                    },
                    blob: function(e) {
                        var t = parseInt(e[0]),
                            n = e[1];
                        h[t].onblob(n)
                    },
                    cfill: function(e) {
                        var t = parseInt(e[0]),
                            n = v(parseInt(e[1])),
                            r = parseInt(e[2]),
                            a = parseInt(e[3]),
                            i = parseInt(e[4]),
                            o = parseInt(e[5]);
                        u.setChannelMask(n, t), u.fillColor(n, r, a, i, o)
                    },
                    clip: function(e) {
                        var t = v(parseInt(e[0]));
                        u.clip(t)
                    },
                    clipboard: function(t) {
                        var r = parseInt(t[0]),
                            a = t[1];
                        if (n.onclipboard) {
                            var i = h[r] = new e.InputStream(n, r);
                            n.onclipboard(i, a)
                        } else n.sendAck(r, "Clipboard unsupported", 256)
                    },
                    close: function(e) {
                        var t = v(parseInt(e[0]));
                        u.close(t)
                    },
                    copy: function(e) {
                        var t = v(parseInt(e[0])),
                            n = parseInt(e[1]),
                            r = parseInt(e[2]),
                            a = parseInt(e[3]),
                            i = parseInt(e[4]),
                            o = parseInt(e[5]),
                            s = v(parseInt(e[6])),
                            l = parseInt(e[7]),
                            c = parseInt(e[8]);
                        u.setChannelMask(s, o), u.copy(t, n, r, a, i, s, l, c)
                    },
                    cstroke: function(e) {
                        var t = parseInt(e[0]),
                            n = v(parseInt(e[1])),
                            r = o[parseInt(e[2])],
                            a = s[parseInt(e[3])],
                            i = parseInt(e[4]),
                            l = parseInt(e[5]),
                            c = parseInt(e[6]),
                            d = parseInt(e[7]),
                            h = parseInt(e[8]);
                        u.setChannelMask(n, t), u.strokeColor(n, r, a, i, l, c, d, h)
                    },
                    cursor: function(e) {
                        var t = parseInt(e[0]),
                            n = parseInt(e[1]),
                            r = v(parseInt(e[2])),
                            a = parseInt(e[3]),
                            i = parseInt(e[4]),
                            o = parseInt(e[5]),
                            s = parseInt(e[6]);
                        u.setCursor(t, n, r, a, i, o, s)
                    },
                    curve: function(e) {
                        var t = v(parseInt(e[0])),
                            n = parseInt(e[1]),
                            r = parseInt(e[2]),
                            a = parseInt(e[3]),
                            i = parseInt(e[4]),
                            o = parseInt(e[5]),
                            s = parseInt(e[6]);
                        u.curveTo(t, n, r, a, i, o, s)
                    },
                    dispose: function(e) {
                        var t = parseInt(e[0]);
                        t > 0 ? (v(t).dispose(), delete l[t]) : t < 0 && delete l[t]
                    },
                    distort: function(e) {
                        var t = parseInt(e[0]),
                            n = parseFloat(e[1]),
                            r = parseFloat(e[2]),
                            a = parseFloat(e[3]),
                            i = parseFloat(e[4]),
                            o = parseFloat(e[5]),
                            s = parseFloat(e[6]);
                        t >= 0 && v(t).distort(n, r, a, i, o, s)
                    },
                    error: function(t) {
                        var r = t[0],
                            a = parseInt(t[1]);
                        n.onerror && n.onerror(new e.Status(a, r)), n.disconnect()
                    },
                    end: function(e) {
                        var t = parseInt(e[0]),
                            n = h[t];
                        n.onend && n.onend()
                    },
                    identity: function(e) {
                        var t = v(parseInt(e[0]));
                        u.setTransform(t, 1, 0, 0, 1, 0, 0)
                    },
                    lfill: function(e) {
                        var t = parseInt(e[0]),
                            n = v(parseInt(e[1])),
                            r = v(parseInt(e[2]));
                        u.setChannelMask(n, t), u.fillLayer(n, r)
                    },
                    line: function(e) {
                        var t = v(parseInt(e[0])),
                            n = parseInt(e[1]),
                            r = parseInt(e[2]);
                        u.lineTo(t, n, r)
                    },
                    lstroke: function(e) {
                        var t = parseInt(e[0]),
                            n = v(parseInt(e[1])),
                            r = v(parseInt(e[2]));
                        u.setChannelMask(n, t), u.strokeLayer(n, r)
                    },
                    move: function(e) {
                        var t = parseInt(e[0]),
                            n = parseInt(e[1]),
                            r = parseInt(e[2]),
                            a = parseInt(e[3]),
                            i = parseInt(e[4]);
                        if (t > 0 && n >= 0) {
                            var o = v(t),
                                s = v(n);
                            o.move(s, r, a, i)
                        }
                    },
                    name: function(e) {
                        n.onname && n.onname(e[0])
                    },
                    nest: function(n) {
                        (function(n) {
                            var r = c[n];
                            return null == r && ((r = c[n] = new e.Parser).oninstruction = t.oninstruction), r
                        })(parseInt(n[0])).receive(n[1])
                    },
                    pipe: function(t) {
                        var r = parseInt(t[0]),
                            a = t[1],
                            i = t[2];
                        if (n.onpipe) {
                            var o = h[r] = new e.InputStream(n, r);
                            n.onpipe(o, a, i)
                        } else n.sendAck(r, "Named pipes unsupported", 256)
                    },
                    png: function(e) {
                        var t = parseInt(e[0]),
                            n = v(parseInt(e[1])),
                            r = parseInt(e[2]),
                            a = parseInt(e[3]),
                            i = e[4];
                        u.setChannelMask(n, t), u.draw(n, r, a, "data:image/png;base64," + i)
                    },
                    pop: function(e) {
                        var t = v(parseInt(e[0]));
                        u.pop(t)
                    },
                    push: function(e) {
                        var t = v(parseInt(e[0]));
                        u.push(t)
                    },
                    rect: function(e) {
                        var t = v(parseInt(e[0])),
                            n = parseInt(e[1]),
                            r = parseInt(e[2]),
                            a = parseInt(e[3]),
                            i = parseInt(e[4]);
                        u.rect(t, n, r, a, i)
                    },
                    reset: function(e) {
                        var t = v(parseInt(e[0]));
                        u.reset(t)
                    },
                    set: function(e) {
                        var t = v(parseInt(e[0])),
                            n = e[1],
                            r = e[2],
                            a = y[n];
                        a && a(t, r)
                    },
                    shade: function(e) {
                        var t = parseInt(e[0]),
                            n = parseInt(e[1]);
                        t >= 0 && v(t).shade(n)
                    },
                    size: function(e) {
                        var t = v(parseInt(e[0])),
                            n = parseInt(e[1]),
                            r = parseInt(e[2]);
                        u.resize(t, n, r)
                    },
                    start: function(e) {
                        var t = v(parseInt(e[0])),
                            n = parseInt(e[1]),
                            r = parseInt(e[2]);
                        u.moveTo(t, n, r)
                    },
                    sync: function(e) {
                        var t = parseInt(e[0]);
                        u.flush(null), n.onsync && n.onsync(t)
                    },
                    transfer: function(t) {
                        var n = v(parseInt(t[0])),
                            r = parseInt(t[1]),
                            a = parseInt(t[2]),
                            i = parseInt(t[3]),
                            o = parseInt(t[4]),
                            s = parseInt(t[5]),
                            l = v(parseInt(t[6])),
                            c = parseInt(t[7]),
                            d = parseInt(t[8]);
                        3 === s ? u.put(n, r, a, i, o, l, c, d) : 5 !== s && u.transfer(n, r, a, i, o, l, c, d, e.Client.DefaultTransferFunction[s])
                    },
                    transform: function(e) {
                        var t = v(parseInt(e[0])),
                            n = parseFloat(e[1]),
                            r = parseFloat(e[2]),
                            a = parseFloat(e[3]),
                            i = parseFloat(e[4]),
                            o = parseFloat(e[5]),
                            s = parseFloat(e[6]);
                        u.transform(t, n, r, a, i, o, s)
                    },
                    video: function(r) {
                        var a = parseInt(r[0]),
                            i = v(parseInt(r[1])),
                            o = r[2],
                            s = parseFloat(r[3]),
                            u = h[a] = new e.InputStream(n, a),
                            l = new e.BlobReader(u, o);
                        l.onend = function() {
                            var e = new FileReader;
                            e.onload = function() {
                                for (var t = "", n = new Uint8Array(e.result), r = 0; r < n.byteLength; r++) t += String.fromCharCode(n[r]);
                                i.play(o, s, "data:" + o + ";base64," + window.btoa(t))
                            }, e.readAsArrayBuffer(l.getBlob())
                        }, t.sendMessage("ack", a, "OK", 0)
                    }
                };
            t.oninstruction = function(e, t) {
                var n = b[e];
                n && n(t)
            }, this.disconnect = function() {
                5 != i && 4 != i && (g(4), t.sendMessage("disconnect"), t.disconnect(), g(5))
            }, this.connect = function(e) {
                g(1);
                try {
                    t.connect(e)
                } catch (e) {
                    throw g(0), e
                }
                g(r)
            }
        }, e.Client.DefaultTransferFunction = {
            0: function(e, t) {
                t.red = t.green = t.blue = 0
            },
            15: function(e, t) {
                t.red = t.green = t.blue = 255
            },
            3: function(e, t) {
                t.red = e.red, t.green = e.green, t.blue = e.blue, t.alpha = e.alpha
            },
            5: function(e, t) {},
            12: function(e, t) {
                t.red = 255 & ~e.red, t.green = 255 & ~e.green, t.blue = 255 & ~e.blue, t.alpha = e.alpha
            },
            10: function(e, t) {
                t.red = 255 & ~t.red, t.green = 255 & ~t.green, t.blue = 255 & ~t.blue
            },
            1: function(e, t) {
                t.red = e.red & t.red, t.green = e.green & t.green, t.blue = e.blue & t.blue
            },
            14: function(e, t) {
                t.red = 255 & ~(e.red & t.red), t.green = 255 & ~(e.green & t.green), t.blue = 255 & ~(e.blue & t.blue)
            },
            7: function(e, t) {
                t.red = e.red | t.red, t.green = e.green | t.green, t.blue = e.blue | t.blue
            },
            8: function(e, t) {
                t.red = 255 & ~(e.red | t.red), t.green = 255 & ~(e.green | t.green), t.blue = 255 & ~(e.blue | t.blue)
            },
            6: function(e, t) {
                t.red = e.red ^ t.red, t.green = e.green ^ t.green, t.blue = e.blue ^ t.blue
            },
            9: function(e, t) {
                t.red = 255 & ~(e.red ^ t.red), t.green = 255 & ~(e.green ^ t.green), t.blue = 255 & ~(e.blue ^ t.blue)
            },
            4: function(e, t) {
                t.red = ~e.red & t.red & 255, t.green = ~e.green & t.green & 255, t.blue = ~e.blue & t.blue & 255
            },
            13: function(e, t) {
                t.red = 255 & (~e.red | t.red), t.green = 255 & (~e.green | t.green), t.blue = 255 & (~e.blue | t.blue)
            },
            2: function(e, t) {
                t.red = e.red & ~t.red & 255, t.green = e.green & ~t.green & 255, t.blue = e.blue & ~t.blue & 255
            },
            11: function(e, t) {
                t.red = 255 & (e.red | ~t.red), t.green = 255 & (e.green | ~t.green), t.blue = 255 & (e.blue | ~t.blue)
            }
        }, (e = e || {}).OnScreenKeyboard = function(t) {
            var n = this,
                r = {},
                a = {},
                i = [],
                o = function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += " " + t
                },
                s = function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.replace(/([^ ]+)[ ]*/g, (function(e, n) {
                        return n === t ? "" : e
                    }))
                },
                u = 0,
                l = function(e, t, n, r) {
                    this.width = t, this.height = n, this.scale = function(a) {
                        e.style.width = t * a + "px", e.style.height = n * a + "px", r && (e.style.lineHeight = n * a + "px", e.style.fontSize = a + "px")
                    }
                },
                c = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        if (!(e[t] in r)) return !1
                    }
                    return !0
                },
                d = function(e) {
                    var t = n.keys[e];
                    if (!t) return null;
                    for (var r = t.length - 1; r >= 0; r--) {
                        var a = t[r];
                        if (c(a.requires)) return a
                    }
                    return null
                },
                h = function(e, t) {
                    if (!n.disabled && !a[e]) {
                        o(t, "guac-keyboard-pressed");
                        var i = d(e);
                        if (i.modifier) {
                            var u = "guac-keyboard-modifier-" + m(i.modifier),
                                l = r[i.modifier];
                            l ? (s(p, u), delete r[i.modifier], n.onkeyup && n.onkeyup(l)) : (o(p, u), r[i.modifier] = i.keysym, n.onkeydown && n.onkeydown(i.keysym))
                        } else n.onkeydown && n.onkeydown(i.keysym);
                        a[e] = !0
                    }
                },
                f = function(e, t) {
                    if (!n.disabled && a[e]) {
                        s(t, "guac-keyboard-pressed");
                        var r = d(e);
                        !r.modifier && n.onkeyup && n.onkeyup(r.keysym), a[e] = !1
                    }
                },
                p = document.createElement("div");
            p.className = "guac-keyboard", p.onselectstart = p.onmousemove = p.onmouseup = p.onmousedown = function(e) {
                return u && u--, e.stopPropagation(), !1
            }, this.touchMouseThreshold = 3, this.onkeydown = null, this.onkeyup = null, this.layout = new e.OnScreenKeyboard.Layout(t), this.getElement = function() {
                return p
            }, this.resize = function(e) {
                for (var t = Math.floor(10 * e / n.layout.width) / 10, r = 0; r < i.length; r++) {
                    i[r].scale(t)
                }
            };
            var g = function(t, n) {
                if (n instanceof Array) {
                    for (var r = [], a = 0; a < n.length; a++) r.push(new e.OnScreenKeyboard.Key(n[a], t));
                    return r
                }
                return "number" == typeof n ? [new e.OnScreenKeyboard.Key({
                    name: t,
                    keysym: n
                })] : "string" == typeof n ? [new e.OnScreenKeyboard.Key({
                    name: t,
                    title: n
                })] : [new e.OnScreenKeyboard.Key(n, t)]
            };
            this.keys = function(e) {
                var n = {};
                for (var r in t.keys) n[r] = g(r, e[r]);
                return n
            }(t.keys);
            var m = function(e) {
                return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()
            };
            ! function e(t, r, a) {
                var s, c = document.createElement("div");
                if (a && o(c, "guac-keyboard-" + m(a)), r instanceof Array)
                    for (o(c, "guac-keyboard-group"), s = 0; s < r.length; s++) e(c, r[s]);
                else if (r instanceof Object) {
                    o(c, "guac-keyboard-group");
                    var d = Object.keys(r).sort();
                    for (s = 0; s < d.length; s++) {
                        a = d[s];
                        e(c, r[a], a)
                    }
                } else if ("number" == typeof r) o(c, "guac-keyboard-gap"), i.push(new l(c, r, r));
                else if ("string" == typeof r) {
                    var p = r;
                    1 === p.length && (p = "0x" + p.charCodeAt(0).toString(16)), o(c, "guac-keyboard-key-container");
                    var g = document.createElement("div");
                    g.className = "guac-keyboard-key guac-keyboard-key-" + m(p);
                    var v = n.keys[r];
                    if (v)
                        for (s = 0; s < v.length; s++) {
                            var y = v[s],
                                b = document.createElement("div");
                            b.className = "guac-keyboard-cap", b.textContent = y.title;
                            for (var w = 0; w < y.requires.length; w++) {
                                var S = y.requires[w];
                                o(b, "guac-keyboard-requires-" + m(S)), o(g, "guac-keyboard-uses-" + m(S))
                            }
                            g.appendChild(b)
                        }
                    c.appendChild(g), i.push(new l(c, n.layout.keyWidths[r] || 1, 1, !0));
                    var I = function(e) {
                        e.preventDefault(), 0 === u && f(r, g)
                    };
                    g.addEventListener("touchstart", (function(e) {
                        e.preventDefault(), u = n.touchMouseThreshold, h(r, g)
                    }), !0), g.addEventListener("touchend", (function(e) {
                        e.preventDefault(), u = n.touchMouseThreshold, f(r, g)
                    }), !0), g.addEventListener("mousedown", (function(e) {
                        e.preventDefault(), 0 === u && h(r, g)
                    }), !0), g.addEventListener("mouseup", I, !0), g.addEventListener("mouseout", I, !0)
                }
                t.appendChild(c)
            }(p, t.layout)
        }, e.OnScreenKeyboard.Layout = function(e) {
            this.language = e.language, this.type = e.type, this.keys = e.keys, this.layout = e.layout, this.width = e.width, this.keyWidths = e.keyWidths || {}
        }, e.OnScreenKeyboard.Key = function(e, t) {
            this.name = t || e.name, this.title = e.title || this.name, this.keysym = e.keysym || function(e) {
                if (!e || 1 !== e.length) return null;
                var t = e.charCodeAt(0);
                return t >= 0 && t <= 255 ? t : t >= 256 && t <= 1114111 ? 16777216 | t : null
            }(this.title), this.modifier = e.modifier, this.requires = e.requires || []
        }, (e = e || {}).ArrayBufferReader = function(e) {
            var t = this;
            e.onblob = function(e) {
                for (var n = window.atob(e), r = new ArrayBuffer(n.length), a = new Uint8Array(r), i = 0; i < n.length; i++) a[i] = n.charCodeAt(i);
                t.ondata && t.ondata(r)
            }, e.onend = function() {
                t.onend && t.onend()
            }, this.ondata = null, this.onend = null
        }, (e = e || {}).OutputStream = function(e, t) {
            var n = this;
            this.index = t, this.onack = null, this.sendBlob = function(t) {
                e.sendBlob(n.index, t)
            }, this.sendEnd = function() {
                e.endStream(n.index)
            }
        }, (e = e || {}).BlobReader = function(e, t) {
            var n, r = this,
                a = 0;
            n = window.BlobBuilder ? new BlobBuilder : window.WebKitBlobBuilder ? new WebKitBlobBuilder : window.MozBlobBuilder ? new MozBlobBuilder : new function() {
                var e = [];
                this.append = function(n) {
                    e.push(new Blob([n], {
                        type: t
                    }))
                }, this.getBlob = function() {
                    return new Blob(e, {
                        type: t
                    })
                }
            }, e.onblob = function(t) {
                for (var i = window.atob(t), o = new ArrayBuffer(i.length), s = new Uint8Array(o), u = 0; u < i.length; u++) s[u] = i.charCodeAt(u);
                n.append(o), a += o.byteLength, r.onprogress && r.onprogress(o.byteLength), e.sendAck("OK", 0)
            }, e.onend = function() {
                r.onend && r.onend()
            }, this.getLength = function() {
                return a
            }, this.getBlob = function() {
                return n.getBlob()
            }, this.onprogress = null, this.onend = null
        }, (e = e || {}).StringReader = function(t) {
            var n = this,
                r = new e.ArrayBufferReader(t),
                a = 0,
                i = 0;
            r.ondata = function(e) {
                var t = function(e) {
                    for (var t = "", n = new Uint8Array(e), r = 0; r < n.length; r++) {
                        var o = n[r];
                        0 === a ? 127 == (127 | o) ? t += String.fromCharCode(o) : 223 == (31 | o) ? (i = 31 & o, a = 1) : 239 == (15 | o) ? (i = 15 & o, a = 2) : 247 == (7 | o) ? (i = 7 & o, a = 3) : t += "�" : 191 == (63 | o) ? (i = i << 6 | 63 & o, 0 === --a && (t += String.fromCharCode(i))) : (a = 0, t += "�")
                    }
                    return t
                }(e);
                n.ontext && n.ontext(t)
            }, r.onend = function() {
                n.onend && n.onend()
            }, this.ontext = null, this.onend = null
        }, (e = e || {}).Mouse = function(t) {
            var n = this;
            this.touchMouseThreshold = 3, this.scrollThreshold = 120, this.PIXELS_PER_LINE = 40, this.PIXELS_PER_PAGE = 640, this.currentState = new e.Mouse.State(0, 0, !1, !1, !1, !1, !1), this.onmousedown = null, this.onmouseup = null, this.onmousemove = null, this.onmouseout = null;
            var r = 0,
                a = 0;

            function i(e) {
                e.stopPropagation(), e.preventDefault && e.preventDefault(), e.returnValue = !1
            }

            function o() {
                r = n.touchMouseThreshold
            }

            function s(e) {
                var t = e.deltaY || -e.wheelDeltaY || -e.wheelDelta;
                for (t ? 1 === e.deltaMode ? t = e.deltaY * n.PIXELS_PER_LINE : 2 === e.deltaMode && (t = e.deltaY * n.PIXELS_PER_PAGE) : t = e.detail * n.PIXELS_PER_LINE, a += t; a <= -n.scrollThreshold;) n.onmousedown && (n.currentState.up = !0, n.onmousedown(n.currentState)), n.onmouseup && (n.currentState.up = !1, n.onmouseup(n.currentState)), a += n.scrollThreshold;
                for (; a >= n.scrollThreshold;) n.onmousedown && (n.currentState.down = !0, n.onmousedown(n.currentState)), n.onmouseup && (n.currentState.down = !1, n.onmouseup(n.currentState)), a -= n.scrollThreshold;
                i(e)
            }
            t.addEventListener("contextmenu", (function(e) {
                i(e)
            }), !1), t.addEventListener("mousemove", (function(e) {
                i(e), r ? r-- : (n.currentState.fromClientPosition(t, e.clientX, e.clientY), n.onmousemove && n.onmousemove(n.currentState))
            }), !1), t.addEventListener("mousedown", (function(e) {
                if (i(e), !r) {
                    switch (e.button) {
                        case 0:
                            n.currentState.left = !0;
                            break;
                        case 1:
                            n.currentState.middle = !0;
                            break;
                        case 2:
                            n.currentState.right = !0
                    }
                    n.onmousedown && n.onmousedown(n.currentState)
                }
            }), !1), t.addEventListener("mouseup", (function(e) {
                if (i(e), !r) {
                    switch (e.button) {
                        case 0:
                            n.currentState.left = !1;
                            break;
                        case 1:
                            n.currentState.middle = !1;
                            break;
                        case 2:
                            n.currentState.right = !1
                    }
                    n.onmouseup && n.onmouseup(n.currentState)
                }
            }), !1), t.addEventListener("mouseout", (function(e) {
                e || (e = window.event);
                for (var r = e.relatedTarget || e.toElement; r;) {
                    if (r === t) return;
                    r = r.parentNode
                }
                i(e), (n.currentState.left || n.currentState.middle || n.currentState.right) && (n.currentState.left = !1, n.currentState.middle = !1, n.currentState.right = !1, n.onmouseup && n.onmouseup(n.currentState)), n.onmouseout && n.onmouseout()
            }), !1), t.addEventListener("selectstart", (function(e) {
                i(e)
            }), !1), t.addEventListener("touchmove", o, !1), t.addEventListener("touchstart", o, !1), t.addEventListener("touchend", o, !1), t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener("mousewheel", s, !1), t.addEventListener("wheel", s, !1);
            var u = function() {
                var e = document.createElement("div");
                if (!("cursor" in e.style)) return !1;
                try {
                    e.style.cursor = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==) 0 0, auto"
                } catch (e) {
                    return !1
                }
                return /\burl\([^()]*\)\s+0\s+0\b/.test(e.style.cursor || "")
            }();
            this.setCursor = function(e, n, r) {
                if (u) {
                    var a = e.toDataURL("image/png");
                    return t.style.cursor = "url(" + a + ") " + n + " " + r + ", auto", !0
                }
                return !1
            }
        }, e.Mouse.State = function(e, t, n, r, a, i, o) {
            var s = this;
            this.x = e, this.y = t, this.left = n, this.middle = r, this.right = a, this.up = i, this.down = o, this.fromClientPosition = function(e, t, n) {
                s.x = t - e.offsetLeft, s.y = n - e.offsetTop;
                for (var r = e.offsetParent; r && r !== document.body;) s.x -= r.offsetLeft - r.scrollLeft, s.y -= r.offsetTop - r.scrollTop, r = r.offsetParent;
                if (r) {
                    var a = document.body.scrollLeft || document.documentElement.scrollLeft,
                        i = document.body.scrollTop || document.documentElement.scrollTop;
                    s.x -= r.offsetLeft - a, s.y -= r.offsetTop - i
                }
            }
        }, e.Mouse.Touchpad = function(t) {
            var n = this;
            this.scrollThreshold = 20 * (window.devicePixelRatio || 1), this.clickTimingThreshold = 250, this.clickMoveThreshold = 10 * (window.devicePixelRatio || 1), this.currentState = new e.Mouse.State(0, 0, !1, !1, !1, !1, !1), this.onmousedown = null, this.onmouseup = null, this.onmousemove = null;
            var r = 0,
                a = 0,
                i = 0,
                o = 0,
                s = 0,
                u = {
                    1: "left",
                    2: "right",
                    3: "middle"
                },
                l = !1,
                c = null;
            t.addEventListener("touchend", (function(e) {
                if (e.preventDefault(), l && 0 === e.touches.length) {
                    var t = (new Date).getTime(),
                        a = u[r];
                    n.currentState[a] && (n.currentState[a] = !1, n.onmouseup && n.onmouseup(n.currentState), c && (window.clearTimeout(c), c = null)), t - o <= n.clickTimingThreshold && s < n.clickMoveThreshold && (n.currentState[a] = !0, n.onmousedown && n.onmousedown(n.currentState), c = window.setTimeout((function() {
                        n.currentState[a] = !1, n.onmouseup && n.onmouseup(n.currentState), l = !1
                    }), n.clickTimingThreshold)), c || (l = !1)
                }
            }), !1), t.addEventListener("touchstart", (function(e) {
                if (e.preventDefault(), r = Math.min(e.touches.length, 3), c && (window.clearTimeout(c), c = null), !l) {
                    l = !0;
                    var t = e.touches[0];
                    a = t.clientX, i = t.clientY, o = (new Date).getTime(), s = 0
                }
            }), !1), t.addEventListener("touchmove", (function(e) {
                e.preventDefault();
                var u = e.touches[0],
                    l = u.clientX - a,
                    c = u.clientY - i;
                if (s += Math.abs(l) + Math.abs(c), 1 === r) {
                    var d = 1 + s / ((new Date).getTime() - o);
                    n.currentState.x += l * d, n.currentState.y += c * d, n.currentState.x < 0 ? n.currentState.x = 0 : n.currentState.x >= t.offsetWidth && (n.currentState.x = t.offsetWidth - 1), n.currentState.y < 0 ? n.currentState.y = 0 : n.currentState.y >= t.offsetHeight && (n.currentState.y = t.offsetHeight - 1), n.onmousemove && n.onmousemove(n.currentState), a = u.clientX, i = u.clientY
                } else if (2 === r) {
                    var h;
                    if (Math.abs(c) >= n.scrollThreshold) h = c > 0 ? "down" : "up", n.currentState[h] = !0, n.onmousedown && n.onmousedown(n.currentState), n.currentState[h] = !1, n.onmouseup && n.onmouseup(n.currentState), a = u.clientX, i = u.clientY
                }
            }), !1)
        }, e.Mouse.Touchscreen = function(t) {
            var n = this,
                r = !1,
                a = null,
                i = null,
                o = null,
                s = null;

            function u(e) {
                n.currentState[e] || (n.currentState[e] = !0, n.onmousedown && n.onmousedown(n.currentState))
            }

            function l(e) {
                n.currentState[e] && (n.currentState[e] = !1, n.onmouseup && n.onmouseup(n.currentState))
            }

            function c(e, r) {
                n.currentState.fromClientPosition(t, e, r), n.onmousemove && n.onmousemove(n.currentState)
            }

            function d(e) {
                var t = e.touches[0] || e.changedTouches[0],
                    r = t.clientX - a,
                    o = t.clientY - i;
                return Math.sqrt(r * r + o * o) >= n.clickMoveThreshold
            }

            function h() {
                window.clearTimeout(o), window.clearTimeout(s), r = !1
            }
            this.scrollThreshold = 20 * (window.devicePixelRatio || 1), this.clickTimingThreshold = 250, this.clickMoveThreshold = 16 * (window.devicePixelRatio || 1), this.longPressThreshold = 500, this.currentState = new e.Mouse.State(0, 0, !1, !1, !1, !1, !1), this.onmousedown = null, this.onmouseup = null, this.onmousemove = null, t.addEventListener("touchend", (function(e) {
                if (r)
                    if (0 === e.touches.length && 1 === e.changedTouches.length) {
                        if (window.clearTimeout(s), l("left"), !d(e) && (e.preventDefault(), !n.currentState.left)) {
                            var t = e.changedTouches[0];
                            c(t.clientX, t.clientY), u("left"), o = window.setTimeout((function() {
                                l("left"), h()
                            }), n.clickTimingThreshold)
                        }
                    } else h()
            }), !1), t.addEventListener("touchstart", (function(e) {
                1 === e.touches.length ? (e.preventDefault(), function(e) {
                    var t = e.touches[0];
                    r = !0, a = t.clientX, i = t.clientY
                }(e), window.clearTimeout(o), s = window.setTimeout((function() {
                    var t, n = e.touches[0];
                    c(n.clientX, n.clientY), u(t = "right"), l(t), h()
                }), n.longPressThreshold)) : h()
            }), !1), t.addEventListener("touchmove", (function(e) {
                if (r)
                    if (d(e) && window.clearTimeout(s), 1 === e.touches.length) {
                        if (n.currentState.left) {
                            e.preventDefault();
                            var t = e.touches[0];
                            c(t.clientX, t.clientY)
                        }
                    } else h()
            }), !1)
        }, (e = e || {}).Tunnel = function() {
            this.connect = function(e) {}, this.disconnect = function() {}, this.sendMessage = function(e) {}, this.state = e.Tunnel.State.CONNECTING, this.receiveTimeout = 15e3, this.onerror = null, this.onstatechange = null, this.oninstruction = null
        }, e.Tunnel.State = {
            CONNECTING: 0,
            OPEN: 1,
            CLOSED: 2
        }, e.HTTPTunnel = function(t) {
            var n, r = this,
                a = t + "?connect",
                i = t + "?read:",
                o = t + "?write:",
                s = 1,
                u = 0,
                l = s,
                c = !1,
                d = "";

            function h(t) {
                r.state !== e.Tunnel.State.CLOSED && (t.code !== e.Status.Code.SUCCESS && r.onerror && (r.state !== e.Tunnel.State.CONNECTING && t.code === e.Status.Code.RESOURCE_NOT_FOUND || r.onerror(t)), r.state = e.Tunnel.State.CLOSED, c = !1, r.onstatechange && r.onstatechange(r.state))
            }

            function f() {
                if (r.state === e.Tunnel.State.OPEN)
                    if (d.length > 0) {
                        c = !0;
                        var t = new XMLHttpRequest;
                        t.open("POST", o + n), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"), t.onreadystatechange = function() {
                            4 === t.readyState && (200 !== t.status ? p(t) : f())
                        }, t.send(d), d = ""
                    } else c = !1
            }

            function p(t) {
                var n = parseInt(t.getResponseHeader("Guacamole-Status-Code")),
                    r = t.getResponseHeader("Guacamole-Error-Message");
                h(new e.Status(n, r))
            }
            this.sendMessage = function() {
                if (r.state === e.Tunnel.State.OPEN && 0 !== arguments.length) {
                    for (var t = a(arguments[0]), n = 1; n < arguments.length; n++) t += "," + a(arguments[n]);
                    d += t += ";", c || f()
                }

                function a(e) {
                    var t = new String(e);
                    return t.length + "." + t
                }
            };
            var g = 0;

            function m() {
                var e = new XMLHttpRequest;
                return e.open("GET", i + n + ":" + g++), e.send(null), e
            }
            this.connect = function(t) {
                var i = new XMLHttpRequest;
                i.onreadystatechange = function() {
                    4 === i.readyState && (200 === i.status ? (n = i.responseText, r.state = e.Tunnel.State.OPEN, r.onstatechange && r.onstatechange(r.state), function t(n) {
                        var a = null,
                            i = null,
                            o = 0,
                            c = -1,
                            d = 0,
                            h = new Array;

                        function f() {
                            if (r.state === e.Tunnel.State.OPEN) {
                                if (!(n.readyState < 2)) {
                                    var o;
                                    try {
                                        o = n.status
                                    } catch (e) {
                                        o = 200
                                    }
                                    if (i || 200 !== o || (i = m()), 3 === n.readyState || 4 === n.readyState) {
                                        if (l === s && (3 !== n.readyState || a ? 4 !== n.readyState || a || clearInterval(a) : a = setInterval(f, 30)), 0 === n.status) return void r.disconnect();
                                        if (200 !== n.status) return void p(n);
                                        var u;
                                        try {
                                            u = n.responseText
                                        } catch (e) {
                                            return
                                        }
                                        for (; c < u.length;) {
                                            if (c >= d) {
                                                var g = u.substring(d, c),
                                                    v = u.substring(c, c + 1);
                                                if (h.push(g), ";" === v) {
                                                    var y = h.shift();
                                                    r.oninstruction && r.oninstruction(y, h), h.length = 0
                                                }
                                                d = c + 1
                                            }
                                            var b = u.indexOf(".", d);
                                            if (-1 === b) {
                                                d = u.length;
                                                break
                                            }
                                            var w = parseInt(u.substring(c + 1, b));
                                            if (0 === w) {
                                                a || clearInterval(a), n.onreadystatechange = null, n.abort(), i && t(i);
                                                break
                                            }
                                            c = (d = b + 1) + w
                                        }
                                    }
                                }
                            } else null !== a && clearInterval(a)
                        }
                        n.onreadystatechange = l === s ? function() {
                            3 === n.readyState && ++o >= 2 && (l = u, n.onreadystatechange = f), f()
                        } : f, f()
                    }(m())) : p(i))
                }, i.open("POST", a, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"), i.send(t)
            }, this.disconnect = function() {
                h(new e.Status(e.Status.Code.SUCCESS, "Manually closed."))
            }
        }, e.HTTPTunnel.prototype = new e.Tunnel, e.WebSocketTunnel = function(t) {
            var n = this,
                r = null;
            if ("ws:" !== t.substring(0, 3) && "wss:" !== t.substring(0, 4)) {
                var a = {
                    "http:": "ws:",
                    "https:": "wss:"
                } [window.location.protocol];
                if ("/" === t.substring(0, 1)) t = a + "//" + window.location.host + t;
                else {
                    var i = window.location.pathname.lastIndexOf("/"),
                        o = window.location.pathname.substring(0, i + 1);
                    t = a + "//" + window.location.host + o + t
                }
            }

            function s(t) {
                n.state !== e.Tunnel.State.CLOSED && (t.code !== e.Status.Code.SUCCESS && n.onerror && n.onerror(t), n.state = e.Tunnel.State.CLOSED, n.onstatechange && n.onstatechange(n.state), r.close())
            }
            this.sendRawMessage = function(e) {
                r.send(e)
            }, this.sendMessage = function(t) {
                if (n.state === e.Tunnel.State.OPEN && 0 !== arguments.length) {
                    for (var a = o(arguments[0]), i = 1; i < arguments.length; i++) a += "," + o(arguments[i]);
                    a += ";", r.send(a)
                }

                function o(e) {
                    var t = new String(e);
                    return t.length + "." + t
                }
            }, this.connect = function(a) {
                (r = new WebSocket(a ? t + "?" + a : t, "guacamole")).onopen = function(t) {
                    n.state = e.Tunnel.State.OPEN, n.onstatechange && n.onstatechange(n.state)
                }, r.onclose = function(t) {
                    s(new e.Status(parseInt(t.reason), t.reason))
                }, r.onerror = function(t) {
                    s(new e.Status(e.Status.Code.SERVER_ERROR, t.data))
                }, r.onmessage = function(t) {
                    var r, a = t.data,
                        i = 0,
                        o = [];
                    do {
                        var u = a.indexOf(".", i);
                        if (-1 !== u) r = (i = u + 1) + parseInt(a.substring(r + 1, u));
                        else s(new e.Status(e.Status.Code.SERVER_ERROR, "Incomplete instruction."));
                        var l = a.substring(i, r),
                            c = a.substring(r, r + 1);
                        if (o.push(l), ";" === c) {
                            var d = o.shift();
                            n.oninstruction && n.oninstruction(d, o), o.length = 0
                        }
                        i = r + 1
                    } while (i < a.length)
                }
            }, this.disconnect = function() {
                s(new e.Status(e.Status.Code.SUCCESS, "Manually closed."))
            }
        }, e.WebSocketTunnel.prototype = new e.Tunnel, e.ChainedTunnel = function(t) {
            for (var n, r = this, a = [], i = 0; i < arguments.length; i++) a.push(arguments[i]);

            function o(t) {
                function i() {
                    var e = a.shift();
                    return e && (t.onerror = null, t.oninstruction = null, t.onstatechange = null, o(e)), e
                }

                function s() {
                    t.onstatechange = r.onstatechange, t.oninstruction = r.oninstruction, t.onerror = r.onerror
                }
                r.disconnect = t.disconnect, r.sendMessage = t.sendMessage, t.onstatechange = function(t) {
                    switch (t) {
                        case e.Tunnel.State.OPEN:
                            s(), r.onstatechange && r.onstatechange(t);
                            break;
                        case e.Tunnel.State.CLOSED:
                            !i() && r.onstatechange && r.onstatechange(t)
                    }
                }, t.oninstruction = function(e, t) {
                    s(), r.oninstruction && r.oninstruction(e, t)
                }, t.onerror = function(e) {
                    !i() && r.onerror && r.onerror(e)
                }, t.connect(n)
            }
            this.connect = function(t) {
                n = t;
                var i = a.shift();
                i ? o(i) : r.onerror && r.onerror(e.Status.Code.SERVER_ERROR, "No tunnels to try.")
            }
        }, e.ChainedTunnel.prototype = new e.Tunnel, (e = e || {}).AudioChannel = function() {
            var t = 0;
            this.play = function(n, r, a) {
                var i = new e.AudioChannel.Packet(n, a),
                    o = e.AudioChannel.getTimestamp();
                t < o && (t = o), i.play(t), t += r
            }
        }, window.AudioContext ? e.AudioChannel.context = new AudioContext : window.webkitAudioContext && (e.AudioChannel.context = new webkitAudioContext), e.AudioChannel.getTimestamp = function() {
            if (e.AudioChannel.context) return 1e3 * e.AudioChannel.context.currentTime;
            if (window.performance) {
                if (window.performance.now) return window.performance.now();
                if (window.performance.webkitNow) return window.performance.webkitNow()
            }
            return (new Date).getTime()
        }, e.AudioChannel.Packet = function(t, n) {
            if (this.play = function(e) {}, e.AudioChannel.context) {
                var r = null,
                    a = function(e) {
                        r = e
                    };
                (c = new FileReader).onload = function() {
                    e.AudioChannel.context.decodeAudioData(c.result, (function(e) {
                        a(e)
                    }))
                }, c.readAsArrayBuffer(n);
                var i, o = e.AudioChannel.context.createBufferSource();

                function s(e) {
                    o.buffer = e, o.start(i / 1e3)
                }
                o.connect(e.AudioChannel.context.destination), o.start || (o.start = o.noteOn), this.play = function(e) {
                    i = e, r ? s(r) : a = s
                }
            } else {
                var u = !1,
                    l = null;
                try {
                    l = new Audio
                } catch (e) {}
                if (l) {
                    var c;

                    function d() {
                        l.src ? l.play() : u = !0
                    }(c = new FileReader).onload = function() {
                        for (var e = "", n = new Uint8Array(c.result), r = 0; r < n.byteLength; r++) e += String.fromCharCode(n[r]);
                        l.src = "data:" + t + ";base64," + window.btoa(e), u && l.play()
                    }, c.readAsArrayBuffer(n), this.play = function(t) {
                        var n = t - e.AudioChannel.getTimestamp();
                        n < 0 ? d() : window.setTimeout(d, n)
                    }
                }
            }
        }, (e = e || {}).InputStream = function(e, t) {
            var n = this;
            this.index = t, this.onblob = null, this.onend = null, this.sendAck = function(t, r) {
                e.sendAck(n.index, t, r)
            }
        }, (e = e || {}).IntegerPool = function() {
            var e = this,
                t = [];
            this.next_int = 0, this.next = function() {
                return t.length > 0 ? t.shift() : e.next_int++
            }, this.free = function(e) {
                t.push(e)
            }
        }, (e = e || {}).Keyboard = function(t) {
            var n = this;
            this.onkeydown = null, this.onkeyup = null;
            var r = function() {
                    var e = this;
                    this.timestamp = (new Date).getTime(), this.defaultPrevented = !1, this.keysym = null, this.reliable = !1, this.getAge = function() {
                        return (new Date).getTime() - e.timestamp
                    }
                },
                a = function(e, t, a, i) {
                    r.apply(this), this.keyCode = e, this.keyIdentifier = t, this.key = a, this.location = i, this.keysym = m(a, i) || y(e, i), this.keysym && (this.reliable = !0), !this.keysym && function(e, t) {
                        if (!t) return !1;
                        var n = t.indexOf("U+");
                        if (-1 === n) return !0;
                        var r = parseInt(t.substring(n + 2), 16);
                        return e !== r || (e >= 65 && e <= 90 || e >= 48 && e <= 57)
                    }(e, t) && (this.keysym = m(t, i, n.modifiers.shift));
                    var o = !(n.modifiers.ctrl || navigator && navigator.platform && navigator.platform.match(/^mac/i));
                    (!n.modifiers.alt && n.modifiers.ctrl || o && n.modifiers.alt || n.modifiers.meta || n.modifiers.hyper) && (this.reliable = !0), h[e] = this.keysym
                };
            a.prototype = new r;
            var i = function(e) {
                r.apply(this), this.charCode = e, this.keysym = v(e), this.reliable = !0
            };
            i.prototype = new r;
            var o = function(e, t, n, a) {
                r.apply(this), this.keyCode = e, this.keyIdentifier = t, this.key = n, this.location = a, this.keysym = h[e] || y(e, a) || m(n, a), this.reliable = !0
            };
            o.prototype = new r;
            var s = [],
                u = {
                    8: [65288],
                    9: [65289],
                    13: [65293],
                    16: [65505, 65505, 65506],
                    17: [65507, 65507, 65508],
                    18: [65513, 65513, 65027],
                    19: [65299],
                    20: [65509],
                    27: [65307],
                    32: [32],
                    33: [65365],
                    34: [65366],
                    35: [65367],
                    36: [65360],
                    37: [65361],
                    38: [65362],
                    39: [65363],
                    40: [65364],
                    45: [65379],
                    46: [65535],
                    91: [65515],
                    92: [65383],
                    93: null,
                    112: [65470],
                    113: [65471],
                    114: [65472],
                    115: [65473],
                    116: [65474],
                    117: [65475],
                    118: [65476],
                    119: [65477],
                    120: [65478],
                    121: [65479],
                    122: [65480],
                    123: [65481],
                    144: [65407],
                    145: [65300],
                    225: [65027]
                },
                l = {
                    Again: [65382],
                    AllCandidates: [65341],
                    Alphanumeric: [65328],
                    Alt: [65513, 65513, 65027],
                    Attn: [64782],
                    AltGraph: [65027],
                    ArrowDown: [65364],
                    ArrowLeft: [65361],
                    ArrowRight: [65363],
                    ArrowUp: [65362],
                    Backspace: [65288],
                    CapsLock: [65509],
                    Cancel: [65385],
                    Clear: [65291],
                    Convert: [65313],
                    Copy: [64789],
                    Crsel: [64796],
                    CrSel: [64796],
                    CodeInput: [65335],
                    Compose: [65312],
                    Control: [65507, 65507, 65508],
                    ContextMenu: [65383],
                    DeadGrave: [65104],
                    DeadAcute: [65105],
                    DeadCircumflex: [65106],
                    DeadTilde: [65107],
                    DeadMacron: [65108],
                    DeadBreve: [65109],
                    DeadAboveDot: [65110],
                    DeadUmlaut: [65111],
                    DeadAboveRing: [65112],
                    DeadDoubleacute: [65113],
                    DeadCaron: [65114],
                    DeadCedilla: [65115],
                    DeadOgonek: [65116],
                    DeadIota: [65117],
                    DeadVoicedSound: [65118],
                    DeadSemivoicedSound: [65119],
                    Delete: [65535],
                    Down: [65364],
                    End: [65367],
                    Enter: [65293],
                    EraseEof: [64774],
                    Escape: [65307],
                    Execute: [65378],
                    Exsel: [64797],
                    ExSel: [64797],
                    F1: [65470],
                    F2: [65471],
                    F3: [65472],
                    F4: [65473],
                    F5: [65474],
                    F6: [65475],
                    F7: [65476],
                    F8: [65477],
                    F9: [65478],
                    F10: [65479],
                    F11: [65480],
                    F12: [65481],
                    F13: [65482],
                    F14: [65483],
                    F15: [65484],
                    F16: [65485],
                    F17: [65486],
                    F18: [65487],
                    F19: [65488],
                    F20: [65489],
                    F21: [65490],
                    F22: [65491],
                    F23: [65492],
                    F24: [65493],
                    Find: [65384],
                    GroupFirst: [65036],
                    GroupLast: [65038],
                    GroupNext: [65032],
                    GroupPrevious: [65034],
                    FullWidth: null,
                    HalfWidth: null,
                    HangulMode: [65329],
                    Hankaku: [65321],
                    HanjaMode: [65332],
                    Help: [65386],
                    Hiragana: [65317],
                    HiraganaKatakana: [65319],
                    Home: [65360],
                    Hyper: [65517, 65517, 65518],
                    Insert: [65379],
                    JapaneseHiragana: [65317],
                    JapaneseKatakana: [65318],
                    JapaneseRomaji: [65316],
                    JunjaMode: [65336],
                    KanaMode: [65325],
                    KanjiMode: [65313],
                    Katakana: [65318],
                    Left: [65361],
                    Meta: [65511, 65511, 65512],
                    ModeChange: [65406],
                    NumLock: [65407],
                    PageDown: [65366],
                    PageUp: [65365],
                    Pause: [65299],
                    Play: [64790],
                    PreviousCandidate: [65342],
                    PrintScreen: [64797],
                    Redo: [65382],
                    Right: [65363],
                    RomanCharacters: null,
                    Scroll: [65300],
                    Select: [65376],
                    Separator: [65452],
                    Shift: [65505, 65505, 65506],
                    SingleCandidate: [65340],
                    Super: [65515, 65515, 65516],
                    Tab: [65289],
                    Up: [65362],
                    Undo: [65381],
                    Win: [65515],
                    Zenkaku: [65320],
                    ZenkakuHankaku: [65322]
                },
                c = {
                    65027: !0,
                    65505: !0,
                    65506: !0,
                    65507: !0,
                    65508: !0,
                    65511: !0,
                    65512: !0,
                    65513: !0,
                    65514: !0,
                    65515: !0,
                    65516: !0
                };
            this.modifiers = new e.Keyboard.ModifierState, this.pressed = {};
            var d = {},
                h = {},
                f = null,
                p = null;

            function g(e, t) {
                return e ? e[t] || e[0] : null
            }

            function m(e, t, n) {
                if (!e) return null;
                var r, a = e.indexOf("U+");
                if (a >= 0) {
                    var i = e.substring(a + 2);
                    r = String.fromCharCode(parseInt(i, 16))
                } else {
                    if (1 !== e.length) return g(l[e], t);
                    r = e
                }
                return !0 === n ? r = r.toUpperCase() : !1 === n && (r = r.toLowerCase()), v(r.charCodeAt(0))
            }

            function v(e) {
                return function(e) {
                    return e <= 31 || e >= 127 && e <= 159
                }(e) ? 65280 | e : e >= 0 && e <= 255 ? e : e >= 256 && e <= 1114111 ? 16777216 | e : null
            }

            function y(e, t) {
                return g(u[e], t)
            }

            function b(t) {
                var r = e.Keyboard.ModifierState.fromKeyboardEvent(t);
                n.modifiers.alt && !1 === r.alt && (n.release(65513), n.release(65514), n.release(65027)), n.modifiers.shift && !1 === r.shift && (n.release(65505), n.release(65506)), n.modifiers.ctrl && !1 === r.ctrl && (n.release(65507), n.release(65508)), n.modifiers.meta && !1 === r.meta && (n.release(65511), n.release(65512)), n.modifiers.hyper && !1 === r.hyper && (n.release(65515), n.release(65516)), n.modifiers = r
            }

            function w() {
                var e, t = S();
                if (!t) return !1;
                do {
                    e = t, t = S()
                } while (null !== t);
                return e.defaultPrevented
            }

            function S() {
                var e = s[0];
                if (!e) return null;
                if (!(e instanceof a)) return e instanceof o ? ((t = e.keysym) ? (n.release(t), e.defaultPrevented = !0) : n.reset(), s.shift()) : s.shift();
                var t = null,
                    r = [];
                if (e.reliable ? (t = e.keysym, r = s.splice(0, 1)) : s[1] instanceof i ? (t = s[1].keysym, r = s.splice(0, 2)) : s[1] && (t = e.keysym, r = s.splice(0, 1)), r.length > 0) {
                    if (t) {
                        ! function(e) {
                            n.modifiers.ctrl && n.modifiers.alt && (e >= 65 && e <= 90 || e >= 97 && e <= 122 || (e <= 255 || 16777216 == (4278190080 & e)) && (n.release(65507), n.release(65508), n.release(65513), n.release(65514)))
                        }(t);
                        var u = !n.press(t);
                        h[e.keyCode] = t, n.modifiers.meta && 65511 !== t && 65512 !== t && n.release(t);
                        for (var l = 0; l < r.length; l++) r[l].defaultPrevented = u
                    }
                    return e
                }
                return null
            }
            this.press = function(e) {
                if (null !== e) {
                    if (!n.pressed[e] && (n.pressed[e] = !0, n.onkeydown)) {
                        var t = n.onkeydown(e);
                        return d[e] = t, window.clearTimeout(f), window.clearInterval(p), c[e] || (f = window.setTimeout((function() {
                            p = window.setInterval((function() {
                                n.onkeyup(e), n.onkeydown(e)
                            }), 50)
                        }), 500)), t
                    }
                    return d[e] || !1
                }
            }, this.release = function(e) {
                n.pressed[e] && (delete n.pressed[e], window.clearTimeout(f), window.clearInterval(p), null !== e && n.onkeyup && n.onkeyup(e))
            }, this.reset = function() {
                for (var e in n.pressed) n.release(parseInt(e));
                s = []
            };
            var I = function(e) {
                return "location" in e ? e.location : "keyLocation" in e ? e.keyLocation : 0
            };
            t.addEventListener("keydown", (function(e) {
                var t;
                if (n.onkeydown && (window.event ? t = window.event.keyCode : e.which && (t = e.which), b(e), 229 !== t)) {
                    var r = new a(t, e.keyIdentifier, e.key, I(e));
                    s.push(r), w() && e.preventDefault()
                }
            }), !0), t.addEventListener("keypress", (function(e) {
                if (n.onkeydown || n.onkeyup) {
                    var t;
                    window.event ? t = window.event.keyCode : e.which && (t = e.which), b(e);
                    var r = new i(t);
                    s.push(r), w() && e.preventDefault()
                }
            }), !0), t.addEventListener("keyup", (function(e) {
                if (n.onkeyup) {
                    var t;
                    e.preventDefault(), window.event ? t = window.event.keyCode : e.which && (t = e.which), b(e);
                    var r = new o(t, e.keyIdentifier, e.key, I(e));
                    s.push(r), w()
                }
            }), !0)
        }, e.Keyboard.ModifierState = function() {
            this.shift = !1, this.ctrl = !1, this.alt = !1, this.meta = !1, this.hyper = !1
        }, e.Keyboard.ModifierState.fromKeyboardEvent = function(t) {
            var n = new e.Keyboard.ModifierState;
            return n.shift = t.shiftKey, n.ctrl = t.ctrlKey, n.alt = t.altKey, n.meta = t.metaKey, t.getModifierState && (n.hyper = t.getModifierState("OS") || t.getModifierState("Super") || t.getModifierState("Hyper") || t.getModifierState("Win")), n
        }, (e = e || {}).Status = function(e, t) {
            var n = this;
            this.code = e, this.message = t, this.isError = function() {
                return n.code < 0 || n.code > 255
            }
        }, e.Status.Code = {
            SUCCESS: 0,
            UNSUPPORTED: 256,
            SERVER_ERROR: 512,
            SERVER_BUSY: 513,
            UPSTREAM_TIMEOUT: 514,
            UPSTREAM_ERROR: 515,
            RESOURCE_NOT_FOUND: 516,
            RESOURCE_CONFLICT: 517,
            CLIENT_BAD_REQUEST: 768,
            CLIENT_UNAUTHORIZED: 769,
            CLIENT_FORBIDDEN: 771,
            CLIENT_TIMEOUT: 776,
            CLIENT_OVERRUN: 781,
            CLIENT_BAD_TYPE: 783,
            CLIENT_TOO_MANY: 797
        }, (e = e || {}).ArrayBufferWriter = function(e) {
            var t = this;

            function n(t) {
                for (var n = "", r = 0; r < t.byteLength; r++) n += String.fromCharCode(t[r]);
                e.sendBlob(window.btoa(n))
            }
            e.onack = function(e) {
                t.onack && t.onack(e)
            }, this.sendData = function(e) {
                var t = new Uint8Array(e);
                if (t.length <= 8064) n(t);
                else
                    for (var r = 0; r < t.length; r += 8064) n(t.subarray(r, r + 8094))
            }, this.sendEnd = function() {
                e.sendEnd()
            }, this.onack = null
        }, (e = e || {}).Layer = function(t, n) {
            var r = this,
                a = document.createElement("canvas"),
                i = a.getContext("2d");
            i.save();
            var o = !0,
                s = 0,
                u = {
                    1: "destination-in",
                    2: "destination-out",
                    4: "source-in",
                    6: "source-atop",
                    8: "source-out",
                    9: "destination-atop",
                    10: "xor",
                    11: "destination-over",
                    12: "copy",
                    14: "source-over",
                    15: "lighter"
                };

            function l(e, t, n, a) {
                var i, o, s = n + e,
                    u = a + t;
                i = s > r.width ? s : r.width, o = u > r.height ? u : r.height, r.resize(i, o)
            }
            this.autosize = !1, this.width = t, this.height = n, this.getCanvas = function() {
                return a
            }, this.resize = function(e, t) {
                e === r.width && t === r.height || function(e, t) {
                    var n = null;
                    0 !== r.width && 0 !== r.height && ((n = document.createElement("canvas")).width = r.width, n.height = r.height, n.getContext("2d").drawImage(a, 0, 0, r.width, r.height, 0, 0, r.width, r.height));
                    var o = i.globalCompositeOperation;
                    a.width = e, a.height = t, n && i.drawImage(n, 0, 0, r.width, r.height, 0, 0, r.width, r.height), i.globalCompositeOperation = o, r.width = e, r.height = t, s = 0, i.save()
                }(e, t)
            }, this.drawImage = function(e, t, n) {
                r.autosize && l(e, t, n.width, n.height), i.drawImage(n, e, t)
            }, this.transfer = function(t, n, a, o, s, u, c, d) {
                var h = t.getCanvas();
                if (!(n >= h.width || a >= h.height) && (n + o > h.width && (o = h.width - n), a + s > h.height && (s = h.height - a), 0 !== o && 0 !== s)) {
                    r.autosize && l(u, c, o, s);
                    for (var f = t.getCanvas().getContext("2d").getImageData(n, a, o, s), p = i.getImageData(u, c, o, s), g = 0; g < o * s * 4; g += 4) {
                        var m = new e.Layer.Pixel(f.data[g], f.data[g + 1], f.data[g + 2], f.data[g + 3]),
                            v = new e.Layer.Pixel(p.data[g], p.data[g + 1], p.data[g + 2], p.data[g + 3]);
                        d(m, v), p.data[g] = v.red, p.data[g + 1] = v.green, p.data[g + 2] = v.blue, p.data[g + 3] = v.alpha
                    }
                    i.putImageData(p, u, c)
                }
            }, this.put = function(e, t, n, a, o, s, u) {
                var c = e.getCanvas();
                if (!(t >= c.width || n >= c.height) && (t + a > c.width && (a = c.width - t), n + o > c.height && (o = c.height - n), 0 !== a && 0 !== o)) {
                    r.autosize && l(s, u, a, o);
                    var d = e.getCanvas().getContext("2d").getImageData(t, n, a, o);
                    i.putImageData(d, s, u)
                }
            }, this.copy = function(e, t, n, a, o, s, u) {
                var c = e.getCanvas();
                t >= c.width || n >= c.height || (t + a > c.width && (a = c.width - t), n + o > c.height && (o = c.height - n), 0 !== a && 0 !== o && (r.autosize && l(s, u, a, o), i.drawImage(c, t, n, a, o, s, u, a, o)))
            }, this.moveTo = function(e, t) {
                o && (i.beginPath(), o = !1), r.autosize && l(e, t, 0, 0), i.moveTo(e, t)
            }, this.lineTo = function(e, t) {
                o && (i.beginPath(), o = !1), r.autosize && l(e, t, 0, 0), i.lineTo(e, t)
            }, this.arc = function(e, t, n, a, s, u) {
                o && (i.beginPath(), o = !1), r.autosize && l(e, t, 0, 0), i.arc(e, t, n, a, s, u)
            }, this.curveTo = function(e, t, n, a, s, u) {
                o && (i.beginPath(), o = !1), r.autosize && l(s, u, 0, 0), i.bezierCurveTo(e, t, n, a, s, u)
            }, this.close = function() {
                i.closePath(), o = !0
            }, this.rect = function(e, t, n, a) {
                o && (i.beginPath(), o = !1), r.autosize && l(e, t, n, a), i.rect(e, t, n, a)
            }, this.clip = function() {
                i.clip(), o = !0
            }, this.strokeColor = function(e, t, n, r, a, s, u) {
                i.lineCap = e, i.lineJoin = t, i.lineWidth = n, i.strokeStyle = "rgba(" + r + "," + a + "," + s + "," + u / 255 + ")", i.stroke(), o = !0
            }, this.fillColor = function(e, t, n, r) {
                i.fillStyle = "rgba(" + e + "," + t + "," + n + "," + r / 255 + ")", i.fill(), o = !0
            }, this.strokeLayer = function(e, t, n, r) {
                i.lineCap = e, i.lineJoin = t, i.lineWidth = n, i.strokeStyle = i.createPattern(r.getCanvas(), "repeat"), i.stroke(), o = !0
            }, this.fillLayer = function(e) {
                i.fillStyle = i.createPattern(e.getCanvas(), "repeat"), i.fill(), o = !0
            }, this.push = function() {
                i.save(), s++
            }, this.pop = function() {
                s > 0 && (i.restore(), s--)
            }, this.reset = function() {
                for (; s > 0;) i.restore(), s--;
                i.restore(), i.save(), i.beginPath(), o = !1
            }, this.setTransform = function(e, t, n, r, a, o) {
                i.setTransform(e, t, n, r, a, o)
            }, this.transform = function(e, t, n, r, a, o) {
                i.transform(e, t, n, r, a, o)
            }, this.setChannelMask = function(e) {
                i.globalCompositeOperation = u[e]
            }, this.setMiterLimit = function(e) {
                i.miterLimit = e
            }, a.width = t, a.height = n, a.style.zIndex = -1
        }, e.Layer.ROUT = 2, e.Layer.ATOP = 6, e.Layer.XOR = 10, e.Layer.ROVER = 11, e.Layer.OVER = 14, e.Layer.PLUS = 15, e.Layer.RIN = 1, e.Layer.IN = 4, e.Layer.OUT = 8, e.Layer.RATOP = 9, e.Layer.SRC = 12, e.Layer.Pixel = function(e, t, n, r) {
            this.red = e, this.green = t, this.blue = n, this.alpha = r
        }, (e = e || {}).StringWriter = function(t) {
            var n = this,
                r = new e.ArrayBufferWriter(t),
                a = new Uint8Array(8192),
                i = 0;

            function o(e) {
                var t, n;
                if (e <= 127) t = 0, n = 1;
                else if (e <= 2047) t = 192, n = 2;
                else if (e <= 65535) t = 224, n = 3;
                else {
                    if (!(e <= 2097151)) return void o(65533);
                    t = 240, n = 4
                }! function(e) {
                    if (i + e >= a.length) {
                        var t = new Uint8Array(2 * (i + e));
                        t.set(a), a = t
                    }
                    i += e
                }(n);
                for (var r = i - 1, s = 1; s < n; s++) a[r--] = 128 | 63 & e, e >>= 6;
                a[r] = t | e
            }
            r.onack = function(e) {
                n.onack && n.onack(e)
            }, this.sendText = function(e) {
                r.sendData(function(e) {
                    for (var t = 0; t < e.length; t++) {
                        o(e.charCodeAt(t))
                    }
                    if (i > 0) {
                        var n = a.subarray(0, i);
                        return i = 0, n
                    }
                }(e))
            }, this.sendEnd = function() {
                r.sendEnd()
            }, this.onack = null
        }, (e = e || {}).API_VERSION = "0.9.5", e
    }! function(e, t) {
        var n = e.jQuery;
        if (void 0 !== r.Adapter) throw new Error("History.js Adapter has already been loaded...");
        r.Adapter = {
            bind: function(e, t, r) {
                n(e).bind(t, r)
            },
            trigger: function(e, t, r) {
                n(e).trigger(t, r)
            },
            extractEventData: function(e, t, n) {
                return t && t.originalEvent && t.originalEvent[e] || n && n[e] || void 0
            },
            onDomLoad: function(e) {
                n(e)
            }
        }, void 0 !== r.init && r.init()
    }(window),
    function(e, t) {
        var n = e.document,
            a = e.setTimeout || a,
            i = e.clearTimeout || i,
            o = e.setInterval || o;
        if (void 0 !== r.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        r.initHtml4 = function() {
            if (void 0 !== r.initHtml4.initialized) return !1;
            r.initHtml4.initialized = !0, r.enabled = !0, r.savedHashes = [], r.isLastHash = function(e) {
                return e === r.getHashByIndex()
            }, r.isHashEqual = function(e, t) {
                return (e = encodeURIComponent(e).replace(/%25/g, "%")) === (t = encodeURIComponent(t).replace(/%25/g, "%"))
            }, r.saveHash = function(e) {
                return !r.isLastHash(e) && (r.savedHashes.push(e), !0)
            }, r.getHashByIndex = function(e) {
                return void 0 === e ? r.savedHashes[r.savedHashes.length - 1] : e < 0 ? r.savedHashes[r.savedHashes.length + e] : r.savedHashes[e]
            }, r.discardedHashes = {}, r.discardedStates = {}, r.discardState = function(e, t, n) {
                var a, i = r.getHashByState(e);
                return a = {
                    discardedState: e,
                    backState: n,
                    forwardState: t
                }, r.discardedStates[i] = a, !0
            }, r.discardHash = function(e, t, n) {
                var a = {
                    discardedHash: e,
                    backState: n,
                    forwardState: t
                };
                return r.discardedHashes[e] = a, !0
            }, r.discardedState = function(e) {
                var t = r.getHashByState(e);
                return r.discardedStates[t] || !1
            }, r.discardedHash = function(e) {
                return r.discardedHashes[e] || !1
            }, r.recycleState = function(e) {
                var t = r.getHashByState(e);
                return r.discardedState(e) && delete r.discardedStates[t], !0
            }, r.emulated.hashChange && (r.hashChangeInit = function() {
                r.checkerFunction = null;
                var t, a, i, s = "",
                    u = Boolean(r.getHash());
                return r.isInternetExplorer() ? ("historyjs-iframe", (t = n.createElement("iframe")).setAttribute("id", "historyjs-iframe"), t.setAttribute("src", "#"), t.style.display = "none", n.body.appendChild(t), t.contentWindow.document.open(), t.contentWindow.document.close(), a = "", i = !1, r.checkerFunction = function() {
                    if (i) return !1;
                    i = !0;
                    var n = r.getHash(),
                        o = r.getHash(t.contentWindow.document);
                    return n !== s ? (s = n, o !== n && (a = o = n, t.contentWindow.document.open(), t.contentWindow.document.close(), t.contentWindow.document.location.hash = r.escapeHash(n)), r.Adapter.trigger(e, "hashchange")) : o !== a && (a = o, u && "" === o ? r.back() : r.setHash(o, !1)), i = !1, !0
                }) : r.checkerFunction = function() {
                    var t = r.getHash() || "";
                    return t !== s && (s = t, r.Adapter.trigger(e, "hashchange")), !0
                }, r.intervalList.push(o(r.checkerFunction, r.options.hashChangeInterval)), !0
            }, r.Adapter.onDomLoad(r.hashChangeInit)), r.emulated.pushState && (r.onHashChange = function(t) {
                var n, a, i = t && t.newURL || r.getLocationHref(),
                    o = r.getHashByUrl(i);
                return r.isLastHash(o) ? (r.busy(!1), !1) : (r.doubleCheckComplete(), r.saveHash(o), o && r.isTraditionalAnchor(o) ? (r.Adapter.trigger(e, "anchorchange"), r.busy(!1), !1) : (n = r.extractState(r.getFullUrl(o || r.getLocationHref()), !0), r.isLastSavedState(n) ? (r.busy(!1), !1) : (r.getHashByState(n), (a = r.discardedState(n)) ? (r.getHashByIndex(-2) === r.getHashByState(a.forwardState) ? r.back(!1) : r.forward(!1), !1) : (r.pushState(n.data, n.title, encodeURI(n.url), !1), !0))))
            }, r.Adapter.bind(e, "hashchange", r.onHashChange), r.pushState = function(t, n, a, i) {
                if (a = encodeURI(a).replace(/%25/g, "%"), r.getHashByUrl(a)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== i && r.busy()) return r.pushQueue({
                    scope: r,
                    callback: r.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                r.busy(!0);
                var o = r.createStateObject(t, n, a),
                    s = r.getHashByState(o),
                    u = r.getState(!1),
                    l = r.getHashByState(u),
                    c = r.getHash(),
                    d = r.expectedStateId == o.id;
                return r.storeState(o), r.expectedStateId = o.id, r.recycleState(o), r.setTitle(o), s === l ? (r.busy(!1), !1) : (r.saveState(o), d || r.Adapter.trigger(e, "statechange"), r.isHashEqual(s, c) || r.isHashEqual(s, r.getShortUrl(r.getLocationHref())) || r.setHash(s, !1), r.busy(!1), !0)
            }, r.replaceState = function(t, n, a, i) {
                if (a = encodeURI(a).replace(/%25/g, "%"), r.getHashByUrl(a)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== i && r.busy()) return r.pushQueue({
                    scope: r,
                    callback: r.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                r.busy(!0);
                var o = r.createStateObject(t, n, a),
                    s = r.getHashByState(o),
                    u = r.getState(!1),
                    l = r.getHashByState(u),
                    c = r.getStateByIndex(-2);
                return r.discardState(u, o, c), s === l ? (r.storeState(o), r.expectedStateId = o.id, r.recycleState(o), r.setTitle(o), r.saveState(o), r.Adapter.trigger(e, "statechange"), r.busy(!1)) : r.pushState(o.data, o.title, o.url, !1), !0
            }), r.emulated.pushState && r.getHash() && !r.emulated.hashChange && r.Adapter.onDomLoad((function() {
                r.Adapter.trigger(e, "hashchange")
            }))
        }, void 0 !== r.init && r.init()
    }(window),
    function(e, t) {
        var n = e.console || void 0,
            a = e.document,
            i = e.navigator,
            o = !1,
            s = e.setTimeout,
            u = e.clearTimeout,
            l = e.setInterval,
            c = e.clearInterval,
            d = e.JSON,
            h = e.alert,
            f = e.history;
        try {
            (o = e.sessionStorage).setItem("TEST", "1"), o.removeItem("TEST")
        } catch (e) {
            o = !1
        }
        if (d.stringify = d.stringify || d.encode, d.parse = d.parse || d.decode, void 0 !== r.init) throw new Error("History.js Core has already been loaded...");
        r.init = function(e) {
            return void 0 !== r.Adapter && (void 0 !== r.initCore && r.initCore(), void 0 !== r.initHtml4 && r.initHtml4(), !0)
        }, r.initCore = function(t) {
            if (void 0 !== r.initCore.initialized) return !1;
            if (r.initCore.initialized = !0, r.options = r.options || {}, r.options.hashChangeInterval = r.options.hashChangeInterval || 100, r.options.safariPollInterval = r.options.safariPollInterval || 500, r.options.doubleCheckInterval = r.options.doubleCheckInterval || 500, r.options.disableSuid = r.options.disableSuid || !1, r.options.storeInterval = r.options.storeInterval || 1e3, r.options.busyDelay = r.options.busyDelay || 250, r.options.debug = r.options.debug || !1, r.options.initialTitle = r.options.initialTitle || a.title, r.options.html4Mode = r.options.html4Mode || !1, r.options.delayInit = r.options.delayInit || !1, r.intervalList = [], r.clearAllIntervals = function() {
                    var e, t = r.intervalList;
                    if (null != t) {
                        for (e = 0; e < t.length; e++) c(t[e]);
                        r.intervalList = null
                    }
                }, r.debug = function() {
                    r.options.debug && r.log.apply(r, arguments)
                }, r.log = function() {
                    var e, t, r, i, o, s = !(void 0 === n || void 0 === n.log || void 0 === n.log.apply),
                        u = a.getElementById("log");
                    for (s ? (e = (i = Array.prototype.slice.call(arguments)).shift(), void 0 !== n.debug ? n.debug.apply(n, [e, i]) : n.log.apply(n, [e, i])) : e = "\n" + arguments[0] + "\n", t = 1, r = arguments.length; t < r; ++t) {
                        if ("object" == typeof(o = arguments[t]) && void 0 !== d) try {
                            o = d.stringify(o)
                        } catch (e) {}
                        e += "\n" + o + "\n"
                    }
                    return u ? (u.value += e + "\n-----\n", u.scrollTop = u.scrollHeight - u.clientHeight) : s || h(e), !0
                }, r.getInternetExplorerMajorVersion = function() {
                    return r.getInternetExplorerMajorVersion.cached = void 0 !== r.getInternetExplorerMajorVersion.cached ? r.getInternetExplorerMajorVersion.cached : function() {
                        for (var e = 3, t = a.createElement("div"), n = t.getElementsByTagName("i");
                            (t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e") && n[0];);
                        return e > 4 && e
                    }()
                }, r.isInternetExplorer = function() {
                    return r.isInternetExplorer.cached = void 0 !== r.isInternetExplorer.cached ? r.isInternetExplorer.cached : Boolean(r.getInternetExplorerMajorVersion())
                }, r.options.html4Mode ? r.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : r.emulated = {
                    pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent))),
                    hashChange: Boolean(!("onhashchange" in e || "onhashchange" in a) || r.isInternetExplorer() && r.getInternetExplorerMajorVersion() < 8)
                }, r.enabled = !r.emulated.pushState, r.bugs = {
                    setHash: Boolean(!r.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    safariPoll: Boolean(!r.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    ieDoubleCheck: Boolean(r.isInternetExplorer() && r.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(r.isInternetExplorer() && r.getInternetExplorerMajorVersion() < 7)
                }, r.isEmptyObject = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, r.cloneObject = function(e) {
                    var t, n;
                    return e ? (t = d.stringify(e), n = d.parse(t)) : n = {}, n
                }, r.getRootUrl = function() {
                    var e = a.location.protocol + "//" + (a.location.hostname || a.location.host);
                    return a.location.port && (e += ":" + a.location.port), e += "/"
                }, r.getBaseHref = function() {
                    var e = a.getElementsByTagName("base"),
                        t = "";
                    return 1 === e.length && (t = e[0].href.replace(/[^\/]+$/, "")), (t = t.replace(/\/+$/, "")) && (t += "/"), t
                }, r.getBaseUrl = function() {
                    return r.getBaseHref() || r.getBasePageUrl() || r.getRootUrl()
                }, r.getPageUrl = function() {
                    return ((r.getState(!1, !1) || {}).url || r.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, (function(e, t, n) {
                        return /\./.test(e) ? e : e + "/"
                    }))
                }, r.getBasePageUrl = function() {
                    return r.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, (function(e, t, n) {
                        return /[^\/]$/.test(e) ? "" : e
                    })).replace(/\/+$/, "") + "/"
                }, r.getFullUrl = function(e, t) {
                    var n = e,
                        a = e.substring(0, 1);
                    return t = void 0 === t || t, /[a-z]+\:\/\//.test(e) || (n = "/" === a ? r.getRootUrl() + e.replace(/^\/+/, "") : "#" === a ? r.getPageUrl().replace(/#.*/, "") + e : "?" === a ? r.getPageUrl().replace(/[\?#].*/, "") + e : t ? r.getBaseUrl() + e.replace(/^(\.\/)+/, "") : r.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, r.getShortUrl = function(e) {
                    var t = e,
                        n = r.getBaseUrl(),
                        a = r.getRootUrl();
                    return r.emulated.pushState && (t = t.replace(n, "")), t = t.replace(a, "/"), r.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, r.getLocationHref = function(e) {
                    return (e = e || a).URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#") ? e.location.href : e.URL || e.location.href
                }, r.store = {}, r.idToState = r.idToState || {}, r.stateToId = r.stateToId || {}, r.urlToId = r.urlToId || {}, r.storedStates = r.storedStates || [], r.savedStates = r.savedStates || [], r.normalizeStore = function() {
                    r.store.idToState = r.store.idToState || {}, r.store.urlToId = r.store.urlToId || {}, r.store.stateToId = r.store.stateToId || {}
                }, r.getState = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = r.getLastSavedState();
                    return !n && t && (n = r.createStateObject()), e && ((n = r.cloneObject(n)).url = n.cleanUrl || n.url), n
                }, r.getIdByState = function(e) {
                    var t, n = r.extractId(e.url);
                    if (!n)
                        if (t = r.getStateString(e), void 0 !== r.stateToId[t]) n = r.stateToId[t];
                        else if (void 0 !== r.store.stateToId[t]) n = r.store.stateToId[t];
                    else {
                        for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== r.idToState[n] || void 0 !== r.store.idToState[n];);
                        r.stateToId[t] = n, r.idToState[n] = e
                    }
                    return n
                }, r.normalizeState = function(e) {
                    var t, n;
                    return e && "object" == typeof e || (e = {}), void 0 !== e.normalized ? e : (e.data && "object" == typeof e.data || (e.data = {}), (t = {}).normalized = !0, t.title = e.title || "", t.url = r.getFullUrl(e.url ? e.url : r.getLocationHref()), t.hash = r.getShortUrl(t.url), t.data = r.cloneObject(e.data), t.id = r.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !r.isEmptyObject(t.data), (t.title || n) && !0 !== r.options.disableSuid && (t.hash = r.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = r.getFullUrl(t.hash), (r.emulated.pushState || r.bugs.safariPoll) && r.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t)
                }, r.createStateObject = function(e, t, n) {
                    var a = {
                        data: e,
                        title: t,
                        url: n
                    };
                    return a = r.normalizeState(a)
                }, r.getStateById = function(e) {
                    return e = String(e), r.idToState[e] || r.store.idToState[e] || void 0
                }, r.getStateString = function(e) {
                    var t;
                    return t = {
                        data: r.normalizeState(e).data,
                        title: e.title,
                        url: e.url
                    }, d.stringify(t)
                }, r.getStateId = function(e) {
                    return r.normalizeState(e).id
                }, r.getHashByState = function(e) {
                    return r.normalizeState(e).hash
                }, r.extractId = function(e) {
                    var t, n;
                    return n = -1 != e.indexOf("#") ? e.split("#")[0] : e, (t = /(.*)\&_suid=([0-9]+)$/.exec(n)) && t[1] || e, (t ? String(t[2] || "") : "") || !1
                }, r.isTraditionalAnchor = function(e) {
                    return !/[\/\?\.]/.test(e)
                }, r.extractState = function(e, t) {
                    var n, a, i = null;
                    return t = t || !1, (n = r.extractId(e)) && (i = r.getStateById(n)), i || (a = r.getFullUrl(e), (n = r.getIdByUrl(a) || !1) && (i = r.getStateById(n)), i || !t || r.isTraditionalAnchor(e) || (i = r.createStateObject(null, null, a))), i
                }, r.getIdByUrl = function(e) {
                    return r.urlToId[e] || r.store.urlToId[e] || void 0
                }, r.getLastSavedState = function() {
                    return r.savedStates[r.savedStates.length - 1] || void 0
                }, r.getLastStoredState = function() {
                    return r.storedStates[r.storedStates.length - 1] || void 0
                }, r.hasUrlDuplicate = function(e) {
                    var t;
                    return (t = r.extractState(e.url)) && t.id !== e.id
                }, r.storeState = function(e) {
                    return r.urlToId[e.url] = e.id, r.storedStates.push(r.cloneObject(e)), e
                }, r.isLastSavedState = function(e) {
                    var t = !1;
                    return r.savedStates.length && (t = e.id === r.getLastSavedState().id), t
                }, r.saveState = function(e) {
                    return !r.isLastSavedState(e) && (r.savedStates.push(r.cloneObject(e)), !0)
                }, r.getStateByIndex = function(e) {
                    return void 0 === e ? r.savedStates[r.savedStates.length - 1] : e < 0 ? r.savedStates[r.savedStates.length + e] : r.savedStates[e]
                }, r.getCurrentIndex = function() {
                    return r.savedStates.length < 1 ? 0 : r.savedStates.length - 1
                }, r.getHash = function(e) {
                    var t = r.getLocationHref(e);
                    return r.getHashByUrl(t)
                }, r.unescapeHash = function(e) {
                    var t = r.normalizeHash(e);
                    return t = decodeURIComponent(t)
                }, r.normalizeHash = function(e) {
                    return e.replace(/[^#]*#/, "").replace(/#.*/, "")
                }, r.setHash = function(e, t) {
                    var n, i;
                    return !1 !== t && r.busy() ? (r.pushQueue({
                        scope: r,
                        callback: r.setHash,
                        args: arguments,
                        queue: t
                    }), !1) : (r.busy(!0), (n = r.extractState(e, !0)) && !r.emulated.pushState ? r.pushState(n.data, n.title, n.url, !1) : r.getHash() !== e && (r.bugs.setHash ? (i = r.getPageUrl(), r.pushState(null, null, i + "#" + e, !1)) : a.location.hash = e), r)
                }, r.escapeHash = function(t) {
                    var n = r.normalizeHash(t);
                    return n = e.encodeURIComponent(n), r.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
                }, r.getHashByUrl = function(e) {
                    var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return t = r.unescapeHash(t)
                }, r.setTitle = function(e) {
                    var t, n = e.title;
                    n || (t = r.getStateByIndex(0)) && t.url === e.url && (n = t.title || r.options.initialTitle);
                    try {
                        a.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (e) {}
                    return a.title = n, r
                }, r.queues = [], r.busy = function(e) {
                    if (void 0 !== e ? r.busy.flag = e : void 0 === r.busy.flag && (r.busy.flag = !1), !r.busy.flag) {
                        u(r.busy.timeout);
                        var t = function() {
                            var e, n, a;
                            if (!r.busy.flag)
                                for (e = r.queues.length - 1; e >= 0; --e) 0 !== (n = r.queues[e]).length && (a = n.shift(), r.fireQueueItem(a), r.busy.timeout = s(t, r.options.busyDelay))
                        };
                        r.busy.timeout = s(t, r.options.busyDelay)
                    }
                    return r.busy.flag
                }, r.busy.flag = !1, r.fireQueueItem = function(e) {
                    return e.callback.apply(e.scope || r, e.args || [])
                }, r.pushQueue = function(e) {
                    return r.queues[e.queue || 0] = r.queues[e.queue || 0] || [], r.queues[e.queue || 0].push(e), r
                }, r.queue = function(e, t) {
                    return "function" == typeof e && (e = {
                        callback: e
                    }), void 0 !== t && (e.queue = t), r.busy() ? r.pushQueue(e) : r.fireQueueItem(e), r
                }, r.clearQueue = function() {
                    return r.busy.flag = !1, r.queues = [], r
                }, r.stateChanged = !1, r.doubleChecker = !1, r.doubleCheckComplete = function() {
                    return r.stateChanged = !0, r.doubleCheckClear(), r
                }, r.doubleCheckClear = function() {
                    return r.doubleChecker && (u(r.doubleChecker), r.doubleChecker = !1), r
                }, r.doubleCheck = function(e) {
                    return r.stateChanged = !1, r.doubleCheckClear(), r.bugs.ieDoubleCheck && (r.doubleChecker = s((function() {
                        return r.doubleCheckClear(), r.stateChanged || e(), !0
                    }), r.options.doubleCheckInterval)), r
                }, r.safariStatePoll = function() {
                    var t = r.extractState(r.getLocationHref());
                    if (!r.isLastSavedState(t)) return t || r.createStateObject(), r.Adapter.trigger(e, "popstate"), r
                }, r.back = function(e) {
                    return !1 !== e && r.busy() ? (r.pushQueue({
                        scope: r,
                        callback: r.back,
                        args: arguments,
                        queue: e
                    }), !1) : (r.busy(!0), r.doubleCheck((function() {
                        r.back(!1)
                    })), f.go(-1), !0)
                }, r.forward = function(e) {
                    return !1 !== e && r.busy() ? (r.pushQueue({
                        scope: r,
                        callback: r.forward,
                        args: arguments,
                        queue: e
                    }), !1) : (r.busy(!0), r.doubleCheck((function() {
                        r.forward(!1)
                    })), f.go(1), !0)
                }, r.go = function(e, t) {
                    var n;
                    if (e > 0)
                        for (n = 1; n <= e; ++n) r.forward(t);
                    else {
                        if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (n = -1; n >= e; --n) r.back(t)
                    }
                    return r
                }, r.emulated.pushState) {
                var p = function() {};
                r.pushState = r.pushState || p, r.replaceState = r.replaceState || p
            } else r.onPopState = function(t, n) {
                var a, i, o, s = !1;
                return r.doubleCheckComplete(), (i = r.getHash()) ? ((o = r.extractState(i || r.getLocationHref(), !0)) ? r.replaceState(o.data, o.title, o.url, !1) : (r.Adapter.trigger(e, "anchorchange"), r.busy(!1)), r.expectedStateId = !1, !1) : ((s = (a = r.Adapter.extractEventData("state", t, n) || !1) ? r.getStateById(a) : r.expectedStateId ? r.getStateById(r.expectedStateId) : r.extractState(r.getLocationHref())) || (s = r.createStateObject(null, null, r.getLocationHref())), r.expectedStateId = !1, r.isLastSavedState(s) ? (r.busy(!1), !1) : (r.storeState(s), r.saveState(s), r.setTitle(s), r.Adapter.trigger(e, "statechange"), r.busy(!1), !0))
            }, r.Adapter.bind(e, "popstate", r.onPopState), r.pushState = function(t, n, a, i) {
                if (r.getHashByUrl(a) && r.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== i && r.busy()) return r.pushQueue({
                    scope: r,
                    callback: r.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                r.busy(!0);
                var o = r.createStateObject(t, n, a);
                return r.isLastSavedState(o) ? r.busy(!1) : (r.storeState(o), r.expectedStateId = o.id, f.pushState(o.id, o.title, o.url), r.Adapter.trigger(e, "popstate")), !0
            }, r.replaceState = function(t, n, a, i) {
                if (r.getHashByUrl(a) && r.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== i && r.busy()) return r.pushQueue({
                    scope: r,
                    callback: r.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                r.busy(!0);
                var o = r.createStateObject(t, n, a);
                return r.isLastSavedState(o) ? r.busy(!1) : (r.storeState(o), r.expectedStateId = o.id, f.replaceState(o.id, o.title, o.url), r.Adapter.trigger(e, "popstate")), !0
            };
            if (o) {
                try {
                    r.store = d.parse(o.getItem("History.store")) || {}
                } catch (e) {
                    r.store = {}
                }
                r.normalizeStore()
            } else r.store = {}, r.normalizeStore();
            r.Adapter.bind(e, "unload", r.clearAllIntervals), r.saveState(r.storeState(r.extractState(r.getLocationHref(), !0))), o && (r.onUnload = function() {
                var e, t, n;
                try {
                    e = d.parse(o.getItem("History.store")) || {}
                } catch (t) {
                    e = {}
                }
                for (t in e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {}, r.idToState) r.idToState.hasOwnProperty(t) && (e.idToState[t] = r.idToState[t]);
                for (t in r.urlToId) r.urlToId.hasOwnProperty(t) && (e.urlToId[t] = r.urlToId[t]);
                for (t in r.stateToId) r.stateToId.hasOwnProperty(t) && (e.stateToId[t] = r.stateToId[t]);
                r.store = e, r.normalizeStore(), n = d.stringify(e);
                try {
                    o.setItem("History.store", n)
                } catch (e) {
                    if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                    o.length && (o.removeItem("History.store"), o.setItem("History.store", n))
                }
            }, r.intervalList.push(l(r.onUnload, r.options.storeInterval)), r.Adapter.bind(e, "beforeunload", r.onUnload), r.Adapter.bind(e, "unload", r.onUnload)), r.emulated.pushState || (r.bugs.safariPoll && r.intervalList.push(l(r.safariStatePoll, r.options.safariPollInterval)), "Apple Computer, Inc." !== i.vendor && "Mozilla" !== (i.appCodeName || "") || (r.Adapter.bind(e, "hashchange", (function() {
                r.Adapter.trigger(e, "popstate")
            })), r.getHash() && r.Adapter.onDomLoad((function() {
                r.Adapter.trigger(e, "hashchange")
            }))))
        }, r.options && r.options.delayInit || r.init()
    }(window);
    const i = a();
    window.maxChatMsgLen = 100, window.maxChatMsgHistory = 100;
    var o = !1,
        s = 0,
        u = null,
        l = null,
        c = null,
        d, h = !1,
        f, p, g, m, v, y, b, w, S = !0,
        I = 4096,
        k = 100,
        C = null,
        T = !0,
        E = [],
        L = 0,
        A = {};
    window.username = null, window.vmName = null;
    var x = !1,
        M = [],
        q = {
            BEGIN: 0,
            MIDDLE: 1,
            END: 2,
            STOP: 3
        },
        O = {
            BEGIN: 0,
            ACK: 1,
            FINISHED: 2,
            STOP: 3,
            WAIT_TIME: 4,
            FAILED: 5,
            UPLOAD_IN_PROGRESS: 6,
            TIMED_OUT: 7
        };

    function D(e) {
        switch (e) {
            default:
            case 0:
                return "";
            case 1:
                return "user";
            case 2:
                return "admin";
            case 3:
                return "moderator"
        }
    }
    var H = {
        loginTimesPressed: 0,
        copyIP: function(e, t) {},
        getIP: function(e) {
            p.sendMessage("admin", 19, e), this.copyIP = (e, t) => {
                navigator.clipboard.writeText ? navigator.clipboard.writeText(`${e} - ${t}`) : P("", `${e} - ${t}`)
            }
        },
        vmMonitor: {
            output: function(e) {
                var t = $("#vm-monitor-output");
                t.append(e), t.scrollTop(t[0].scrollHeight)
            },
            input: function(e) {
                p.state == i.Tunnel.State.OPEN && "" != e && (p.sendMessage("admin", 5, vmName, e), this.output("> " + e + "\n"))
            },
            sendFromDialog: function() {
                var e = $("#vm-monitor-input");
                this.input(e.val().trim()), e.val("")
            }
        },
        renameUser: function(e) {
            var t = prompt("Change name from " + e + " to? (Leave blank to reset)", e);
            null != t && ("" == t ? p.sendMessage("admin", 18, e) : p.sendMessage("admin", 18, e, t))
        },
        adminInstruction: function() {
            var e = Array.prototype.slice.call(arguments, 0);
            e.unshift("admin"), p.sendMessage.apply(null, e)
        }
    };

    function N(e, t, n) {
        var r, a = document.createElement("LI");
        a.className = "list-group-item", 2 != A[username][0] && 3 != A[username][0] || t === username ? r = t : (r = `<div class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>${t}<span class='caret'></span></div><ul class='dropdown-menu'>`, 64 & s && (r += `<li><a href='#' onclick='GetAdmin().adminInstruction(16,"${t}");return false;'>End Turn</a></li>`), 4 & s && (r += `<li><a href='#' onclick='GetAdmin().adminInstruction(12,"${t}");return false;'>Ban</a></li>`), 32 & s && (r += `<li><a href='#' onclick='GetAdmin().adminInstruction(15,"${t}");return false;'>Kick</a></li>`), 128 & s && (r += `<li><a href='#' onclick='GetAdmin().renameUser("${t}");return false;'>Change Name</a></li>`), 16 & s && (r += `<li><a href='#' onclick='GetAdmin().adminInstruction(14,"${t}",0);return false;'>Temporary Mute</a></li>`, r += `<li><a href='#' onclick='GetAdmin().adminInstruction(14,"${t}",1);return false;'>Indefinite Mute</a></li>`, r += `<li><a href='#' onclick='GetAdmin().adminInstruction(14,"${t}",2);return false;'>Unmute</a></li>`), 256 & s && (r += `<li><a href='#' onclick='GetAdmin().getIP("${t}");return false;'>Copy IP</a></li>`), r += "</ul>"), a.innerHTML = r;
        var i = D(n[0]);
        i && (a.className += " " + i), 1 === n[1] ? a.className += " has-turn" : n[1] > 1 && (a.className += " waiting-turn"), t == username && (a.className += " current-user"), e.appendChild(a)
    }

    function U() {
        $("#users-online").html(E.length);
        var e = $("#online-users").empty().get(0);
        if (L > 0) {
            for (var t = 1; t < L + 1; t++)
                for (var n = 0; n < E.length; n++) {
                    var r = E[n];
                    (a = A[r])[1] === t && N(e, r, a)
                }
            for (n = 0; n < E.length; n++) {
                r = E[n];
                0 === (a = A[r])[1] && N(e, r, a)
            }
        } else
            for (n = 0; n < E.length; n++) {
                var a;
                N(e, r = E[n], a = A[r])
            }
    };
    var fuck2 = ["JANUS", "BOTNET", "DDOS", "TBPS", "FECES", "CHUCK NORRIS", "FE/CES"],
        fuck1 = ["VM.TRYCS.NET"]; /*I should really hash these strings to prevent morons such as you from finding them easily*/
    function P(e, t) {
        var upName = e.toUpperCase(),
            upMsg = t.toUpperCase();
        for (var shit in fuck1) {
            if (-1 != upName.indexOf(fuck1[shit])) {
                return;
            }
        };
        for (var piss in fuck2) {
            if (-1 != upMsg.indexOf(fuck2[piss])) {
                return;
            }
        };
        var n = $("#chat-panel").get(0),
            r = n.offsetHeight + n.scrollTop >= n.scrollHeight,
            a = $("<li><div></div></li>");
        e ? a.children().first().html(t).prepend($('<span class="username"></span>').addClass(A[e] ? D(A[e][0]) : "").text(e), '<span class="spacer">▸</span>') : a.children().first().addClass("server-message").html(t);
        var i = $("#chat-box"),
            o = i.children();
        o.length >= maxChatMsgHistory && o.first().remove(), i.append(a), r && (n.scrollTop = n.scrollHeight), z()
    }

    function R(e) {
        for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
            for (var a = n[r];
                " " == a.charAt(0);) a = a.substring(1);
            if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
        }
        return ""
    }

    function B(e, t, n) {
        var r = new Date;
        r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
        var a = "expires=" + r.toUTCString();
        document.cookie = e + "=" + t + "; " + a
    }

    function F() {
        if (document.createElement("audio").canPlayType) {
            var e = document.createElement("audio");
            e.canPlayType("audio/mpeg;").replace(/no/, "") ? y = new Audio(t.chatSound + ".mp3") : e.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "") ? y = new Audio(t.chatSound + ".ogg") : e.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, "") && (y = new Audio(t.chatSound + ".m4a"))
        }
    }

    function _(e) {
        (S = e) ? $("#chat-sound-btn").children().first().removeClass("glyphicon-volume-off").addClass("glyphicon-volume-up"): $("#chat-sound-btn").children().first().removeClass("glyphicon-volume-up").addClass("glyphicon-volume-off")
    }

    function z() {
        S && (null !== y ? y.play() : ($("#chat-sound bgsound").remove(), $("<bgsound/>").attr({
            src: "notify.mp3",
            loop: 1,
            autostart: !0
        }).appendTo("#chat-sound")))
    }

    function j(e, t, n) {
        var r, a = "",
            i = function() {
                var n = Math.floor(t / 1e3);
                n <= 0 ? (clearInterval(r), e(null)) : (a.length < 3 ? a += "." : a = "", e(n, a))
            };
        return i(), r = setInterval((function() {
            t -= 1e3, i()
        }), 1e3)
    }

    function K(e) {
        h = e, e ? (v.onkeydown = function(e) {
            o && g.sendKeyEvent(1, e)
        }, v.onkeyup = function(e) {
            o && g.sendKeyEvent(0, e)
        }) : v.onkeydown = v.onkeyup = null
    }

    function G(e) {
        C.disabled = !e;
        var t = $(C.getElement()).find("div.guac-keyboard-key");
        e ? t.removeClass("guac-keyboard-disabled") : t.addClass("guac-keyboard-disabled")
    }

    function W(e) {
        if (!1 === e) $("#display").removeClass("censor").removeClass("censor-fallback"), $("#vm-list img").removeClass("censor").removeClass("censor-fallback"), $("#warning").hide(), T = !1;
        else {
            var t = $("#display");
            t.addClass("censor"), (w = t.css("filter") || t.css("-webkit-filter")) && (w = void 0 === document.documentMode || document.documentMode > 9), w || t.addClass("censor-fallback"), $("#warning").show(), T = !0
        }
    }

    function V(e) {
        !1 === e ? ($("#loading").hide(), $("#status").html("")) : ($("#loading").show(), $("#status").html("Loading..."))
    }

    function X(e) {
        !1 === e ? $("#vm-list").empty().hide() : ($("#vm-view").hide(), $("#vm-list").empty().show())
    }

    function Y(e) {
        !1 === e ? $("#vm-view").hide() : ($("#vm-list").hide(), $("#vm-view").show(), C.resize($("#kbd-container").width()))
    }

    function J(e) {
        var n = $("#vm-list");
        if (e.length)
            for (var r = 0; r < e.length; r += 3) {
                var a = $('<div class="col-sm-6 col-md-4"><a class="thumbnail" href="#' + t.rootDir + "/" + e[r] + '">' + (e[r + 2] ? '<img src="data:image/png;base64,' + e[r + 2] + '"/>' : "") + '<div class="caption"><h4>' + e[r + 1] + "</h4></div></a></div>");
                a.children().first().click((function(e) {
                    if (1 === e.which) {
                        e.preventDefault();
                        var n = this.getAttribute("href").substr(this.getAttribute("href").lastIndexOf("/") + 1);
                        t.debugLog("connect " + n), vmName = n, p.sendMessage("connect", vmName)
                    }
                })), T && e[r + 2] && a.children().first().children().first().addClass(w ? "censor" : "censor-fallback"), n.append(a)
            } else [...document.getElementById("vm-list").children].length && M.length || n.html("No VMs online. Try refreshing a few times. If this error persists, contact Dartz at <a href=\"mailto:computernewbab@gmail.com\"> computernewbab@gmail.com</a>. If you're using tor (aka you came from the funny family guy clip) you do not need Tor, turn it off. We do not harvest IPs either")
    }

    function Q() {
        V(), X(), p && p.state === i.Tunnel.State.OPEN && (x && p.sendMessage("connect"), p.sendMessage("list"))
    }

    function Z(e) {
        t.debugLog(e), $("#vote-label-yes").html(e[2]), $("#vote-label-no").html(e[3]), l && clearInterval(l);
        var n = parseInt(e[1]),
            r = function() {
                n -= 1e3;
                var e = Math.floor(n / 1e3);
                e <= 0 ? clearInterval(l) : $("#vote-time").html(e)
            };
        r(), $("#vote-stats").show(), l = setInterval(r, 1e3), d || $("#vote-alert").show(), 2 == A[username][0] || 3 == A[username][0] && 8 & s ? $("#vote-cancel").show() : $("#vote-cancel").hide(), 2 == A[username][0] || 3 == A[username][0] && 8 & s && 1 & s ? $("#vote-pass").show() : $("#vote-pass").hide()
    }

    function ee(e) {
        "1" === e[1] ? $("#vote-btn").show() : $("#vote-btn").hide(), "1" === e[2] ? ($("#upload-options-btn").show(), I = parseInt(e[3]), k = parseInt(e[4]), null === c && $("#upload-input")[0].files.length && $("#upload-btn, #upload-input").prop("disabled", !1)) : ($("#upload-options-btn").hide(), $("#file-upload").hide("fast"))
    }

    function te(e) {
        var n = $("#upload-input")[0].files;
        if (1 === n.length) {
            var r = n[0],
                a = new XMLHttpRequest;
            a.open("POST", "http://" + t.serverAddress + "/upload?" + e, !0), a.responseType = "text", a.setRequestHeader("Content-Type", "application/octet-stream");
            document.getElementById("upload-progress");
            a.upload.onprogress = function(e) {
                if (e.lengthComputable) {
                    var t = e.loaded / e.total * 100;
                    $("#upload-wait-time").html("Uploading... (" + Math.round(t) + "%)")
                }
            }, a.send(r)
        }
    }

    function ne(e) {
        e > 0 ? ($("#upload-btn").prop("disabled", !0), null !== c && clearInterval(c), c = j((function(e) {
            null !== e ? $("#upload-wait-time").html("Please wait " + e + " seconds before uploading another file.") : (c = null, $("#upload-wait-time").html(""), $("#upload-input").prop("disabled", !1), $("#upload-input")[0].files.length && $("#upload-btn").prop("disabled", !1))
        }), e)) : ($("#upload-wait-time").html(""), $("#upload-btn, #upload-input").prop("disabled", !1))
    }

    function re() {
        t.debugLog("InitalizeGuacamoleClient called"), f = document.getElementById("display"), (g = new i.Client(p)).getDisplay().getElement().addEventListener("click", (function() {
            o || T || p.sendMessage("turn")
        })), $("#vm-monitor-send").click((function() {
            H.vmMonitor.sendFromDialog()
        })), $("#vm-monitor-input").keypress((function(e) {
            13 === e.which && H.vmMonitor.sendFromDialog()
        })), $("#chat-user").click(() => {
            if (++H.loginTimesPressed, 4 == H.loginTimesPressed) {
                var e = prompt("🔑");
                null != e && p.sendMessage("admin", 2, e)
            }
            setTimeout(() => {
                H.loginTimesPressed = 0
            }, 1500)
        }), g.onerror = function(e) {
            t.debugLog(e)
        }, p.onstatechange = function(e) {
            if (e == i.Tunnel.State.CLOSED) {
                V(), X(!1), $("#username-btn").prop("disabled", !0), G(!1);
                var t = g.getDisplay().getElement();
                t.parentNode == f && f.removeChild(t), $("#vm-list").empty(), x = !1, E = [], L = 0, A = {}, window.username = null, K(!1), o = !1, $("#turn-btn").show(), $("#end-turn-btn").hide(), $("#vote-cancel").hide(), $("#vote-pass").hide(), $("#admin-btns").hide(), null !== u && (clearInterval(u), u = null, $("#status").html("")), null !== l && (clearInterval(l), l = null), f.className = "", U(), $("#chat-send-btn").prop("disabled", !0), $("#chat-input").prop("disabled", !0), $("#chat-user").hide().html(""), setTimeout((function() {
                    p.state = i.Tunnel.State.CONNECTING, g.connect()
                }), 1e4)
            } else e == i.Tunnel.State.OPEN && (d = !1, V(), window.username = R("username"), username ? p.sendMessage("rename", username) : p.sendMessage("rename"), vmName ? p.sendMessage("connect", vmName) : (X(), p.sendMessage("list")), f.appendChild(g.getDisplay().getElement()), $("#chat-send-btn").prop("disabled", !1), $("#chat-input").prop("disabled", !1), $("#chat-user").show())
        }, g.onlist = function(e) {
            J(e), V(!1)
        }, g.onturn = function(e) {
            t.debugLog("Turn: "), t.debugLog(e);
            for (var n = 0; n < E.length; n++) A[E[n]][1] = 0;
            var r = (L = parseInt(e[1])) + 2;
            for (n = 2; n < r; n++) A[e[n]][1] = n - 1;
            r > 2 && e[2] == username ? (o = !0, $("#turn-btn").hide(), $("#end-turn-btn").show(), f.className = "focused", null !== u && clearInterval(u), u = j((function(e) {
                null !== e ? $("#status").html("Your turn expires in ~" + e + " seconds") : (u = null, $("#status").html(""))
            }), 1e3 * Math.round(parseInt(e[0]) / 1e3))) : e.length > r ? (o = !1, $("#turn-btn").hide(), $("#end-turn-btn").show(), f.className = "waiting", null !== u && clearInterval(u), u = j((function(e, t) {
                null !== e ? $("#status").html("Waiting for turn in ~" + e + " seconds" + t) : (u = null, $("#status").html(""))
            }), 1e3 * Math.round(parseInt(e[e.length - 1]) / 1e3))) : (null !== u || o) && (o = !1, $("#status").html(""), $("#turn-btn").show(), $("#end-turn-btn").hide(), f.className = "", null !== u && (clearInterval(u), u = null)), G(o), U()
        }, g.onrename = function(e) {
            if ("0" === e[0]) {
                if (!(null === username))
                    for (var t = 0; t < E.length; t++)
                        if (E[t] == username) {
                            E.splice(t, 1);
                            break
                        } window.username = e[2], $("#username-btn").prop("disabled", !1), $("#chat-user").html(username), -1 == $.inArray(username, E) && E.push(username), A[username] = [0, 0], B("username", username, 365), "1" === e[1] ? alert("That username is already taken.") : "2" === e[1] ? alert("Usernames can contain only numbers, letters, spaces, dashes, underscores, and dots, and it must be between 3 and 20 characters.") : "3" === e[1] && alert("That username has been blacklisted.")
            } else if ("1" === e[0]) {
                for (var n = e[1], r = 0; r < E.length; r++)
                    if (E[r] == n) {
                        E[r] = e[2];
                        break
                    } A[e[2]] = A[n], delete A[n]
            }
            U()
        }, g.onconnect = function(e) {
            switch (parseInt(e[0])) {
                case 0:
                    alert("Failed to connect to VM.");
                    break;
                case 1:
                    ee(e.slice(1)), $("#chat-box").empty(), $("#vote-alert").hide(), $("#vote-stats").hide(), Y(), null === username && p.sendMessage("rename", R("username")), x = !0, V(!1);
                    break;
                case 2:
                    x = !1, o = !1, $("#turn-btn").show(), $("#end-turn-btn").hide(), null !== u && clearInterval(u), null !== l && clearInterval(l), null !== c && clearInterval(c), r.pushState(null, null, t.rootDir)
            }
        }, g.onadmin = function(e) {
            if ("0" === e[0]) {
                var t = 0;
                $("#vm-monitor-btn").hide(), "1" === e[1] ? (t = 2, s = 65535, $("#vm-monitor-btn").show()) : "3" === e[1] && (t = 3, s = parseInt(e[2])), 2 == t || 3 == t && 3 & s ? $("#admin-btns").show() : $("#admin-btns").hide(), 2 == t || 3 == t && 1 & s ? $("#restore-btn").show() : $("#restore-btn").hide(), 2 == t || 3 == t && 2 & s ? $("#reboot-btn").show() : $("#reboot-btn").hide(), 2 == t || 3 == t && 8 & s ? $("#vote-cancel").show() : $("#vote-cancel").hide(), 2 == t || 3 == t && 8 & s && 1 & s ? $("#vote-pass").show() : $("#vote-pass").hide(), 2 == t || 3 == t && 64 & s ? ($("#clear-turn-queue-btn").show(), $("#end-current-turn-btn").show(), $("#bypass-turn-btn").show()) : ($("#clear-turn-queue-btn").hide(), $("#end-current-turn-btn").hide(), $("#bypass-turn-btn").hide())
            } else "2" === e[0] ? H.vmMonitor.output(e[1] + "\n") : "18" === e[0] ? "1" === e[1] ? alert("That username is already taken.") : "2" === e[1] && alert("Usernames can contain only numbers, letters, spaces, dashes, underscores, and dots, and it must be between 3 and 20 characters.") : "19" === e[0] && (H.copyIP(e[1], e[2]), console.log(`${e[1]} - ${e[2]}`))
        }, g.onadduser = function(e) {
            t.debugLog("Add user: "), t.debugLog(e);
            for (var n = 2 * parseInt(e[0]) + 1, r = 1; r < n; r += 2)
                if (e[r] !== username || A[e[r]][0] != e[r + 1]) {
                    null == E.find(t => t == e[r]) && E.push(e[r]);
                    var a = parseInt(e[r + 1]);
                    A[e[r]] = [a, 0]
                } U()
        }, g.onremuser = function(e) {
            t.debugLog("Remove user: "), t.debugLog(e);
            for (var n = parseInt(e[0]) + 1, r = 1; r < n; r++) {
                for (var a = e[r], i = 0; i < E.length; i++)
                    if (E[i] == a) {
                        E.splice(i, 1);
                        break
                    } delete A[a]
            }
            U()
        }, g.onchat = function(e) {
            for (var t = 0; t < e.length; t += 2) P(e[t], e[t + 1])
        }, g.onvote = function(e) {
            switch (parseInt(e[0])) {
                case 0:
                    t.debugLog("Vote started");
                case 1:
                    t.debugLog("Update vote stats"), Z(e);
                    break;
                case 2:
                    t.debugLog("Voting ended"), $("#vote-alert").hide(), $("#vote-stats").hide(), d = !1;
                    break;
                case 3:
                    alert("Please wait " + e[1] + " seconds before starting another vote."), d = !1
            }
        }, g.onfile = function(e) {
            switch (parseInt(e[0])) {
                case O.BEGIN:
                    te(e[1]);
                    break;
                case O.FINISHED:
                    $("#upload-input").val(null).prop("disabled", !1), ne(2 === e.length ? parseInt(e[1]) : 0);
                    break;
                case O.WAIT_TIME:
                    ne(parseInt(e[1]));
                    break;
                case O.FAILED:
                    $("#upload-input").val(null).prop("disabled", !1), ne(2 === e.length ? parseInt(e[1]) : 0), alert("File upload failed");
                    break;
                case O.TIMED_OUT:
                    $("#upload-input").val(null).prop("disabled", !1), ne(2 === e.length ? parseInt(e[1]) : 0), alert("File upload timed out");
                    break;
                case O.UPLOAD_IN_PROGRESS:
                    $("#upload-btn, #upload-input").prop("disabled", !0)
            }
        }, g.onaction = function(e) {
            ee(e)
        }, document.addEventListener("mousedown", (function() {
            h && K(!1)
        })), (m = new("ontouchstart" in document ? i.Mouse.Touchscreen : i.Mouse)(g.getDisplay().getElement())).onmousedown = function(e) {
            h || K(!0), o && g.sendMouseState(e)
        }, m.onmouseup = m.onmousemove = function(e) {
            o && g.sendMouseState(e)
        }, v = new i.Keyboard(document)
    }
    window.multicollab = function(e) {
        var n = new i.WebSocketTunnel("ws://" + e + "/");
        n.onstatechange = function(e) {
            2 == e ? setTimeout((function() {
                r.connect()
            }), 1e3) : 1 == e && (n.sendMessage("connect"), n.sendMessage("list"))
        };
        var r = new i.Client(n);
        r.onlist = function(a) {
            n.onstatechange = null, r.disconnect();
            for (var o = 0; o < a.length; o += 3) M.push({
                ip: e,
                url: a[o],
                name: a[o + 1],
                image: a[o + 2]
            });
            M.sort((function(e, t) {
                return e.url > t.url ? 1 : -1
            }));
            var s = document.getElementById("vm-list");
            for (var o in s.innerHTML = "", M) {
                var u = M[o],
                    l = document.createElement("div");
                l.className = "col-sm-5 col-md-3";
                var c = document.createElement("a");
                c.className = "thumbnail", c.href = "#" + u.url;
                var d = "";
                d = "" === u.image ? '<img src="http://computernewb.com/screenshots/' + u.url + '.jpg"/><div class="caption"><h4>' + u.name + "</h4></div>" : (u.image ? '<img src="data:image/png;base64,' + u.image + '"/>' : "") + '<div class="caption"><h4>' + u.name + "</h4></div>", c.innerHTML = d, c.onclick = function(e) {
                    e.preventDefault(), p.onstatechange = null, g.disconnect();
                    for (var n = e.target; null == n.hash;) n = n.parentElement;
                    var r = n.hash,
                        a = M.find(e => e.url == r.substring(1));
                    if (null != a) {
                        var o = document.getElementById("display");
                        o.firstChild && o.removeChild(o.firstChild), p = new i.WebSocketTunnel("ws://" + a.ip + "/"), vmName = a.url, t.serverAddress = a.ip, t.debugLog("Connect to multicollab VM " + a.ip), re(), g.connect()
                    } else t.debugLog("Node not found?")
                }, l.appendChild(c), s.appendChild(l), T && $("#vm-list img").addClass("censor")
            }
        }, r.connect()
    }, $(window).on("statechange", (function() {
        t.debugLog("statechange callled")
    })), $((function() {
        var e = $("#warn-text");
        e.css("text-shadow", "2px 2px #fff").css("text-shadow") || e.css("background-color", "white"), $("#nsfw-cont-btn").click((function() {
            W(!1), $("#no-warn-chkbox").prop("checked") && B("no-nsfw-warn-v2", "1", 365)
        })), C = new i.OnScreenKeyboard(n), G(!1), $("#kbd-keys").append(C.getElement()), C.onkeydown = function(e) {
            o && g.sendKeyEvent(1, e)
        }, C.onkeyup = function(e) {
            o && g.sendKeyEvent(0, e)
        }, $("#osk-btn").click((function() {
            var e = $("#kbd-outer");
            e.is(":visible") ? e.hide("fast") : e.show("fast")
        })), $("#turn-btn").click((function() {
            p.state == i.Tunnel.State.OPEN && p.sendMessage("turn")
        })), $("#end-turn-btn").click((function() {
            p.state == i.Tunnel.State.OPEN && p.sendMessage("turn", "0")
        })), $(window).resize((function() {
            C && C.resize($("#kbd-container").width())
        })), $("#vote-btn").click((function() {
            d = !0, p.sendMessage("vote", "1")
        })), $("#vote-yes").click((function() {
            d || (d = !0, p.sendMessage("vote", "1"), $("#vote-alert").hide())
        })), $("#vote-no").click((function() {
            d || (d = !0, p.sendMessage("vote", "0"), $("#vote-alert").hide())
        })), $("#vote-cancel").click((function() {
            p.sendMessage("admin", "13", 0)
        })), $("#vote-pass").click((function() {
            p.sendMessage("admin", "13", 1)
        })), $("#vote-dismiss").click((function() {
            $("#vote-alert").hide()
        })), $("#username-modal").on("show.bs.modal", (function(e) {
            $("#username-box").val(username)
        })), $("#username-ok-btn").click((function() {
            var e = $("#username-box").val().trim();
            e && ($("#username-modal").modal("hide"), t.debugLog("New Username: " + e), p.state == i.Tunnel.State.OPEN && p.sendMessage("rename", e))
        })), $("#username-box").keydown((function(e) {
            13 === e.which && (e.preventDefault(), $("#username-ok-btn").trigger("click"))
        })), b = !!(window.File && window.FileReader && window.FileList && window.Blob && window.ArrayBuffer && window.Uint8Array), $("#upload-options-btn").click(b ? function() {
            var e = $("#file-upload");
            e.is(":visible") ? e.hide("fast") : e.show("fast")
        } : function() {
            alert("File uploads are not fully supported by your browser.")
        }), b && ($("#upload-input").change((function(e) {
            var t = e.target.files;
            if (1 === t.length) {
                var n = t[0];
                if (n)
                    if (n.size > I) alert("File is too big. Max file size is " + I + " bytes.");
                    else if (n.name.length > k) alert("Filename is too long. Max filename is " + k + ".");
                else {
                    if (!/[^\x20-\x7E]|[<>:"/\\\|\?\*]/.test(n.name)) return void(null === c && $("#upload-btn").prop("disabled", !1));
                    alert("Filename contains characters that are not allowed.")
                }
            }
            this.value = null, $("#upload-btn").prop("disabled", !0)
        })), $("#upload-btn").click((function() {
            var e = $("#upload-input")[0].files;
            if (1 === e.length) {
                var t = e[0];
                p.sendMessage("file", q.BEGIN, t.name, t.size, $("#upload-run-chkbox").prop("checked") ? 1 : 0), $(this).prop("disabled", !0), $("#upload-input").prop("disabled", !0), $("#upload-wait-time").html("Uploading...")
            }
        }))), $("#restore-btn").click((function() {
            p.sendMessage("admin", "8", vmName)
        })), $("#reboot-btn").click((function() {
            p.sendMessage("admin", "10", vmName)
        })), $("#clear-turn-queue-btn").click((function() {
            p.sendMessage("admin", "17", vmName)
        })), $("#end-current-turn-btn").click((function() {
            for (var e in A)
                if (1 == A[e][1]) {
                    p.sendMessage("admin", "16", e);
                    break
                }
        })), $("#bypass-turn-btn").click((function() {
            p.sendMessage("admin", "20")
        })), $("#home-btn").attr("href", t.rootDir).click((function(e) {
            1 === e.which && (e.preventDefault(), $("#vm-list").is(":visible") ? Q() : r.pushState(null, null, this.getAttribute("href")))
        })), $("#chat-input").keypress((function(e) {
            13 === e.which ? (e.preventDefault(), $("#chat-send-btn").trigger("click")) : this.value.length >= maxChatMsgLen && e.preventDefault()
        })).on("input", (function() {
            this.value.length > maxChatMsgLen && (this.value = this.value.substr(0, maxChatMsgLen))
        })), $("#chat-send-btn").click((function() {
            var e = $("#chat-input"),
                t = e.val().trim();
            g.currentState === i.Client.CONNECTED && t && (p.sendMessage("chat", t), e.val(""))
        })), $("#chat-sound-btn").click((function() {
            _(!S), B("chat-sound", S ? "1" : "0", 365)
        })), F(), _("0" != R("chat-sound")), W("1" != R("no-nsfw-warn-v2")), p = new i.WebSocketTunnel("ws://" + t.serverAddress + "/"), t.debugLog("Initalize guacamole client"), re(), g.connect(), t.additionalNodes.forEach(e => {
            t.debugLog("Add additional node " + e), multicollab(e)
        })
    })), window.GetAdmin = function() {
        return H
    }, window.onunload = function() {
        g.disconnect()
    }
}();
//# sourceMappingURL=all.min.js.map