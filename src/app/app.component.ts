import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GeminiService } from './services/gemini.service'
import { SkeletonComponent } from './skeleton/skeleton.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gemini-inte';

  prompt: string = '';

  geminiService: GeminiService = inject(GeminiService);

  loading: boolean = false;

  chatHistory: any[] = [];
  constructor() {
    this.geminiService.getMessageHistory().subscribe((res: any) => {
      if(res) {
        this.chatHistory.push(res);
      }
    })
  }

  async sendData() {
    if(this.prompt && !this.loading) {
      this.loading = true;
      const data = this.prompt;
      this.prompt = '';
      await this.geminiService.generateText(data);
      this.loading = false;
    }
  }

  formatText(text: string): string {
  // Escapa caracteres HTML para evitar XSS
  text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Substitui trechos de código formatados com ``` e adiciona uma classe 'code-block'
  text = text.replace(/```(.*?)```/gs, "<pre class='code-block'><code>$1</code></pre>");

  // Insere uma quebra de linha antes de cada asterisco duplo
  text = text.replace(/\*\*/g, '\n**');

  // Insere uma quebra de linha antes de cada número
  text = text.replace(/(\d+)/g, '\n$1');

  return text;
}

}