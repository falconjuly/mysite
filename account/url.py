#!/usr/bin/env python
#! -*- coding: utf-8 -*-

from django.conf.urls import url
from . import views
from .views import  user_login

urlpatterns = [
    url(r'^$', views.user_login(),name="user_login"),
]