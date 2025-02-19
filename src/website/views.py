from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "website/index.html")

def levels(request):
    return render(request, "website/levels.html")

def home(request):
    photo_data = {
        'photo_1': 'https://picsum.photos/seed/1/300/200',
        'photo_2': 'https://picsum.photos/seed/2/300/400',
        'photo_3': 'https://picsum.photos/seed/3/300/300',
        'photo_4': 'https://picsum.photos/seed/4/300/300',
        'photo_5': 'https://picsum.photos/seed/5/300/300',
        'photo_6': 'https://picsum.photos/seed/6/300/300',
        'photo_7': 'https://picsum.photos/seed/7/300/400',
        'photo_8': 'https://picsum.photos/seed/8/300/300',
        'photo_9': 'https://picsum.photos/seed/9/300/200',
        'photo_10': 'https://picsum.photos/seed/10/300/100',
        'photo_11': 'https://picsum.photos/seed/11/300/400',
        'photo_12': 'https://picsum.photos/seed/12/300/400',
    }
    return render(request, 'website/home.html', photo_data)