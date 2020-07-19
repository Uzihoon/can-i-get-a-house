const getForSaleHouse = require("./api");
const createIssue = require("./github");
const formatDate = require("./util");
const Store = require("./store");

class Controller {
  private store: typeof Store;

  constructor() {
    this.store = new Store();
  }

  async init() {
    const areaList = this.store.getStore("areaList");
    const option = this.store.getStore("option");
    const saleList: string[] = [];
    await Promise.all(
      areaList.map(async (area: any) => {
        const param = { ...option, ...area };
        const data = await getForSaleHouse(param);
        const title = `## ${area.title} 매물 리스트`;
        const sales: string[] = [];
        if (data && data.length > 0) {
          data.map((sale: any) => {
            sales.push(
              `
            - 아파트 이름 : ${sale.complexName}

            - 아파트 년식 : ${
              new Date().getFullYear() - +sale.completionYearMonth.slice(0, 4)
            } 년

            - 최소 매물 가격 : ${+sale.minDealPrice / 10000} 억

            - 최대 매물 가격 : ${+sale.maxDealPrice / 10000} 억

            - 세대수 : ${sale.totalHouseholdCount}

            - 전체 동 개수 : ${sale.totalDongCount}

            - 매물 개수 : ${sale.dealCount}
            ---
            `
            );
          });
        }
        saleList.push(`${title} ${sales.join("\n")}`);
      })
    );
    const body = saleList.join("\n");
    const title = `${formatDate()} 일자 매물 정보`;
    createIssue(title, body);
  }

  async run() {
    const data = await this.init();
  }
}

const controller = new Controller();

controller.run();
