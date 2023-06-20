# Task Manager
Build a RESTfull API for a simple task manager.

## Author
- [@arun](https://github.com/mrarunsingh8)

## How to run

Clone the project

```bash
  git clone https://github.com/mrarunsingh8/task-manager
```

Go to the project directory

```bash
  cd task-manager
```

Install dependencies

```bash
  npm install
```

Start the server for development mode

```bash
  npm run dev
```
It will start a server for development use with url http://localhost:3000/.

Start the server production mode

```bash
  npm run start
```
It will start a server for production use.


## API Reference

#### Get all tasks

```http
  GET /api/tasks
```

#### Get a perticular task by id

```http
  GET /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Task to fetch |



