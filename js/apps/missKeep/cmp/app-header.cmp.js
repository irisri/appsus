export default {
  template: `
    <div class="second-nav flex space-between keep-nav">
      <div class="add-note">
        <input class="input-header" v-model="note.txt" type="text" @blur="addNote" :placeholder="setPlaceHolder"/>
        <i title="add text note" @click="changeNote('noteText')" class="fas fa-font" :class="{black: note.type === 'noteText'}"></i>
        <i title="add todo note" @click="changeNote('noteTodos')" class="fas fa-list-ul" :class="{black: note.type === 'noteTodos'}"></i>
        <i title="add imge note" @click="changeNote('noteImg')" class="fas fa-image" :class="{black: note.type === 'noteImg'}"></i>
        <i title="add video note" @click="changeNote('noteVideo')" class="fab fa-youtube" :class="{black: note.type === 'noteVideo'}"></i>
      </div>
      <div class="filrets">
        <input class="input-header" type="text" v-model="filterBy.search" placeholder="Search notes" @input="onFilter"/>
        <select v-model="filterBy.noteType" @input="onFilter">
          <option value=""></option>
          <option value="noteText">Text note</option>
          <option value="noteImg">Image note</option>
          <option value="noteVideo">Video note</option>
          <option value="noteTodos">Do-To</option>
        </select>
      </div>
    </div>
  `,
  data() {
    return {
      filterBy: {
        search: '',
        noteType: '',
      },
      note: {
        type: "noteText",
        txt: null
      },
    }
  },
  methods: {
    onFilter() {
      this.$emit('filter', this.filterBy)
    },
    changeNote(noteTypy) {
      this.note.type = noteTypy;        
    },
    addNote() {
      this.$emit('addingNote', this.note);
    },
  },
  computed: {
    setPlaceHolder() {
      switch (this.note.type) {
        case 'noteText':
          return "Add text";
        case 'noteImg':
          return "Add imge url";
        case 'noteTodos':
          return "Add todo";
        case 'noteVideo':
          return "Add video url";
      }
    }
  }
};
