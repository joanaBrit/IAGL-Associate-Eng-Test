## Front end
I add the Material UI library to the project. The user can see their list of to dos and add new to dos. I also added completing to dos as a bonus feature!

To add a new to do, the user clicks "New todo". Then the UI updates to having the textbox to enter the task, and a checkmark button to submit it. There's also a cancel button to go back.

Each to do is on its own row, with a checkbox. When the user clicks on the checkbox, it deletes that to do item.

I haven't worked with Redux before. With the time constraint, I'm not able to do more research to figure out how it works in the app. I kept it simple by doing a refresh on the page when an item is added or deleted.

As there was no tests like in `/backend`, I assumed there's no need to add front end tests for this task.


## Back end
For the back end, I found `lowdb` as a simple database to store the to do items in a `todos.json` file. I haven't used this library before. I normally worked with Postgres, but I thought setting up Postgres for this is too complicated, because we just need to store very simple data.

The backend supports GET, POST and DELETE all on the same endpoint. To add an item, the body should have the format like this: 
```json
{
    "data": {
        "task": "This is a todo example"
    }
}
```
To delete an item, the body should have this format: 
```json
{
   "id": 0
}
```

## Misc
I had to change the project to use modules, because the `lowdb` library didn't work well with the `require()` format.