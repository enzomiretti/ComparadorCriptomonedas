# cryptos/admin.py
from django.contrib import admin
from .models import Criptomoneda

@admin.register(Criptomoneda)
class CriptomonedaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'simbolo', 'precio_actual', 'ultima_actualizacion', 'logo_url')
