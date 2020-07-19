export interface Area {
  leftLon: number;
  rightLon: number;
  topLat: number;
  bottomLat: number;
  title: string;
}

export interface Option {
  priceMin: number; // 최소 금액
  priceMax: number; // 최대 금액
  areaMin: number; // 최소 평수
  areaMax: number; // 최대 평수
  oldBuildYears: number; // 아파트 년식
  minHouseHoldCount: number; // 최소 아파트 세대수
  maxHouseHoldCount: number; // 최대 아파트 세대수
  realEstateType: "APT"; // 매물 타입 - 아파트 타입만 조회한다.
  zoom: number;
  cortarNo: number;
  tradeType: string;
  priceType: string;
}

interface State {
  option: Option;
  areaList: Area[];
}

class Store {
  private state: State = {
    option: {
      priceMax: 40000,
      priceMin: 0,
      areaMin: 69.4,
      areaMax: 900000000,
      oldBuildYears: 25,
      minHouseHoldCount: 100,
      maxHouseHoldCount: 2000,
      zoom: 15,
      cortarNo: 1154510300,
      realEstateType: "APT",
      tradeType: "A1",
      priceType: "RETAIL",
    },
    areaList: [
      {
        leftLon: 126.8547309,
        rightLon: 126.9411624,
        topLat: 37.4671074,
        bottomLat: 37.4282325,
        title: "금천구 시흥동",
      },
      {
        leftLon: 126.8646562,
        rightLon: 126.9446504,
        topLat: 37.4978518,
        bottomLat: 37.4589929,
        title: "관악구 신림동",
      },
      {
        leftLon: 126.8024205,
        rightLon: 126.8824147,
        topLat: 37.5432581,
        bottomLat: 37.5044228,
        title: "양천구 신월동",
      },
      {
        leftLon: 126.953504,
        rightLon: 126.9935011,
        topLat: 37.4010247,
        bottomLat: 37.3815727,
        title: "안양시 동안구 (4호선 평촌역)",
      },
      {
        leftLon: 127.0719074,
        rightLon: 127.1519016,
        topLat: 37.3472081,
        bottomLat: 37.308271,
        title: "용인시 수지구 죽전동 (분당선 죽전역)",
      },
      {
        leftLon: 127.004187,
        rightLon: 127.0841812,
        topLat: 37.6460515,
        bottomLat: 37.6072699,
        title: "강북구 번동(월계역 석계역)",
      },
      {
        leftLon: 127.0401501,
        rightLon: 127.1201443,
        topLat: 37.6412941,
        bottomLat: 37.60251,
        title: "노원구 공릉동 (태릉입구역)",
      },
    ],
  };

  getStore<T extends keyof State>(key: T): State[T] {
    return this.state[key];
  }
}

module.exports = Store;
