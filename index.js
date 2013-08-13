var property = false;
var el = document.body;

if("transition" in el.style) {
  property = "transition";
}

if("webkitTransition" in el.style) {
  property = "webkitTransition";
}

if("MozTransition" in el.style) {
  property = "MozTransition";
}

function hasTransitions(el){
  if(!el) el = document.body;
  if(!property) return false;
  return property in el.style;
}
hasTransitions.support = (property !== false);
hasTransitions.property = property;

module.exports = hasTransitions;