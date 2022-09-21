// function to filter images by category

const wardrobeList = {
  data() {
    return {
      category: '',
      images: [
        { index: 1,
          src: "https://i.pinimg.com/564x/b1/db/9e/b1db9e43fc7b4be16cda41a1b0aaaa53.jpg",
          category: "Bottom"
          /* SOURCE: pinshoesoutfits, n.d. Women's High Waist Mesh Elegant Sweet Cute Tulle Skirt. 
          [image] Available at: <http://pinterest.com.au/pin/1048986938182148305/> [Accessed 18 September 2022].*/
        },
        { index: 2,
          src: "https://i.pinimg.com/564x/d1/9a/14/d19a1466147697a2b858f400bb7e8b55.jpg",
          category: "Dress"
          /* SOURCE: Pinterest, n.d. Floral lacey dress. 
          [image] Available at: <https://www.pinterest.com.au/pin/876020564991430976/> [Accessed 18 September 2022].*/
        },
        { index: 3,
          src: "https://i.pinimg.com/564x/fe/f4/e9/fef4e9607c13e57c416f9e29ed431451.jpg",
          category: "Dress"
          /* SOURCE: Pinterest, n.d. Lacey fairy dress. 
          [image] Available at: <https://www.pinterest.com.au/pin/349240146114115648/> [Accessed 18 September 2022].*/
        },
        { index: 4,
          src: "https://i.pinimg.com/564x/10/f7/08/10f7087f4c95cf14f232981d6c8e53c7.jpg",
          category: "Top"
          /* SOURCE: Pinterest, n.d. Floral top. 
          [image] Available at: <https://www.pinterest.com.au/pin/553872454183627388/> [Accessed 18 September 2022].*/
        },
        { index: 5,
          src: "https://i.pinimg.com/564x/81/fb/42/81fb42f4ed3d202887c907dfa4b8ccaa.jpg",
          category: "Top"
          /* SOURCE: Pinterest, n.d. Green top. 
          [image] Available at: <https://www.pinterest.com.au/pin/2533343533062947/> [Accessed 18 September 2022].*/
        },
        { index: 6,
          src: "https://i.pinimg.com/564x/6f/6f/79/6f6f7970a2b08a021fb3e5b4927f6854.jpg",
          category: "Dress"
          /* SOURCE: Pinterest, n.d. Black pearl dress. 
          [image] Available at: <https://www.pinterest.com.au/pin/585819864046013181/> [Accessed 18 September 2022].*/
        },
        { index: 7,
          src: "https://i.pinimg.com/564x/29/53/88/295388b7687cb5d65b2beff9ad73d84c.jpg",
          category: "Bottom"
          /* SOURCE: Pinterest, n.d. Black mini cargo skirt. 
          [image] Available at: <https://www.pinterest.com.au/pin/547750373441505146/> [Accessed 18 September 2022].*/
        },
        { index: 8,
          src: "https://i.pinimg.com/564x/bb/3f/cf/bb3fcf34cdfe8ea0695914d5971db0c8.jpg",
          category: "Bottom"
          /* SOURCE: Pinterest, n.d. Parachute cargo pants. 
          [image] Available at: <https://www.pinterest.com.au/pin/648025833897419618/> [Accessed 18 September 2022].*/
        },
        { index: 9,
          src: "https://i.pinimg.com/564x/c8/4a/30/c84a30cbea8670ca75cc971f8e45af95.jpg",
          category: "Bottom"
          /* SOURCE: Pinterest, n.d. Grey cargo pants. 
          [image] Available at: <https://www.pinterest.com.au/pin/143411569375612278/> [Accessed 18 September 2022].*/
        },
      ]
    };
  },
  // computed property filterByCategory to filter the images
  computed: {
    filterByCategory: function () {
      return this.images.filter(
        (image) => !image.category.indexOf(this.category)
      );
    }
  }
};
Vue.createApp(wardrobeList).mount("#wardrobe");

/* References for code:
  1.) Online Tutorials, 2021. Responsive Portfolio Filter Gallery using HTML CSS & Javascript | Filterable Image Gallery. 
    [video] Available at: <https://www.youtube.com/watch?v=ATeWQlY3N04&ab_channel=OnlineTutorials> [Accessed 21 September 2022].
  2.) Codepen. n.d. Gallery Filter using Vue.js. 
    [online] Available at: <https://codepen.io/manabox/pen/mdWJQLZ> [Accessed 18 September 2022].   */