(function(module) {
	var __slice = [].slice;

	module.exports = function(doer, fn) {
		var args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
		return fn.apply.apply(fn, [doer].concat(__slice.call(args)));
	};
})(module);