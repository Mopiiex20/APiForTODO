import { Controller, Get, Post, Req, Put, Delete, UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { Request } from 'express'
import { AuthGuard } from '@nestjs/passport';


@Controller('content')
export class ContentController {
    constructor(private readonly contentService: ContentService) { }

    @Get()
    findAll(): any {
        return this.contentService.findAll();
    }

    // @Get('/id/:id')
    // findOne(@Req() req: Request): any {
    //     return this.booksService.findOne(req);
    // }

    @Get('/:userid')
    findUserTODOs(@Req() req: Request): any {
        return this.contentService.findUserTODOs(req);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    updatBook(@Req() req: Request): any {
        return this.contentService.update(req);
    }

    @Delete('/:id')
    deleteBook(@Req() req: Request): any {
        return this.contentService.delete(req);
    }
    // @UseGuards(AuthGuard('jwt'))
    @Post()
    postTODO(@Req() req: Request): any {
        return this.contentService.postTODO(req);
    }
}
