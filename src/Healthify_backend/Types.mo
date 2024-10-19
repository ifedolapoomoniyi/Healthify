import Bool "mo:base/Bool";
module Models {
  public type MedicalInfo = {
    bloodGroup : Text;
    genotype : Text;
    allergies : Text;
    existingConditions : Text;
    existingMedications : Text;
  };

  public type PatientInfo = {
    fullName : Text;
    age : Nat;
    email : Text;
    phoneNumber : Text;
    dob : Text;
    occupation : Text;
    address : Text;
    nextOfKin : Text;
    nextOfKinPhone : Text;
    medicalInfo : MedicalInfo;
    patientId : Text;
    gender : Text;
  };

  public type Donations = {
    title : Text;
    description : Text;
    total : Int;
    requester : Text;
    balance : Int;
    date : Text;
  };

  public type Research = {
    title : Text;
    description : Text;
    reward : Int;
  };

  public type Provider = {
    fullName : Text;
    age : Nat;
    email : Text;
    phoneNumber : Text;
    dob : Text;
    occupation : Text;
    address : Text;
    nextOfKin : Text;
    nextOfKinPhone : Text;
    gender : Text;
    institution : Text;
    speciality : Text;
    licence : Text;
    providerId : Text;
    issuingAuthority : Text;
    telemedicine : Bool;
  };
};
