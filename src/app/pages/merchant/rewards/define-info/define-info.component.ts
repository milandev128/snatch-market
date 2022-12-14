import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setRewardStepIndexAction } from '../../store/merchant.action';
import { selectRewardStepIndex } from '../../store/merchant.selector';

@Component({
  selector: 'app-define-info',
  templateUrl: './define-info.component.html',
  styleUrls: ['./define-info.component.scss']
})
export class DefineInfoComponent implements OnInit {

  @Input() data: any;
  @Output() onNextTab: EventEmitter<any> = new EventEmitter<any>();
  selectedRewardStepIndex$ = this.store.pipe(select(selectRewardStepIndex));
  selectedRewardStepIndex = 0;

  tabData: any = [
    {index : 1, title : "Step 1. Select Number of Rewards to Define"},
    {index : 2, title : "Step 2. Defining Reward"},
    {index : 3, title : "Step 3. Defining Info"}
  ];
  
  constructor(private store : Store) { }

  ngOnInit(): void {
    this.selectedRewardStepIndex$.subscribe(data => this.selectedRewardStepIndex = data);
  }

  onNext() {
    this.store.dispatch(setRewardStepIndexAction({stepIndex: 0}));
    console.log('artwork');
    this.onNextTab.emit({isArtwork : true});
  }

  onHanldeTransitionTab(index : number) {
    
    this.store.dispatch(setRewardStepIndexAction({stepIndex : index}));
    this.selectedRewardStepIndex = index;
    this.onNextTab.emit('');
  }

}
