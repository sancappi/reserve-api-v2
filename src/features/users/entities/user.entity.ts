import { Entity, Column, PrimaryGeneratedColumn, 
    OneToMany} from "typeorm";
import { Reservation } from "src/features/reservations/entities/reservation.entity";

export enum UserProfile {
    CLIENT = "client",
    MANAGER = "manager"
}

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;

    @Column({type: "enum", enum: UserProfile})
    profile: UserProfile;

    @OneToMany(() => Reservation, reservation =>
        reservation.user)
    reservations: Reservation[];
}