# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.


from markupsafe import escape
from flask import Flask
from pysondb import db
from flask import jsonify
import json

app = Flask(__name__)

def save_json(dictionary, name_file):
    with open(name_file, 'w') as fp:
        json.dump(dictionary, fp, sort_keys=True, indent=4)


def load_json(name_file):
    data = None
    with open(name_file, 'r') as fp:
        data = json.load(fp)
    return data

@app.route("/signup_user/<name>")
def sign_up(name):
    users = load_json("users.json")
    if name not in users:
        users[name] = {}
        save_json(users, "users.json")
    return f"Done"


@app.route("/list_users")
def list_users():
    return jsonify(load_json("users.json"))