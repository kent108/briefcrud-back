import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user; // Ne pas renommer, c'est toujours la propriété user de req que l'on retourne
  },
);
