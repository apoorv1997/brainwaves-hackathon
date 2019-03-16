import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  a: number = 1;
  z: number = 1;
  searched=false;
  criteria = '';
  clientData = [];
  sampleData = [];
  matchedData = [];
  searchedData = [];
  modalRef: BsModalRef;
  constructor(private http:HttpService, private toastr:ToastrService, private modalService: BsModalService) { }

  ngOnInit() {
    this.http.getClientData().toPromise().then(result => {
      // console.log(result['data']);
      this.clientData = result['data'];
      this.toastr.success(`${result['message']}`, 'Success!',{
        timeOut: 1000
      });
    }).catch(err => {
      console.log(err);
    });
    this.http.getSampleData().toPromise().then(result => {
      // console.log(result['data'])
      this.sampleData = result['data'];
    }).catch(err => {
      console.log(err);
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    for(let i=0;i<this.clientData.length;i++) {
      for(let j=0;j<this.sampleData.length;j++) {
        if(this.clientData[i][':36']==this.sampleData[j][':36'] && this.clientData[i][':30V']==this.sampleData[j][':30V'] && this.clientData[i][':32B']==this.sampleData[j][':33B'] && this.clientData[i][':33B']==this.sampleData[j][':32B'] && this.clientData[i][':82']==this.sampleData[j][':87'] && this.clientData[i][':87']==this.sampleData[j][':82'] && this.clientData[i][':77H']==this.sampleData[j][':77H'] && this.clientData[i][':30T']==this.sampleData[j][':30T'] && this.clientData[i][':56']==this.sampleData[j][':56']) {
          const data = {
            clientID:this.clientData[i][':20'],
            SGID:this.sampleData[j][':20']
          }
          this.matchedData.push(data);
          break;
        }
      }
    }
    console.log(this.matchedData);
  }

  openDoc(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  selectCriteria(e) {
    this.criteria = e;
  }

  searchDoc(e) {
    this.searchedData=[];
    if(e.keyCode==13) {
      const q = e.target.value.toString();
      if(this.criteria=='trade date') {
        if(q=='') {
          this.toastr.warning('Please enter value', 'Warning')
        } else {
          for(let data of this.clientData) {
            if(data[':30T']==q) {
              this.searchedData.push(data);
              this.searched=true;
            }
            else {
              this.toastr.warning('No data found', 'Warning');
              break;
            }
          }
        }
      } else if(this.criteria=='settlement date') {
        if(q=='') {
          this.toastr.warning('Please enter value', 'Warning')
        } else {
          for(let data of this.clientData) {
            if(data[':30V']==q) {
              this.searchedData.push(data);
              this.searched=true;
            }  else {
              this.toastr.warning('No data found', 'Warning');
              break;
            }
          }
        }
      } else if(this.criteria=='rate') {
        if(q=='') {
          this.toastr.warning('Please enter value', 'Warning');
        } else {
          for(let data of this.clientData) {
            if(data[':36']==q) {
              this.searchedData.push(data);
              this.searched=true;
            } else {
              this.toastr.warning('No data found', 'Warning');
              break;
            }
          } 
        }
      } else if(this.criteria=='buy ccy') {
        if(q=='') {
          this.toastr.warning('Please enter value', 'Warning');
        } else {
          for(let data of this.clientData) {
            if(data[':32B'].startsWith(q)) {
              this.searchedData.push(data);
              this.searched=true;
            } 
            // else {
            //   this.toastr.warning('No data found', 'Warning');
            //   break;
            // }
          }
        }
      } else if(this.criteria=='sell ccy') {
        if(q=='') {
          this.toastr.warning('Please enter value', 'Warning');
        } else {
          for(let data of this.clientData) {
            if(data[':33B'].startsWith(q)) {
              this.searchedData.push(data);
              this.searched=true;
            } 
            // else {
            //   this.toastr.warning('No data found', 'Warning');
            //   break;
            // }
          }
        }
      } else if(this.criteria=='buy amount') {
        if(q=='') {
          this.toastr.warning('Please enter value', 'Warning');
        } else {
          for(let data of this.clientData) {
            if(data[':32B'].endsWith(q)) {
              this.searchedData.push(data);
              this.searched=true;
            } 
            // else {
            //   this.toastr.warning('No data found', 'Warning');
            //   break;
            // }
          }
        }
      } else if(this.criteria=='sell amount') {
          if(q=='') {
            this.toastr.warning('Please enter value', 'Warning');
          } else {
            for(let data of this.clientData) {
              if(data[':33B'].endsWith(q)) {
                this.searchedData.push(data);
                this.searched=true;
              } 
              // else {
              //   this.toastr.warning('No data found', 'Warning');
              //   break;
              // }
            }
          }
      } else if(this.criteria=='') {
        if(q=='') {
          this.toastr.warning('Please enter value', 'Warning')
        }
        this.toastr.error('Please select criteria!', 'Error', {
          timeOut:1000
        })
      }
    }
  }

}
