import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationGuard implements CanActivate {
    private readonly logger = new Logger(AuthorizationGuard.name);
    constructor(private readonly jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;



        const token = authHeader.split(' ')[1];
        const decodedToken = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
        const isAdmin = decodedToken.isAdmin;
        if (!isAdmin) {
            this.logger.warn('Unauthorized access: User is not an admin');
            return false;
        }
        return true;



    }
}
