import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "src/features/users/entities/user.entity";
import { Environment } from "src/features/environments/entities/environment.entity";

@Entity("reservation")
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  start: string;

  @Column({ type: "time" })
  end: string;

  @ManyToOne(() => Environment, env => env.reservations, {
    nullable: false,
    onDelete: "CASCADE",
  })
  environment: Environment;

  @ManyToOne(() => User, user => user.reservations, {
    nullable: false,
    onDelete: "CASCADE",
  })
  user: User;
}