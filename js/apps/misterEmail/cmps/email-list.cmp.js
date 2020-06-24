import emailPreview from "./email-preview.cmp.js";

export default {
    props: ['emails'],
    template: `
        <ul class="email-list">
            <email-preview v-for="email in emails"  @click.native="selectEmail(email)" :email="email" :key="email.id"/>
        </ul>
    `,
    methods: {
        selectEmail(email) {
            this.$emit("emailSelected", email);
        },
    },
    components: {
        emailPreview
    }
};
