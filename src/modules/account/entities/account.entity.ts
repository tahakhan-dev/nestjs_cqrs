import { BaseEntity } from '../../../entitiesList/base.entity';
import { Entity, Column } from 'typeorm';


@Entity({ name: 'accounts' })
export class AccountsEntity extends BaseEntity {

    @Column({ name: 'consumer_id', nullable: false })
    consumerId: string;

    @Column({ name: 'account_type', nullable: false })
    accountType: number;

    @Column({ name: 'account_id', nullable: false })
    accountId: string;

    @Column({ name: 'title', nullable: false })
    title: string;

    @Column({ name: 'account_number', nullable: true })
    accountNumber: string;

    @Column({ name: 'account_balance', type: 'decimal', precision: 10, scale: 2, nullable: false })  //The precision option specifies the total number of digits (including both the integral part and the decimal part) that the field can store, and the scale option specifies the number of digits that can be stored in the decimal part (i.e., the number of digits to the right of the decimal point).
    accountBalance: number;

    @Column({ name: 'account_currency', default: 'PKR' })
    accountCurrency: string;

    @Column({ name: 'bank_id', nullable: false })
    bankId: number;

    @Column({ name: 'include_in_networth', type: 'boolean', default: true })
    includeInNetworth: boolean;

    @Column({ name: 'record_created_on', type: 'datetime' })
    recordCreatedOn: Date;

    @Column({ name: 'record_updated_on', type: 'datetime', nullable: true })
    recordUpdatedOn: Date;


}
