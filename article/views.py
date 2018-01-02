from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.http import HttpResponse,JsonResponse

from .models import ArticleColumn
from .forms import ArticleColumnForm

# Create your views here.

from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import ArticleColumn

@login_required()
def article_column(request):
    columns = ArticleColumn.objects.filter(user=request.user)
    return render(request, 'article/column/article_column.html', {"columns": columns})

@login_required()
@csrf_exempt
def article_column(request):
    if request.method == 'GET':
        columns = ArticleColumn.objects.filter(user=request.user)
        column_form = ArticleColumnForm()
        return render(request,'article/column/article_column.html',{"columns":columns,
                                                                    "column_form":column_form})

    if request.method == 'POST':
        column_name = request.POST['column']
        columns = ArticleColumn.objects.filter(user_id=request.user.id,column=column_name)
        if columns:
            return HttpResponse('2')
        else:
            ArticleColumn.objects.create(user=request.user, column=column_name)
            return HttpResponse('1')

@login_required()
@require_POST
@csrf_exempt
def rename_article_column(request):
    __response = dict()
    column_name = request.POST['column_name']
    column_id = request.POST['column_id']
    try:
        line = ArticleColumn.objects.get(id=column_id)
        line.column = column_name
        line.save()
        # return HttpResponse("1")
        __response['status'] = True
    except:
        # return HttpResponse("0")
        __response['status'] = False
    return JsonResponse(__response)



@login_required()
@require_POST
@csrf_exempt
def del_article_column(request):
    __response = dict()
    column_id = request.POST['column_id']
    try:
        line = ArticleColumn.objects.get(id=column_id)
        line.delete()
        # return HttpResponse('1')
        __response['status'] = True
    except:
        # return HttpResponse('2')
        __response['status'] = False
    return JsonResponse(__response)