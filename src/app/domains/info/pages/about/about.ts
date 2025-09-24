import { Component, signal } from '@angular/core';
import { Counter } from '@shared/components/counter/counter';
import { CommonModule } from '@angular/common';
import { WaveAudio } from '@info/components/wave-audio/wave-audio';
import { Highlight } from '@shared/directives/highlight';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Counter, WaveAudio, Highlight],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  duration = signal(1000);
  message = signal('hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }
  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
