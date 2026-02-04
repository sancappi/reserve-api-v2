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

  @Column("text", {array: true})
  resources: string[];

  @Column()
  observation: string;

  @Column({ type: "time" })
  opening: string;

  @Column({ type: "time" })
  closing: string;

  @Column()
  title: string;

  @Column()
  notification: number;

  @OneToMany(() => Reservation, reservation => reservation.environment)
  reservations: Reservation[];
}
