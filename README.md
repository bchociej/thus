thus
====

Create a JavaScript scope in which ```thus```'s first argument is referred to as ```this```.

This is primarily a convenience function for writing CoffeeScript:

```coffeescript
thus express(), ->
	@set 'view engine', 'jade'
	@listen 8080
```

Expressed in JS, that would be:

```javascript
thus(express(), function() {
	this.set('view engine', 'jade');
	this.listen(8080);
});
```

Which is functionally equivalent to:

```javascript
var app = express();
app.set('view engine', 'jade');
app.listen(8080);
```

Might seem stupid, but I like writing code this way.