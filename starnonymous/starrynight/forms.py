from django import forms
from . import models

class StarForm(forms.ModelForm):
    star_label = forms.CharField(max_length=400, widget=forms.TextInput(attrs={'placeholder': 'Message', 'class': 'message-in'}))
    star_time = forms.DateTimeField(widget=forms.SplitDateTimeWidget(attrs={'type': 'hidden'}))     # referred as DTF/SDTW respectively. Time to be taken from jQuery in the JS file.
    xCoord = forms.CharField(max_length=12, widget=forms.TextInput(attrs={'type': 'hidden', 'id': 'x-coordinate'}))
    yCoord = forms.CharField(max_length=12, widget=forms.TextInput(attrs={'type': 'hidden', 'id': 'y-coordinate'}))
    class Meta:
        model = models.Star
        fields = '__all__'
