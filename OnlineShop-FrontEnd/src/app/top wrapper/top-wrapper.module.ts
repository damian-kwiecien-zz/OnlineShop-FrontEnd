import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopWrapperComponent } from './top-wrapper.component';
import { AccountModal } from './account modal/account-modal.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TopWrapperComponent, AccountModal],
    exports: [TopWrapperComponent]
})
export class TopWrapperModule { }