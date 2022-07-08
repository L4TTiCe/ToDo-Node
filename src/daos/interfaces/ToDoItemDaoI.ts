
/**
 * @file Declares API for ToDoItem related data access object methods
 */
 import {ToDoItem} from "../../models/ToDoItem";
 import {ObjectId} from 'bson';

 export interface ToDoItemDaoI {
    /**
     * Creates {@link ToDoItem} with the given data
     * @param ToDoItem {ToDoItem} - the data to be used to create the ToDoItem
     * @return {Promise<ToDoItem>} - promise containing the ToDoItem created with the given data
     */
    createToDoItem(ToDoItem: ToDoItem): Promise<ToDoItem>;

    /**
     * Returns all the {@link ToDoItem}s
     * @param sortParam {String} - the field to be used for sorting
     * @param sort {Number | String} - the order of the sorting
     * @return {Promise<ToDoItem[]>} - Promise containing all the ToDoItems
     */
    findAllToDoItems(sortParam: String, sort): Promise<ToDoItem[]>;

    /**
     * Returns the {@link ToDoItem} with the given tid
     * @param tid {ObjectId} - the TID of the ToDoItem to be returned
     * @return {Promise<ToDoItem>} - promise containing the ToDoItem with the given FID
     */
    findToDoItemById(tid: ObjectId): Promise<ToDoItem | null>;

    /**
     * Returns the {@link ToDoItem}s created after the passed in date
     * @param date {Number} - the threshold date for the ToDoItems to be returned
     * @param sort {Number | String} - the order of the sorting
     * @return {Promise<ToDoItem>} - promise containing the ToDoItems created after the passed in date
     */
    findToDoItemsAfterDate(date: Number, sort): Promise<ToDoItem[]>;

    /**
     * Returns the {@link ToDoItem}s created before the passed in date
     * @param date {Number} - the threshold date for the ToDoItems to be returned
     * @param sort {Number | String} - the order of the sorting
     * @return {Promise<ToDoItem>} - promise containing the ToDoItems created before the passed in date
     */
    findToDoItemsBeforeDate(date: Number, sort): Promise<ToDoItem[]>;

    /**
     * Returns the {@link ToDoItem}s created between the passed in dates
     * @param start {Number} - the start date for the ToDoItems to be returned
     * @param end {Number} - the end date for the ToDoItems to be returned
     * @param sort {Number | String} - the order of the sorting
     * @return {Promise<ToDoItem>} - promise containing the ToDoItems created between the passed in dates
     */
     findToDoItemsBetweenDates(start: Number, end: Number, sort): Promise<ToDoItem[]>;

    /**
     * Returns the {@link ToDoItem}s with deadlines before the passed in date
     * @param date {Number} - the threshold date for the ToDoItems to be returned
     * @param sort {Number | String} - the order of the sorting
     * @return {Promise<ToDoItem>} - promise containing the ToDoItems with deadlines before the passed in date
     */
    findToDoItemsBeforeDeadline(date: Number, sort): Promise<ToDoItem[]>;

    /**
     * Returns the {@link ToDoItem}s with deadlines after the passed in date
     * @param date {Number} - the threshold date for the ToDoItems to be returned
     * @param sort {Number | String} - the order of the sorting
     * @return {Promise<ToDoItem>} - promise containing the ToDoItems with deadlines after the passed in date
     */
     findToDoItemsAfterDeadline(date: Number, sort): Promise<ToDoItem[]>;

     /**
     * Returns the {@link ToDoItem}s with dealines between the passed in dates
     * @param start {Number} - the start date for the ToDoItems to be returned
     * @param end {Number} - the end date for the ToDoItems to be returned
     * @param sort {Number | String} - the order of the sorting
     * @return {Promise<ToDoItem>} - promise containing the ToDoItems with deadlines between the passed in dates
     */
      findToDoItemsBetweenDealines(start: Number, end: Number, sort): Promise<ToDoItem[]>;

    /**
     * Updates the {@link ToDoItem} with their TID and returns the updated ToDoItem
     * @param tid {ObjectId} - the TID of the ToDoItem to be updated
     * @param ToDoItem {ToDoItem} - the data to be used to update the ToDoItem
     * @return {Promise<ToDoItem>} - promise containing the ToDoItem updated with the given data
     */
    updateToDoItemById(tid: ObjectId, ToDoItem: ToDoItem): Promise<object>;

    /**
     * Deletes all ToDoItem in the DB
     * @return {Promise<object>} the status of the delete operation
     */
    deleteAllToDoItems(): Promise<object>;

    /**
     * Deleted the {@link ToDoItem} by TID
     * @param tid {ObjectId} - the TID of the ToDoItem to be deleted
     * @return {Promise<object>} the status of the delete operation
     */
    deleteToDoItemById(tid: ObjectId): Promise<object>;
}
