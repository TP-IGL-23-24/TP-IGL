from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/', include('app.urls')),
    path('auth/', include('authentication.urls')),
    path('', RedirectView.as_view(url='/auth/login/')),  # Redirect to the login page
    # path('ext/', include('extraction.urls')),
    # Add other app URLs here as needed
]
