var BouncyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.append('<img src="src/BouncyDancer.gif" class="bounce"/>');
  var bouncyStyle = {
    border: "0px solid black"
  };
  this.$node.css(bouncyStyle);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this._oldStep = this.step
};



BouncyDancer.prototype = Object.create(Dancer.prototype);

BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);

 
};
