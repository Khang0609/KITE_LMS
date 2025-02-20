from django.shortcuts import render

# Create your views here.
def score(request):
    return render(request, 'Score/score.html')

def capacity(request):
    return render(request, 'Score/academic-capacity.html')