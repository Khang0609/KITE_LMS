from django.shortcuts import render
from .models import Score  # Import your model here, e.g., from.models import Score

# Create your views here.
def score(request):
    Data = {'score' : Score.objects.all()}
    return render(request, 'Score/score.html', Data)

def HanhKiem(request):
    return render(request, 'Score/hanh-kiem.html')

def BieuDo(request):
    return render(request, 'Score/bieu-do.html')

def capacity(request):
    return render(request, 'Score/academic-capacity.html')