#!/usr/bin/env python
#! -*- coding: utf-8 -*-

from django.conf.urls import url
from django.contrib.auth import views as auth_views
from . import views


import django.contrib.auth.views
urlpatterns = [
    # url(r'^$', views.user_login,name="user_login"),
    url(r'^$', auth_views.login,name="user_login"),
    # url(r'^logout/$', auth_views.logout,name='user_logout')
    url(r'^logout/$', auth_views.logout, {"template_name": "account/logout.html"},name='user_logout',)
]