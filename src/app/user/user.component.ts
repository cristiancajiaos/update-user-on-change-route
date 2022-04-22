import { UserService } from './user.service';
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
  public result: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      if (params) {
        this.id = params['id'];
        this.user.getUser(this.id).subscribe(user => {
          this.result = JSON.stringify(user);
        });
      }
    });


  }

}
