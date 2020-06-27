
import longText from './long-text.cmp.js';

export default {
    props: ['email'],
    template: `
        <li class="email-preview" @click="toggleShowMore">
            <pre><button @click.stop="onStar">is starred - {{emailPreview.isStarred}}</button>{{email.name}}       {{email.subject}} {{trimBody}}       {{sentAt}}</pre>
            <button @click.stop="onRead"> is read - {{emailPreview.isRead}}</button>
            <section v-if="showMore">
                <pre class="email-open">
                {{email.subject}} <router-link :to="'/email/' + email.id">Details</router-link>
                                        
                {{email.name}}     <{{email.address}}>
                    {{email.body}}</pre>
            </section>
        </li>
    `,
    data() {
        return{
            sentAt: '',
            trimBody: '',
            showMore: false,
            // emailOpen: false,
            emailPreview: {
                isStarred: false,
                isRead: false,
            }
        }
    },
    methods: {
        onStar() {
            this.emailPreview.isStarred = !this.emailPreview.isStarred;
            this.$emit('updateEmail', this.emailPreview);
        },
        toggleShowMore() {
            this.showMore = !this.showMore;
            if (this.showMore) this.emailPreview.isRead = true;
            // this.emailPreview.isRead = true;
        },
        onRead() {
            this.emailPreview.isRead = !this.emailPreview.isRead;
            this.$emit('updateEmail', this.emailPreview);
        }
    },
    computed: {
        
    },
    created(){
        let trimTxt = this.email.body.length > 60 ? this.email.body.substring(0, 50) + "..." : this.email.body
        this.trimBody = trimTxt;
        console.log(this.trimBody);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let date = new Date(this.email.sentAt);
        this.sentAt = `${date.getDate()} ${months[date.getMonth()]}`;
        this.emailPreview.isRead = true;
        this.emailPreview.isStarred = this.email.isStarred;
        console.log(this.sentAt);
    },
    components: {
        longText,
    },
};
