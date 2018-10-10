import * as React from 'react';
import { Impress, Step } from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';

import ambaLogo from './static/amba_logo.png';
import hanLogo from './static/han_logo.png';
import uli from './static/uli.png';
import welcome from './static/welcome_wan_yeh.png';

class App extends React.Component {
  // private steps = ['welcome', 'uli', 'kh', 'tp'];
  constructor(props: any) {
    super(props);
  }
  public handleClickKH = () => {
    window.open('https://www.surveycake.com/s/ZVBw6');
  }
  public handleClickTP = () => {
    window.open('https://www.surveycake.com/s/9PMKx');
  }
  // public handleNext = () => {
  //   const cur = window.location.hash.split('/')[1];
  //   const curIdx = this.steps.findIndex(s => s === cur);
  //   if (curIdx > this.steps.length - 1) {
  //     window.location.href = window.location.origin + `#/${this.steps[0]}`;
  //   } else {
  //     window.location.href = window.location.origin + `#/${this.steps[curIdx + 1]}`;
  //   }
  // }
  public render() {
    const today = new Date();

    // 距離台北文定天數
    const dateTP = new Date('2019-01-19 12:00:00');
    let diffTP = dateTP.getTime() - today.getTime();
    diffTP = Math.round(diffTP / (24 * 3600 * 1000));

    // 距離高雄結婚天數
    const dateKH = new Date('2019-02-17 12:00:00');
    let diffKH = dateKH.getTime() - today.getTime();
    diffKH = Math.round(diffKH / (24 * 3600 * 1000));

    const hintMessage = <div>請使用 <span>空白鍵</span> 進行瀏覽</div>

    return (
      <div>
        <div id="flower-bg" />
        <Impress hint={true} hintMessage={hintMessage}>
          <Step id="welcome" className={'step-bg'} data={{rotateX: -15, y: -650, z: -1000}}>
            <img className="img_welcome" src={welcome} alt="Welcome" />
          </Step>
          <Step id="uli" className={'step-bg'} data={{scale: 1.5}}>
            <img className="img_uli" src={uli} alt="屋哩" />
          </Step>
          <Step id="kh" data={{x: -440, rotateY: 10}}>
            <div className="info">
              <div className="place_title">#高雄</div>
              <div className="remain">
                <div className="days">{diffKH}</div>
                <div className="label">倒數天數</div>
              </div>
              <div className="info_detail">
                <img className="logo" src={hanLogo} alt="漢來logo"/>
                <div>宴席：<b>中式圓桌</b></div>
                <div>日期：<b>2019.02.17 (日)</b></div>
                <div>時間：<b>12:00 午宴</b></div>
                <div>地點：<b>高雄漢來</b></div>
              </div>
              <div className="btn" onClick={this.handleClickKH}>前往填寫問卷</div>
            </div>
          </Step>
          <Step id="tp" data={{x: 340, rotateY: -10}}>
            <div className="info right">
              <div className="place_title">#台北</div>
              <div className="remain">
                <div className="days">{diffTP}</div>
                <div className="label">倒數天數</div>
              </div>
              <div className="info_detail">
                <img className="logo" src={ambaLogo} alt="amba logo"/>
                <div>宴席：<b>美式自助</b></div>
                <div>日期：<b>2019.01.19 (六)</b></div>
                <div>時間：<b>12:00 午宴</b></div>
                <div>地點：<b>松山 Amba</b></div>
              </div>
              <div className="btn" onClick={this.handleClickTP}>前往填寫問卷</div>
            </div>
          </Step>
        </Impress>
      </div>
    );
  }
}

export default App;
