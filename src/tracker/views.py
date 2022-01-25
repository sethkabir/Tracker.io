from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth import get_user_model
from matplotlib.style import context

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .serializers import *

User = get_user_model()

@api_view(['GET'])  
def api_overview(request):
    '''Returns list of API endpoints'''
    api_urls = {
        'signup': 'auth/signup',
        'login': 'auth/login',
        'logout': 'auth/logout',
        'change_password': 'auth/change-password',
        'current-user-profile': 'user',
        'user_profile': 'user/<id>',
        'update_profile': 'user/update-profile',
    }
    return Response(api_urls)

@api_view(['POST'])
def signup(request):
    '''Signup endpoint'''
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'user registered'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    '''Login endpoint'''
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)

    if user is not None:
        auth_login(request, user)
        return Response(UserSerializer(request.user).data, status=status.HTTP_202_ACCEPTED)
    return Response({"Error": "User_not_found"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    '''Logout endpoint'''
    auth_logout(request)
    return Response({"success": "user logged out"}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def user_details(request, pk):
    '''Returns specific user details'''
    serializer = UserSerializer(User.objects.get(id=pk), context={'request': request})
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user_details(request):
    '''Returns current active user details'''
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def change_password(request):
    '''Changes current user's password'''
    serializer = ChangePasswordSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'password changed'}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    '''Updates current user's profile'''
    user = request.user
    serializer = UserSerializer(user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'user profile updated'}, status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)