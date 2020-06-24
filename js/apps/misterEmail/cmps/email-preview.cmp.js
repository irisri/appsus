
import longText from './long-text.cmp.js';

export default {
    props: ['email'],
    template: `
        <li class="email-preview clean-list align-center text-center">
            <!-- <img v-bind:src="" /> -->
            <h5>{{email.name}}</h5>
            <pre>{{email.subject}} {{trimBody}} {{sentAt}}</pre>
            <!-- <long-text v-bind:txt="email.body"></long-text> -->
            <!-- <p>{{showCurrency}}</p> -->
            <!-- <router-link :to="'/email/' + email.id">Details</router-link> -->
        </li>
    `,
    data() {
        return{
            sentAt: '',
            trimBody: ''
        }
    },
    computed: {
       
    },
    created(){
        let trimTxt = this.email.body.length > 60 ? this.email.body.substring(0, 60) + "..." : this.email.body
        this.trimBody = trimTxt;
        console.log(this.trimBody);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let date = new Date(this.email.sentAt);
        this.sentAt = `${date.getDate()} ${months[date.getMonth()]}`;
        console.log(this.sentAt);
        
    },
    components: {
        longText,
    },
};
