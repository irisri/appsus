import noteImg from "./note-img.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";

export default {
  props: ["notes"],
  template: `
  <section class="keep-list">
        <div v-for="note in notes">
            <component :is="note.type" :info="note.info" :key="note.id"></component>
        </div>
    </section>
    `,
  components: {
    noteImg,
    noteText,
    noteTodos,
    noteVideo
  },
  create() {
      console.log('keep list', this.notes);
  }
};
