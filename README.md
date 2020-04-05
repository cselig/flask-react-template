A template for a webapp using Flask, React, SCSS and Webpack.

### Configure:
- grep for "template" and change to your repo name

### Install:
- Create and set python virtualenv in `.python-version`
- Run `pip install -r requirements.txt`
- In `{name}/static` run `npm install`

### Run:
- In `{name}/server` run `FLASK_APP=server.py FLASK_ENV=development flask run`
- In `{name}/static` run `npm run watch`
