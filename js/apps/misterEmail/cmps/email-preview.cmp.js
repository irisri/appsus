
import longText from './long-text.cmp.js';

export default {
    props: ['email'],
    template: `
        <li class="email-preview" @click="emailOpen=!emailOpen">
            <!-- <img v-bind:src="" /> -->
            <pre>{{email.name}}       {{email.subject}} {{trimBody}}       {{sentAt}}</pre>
            <section v-if="emailOpen">
                <pre class="email-open">
                {{email.subject}}
                {{email.name}}     {{email.address}}
                    {{email.body}}</pre>
                
            </section>
            <!-- <p>{{showCurrency}}</p> -->
            <!-- <router-link :to="'/email/' + email.id">Details</router-link> -->
        </li>
    `,
    data() {
        return{
            sentAt: '',
            trimBody: '',
            emailOpen: false,
        }
    },
    computed: {
    //    toggleBodyEmail() {
    //      return emailOpen = !emailOpen;
    //    }
    },
    created(){
        let trimTxt = this.email.body.length > 60 ? this.email.body.substring(0, 50) + "..." : this.email.body
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
