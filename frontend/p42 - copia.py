from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/") #ruta normal (home)
def home():
    return render_template("index.html")

@app.route("/<name>") #ruta pasando variable
def user(name):
    #return f"Hello {name} !"
    return render_template("index.html", content = name, r=2)

@app.route("/admin") #ruta que te redirige a la ruta "/"(home)
def admin():
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run()