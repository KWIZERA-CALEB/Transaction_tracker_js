from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /events',
    ]

    return Response(routes)