import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: []
})
export class PdfComponent implements OnInit {

  constructor() {
    document.addEventListener("click", (e)=> {

      const dataImage = e.target ;
      const dImage = (dataImage).removeEventListener ;

      console.log("dataImage:", dataImage, "dImage", dImage )
    }) }

  ngOnInit(): void {
  }

  

  createPdf(){
    const pdfDefinition: any = {
      content: [
        {
          image: "data:image/png;base64,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"
        },
      ],
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

}

