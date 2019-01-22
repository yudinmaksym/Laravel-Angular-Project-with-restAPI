import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from './User';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="panel d-flex justify-content-around pt-5">
        <div class="form col-xl-4">
        	
        	<div class="form-group">
                <div class="col-md-8">
                    <input #newUserName class="form-control" ngModel="name" placeholder = "Name" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-8">
                    <input #newUserEmail type="text" class="form-control" ngModel="email" placeholder="Email" />
                </div>
            </div>
        	<div class="form-group">
                <div class="col-md-8">
                    <input #newUserPassword class="form-control" ngModel="id" placeholder = "Id" />
                </div>
            </div>         
            
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-primary" (click)="addItem(newUserName.value, newUserEmail.value, newUserPassword.value)">Add New User to DB</button>
                </div>
            </div>

            <div class="page-header">
		        <h1> Users List </h1>
		    </div>

            <table class="table table-striped">
	            <thead>
	                <tr>
	                    <th>Username</th>
	                    <th>Email</th>
	                    <th>ID</th>
	                </tr>
	            </thead>
	            <tbody>
	                <tr *ngFor="let users of user">
	                    <td>{{users.name}}</td>
	                    <td>{{users.email}}</td>
	                    <td>{{users.password}}</td>
	                </tr>
	            </tbody>
	        </table>
        </div>
        
        <div class="col-xl-4">
        	<transaction>Загрузка...</transaction>
        </div>	

    </div>`
})


export class AppComponent { 

    user: User[];
    headers: Headers;

    

	constructor(private http: HttpClient) {}

	ngOnInit()
	{
	  	this.http.get<User[]>('http://127.0.0.1:8080/all-users').subscribe(data => {
	  		this.user = data;

	  		console.log(data);
	  	});
	  	
	}

    addItem(name: string, email: string, password: string): void {
         
        if(name==null || name.trim()=="" || email==null)
            return;

        this.user.push(new User(name, email,password));

        this.http.post('http://127.0.0.1:8080/post-users', JSON.stringify(new User(name, email, password)), httpOptions).subscribe(response => {
	  		console.log(response);
	  	});
    }

     
}