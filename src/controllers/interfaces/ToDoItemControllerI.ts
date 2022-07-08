/**
 * @file Declares the interface for the ToDoItemController that handles API calls that deal
 * with the ToDoItem resource
 */
 import {Request, Response} from "express";

 export interface ToDoItemControllerI {
    createToDoItem(req: Request, res: Response): void;

    findAllToDoItems(req: Request, res: Response): void;

    findToDoItemById(req: Request, res: Response): void;

    updateToDoItemById(req: Request, res: Response): void;

    deleteAllToDoItems(req: Request, res: Response): void;

    deleteToDoItemById(req: Request, res: Response): void;
}
