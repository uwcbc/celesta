import csv, sqlite3

con = sqlite3.connect("celesta.sqlite3") # change to 'sqlite:///your_filename.db'
cur = con.cursor()
cur.execute("CREATE TABLE member_info (id, first_name, last_name, email, member_type, faculty, watiam);") # use your column names here

with open('database_csv.csv','r', encoding='utf-8-sig') as fin: # `with` statement available in 2.5+
    # csv.DictReader uses first line in file for column headings by default
    dr = csv.DictReader(fin) # comma is default delimiter
    to_db = [(i['id'], i['first_name'], i['last_name'], i['email'], i['member_type'], i['faculty'], i['watiam']) for i in dr]

cur.executemany("INSERT INTO member_info (id, first_name, last_name, email, member_type, faculty, watiam) VALUES (?, ?, ?, ? , ? , ? , ?);", to_db)
con.commit()
con.close()