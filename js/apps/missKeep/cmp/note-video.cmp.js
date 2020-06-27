export default {
  props: ["note"],
  template: `
    <section class="note">
      <video :src="note.info.url" controls></video>
      <div>
        <i  title="Edit" class="fab fa-youtube"></i>
        <i title="Pin" @click="pinNote" :class="{black: note.isPinned}" class="fas fa-thumbtack"></i>
        <i title="Delete" class="fas fa-trash-alt" @click="removeNote"></i>
      </div>
    </section>
            `,
  data() {
    return {}
    // return {
    //     val: '',
    // }
  },
  methods: {
    removeNote() {
      this.$emit("removingNote", this.note.id);
    },
    pinNote() {
      this.$emit("pinNote", this.note.id);
    },
  },
};
