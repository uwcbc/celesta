from getpass import getpass
from typing import Type
from mysql.connector import connect, Error, MySQLConnection

def getSQLConnection() -> MySQLConnection:
    try:
       connection =connect(
            host="localhost",
            user="root",
            password="qqqq",
            autocommit=True)
       connection.cursor().execute("USE celesta_data")
       return connection
    except Error as e:
        print(e)
        return None

# student setting and searching
