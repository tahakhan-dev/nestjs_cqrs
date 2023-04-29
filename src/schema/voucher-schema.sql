Revamp 2023

Vouchers (table)

id:							bigint				NN, AI
consumer_id:				varchar(128)		NN
voucher_id:					varchar(128)		NN, PK
vch_type:					int					NN											"Income,Expense,Trasfer"
amount:						decimal(0,20)		NN				default: 0
vch_currency:				vch_currency		NN				
category_id:				int					NN
custom_category_id:			int					nullable
description:				text				nullable
labels:						varchar(200)		nullable
from_account:?				varchar(128)		nullable
to_account:?				varchar(128)		nullable
vch_week:					int					NN
vch_month:					int					NN
vch_year:					int					NN
event_id:					varchar(128)		nullable
is_atm:						boolean				NN				default: false
is_goal:					boolean				NN				default: false	
is_active:					boolean				NN				default: true
is_sync:?					boolean				NN				default: true
vch_ref_id:					varchar(128)		nullable
fc_currency:				varchar(100)		nullable
fc_rate:					decimal(0,4)		nullable
receipt:					????????			nullable
ocr_text:					text				nullable
record_created_on:			DateTime			NN
record_updated_on:			DateTime			NN
server_created_on:			DateTime			NN				default: TimeStamp_current
server_updated_on:			DateTime			NN				default: TimeStamp_current
is_deleted:					boolean				NN				default: 0
deleted_on:					DateTime			NN				default: TimeStamp_current




Categories Table
id name
1
2
3
4
5

Custom Categories

id  consumer_id - name

1 - 890895 - u4598u8905ru9vjkh - Hajj - travel
2
3
4
5