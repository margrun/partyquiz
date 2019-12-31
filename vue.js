function textToArray(){
 
}

function randomString() {
  
  //const first = randomDigit(1);
  //const rest = [...Array(length - 1)].map(num => randomDigit());
  //return [first, ...rest].join('').trim();
  var things = ['banana peel', 'church', 'sleep', 'money', 'kite', 'sailboat', 'popsicle', 'brain', 'birthday', 'cake', 'skirt', 'knee', 'saxophone', 'crater', 'cage', 'sailboat', 'popsicle', 'brain', 'birthday cake', 'skirt', 'knee', 'pineapple', 'tusk', 'sprinkler', 'money', 'spool', 'lighthouse', 'doormat', 'face', 'flute', 'rug', 'snow', 'ball', 'purse', 'owl', 'gate', 'suitcase', 'stomach', 'doghouse', 'pajamas', 'bathroom', 'scale', 'peach', 'newspaper', 'wateringcan', 'hook', 'school', 'beaver', 'french fries', 'beehive', 'beach', 'artist', 'flagpole', 'half', 'cardboard', 'oar', 'baby-sitter', 'drip', 'shampoo', 'point', 'time machine', 'yardstick', 'think', 'lace', 'darts', 'world', 'avocado', 'bleach', 'shower curtain', 'extension cord', 'dent', 'birthday', 'lap', 'sandbox', 'bruise', 'quicksand', 'fog', 'gasoline', 'pocket', 'honk', 'sponge', 'wig', 'zipper', 'letter opener', 'fiddle', 'water buffalo', 'pilot', 'brand', 'baguette', 'rib', 'mascot', 'fireman', 'pole', 'zoo', 'sushi', 'fizz', 'ceiling fan', 'punk', 'post office', 'season', 'Internet', 'chess', 'puppet', 'koala', 'dentist', 'ping pong', 'mast', 'hut', 'welder', 'dryer', 'sheets', 'sunburn', 'houseboat', 'grandpa', 'speakers', 'cheerleader', 'salmon', 'cabin', 'handle', 'swamp', 'cruise', 'wedding cake', 'crows nest', 'macho', 'drain', 'foil', 'orbit', 'dream', 'recycle', 'raft', 'gold', 'cliff', 'sweater vest', 'cape', 'safe', 'picnic', 'shrink ray', 'leak', 'boa constrictor', 'tiptoe', 'hurdle', 'knight', 'love', 'seat', 'cloak', 'bedbug', 'bobsled', 'hot tub', 'firefighter', 'cell phone charger', 'beanstalk', 'nightmare', 'coach', 'moth', 'sneeze', 'wooly mammoth', 'pigpen', 'swarm', 'goblin', 'chef', 'applause', 'wax', 'sheep dog', 'smores' ,' plow', 'runt', 
  'bridge', 'bone', 'grapes', 'bell', 'jellyfish', 'bunny', 'truck', 'grass', 'door', 'monkey', 'spider', 'bread', 'ears', 'bowl', 'bracelet', 'alligator', 'bat', 'clock', 'lollipop', 'moon', 'doll', 'orange', 'ear', 'basketball', 'bike', 'airplane', 'pen', 'inch', 'worm', 'seashell', 'rocket', 'cloud', 'bear', 'corn', 'chicken', 'purse', 'glasses', 'blocks', 'carrot', 'turtle', 'pencil', 'horse', 'dinosaur', 'headlamp', 'snowman', 'ant', 'giraffe', 'cupcake', 'chair', 'leaf', 'bunk bed', 'snail', 'baby', 'balloon', 'bus', 'cherry', 'crab', 'football', 'branch', 'robot', 'horse', 'trip', 'backbone', 'bomb', 'round', 'treasure', 'garbage', 'park', 'pirate', 'ski', 'state', 'whistle', 'palace', 'baseball', 'coal', 'queen', 'dominoes', 'photograph', 'computer', 'hockey', 'aircraft', 'hot dog', 'salt and pepper', 'key', 'iPad', 'frog', 'lawnmower', 'mattress', 'wheel', 'circus', 'battery', 'mailman', 'cowboy', 'password', 'bicycle', 'skate', 'electricity', 'lightsaber', 'thief', 'teapot', 'deep', 'spring', 'nature', 'shallow', 'toast', 'outside', 'America', 'roller blading', 'gingerbread man', 'bowtie', 'wax', 'light bulb', 'platypus', 'music'];
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

