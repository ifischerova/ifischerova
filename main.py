from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def get_main_page():
    # I need to specify the debug mode for the template "to know" about this mode.   
    return render_template('index.html', debug=app.debug)

@app.route('/blog')
def get_blog_page(): 
    return render_template('blog.html', debug=app.debug)

@app.route('/projects')
def get_projects_page():   
    return render_template('projects.html', debug=app.debug)

@app.route('/about')
def get_about_page():   
    return render_template('about.html', debug=app.debug)

if __name__ == '__main__':
    app.run()