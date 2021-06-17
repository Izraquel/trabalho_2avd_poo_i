import { Request, Response } from "express"
import { ResponsaveisServices } from "../services/ResponsaveisServices"

class ResponsaveisController {

   async create(req: Request, res: Response) {
        const { nomeResponsavel, telefone } = req.body
        const responsaveisServices = new ResponsaveisServices()

        try { 
            const responsaveis = await responsaveisServices.create({ nomeResponsavel, telefone })
            return res.json(responsaveis)
        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    }

    async index(req: Request, res: Response) {
        const responsaveisServices = new ResponsaveisServices()

        try {
            const responsaveis = await responsaveisServices.index()
            return res.json(responsaveis)

            console.log(responsaveis);


        } catch (err) {
            return res 
                .status(400)
                .json({ message: err.message})
        }
        
    }

}

export { ResponsaveisController }