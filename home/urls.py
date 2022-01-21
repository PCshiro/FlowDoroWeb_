from django.urls import path
from home import views

urlpatterns = [
    # path( patron de url , backend, nombre de la variable)
    path('home/', views.renderHome, name="home"),
    path('home/create/', views.renderCreate, name="createTask"),
    path('home/', views.renderRead, name="readTask"),

]