export default {
  props: ["note"],
  template: `
    <section class="note">
      <img :src="note.info.url" :alt="note.info.title"/>
      <div>
        <i title="Edit" class="fas fa-image"></i>
        <i title="Pin" @click="pinNote" :class="{black: note.isPinned}" class="fas fa-thumbtack"></i>
        <i title="Delete" class="fas fa-trash-alt" @click="removeNote"></i>
      </div>
    </section>
        `,
  methods: {
    // saveChanges() {
    //   this.$emit("savingChanges", this.note.id, this.txt);
    // },
    removeNote() {
      this.$emit("removingNote", this.note.id);
    },
    pinNote() {
      this.$emit("pinNote", this.note.id);
    },
  },
};
