// import { emailService } from "../services/email.service.js";


export default {
  template: `
    <main class="email-app">
      <app-header />
      <h2>hiiii</h2>
      <email-filter class="flex" @filter="setFilter"/>
      <email-list v-bind:email="emailsToShow"/>
    </main>
    `,
  data() {
    return {
      emails: [],
      filterBy: {
        name: '',
        read: '',
        unread: '',
      },
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    emailsToShow() {
    },
  },
  components: {
  },
  created() {
    console.log('aaa');
    
    bookService.getInboxEmails().then((emails) => (this.emails = emails));
  },
};
