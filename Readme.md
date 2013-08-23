
# has-transitions

  Determine if an element has transitions

## Installation

    $ component install anthonyshort/has-transitions

or via npm for Browserify

    $ npm install has-transitions

## API

    var hasTransitions = require('has-transitions');
    var cssEmitter = require('css-emitter');

    if(hasTransitions(el)) {
      cssEmitter(el).bind(onTransitionEnd);
    }
    else {
      onTransitionEnd();
    }

## Methods

### hasTransitions([el])

Determine if an element has any transition properties. If the browser doesn't
support transitions this will always return false.

If `el` isn't passed it will return a boolean for browser support for transitions.

## License

  MIT
