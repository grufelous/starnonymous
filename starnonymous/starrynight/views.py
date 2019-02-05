from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.utils import timezone
from django.views.generic import TemplateView

def index(request):
    # star_object.time = timezone.now()
    # star_object.number = 42
    return render(request, 'starrynight/index.html', {'star': timezone.now() })


class IndexView(TemplateView):
    template_name='starrynight/index.html'
    
