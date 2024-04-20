import { Controller, Post, Get, Put, Delete, Body, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import e from 'express';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) {

    }

    @Post()
    create(@Body() createSong: CreateSongDTO) {
        return this.songsService.create(createSong);
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (ex) {
            throw new HttpException(
                'Internal Server Error',
                HttpStatus.INTERNAL_SERVER_ERROR, { cause: e });
        }
    }

    @Get(":id")
    findOne(@Param('id',
        new ParseIntPipe({
            errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
        })) id: number,
    ) {
        return "fetch song on the based on id";
    }

    @Put(":id")
    update() {
        return "update song on the based on id";
    }

    @Delete(":id")
    delete() {
        return "delete a song on the based on id";
    }

}
