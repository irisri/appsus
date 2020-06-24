

export default {
    props: ['email'],
    template: `
        <li class="email-preview clean-list align-center text-center">
            <!-- <img v-bind:src="" /> -->
            <h5>{{email.name}}</h5>
            <pre>{{email.subject}} {{email.body}} {{email.sentAt}}</pre>
            <!-- <p>{{showCurrency}}</p> -->
            <!-- <router-link :to="'/email/' + email.id">Details</router-link> -->
        </li>
    `,
    data() {
        return{
            name: '',
            address: '',
            subject: '',
            body: '',
            isRead: false,
            sentAt: '',
        }
    },

    computed: {
    },
};
