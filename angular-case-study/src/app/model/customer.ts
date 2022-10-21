export class Customer {
  id: number;
  name: string;
  birthDay: string;
  gender: number;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  customerType: string;

  constructor(id: number, name: string, birthDay: string, gender: number,
              idCard: string, phone: string, email: string, address: string, customerType: string) {
    this.id = id;
    this.name = name;
    this.birthDay = birthDay;
    this.gender = gender;
    this.idCard = idCard;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.customerType = customerType;
  }
}
