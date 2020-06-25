import todoCheckbox from "./todo-checkbox.cmp.js";

export default {
  props: ["info", "noteId"],
  template: `
    <section class="note">
      <h4>{{info.label}}</h4>
        <todo-checkbox :info="info" @saveingTodo="saveTodo" v-for="todo in info.todos" :todoId="todo.id" :todo="todo" :key="todo.id"/>
      <div>
        <i @click="addingToTodo" class="fas fa-list-ul"></i>
        <i class="fas fa-trash-alt"></i>
        <i class="fas fa-trash-alt"></i>
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
    saveTodo(todoObj) {
      this.$emit('savingChanges', this.noteId, todoObj);
    },
    addingToTodo() {
      this.$emit('savingChanges', this.noteId, {})
    }
  }
};
