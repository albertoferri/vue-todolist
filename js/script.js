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
        ]
      };
    },
    methods: {
        deleteTodo(index) {
          this.todos.splice(index, 1);
        }
    }
}).mount("#app");