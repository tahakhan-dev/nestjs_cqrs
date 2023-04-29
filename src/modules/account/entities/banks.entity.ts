import { BaseEntity } from '../../../entitiesList/base.entity';
import { Entity, Column } from 'typeorm';


@Entity({ name: 'banks' })
export class BanksEntity extends BaseEntity {

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'short_form', nullable: false })
    shortFrom: string;

    @Column({ name: 'region', nullable: false })
    region: string;

    @Column({ name: 'country', nullable: false })
    country: string;

}
