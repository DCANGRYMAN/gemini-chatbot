import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GeminiService } from './services/gemini.service';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AppComponent, SkeletonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    CommonModule,
  ],
  exports: [AppComponent, SkeletonComponent],
  providers: [GeminiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

