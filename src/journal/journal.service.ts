import { Injectable } from '@nestjs/common';

import { Observable } from 'rxjs';

import { JournalRepositoryService } from './repository/journal-repository.service';
import { JournalsAPI, Journal } from './interface/journal.interface';

@Injectable()
export class JournalService {
  constructor(private journalRepositoryService: JournalRepositoryService) {}

  getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<JournalsAPI> {
    return this.journalRepositoryService.getAll(search, page, pageSize);
  }

  getOne(id: string): Observable<Journal> {
    return this.journalRepositoryService.getOne(id);
  }

  insert(journal: Journal) {
    return this.journalRepositoryService.insert(journal);
  }

  delete(id: string) {
    return this.journalRepositoryService.delete(id);
  }

  update(id: string, journal: Journal) {
    return this.journalRepositoryService.update(id, journal);
  }
}
