#!flask/bin/python
from flask import Flask
import psycopg2
import json

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/tech-conferences/conferences')
def getTechConferences():
    conn = psycopg2.connect(
        database = "tech-conferences", 
        user = "dbadmin", 
        password = "s6qlnio57va49ros", 
        host = "mxr-postgres-sfo-1-do-user-6132079-0.b.db.ondigitalocean.com", 
        port = "25060"
    ) 
    cur = conn.cursor()
    cur.execute(
        '''SELECT id, name, description, link, img_link FROM conferences'''
    )
    rows = cur.fetchall()
    conferences = []
    for row in rows:
        print (row)
    # print (conn)
    return json.dumps(rows)
    return "Tech Conferences List"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)