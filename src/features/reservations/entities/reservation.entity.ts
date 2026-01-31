import {Entity, Column, PrimaryGeneratedColumn, 
    ManyToOne} from "typeorm";
import { User } from "src/features/users/entities/user.entity";
import { Environment } from "src/features/environments/entities/environment.entity";

@Entity("reservation")
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    start: string;

    @Column()
    end: string;

    @ManyToOne(() => Environment, environment => environment.reservations, {
        nullable: false,
        onDelete: "CASCADE"
    })
    environment: Environment;

    @ManyToOne(() => User, user => user.reservations, {
        nullable: false,
        onDelete: "CASCADE",

    })
    user: User;
}