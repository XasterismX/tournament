import {Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";


@Entity()
export class Tournament {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({nullable: false})
    name: string;
    @Column()
    status: string;
    @OneToOne(type => User, (user) => user.id)
    winner: User
    @ManyToMany(type => User, (user) => user.id)
    @JoinTable()
    users: User[];
}