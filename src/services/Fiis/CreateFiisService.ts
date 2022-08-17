import { getRepository } from "typeorm";
import Fiis from "../../models/Fiis";
import AppError from "../../errors/AppError";

class CreateFiisService{
    public async execute( fii: Fiis): Promise<Fiis>{
        const fiisRepository = getRepository(Fiis);
        const fiis = await fiisRepository.findOne({
            where: {
                codigo: fii.codigo
            }
        });

        if(fiis){
            console.log("fii já cadastrado")
        }
        else{
            await fiisRepository.save(fii);
        }

        return fii;  
    }
}
export default CreateFiisService;