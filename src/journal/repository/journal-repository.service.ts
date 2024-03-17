import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JournalsAPI, Journal } from '../interface/journal.interface';

@Injectable()
export abstract class JournalRepositoryService {
  abstract getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<JournalsAPI>;
  abstract getOne(id: string): Observable<Journal>;
  abstract insert(journal: Journal): Observable<Journal>;
  abstract update(id: string, journal: Journal): Observable<Journal>;
  abstract delete(id: string): boolean;
}
