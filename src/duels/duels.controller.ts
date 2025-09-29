import { Controller } from '@nestjs/common';
import { DuelsService } from './duels.service';

@Controller('duels')
export class DuelsController {
  constructor(private readonly duelsService: DuelsService) {}
}
