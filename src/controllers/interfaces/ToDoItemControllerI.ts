/**
 * @file Declares the interface for the ToDoItemController that handles API calls that deal
 * with the ToDoItem resource
 */
 import {Request, Response} from "express";

 /**
 * Defines the use cases the {@link ToDoItemController} is to support.
 */
 export interface ToDoItemControllerI {
    /**
     * Creates a {@link ToDoItem}
     * @param req {Request} - Request containing the contents of ToDoItem to be created
     * @param res {Response} - Response containing the created ToDoItem, as a JSON object
     */
    createToDoItem(req: Request, res: Response): void;

    /**
     * Sends all the {@link ToDoItem}s, matchig the specified parameters, as a JSON Response.
     * @param req {Request} - The request received, with any optional parameters
     * @param res {Response} - the Response containing all the ToDoItems the match the specified parameters, as a JSON object
     */
    findAllToDoItems(req: Request, res: Response): void;

    /**
     * Sends the {@link ToDoItem}, with the specified ID, as a JSON Response.
     * @param req {Request} - The request received, containing the ID of the ToDoItem to be returned
     * @param res {Response} - the Response the containing the ToDoItem with the specified ID, as a JSON object
     */
    findToDoItemById(req: Request, res: Response): void;

    /**
     * Updates an existing {@link ToDoItem}
     * @param req {Request} - Request containing the contents of ToDoItem to be updated
     * @param res {Response} - Response containing the updated ToDoItem
     */
    updateToDoItemById(req: Request, res: Response): void;

    /**
     * Deletes al existing {@link ToDoItem}s
     * @param req {Request} - the received Request
     * @param res {Response} - Response containing status of the delete operation, as a JSON object
     */
    deleteAllToDoItems(req: Request, res: Response): void;

    /**
     * Deletes an existing {@link ToDoItem}, with the specified ID
     * @param req {Request} - Request containing ID of the ToDoItem to be deleted
     * @param res {Response} - Response containing status of the delete operation, as a JSON object
     */
    deleteToDoItemById(req: Request, res: Response): void;
}
