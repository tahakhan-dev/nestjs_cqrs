import { BaseEntity } from '../../../entitiesList/base.entity';
import { Entity, Column } from 'typeorm';


@Entity({ name: 'voucher' })
export class VoucherEntity extends BaseEntity {

    @Column({ name: 'consumer_id', nullable: false })
    consumerId: string;

    @Column({ name: 'voucher_id', nullable: false })
    voucherId: string;

    @Column({ name: 'account_id', nullable: false })
    accountId: number;

    @Column({ name: 'vch_type', nullable: false })
    vchType: number;

    @Column({ name: 'amount', type: 'decimal', precision: 10, scale: 2, nullable: false })
    amount: number;

    @Column({ name: 'vch_currency', nullable: true, default: 'PKR' })
    vchCurrency: string;

    @Column({ name: 'category_id', nullable: false })  //The precision option specifies the total number of digits (including both the integral part and the decimal part) that the field can store, and the scale option specifies the number of digits that can be stored in the decimal part (i.e., the number of digits to the right of the decimal point).
    categoryId: number;

    @Column({ name: 'custom_category_id', nullable: true })
    customCategoryId: number;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;

    @Column({ name: 'labels', default: true })
    labels: string;

    @Column({ name: 'from_account', nullable: true })
    fromAccount: string;

    @Column({ name: 'to_account', nullable: true })
    toAccount: string;

    @Column({ name: 'vch_week', nullable: false })
    vchWeek: number;

    @Column({ name: 'vch_month', nullable: false })
    vchMonth: number;

    @Column({ name: 'vch_year', nullable: false })
    vchYear: number;

    @Column({ name: 'event_id', nullable: true })
    eventId: string;

    @Column({ name: 'is_atm', type: 'boolean', default: false, nullable: false })
    isAtm: boolean;

    @Column({ name: 'is_goal', type: 'boolean', default: false, nullable: false })
    isGoal: boolean;

    @Column({ name: 'is_sync', type: 'boolean', default: true, nullable: false })
    isSync: boolean;

    @Column({ name: 'vch_ref_id', nullable: true })
    vchRefId: string;

    @Column({ name: 'fc_currency', nullable: true })
    fcCurrency: string;

    @Column({ name: 'fc_rate', type: 'decimal', nullable: true, precision: 10, scale: 2 })
    fcRate: number;


    @Column({ name: 'record_created_on', type: 'datetime' })
    recordCreatedOn: Date;

    @Column({ name: 'record_updated_on', type: 'datetime', nullable: true })
    recordUpdatedOn: Date;

    @Column({ name: 'deleted_on', type: 'datetime', nullable: true })
    deletedOn: Date;


}
