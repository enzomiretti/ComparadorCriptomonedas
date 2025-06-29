
from django.core.management.base import BaseCommand
from cryptos.coingecko import actualizar_criptos

class Command(BaseCommand):
    help = 'Actualiza las criptomonedas desde CoinGecko'

    def handle(self, *args, **kwargs):
        actualizar_criptos()
        self.stdout.write(self.style.SUCCESS("🔥 El comando se ejecutó correctamente"))
