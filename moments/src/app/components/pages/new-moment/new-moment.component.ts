import { Component } from '@angular/core';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { Moment } from '../../../../Moments';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText: string = 'Compartilhar!';

  constructor(private momentSevice: MomentService) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if(moment.image) {
      formData.append('image', moment.image);
    }

    // todo

    await this.momentSevice.crateMoment(formData).subscribe();

    // exibir msg

    // redirect
  }
}
