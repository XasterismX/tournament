import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({nullable:false,})
    name: string;
    @Column({nullable:false, default: 100})
    @Index()
    elo: number
    @Column({default:0})
    duels_won: number
    @Column({default:0})
    tournament_played: number
}