import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  p: number = 1;
  sampleData = [];
  constructor(private http:HttpService, private toastr:ToastrService) { }

  ngOnInit() {
    this.http.getSampleData().toPromise().then(result => {
      console.log(result);
      this.sampleData = result['data'];
      this.toastr.success(`${result['message']}`, 'Success!',{
        timeOut: 1000
      });
    }).catch(err => {
      console.log(err);
    })
  }

}
