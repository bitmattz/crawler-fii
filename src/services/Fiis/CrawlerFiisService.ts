import Fiis from "../../models/Fiis";
import { getRepository } from "typeorm";
import puppeteer from "puppeteer";
import CreateFiisService from "./CreateFiisService";
import AppError from "../../errors/AppError";


class CrawlerFiisService{
    public async execute(): Promise<String>{


        function textToNumber(text: string): number{
            return Number(text.trim().replace("R$","").replace('%',"").replace(",","."))
        }


        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://www.fundsexplorer.com.br/ranking', {waitUntil: 'networkidle0'});
        await page.waitForSelector('tbody');


        const html = await page.evaluate(() => {
            let trs:String[] | null = [];
            let tbody = document.querySelector("tbody");
            // @ts-ignore: Unreachable code error
            Array.from(tbody.querySelectorAll("tr")).forEach(tr => {          
              let tds: String[] = [];
              Array.from(tr.querySelectorAll("td")).forEach(td => {
    
                tds?.push(td.innerText);
              });
              // @ts-ignore: Unreachable code error
              trs.push(tds);
            });
            return trs;
            
        });


        await browser.close();
        html.map(fii => async ()=>{
            const newFii:Fiis = new Fiis();
            
            newFii.codigo = fii[0];
            newFii.setor = fii[1];
            newFii.preco_atual = textToNumber(fii[2]);
            newFii.liquidez_diaria = textToNumber(fii[3]);
            newFii.dividendo = textToNumber(fii[4]);
            newFii.dividend_yield = textToNumber(fii[5]);
            newFii.variacao_preco = textToNumber(fii[13]);
            newFii.rentabilidade_periodo = textToNumber(fii[14]);
            newFii.rentabilidade_acumulada = textToNumber(fii[15]);
            newFii.patrimonio_liquido = textToNumber(fii[16]);
            newFii.vpa = textToNumber(fii[17]);
            newFii.p_vpa = textToNumber(fii[18]);
            newFii.dy_patrimonial = textToNumber(fii[19]);
            newFii.variacao_patrimonial = textToNumber(fii[20]);
            newFii.vacancia_fisica = textToNumber(fii[23]);
            newFii.vacancia_financeira = textToNumber(fii[24]);
            newFii.quantidade_de_ativos = textToNumber(fii[25]);
            const createFii = new CreateFiisService();
            const fiisRepository = getRepository(Fiis);

            const fiis = await fiisRepository.findOne({
              where: {
                  codigo: newFii.codigo
              }
            });
  
            if(fiis){
                throw new AppError('Fii já cadastrado',400);
            }
            
            createFii.execute(newFii);
    
        });

        return "Crawling realizado com sucesso";
        
    }
}
export default CrawlerFiisService;
