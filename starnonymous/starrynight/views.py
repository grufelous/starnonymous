from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.core import serializers
import datetime
from django.utils import timezone
from django.views.generic import TemplateView, ListView
from .forms import StarForm
from .models import Star

def index(request):
    # star_form = StarForm()
    time_to_shine = timezone.now()-datetime.timedelta(hours=100, minutes=59, seconds=59)
    # star_list = Star.objects.filter(star_time__gte=past_day)
    star_list = serializers.serialize("json", Star.objects.filter(star_time__gte=time_to_shine), fields=('star_label', 'star_message', 'xCoord', 'yCoord', 'star_time'))
    print(star_list)
    if request.method == 'POST':
        star_form = StarForm(request.POST)
        if star_form.is_valid():
            star_input_data = star_form.save(commit=False)
            star_input_data.star_time = timezone.now()
            star_input_data.save()
            # suitable return here
    else:
        star_form = StarForm()
    return render(request, 'starrynight/index.html', {'star': timezone.now(), 'form': star_form, 'star_list': star_list})

def create_star(request):
    post_data = request.POST
    message = post_data['message']
    x_coord = post_data['x-coord']
    y_coord = post_data['y-coord']
    time = timezone.now()
    new_star = Star(star_label=message, star_time=time, xCoord=x_coord, yCoord=y_cord)
    new_star.save()

class IndexView(ListView):
    model = Star
    template_name='starrynight/index.html'
    star_form = StarForm()
    # context = {'form': star_form}
