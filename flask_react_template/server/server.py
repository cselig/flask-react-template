from flask import Flask, render_template, jsonify
from flask_scss import Scss

app = Flask(
    __name__,
    static_folder="../static/dist",
    template_folder="../static/html",
)
Scss(
    app,
    asset_dir='../static/css',
    static_dir='../static/dist',
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_fruits')
def get_fruits():
    return jsonify(['Pears', 'Watermelons', 'Apples'])

if __name__ == "__main__":
    app.run()
