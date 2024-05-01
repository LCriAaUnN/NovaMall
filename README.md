# NovaMall
CSCI3100 course project

## How to run the project
### database setting
*in server end*
1. `mysql -uroot -p`
2. `create database NovaMall charset=utf8;`
3. `mysql -uroot -p NovaMall < NovaMall_DB.sql`

### run server
1. `python3 NovaMall/manage.py runserver`
2. `cd UI design`
3. `npm install`
4. `npm start`