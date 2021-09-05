#!flask/bin/python
from flask import Flask, request, make_response
from flask_cors import CORS            
import psycopg2
import json
import dateutil.parser as parser
import feedparser


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def _build_cors_prelight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route('/')
def index():
    return "Hello, World!"

@app.route('/service/confdaddy/conferences')
def getTechConferences():
    print (request.args.get('page_num'))
    page_num = int(request.args.get('page_num'))
    search_term = request.args.get('search_term')

    offset = 5*(page_num-1)
    limit = 5
    total_rows_count = 0
    next_page_exists = False
    conn = psycopg2.connect(
        database = "tech-conferences", 
        user = "dbadmin", 
        password = "s6qlnio57va49ros", 
        host = "mxr-postgres-sfo-1-do-user-6132079-0.b.db.ondigitalocean.com", 
        port = "25060"
    ) 
    cur = conn.cursor()
    query = '''
        SELECT id, name, description, link, img_link, start_date, end_date,
        COUNT(*) OVER() AS total_count
        FROM conferences 
        WHERE status='approved'
        AND end_date > CURRENT_DATE
        LIMIT {} 
        OFFSET {}
    '''.format(limit, offset)
    if (search_term):
        query = '''
            SELECT id, name, description, link, img_link, start_date, end_date,
            COUNT(*) OVER() AS total_count
            FROM conferences 
            WHERE status='approved'
            AND end_date > CURRENT_DATE
            AND name LIKE '%{}%'
            LIMIT {} 
            OFFSET {}
        '''.format(search_term, limit, offset)
    cur.execute(query)
    rows = cur.fetchall()
    fetched_rows_count = len(rows)
    conferences = []
    for row in rows:
        total_rows_count = row[7]
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
    if (offset + fetched_rows_count < total_rows_count):
        next_page_exists = True
    return {
        "pagination": {
            "next_page_exists": next_page_exists
        },
        "data": conferences
    }
    return "Tech Conferences List"


@app.route('/tech-conferences/feed')
def getFeed():
    feed = feedparser.parse('https://www.techrepublic.com/rssfeeds/articles')
    print (feed)
    return _corsify_actual_response(feed)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)