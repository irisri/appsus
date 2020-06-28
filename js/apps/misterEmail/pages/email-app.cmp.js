import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
  template: `
    <main class="email-app">
      <header class="justify-center flex header-app-email"> 
        <input class="input-search" type="text" placeholder="Search mail" v-model="searchStr" @input="searchByStr"/>
        <email-filter class="" @filter="setFilter"/>
      </header>
      <section class="flex width-all email-main">
        <div class="flex column email-menu">
          <button class="compose-btn" @click="onCompose"><span class="compose-logo"></span>Compose</button>
            <email-compose v-if="isCompose" @sentEmail="saveEmail" @compose="onCloseCompose"></email-compose>
          <button class="filter-btn" @click="updateEmailToShow('inboxEmails')"><div class="inbox-logo"></div>Inbox</button>
          <button class="filter-btn" @click="updateEmailToShow('sentEmails')"><div class="sent-logo logo"></div>Sent</button>
          <button class="filter-btn" @click="updateEmailToShow('starredEmails')"><div class="starred"></div>Starred</button>
        </div>
        <div class="flex email-list width-all">
          <email-list class="" :emails="emailsToShow" @updateEmail="updateEmailData"/>
    </div>
      </section>
    </main>
    `,
  data() {
    return {
      emailsShow: [],
      emails: [],
      emailsType: 'inboxEmails',
      filtredEmails: [],
      searchStr: '',
      isCompose: false,
      filterBy: 'all',
      sortBy: 'date',
    };
  },
  methods: {
    saveEmail(email) {
      emailService.saveEmail(email);
      this.isCompose = false;
      this.updateEmailToShow();
    },
    updateEmailData(evEmail) {
      emailService.getById(evEmail.emailId)
        .then((email) => {
          email.isStarred = evEmail.email.isStarred;
          email.isRead = evEmail.email.isRead;
          emailService.saveEmail(email);
        });
    },
    updateEmailToShow(status = this.emailsType) {
      this.emailsType = status;
      emailService.getEmails(status)
        .then(emails => {
          this.emailsShow = emails;
        })
    },
    onCloseCompose(closeCompose) {
      this.isCompose = closeCompose
    },

    searchByStr() {
      if (!this.searchStr) {
        return this.updateEmailToShow();
      }
      var filtredEmails = this.emails.filter((email) => {
        let str = email.body.toLowerCase();
        let lowerSearch = this.searchStr.toLowerCase();
        if (str.includes(lowerSearch)) return true;
        str = email.subject.toLowerCase();
        if (str.includes(lowerSearch)) return true;
        return false;
      });
      this.emailsShow = filtredEmails;
    },
    onCompose() {
      if (!this.isCompose) return this.isCompose = true;
    },


    setFilter(filterEvent) {
      this.filterBy = filterEvent.filterBy;
      this.sortBy = filterEvent.sortBy;
    }
  },
  created() {

    emailService.getEmails('inboxEmails')
      .then(emails => {
        this.emailsShow = emails;
      }),
      emailService.getEmails()
        .then(emails => {
          this.emails = emails;
        })
  },
  computed: {
    emailsToShow() {
      var filterBy = this.filterBy;
      var emails;
      switch (filterBy) {
        case 'all':
          emails = this.emailsShow;
          break;
        case 'read':
          emails = this.emailsShow.filter((email) => {
            return email.isRead;
          });
          break;
        case 'unread':
          emails = this.emailsShow.filter((email) => {
            return !email.isRead;
          });
          break;
      }

      if (this.sortBy === 'title') {
        emails.sort((email1, email2) => {
          var title1 = email1.subject.toUpperCase();
          var title2 = email2.subject.toUpperCase();
          if (title1 < title2) {
            return -1;
          }
          if (title1 > title2) {
            return 1;
          }
          return 0;
        });
      }
      else if (this.sortBy === 'date') {
        emails.sort((email1, email2) => {
          return email2.sentAt - email1.sentAt;
        });
      }
      return emails;
    },
  },
  components: {
    emailList,
    emailFilter,
    emailCompose
  },
}

