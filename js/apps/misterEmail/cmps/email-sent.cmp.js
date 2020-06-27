
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
  template: `
    <main class="email-sent">
      <email-compose @sentEmail="saveEmail"></email-compose>
    </main>
    `,
  data() {
    return {
      sentEmails: [],
    }
  },
  methods: {
    saveEmail(email) {
      this.sentEmails.push(email);
    },
  },
  created() {

    },
    computed: {
    },
  components: {
    // emailFilter,
    // emailSearch,
    emailCompose
  },
}
 
