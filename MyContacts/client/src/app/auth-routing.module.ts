// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { OktaCallbackComponent } from '@okta/okta-angular';
// import { HomeComponent } from './home/home.component';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
// import { AuthInterceptor } from './shared/okta/auth.interceptor';
// import { MatButtonModule, MatCardModule } from '@angular/material';

// const oktaConfig = {
//   issuer: 'https://dev-702320.okta.com/oauth2/default',
//   redirectUri: 'http://localhost:4200/implicit/callback',
//   clientId: '0oa26mkqvzf3zrSdJ357',
//   pkce: true
// };

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'implicit/callback',
//     component: OktaCallbackComponent
//   }
// ];

// @NgModule({
//   declarations: [
//     HomeComponent
//   ],
//   imports: [
//     CommonModule,
//     HttpClientModule,
//     OktaAuthModule,
//     RouterModule.forRoot(routes),
//     MatButtonModule,
//     MatCardModule
//   ],
//   providers: [
//     { provide: OKTA_CONFIG, useValue: oktaConfig },
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
//   ],
//   exports: [RouterModule]
// })
// export class AuthRoutingModule { }
