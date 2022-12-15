import {Component} from '@angular/core';
import {Link} from "../../../core/models";

@Component({
  selector: 'app-social-login',
  template: `
      <div class="social-block">
          <a *ngFor="let item of socialLinks" [routerLink]="[item.path]" class="social-button">{{item.text}}</a>

      </div>
  `,
  styles: [`
    .social-block {
      display: flex;

      & .social-button {
        background-color: red;
        border-radius: 25px;
        aspect-ratio: 1;

      }
    }
  `]
})
export class SocialLoginComponent {
  socialLinks: Link[] = [
    {
      path: "",
      text: "Facebook"
    },
    {
      path: "",
      text: "Google"
    },
    {
      path: "",
      text: "Twitter"
    },
    {
      path: "",
      text: "LinkedIn"
    },
  ];
}
