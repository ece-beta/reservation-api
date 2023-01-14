import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreatedSuccess } from '../../libs/response/status-code/created.success';
import { OkSuccess } from '../../libs/response/status-code/ok.success';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'user의 정보를 반환합니다.',
  })
  @ApiOperation({ summary: 'user의 정보를 조회합니다.' })
  getUserOne(@Param() id: number) {
    return this.userService.getUserOne(id);
  }

  @Post(':id')
  @ApiResponse({
    status: 201,
    description: 'user가 생성되었습니다.',
    type: CreatedSuccess,
  })
  @ApiOperation({ summary: 'user의 정보를 생성합니다.' })
  createUser(@Param() id: number) {
    return this.userService.createUser(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'user가 삭제됐습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'user의 정보를 삭제합니다.' })
  deleteUser(@Param() id: number) {
    return this.userService.deleteUser(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'user의 정보가 갱신되었습니다.',
    type: OkSuccess,
  })
  @ApiOperation({ summary: 'user의 고유 번호를 교체합니다.' })
  patchUser(@Param() id: number) {
    return this.userService.patchUser(id);
  }
}
