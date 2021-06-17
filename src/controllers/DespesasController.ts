import { Request, Response } from 'express'
import { DespesasServices } from '../services/DespesasServices'

class DespesasController {

    async create(req: Request, res: Response) {
        const { dataCompra, localCompra, valor, idResponsavel} = req.body
        const despesasServices = new DespesasServices()

        try { 
            const despesas = await despesasServices.create({ 
                dataCompra, 
                localCompra, 
                valor, 
                idResponsavel
            })
            return res.json(despesas)
        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    }

    async index(req: Request, res: Response) {
        const despesasServices = new DespesasServices()

        try { 
            const despesas = await despesasServices.index()
            return res.json(despesas)
            
        } catch (err) {
            return res 
                .status(400)
                .json({ message: err.message})
        }
    }

    async show(req: Request, res: Response) {
        const despesasServices = new DespesasServices()
        const {id} = req.params

        try {
            const despesas = await despesasServices.show({id})
            return res.json(despesas)

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    }

    async delete(req: Request, res: Response) {
        const despesasServices = new DespesasServices()
        const {id} = req.params

       // const id = req.params.id

        try {
            await despesasServices.delete({id})
            return res.json({message: 'O Id foi deletado com sucesso'})

        } catch (err) {
            return res
                .status(400)
                .json({message: err.message})
        }
    }

    async update(req: Request, res: Response) {
        const despesasServices = new DespesasServices()
        const {id} = req.params
        const { dataCompra, localCompra, valor, idResponsavel} = req.body

        try {
            const despesas = await despesasServices.update(id, {
                dataCompra, 
                localCompra, 
                valor, 
                idResponsavel
            })
        } catch (err) {
            return res  
                .status(400)
                .json({ message: err.message})
        }
    }
}

export { DespesasController }