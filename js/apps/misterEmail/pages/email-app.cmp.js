import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
// import emailSearch from '../cmps/email-search.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';
// import utilService from '../../../services/util.service.js';
// import utilService from '../../../services/util.service.js';

export default {
  template: `
    <main class="email-app ">
      <!-- <email-search class=""/> -->

      <!-- <svg class="gb_af" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg> -->
      <input class="input-search" type="text" placeholder="Search mail" v-model="searchStr" @input="searchByStr"/>
      <email-filter class="" @filter="setFilter"/>
      <button class="compose-btn" @click="onCompose">Compose</button>
        <email-compose v-if="newCompose" @sentEmail="saveEmail"></email-compose>
      <button class="filter-btn" @click="updateEmailToShow('inboxEmails')">Inbox</button>
      <button class="filter-btn" @click="updateEmailToShow('sentEmails')">Sent</button>
      <button class="filter-btn" @click="updateEmailToShow('starredEmails')">Starred</button>
      <email-list class="" :emails="emailsToShow" @updateEmail="updateEmailData"/>
      <!-- <email-compose @sentEmail="saveEmail"></email-compose> -->
      <!-- <email-compose ></email-compose> -->
    </main>
    `,
  data() {
    return {
      emailsShow: [],
      emails: [],
      emailsType: 'inboxEmails',
      filtredEmails: [],
      // inboxEmails: [],
      // sentEmails: [],
      // starredEmails: [],
      searchStr: '',
      newCompose: false,
      filterBy: 'all',
      sortBy: 'date',
    };
  },
  methods: {
    saveEmail(email) {
      emailService.saveEmail(email);
      this.newCompose = false;
      console.log(this.emails);
      this.updateEmailToShow();
      
      // this.sentEmails.push(JSON.parse(JSON.stringify(email)));
      // utilService.saveToStorage('emails', this.sentEmails);
    },
    updateEmailData(evEmail) {
      console.log(evEmail);
      emailService.getById(evEmail.emailId)
       .then((email) => {
      email.isStarred = evEmail.email.isStarred;
      email.isRead = evEmail.email.isRead;
      emailService.saveEmail(email);
      });
    },
   
    // setInboxEmails(){

    // },
    updateEmailToShow(status=this.emailsType) {
      this.emailsType = status;
      emailService.getEmails(status)
      .then(emails => {
          console.log(emails);
          this.emailsShow = emails;
      })
    },
    
    searchByStr() {
        if (!this.searchStr) {
          return this.updateEmailToShow();
        }
        var filtredEmails = this.emails.filter((email) => {
          // var str = JSON.stringify(email);
          // console.log(str);
          let str = email.body.toLowerCase();
          let lowerSearch = this.searchStr.toLowerCase();
          if (str.includes(lowerSearch)) return true;
          return false;
        });
        console.log(filtredEmails);
       this.emailsShow = filtredEmails;
    },
    // onInbox() {
    //   this.$emit('filterInbox', this.inboxEmails);
    // },
    // onStarred() {
    //   this.$emit('filterStarred', this.starredEmails);
    // },
    // onSent() {
    //   this.$emit('filterSent', this.sentEmails);
    // },
      onCompose(){
      if (!this.newCompose)  return this.newCompose = true;
    },

    
    setFilter(filterEvent) {
      this.filterBy = filterEvent.filterBy;
      this.sortBy = filterEvent.sortBy;
    }
  },
  created() {
      emailService.getEmails('inboxEmails')
      .then(emails => {
          console.log(emails);
          this.emailsShow  = emails;
      }),
      emailService.getEmails()
      .then(emails => {
          console.log(emails);
          this.emails  = emails;
      })
      // emailService.getInboxEmails()
      // .then(emails => {
      //     console.log(emails);
      //     this.emails = emails;
      // })
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
 
