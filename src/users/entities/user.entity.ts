import {Column, Entity, Index, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
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
    @OneToMany(() => Duel, (duel) => duel.id)
    @JoinColumn({ name: "duel_won_id" })
    duels_won: Duel[]
    @OneToMany(() => Duel, (duel) => duel.id)
    @JoinColumn({ name: "duel_lose_id" })
    duels_lose: Duel[]
    @Column({default:0})
    tournament_played: number
    @ManyToMany(() => Tournament, (tournament) => tournament.id)
    @JoinColumn()
    tournaments: Tournament[];

}