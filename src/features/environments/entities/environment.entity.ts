import { Reservation } from "src/features/reservations/entities/reservation.entity";
import {Entity, Column, PrimaryGeneratedColumn,
    OneToMany} from "typeorm";

@Entity("environment")
export class Environment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    capacity: number;

    @Column()
    photo: string;

    @Column()
    resources: string;

    @Column()
    observation: string;

    @Column()
    opening: string;

    @Column()
    closing: string;

    @Column()
    tittle: string;

    @Column()
    notification: number

    @OneToMany(() => Reservation, reservation => 
        reservation.environment)
    reservations: Reservation[];
}