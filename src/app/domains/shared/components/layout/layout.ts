import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Header} from '@shared/components/header/header'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, Header, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
