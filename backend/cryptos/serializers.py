from rest_framework import serializers
from .models import Criptomoneda

class CriptomonedaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Criptomoneda
        fields = ['id', 'nombre', 'simbolo', 'precio_actual', 'ultima_actualizacion', 'logo_url']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['precio_actual'] = float(instance.precio_actual) if instance.precio_actual is not None else 0.0
        return data
