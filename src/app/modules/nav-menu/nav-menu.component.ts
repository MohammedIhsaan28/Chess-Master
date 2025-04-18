import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { PlayAgainstComputerDialogComponent } from '../play-against-computer-dialog/play-against-computer-dialog.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule, MatDialogModule]
})
export class NavMenuComponent {

  // Mobile menu state
  public isMobileMenuOpen = false;

  constructor(private dialog: MatDialog) {}

  public playAgainstComputer(): void {
    this.dialog.open(PlayAgainstComputerDialogComponent);
  }

  // Toggle for mobile menu
  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Optional: Close menu when clicking a button on mobile
  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
