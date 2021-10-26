const inputComponent = {
  /*template*/
  template: `<input
          :placeholder="placeholder"
          v-model="input"
          @keyup.enter="monitorEnterKey"
          class="input is-small" type="text" />`,
  props: ["placeholder"],
  data() {
    return {
      input: "",
    };
  },
  emits: ["add-note"],
  methods: {
    monitorEnterKey() {
      this.$emit("add-note", {
        note: this.input,
        timestamp: new Date().toLocaleString(),
      });
      this.input = "";
    },
  },
};

const app = {
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note",
    };
  },
  components: {
    "input-component": inputComponent,
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    },
    removeNote(index) {
        this.notes.splice(index, 1);
        this.timestamps.splice(index, 1);
    },
  },
};

Vue.createApp(app).mount("#app");
