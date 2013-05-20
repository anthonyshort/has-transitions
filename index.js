var docStyle = document.body.style;
module.exports = "transition" in docStyle || "webkitTransition" in docStyle || "MozTransition" in docStyle;