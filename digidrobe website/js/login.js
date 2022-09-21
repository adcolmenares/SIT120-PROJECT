// validating login form
var app = new Vue ({
    el: "#loginForm",
    
    data: {
       email: "",
       password: "",
       emptyFields: false
    },
    
    methods: {
      // if email and password not empty = valid login
       valLogin() {
          if (this.email === "" || this.password === "") {
             this.emptyFields = true;
          } else {
             alert("You are now logged in!");
          }
       },   
    }
 });

 