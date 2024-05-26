# models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Food(db.Model):
    __tablename__ = 'food'
    id = db.Column(db.String(40), primary_key=True, nullable=False, unique=True)
    name = db.Column(db.String(50), nullable=False)
    cafe = db.Column(db.String(50), nullable=False)
    rate = db.Column(db.Integer, nullable=False)
    reviews = db.Column(db.Integer, nullable=False)

    def get_info(self):
        return {
            "id": self.id,
            "name": self.name,
            "cafe": self.cafe,
            "rate": self.rate,
            "reviews": self.reviews
        }

    def __repr__(self):
        return f'<Food {self.name}>'