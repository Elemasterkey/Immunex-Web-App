import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
// import { DialogComponent } from './upload/dialog/dialog.component';
// import { UserComponent } from './user.component';

@Injectable({
  providedIn: 'root'
})
export class UploadLinkService {

  constructor() {  }

//   private formSubmit = new Subject<any>();
//   private fileSubmit = new Subject<any>();
//   private fileUploadOpened :boolean = false;
//   private uploadShow = new Subject<any>();
//   private uploadedinfo = new Subject<any>();
//   private uploaddialogstate = new Subject<any>();
//   public information  :any;


// uploadedUpdater(data){
//   this.information = data;
//     this.uploadedinfo.next(data);
// }
// uploadedListener(){
//   return this.uploadedinfo.asObservable();
// }
// dialogstateUpdater(data){
//   if (data) {
//     this.uploaddialogstate.next(data);
//   }
// }
// dialogstateListener(){
//   return this.uploaddialogstate.asObservable();
// }


// uploadedData(){
//   return this.information;
// }



//   formSubmitted(msg){
//     if (!this.fileUploadOpened) {
//       this.fileSubmitted({
//         anyFile: false,
//         file :[]
//       });
//     }else{
//       this.formSubmit.next(msg)

//     }

//   }

//   uploadResponse(){
 
//     return this.formSubmit.asObservable();
//   }

//   // file upload methods
//   fileSubmitted(msg){
//     this.fileSubmit.next(msg)

//   }

//   formSubmitWait(){

//     return this.fileSubmit.asObservable();
//   }

//   fileUploadAct(data){
//     if (data) {
//       this.fileUploadOpened = data.bol;
//     }
//   }

//   closeUploadWindow(msg){
//     this.uploadShow.next(msg)

//   }

//   closeUploadWindowListener(){
//     return this.uploadShow.asObservable();
//   }

}
