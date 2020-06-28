
export default {
    template: `
        <section class="email-compose">
            <p>New Message</p>
            <input class="" type="text" placeholder="To" v-model="newEmail.address"/>
            <input class="" type="text" placeholder="Subject" v-model="newEmail.subject"/>
            <textarea v-model="newEmail.body">
            </textarea>
            <button class="compose-btn" @click="sentEmail">Send</button>
        </section>
    `,
    data() {
        return {
            newEmail: {
                address: '',
                body: '',
                id: '',
                isRead: false,
                name: '',
                subject: '',
            }
        }
    },
    methods: {
        sentEmail() {
            let address = this.newEmail.address;
            let name = address.split('@', 1);
            this.newEmail.name = name[0];
            this.$emit('sentEmail', this.newEmail);
            console.log(this.newEmail);
        },
    },

};