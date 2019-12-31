function textToArray(){
 
}

function randomString() {
  
  //const first = randomDigit(1);
  //const rest = [...Array(length - 1)].map(num => randomDigit());
  //return [first, ...rest].join('').trim();
  var things = ['banana peel', 'church', 'sleep', 'money', 'kite', 'sailboat', 'popsicle', 'brain', 'birthday', 'cake', 'skirt', 'knee', 'saxophone', 'crater', 'cage', 'sailboat', 'popsicle', 'brain', 'birthday cake', 'skirt', 'knee', 'pineapple', 'tusk', 'sprinkler', 'money', 'spool', 'lighthouse', 'doormat', 'face', 'flute', 'rug', 'snow', 'ball', 'purse', 'owl', 'gate', 'suitcase', 'stomach', 'doghouse', 'pajamas', 'bathroom', 'scale', 'peach', 'newspaper', 'wateringcan', 'hook', 'school', 'beaver', 'french fries', 'beehive', 'beach', 'artist', 'flagpole'];
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

