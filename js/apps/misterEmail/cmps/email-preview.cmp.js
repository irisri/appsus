
import longText from './long-text.cmp.js';

export default {
    props: ['email'],
    template: `
        <li class="email-preview width-all">
            <section class="flex space-between width-all" @click="toggleShowMore">
                <span class="star" :class="starClass"  @click.stop="onStar"></span>
                <section :class="previewClass" class="flex space-between width-all preview-start">
                    <span>{{email.name}}</span>
                    <span>{{email.subject}} - </span>
                    <span>{{trimBody}}</span>
                    <span>{{sentAt}} </span>
                    <span :class="readClass" @click.stop="onRead"></span>
                </section> 
            </section>            
            <section v-if="showMore">
                <section class="flex width-all space-between email-open-start"> 
                    <span>{{email.name}} <{{email.address}}></span>
                    <router-link :to="'/email/' + email.id" class="email-goto-details"></router-link>
                </section>
                <br/>
                <section class="email-preview-contents">
                    <h3>{{email.subject}}</h3>
                    <br/>{{email.body}}
                </section>
            </section>
        </li>
    `,
    data() {
        return {
            sentAt: '',
            trimBody: '',
            showMore: false,
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

            if (this.showMore) {
                this.emailPreview.isRead = true;
            } else {
                this.$emit('updateEmail', this.emailPreview);
            }
        },
        onRead() {
            this.emailPreview.isRead = !this.emailPreview.isRead;
            this.$emit('updateEmail', this.emailPreview);
        }
    },
    computed: {
        previewClass() {
            return {
                'preview-read': this.emailPreview.isRead
            };
        },
        starClass() {
            return {
                starred: this.emailPreview.isStarred,
                'not-starred': !this.emailPreview.isStarred
            }
        },
        readClass() {
            return {
                'mark-read': !this.emailPreview.isRead,
                'mark-unread': this.emailPreview.isRead,
            };
        }
    },
    created() {
        let trimTxt = this.email.body;
        this.trimBody = trimTxt;
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let date = new Date(this.email.sentAt);
        this.sentAt = `${date.getDate()} ${months[date.getMonth()]}`;
        this.emailPreview.isRead = this.email.isRead;
        this.emailPreview.isStarred = this.email.isStarred;
    },
    components: {
        longText,
    },
};
