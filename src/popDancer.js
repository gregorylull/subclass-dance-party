var PopDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pop');




  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this._oldStep = this.step
};



PopDancer.prototype = Object.create(Dancer.prototype);

PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  this.$node.fadeToggle("slow");
};
