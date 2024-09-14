from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from manage.models import Event, ContactMessage
from .serializers import EventSerializer, ContactMessageSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /routes/',
        'POST /add-event/',
        'GET /events/',
        'GET /event/<str:pk>/',
        'GET /featured-events/',
        'POST /send-message/',
        'GET /contact-messages/'
    ]

    return Response(routes)

@api_view(['GET'])
def getContactMessages(request):
    if request.method == 'GET':
        messages = ContactMessage.objects.all()
        serializer = ContactMessageSerializer(messages, many=True)
        json_data = serializer.data
        return Response({'messages': json_data}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def sendMessage(request):
    serializer = ContactMessageSerializer(data=request.data)
    if request.method == 'POST':
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Message Sent"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def createNewEvent(request):
    serializer = EventSerializer(data=request.data)
    if request.method == 'POST':
        if serializer.is_valid():
            # images = request.FILES.getList('images')
            # for image in images:
            #     serializer.save(images=image)
            serializer.save()
            return Response({"message": "Event added"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response({"error": "Internal Server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def getSingleEvent(request, pk):
    if request.method == 'GET':
        event = Event.objects.get(id=pk)
        serializer = EventSerializer(event, many=False)
        json_data = serializer.data
        return Response({'event': json_data}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def getEvents(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        json_data = serializer.data
        return Response({'events': json_data}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def getFeaturedEvents(request):
    if request.method == 'GET':
        events = Event.objects.filter(featured='yes')
        serializer = EventSerializer(events, many=True)
        json_data = serializer.data
        return Response({'events': json_data}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



