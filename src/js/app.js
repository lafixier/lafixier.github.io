const app = new Vue({
    el: "#app",
    data: {
        queries: {},
        tabNames: ["about", "projects", "links"],
        activeTabName: "",
        defaultTabName: "about",
        modal: {
            isActive: false,
            type: "",
            message: "",
            input: "",
        },
        announcementBox: {},
        projects: [
            {
                title: "準備中",
                description: "Coming soon...",
                repository: "https://github.com/lafixier",
                website: "https://lafixier.net",
            },
        ],
    },
    mounted: function () {
        this.parseQueries(document.location.search);
        if (this.queries.tab !== undefined) {
            this.switchTab(this.queries.tab);
        } else {
            this.switchTab(this.defaultTabName);
        }
        var _0x328321 = _0x5ddb;
        function _0x5ddb(_0x193f1f, _0x4690ff) {
            var _0x603f8e = _0x603f();
            return (
                (_0x5ddb = function (_0x5ddb97, _0x5614eb) {
                    _0x5ddb97 = _0x5ddb97 - 0x122;
                    var _0x42d474 = _0x603f8e[_0x5ddb97];
                    return _0x42d474;
                }),
                _0x5ddb(_0x193f1f, _0x4690ff)
            );
        }
        (function (_0x6375ff, _0x22dd75) {
            var _0x319c88 = _0x5ddb,
                _0x1e047a = _0x6375ff();
            while (!![]) {
                try {
                    var _0x475516 =
                        (-parseInt(_0x319c88(0x12c)) / 0x1) *
                            (parseInt(_0x319c88(0x12d)) / 0x2) +
                        (parseInt(_0x319c88(0x123)) / 0x3) *
                            (parseInt(_0x319c88(0x126)) / 0x4) +
                        parseInt(_0x319c88(0x12f)) / 0x5 +
                        (-parseInt(_0x319c88(0x122)) / 0x6) *
                            (-parseInt(_0x319c88(0x12e)) / 0x7) +
                        (-parseInt(_0x319c88(0x129)) / 0x8) *
                            (parseInt(_0x319c88(0x125)) / 0x9) +
                        (parseInt(_0x319c88(0x127)) / 0xa) *
                            (parseInt(_0x319c88(0x130)) / 0xb) +
                        -parseInt(_0x319c88(0x124)) / 0xc;
                    if (_0x475516 === _0x22dd75) break;
                    else _0x1e047a["push"](_0x1e047a["shift"]());
                } catch (_0x42eb26) {
                    _0x1e047a["push"](_0x1e047a["shift"]());
                }
            }
        })(_0x603f, 0xde0c0);
        function _0x603f() {
            var _0x2c0952 = [
                "34gBxkwU",
                "161qcYLTR",
                "433870OmVYNs",
                "10067299QEZTSF",
                "includes",
                "285210bGCNAO",
                "3LZoCdv",
                "12519492PNBPPL",
                "45UWTXcp",
                "6725720pnGBGU",
                "10ZnceKb",
                "tab",
                "862120EeONaL",
                "U1lOVHtHVVZGX1ZGX0dVUl9TWU5UfQ==",
                "log",
                "75594PFhyMa",
            ];
            _0x603f = function () {
                return _0x2c0952;
            };
            return _0x603f();
        }
        !this["tabNames"][_0x328321(0x131)](
            this["queries"][_0x328321(0x128)]
        ) && console[_0x328321(0x12b)](_0x328321(0x12a));
        var _0x29ecfe = _0x10fb;
        function _0x10fb(_0x21c856, _0x21f924) {
            var _0x241d99 = _0x241d();
            return (
                (_0x10fb = function (_0x10fbf4, _0x1aa46d) {
                    _0x10fbf4 = _0x10fbf4 - 0x1dc;
                    var _0x2e85ff = _0x241d99[_0x10fbf4];
                    return _0x2e85ff;
                }),
                _0x10fb(_0x21c856, _0x21f924)
            );
        }
        (function (_0x302fe1, _0x1e626f) {
            var _0x243655 = _0x10fb,
                _0x3202f1 = _0x302fe1();
            while (!![]) {
                try {
                    var _0x35e01c =
                        parseInt(_0x243655(0x1ea)) / 0x1 +
                        -parseInt(_0x243655(0x1e6)) / 0x2 +
                        parseInt(_0x243655(0x1e9)) / 0x3 +
                        (parseInt(_0x243655(0x1dd)) / 0x4) *
                            (parseInt(_0x243655(0x1dc)) / 0x5) +
                        (parseInt(_0x243655(0x1e5)) / 0x6) *
                            (parseInt(_0x243655(0x1e2)) / 0x7) +
                        (-parseInt(_0x243655(0x1e8)) / 0x8) *
                            (parseInt(_0x243655(0x1ec)) / 0x9) +
                        parseInt(_0x243655(0x1e0)) / 0xa;
                    if (_0x35e01c === _0x1e626f) break;
                    else _0x3202f1["push"](_0x3202f1["shift"]());
                } catch (_0x23a380) {
                    _0x3202f1["push"](_0x3202f1["shift"]());
                }
            }
        })(_0x241d, 0x5de82);
        function _0x241d() {
            var _0x333058 = [
                "openModal",
                "5808feAMJl",
                "82884wDSskd",
                "28873rbGSsr",
                "world",
                "6498WZBIeh",
                "flag",
                "1240xrRmPh",
                "5628jggZis",
                "log",
                "hello",
                "3622550yxwnsk",
                "You\x27ve\x20got\x200\x20point!",
                "997318Ljnxcq",
                "mode",
                "queries",
                "6ELebeH",
                "2704QfESvV",
            ];
            _0x241d = function () {
                return _0x333058;
            };
            return _0x241d();
        }
        if (this["queries"]["mode"] === "flag")
            this[_0x29ecfe(0x1e4)][_0x29ecfe(0x1e3)] === _0x29ecfe(0x1ed) &&
                this[_0x29ecfe(0x1e7)](
                    (message = "What\x20is\x20the\x20flag?"),
                    (type = "input"),
                    (executedFunction = this[_0x29ecfe(0x1eb)])
                );
        else
            localStorage[_0x29ecfe(0x1ed)]
                ? console[_0x29ecfe(0x1de)](_0x29ecfe(0x1e1))
                : (console[_0x29ecfe(0x1de)](
                      "c3VibWl0IHRoZSBmbGFnIHRvIGh0dHBzOi8vbGFmaXhpZXIubmV0Lz9tb2RlPWZsYWc="
                  ),
                  this[_0x29ecfe(0x1df)]());
    },
    methods: {
        parseQueries: function (rawQueries) {
            for (const rawQuery of rawQueries.replace("?", "").split("&")) {
                this.queries[rawQuery.split("=")[0]] = rawQuery.split("=")[1];
            }
        },
        switchTab: function (tabName) {
            this.activeTabName = tabName;
            this.updateURL();
        },
        updateURL: function () {
            const url = new URL(location);
            url.searchParams.set("tab", this.activeTabName);
            history.replaceState("", "", url.href);
        },
        hello: function () {
            console.log("Welcome to my website!");
        },
        openModal: function (message, type, executedFunction) {
            this.modal.message = message;
            this.modal.type = type;
            this.modal.executedFunction = executedFunction;
            this.modal.isActive = true;
        },
        closeModal: function () {
            this.modal.isActive = false;
        },
        world: function () {
            if (!crypto || !crypto.subtle) {
                this.openModal("This browser is not supported", "info");
            }
            const text = this.modal.input;
            async function digestMessage(message) {
                const msgUint8 = new TextEncoder().encode(message);
                const hashBuffer = await crypto.subtle.digest(
                    "SHA-512",
                    msgUint8
                );
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray
                    .map((b) => b.toString(16).padStart(2, "0"))
                    .join("");
                return hashHex;
            }
            digestMessage(text).then((digestHex) =>
                (function () {
                    if (
                        digestHex ===
                        "836ecae317fe871abae854c68708463de58862d271dacb6bf3b2c3f3278e09fbad26b327e0e19650294764f031b581983a8667a20967f61ec99f6d65063a54c3"
                    ) {
                        localStorage.flag = true;
                        const url = new URL(location);
                        url.searchParams.delete("mode");
                        location.href = url.href;
                    } else {
                        app.openModal("Incorrect flag", "info");
                    }
                })()
            );
        },
        executeFunction: function () {
            this.modal.executedFunction();
        },
    },
});
