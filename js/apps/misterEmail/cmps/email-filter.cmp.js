export default {
    template: `
        <section class="email-filter">
            <button class="compose-btn" @click="onFilter">Compose</button>
            <button class="filter-btn" @click="onFilter">Inbox</button>
            <button class="filter-btn" @click="onFilter">Starred</button>
            <button class="filter-btn" @click="onFilter">Sent</button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                name: '',
            }
        }
    },
    methods: {
        onFilter() {
            this.$emit('filter', this.filterBy)
        }
    }
};