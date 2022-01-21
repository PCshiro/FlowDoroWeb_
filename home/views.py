from django.shortcuts import render, redirect
from home.models import Tasks
# Create your views here.
def renderHome(request):
    print("Algo")
    task = Tasks.objects.filter()
    context = {
        'task': task
    }
    return render(request, 'home.html',context = context)

def renderCreate(request):

    print("===================ESTE ES EL BACK =========================")
    print(request.POST)
    if (request.POST):
        Tasks.objects.create(name=request.POST['name'])
        print("METODO POST")
        print("VALOR")
        return redirect(renderRead)

    return redirect(renderRead)

def renderRead(request):
    task = Tasks.objects.filter()
    context = {
        'task': task
    }
    return render(request, 'home.html', context=context)

def renderDeleteFisicTask(request,id):
    print("==Eliminar FISICO==\n")
    Tsk = Tasks.objects.get(id=id)
    Tsk.delete()
    print("==Eliminar FISICO==\n")
    return redirect(renderRead)

def renderDeleteLogicTask(request,id):
    Tsk = Tasks.objects.get(id=id)
    Tsk.estado = 0
    Tsk.save()
    print("==Eliminar Logico==\n")
    return redirect(renderRead)