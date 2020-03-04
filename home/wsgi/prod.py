import os
from whitenoise import WhiteNoise


from django.core.wsgi import get_wsgi_application


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "home.settings.prod")



application = get_wsgi_application()
application = WhiteNoise(application)
