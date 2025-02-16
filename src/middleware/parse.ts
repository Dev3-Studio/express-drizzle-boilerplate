import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import { BadRequestError } from '../lib/httpErrors';

export function parseBodyMiddleware(schema: z.ZodSchema<never>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (err) {
            const validationError = fromError(err);
            const errorMessage = '[Invalid body] ' + validationError.toString();
            throw new BadRequestError(errorMessage);
        }
    };
}

export function parseQueryMiddleware(schema: z.ZodSchema<never>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            req.query = schema.parse(req.query);
            next();
        } catch (err) {
            const validationError = fromError(err);
            const errorMessage = '[Invalid query] ' + validationError.toString();
            throw new BadRequestError(errorMessage);
        }
    };
}

export function parseParamsMiddleware(schema: z.ZodSchema<never>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            req.params = schema.parse(req.params);
            next();
        } catch (err) {
            const validationError = fromError(err);
            const errorMessage = '[Invalid params] ' + validationError.toString();
            throw new BadRequestError(errorMessage);
        }
    };
}