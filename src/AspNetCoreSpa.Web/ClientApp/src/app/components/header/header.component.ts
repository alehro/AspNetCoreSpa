import { Component, OnInit } from '@angular/core';
import { User } from 'oidc-client';
import * as toastr from 'toastr'; 

import { AppService, AuthService } from '@app/services';

import { routes } from '../../+examples/examples.routes';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'appc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isCollapsed = true;

    exampleRoutes = [...routes];

    constructor(
        private authService: AuthService,
        private appService: AppService,
        private http: HttpClient
    ) { }

    get isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }
    get user(): User {
        return this.authService.user;

    }
    get cultures(): ICulture[] {
        return this.appService.appData.cultures;
    }
    get currentCulture(): ICulture {
        return this.cultures.filter(x => x.current)[0];
    }
    ngOnInit(): void { }

    toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
    }
    login() {
        this.authService.login();
    }
    async register() {
        toastr.info("test toastr");
        let res = await this.http.post("api/account/Register", { email: "m1@m.com", password: "Password123?", confirmPassword: "Password123?" }).toPromise();
        
        //let res = await this.http.get("api/account/register", {}).toPromise();
        //let res = await this.http.get("api/account").toPromise();
        let r2 = res;
        //this.authService.register();
    }
    profile() {
        this.authService.profile();
    }
    logout() {
        this.authService.logout();
    }
}
