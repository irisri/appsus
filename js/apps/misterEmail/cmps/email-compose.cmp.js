
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
                // dateSent: '',
                id: '',
                isRead: false,
                name: '',
                // sentAt: '',
                subject: '', 
            }
        }
    },
    methods: {
        sentEmail() {
            // this.newEmail.id = this.getId();
            let address = this.newEmail.address;
            let name = address.split('@', 1); 
            this.newEmail.name = name[0]; 
            // this.newEmail.sentAt = new Date().getTime();
            // let date = new Date(this.newEmail.sentAt);
            // let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            // this.newEmail.dateSent = `${date.getDate()} ${months[date.getMonth()]}`;
            this.$emit('sentEmail', this.newEmail);
            console.log(this.newEmail);
        },
        // getId() {
        //     var txt = '';
        //     let length = 5;
        //     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        //     for (var i = 0; i < length; i++) {
        //         txt += possible.charAt(Math.floor(Math.random() * possible.length));
        //     }
        //     return txt;
        // }
    },
    
};