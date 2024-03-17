import { ApiPropertyOptional } from '@nestjs/swagger';
import { Journal } from '../interface/journal.interface';

export class CreateJournalDto implements Journal {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  date: string;

  @ApiPropertyOptional()
  exercise: string;

  @ApiPropertyOptional()
  sets: number;

  @ApiPropertyOptional()
  reps: number;
}
