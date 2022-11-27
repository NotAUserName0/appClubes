import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GetTokenInfoService } from '../services/get-token-info.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  @Input('appRole') role = [];
  //@Input('appRole') role = "";
  constructor(private cookie : CookieService,
              private templateRef : TemplateRef<any>,
              private viewContainerRef : ViewContainerRef,
              private token : GetTokenInfoService
    ) { }

    ngOnInit(): void {
      var payload = this.token.tokenInfo();
      //console.log(this.role);

      this.role.forEach(r => {
        if(payload.data.role == r){
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
      });

    }


}
