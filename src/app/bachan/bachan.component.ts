import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared-service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-bachan',
  templateUrl: './bachan.component.html',
  styleUrls: ['./bachan.component.css']
})
export class BachanComponent implements OnInit {

  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private inject: Injectable
  ) { }

  ngOnInit() {
  }


}
