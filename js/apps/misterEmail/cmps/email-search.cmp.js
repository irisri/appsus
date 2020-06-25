export default {
    template: `
        <section class="email-search search">
            <input class="input-search" type="text" placeholder="Search mail" v-model="filterBy.name" @input="onFilter"/>
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