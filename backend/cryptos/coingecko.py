import requests
from .models import Criptomoneda
from datetime import datetime
from django.utils.timezone import now

def actualizar_criptos():
    url = "https://api.coingecko.com/api/v3/coins/markets"
    params = {
        'vs_currency': 'usd',
        'order': 'market_cap_desc',
        'per_page': 10,
        'page': 1,
        'sparkline': False
    }

    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        for item in data:
            Criptomoneda.objects.update_or_create(
                nombre=item["name"],
                defaults={
                    'simbolo': item["symbol"],
                    'precio_actual': item["current_price"],
                    "ultima_actualizacion": now()
                }
            )
        print("🔥 El comando se ejecutó correctamente")
    else:
        print("❌ Error en la solicitud:", response.status_code)