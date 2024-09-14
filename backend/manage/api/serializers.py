from rest_framework import serializers
from manage.models import Event, ContactMessage


class EventSerializer(serializers.ModelSerializer):
    title = serializers.CharField(
        required=True,
        allow_blank=False,
        error_messages={'blank': 'Title must provided'}
    )
    featured = serializers.CharField(
        required=True,
        allow_blank=False,
        error_messages={'blank': 'Select whether to appear on welcome'}
    )
    description = serializers.CharField(
        required=True,
        allow_blank=False,
        error_messages={'blank': 'Description must provided'}
    )
    # images = serializers.CharField(
    #     required=True,
    #     allow_blank=False,
    #     error_messages={'blank': 'Atleast one image is required'}
    # )

    class Meta:
        model = Event
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(
        required=True,
        allow_blank=False,
        error_messages={'blank': 'Fill name Please'}
    )
    email = serializers.CharField(
        required=True,
        allow_blank=False,
        error_messages={'blank': 'Fill email Please'}
    )
    suggestion = serializers.CharField(
        required=True,
        allow_blank=False,
        error_messages={'blank': 'Fill suggestion Please'}
    )

    class Meta:
        model = ContactMessage
        fields = '__all__'
