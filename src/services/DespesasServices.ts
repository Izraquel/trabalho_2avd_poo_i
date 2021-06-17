import { getCustomRepository } from 'typeorm'
import { DespesasRepository } from '../repositories/DespesasRepository'


interface IDespesasCreate {
    dataCompra: string, 
    localCompra: string, 
    valor: number,
    idResponsavel: string
}

interface IDespesasShow {
    id: string
}

interface IDespesasUpdate {
    dataCompra: string
    localCompra: string
    valor: number
    idResponsavel: string

}

class DespesasServices {
    async create({ dataCompra, localCompra, valor, idResponsavel }: IDespesasCreate) {
        const despesasRepository = getCustomRepository(DespesasRepository)

       const despesas = await despesasRepository.create({ 
           dataCompra, 
           localCompra, 
           valor, 
           idResponsavel  
        })

        //console.log(despesas);


        await despesasRepository.save(despesas)        
        return despesas

        
    }

    async index() {
        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.find( {
            relations: ["responsavel"]
        })

        return despesas
    }

    async show({id}: IDespesasShow) {
        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.findOne(id, {
            relations: ["responsavel"]
        })
         
        if(!despesas) {
            throw new Error('Este Id não existe!')
        }

        //console.log(despesas);
        
        return despesas
    }

    async delete({id}: IDespesasShow) {
        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.findOne({id})

        if(!despesas) {
            throw new Error('Este Id não existe!')

        } return await despesasRepository.delete({id})
    }


    async update(id, {dataCompra, localCompra, valor, idResponsavel}: IDespesasUpdate) {
        const despesasRepository = getCustomRepository(DespesasRepository)
        let despesas = await despesasRepository.findOne({id})

        if(!despesas) {
            throw new Error('Este Id não existe!')
        }

        await despesasRepository.update(id, {
            dataCompra, 
            localCompra, 
            valor, 
            idResponsavel
        })

        despesas = await despesasRepository.findOne({})

        return despesas
    }

}

export { DespesasServices }