// src/init/init.controller.ts

import { Controller, Get } from '@nestjs/common';
import { InitService } from './init.service';

@Controller('init')
export class InitController {
  constructor(private readonly initService: InitService) {}

  @Get('initialize')
  async initializeData() {
    try {
      await this.initService.initializeData();
      return { message: 'Data initialized successfully' };
    } catch (error) {
      return { error: 'Failed to initialize data', details: error.message };
    }
  }
}
