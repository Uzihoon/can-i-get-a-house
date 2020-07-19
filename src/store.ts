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
        title: "금천구 매물",
      },
    ],
  };

  getStore<T extends keyof State>(key: T): State[T] {
    return this.state[key];
  }
}

module.exports = Store;
