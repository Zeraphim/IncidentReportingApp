from flask import Flask, render_template

config = {
    "DEBUG": True
}

app = Flask(__name__)

app.config.from_mapping(config)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0')
