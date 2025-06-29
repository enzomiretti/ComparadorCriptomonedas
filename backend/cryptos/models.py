from django.db import models

class Criptomoneda(models.Model):
    nombre = models.CharField(max_length=100)
    simbolo = models.CharField(max_length=20)
    precio_actual = models.DecimalField(max_digits=20, decimal_places=8)
    ultima_actualizacion = models.DateTimeField()
    logo_url = models.URLField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.nombre} ({self.simbolo})"
