from django.core.mail import send_email
from django.conf import settings
from django import forms
from .models import User
import random

class RegisterForm(forms.ModelForm):
    email = forms.EmailField(required=True)
    username = forms.CharField(max_length=32, required=True)
    password = forms.CharField(widget=forms.PasswordInput(), required=True)
    verification_code = forms.CharField(max_length=4, required=False)

    class Meta:
        model = User
        fields = ['name', 'password']

    def clean_verification_code(self):
        verification_code = self.cleaned_data['verification_code']
        email = self.cleaned_data['email']
        if not verification_code:
            # generate random 4-digit codes
            verification_code = str(random.randint(1000, 9999))
            # send codes to email
            send_verification_code_email(email, verification_code)
        return verification_code

class ResetPasswordForm(forms.Form):
    email = forms.EmailField(required=True)
    username = forms.CharField(max_length=32, required=True)
    verification_code = forms.CharField(max_length=4, required=False)
    new_password = forms.CharField(widget=forms.PasswordInput(), required=True)

    def clean_verification_code(self):
        email = self.cleaned_data['email']
        username = self.cleaned_data['username']
        verification_code = self.cleaned_data['verification_code']

        user = User.objects.filter(name=username).first()
        if not user:
            raise forms.ValidationError('User does not exist.')
        if not verification_code:
          
            verification_code = str(random.randint(1000, 9999))
            send_verification_code_email(email, verification_code)
        return verification_code

def send_verification_code_email(email, verification_code):
    subject = 'Verification Code'
    message = f'Your verification code is: {verification_code}'
    email_from = settings.DEFAULT_FROM_EMAIL
    recipient_list = [email]
    send_mail(subject, message, email_from, recipient_list)
