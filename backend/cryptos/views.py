from rest_framework.generics import ListAPIView
from .models import Criptomoneda
from .serializers import CriptomonedaSerializer

class CriptomonedaListAPIView(ListAPIView):
    queryset = Criptomoneda.objects.all()
    serializer_class = CriptomonedaSerializer
