const axios = require("axios");
const { stringify } = require("query-string");

const url = "https://new.land.naver.com/api/complexes/single-markers/2.0";

interface Param {
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
  leftLon: number;
  rightLon: number;
  topLat: number;
  bottomLat: number;
  title: string;
}

interface Data {
  markerId: string;
  markerType: string;
  latitude: number;
  longitude: number;
  complexName: string; // 아파트 이름
  realEstateTypeCode: "APT";
  realEstateTypeName: "아파트";
  completionYearMonth: string; // 준공 년월
  totalDongCount: number; // 전체 동 개수
  totalHouseholdCount: number; // 전체 세대수
  floorAreaRatio: number;
  minDealUnitPrice: number; // 평당 최소 금액
  maxDealUnitPrice: number; // 평당 최대 금액
  minLeaseUnitPrice: number; // 전세 평당 최소 금액
  maxLeaseUnitPrice: number; // 전세 평당 최대 금액
  minLeaseRate: number;
  maxLeaseRate: number;
  minArea: string; // 최소 면전
  maxArea: string; // 최대 면적
  minDealPrice: number; // 최소 매물 금액
  maxDealPrice: number; // 최대 매물 금액
  minLeasePrice: number; // 최소 전세 매물 금액
  maxLeasePrice: number; // 최대 전세 매물 금액
  minRentPrice: number; // 최소 월세 금액
  maxRentPrice: number; // 최대 월세 금액
  minShortTermRentPrice: number;
  maxShortTermRentPrice: number;
  isDealShown: boolean;
  priceCount: number; // 매물당 금액 개수
  representativeArea: number;
  medianDealUnitPrice: number;
  medianLeaseUnitPrice: number;
  medianLeaseRate: number;
  medianDealPrice: number;
  representativePhoto: string; // 이미지 주소 url
  photoCount: number;
  dealCount: number; // 매물 개수
  leaseCount: number;
  rentCount: number;
  shortTermRentCount: number;
  totalArticleCount: number;
  existPriceTab: boolean;
}
async function getForSaleHouse(param: Param) {
  try {
    const { data } = await axios.get(`${url}?${stringify(param)}`, {
      headers: { "content-type": "application/json" },
    });

    return data as Data[];
  } catch (error) {}
}

export {};

module.exports = getForSaleHouse;
