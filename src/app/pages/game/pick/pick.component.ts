import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { GameRewardModalComponent } from '@modals/game-reward-modal/game-reward-modal.component';
@Component({
  selector: 'app-pick-card',
  templateUrl: './pick.component.html',
  styleUrls: ['./pick.component.scss']
})
export class PickComponent implements OnInit, OnDestroy{

  @ViewChild('beforeContent', { static: true }) beforeContent?: ElementRef<HTMLDivElement>;
  @ViewChild('afterContent', { static: true }) afterContent?: ElementRef<HTMLDivElement>;

  isStartPick = false;
  rewardItems = new Array(20);
  pickCards = new Array(5);

  isRefresh: boolean = false;

  slideConfig = { slidesToShow: 4, slidesToScroll: 4, dots: false, infinite: false, adaptiveHeight: true, variableWidth: true, arrows: false, centerMode: false };

  audio?: HTMLAudioElement;
  constructor(private modalService: NgbModal, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.audio = new Audio('/assets/audio/shuffling.mp3');
    this.audio!.preload = 'auto';
    this.audio!.autoplay = false;
    this.audio!.loop = false;
  }
  ngOnDestroy(): void {
    this.audio!.src = '';
  }

  ngOnInit(): void {
  }

  onHanldePickCard(data: any) {
    this.isStartPick = true;
    const docWidth = document.body.getBoundingClientRect();
    if (docWidth.width <= 575) {
      const cardContentDom = document.querySelector('.card-content');
      (cardContentDom! as HTMLDivElement).style.height = '153vw';
    }

    console.log('pick card start')
    this.audio?.play();
    setTimeout(() => {
      this.onArrangeCardToMatchWidth();
    }, 3500);

  }
  onArrangeCardToMatchWidth() {
    const contentAfterDom = document.querySelector('#card_content');
    const fcardMaps = document.querySelectorAll('.fcard');



    let secondLeftPos = "", fourthLeftPos = "", fifthLeftPos = "";
    const docWidth = document.body.getBoundingClientRect();
    if (docWidth.width <= 575) {
      contentAfterDom!.setAttribute('style', 'padding-left : 9vw; padding-right: 9vw;');
      const cardContentDom = document.querySelector('.card-content');
      (cardContentDom! as HTMLDivElement).style.height = '153vw';

    } else {
      contentAfterDom!.setAttribute('style', 'padding-left : 2.5vw; padding-right: 2.5vw;');
    }

    let leftValue = '';
    let topValue = '0vw';

    fcardMaps.forEach((element, index) => {
      if (docWidth.width <= 575) {
        leftValue = 41 * (index % 2) + 'vw';
        topValue = 51 * (Math.floor(index / 2)) + 'vw';
      } else {
        leftValue = 19 * index + 'vw';
      }

      // if (index == 0) leftValue = 'vw';
      element.setAttribute('style', 'left:' + leftValue + '; top:' + topValue + ";");
      if (index < 2) {
        element.classList.add('visible-ani');
      } else {
        // const style = getComputedStyle(element, null);
        if (index == 2) secondLeftPos = leftValue;
        if (index == 3) fourthLeftPos = leftValue;
        if (index == 4) fifthLeftPos = leftValue;
      }
    });
    // matching third card to target
    document.getElementById('card_content')!.style.setProperty('--left3', secondLeftPos!);
    let pretransform = this.getTranslateValues(document.querySelector('.after-content .card-3')!);
    let angle = this.getAngleValues(document.querySelector('.after-content .card-3')!);
    document.getElementById('card_content')!.style.setProperty('--x3', pretransform!.x + "px");
    document.getElementById('card_content')!.style.setProperty('--y3', pretransform!.y + "px");
    document.getElementById('card_content')!.style.setProperty('--z3', pretransform!.z + "px");
    document.getElementById('card_content')!.style.setProperty('--angle3', angle! + "deg");
    document.querySelector('.after-content .card-3')!.classList.add('fcard3-animation');

    // matching fifth card
    document.getElementById('card_content')!.style.setProperty('--left5', fifthLeftPos!);
    pretransform = this.getTranslateValues(document.querySelector('.after-content .card-5')!);
    angle = this.getAngleValues(document.querySelector('.after-content .card-5')!);
    document.getElementById('card_content')!.style.setProperty('--x5', pretransform!.x + "px");
    document.getElementById('card_content')!.style.setProperty('--y5', pretransform!.y + "px");
    document.getElementById('card_content')!.style.setProperty('--z5', pretransform!.z + "px");
    document.getElementById('card_content')!.style.setProperty('--angle5', angle! + "deg");
    document.querySelector('.after-content .card-5')!.classList.add('fcard5-animation');

    // matching fourth card
    document.getElementById('card_content')!.style.setProperty('--left4', fourthLeftPos!);
    pretransform = this.getTranslateValues(document.querySelector('.after-content .card-4')!);
    angle = this.getAngleValues(document.querySelector('.after-content .card-4')!);

    document.getElementById('card_content')!.style.setProperty('--x4', pretransform!.x + "px");
    document.getElementById('card_content')!.style.setProperty('--y4', pretransform!.y + "px");
    document.getElementById('card_content')!.style.setProperty('--z4', pretransform!.z + "px");
    document.getElementById('card_content')!.style.setProperty('--angle4', angle! + "deg");

    document.querySelector('.after-content .card-4')!.classList.add('fcard4-animation');

    // first animation card hiding for next animation
    document.querySelector('.after-content .card-1')!.classList.add('hidden');
    document.querySelector('.after-content .card-2')!.classList.add('hidden');

    // final display
    setTimeout(() => {
      document.querySelector('.after-content .card-3')!.classList.add('d-hidden');
      document.querySelector('.after-content .card-4')!.classList.add('d-hidden');
      document.querySelector('.after-content .card-5')!.classList.add('d-hidden');

      document.querySelectorAll('.fcard')[0].classList.add('pe-auto');
      document.querySelectorAll('.fcard')[1].classList.add('pe-auto');

      document.querySelectorAll('.fcard')[2].classList.add('d-visible');
      document.querySelectorAll('.fcard')[2].classList.add('pe-auto');
      document.querySelectorAll('.fcard')[3].classList.add('d-visible');
      document.querySelectorAll('.fcard')[3].classList.add('pe-auto');
      document.querySelectorAll('.fcard')[4].classList.add('d-visible');
      document.querySelectorAll('.fcard')[4].classList.add('pe-auto');
    }, 1000);

  }

  getTranslateValues(element: any): any {
    const style = window.getComputedStyle(element!, null);
    const matrix = style['transform'] || style.webkitTransform || style.transform;
    // No transform property. Simply return 0 values.
    if (matrix === 'none' || typeof matrix === 'undefined') {
      return {
        x: 0,
        y: 0,
        z: 0
      };
    }

    // Can either be 2d or 3d transform
    const matrixType = matrix.includes('3d') ? '3d' : '2d';
    const temp = matrix.match(/matrix.*\((.+)\)/)!;
    const matrixValues = temp[1].split(', ');

    // 2d matrices have 6 values
    // Last 2 values are X and Y.
    // 2d matrices does not have Z value.
    if (matrixType === '2d') {
      return {
        x: matrixValues[4],
        y: matrixValues[5],
        z: 0
      }
    }

    // 3d matrices have 16 values
    // The 13th, 14th, and 15th values are X, Y, and Z
    if (matrixType === '3d') {
      return {
        x: matrixValues[12],
        y: matrixValues[13],
        z: matrixValues[14]
      }
    }
  }
  getAngleValues(element: any) {
    const style = window.getComputedStyle(element!, null);
    const tr = style['transform'] || style.webkitTransform || style.transform;
    let values: any = tr.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a * a + b * b);

    // arc sin, convert from radians to degrees, round
    // DO NOT USE: see update below
    var sin = b / scale;
    var angle = Math.round(Math.asin(sin) * (180 / Math.PI));
    return angle;
  }

  onHandleSelectCard(e: any) {
    // console.log("card is clicked");
    const parentDom = e.target.closest('.fcard');
    const fcards = document.querySelectorAll('.fcard');
    fcards.forEach(element => {
      element.classList.add('opacity-0');
      element.classList.remove('pe-auto')
      element.classList.add('pe-none')
    })

    parentDom.classList.add('opacity-1');
    parentDom.classList.add('selectedCard');
    parentDom.classList.remove('pe-none')
    parentDom.classList.add('pe-auto')
    setTimeout(() => {
      const docWidth = document.body.getBoundingClientRect();
      if (docWidth.width <= 575) {
        const cardContentDom = document.querySelector('.card-content');
        (cardContentDom! as HTMLDivElement).style.height = '';
      }
      parentDom.setAttribute('style', 'opacity : 1; transition: all 1s;');
      this.isRefresh = true;
    }, 1500);
    this.isRefresh = true;

  }
  onResetPick() {
    // console.log(this.isRefresh);

    const expandedFabs = document.querySelectorAll('.expanded-fab');
    expandedFabs.forEach(element => {
      console.log(element.classList.contains('opacity-0'));
      if (element.classList.contains('opacity-0')) {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-1')
      } else {
        element.classList.remove('opacity-1');
        element.classList.add('opacity-0')
      }
    });
  }
  onClickLightning() {
    console.log("lightning")
  }
  onClickRefresh() {
    console.log("Refresh")
    if (this.isRefresh) {
      this.router.navigate(['/game/pick']);
    }
  }
  onClickTurning() {
    console.log("Turning")
  }
}
