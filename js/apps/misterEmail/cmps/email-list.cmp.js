import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
            <ul class="email-list clean-list">
                <email-preview v-for="email in emails" @updateEmail="saveUpdates($event, email.id)"  :email="email" :key="email.id"/>
            </ul>
    `,
    methods: {
        // selectEmail(email) {
        //     this.$emit('emailSelected', email);
        // },

        saveUpdates(email, emailId) {
            this.$emit('updateEmail', {email, emailId});
        }
    },
    components: {
        emailPreview,
    }
};
