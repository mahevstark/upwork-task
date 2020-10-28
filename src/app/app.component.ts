import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // dark theme state handler
  darkTheme = false;

  // selected language state handler
  selected = "Select Language";

  // dark theme toggler function
  toggleDarkMode() {
    this.darkTheme = !this.darkTheme;
  }
}
