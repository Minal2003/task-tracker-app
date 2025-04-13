import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'theme';

  constructor() {
    this.setInitialTheme();
  }

  // Set the theme from localStorage or system preference
  setInitialTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey);
    // Ensure that the theme is either 'light' or 'dark', else fallback to 'light'
    const theme = savedTheme === 'dark' ? 'dark' : 'light';
    this.setTheme(theme);
  }

  // Set the theme and save to localStorage
  setTheme(theme: 'light' | 'dark'): void {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
  }

  // Toggle between dark and light mode
  toggleTheme(): void {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}
