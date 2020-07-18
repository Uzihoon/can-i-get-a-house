import Store from "./store";
import getForSaleHouse from "./api";
import { formatDate } from "./util";
import createIssue from "./github";

class Controller {
  private store: Store;

  constructor() {
    this.store = new Store();
  }

  init() {
    const areaList = this.store.getStore("areaList");
    const option = this.store.getStore("option");
    const saleList = areaList.map(async (area) => {
      const param = { ...option, ...area };
      const data = await getForSaleHouse(param);
      const title = `## ${area.title} 매물 리스트`;
      const sales: string[] = [];

      if (data && data.length > 0) {
        data.map((sale) => {
          sales.push(
            `
            - 아파트 이름 : ${sale.complexName}

            - 아파트 년식 : ${
              new Date().getFullYear() - +sale.completionYearMonth.slice(0, 4)
            } 년

            - 최소 매물 가격 : ${sale.minDealPrice / 10000} 억

            - 최대 매물 가격 : ${sale.maxDealPrice / 10000} 억

            - 세대수 : ${sale.totalHouseholdCount}

            - 전체 동 개수 : ${sale.totalDongCount}

            - 매물 개수 : ${sale.dealCount}
            ---
            `
          );
        });
      }
      return `${title} ${sales.join("\n")}`;
    });

    const body = saleList.join("\n");
    const title = `${formatDate()} 일자 매물 정보`;
    createIssue(title, body);
  }
}

const controller = new Controller();

controller.init();
