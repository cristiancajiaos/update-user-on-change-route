import { User } from './../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  public id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      if (params) {
        this.id = params['id'];
        this.http
          .get<User>(`/users/${this.id}`)
          .subscribe((user) => {
            console.log(user);
          });
      }
    });


  }

}
