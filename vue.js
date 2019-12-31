function randomDigit(min = 0) {
  return Math.floor((Math.random() * Math.floor(9)) + min);
}

function randomString() {
  
  //const first = randomDigit(1);
  //const rest = [...Array(length - 1)].map(num => randomDigit());
  //return [first, ...rest].join('').trim();
  var things = ['Glasögonorm', 'Pappersplan', 'Enhjuling'];
  var thing = things[Math.floor(Math.random()*things.length)];
  return thing;
  //alert('The computer chose:' + thing);
}

new Vue({
  el: '#app',
  data: {
    password: '',
  },
  methods: {
    generate() {
      this.password = randomString();
    }
  },
  mounted() {
    this.generate()
  }
})

