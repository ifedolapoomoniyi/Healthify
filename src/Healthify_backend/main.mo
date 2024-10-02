
actor {

  type HealthRecord = {
    patientId : Text;
    name : Text;
    age : Nat;
    diagnosis : Text;
    treatments : Text;
  };

  var patient1 : HealthRecord = {
    patientId = "1234";
    name = "Ifedolapo";
    age= 22;
    diagnosis = "Inguinal hernia";
    treatments = "drugs";
  };

  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public func test() : async Text {
    return patient1.name # " has been diagnosed with " # patient1.diagnosis # " and is currently on " # patient1.treatments;
  };

  public func getRecords() : async HealthRecord {
    return patient1;
  };
};
