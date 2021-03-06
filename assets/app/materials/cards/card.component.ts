import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MaterialService } from '../materials.service';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../model/User';

import { JsonObjectPipe } from '../../common/json-object.pipe';
import { ModalComponent } from '../../common/modal.component';

@Component({
    selector: 'my-card',
    templateUrl: './card.component.html'
})

export class CardComponent implements OnInit{
    @Input('data') item;

    @Output('edit') edit = new EventEmitter();
    @Output('delete') delete = new EventEmitter();

    user :BehaviorSubject<User>;

    constructor(
        private _materialService: MaterialService,
        private _authService : AuthService
    ) { }

    ngOnInit() {
        this.user = this._authService.user;
    }

    onEdit() {
        this.edit.emit({
            data: this.item
        });
    }

    deleteConfirmation() {
        this.delete.emit({
            data: this.item
        });
    }
}