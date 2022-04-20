from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route("/") #ruta normal (home)
def home():
    return "Hello! <h1>HELLO<h1>"

@app.route("/<name>") #ruta pasando variable
def user(name):
    return f"Hello {name} !"

@app.route("/admin") #ruta que te redirige a la ruta "/"(home)
def admin():
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run()