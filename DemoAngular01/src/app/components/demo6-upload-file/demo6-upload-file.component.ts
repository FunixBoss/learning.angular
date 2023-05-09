import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo6-upload-file.component.html',
  styleUrls: ['./demo6-upload-file.component.css']
})

export class Demo6UploadFileComponent implements OnInit{


  ngOnInit(): void {
  }

  selectedFile(event: any) {
    var file = event.target.files[0];
    console.log('name: ' + file.name);
    console.log('size(mb): ' + file.size/2**20);
    console.log('type: ' + file.type);
    
  }

  selectedFiles(event: any) {
    var files = event.target.files;
    console.log("length of files: " + files.length)
    for(var i = 0; i < files.length; i++){
      console.log('name: ' + files[i].name);
      console.log('size(byte): ' + files[i].size);
      console.log('type: ' + files[i].type);
      console.log("------------------------");
    }
    
  }

}
