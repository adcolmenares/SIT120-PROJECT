new Vue ({
    el: "#uploadPreview",
    data: {
      imageData: ""
    },
    methods: {
      previewImage: function (event) {
        var input = event.target;
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.imageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    }
  });

/* References for code:
  1.) Academind, 2018. Vue Image Upload Made Easy. 
    [video] Available at: <https://www.youtube.com/watch?v=VqnJwh6E9ak&ab_channel=Academind> [Accessed 21 September 2022].
  2.) Kumar, S., n.d. Vuejs Image upload and preview. 
    [online] Codepen. Available at: <https://codepen.io/spark25/pen/ExVzgqo> [Accessed 21 September 2022].   */