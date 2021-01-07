const app = Vue.createApp({
    data() {
      return { 
        enteredTask: '',
        tasks: [],
        showTasks: true,
        buttonName: "Show List",
       }
    },
    methods: {
        addTask() {
        this.tasks.push(this.enteredTask);
        this.enteredTask = '';
      },
      hiddenTask() {
        this.showTasks = !this.showTasks;
        this.buttonName = this.buttonName === "Show List" ? "Hide" : "Show List";
      },
    }
  });
  
  app.mount('#assignment');