var BlinkyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this._oldStep = this.step
  //this._oldStep = this._step;
};



BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //oldstep();
  //this._oldStep();
   // setTimeout(function)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
//  var that = this;
//  setTimeout(function () {
  this.step += this.$node.toggle(); 
//}, this._timeBetweenSteps);
};
