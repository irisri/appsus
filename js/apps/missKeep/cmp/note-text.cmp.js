export default {
  props: ["note"],
  // props: ["info", "noteId"],
  template: `
    <section class="note">
      <input @blur="saveChanges" v-model="txt" />
                <!-- <label>
                    {{info.label}}
                    <select v-model="val" @change="reportVal">  
                        <option v-for="opt in info.opts">{{opt}}</option>
                    </select>
                </label>   -->
      <div>
        <i title="Text note" class="fas fa-font"></i>
        <i title="Pin" :class="{black: note.isPinned}" class="fas fa-thumbtack"></i>
        <i title="Delete" class="fas fa-trash-alt" @click="removeNote"></i>
      </div>
    </section>
            `,
  data() {
    return {
      txt: this.note.info.txt
    };
  },
  methods: {
    saveChanges() {
      this.$emit('savingChanges', this.note.id, this.txt);
    },
    removeNote() {
      this.$emit('removingNote', this.note.id);
    }
  },
  updated() {
    console.log('updated');
    
  }
};
