var Twit = require('twit');

var T = new Twit(require('./config.js'));

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

var kaomoji = [
	'\(◕‿◕✿\)',
	'\(◕ᴗ◕✿\)',
	'\(◡‿◡✿\)',
	'\(◠‿◠✿\)',
	'\(◕ω◕✿\)',
	'\(◕︿◕✿\)',
	'\(◕ㅅ◕✿\)',
	'\(◕▿◕✿\)',
	'\(˶◕‿◕˶✿\)',
	'\(〃‿〃✿\)',
	'\(ʘ‿ʘ✿\)',
	'｡◕‿◕｡',
	'\(ㆁᴗㆁ✿\)',
	'°˖✧◝\(⁰▿⁰\)◜✧˖°',
	'٩\(๑❛ᴗ❛๑\)۶',
	'\(◍•ᴗ•◍\)',
	'\(✿´ ꒳ ` \)',
	'╰\(\*´︶`\*\)╯',
	'\(。・ω・。\)',
	'\( ´◕㉨◕\）',
	'\(✿╹◡╹\)ﾉ☆',
	'\(✾♛‿♛\)ノ\*♡\*',
	'\(꒪▿꒪\)',
	'\(◔ᴥ◔\)',
	'\(✿◕㉨◕\)',
	'ヽ\(◕ܫ◕ヽ\)',
	'≧◠◡◠≦',
	'ヾ\(❀╹◡╹\)ﾉﾞ'
];

var greeting = [
	'hi!',
	'hello!',
	'hiiii',
	'hey',
	'hey!',
	'hooray',
	'hooray!',
	'omg',
	'oh my gosh'
];

var complement = [
	'you are super cute!',
	'you are rly cute',
	'you look cute today',
	'you are soooo cute',
	'how did you get so cute?',
	'you\'re kind of the cutest!',
	'everyone wishes they were as cute as you',
	'your cuteness meter is off the charts!',
	'your cuteness is glowing!',
	'you have very cute hair',
	'I like your cute style',
	'your avatar is super cute',
	'you have a cute face',
	'how are you so cute???',
	'you are the cutest new follower I have!',
	'you have the cutest smile',
	'your eyes are so cute!',
	'UR A QT'
];

var replies = [
	'You have very smooth hair.',
	'You deserve a promotion.',
	'What a fine sweater!',
	'I appreciate all of your opinions.',
	'I like your style.',
	'Your T-shirt smells fresh.',
	'I love what you\'ve done with the place.',
	'You complete me.',
	'Well done!',
	'I like your Facebook status.',
	'That looks nice on you.',
	'I like those shoes more than mine.',
	'You have a good taste in websites.',
	'Your mouse told me that you have very soft hands.',
	'You are full of youth.',
	'I like your jacket.',
	'You have a good web-surfing stance.',
	'Nice manners!',
	'I find you to be a fountain of inspiration.',
	'You have perfect bone structure.',
	'I disagree with anyone who disagrees with you.',
	'Way to go!',
	'With your creative wit, I\'m sure you could come up with better compliments than me.',
	'I like your socks.',
	'You are so charming.',
	'You\'re tremendous!',
	'You deserve a compliment!',
	'Your smile is breath taking.',
	'How do you get your hair to look that great?',
	'Say, aren\'t you that famous model from TV?',
	'Take a break; you\'ve earned it.',
	'Your life is so interesting!',
	'The sound of your voice sends tingles of joy down my back.',
	'I enjoy spending time with you.',
	'I would share my dessert with you.',
	'You can have the last bite.',
	'May I have this dance?',
	'I would love to visit you, but I live on the Internet.',
	'I love the way you click.',
	'You\'re invited to my birthday party.',
	'All of your ideas are brilliant!',
	'You should try out for everything.',
	'You are the gravy to my mashed potatoes.',
	'You get an A+!',
	'You would look good in glasses OR contacts.',
	'You could go longer without a shower than most people.',
	'I feel the need to impress you.',
	'I would trust you to pick out a pet fish for me.',
	'I\'m glad we met.',
	'You\'re so smart!',
	'We should start a band.',
	'You\'re cooler than ice-skating Fonzi.',
	'I made this bot for you.',
	'I heard you make really good French Toast.',
	'I like your pants.',
	'When I grow up, I want to be just like you.',
	'I told all my friends about how cool you are.',
	'I can tell that we are gonna be friends.',
	'You\'re #1 in my book!',
	'<3',
	'Your voice is more soothing than Morgan Freeman\'s.',
	'I like your sleeves. They\'re real big.',
	'I support all of your decisions.',
	'Being awesome is hard, but you\'ll manage.',
	'You could survive a zombie apocalypse.',
	'You make me smile',
	'You\'re so rad.',
	'You\'re more fun than a barrel of monkeys.',
	'You\'re nicer than a day on the beach.',
	'You look so perfect.',
	'Your eyebrows really make your pretty eyes stand out.',
	'I would share my fruit Gushers with you.',
	'You\'re more fun than bubble wrap.',
	'Your smile could illuminate the depths of the ocean.',
	'You make babies smile.',
	'You make the gloomy days a little less gloomy.',
	'You are warmer than a Snuggie.',
	'Playing video games with you would be fun.',
	'Let\'s never stop hanging out.',
	'I would do your taxes any day.',
	'You are a bucket of awesome.',
	'If you really wanted to, you could probably get a bird to land on your shoulder and hang out with you.',
	'My mom always asks me why I can\'t be more like you.',
	'You look great in this or any other light.',
	'You listen to the coolest music.',
	'You and Chuck Norris are on equal levels.',
	'I am having trouble coming up with a compliment worthy enough for you.',
	'If we were playing kickball, I\'d pick you first.',
	'You\'re the bee\'s knees.',
	'I wish I could choose your handwriting as a font.',
	'You definitely know the difference between your and you\'re.',
	'You have good taste.',
	'I like your style!',
	'You\'re a skilled driver.',
	'You are the wind beneath my wings.',
	'I like your face.',
	'You are a champ!',
	'Even my cat likes you.',
	'There isn\'t a thing about you that I don\'t like.',
	'You have the best laugh ever.',
	'We would enjoy a cookout with you!',
	'You are the bravest person I know',
	'I would always let you have the armrest at the theater',
	'You\'re smarter than google'
];

var stream = T.stream('user');

stream.on('follow', function (eventMsg) {
	  var name = eventMsg.source.name;
	  var screenName = eventMsg.source.screen_name;
	  console.log(eventMsg);
	  console.log(name, screenName);
	  var welcome = greeting.pick();
	  var nice = complement.pick();
	  var cuteFace = kaomoji.pick();
	  // add new followers to the queue

	T.post('statuses/update', { status: '@' + screenName + ' ' + welcome + ' ' + nice + ' ' + cuteFace }, function(err, data, response) {
	  console.log(data)
	})
})


// Fix this entire call. Super ugly. 
stream.on('tweet', function (msg) {
	var screenName = msg.user.screen_name;
	var niceReply = replies.pick();

	console.log(msg);

	if (msg.in_reply_to_screen_name === 'IsReallyCute') {
		T.post('statuses/update', { status: '@' + screenName + ' ' + niceReply }, function(err, data, response) {
			// console.log(data)
		})
	}

})


