import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('responsaveis')
class Responsavel {
    @PrimaryColumn()
    id: string;

    @Column()
    nomeResponsavel: string;

    @Column()
    telefone: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Responsavel }