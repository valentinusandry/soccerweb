import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'Barcelona',
    AwayTeam:'Manchester United',HomeScore:3,AwayScore:2,
    RefName:'Cristian Ronaldo',notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'Juventus',
    AwayTeam:'PSG',HomeScore:4,AwayScore:2,
    RefName:'Lionel Messi',notes:'Pertandingan Pause'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'Manchester City',
    AwayTeam:'Chelsesa',HomeScore:2,AwayScore:4,
    RefName:'Romelo Lukaku',notes:'Pertandingan Sengit'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'Real Madrid',
    AwayTeam:'Liverpool',HomeScore:2,AwayScore:4,
    RefName:'Mohammad Salah',notes:'Pertandingan 11 Kartu Merah'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'Atletico Madrid',
    AwayTeam:'Bayern Munchen',HomeScore:2,AwayScore:3,
    RefName:'Lewan Dowski',notes:'Pertandingan Sangat Baik'},
]

export const TEAMS:Team [] = [
    {id:1,name:'Barcelona',type:'Over 30'},
    {id:2,name:'Manchester United',type:'Over 30'},
    {id:3,name:'PSG',type:'Over 30'},
    {id:4,name:'Juventus',type:'Over 30'},
    {id:5,name:'Chelsesa',type:'Over 30'},
    {id:6,name:'Liverpool',type:'Over 30'},
]