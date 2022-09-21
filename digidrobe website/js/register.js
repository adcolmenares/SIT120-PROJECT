// validating registration form
var app = new Vue ({
    el: "#registerForm",
    
    data: {
       email: "",
       password: "",
       confirmPass: "",
       emptyFields: false
    },
    
    methods: {
      // if email, password, confirmpass fields not empty = valid register
       valRegister() {
          if (this.email === "" || this.password === "" || this.confirmPass === "") {
             this.emptyFields = true;
          } else {
             alert("You are now registered!");
          }
       }
    }
 });