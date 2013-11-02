as
==

Create a JavaScript scope in which the enclosing function's first argument is referred to as `this'.

This is primarily a convenience function for writing CoffeeScript:

```coffeescript
as express(), ->
	@set 'view engine', 'jade'
	@listen 8080
```

Which is roughly equivalent to:

```javascript
var app = express();
app.set('view engine', 'jade');
app.listen(8080);
```

Maybe stupid, but I like writing code this way.