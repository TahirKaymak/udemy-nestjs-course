import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "tools/dtos/user.dto";
import { UserModel } from "tools/models/user-model";

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) { }
    @Post()
    createUser(@Body() body: UserCreateDto) {
        return this.UserService.createUser(body);
    }

    @Get()
    getAllUsers(): UserModel[] {
        return this.UserService.getAllUser();
    }

@Get(":id")
getUser(@Param() params):UserModel {
    return this.UserService.getUserById(params.id);
}
}