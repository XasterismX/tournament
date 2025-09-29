import {Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";
import {Tournament} from "../../tournaments/entities/tournament.entity";

@Entity()
export class Duel {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    @ManyToOne(type => User, (user) => user.id)
    winner_id: User;
    @ManyToOne(type => User, (user) => user.id)
    loser_id: User;
    @OneToOne(type => Tournament, (tournament) => tournament.id)
    tournament_id: Tournament;
}