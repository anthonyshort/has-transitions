
# has-transitions

  Determine if the browser supports transitions

## Installation

    $ component install anthonyshort/has-transitions

## API

    var hasTransitions = require('has-transitions');
    var cssEmitter = require('css-emitter');

    if(hasTransitions) {
      cssEmitter(document.body).bind(onTransitionEnd);
    }
    else {
      onTransitionEvent();
    }

## License

  MIT
