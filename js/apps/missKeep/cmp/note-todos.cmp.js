import todoCheckbox from "./todo-checkbox.cmp.js";

export default {
  props: ["note"],
  // props: ["info", "noteId"],
  template: `
    <section class="note">
      <h4>{{note.info.label}}</h4>
        <todo-checkbox :info="note.info" @saveingTodoChange="saveChangedTodo" @removingOneTodo="reomveOneTodo" 
        v-for="todo in note.info.todos" :todoId="todo.id" :todo="todo" :key="todo.id"/>
      <div>
        <i title="Add item" @click="addingOneTodo" class="fas fa-list-ul"></i>
        <!-- add function for pin -->
        <i title="Pin" :class="{black: note.isPinned}" class="fas fa-thumbtack"></i>
        <i title="Delete" class="fas fa-trash-alt" @click="removeNote"></i>
      </div>
    </section>
          `,
  data() {
    return {
      todos: this.note.info.todos
    }
  },
  components: {
    todoCheckbox,
  },
  methods: {
    saveChangedTodo(todoObj) {
      this.$emit('savingChanges', this.note.id, todoObj);
    },
    addingOneTodo() {
      this.$emit('savingChanges', this.note.id, {})
    },
    removeNote() {
      this.$emit('removingNote', this.note.id);
    },
    reomveOneTodo(todoId) {
      this.$emit('removingOneTodo', this.note.id, todoId);
    },
  }
};
