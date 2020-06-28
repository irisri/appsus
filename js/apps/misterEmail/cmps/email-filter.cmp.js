
export default {
    template: `
        <section class="email-filter">
            <select  @change="onFilter" v-model="filterBy" class="filter-option">
               <option value="all">All</option>
               <option value="read">Read</option>
               <option value="unread">Unread</option>
            </select>
            <select class="filter-option" @change="onFilter" v-model="sortBy">
               <option class="filter-option" value="date">Date</option>
               <option class="filter-option" value="title">Title</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: 'all',
            sortBy: 'date'
        }
    },
    methods: {
        onFilter() {
            const filterEvent = { filterBy: this.filterBy, sortBy: this.sortBy };
            this.$emit('filter', filterEvent);
        },

    }
};


