"""rocketmaster URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, re_path
from rest_framework_jwt.views import ObtainJSONWebToken, verify_jwt_token
from rocketsapp.views import CustomJWTSerializer, RegisterUsers, GetUser, UpdateUser
from django.views.decorators.csrf import csrf_exempt

from rocketsapp.api import RegisterClasses, RegisterRockets, GetClasses


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^login/', csrf_exempt(ObtainJSONWebToken.as_view(serializer_class=CustomJWTSerializer))),
    re_path(r'^register/', csrf_exempt(RegisterUsers.as_view())),
    re_path(r'^addclass/', csrf_exempt(RegisterClasses.as_view())),
    re_path(r'^addrocket/', csrf_exempt(RegisterRockets.as_view())),
    re_path(r'^updateUser/', csrf_exempt(UpdateUser.as_view())),
    re_path(r'^getclass/', csrf_exempt(GetClasses.as_view())),
    re_path(r'^getuser/', csrf_exempt(GetUser.as_view())),
]
