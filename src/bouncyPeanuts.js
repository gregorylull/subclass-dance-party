var bouncyPeanuts = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

//  this.$node.attr("src","bouncyPeanuts.gif");

  this.$node.append('<img src="src/bouncyPeanuts.gif" class="bouncyPeanuts"/>');
  var newStyle = {
    border: "0px solid black"
  };
  this.$node.css(newStyle);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this._oldStep = this.step
};



bouncyPeanuts.prototype = Object.create(Dancer.prototype);

bouncyPeanuts.prototype.constructor = bouncyPeanuts;

bouncyPeanuts.prototype.step = function(){

  Dancer.prototype.step.call(this);

//  this.$node.toggle();
};
