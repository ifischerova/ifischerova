from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def get_main_page():
    # I need to specify the debug mode for the template "to know" about this mode.   
    return render_template('index.html', debug=app.debug)

if __name__ == '__main__':
    app.run()