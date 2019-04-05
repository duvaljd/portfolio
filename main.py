import os
import webapp2
import jinja2
import logging

JINJA_ENVIRONMENT = jinja2.Environment(
	loader = jinja2.FileSystemLoader(os.path.dirname(__file__) + "/templates"))

class mainHandler(webapp2.RequestHandler):
	def get(self):
		title = "jd duval"
		template_vars = {
			'title': title,
		}
		template = JINJA_ENVIRONMENT.get_template('index.html')
		self.response.out.write(template.render(template_vars))

app = webapp2.WSGIApplication([
	('/', mainHandler),
	('/index', mainHandler)

], debug = True)