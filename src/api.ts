import axios from "axios";
import { stringify } from "query-string";
import { Area, Option } from "./store";

const url = "https://new.land.naver.com/api/complexes/single-markers/2.0";

interface Param extends Area, Option {}

export async function getForSaleHouse(param: Param) {
  try {
    const { data } = await axios.get(`${url}?${stringify(param)}`, {
      headers: { "content-type": "application/json" },
    });

    return data;
  } catch (error) {}
}
