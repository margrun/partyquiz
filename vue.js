function textToArray(){
 
}

function randomString() {
  
  //const first = randomDigit(1);
  //const rest = [...Array(length - 1)].map(num => randomDigit());
  //return [first, ...rest].join('').trim();
  var things = ['banana peel', 'church', 'sleep', 'money', 'kite', 'sailboat', 'popsicle', 'brain', 'birthday', 'cake', 'skirt', 'knee', 'saxophone', 'crater', 'cage', 'sailboat', 'popsicle', 'brain', 'birthday cake', 'skirt', 'knee', 'pineapple', 'tusk', 'sprinkler', 'money', 'spool', 'lighthouse', 'doormat', 'face', 'flute', 'rug', 'snow', 'ball', 'purse', 'owl', 'gate', 'suitcase', 'stomach', 'doghouse', 'pajamas', 'bathroom', 'scale', 'peach', 'newspaper', 'wateringcan', 'hook', 'school', 'beaver', 'french fries', 'beehive', 'beach', 'artist', 'flagpole', 'half', 'cardboard', 'oar', 'baby-sitter', 'drip', 'shampoo', 'point', 'time machine', 'yardstick', 'think', 'lace', 'darts', 'world', 'avocado', 'bleach', 'shower curtain', 'extension cord', 'dent', 'birthday', 'lap', 'sandbox', 'bruise', 'quicksand', 'fog', 'gasoline', 'pocket', 'honk', 'sponge', 'wig', 'zipper', 'letter opener', 'fiddle', 'water buffalo', 'pilot', 'brand', 'baguette', 'rib', 'mascot', 'fireman', 'pole', 'zoo', 'sushi', 'fizz', 'ceiling fan', 'punk', 'post office', 'season', 'Internet', 'chess', 'puppet', 'koala', 'dentist', 'ping pong', 'mast', 'hut', 'welder', 'dryer', 'sheets', 'sunburn', 'houseboat', 'grandpa', 'speakers', 'cheerleader', 'salmon', 'cabin', 'handle', 'swamp', 'cruise', 'wedding cake', 'crows nest', 'macho', 'drain', 'foil', 'orbit', 'dream', 'recycle', 'raft', 'gold', 'cliff', 'sweater vest', 'cape', 'safe', 'picnic', 'shrink ray', 'leak', 'boa constrictor', 'tiptoe', 'hurdle', 'knight', 'love', 'seat', 'cloak', 'bedbug', 'bobsled', 'hot tub', 'firefighter', 'cell phone charger', 'beanstalk', 'nightmare', 'coach', 'moth', 'sneeze', 'wooly mammoth', 'pigpen', 'swarm', 'goblin', 'chef', 'applause', 'wax', 'sheep dog', 'smores' ,' plow', 'runt'];
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

