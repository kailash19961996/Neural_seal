// src/app/result/result.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
standalone: true,
imports: [CommonModule],
selector: 'app-result',
template:     `<h2>Results Page</h2>     <p>Your chosen Type: <em>(we’ll wire up real data soon)</em></p>`  ,
styleUrls: ['./result.component.css']
})
export class ResultComponent {}