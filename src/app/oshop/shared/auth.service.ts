import { Injectable } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';


const fbLoginOptions = {
  scope: 'public_profile,pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authService: SocialAuthService;
  private user$: Observable<SocialUser>
  loggedIn: boolean;
  constructor() { 
    this.authService = new SocialAuthService({
      autoLogin: false,
      providers: [
        // {
        //   id: GoogleLoginProvider.PROVIDER_ID,
        //   provider: new GoogleLoginProvider(
        //     'clientId'
        //   ),
        // },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('695021224453670'),
        }
      ],
    } as SocialAuthServiceConfig)

    this.user$ = this.authService.authState;
  }


  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  login() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions);
  }

  logout() {
    this.authService.signOut();
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions);
  }

  setAuthState() {
    return this.authService.authState
  }

  get appUser$() {
    return this.user$
  }


}
