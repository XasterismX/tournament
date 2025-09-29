import {Column, Entity, Index, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Tournament} from "../../tournaments/entities/tournament.entity";
import {Duel} from "../../duels/entities/duel.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({nullable:false})
    name: string;
    @Column({nullable:false, default: 100})
    @Index()
    elo: number
    @OneToMany(type => Duel, (duel) => duel.id)
    duels_won: Duel
    @OneToMany(type => Duel, (duel) => duel.id)
    duels_lose: Duel
    @Column({default:0})
    tournament_played: number
    @ManyToMany(type => Tournament, (tournament) => tournament.id)
    tournaments: Tournament[];

}