/**
 * @file Implements APIs for ToDoItem related data access object methods
 */
import { ToDoItem } from '../models/ToDoItem';
import { ToDoItemModel } from '../mongoose/ToDoItem/ToDoItemModel';
import { ToDoItemDaoI } from './interfaces/ToDoItemDaoI';
import { ObjectId } from 'bson';

/**
 * @class {ToDoItemDao} ToDoItemDao Implements the ToDoItemDaoI, with all the CRUD functionalities for the ToDoItem resource
 * @property {ToDoItemDao} toDoItemDao - Singleton DAO implementing ToDoItem CRUD operations
 */
export class ToDoItemDao implements ToDoItemDaoI {
	private static toDoItemDao: ToDoItemDao = new ToDoItemDao();

	// Prevent Initiation of Object
	private constructor() {
		// eslint-disable-line @typescript-eslint/no-empty-function
	}

	/**
	 * Returns the Singleton Instance of the ToDoItemDao
	 * @function
	 * @return {ToDoItemDao} the Singleton Instance of the ToDoItemDao
	 */
	public static getInstance(): ToDoItemDao {
		return this.toDoItemDao;
	}

	public async createToDoItem(toDoItem: ToDoItem): Promise<any> {
		return ToDoItemModel.create(toDoItem);
	}

	public async findAllToDoItems(sortParam, sort): Promise<any> {
		return ToDoItemModel.find().sort({ [sortParam]: sort ? sort : 'asc' });
	}

	public async findToDoItemById(tid: ObjectId): Promise<ToDoItem | null> {
		return ToDoItemModel.findById(tid);
	}

	public async updateToDoItemById(tid: ObjectId, toDoItem: ToDoItem): Promise<object> {
		return ToDoItemModel.updateOne({ _id: tid }, { $set: toDoItem });
	}

	public async deleteAllToDoItems(): Promise<object> {
		return ToDoItemModel.deleteMany();
	}

	public async deleteToDoItemById(tid: ObjectId): Promise<object> {
		return ToDoItemModel.deleteOne({ _id: tid });
	}

	public async findToDoItemsAfterDate(date: Number, sort): Promise<any> {
		return ToDoItemModel.find({ createdAt: { $gte: date } }).sort({ createdAt: sort ? sort : 'asc' });
	}

	public async findToDoItemsBeforeDate(date: Number, sort): Promise<any> {
		return ToDoItemModel.find({ createdAt: { $lte: date } }).sort({ createdAt: sort ? sort : 'desc' });
	}

	public async findToDoItemsBetweenDates(start: Number, end: Number, sort): Promise<any> {
		console.log(start, end);
		return ToDoItemModel.find({ createdAt: { $gte: start, $lt: end } }).sort({
			deadline: sort ? sort : 'asc'
		});
	}

	public async findToDoItemsBeforeDeadline(date: Number, sort): Promise<any> {
		return ToDoItemModel.find({ deadline: { $lte: date } }).sort({ deadline: sort ? sort : 'asc' });
	}

	public async findToDoItemsAfterDeadline(date: Number, sort): Promise<any> {
		return ToDoItemModel.find({ deadline: { $gte: date } }).sort({
			deadline: sort ? sort : 'desc'
		});
	}

	public async findToDoItemsBetweenDealines(start: Number, end: Number, sort): Promise<any> {
		return ToDoItemModel.find({ deadline: { $gte: start, $lt: end } }).sort({
			deadline: sort ? sort : 'asc'
		});
	}
}
