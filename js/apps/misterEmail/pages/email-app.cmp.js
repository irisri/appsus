import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailSearch from '../cmps/email-search.cmp.js';


export default {
  template: `
    <main class="email-app">
      <email-search class=""/>
      <email-filter class=""/>
      <!-- @filter="setFilter" -->
      <email-list class="" v-bind:emails="emailsToShow"/>
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
    emailFilter,
    emailSearch
  },
}
 
