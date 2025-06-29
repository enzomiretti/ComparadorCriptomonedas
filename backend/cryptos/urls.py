from django.urls import path
from .views import CriptomonedaListAPIView

urlpatterns = [
    path('criptos/', CriptomonedaListAPIView.as_view(), name='criptos-list'),
]
