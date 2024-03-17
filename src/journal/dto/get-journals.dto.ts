import { ApiProperty } from '@nestjs/swagger';
import { JournalsAPI } from '../interface/journal.interface';
import { CreateJournalDto } from './create-journals.dto';

export class GetJournalsDto implements JournalsAPI {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateJournalDto] })
  items: Array<CreateJournalDto>;
}
