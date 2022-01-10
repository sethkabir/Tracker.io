from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *

User = get_user_model()

@api_view(['GET'])  
def api_overview(request):
    '''Returns list of API endpoints'''
    api_urls = {
        'signup': 'auth/signup',
        'login': 'auth/login',
        'logout': 'auth/logout',
        'user-profile': 'user/<id>',
    }
    return Response(api_urls)

@api_view(['POST'])
def signup(request):
    '''Signup endpoint'''
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(request.data,serializer.errors)
    return Response(serializer.errors)

@api_view(['POST'])
def login(request):
    '''Login endpoint'''
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)

    if user is not None:
        auth_login(request, user)
        print("user ID:", request.user.id)
    else:
        print("Auth Error")
        return Response({"Error": "User_not_found"})
    return Response(UserSerializer(request.user).data)

@api_view(['POST'])
def logout(request):
    '''Logout endpoint'''
    auth_logout(request)
    return Response({})

@api_view(['GET'])
def user_details(request, pk):
    '''Returns specific user details'''
    serializer = UserSerializer(User.objects.get(id=pk))
    return Response(serializer.data)

@api_view(['GET'])
def current_user_details(request):
    '''Returns current active user details'''
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)