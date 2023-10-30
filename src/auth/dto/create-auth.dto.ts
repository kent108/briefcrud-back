import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateAuthDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @MaxLength(320)
  @IsNotEmpty()
  mail: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  password: string;
}
