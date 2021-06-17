import { ResponsaveisRepository } from '../repositories/ResponsaveisRepository'
import { getCustomRepository } from 'typeorm'

interface IResponsaveisCreate {
    nomeResponsavel: string
    telefone: number
}

class ResponsaveisServices {
    async create({ nomeResponsavel, telefone}: IResponsaveisCreate) {
        const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

        const responsaveis = responsaveisRepository.create({ 
            nomeResponsavel,
            telefone
        })

        await responsaveisRepository.save(responsaveis)        
        return responsaveis
    }

    async index() {
        const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

        const responsaveis = await responsaveisRepository.find()

        return responsaveis
    }
}

export { ResponsaveisServices }