import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
id_data;
id:number


  constructor(private dataservice : SerService,  private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRouter.snapshot.params["id"];
   this.getdata_id(this.id)
  }        
  getdata_id(id){
      this.dataservice.getdata_id(id).subscribe(res=> {
        this.id_data=res;
       console.log("Get by ID Data",res)
      })
  }
  backtohomepage(){    
   return this.router.navigate(['/']);
  }
}


