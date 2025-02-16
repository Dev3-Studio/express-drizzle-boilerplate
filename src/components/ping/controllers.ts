import { Request, Response } from 'express';
import * as services from './services';

export async function ping(_: Request, res: Response) {
    res.send(services.ping());
}