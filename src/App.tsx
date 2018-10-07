import * as React from 'react';
import { Impress, Step } from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';

import flower from './static/flower_bg.png';
import uli from './static/uli.png';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public render() {
    const today = new Date();

    // 距離台北文定天數
    const dateTP = new Date('2019-01-19 12:00:00');
    let diffTP = dateTP.getTime() - today.getTime();
    diffTP = Math.floor(diffTP / (24 * 3600 * 1000));

    // 距離高雄結婚天數
    const dateKH = new Date('2019-02-17 12:00:00');
    let diffKH = dateKH.getTime() - today.getTime();
    diffKH = Math.floor(diffKH / (24 * 3600 * 1000));

    return (
      <div>
        <Impress hint={false}>
          <Step className={'step-bg'} >
            <img src={flower} alt="花牆" style={{ width: '100%', height: 'auto', filter: 'blur(2px) brightness(0.9)' }}/>
            <img src={uli} alt="花牆" style={{
              filter: 'drop-shadow(7px 8px 0px #eee9)',
              height: 'auto',
              left: '50%',
              position: 'absolute',
              transform: 'translateX(-50%)',
              width: '100vw',
            }}/>
            <div className="remain_days left">
              <div>#高雄</div>
              <div>時間：2019.02.17 (日)</div>
              <div>地點：高雄漢來</div>
              <div>距離高雄結婚還有 {diffKH} 天</div>
            </div>
            <div className="remain_days right">
              <div>#台北</div>
              <div>時間：2019.01.19 (六)</div>
              <div>地點：松山 Amba</div>
              <div>距離台北文定還有 {diffTP} 天</div>
            </div>
          </Step>
          <Step data={{z: -3000}}><img src={flower} alt="花牆" style={{ width: '100%', height: 'auto' }}/></Step>
          <Step data={{z: -6000}}><img src={flower} alt="花牆" style={{ width: '100%', height: 'auto' }}/></Step>
          <Step data={{z: 3000, rotateY: 30}}>
            <h1>Taipei</h1>
            <h1>Kaohsiung</h1>
          </Step>
        </Impress>
      </div>
    );
  }
}

export default App;
