import { IsNotEmpty, IsString, IsArray, IsDateString, IsMilitaryTime } from "class-validator";

export class CreateSongDTO {

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @IsString()
    readonly artitsts: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;

    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration: Date;

}