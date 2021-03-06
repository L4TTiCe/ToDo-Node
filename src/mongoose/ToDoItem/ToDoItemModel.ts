/**
 * @file Implements mongoose model to CRUD
 * documents in the ToDoItem collection
 */
import mongoose from 'mongoose';
import { ToDoItemSchema } from './ToDoItemSchema';

/**
 * The ToDoItemSchema is used for creating and reading documents of the {@link models/ToDoItem} type defined by the
 * {@link mongoose/ToDoItem/ToDoItemSchema} from the underlying MongoDB database.
 * @typedef {ToDoItemModel} ToDoItemModel
 */
export const ToDoItemModel = mongoose.model('ToDoItemModel', ToDoItemSchema);
