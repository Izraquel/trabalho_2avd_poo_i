import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Responsavel } from './Responsavel';

@Entity('despesas')
class Despesa {
    @PrimaryColumn()
    id: string;

    @Column()
    dataCompra: string;

    @Column()
    localCompra: string;

    @Column()
    valor: number;

    @Column()
    idResponsavel: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @JoinColumn({name: 'idResponsavel'})
    @ManyToOne(() => Responsavel) 
    responsavel: Responsavel

    constructor(){
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Despesa }