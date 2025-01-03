import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Moment } from '../../../../Moments';
import { CommonModule } from '@angular/common';
import { enverionment } from '../../../environments/environment';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css',
})
export class MomentComponent {
  moment?: Moment;
  baseApiUrl = enverionment.baseApiUrl;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));
  }
}
