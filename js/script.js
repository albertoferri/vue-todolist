// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
const {createApp} = Vue;

createApp({
    data() {
      return {
        todos: [
            {
                text: 'Impara le basi di un nuovo linguaggio di programmazione (Python, Java, C++, etc.).',
                done: false 
            },
            {
                text: 'Segui un tutorial online per creare un semplice programma.',
                done: true 
            },
            {
                text: 'Iscriviti a un corso di informatica per approfondire le tue conoscenze.',
                done: false 
            },
            {
                text: 'Leggi un libro su un argomento di tecnologia che ti interessa.',
                done: false 
            },
            {
                text: "Guarda un documentario sulla storia dell'informatica.",
                done: true 
            }
        ],
        newTodoText: ''
      };
    },
    methods: {
        // MILESTONE 2
        // Visualizzare a fianco ad ogni item ha una ":x:": cliccando su di essa, il todo viene rimosso dalla lista.
        deleteTodo(index) {
          this.todos.splice(index, 1);
        },

        // MILESTONE 3
        // Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
        // il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
        addTodo() {
            const trimmedText = this.newTodoText.trim();
            if (trimmedText !== '') {
              this.todos = [...this.todos, { text: trimmedText, done: false }];
              this.newTodoText = '';
            }
        },
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        },
      }
    }).mount('#app');