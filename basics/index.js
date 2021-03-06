const app = Vue.createApp({

  //template: '<h2>Je suis un template</h2>',
  data() {
    return {
      x: 0,
      y: 0,
      books: [
        {
          title: 'name of the wind', author: 'patrick', img: 'https://vignette.wikia.nocookie.net/onepiece/images/8/89/Wiki-wordmark.png/revision/latest?cb=20180401015943&path-prefix=fr', isFav: true
        },
        {
          title: 'the way of kings', author: 'ben', img: 'https://yt3.ggpht.com/ytc/AAUvwni-Wm0ZBDYJYFwySP2esxgc8s9mKiwmI3yJrmjlHQ=s88-c-k-c0xffffffff-no-rj-mo', isFav: false
        },
        {
          title: 'the final empire', author: 'stan', img: 'https://vignette.wikia.nocookie.net/onepiece/images/8/89/Wiki-wordmark.png/revision/latest?cb=20180401015943&path-prefix=fr', isFav: true
        }
      ],
      url:'https://codwerk.github.io/'
    }
  },
  methods: {
    handleEvent(e, data) {
      console.log(e, e.type);
      if(data) {
        console.log(data);
      }

    },
    handleMousemove(e) {
      this.x = e.offsetX,
      this.y = e.offsetY
    },
    toggleClasses(book){
      book.isFav = !book.isFav;
    }
  },
  computed: {
    filtered() {
      return this.books.filter( book => book.isFav )
    }
  }
});

app.mount('#app')