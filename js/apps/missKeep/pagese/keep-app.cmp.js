import { keepService } from "../services/keep.service.js";
import appHeader from "../cmp/app-header.cmp.js"
import keepList from "../cmp/keep-list.cmp.js"


export default {
  template: `
      <main class="keep-app">
        <app-header />
        <!-- <book-filter class="flex" @filter="setFilter"/> -->
        <keep-list :notes="notesToShow" @savingChanges="onSaveChanges" @deleteNote="onRemoveNote" @deleteOneTodo="onRemoveOneTodo"/>
        <!-- <pre>{{notes}}</pre> -->
      </main>
      `,
  data() {
    return {
      notes: [],
      filterBy: null,
    };
  },
  methods: {
    onSaveChanges(noteId, info) {
      keepService.updateNotes(noteId, info).then(notes => this.notes = notes);
    },
    onRemoveNote(noteId) {
      keepService.removeNotes(noteId).then(notes => {
        console.log(notes);
        this.notes = notes;
      });
    },
    onRemoveOneTodo(noteId, todoId) {
      keepService.removeOneTodo(noteId, todoId).then(notes => this.notes = notes);
    }
    //   setFilter(filterBy) {
    //     this.filterBy = filterBy;
    //   },
  },
  computed: {
    notesToShow() {
      var filterBy = this.filterBy;
      if (!filterBy) return this.notes;
      // var filteredBooks = this.books.filter((book) => {
      //   return book.title.toLowerCase().includes(filterBy.name.toLowerCase());
      // });
      // filteredBooks = filteredBooks.filter((book) => {
      //   if (!filterBy.toPrice || !filterBy.toPrice) return true;
      //   var price = book.listPrice.amount;
      //   return price >= filterBy.fromPrice && price <= filterBy.toPrice;
      // });
      // return filteredBooks;
    },
  },
  components: {
    appHeader,
    keepList
  },
  created() {
    console.log('upload keep');
    keepService.getNotes().then(notes => this.notes = notes);
  },
};
