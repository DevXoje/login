import {Component} from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
      <span>
  <main>
      <div class="container">
          <div class="body">
            <!--<figure class="box-1">
                <img
                        alt=""
                        class=""
                        src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
            </figure>-->
            <div class="box-2">
              <div class="mt-2">
              <!--<ng-content [select]="[topHeader]"></ng-content>-->

              <div class="d-flex flex-column content">

              <ng-content [select]="[content]"></ng-content>
                  <!--<div class="mt-3">
                  <p class="mb-0 text-muted">Already have an account?</p>
                  <div class="btn btn-primary">Log in<span class="fas fa-chevron-right ms-1"></span></div>
                  </div>-->
              </div>
              </div>
              <p class="footer text-muted mb-0 mt-md-0 mt-4">
                By register you agree with our
                <span class="p-color me-1">terms and conditions</span>and
                <span class="p-color ms-1">privacy policy</span>
              </p>
            </div>
          </div>
      </div>
  </main>
</span>
  `,
  styles: [`
    .container {
      margin: 50px auto;
    }

    .body {
      position: relative;
      width: 720px;
      //height: 440px;
      margin: 20px auto;
      border: 1px solid #dddd;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    }

    .box-1 {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .box-2 {
      padding: 10px;

      .content {
        margin: 0 20%;
      }
    }

    .box-1,
    .box-2 {
      width: 50%;
    }

    .h-1 {
      font-size: 24px;
      font-weight: 700;
    }

    .text-muted {
      font-size: 14px;
    }

    .footer {
      &.text-muted {
        font-size: 10px;
      }

      .p-color {
        color: #ee82ee;
      }
    }


    @media (max-width: 767px) {
      body {
        padding: 10px;
      }

      .body {
        width: 100%;
        height: 100%;
      }

      .box-1 {
        width: 100%;
      }

      .box-2 {
        width: 100%;
        height: 440px;
      }
    }

    /*Comentado en el HTML
    .btn.btn-primary {
      background-color: transparent;
      color: #ee82ee;
      border: 0px;
      padding: 0;
      font-size: 14px;
    }

    .btn.btn-primary .fas.fa-chevron-right {
      font-size: 12px;
    }

    En otro documento
    .container .box {
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid transparent;
      text-decoration: none;
      color: #615f5fdd;
    }

    .box:active,
    .box:visited {
      border: 2px solid #ee82ee;
    }

    .box:hover {
      border: 2px solid #ee82ee;
    }

*/  `]
})
export class AuthLayoutComponent {
  constructor() {
  }


}
