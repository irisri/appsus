import noteImg from "./note-img.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";
import { keepService } from "../services/keep.service.js";

export default {
  props: ["notes"],
  template: `
  <section class="keep-list">
        <div v-for="note in notes">
            <component :is="note.type" :info="note.info" :noteId="note.id" :key="note.id" @removingNote="onRemoveNote" 
            @savingChanges="onSavingChanges"></component>
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
    onSavingChanges(id, info) {
      keepService.updateNotes(id, info);
    },
    onRemoveNote(id) {
      keepService.removeNotes(id)
    }
  }
};
