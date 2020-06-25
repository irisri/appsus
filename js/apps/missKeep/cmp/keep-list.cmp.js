import noteImg from "./note-img.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";
import { keepService } from "../services/keep.service.js";

export default {
  props: ["notes"],
  template: `
  <section class="keep-list">
        <div v-for="note in notes" :key="note.legth">
            <component :note="note" :is="note.type" :info="note.info" :noteId="note.id" :key="note.id" @removingNote="removeNote" 
            @savingChanges="saveChanges"></component>
        </div>
    </section>
    `,
  components: {
    noteImg,
    noteText,
    noteTodos,
    noteVideo
  },
  methods: {
    saveChanges(id, info) {
      this.$emit('savingChanges', id, info);
    },
    removeNote(id) {
      this.$emit('deleteNote', id);
    },
  },
  created() {
    console.log('updated')
  }
};
