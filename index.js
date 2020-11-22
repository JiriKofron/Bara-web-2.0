const app = new Vue ({
  el: '#nav-container',
  data: {
    isHidden: true
  },
  methods: {
    clicked: function() {
      this.isHidden = !this.isHidden;
    }
  }
})


// Declaring vue component with template, which is card of each person. It must be contained in a div, otherwise the same tags don't work and show

Vue.component('review-display', {
    props: ['review'],
    template: `<div class="carousel-cell">
  <img v-bind:src="review.img">
  <p class="review-name">{{review.name}}</p>
  <p class="review-text">{{review.content}}</p></div>`
  });
  
  //new object, el class binding the object to html id - see html
  // socialProofs are actualy the cards with data of each person. Id helps for looping  = it is a key for binding - see html
  // Each now person now can be added just to add the properities to data array, rather than wet the html
  const socialCard = new Vue({
    el: "#review-display",
    data: {
      reviews: [
      {id: 0, name: "Alice", content: "Nikdy jsem na terapii nebyl. Po těžkém rozchodu jsem se ale rozhodl to vyzkoušet a už po prvním sezení s Bárou jsem byl nadšený. Teď už věřím, že můžu být v životě zase štastný.", img:"./icons/png/An-woman.png"},
      {id: 1, name: "Marchel", content: "First Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", img:"./icons/png/An-man-dark.png" },
      {id: 2, name: "Philip", content: "Second Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", img:"./icons/png/An-man-dark.png"},
        {id: 3, name: "Patricia", content: "Third Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", img: "./icons/png/An-woman-dark.png"
        }
      ]
    }
  });
  
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity( elem, {
    // options
    adaptiveHeight: true,
    wrapAround: true
  });
