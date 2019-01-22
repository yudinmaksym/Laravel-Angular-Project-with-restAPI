import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Transaction, TransactionUpdate, TransactionDelete } from '../Transaction';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NgForm }   from '@angular/forms';






const httpOptions = {
  headers: new HttpHeaders({
  	'Access-Control-Allow-Origin':'*',
    'Content-Type':  'application/json'
  })
};



@Component({
  selector: 'transaction',
  templateUrl: '../app.component.html',
  styleUrls: ['../app.component.css'],
  template: `
    <div class="panel d-flex justify-content-around">
        <div class="form w-100">
          	
            <div class="d-flex mb-5">
              <div class="col-6 pl-0">
                <h5> Add Trans </h5>
                <div class="form-group">
                    <div class="w-100">
                        <input #transUserId class="form-control" ngModel="transUserId" placeholder = "transUserId" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="w-100">
                        <input #transAmount type="text" class="form-control" ngModel="transAmount" placeholder="transAmount" />
                    </div>
                </div>        
                
                <div class="form-group">
                    <div class=" w-100 text-center">
                        <button class="btn btn-primary" (click)="addTrans(transUserId.value, transAmount.value)">Add New Transaction</button>
                    </div>
                </div>
              </div>
              <div class="col-6 pr-0">
                <h5> Update Trans </h5>
                <div class="form-group">
                    <div class="w-100">
                        <input #transUpdateId class="form-control" ngModel="transId" placeholder = "Trans Id" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="w-100">
                        <input #transUpdateAmount type="text" class="form-control" ngModel="transAmount" placeholder="Trans Amount" />
                    </div>
                </div>        
                
                <div class="form-group">
                    <div class="w-100 text-center">
                        <button class="btn btn-secondary" (click)="updateTrans(transUpdateId.value, transUpdateAmount.value)">Update Transaction</button>
                    </div>
                </div>
              </div>
            </div>
            

            <div class="page-header">
              <h1> Transactions List </h1>
            </div>

            <table class="table table-striped">
	            <thead>
	                <tr>
	                    <th>Trans ID</th>
                      <th>Customer ID</th>
	                    <th>Trans Amount</th>
	                    <th>Trans Created at</th>
	                </tr>
	            </thead>
	            <tbody>
	                <tr *ngFor="let transaction of transaction">
	                    <td>{{transaction.id}}</td>
                      <td>{{transaction.user_id}}</td>
	                    <td>{{transaction.amount}}</td>
	                    <td>{{transaction.created_at}}</td>
	                    <td><button class="btn btn-sm btn-danger" (click)="deleteTrans(this.transaction.id)">delete</button></td>
	                </tr>
	            </tbody>
	        </table>
        </div>	

    </div>`
})


export class TransactionComponent { 

    transaction: Transaction[];
    transactionUpdate: TransactionUpdate[];
    headers: Headers;

    

  	constructor(private http: HttpClient) {}

  	ngOnInit()
  	{
  	  	this.http.get<Transaction[]>('http://127.0.0.1:8080//all-trans').subscribe(data => {
  	  		this.transaction = data;

  	  		console.log(data);
  	  	});
  	  	
  	}

    addTrans(transCustomerId: number, transAmount: number): void {

        this.transaction.push(new Transaction(transCustomerId, transAmount));

        this.http.post('http://127.0.0.1:8080/post-trans', JSON.stringify(new Transaction(transCustomerId, transAmount)), httpOptions).subscribe(response => {
	  		  console.log(response);
          this.ngOnInit();
	  	});
    }

    updateTrans(transId: number, transAmount: number): void {

      this.http.post('http://127.0.0.1:8080/update-trans', JSON.stringify(new TransactionUpdate(transId, transAmount)), httpOptions).subscribe(response => {
          console.log(response);
          this.ngOnInit();
      });

    }

    deleteTrans(checkedTrans: number): void{
      this.http.post('http://127.0.0.1:8080/delete-trans', JSON.stringify(new TransactionDelete(checkedTrans)), httpOptions).subscribe(response => {
          console.log(response);
          this.ngOnInit();
      });
    }

     
}
