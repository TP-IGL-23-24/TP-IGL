
from django.urls import path
from .views import AddArticleView

urlpatterns = [
    path('ext/', AddArticleView.as_view(), name='add-article'),
]
