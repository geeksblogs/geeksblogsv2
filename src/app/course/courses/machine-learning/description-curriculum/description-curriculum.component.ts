import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-description-curriculum',
  templateUrl: './description-curriculum.component.html',
  styleUrls: ['./description-curriculum.component.scss']
})
export class DescriptionCurriculumComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  arrPython: string [];
  arrSql: string[];
  public isCollapsed = false;
  public isCollapsed1 = false;
public isCollapsed3 = false;
public isCollapsed4 =false;
public isCollapsed5 = false;
public isCollapsed6 = false;
public isCollapsed7 = false;
public isCollapsed8 = false;
public isCollapsed9 = false;
public isCollapsed10 = false;





  ngOnInit(): void {

    this.httpService.get('./../assets/curriculum-json/machine-learning/python.json').subscribe(
      data => {
        this.arrPython = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrPython);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    this.httpService.get('./../assets/curriculum-json/machine-learning/sql.json').subscribe(
      data => {
        this.arrSql = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrSql);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );


  }

}
