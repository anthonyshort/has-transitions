module.exports = function(el) {
  return "transition" in el.style || "webkitTransition" in el.style || "MozTransition" in el.style
};