import { keepService } from "../services/keep.service.js";
import appHeader from "../cmp/app-header.cmp.js";
import keepList from "../cmp/keep-list.cmp.js";

export default {
  template: `
      <main class="keep-app">
        <app-header @filter="setFilter" @addingNote="OnAddNote" />
        <keep-list :notes="notesToShow" @savingChanges="onSaveChanges" @deleteNote="onRemoveNote" @pinNote="onPinNote"
        @deleteOneTodo="onRemoveOneTodo"/>
      </main>
      `,
  data() {
    return {
      notes: [],
      filterBy: {
        search: "",
        noteType: "",
      },
    };
  },
  methods: {
    onSaveChanges(noteId, info) {
      keepService.updateNotes(noteId, info).then((notes) => {
        this.notes = notes;
        return this.arrengeNotesByPinned();
      });
    },
    onRemoveNote(noteId) {
      keepService.removeNotes(noteId).then((notes) => {
        this.notes = notes;
        return this.arrengeNotesByPinned();
      });
    },
    onRemoveOneTodo(noteId, todoId) {
      keepService.removeOneTodo(noteId, todoId).then((notes) => {
        this.notes = notes;
        return this.arrengeNotesByPinned();
      });
    },
    onPinNote(noteId) {
      keepService.pinNote(noteId).then((notes) => {
        this.notes = notes;
        return this.arrengeNotesByPinned();
      });
    },
    OnAddNote(info) {
      keepService.addNote(info).then(notes => {
        this.notes = notes;
        return this.arrengeNotesByPinned();
      });
    },
    arrengeNotesByPinned() {
      const pinnedNotes = this.notes.filter((note) => note.isPinned);
      const notPinned = this.notes.filter((note) => !note.isPinned);
      const notesByPin = pinnedNotes.concat(notPinned);
      return (this.notes = notesByPin);
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    notesToShow() {
      var filterBy = this.filterBy;
      if (!filterBy) return this.notes;
      let filteredNotes;
      if (!filterBy.noteType) {
        if (!filterBy.search) return (filteredNotes = this.notes);
        else if (this.filterBy.search.length > 0) {
          const filteredNotesTxt = this.notes.filter((note) => {
            if (note.type === "noteText") return note.info.txt.toLowerCase().includes(filterBy.search.toLowerCase());
          });
          const filteredNotesTodo = this.notes.filter((note) => {
            if (note.type === "noteTodos") {
              if (note.info.label.toLowerCase().includes(filterBy.search.toLowerCase())) {
                return note.info.label.toLowerCase().includes(filterBy.search.toLowerCase());
              } else note.info.todos.filter((todo) => {
                return todo.txt.toLowerCase().includes(filterBy.search.toLowerCase());
              });
            }
          });
          console.log(filteredNotesTxt, filteredNotesTodo);
          return filteredNotes = filteredNotesTxt.concat(filteredNotesTodo)
        }
      }

      if (filterBy.noteType === "noteText") {
        let onlyTxtNotes = this.notes.filter((note) => note.type === "noteText");
        if (filterBy.search) return filteredNotes = onlyTxtNotes.filter((note) =>
              note.info.txt.toLowerCase().includes(filterBy.search.toLowerCase()));
        return filteredNotes = onlyTxtNotes;
      }

      if (filterBy.noteType === "noteTodos") {
        let onlyDotoNotes = this.notes.filter((note) => note.type === "noteTodos");
        if (filterBy.search) {
          return onlyDotoNotes.filter(note => {
            if (note.info.label.toLowerCase().includes(filterBy.search.toLowerCase())) {
              return note.info.label.toLowerCase().includes(filterBy.search.toLowerCase());
            } else note.info.todos.filter((todo) => {
              return todo.txt.toLowerCase().includes(filterBy.search.toLowerCase());
            });
          })
        }
        return filteredNotes = onlyDotoNotes;
      }

      if (filterBy.noteType === "noteImg") {
        return filteredNotes = this.notes.filter((note) => note.type === "noteImg");
      }

      if (filterBy.noteType === "noteVideo") {
        return filteredNotes = this.notes.filter((note) => note.type === "noteVideo");
      }

    },
  },
  components: {
    appHeader,
    keepList,
  },
  created() {
    console.log("upload keep");
    keepService.getNotes().then((notes) => {
      this.notes = notes;
      return this.arrengeNotesByPinned();
    });
  },
};
