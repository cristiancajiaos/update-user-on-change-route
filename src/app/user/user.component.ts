import { UserService } from './user.service';
import { User } from './../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserContentComponent } from './user-content/user-content.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  @ViewChild(UserContentComponent) userContent: UserContentComponent;

  public id: string;
  public result: string;
  public currentUser: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private user: UserService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      if (params) {
        this.id = params['id'];
        this.user.getUser(this.id).subscribe(user => {
          this.result = JSON.stringify(user);
          this.currentUser = user;
        });
      }
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.userContent.user = this.currentUser;
    this.cd.detectChanges();
  }

}
