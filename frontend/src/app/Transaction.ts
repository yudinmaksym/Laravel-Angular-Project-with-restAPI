export class Transaction {
	
	customer_id: number;
	amount: number;
	offset: number;
	limit:number;
	created_at:string;

	 constructor(customer_id: number, amount: number) {
        
        this.customer_id = customer_id;
        this.amount = amount;
       
    }
}

export class TransactionUpdate {
	
	id: number;
	amount: number;

	 constructor(id: number, amount: number) {
        
        this.id = id;
        this.amount = amount;
       
    }
}

export class TransactionDelete {
	
	id: number;

	 constructor(id: number) {
        
        this.id = id;
       
    }
}