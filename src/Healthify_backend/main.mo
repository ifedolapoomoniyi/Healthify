import Models "Types";
// import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

actor {
  type PatientInfo = Models.PatientInfo;
  type MedicalInfo = Models.MedicalInfo;
  type Donations = Models.Donations;
  type Research = Models.Research;
  type Provider = Models.Provider;

  var dummyMedicalInfo : Models.MedicalInfo = {
    bloodGroup = "O+";
    genotype = "AA";
    allergies = "none";
    existingConditions = "none";
    existingMedications = "none";
  };

  var dummyPatient : PatientInfo = {
    fullName = "Ifedolapo";
    age = 22;
    email = "random@email.com";
    phoneNumber = "08012345678";
    dob = "12/12/1999";
    occupation = "Software Engineer";
    address = "123, Random Street, Lagos";
    nextOfKin = "Random Person";
    nextOfKinPhone = "08087654321";
    medicalInfo = dummyMedicalInfo;
    patientId = "1234";
    gender = "male";
  };

  // let patients : HashMap.HashMap<Principal, PatientInfo> = HashMap.HashMap<Principal, PatientInfo>(0, Principal.equal, Principal.hash);

  let patients = HashMap.HashMap<Text, PatientInfo>(5, Text.equal, Text.hash);
  let providers = HashMap.HashMap<Text, Provider>(5, Text.equal, Text.hash);
  let donate = HashMap.HashMap<Text, Donations>(5, Text.equal, Text.hash);
  let research = HashMap.HashMap<Text, Research>(5, Text.equal, Text.hash);

  patients.put("1234", dummyPatient);
  // patient functions
  public shared func addPatient(patient : PatientInfo) : async Text {
    patients.put(patient.patientId, patient);
    return patient.fullName # " has been added successfully";
  };
  public shared func getPatient(patientId : Text) : async ?PatientInfo {
    return patients.get(patientId);
  };
  public shared func getAllPatients() : async [PatientInfo] {
    return Iter.toArray(patients.vals());
  };
  public shared func updatePatient(patient : PatientInfo) : async Text {
    patients.put(patient.patientId, patient);
    return patient.fullName # " has been updated successfully";
  };
  public shared func deletePatient(patientId : Text) : async Text {
    patients.delete(patientId);
    return patientId # " has been deleted successfully";
  };
  public shared func getPatientsSize() : async Int {
    return patients.size();
  };


  // Provider functions
  public shared func addProvider(provider : Provider) : async Text {
    providers.put(provider.providerId, provider);
    return provider.fullName # " has been added successfully";
  };

  public shared func getProvider(providerId : Text) : async ?Provider {
    return providers.get(providerId);
  };

  public shared func getAllProviders() : async [Provider] {
    return Iter.toArray(providers.vals());
  };

  public shared func getProvidersSize() : async Int {
    return providers.size();
  };

  // Donate functions
  public shared func addNewDonation(donation : Donations) : async Text {
    donate.put(donation.title, donation);
    return donation.title # " has been added successfully";
  };

  public shared func getDonation(title : Text) : async ?Donations {
    return donate.get(title);
  };

  public shared func getAllDonations() : async [Donations] {
    return Iter.toArray(donate.vals());
  };

  public shared func deleteDonation(title : Text) : async Text {
    donate.delete(title);
    return title # " has been deleted successfully";
  };

  // Research functions
  public shared func addNewResearch(newResearch : Research) : async Text {
    research.put(newResearch.title, newResearch);
    return newResearch.title # " has been added successfully";
  };

  public shared func getResearch(title : Text) : async ?Research {
    return research.get(title);
  };

  public shared func getAllResearch() : async [Research] {
    return Iter.toArray(research.vals());
  };

  public shared func deleteResearch(title : Text) : async Text {
    research.delete(title);
    return title # " has been deleted successfully";
  };


  public func test() : async Text {
    return dummyPatient.fullName # " has been diagnosed with " # dummyPatient.medicalInfo.existingConditions # " and has a blood group of " # dummyPatient.medicalInfo.bloodGroup;
  };

};
