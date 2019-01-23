import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from '../../User';

import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NgForm }   from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
  	'Access-Control-Allow-Origin':'*',
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-mainpage',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
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
                    <input #newUserCNP class="form-control" ngModel="cnp" placeholder = "CNP" />
                </div>
            </div>         
            
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-primary" (click)="addItem(newUserName.value, newUserEmail.value, newUserCNP.value)">Add New User to DB</button>
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
	                    <th>CNP</th>
	                </tr>
	            </thead>
	            <tbody>
	                <tr *ngFor="let users of user">
	                    <td>{{users.name}}</td>
	                    <td>{{users.email}}</td>
	                    <td>{{users.cnp}}</td>
	                </tr>
	            </tbody>
	        </table>
        </div>
        
        <div class="col-xl-4">
        	<transaction>Загрузка...</transaction>
        </div>	
    </div>`
})
export class ProfileComponent implements OnInit {

  	user: User[];
    headers: Headers;

    

	constructor(private http: HttpClient) {}

  ngOnInit() {
  	this.http.get<User[]>('http://localhost:8000/all-users').subscribe(data => {
  		this.user = data;

  		console.log(data);
  	});
  }

  addItem(name: string, email: string, cnp: string): void {

        this.user.push(new User(name, email, cnp));

        this.http.post('http://localhost:8000/post-users', JSON.stringify(new User(name, email, cnp)), httpOptions).subscribe(response => {
	  		  console.log(response);
	  	});
    }

}
