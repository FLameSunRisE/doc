Vue.createApp({
    data() {
        return {
            plans: [],
            value: ''
        }
    },
    methods: {
        addPlan() {
            this.plans.push(this.value)
            this.value = ''
        }
    }
}).mount('#myapp')