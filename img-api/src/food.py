from flask import request, jsonify
from .models import db, Food

def get_foods():
    print("get foods")
    try:
        foods = Food.query.all()
        return jsonify([food.get_info() for food in foods])
    except Exception as e:
        return jsonify({'error': str(e)}), 400

def get_food(id):
    print("get food")
    try:
        food = food.query.get_or_404(id)
        return jsonify(food.get_info())
    except Exception as e:
        return jsonify({'error': str(e)}), 400

def add_food():
    print("add food")
    try:
        data = request.json
        print(data)
        contents = ["name", "cafe", "station", "imgSrc"]
        new_food = Food()

        new_id = len(Food.query.all())
        setattr(new_food, "id", new_id)
        setattr(new_food, "rate", 0)
        setattr(new_food, "reviews", 0)

        print("db set var")

        for content in contents:
            if content in data:
                setattr(new_food, content, data[content])
        db.session.add(new_food)
        db.session.commit()
        print("db commit")
        return jsonify(new_food.get_info()), 201
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 400

def update_food(id):
    print("update food")
    try:
        print(1)
        contents = ["rate", "reviews"]
        data = request.json
        food = food.query.get_or_404(id)
        for content in contents:
            if content not in data:
                continue
            if data[content] == "":
                data[content] = None
            setattr(food, content, data[content])
        db.session.commit()
        return jsonify(food.get_info())
    except Exception as e:
            return jsonify({'error': str(e)}), 400

