import { Request, Response, NextFunction } from 'express';


interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: err.message || 'Something went wrong!',
  });
};
