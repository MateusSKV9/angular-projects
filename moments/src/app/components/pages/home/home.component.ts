import { Component } from '@angular/core';
import { Moment } from '../../../../Moments';
import { enverionment } from '../../../environments/environment';
import { MomentService } from '../../../services/moment.service';
import { Response } from '../../../../Response';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = enverionment.baseApiUrl;

  searchTerm: string = '';

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allMoments = data;
      this.moments = data;
    });
  }

  search(e: Event): void {
    {
      const target = e.target as HTMLInputElement;
      const value = target.value.toLowerCase();

      this.moments = this.allMoments.filter((moment) => {
        return moment.title && moment.title.toLowerCase().includes(value);
      });
    }
  }
}
