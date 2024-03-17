import { Module } from '@nestjs/common';
import { JournalRepositoryService } from './repository/journal-repository.service';
import { JournalRepositoryMemoryService } from './repository/journal-repository-memory.service';
import { JournalController } from './journal.controller';
import { JournalService } from './journal.service';

const repositoryProvider = {
  provide: JournalRepositoryService,
  useClass: JournalRepositoryMemoryService,
};

@Module({
  controllers: [JournalController],
  providers: [JournalService, repositoryProvider],
  exports: [JournalService],
})
export class JournalModule {}
