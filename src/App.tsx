import idx from 'idx';
import * as React from 'react';
import { Impress, Step } from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';

import ambaLogo from './static/amba_logo-min.png';
import hanLogo from './static/han_logo-min.png';
import landscape from './static/landscape.png';
import uli from './static/uli.png';
import welcome from './static/welcome_wan_yeh-min.png';

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
  public handleRefresh = () => {
    window.location.reload();
  }
  public render() {
    const today = new Date();

    // 距離台北文定天數
    const dateTP = new Date('2019/01/19 12:00:00');
    let diffTP = dateTP.getTime() - today.getTime();
    diffTP = Math.round(diffTP / (24 * 3600 * 1000));

    // 距離高雄結婚天數
    const dateKH = new Date('2019/02/17 12:00:00');
    let diffKH = dateKH.getTime() - today.getTime();
    diffKH = Math.round(diffKH / (24 * 3600 * 1000));

    // 判斷是否橫向
    const orientation = idx(window, _ => _.orientation);

    if (orientation === 0) {
      return (
        <div id="landscape">
          <img src={landscape} alt="螢幕請轉向"/>
          <div>請轉橫向瀏覽，建議使用 Chrome 瀏覽器。</div>
          <div className="refresh" onClick={this.handleRefresh}>重新整理</div>
        </div>
      );
    }

    const hintMessage = <div>請使用 <span>空白鍵</span> 進行瀏覽</div>

    return (
      <div>
        <div id="flower-bg" />
        <Impress hint={true} hintMessage={hintMessage} rootData={{ width: 512 }}>
          <Step id="welcome" className={'step-bg'} data={{rotateX: -15, y: -650, z: -1000}}>
            <img className="img_welcome" src={welcome} alt="Welcome" />
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
                <div>地點：<b>松山 Amba</b></div>
                <div>日期：<b>2019.01.19 (六)</b></div>
                <div>時間：<b>12:00 午宴</b></div>
                <div>宴席：<b>美式自助</b></div>
              </div>
              <div className="btn" onClick={this.handleClickTP}>前往填寫問卷</div>
            </div>
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
                <div>地點：<b>高雄漢來</b></div>
                <div>日期：<b>2019.02.17 (日)</b></div>
                <div>時間：<b>12:00 午宴</b></div>
                <div>宴席：<b>中式圓桌</b></div>
              </div>
              <div className="btn" onClick={this.handleClickKH}>前往填寫問卷</div>
            </div>
          </Step>
          <Step id="uli" className={'step-bg'} data={{scale: 1.5}}>
            <img className="img_uli" src={uli} alt="屋哩" />
          </Step>
        </Impress>
      </div>
    );
  }
}

export default App;
