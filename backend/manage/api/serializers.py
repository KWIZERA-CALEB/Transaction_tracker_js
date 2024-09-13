from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True)

    class Meta:
        model = Event
        fields = ('title', 'description')
