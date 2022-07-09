import { ObjectId } from 'bson';

/**
 * Represents ToDoItem
 * @typedef {ToDoItem} ToDoItem
 */
export interface ToDoItem {
	_id: ObjectId;
	title: string;
	completed: boolean;
	createdAt: Date;
	deadline: Date;
}
