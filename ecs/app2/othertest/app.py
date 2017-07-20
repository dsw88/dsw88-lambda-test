from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def index():
    return "OTHER TEST!"

@app.route('/otherpath')
def mypath():
    return "Hello Other Worlds!"