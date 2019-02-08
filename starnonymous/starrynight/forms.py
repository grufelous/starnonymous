from django import forms

class StarForm(forms.Form):
    message = forms.CharField(max_length=512)
