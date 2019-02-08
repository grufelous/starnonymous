from django import forms

class StarForm(forms.Form):
    message = forms.CharField(max_length=512)
    time = forms.DateTimeField()
    x = forms.CharField(max_length=22)
    y = forms.CharField(max_length=22)
