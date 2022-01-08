from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import User
from .serializers import *



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
    '''signup api'''
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(request.data,serializer.errors)
    return Response(serializer.errors)

@api_view(['POST'])
def login(request):
    '''login api'''
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)

    if user is not None:
        auth_login(request, user)
        print("user ID:", request.user.id)
    else:
        print("Auth Error")
        return Response({"Error": "User_not_found"})
    print(UserSerializer(request.user).data)
    return Response(UserSerializer(request.user).data)

@api_view(['POST'])
def logout(request):
    '''logout api'''
    if request.user.is_authenticated:
        auth_logout(request.user)
    else:
        print("Unable to logout: Contact website management")
        return Response({"Error": "Unable to logout"})
    return Response()

@api_view(['GET'])
def user_details(request, pk):
    '''returns specific user details'''
    serializer = UserSerializer(User.objects.get(id=pk))
    return Response(serializer.data)