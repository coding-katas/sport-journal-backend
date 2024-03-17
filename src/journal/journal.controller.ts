import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { QueryApi, ParamQueryId } from 'src/utils/interfaces/query.interface';
import { Public } from 'src/auth/public.decorator';
import { JournalService } from './journal.service';
import { GetJournalsDto } from './dto/get-journals.dto';
import { CreateJournalDto } from './dto/create-journals.dto';
import { JournalsAPI, Journal } from './interface/journal.interface';

@ApiTags('Journal')
@Controller('journal')
export class JournalController {
  constructor(private journalService: JournalService) {}
  /*
  // Secured
  @ApiResponse({ status: 200, type: GetJournalsDto })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'filter', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  getAll(@Query() query: QueryApi): Observable<JournalsAPI> {
    const { search, filter, page, pageSize } = query;

    return this.journalService.getAll(search || filter, page, pageSize);
  }

  @ApiResponse({ status: 200, type: CreateJournalDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  getOne(@Param() params: ParamQueryId): Observable<Journal> {
    return this.journalService.getOne(params['id']);
  }

  @ApiResponse({ status: 201, type: CreateJournalDto })
  @Post()
  insert(@Body() newJournal: CreateJournalDto): Observable<Journal> {
    return this.journalService.insert(newJournal);
  }

  @ApiResponse({ status: 200, type: CreateJournalDto })
  @ApiParam({ name: 'id' })
  @Put(':id')
  update(
    @Param() params: ParamQueryId,
    @Body() newJournal: CreateJournalDto,
  ): Observable<Journal> {
    return this.journalService.update(params['id'], newJournal);
  }

  @ApiResponse({ status: 200, type: CreateJournalDto })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  delete(
    @Param() params: ParamQueryId,
    @Body() newJournal: CreateJournalDto,
  ): boolean {
    return this.journalService.delete(params['id']);
  }

  */
  @ApiResponse({ status: 200, type: GetJournalsDto })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'filter', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  @Public()
  getAll(@Query() query: QueryApi): Observable<JournalsAPI> {
    const { search, filter, page, pageSize } = query;

    return this.journalService.getAll(search || filter, page, pageSize);
  }

  @ApiResponse({ status: 200, type: CreateJournalDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  @Public()
  getOne(@Param() params: ParamQueryId): Observable<Journal> {
    return this.journalService.getOne(params['id']);
  }

  @ApiResponse({ status: 200, type: CreateJournalDto })
  @Post()
  @Public()
  insert(@Body() newJournal: CreateJournalDto): Observable<Journal> {
    return this.journalService.insert(newJournal);
  }

  @ApiResponse({ status: 200, type: CreateJournalDto })
  @ApiParam({ name: 'id' })
  @Put(':id')
  @Public()
  update(
    @Param() params: ParamQueryId,
    @Body() newJournal: CreateJournalDto,
  ): Observable<Journal> {
    return this.journalService.update(params['id'], newJournal);
  }

  @ApiResponse({ status: 200, type: CreateJournalDto })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  @Public()
  delete(
    @Param() params: ParamQueryId,
    @Body() newJournal: CreateJournalDto,
  ): boolean {
    return this.journalService.delete(params['id']);
  }
}
