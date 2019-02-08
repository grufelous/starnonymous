from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.utils import timezone
from django.views.generic import TemplateView, ListView
from .forms import StarForm
from .models import Star

def index(request):
    # star_object.time = timezone.now()
    # star_object.number = 42
    star_form = StarForm()
    return render(request, 'starrynight/index.html', {'star': timezone.now(), 'form': star_form})


class IndexView(ListView):
    model = Star
    template_name='starrynight/index.html'
    star_form = StarForm()
    # context = {'form': star_form}
