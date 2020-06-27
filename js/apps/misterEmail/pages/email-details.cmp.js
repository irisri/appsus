
import { emailService } from "../services/email-service.js";
// import emailSearch from '../cmps/email-search.cmp.js';
// import emailFilter from '../cmps/email-filter.cmp.js';

export default {
    template: `
        <section class="email-details" v-if="email">
            <!-- <email-search class=""/>
            <email-filter class=""/> -->
            <button class="close-btn" @click="close">Go Back!</button>
            <!-- <header class=""></header> -->
            <p>{{email.name}} <{{email.address}}>  {{day}}, {{email.dateSent}}, {{hour}}:{{minutes}}</p>
            <p>{{email.body}}</p>
        </section>
    `,
    data() {
        return {
            email: null,
            nextEmailId: null,
            prevEmailId: null,
            // dateSent: '',
            hour: '',
            day: '',
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
        // emailFilter,
        // emailSearch
    },
    created() {
        const { emailId } = this.$route.params;
        emailService.getById(emailId)
            .then((email) => {
                this.email = email;
                const date = new Date(this.email.sentAt);
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                this.day = days[date.getDay()]; 
                this.hour = date.getHours(); 
                if(this.hour<10) this.hour='0'+this.hour; 
                let minutes = date.getMinutes();
                if(minutes<10) minutes='0'+minutes; 
                this.minutes = minutes;
            });
    },
};


