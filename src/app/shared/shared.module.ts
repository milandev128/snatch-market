// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// External modules
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { ToastComponent } from './components/blocks/toast/toast.component';
import { ProgressBarComponent } from './components/blocks/progress-bar/progress-bar.component';

// Forms
import { FormConfirmComponent } from './components/forms/form-confirm/form-confirm.component';

// Modals
import { ModalWrapperComponent } from './components/modals/modal-wrapper/modal-wrapper.component';

// Layouts
import { LayoutHeaderComponent } from './components/layouts/layout-header/layout-header.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';

// Pipes

// Directives
import { ModalWrapperDirective } from './directives/modal-wrapper.directive';

// font-awesom 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageButtonComponent } from './components/image-button/image-button.component';
import { RewardCollectionCardComponent } from './components/reward-collection-card/reward-collection-card.component';
import { ProcessCardComponent } from './components/process-card/process-card.component';
import { RewardDropCardComponent } from './components/reward-drop-card/reward-drop-card.component';
import { LayoutFooterComponent } from './components/layouts/layout-footer/layout-footer.component';
import { GameRewardModalComponent } from './components/modals/game-reward-modal/game-reward-modal.component';
import { RewardItemComponent } from './components/reward-item/reward-item.component';
import { CollectionItemComponent } from './components/market-place/collection-item/collection-item.component';
import { RewardCardItemComponent } from './components/market-place/reward-card-item/reward-card-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AppButtonComponent } from './components/buttons/app-button/app-button.component';
import { ToolbarActionComponent } from './components/market-place/toolbar-action/toolbar-action.component';
import { FilterPanelComponent } from './components/market-place/filter-panel/filter-panel.component';
import { MerchantWizardDirective } from './directives/merchant-wizard.directive';
import { AuthWizardDirective } from './directives/auth-wizard.directive';
import { DashboardLayoutComponent } from './components/layouts/dashboard-layout/dashboard-layout.component';
import { SidebarLayoutComponent } from './components/layouts/sidebar-layout/sidebar-layout.component';
import { ArrowButtonComponent } from './components/dashboard/arrow-button/arrow-button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CategoryCardComponent } from './components/play/category-card/category-card.component';
import { BrandCardComponent } from './components/play/brand-card/brand-card.component';




@NgModule({
  imports:
    [
      // Angular modules
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,

      // External modules
      TranslateModule,
      AngularSvgIconModule,
      NgbModule,
      FontAwesomeModule,
    ],
  declarations:
    [
      // Components
      ToastComponent,
      ProgressBarComponent,

      // Forms
      FormConfirmComponent,

      // Modals
      ModalWrapperComponent,

      // Layouts
      LayoutHeaderComponent,
      PageLayoutComponent,

      // Pipes

      // Directives
      ModalWrapperDirective,
      ImageButtonComponent,
      RewardCollectionCardComponent,
      ProcessCardComponent,
      RewardDropCardComponent,
      LayoutFooterComponent,
      GameRewardModalComponent,
      RewardItemComponent,
      CollectionItemComponent,
      RewardCardItemComponent,
      PaginationComponent,
      AppButtonComponent,
      ToolbarActionComponent,
      FilterPanelComponent,
      MerchantWizardDirective,
      AuthWizardDirective,
      DashboardLayoutComponent,
      SidebarLayoutComponent,
      ArrowButtonComponent,
      SearchInputComponent,
      CategoryCardComponent,
      BrandCardComponent,
    ],
  exports:
    [
      // Angular modules
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,

      // External modules
      TranslateModule,
      AngularSvgIconModule,
      NgbModule,

      // Components
      ToastComponent,
      ProgressBarComponent,

      // Forms
      FormConfirmComponent,

      // Modals
      ModalWrapperComponent,

      // Layouts
      LayoutHeaderComponent,
      LayoutFooterComponent,
      PageLayoutComponent,

      // Pipes

      // Directives
      ModalWrapperDirective,
      MerchantWizardDirective,
      AuthWizardDirective,

      // some component 
      ImageButtonComponent,
      RewardCollectionCardComponent,
      ProcessCardComponent,
      RewardDropCardComponent,
      RewardItemComponent,
      CollectionItemComponent,
      RewardCardItemComponent,
      PaginationComponent,
      AppButtonComponent,
      ToolbarActionComponent,
      FilterPanelComponent,

      DashboardLayoutComponent,
      SidebarLayoutComponent,
      ArrowButtonComponent,
      SearchInputComponent,
      CategoryCardComponent,
      BrandCardComponent
    ],
  providers:
    [
    ]
})
export class SharedModule { }
