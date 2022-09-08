var app = new Vue({
    el: "#app",
    
    data: {
       email: "",
       password: "",
       emptyFields: false
    },
    
    methods: {
       valLogin() {
          if (this.email === "" || this.password === "") {
             this.emptyFields = true;
          } else {
             alert("You are now logged in");
          }
       },   
    }
 });