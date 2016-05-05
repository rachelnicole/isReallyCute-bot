Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

// Globals
var Twit = require('twit'),
    T    = new Twit(require('./config.js')),
    stream = T.stream('user');

var kaomoji    = require('./content/kaomoji.js'),
    greeting   = require('./content/greeting.js'),
    compliment = require('./content/compliment.js'),
    replies    = require('./content/replies.js');

// When cutiebot is FOLLOWED, let's send a welcome message!
stream.on('follow', function (event) {
    var source = event.source;

    var name       = source.name,
        screenName = source.screen_name;

    var welcome  = greeting.pick(),
	      nice     = compliment.pick(),
	      cuteFace = kaomoji.pick();

	  console.log(eventMsg);
	  console.log(name, screenName);

	  // add new followers to the queue
	T.post('statuses/update', {
      status: '@' + screenName + ' ' + welcome + ' ' + nice + ' ' + cuteFace
    }, function(err, data, response) {
	  console.log(data)
	})
})


// Fix this entire call. Super ugly.
stream.on('tweet', function (message) {
	var screenName = message.user.screen_name,
      niceReply = replies.pick();

	console.log(message);

	if (message.in_reply_to_screen_name === 'IsReallyCute') {
		T.post('statuses/update', { status: '@' + screenName + ' ' + niceReply }, function(err, data, response) {
			// console.log(data)
		})
	}

})
