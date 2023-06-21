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

#### Get `tasks`

##### Get all tasks

```http
  GET /api/tasks
```

##### Get a perticular `task` by id

```http
  GET /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Task to fetch |



##### Get a task by priority level

```http
  GET /api/tasks/priority/${level}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `level`      | `enum('Low', 'Medium', 'High')` | **Required**. Choose a priority level of Task to fetch |

#### Create a new task

```http
  POST /api/tasks/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Task |
| `assign_to`      | `string` | **Optional**. assign_to of Task |
| `assigned_by`      | `string` | **Optional**. assigned_by of Task |
| `title`      | `string` | **Required**. title of Task |
| `description`      | `string` | **Required**. description of Task |
| `due_date`      | `date('dd-mm-yyyy')` | **Required**. due_date of Task |
| `status`      | `boolean` | **Required**. status of Task |
| `priority`      | `enum('Low', 'Medium', 'High')` | **Required**. priority of Task |


#### Update a task

```http
  PUT /api/tasks/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Task |
| `assign_to`      | `string` | **Optional**. assign_to of Task |
| `assigned_by`      | `string` | **Optional**. assigned_by of Task |
| `title`      | `string` | **Required**. title of Task |
| `description`      | `string` | **Required**. description of Task |
| `due_date`      | `date('dd-mm-yyyy')` | **Required**. due_date of Task |
| `status`      | `boolean` | **Required**. status of Task |
| `priority`      | `enum('Low', 'Medium', 'High')` | **Required**. priority of Task |


#### Partial Update a Task

##### Update the `status` for a task

```http
  PATCH /api/tasks/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Task |
| `status`      | `string` | **Required**. status of Task |



##### Update the `priority` for a task

```http
  PATCH /api/tasks/priority/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Task |
| `priority`      | `enum('Low', 'Medium', 'High')`  | **Required**. status of Task |



#### Delete a task by id

```http
  DELETE /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Task to delete |

