/**
 * @file Declares the interface for the ToDoItemController that handles API calls that deal
 * with the ToDoItem resource
 */
import { Request, Response } from 'express';

/**
 * Defines the use cases the {@link controllers/ToDoItemController} is to support.
 */
export interface ToDoItemControllerI {
	/**
	 * Creates a {@link models/ToDoItem}
	 * @param {Request} req - Request containing the contents of ToDoItem to be created
	 * @param {Response} res - Response containing the created ToDoItem, as a JSON object
	 */
	createToDoItem(req: Request, res: Response): void;

	/**
	 * Sends all the {@link models/ToDoItem}s, matchig the specified parameters, as a JSON Response.
	 * @param {Request} req - The request received, with any optional parameters
	 * @param {Response} res - the Response containing all the ToDoItems the match the specified parameters, as a JSON object
	 */
	findAllToDoItems(req: Request, res: Response): void;

	/**
	 * Sends the {@link models/ToDoItem}, with the specified ID, as a JSON Response.
	 * @param {Request} req - The request received, containing the ID of the ToDoItem to be returned
	 * @param {Response} res - the Response the containing the ToDoItem with the specified ID, as a JSON object
	 */
	findToDoItemById(req: Request, res: Response): void;

	/**
	 * Updates an existing {@link models/ToDoItem}
	 * @param {Request} req - Request containing the contents of ToDoItem to be updated
	 * @param {Response} res - Response containing the updated ToDoItem
	 */
	updateToDoItemById(req: Request, res: Response): void;

	/**
	 * Deletes al existing {@link models/ToDoItem}s
	 * @param {Request} req - the received Request
	 * @param {Response} res - Response containing status of the delete operation, as a JSON object
	 */
	deleteAllToDoItems(req: Request, res: Response): void;

	/**
	 * Deletes an existing {@link models/ToDoItem}, with the specified ID
	 * @param {Request} req - Request containing ID of the ToDoItem to be deleted
	 * @param {Response} res - Response containing status of the delete operation, as a JSON object
	 */
	deleteToDoItemById(req: Request, res: Response): void;
}
