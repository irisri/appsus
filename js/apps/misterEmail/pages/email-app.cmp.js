import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';

export default {
  template: `
    <main class="email-app">
      <!-- <app-header /> -->
      <!-- <email-filter class="flex" @filter="setFilter"/> -->
      <email-list v-bind:emails="emailsToShow"/>
    </main>
    `,
  data() {
    return {
      emails: [],
      filterBy: {
        read: '',
        unread: '',
      },
    };
  },
  methods: {
    // setFilter(filterBy) {
    //   this.filterBy = filterBy;
    // },
  },
  created() {
      emailService.getInboxEmails()
      .then(emails => {
          console.log(emails);
          this.emails = emails;
  })
    },
    computed: {
      emailsToShow() {
        return this.emails;
      }
    },
  components: {
    emailList,
  },
}
 
  //   console.log('aaa');
    
    // emailService.getInboxEmails().then((emails) => (this.emails = emails));

