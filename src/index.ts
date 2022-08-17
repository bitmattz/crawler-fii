import CrawlerFiis from "./services/Fiis/CrawlerFiisService";
export default async function index(){

  const crawler = new CrawlerFiis();

  await crawler.execute();

  
}

