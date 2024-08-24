import { Request, Response } from 'express';

export const renderHomePage = (req: Request, res: Response) => {
  res.render('home', { title: 'TypeScript Express App'});
}