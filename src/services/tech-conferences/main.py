#!flask/bin/python
from flask import Flask
from flask_cors import CORS            
import psycopg2
import json
import dateutil.parser as parser
import feedparser


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

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
        '''SELECT id, name, description, link, img_link, start_date, end_date FROM conferences'''
    )
    rows = cur.fetchall()
    conferences = []
    for row in rows:
        print (type(row[6]))
        conferences.append(
            {
                'uuid': row[0],
                'name': row[1],
                'description': row[2],
                'link': row[3],
                'img_link': row[4],
                'start_date': parser.parse(str(row[5])).isoformat(),
                'end_date': parser.parse(str(row[6])).isoformat()
            }
        )
    # print (conn)
    print (conferences)
    return {"data": conferences}
    return "Tech Conferences List"

@app.route('/tech-conferences/feed')
def getFeed():
    feed = feedparser.parse('https://www.techrepublic.com/rssfeeds/articles')
    print (feed)
    return feed

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)