from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime

def blank(request):
    return render(HttpResponse(f"<h1>Current time is {datetime.now()} </h1>"))