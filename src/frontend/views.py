from django.shortcuts import render, redirect
from django.http import JsonResponse
def index(request):
    return render(request, 'index.html')


discord_url = r"https://discord.com/api/oauth2/authorize?client_id=930069736736301067&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Fdashboard%2Fhome&response_type=code&scope=identify"
def discord(request):
    return redirect(discord_url)