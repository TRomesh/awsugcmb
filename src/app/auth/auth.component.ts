import {Router} from '@angular/router';
import { Component, OnInit } from "@angular/core";
import {AmplifyService} from 'aws-amplify-angular'; 

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor(private amplifyService: AmplifyService, private router: Router) {
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state === "signedIn") {
        this.router.navigate(["/heros"]);
      }
    });
  }

  ngOnInit() {}


}
