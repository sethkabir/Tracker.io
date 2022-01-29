"""src URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from .views import *


urlpatterns = [
    path('', api_overview),
    path('auth/signup', signup),
    path('auth/login', login),
    # path('auth/discord-login', discord_login),
    path('auth/logout', logout),
    path("auth/change-password", change_password),
    path("user", current_user_details),
    path("user/<int:pk>", user_details),
    path("user/update-profile", update_profile),
    path("user/add-contact", add_contact),
    path("user/get-contacts", get_contacts),    
]