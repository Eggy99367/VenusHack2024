from flask import Flask, request, jsonify
from src.models import db, Food
from src import food

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:123456@crm-db/saas'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


@app.route('/db/foods', methods=['GET'])
def get_foods():
    return food.get_foods()

@app.route('/db/foods/<string:line_id>', methods=['GET'])
def get_food(line_id):
    return food.get_food(line_id)

@app.route('/db/foods', methods=['POST'])
def add_food():
    return food.add_food()

@app.route('/db/foods/<string:line_id>', methods=['PUT'])
def update_food(line_id):
    return food.update_food(line_id)

if __name__ == '__main__':
    app.run()
