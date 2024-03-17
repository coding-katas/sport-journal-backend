import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { getCollection, getItem } from '../../utils/utils';
import { JournalRepositoryService } from './journal-repository.service';
import { journals } from '../db/journal.data';
import { JournalsAPI, Journal } from '../interface/journal.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class JournalRepositoryMemoryService extends JournalRepositoryService {
  journals = journals;

  insert(journal: Journal): Observable<Journal> {
    let { id } = journal;
    id = id ? id : randomUUID();

    return this.upsert(id, journal);
  }

  private upsert(id, journal: Journal): Observable<Journal> {
    const line = this.journals.findIndex((item) => item.id === id);
    const newItem = { ...journal, id };

    if (line >= 0) {
      this.journals[line] = newItem;
    } else {
      this.journals = [...this.journals, newItem];
    }

    return of(getItem(id, this.journals));
  }

  update(id: string, journal: Journal): Observable<Journal> {
    return this.upsert(id, journal);
  }

  delete(id: string): boolean {
    this.journals = this.journals.filter((item) => item.id !== id);
    return true;
  }

  getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<JournalsAPI> {
    return of(getCollection(this.journals, search, page, pageSize));
  }

  getOne(id: string): Observable<Journal> {
    return of(getItem(id, this.journals));
  }
}
