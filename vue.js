function textToArray(){
 
}

function randomString() {
  
  //const first = randomDigit(1);
  //const rest = [...Array(length - 1)].map(num => randomDigit());
  //return [first, ...rest].join('').trim();
  var things = ['banana peel', 'church', 'sleep', 'money', 'kite', 'sailboat', 'popsicle', 'brain', 'birthday', 'cakeskirtknee', 'saxophone', 'crater', 'cage'];
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

