import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AuthService } from 'src/app/services/auth.services';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class  AppComponent  {
  
  url= "Adcerlñ8967hkh";
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  values= this.url;

  miFormulario: FormGroup = this.fb.group({
    name: ['Juan Perez',[Validators.required, Validators.minLength(6)]],
    email: ['text5@text.com',[Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });


  constructor( private fb:FormBuilder,
              private router:Router,
              private authServices: AuthService) { }

  register(){

    const {name, email, password} = this.miFormulario.value;

    this.authServices.registro(name, email, password)
        .subscribe( value => {
 
          if( value === true ){
            this.router.navigateByUrl('/dashboard')
          }else {
              console.log('value', value, 'error')
            // Swal.fire('E R R O R', value, 'error')
          }
        });

    this.router.navigateByUrl('/dashboard')
  }

 

}




