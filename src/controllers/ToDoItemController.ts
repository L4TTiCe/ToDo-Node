/**
 * @file Controller RESTful Web service API for {@link ToDoItem} resource
 */
 import {Express, Request, Response} from "express";
 import bodyParser from "body-parser";
 import {ToDoItemDao} from "../daos/ToDoItemDao";
 import {ToDoItemControllerI} from "./interfaces/ToDoItemControllerI";
 import {ObjectId} from 'bson';

 export class ToDoItemController implements ToDoItemControllerI {
    private static toDoItemDao: ToDoItemDao;
    private static toDoItemController: ToDoItemController | null = null;

    // Prevent Initiation of Object
    private constructor() {  // eslint-disable-line @typescript-eslint/no-empty-function
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {ToDoItemController} the singleton ToDoItemController instance
     */
    public static getInstance(app: Express): ToDoItemController {
        if (ToDoItemController.toDoItemController === null) {
            ToDoItemController.toDoItemController = new ToDoItemController();
            ToDoItemController.toDoItemDao = ToDoItemDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/todo", ToDoItemController.toDoItemController.createToDoItem);
            app.get("/todo", ToDoItemController.toDoItemController.findAllToDoItems);
            app.get("/todo/:id", ToDoItemController.toDoItemController.findToDoItemById);
            app.put("/todo/:id", ToDoItemController.toDoItemController.updateToDoItemById);
            app.delete("/todo", ToDoItemController.toDoItemController.deleteAllToDoItems);
            app.delete("/todo/:id", ToDoItemController.toDoItemController.deleteToDoItemById);
        }
        return ToDoItemController.toDoItemController;
    }

    public createToDoItem(req: Request, res: Response): void {
        console.info(`todo: createToDoItem() ${req.body}`);

        ToDoItemController.toDoItemDao.createToDoItem(req.body)
            .then((item) => res.json(item))
            .catch((status) => res.json(status));
    }

    public findAllToDoItems(req: Request, res: Response): void {
        console.info(`todo: findAllToDoItems()`);

        const atrib = req.query.attrib
        const start = req.query.start;
        const end = req.query.end;
        const before = req.query.before;
        const after = req.query.after;

        if (req.query.attrib) {
            if (req.query.attrib === 'deadline') {
                if (start && end && !before && !after) {
                    console.info(`todo: findAllToDoItems() ${req.query.attrib} ${req.query.start} ${req.query.end}`);
                    ToDoItemController.toDoItemDao.findToDoItemsBetweenDealines(Number(start), Number(end), req.query.sort)
                        .then((items) => res.json(items))
                        .catch((status) => res.json(status));
                } else if (before && !start && !end && !after) {
                    console.info(`todo: findAllToDoItems() ${req.query.attrib} ${req.query.before}`);
                    ToDoItemController.toDoItemDao.findToDoItemsBeforeDeadline(Number(before), req.query.sort)
                        .then((items) => res.json(items))
                        .catch((status) => res.json(status));
                } else if (after && !start && !end && !before) {
                    console.info(`todo: findAllToDoItems() ${req.query.attrib} ${req.query.after}`);
                    ToDoItemController.toDoItemDao.findToDoItemsAfterDeadline(Number(after), req.query.sort)
                        .then((items) => res.json(items))
                        .catch((status) => res.json(status));
                } else if (req.query.sort) {
                    console.info(`todo: findAllToDoItems() ${req.query.attrib} ${req.query.sort}`);
                    ToDoItemController.toDoItemDao.findAllToDoItems(req.query.attrib, req.query.sort)
                        .then((items) => res.json(items))
                        .catch((status) => res.json(status));
                } else {
                    console.log('start and end or before or after is required');
                    res.status(400).send({
                        message: "'start and end', or 'before', or 'after' is required!"
                    });
                }
            } else if (req.query.attrib === 'createdAt') {
                if (start && end && !before && !after) {
                    console.info(`todo: findAllToDoItems() ${req.query.attrib} ${req.query.start} ${req.query.end}`);
                    ToDoItemController.toDoItemDao.findToDoItemsBetweenDates(Number(start), Number(end), req.query.sort)
                        .then((items) => res.json(items))
                        .catch((status) => res.json(status));
                } else if (before && !start && !end && !after) {
                    console.info(`todo: findAllToDoItems() ${req.query.attrib} ${req.query.before}`);
                    ToDoItemController.toDoItemDao.findToDoItemsBeforeDate(Number(before), req.query.sort)
                        .then((items) => res.json(items))
                        .catch((status) => res.json(status));
                } else if (after && !start && !end && !before) {
                    console.info(`todo: findAllToDoItems() ${req.query.attrib} ${req.query.after}`);
                    ToDoItemController.toDoItemDao.findToDoItemsAfterDate(Number(after), req.query.sort)
                        .then((items) => res.json(items))
                        .catch((status) => res.json(status));
                } else if (req.query.sort) {
                    console.info(`todo: findAllToDoItems() ${req.query.attrib} ${req.query.sort}`);
                    ToDoItemController.toDoItemDao.findAllToDoItems(req.query.attrib, req.query.sort)
                        .then((items) => res.json(items))
                        .catch((status) => res.json(status));
                }  else {
                    console.log('start and end or before or after is required');
                    res.status(400).send({
                        message: "'start and end', or 'before', or 'after' is required!"
                    });
                }
            }
        } else if (before || after) {
            res.status(400).send({
                message: "'atrib' is missing!"
            });
        }
        else {
            ToDoItemController.toDoItemDao.findAllToDoItems('createdAt', req.query.sort)
                .then((items) => res.json(items))
                .catch((status) => res.json(status));
        }
    }

    public findToDoItemById(req: Request, res: Response): void {
        console.info(`todo: findToDoItemById(${req.params.id})`);

        ToDoItemController.toDoItemDao.findToDoItemById(new ObjectId(req.params.id))
            .then((item) => res.json(item))
            .catch((status) => res.json(status));
    }

    public updateToDoItemById(req: Request, res: Response): void {
        console.info(`todo: updateToDoItemById(${req.params.id}) ${req.body}`);

        ToDoItemController.toDoItemDao.updateToDoItemById(new ObjectId(req.params.id), req.body)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public deleteAllToDoItems(req: Request, res: Response): void {
        console.info(`todo: deleteAllToDoItems()`);

        ToDoItemController.toDoItemDao.deleteAllToDoItems()
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public deleteToDoItemById(req: Request, res: Response): void {
        console.info(`todo: deleteToDoItemById(${req.params.id})`);

        ToDoItemController.toDoItemDao.deleteToDoItemById(new ObjectId(req.params.id))
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }
}
