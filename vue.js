function randomDigit(min = 0) {
  return Math.floor((Math.random() * Math.floor(9)) + min);
}

function randomString(length) {
  if (length === 0) {
    return 0
  }
  //const first = randomDigit(1);
  //const rest = [...Array(length - 1)].map(num => randomDigit());
  //return [first, ...rest].join('').trim();
  var things = ['Rock', 'Paper', 'Scissor'];
  var thing = things[Math.floor(Math.random()*things.length)];
  return thing;
  //alert('The computer chose:' + thing);
}

new Vue({
  el: '#app',
  data: {
    value: 5,
    password: '',
  },
  methods: {
    generate() {
      this.password = randomString(this.value);
    }
  },
  mounted() {
    this.generate()
  }
})

