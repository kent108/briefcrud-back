import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
 
  @IsEmail()
  @IsNotEmpty()
  mail: string;

 
  @IsString()
  @IsNotEmpty()
  password: string;
}
