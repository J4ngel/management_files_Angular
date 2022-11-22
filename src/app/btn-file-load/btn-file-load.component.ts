import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-btn-file-load',
  templateUrl: './btn-file-load.component.html',
  styleUrls: ['./btn-file-load.component.css']
})
export class BtnFileLoadComponent implements OnInit {
  fileName = '';
  data:any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        let reader = new FileReader();
        reader.onload = (event:any) => {
          this.data =  event.target.result;
          console.log(this.data)
        }
        reader.readAsText(file)
    }
  }
}
