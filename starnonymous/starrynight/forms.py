from django import forms

class StarForm(forms.Form):
    message = forms.CharField(max_length=512, widget=forms.TextInput(attrs={'placeholder': 'XD', 'class': 'message-in'}))
