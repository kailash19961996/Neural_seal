// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
standalone: true,
imports: [RouterModule],  // needed for <router-outlet>
selector: 'app-root',
template:     `<h1>Neural Seal</h1>     <nav>       <!-- Simple links to test routing -->       <a routerLink="">Home</a> |        <a routerLink="result">Result</a>     </nav>     <hr>     <router-outlet></router-outlet>`  ,
styleUrls: ['./app.component.css']
})
export class AppComponent {
// no module, no problem
}