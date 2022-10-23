export class Customer {
  id: number;
  name: string;
  dateOfBirth: string;
  gender: number;
  idCard: string;
  phoneNumber: string;
  email: string;
  address: string;
  customerType: string;

  constructor(id: number, name: string, dateOfBirth: string, gender: number,
              idCard: string, phoneNumber: string, email: string, address: string, customerType: string) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.idCard = idCard;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
    this.customerType = customerType;
  }
}
