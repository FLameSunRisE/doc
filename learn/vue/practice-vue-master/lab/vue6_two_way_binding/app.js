Vue.createApp({
    data() {
        return {
            issue: "",
            issue2: "",
            counter: 100,
            formatIssue2: "SAMPLE"
        }
    },
    methods: {

        setIssue(e) {
            this.issue = e.target.value
        },
        resetIssue() {
            this.issue = ""
        },
        resetIssue2() {
            this.issue2 = ""
        },
        increase() {
            this.counter += 1
        },
        decrease() {
            this.counter -= 1
        }
    },
    computed: {
        formatIssue() {
            console.log("output issue called, issue=", this.issue)
            if (this.issue === "") {
                return ""
            }
            return `[!!]${this.issue}`
        },
    },
    watch: {
        counter(value) {
            if (value > 120) {
                this.counter = 100
            }
        },
        issue2(value, oldValue) {
            this.formatIssue2 = `[從${oldValue}變成${value}]`
        }
    }
}).mount("#app")