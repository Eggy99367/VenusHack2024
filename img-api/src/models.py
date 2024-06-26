# models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Food(db.Model):
    __tablename__ = 'food'
    id = db.Column(db.String(40), primary_key=True, nullable=False, unique=True)
    name = db.Column(db.String(50), nullable=False)
    cafe = db.Column(db.String(50), nullable=False)
    station = db.Column(db.String(50), nullable=False)
    imgSrc = db.Column(db.String(500), nullable=False)
    rate = db.Column(db.String(50), nullable=False)
    reviews = db.Column(db.String(50), nullable=False)
    fav = db.Column(db.Boolean, nullable=False)

    def get_info(self):
        return {
            "id": self.id,
            "name": self.name,
            "cafe": self.cafe,
            "station": self.station,
            "imgSrc": self.imgSrc,
            "rate": self.rate,
            "reviews": self.reviews,
            "fav": self.fav
        }

    def __repr__(self):
        return f'<Food {self.name}>'