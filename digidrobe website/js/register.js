var app = new Vue({
    el: "#app",
    
    data: {
       email: "",
       password: "",
       confirmPass: "",
       emptyFields: false
    },
    
    methods: {
       valRegister() {
          if (this.email === "" || this.password === "" || this.confirmPass === "") {
             this.emptyFields = true;
          } else {
             alert("You are now registered");
          }
       }
    }
 });