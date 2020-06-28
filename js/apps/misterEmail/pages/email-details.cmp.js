
import { emailService } from "../services/email-service.js";

export default {
    template: `
        <section class="email-details" v-if="email">
            <i class="close-btn fas fa-arrow-left" @click="close"></i>
            <span class="flex space-between">
                <span>{{email.name}}<{{email.address}}></span>
                <span>{{day}}, {{email.dateSent}}, {{hour}}:{{minutes}}</span>
            </span>
            <br/>
            <h3>{{email.subject}}</h3>
            <br/>
            <p>{{email.body}}</p>
        </section>
    `,
    data() {
        return {
            email: null,
            nextEmailId: null,
            prevEmailId: null,
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


