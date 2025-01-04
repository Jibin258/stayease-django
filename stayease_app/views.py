from django.shortcuts import render
from django.http import JsonResponse
from .models import Enquirie
# from django.views.decorators.csrf import csrf_exempt
import json

# @csrf_exempt
# Create your views here.
def index(request):
    return render(request, "index.html")

def normal_enquiry(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name', '')
            phone = data.get('phone', '')
            email = data.get('email', '')
            comments = data.get('comments', '')

            Enquirie.objects.create(
                name=name,
                phone=phone,
                email=email,
                comments=comments
            )

            # Example response (you can add database saving here)
            response_message = f"Thank you {name}, your enquiry has been received!"
            return JsonResponse({'message': response_message}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
