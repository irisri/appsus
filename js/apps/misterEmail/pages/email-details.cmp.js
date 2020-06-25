
import { emailService } from "../services/email-service.js";
import emailSearch from '../cmps/email-search.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';

export default {
    template: `
        <section class="email-details" v-if="email">
            <email-search class=""/>
            <email-filter class=""/>
            <button class="close-btn" @click="close">Go Back!</button>
            <header class="modal-header flex justify-center">
                <h2>{{email.name}} : </h2>
        </section>
    `,
    data() {
        return {
            email: null,
            nextEmailId: null,
            prevEmailId: null,
        };
    },

    methods: {
        close() {
            this.$router.push('/email');
        },
    },

    computed: {

    },
    components: {
        emailFilter,
        emailSearch
    },
    created() {
        const { emailId } = this.$route.params;
        emailService.getById(emailId)
            .then((email) => {
                this.email = email;
            });

    },
};


