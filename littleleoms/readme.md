# run server 
* cd to dir. --> on terminal run --> 
``` 
python manage.py runserver
```
# make a booking
* go to book page --> add details --> make a booking

# open database on vs code terminal
# open restaurant_booking under tables
* cd to dir. --> on terminal run -->
```
python manage.py dbshell

        or

sqlite3 db.sqlite3
```
* It will open sql in terminal Then run sql commands  :-
```
DELETE FROM restaurant_booking WHERE first_name = 'Avinash';
```
```
.exit (to exit sql)
