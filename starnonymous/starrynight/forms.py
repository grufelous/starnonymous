from django import forms
from . import models

class StarForm(forms.ModelForm):
    star_label = forms.CharField(max_length=30, widget=forms.TextInput(attrs={'placeholder': 'Title', 'id': 'message-title-box'}))
    star_message = forms.CharField(max_length=512, widget=forms.TextInput(attrs={'placeholder': 'What\'s up?', 'id': 'message-box'}))
    xCoord = forms.CharField(max_length=12, widget=forms.TextInput(attrs={'type': 'hidden', 'id': 'x-coordinate'}))
    yCoord = forms.CharField(max_length=12, widget=forms.TextInput(attrs={'type': 'hidden', 'id': 'y-coordinate'}))
    class Meta:
        model = models.Star
        fields = ('star_label', 'star_message', 'xCoord', 'yCoord',)
