import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController{
    constructor(private authservice: AuthService) { }
      @Post('signup')
     signup() {
        return 'I am SignUp'
     }

     @Post('signin')
     signin() {
        return 'I am signed in'
     }
     

   
}