import { create } from "zustand";
import { getTodos, createTodo, deleteTodo } from "../api/todoApi";

type Todo = {
  _id: string;
  title: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
};

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  fetchTodos: async () => {
    const data = await getTodos();
    set({ todos: data });
  },

  addTodo: async (title) => {
    const newTodo = await createTodo(title);
    set({ todos: [...get().todos, newTodo] });
  },

  removeTodo: async (id) => {
    await deleteTodo(id);
    set({ todos: get().todos.filter((t) => t._id !== id) });
  },
}));