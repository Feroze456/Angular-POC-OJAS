import { Component, OnInit } from '@angular/core';
import { SerService}  from '../ser.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any;
id:any;

  constructor(private dataservice: SerService) { }

  ngOnInit() {
    this.getdata();    
  }
  getdata(){
    this.dataservice.getAll().subscribe(res=>{
      this.data =res;
      console.log(res)      
    })
  }  
}
