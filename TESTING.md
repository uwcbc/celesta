### Installing and Using MySQL

#### Downloading MySQL and Setting Up

We won't be working directly with MySQL for this project (that's what using a Django backend is for) but it's still useful to be able to run a local server to test databases.

For Windows users, I had success using the following tutorial: https://www.lifewire.com/how-to-install-mysql-windows-10-4584021

For Mac users, try this link and let me know how that goes: https://www.geeksforgeeks.org/how-to-install-mysql-on-macos/

Generally, they'll ask you to setup a username and password. Since we're testing locally, security doesn't matter _that_ much. I chose the username as `root` and the password as `root`.

In our codebase, we've specified that our database be called _celesta_data_, so we don't need to manually set up our own database now.

#### (Optional) Installing MariaDB and HeidiSQL

If you're on Windows and want to perform a deep-dive into the database, you can download MariaDB from `https://downloads.mariadb.org/mariadb/10.1.41/` (this is an older version copied from the previous development guide that I have installed. Feel free to use a newer version).

- Set the password to “root” and check “use UTF8”
- Leave everything in the next screen default
- After installation, run “MySQL Client (MariaDB 10.1 (x64))” and login
- You can use HeidiSQL (installed with MariaDB) to view the contents of the database

### Testing Both the Backend and the Frontend

If you're testing for the very first time, then you'll be starting off with an empty database. As you add to the database, they'll get saved in the MySQL server to be used again and again!

#### Starting the Django backend

Within VSCode, make sure your virtual environment is up and running (see the README if you forgot how to do that). Then type in the terminal:

```
python manage.py runserver
```

Once the server is up and running, navigate to `http://127.0.0.1:8000/api/students/`. This is where the database entries are stored. I have a few dummy data listed already (see below), but you might want to add your own using the UI in the bottom half of the screen. In the future, a complete dummy database will likely be created.

If you want to view a particular entry, just navigate to `http://127.0.0.1:8000/api/students/{id}`. For example, Heidi's entry would be `http://127.0.0.1:8000/api/students/1`

![image](https://github.com/uwcbc/celesta/assets/46284286/c6c2da26-67fd-474c-8b53-93c5201076e8)


#### Running the Frontend at the same time!

In VSCode, open a new terminal (while keeping the first terminal running!). You can open a new terminal in the top-right of the terminal window near the bottom of the screen.

Note: I'm currently using the Axios package for the HTTP requests. You'll need to type in the terminal `npm i axios` to install that package.

As we have done before, navigate to the frontend folder `cd frontend` and run `npm start`. Once the frontend is built (it'll take a while), you can navigate to `http://localhost:3000/` and view the beautiful results.
