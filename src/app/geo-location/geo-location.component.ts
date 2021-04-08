import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../visitors.service';

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.css']
})
export class GeoLocationComponent implements OnInit {
 name = 'Angular';

   ipaddress:string = '';
   latitude:string= '';
   longitude:string= '';
   currency:string = '';
   currencysymbol:string = '';
   isp:string= '';
   city:string = '';
   country:string ='';
   province:string='';
   constructor(
      private visitorsService: VisitorsService
   ){

   }

   ngOnInit(){

      this.visitorsService.getIpAddress().subscribe(res => {

        this.ipaddress = res['ip'];
        this.visitorsService.getGEOLocation(this.ipaddress).subscribe(res => {
          console.log(res)
          this.latitude = res['latitude'];
          this.longitude = res['longitude'];
         this.city = res['city'];
          this.country = res['country_code2'];
          this.isp = res['isp'];
          this.province = res['state_prov']
        });

      });
   }

}