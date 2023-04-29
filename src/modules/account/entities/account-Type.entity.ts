import { BaseEntity } from '../../../entitiesList/base.entity';
import { Entity, Column } from 'typeorm';


@Entity({ name: 'accounts_type' })
export class AccountsTypeEntity extends BaseEntity {

    @Column({ name: 'name', nullable: false })
    name: string;

}
