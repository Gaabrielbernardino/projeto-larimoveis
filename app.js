
const vm = new Vue({
  el: "#app",
  data: {
    repositorios: [],
    usuario: [],
  },
  methods: {
    fetchRepositorios() {
      fetch("https://api.github.com/users/laravel/repos")
        .then(r => r.json())
        .then(r => {
          this.repositorios = r;
        })
    },
    fetchUsuario() {
      fetch(`https://api.github.com/users/laravel`)
        .then(r => r.json())
        .then(r => {
          this.usuario = r;
        })
    },
  },
  created() {
    this.fetchRepositorios();
    this.fetchUsuario();
  }
  
})