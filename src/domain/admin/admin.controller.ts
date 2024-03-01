import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  UseGuards,
  Delete,
  Patch,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { InitiateAdminDto } from './dto/initiate.dto';
import { AuthGuard } from 'src/share/common/guards/auth.guard';
import { RoleGuard } from 'src/share/common/guards/role.guard';
import { Roles } from 'src/share/common/decorators/role';
import { Role } from 'src/share/common/enums/role.enum';
import { CreateUserDto } from './dto/user_crud/createUser.dto';
import { DeleteUserDto } from './dto/user_crud/delete-user.dto';
import {
  UpdateUserDtoBody,
  UpdateUserDtoParams,
} from './dto/user_crud/update-user.dto';
import { CreateGroupDto } from './dto/group_crud/create-group.dto';
import { DeleteGroupDto } from './dto/group_crud/delete-group.dto';
import { CreateSectionDto } from 'src/modules/section/dto/create-section.dto';
import {
  UpdateGroupDtoBody,
  UpdateGroupDtoBodyParams,
} from './dto/group_crud/update-group.dto';
import { SectionService } from 'src/modules/section/section.service';
import {
  UpdateSectionBodyDto,
  UpdateSectionDtoBodyParams,
} from 'src/modules/section/dto/update-section.dto';
import { DeleteSectionDto } from 'src/modules/section/dto/delete-section.dto';
import { TopicService } from 'src/modules/topic/topic.service';
import { CreateTopicDto } from 'src/modules/topic/dto/create-topic.dto';
import { ListTopicDto } from 'src/modules/topic/dto/topic-list.dto';
import { UpdateTopicBodyDto, UpdateTopicDtoBodyParams } from 'src/modules/topic/dto/update-topic.dto';
import { DeleteTopicDto } from 'src/modules/topic/dto/delete-topic.dto';

@Controller({ path: 'admin', version: '1' })
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly sectionService: SectionService,
    private readonly topicService: TopicService,
  ) {}

  @Post('/create/admin')
  async createProduct(@Body() body: InitiateAdminDto) {
    return await this.adminService.createAdmin(body);
  }

  /////////// USER crud //////////

  @Post('/user/create')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async createUser(@Body() body: CreateUserDto) {
    return await this.adminService.createUser(body);
  }

  @Get('/user/list')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async userList() {
    return await this.adminService.userList();
  }

  @Delete('/user')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async deleteUser(@Query('username') username: DeleteUserDto) {
    return await this.adminService.deleteUser(username);
  }

  @Patch('/user')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async updateUser(
    @Query('username') username: UpdateUserDtoParams,
    @Body() body: UpdateUserDtoBody,
  ) {
    return await this.adminService.updateUser(username, body);
  }

  /////////// GROUP crud //////////

  @Post('/group/create')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async createGroup(@Body() body: CreateGroupDto) {
    return await this.adminService.createGroup(body);
  }

  @Get('/group/list')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async groupList() {
    return await this.adminService.groupList();
  }

  @Patch('/group')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async updateGroup(
    @Query('name') name: UpdateGroupDtoBodyParams,
    @Body() body: UpdateGroupDtoBody,
  ) {
    return await this.adminService.updateGroup(name, body);
  }

  @Delete('/group')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async deleteGroup(@Query('name') name: DeleteGroupDto) {
    return await this.adminService.deleteGroup(name);
  }

  /////////// SECTION crud //////////

  @Post('/section/create')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async createSection(@Body() body: CreateSectionDto) {
    return await this.sectionService.createSection(body);
  }

  @Get('/section/list')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async sectionList() {
    return await this.sectionService.sectionList();
  }

  @Patch('/section')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async updateSection(
    @Query('name') name: UpdateSectionDtoBodyParams,
    @Body() body: UpdateSectionBodyDto,
  ) {
    return await this.sectionService.updateSection(name, body);
  }

  @Delete('/section')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async deleteSection(@Query('name') name: DeleteSectionDto) {
    return await this.sectionService.deleteSection(name);
  }

  /////////// TOPIC crud //////////

  @Post('/topic/create')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async createTopic(@Body() body: CreateTopicDto) {
    return await this.topicService.createTopic(body);
  }

  @Get('/topic/list')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async topicList(@Query('sort') sort: ListTopicDto) {
    return await this.topicService.topicList(sort);
  }

  @Patch('/topic')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async updateTopic(
    @Query('name') name: UpdateTopicDtoBodyParams,
    @Body() body: UpdateTopicBodyDto,
  ) {
    return await this.topicService.updateTopic(name, body);
  }

  @Delete('/topic')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async deleteTopic(@Query('name') name: DeleteTopicDto) {
    return await this.topicService.deleteTopic(name);
  }
}
