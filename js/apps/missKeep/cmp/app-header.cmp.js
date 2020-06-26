export default {
  template: `
    <div class="second-nav flex space-between">
      <h1>Notes</h1>
      <div class="filrets">
        <input type="text" v-model="filterBy.search" placeholder="Search notes" @input="onFilter"/>
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
        }
      }
    },
    methods: {
      onFilter() {
        console.log('changed type');
        
        this.$emit('filter', this.filterBy)
      }
  }
};
