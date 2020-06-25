export default {
  props: ["info", "noteId"],
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
        <i class="fas fa-font"></i>
        <i class="fas fa-trash-alt" @click="removeNote"></i>
      </div>
    </section>
            `,
  data() {
    return {
      txt: this.info.txt
    };
  },
  methods: {
    saveChanges() {
      this.$emit('savingChanges', this.noteId, this.txt);
    },
    removeNote() {
      this.$emit('removingNote', this.noteId);
    }
  },
};
