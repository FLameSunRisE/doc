const app = Vue.createApp({
    data() {
        return {
            div1Selected: false,
            div2Selected: false,
            div3Selected: false
        }
    },
    methods: {
        divSelected(id) {
            if (id === 1) {
                this.div1Selected = !this.div1Selected;
            } else if (id === 2) {
                this.div2Selected = !this.div2Selected;
            } else if (id === 3) {
                this.div3Selected = !this.div3Selected;
            }
        }
    },
    computed: {
        div1Classes() {
            return { isSelected: this.div1Selected }
        },
        div2Classes() {
            return { isSelected: this.div2Selected }
        },
        div3Classes() {
            return { isSelected: this.div3Selected }
        }
    }
})
app.mount("#app")