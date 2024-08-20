import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface UserPayload extends JwtPayload {
  id: string;
  email: string;
  // Add any other properties you expect in the payload
}

interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

export function authenticateToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded as UserPayload;
    next();
  });
}
