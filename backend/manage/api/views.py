from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /events',
        'POST /add-event'
        'GET /event'
    ]

    return Response(routes)

@api_view(['POST'])
def createNewEvent(request):
    serializer = EventSerializer(data=request.data)
    if request.method == 'POST':
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Event added"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response({"error": "Internal Server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
