#!/bin/sh
DATABASE=d51k51uj7ivh2n
USERNAME=uypyemgoxxajir 
HOSTNAME=ec2-54-243-203-141.compute-1.amazonaws.com 
export PGPASSWORD=ui-xdNhVyUFsYmsHKrwMNJUnjF

psql -h $HOSTNAME -U $USERNAME $DATABASE << EOF
delete from "traktor"."price";
delete from "traktor"."daily";
delete from "traktor"."yearly";
delete from "traktor"."global_prices";
delete from "traktor"."crop_variety";
delete from "traktor"."crop";
delete from "traktor"."market";
EOF
psql -h $HOSTNAME -U $USERNAME $DATABASE < db_data.sql
