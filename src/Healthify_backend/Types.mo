module Models {
  public type MedicalInfo = {
    name : Text;
    age : Nat;
    bloodGroup : Text;
    genotype : Text;
    allergies: Text;
    existingConditons: Text;
    gender: Text;
    description: Text;
  };

  public type PatientInfo = {
    fullName : Text;
    age : Nat;
    email : Text;
    phoneNumber : Text;
    dob : Text;
    occupation: Text;
    address: Text;
    nextOfKin: Text;
    nextOfKinPhone: Text;
    medicalInfo: MedicalInfo;
    patientId : Text;
  };

  public type Donations = {
    title: Text;
    description: Text;
    total: Int;
    requester: Text;
    balance: Int;
    date: Text;
  };

  public type Research = {
    title: Text;
    description: Text;
    reward: Int;
  };

  public type Provider = {
    fullName : Text;
    email : Text;
    phoneNumber : Text;
    institution: Text;
    speciality: Text;
    licence: Text;
    address: Text;
    providerId : Text;
    treated: [Text];
  }
}