from django.contrib import admin
from django.urls import path, include
from card import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # Дотуп к frontend странице
    path('', views.frontend, name='frontend'),
    # Дотуп к login/logout странице
    path('login/', include('django.contrib.auth.urls')),
    # Дотуп к backend странице
    path('backend/', views.backend, name='backend'),
    # Дотуп к странице добавление пациента
    path('add_patient', views.add_patient, name='add_patient'),
    # Дотуп к странице добавление особенностей пациента
    path('patient/<str:patient_id>', views.patient, name='patient'),
    # Устанока пациента
    path('edit_patient', views.edit_patient, name='edit_patient'),
    # Удаление пациента
    path('delete_patient/<str:patient_id>', views.delete_patient, name='delete_patient'),
]
