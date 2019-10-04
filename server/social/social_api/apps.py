from django.apps import AppConfig


class ApiConfig(AppConfig):
    name = 'social_api'

    def ready(self):
        from . import signals