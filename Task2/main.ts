 
  interface IAccount {
    Date_of_opening: Date;
    addCustomer(name: string): void;
    removeCustomer(name: string): void;
  }
  
 class Account {
    constructor(private Acc_no: number, private Balance: number) {}
    debitAmount(amount: number) {console.log("hello fro debitAmount")}
    creditAmount(amount: number) {console.log("hello from creditAccount")}
    getBalance() {console.log("hello from getbalance")}
  }
 
  class Saving_Account extends Account implements IAccount {
    constructor(
        Acc_no,Balance,public Date_of_opening: Date,private Min_Balance: number){
        super(Acc_no, Balance);
      }
    addCustomer() {
        console.log("hello from addCustomer --savings")
    }
    removeCustomer() {
        console.log("hello from removeCustomer --savings")
    }
}

class Current_Account extends Account implements IAccount{
    constructor(Acc_no,Balance, public Date_of_opening: Date, private Interest_rate: number){
        super(Acc_no , Balance)
    }
    addCustomer() {
        console.log("hello from addCustomer --current")
    }
    removeCustomer() {
        console.log("hello from removeCustomer --current")
    }
  
  }
   
