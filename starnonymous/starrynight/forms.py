from django import forms
from . import models

class StarForm(forms.ModelForm):
    star_label = forms.CharField(max_length=400, widget=forms.TextInput(attrs={'placeholder': 'XD', 'class': 'message-in'}), label='Sup nigga:')
    star_time = forms.DateTimeField(widget=forms.SplitDateTimeWidget(attrs={'type': 'hidden'}))
    xCoord = forms.CharField(max_length=12, widget=forms.TextInput(attrs={'type': 'hidden'}))
    yCoord = forms.CharField(max_length=12, widget=forms.TextInput(attrs={'type': 'hidden'}))
    class Meta:
        model = models.Star
        fields = '__all__'
