import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  idForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idForm = this.fb.group({
      number: new FormControl(1)
    });
  }

  onSubmit(): void {
    let id: string = this.idForm.value['number'].toString();
    this.router.navigate(['/user', id]);
  }

}
