from .models import User
from .serializers import *

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def api_overview(request):
    '''Returns list of API endpoints'''
    api_urls = {
        'signup': 'api/auth/signup',
        'login': 'api/auth/login',
    }
    return Response(api_urls)

@api_view(['POST'])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(request.data,serializer.errors)
    return Response(serializer.errors)

@api_view(['POST'])
def login(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        pass
    else:
        print(request.data,serializer.errors)
    return Response(serializer.errors)
