const app = new Vue({
    el: "#app",
    data: {
        queries: {},
        activeTabName: "",
        defaultTabName: "about",
        modal: {
            isActive: false,
            type: "",
            message: "",
            input: "",
        },
        announcementBox: {},
    },
    mounted: function () {
        this.parseQueries(document.location.search);
        if (this.queries.tab !== undefined) {
            this.switchTab(this.queries.tab);
        } else {
            this.switchTab(this.defaultTabName);
        }
        if (!this.tabNames.includes(this.queries.tab)) {
            console.log("U1lOVHtHVVZGX1ZGX0dVUl9TWU5UfQ==");
        }
        if (this.queries.mode === "flag") {
            if (this.queries.mode === "flag") {
                this.openModal(
                    (message = "What is the flag?"),
                    (type = "input"),
                    (executedFunction = this.world)
                );
            }
        } else if (localStorage.flag) {
            console.log("You've got 0 point!");
        } else {
            console.log(
                "c3VibWl0IHRoZSBmbGFnIHRvIGh0dHBzOi8vbGFmaXhpZXIubmV0Lz9tb2RlPWZsYWc="
            );
            this.hello();
        }
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
