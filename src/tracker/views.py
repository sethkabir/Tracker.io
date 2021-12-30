from .models import User
from .serializers import *

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def api_overview(request):
    '''Returns list of API endpoints'''
    api_urls = {
        'create-account': 'api/auth/signup/'
    }
    return Response(api_urls)

@api_view(['POST'])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(request.data,serializer.errors)
    return Response(serializer.data)
