import todoCheckbox from "./todo-checkbox.cmp.js";

export default {
  props: ["info", "noteId"],
  template: `
    <section class="note">
      <h4>{{info.label}}</h4>
        <todo-checkbox :info="info" @saveingTodoChange="saveChangedTodo" @removingOneTodo="reomveOneTodo" 
        v-for="todo in info.todos" :todoId="todo.id" :todo="todo" :key="todo.id"/>
      <div>
        <i @click="addingOneTodo" class="fas fa-list-ul"></i>
        <i class="fas fa-trash-alt" @click="removeNote"></i>
      </div>
    </section>
          `,
  data() {
    return {
      todos: this.info.todos
    }
  },
  components: {
    todoCheckbox,
  },
  methods: {
    saveChangedTodo(todoObj) {
      this.$emit('savingChanges', this.noteId, todoObj);
    },
    addingOneTodo() {
      this.$emit('savingChanges', this.noteId, {})
    },
    removeNote() {
      this.$emit('removingNote', this.noteId);
    },
    reomveOneTodo(todoId) {
      this.$emit('removingOneTodo', this.noteId, todoId);
    },
  }
};
