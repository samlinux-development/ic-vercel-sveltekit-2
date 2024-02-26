import Float "mo:base/Float";
actor { 
  /**
   *  calc bmi
   */
  public query func bmi(height : Float, weight : Float) : async Float {
    weight / (height/100 * height/100);
  };
};