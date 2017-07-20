from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def index():
    return "ECS TEST!"

@app.route('/mypath')
def mypath():
    return "Hello Worlds!"