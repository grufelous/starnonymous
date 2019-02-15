from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('2/', views.IndexView.as_view()),
    path('demo/', views.demo_view, name='demo'),
]
