let textnuevatarea = $(":input")
let listadotareas = $("#listadotareas")
let buttonAdd = $("#buttonAdd")
let tablaDeTareas = $("#tablaDeTareas")
let buttonEliminar;
let grillaDeTareas = "";
let tareas = [];

function agregarTarea() {
    tareas.push(textnuevatarea.val().toString())
    localStorage.setItem("tareas", JSON.stringify(tareas))
    actualizoGrilla()
    textnuevatarea.val("")
    $(document).find(":input").focus()
}

buttonAdd.click(function() {
    agregarTarea()
})

textnuevatarea.hover(function() {
    $(this).css("background-color", "whitesmoke")
}, function() {
    $(this).css("background-color", "white")
})

function actualizoGrilla() {
    if (localStorage.tareas != undefined && localStorage.length > 0) {tareas = JSON.parse(localStorage.tareas)}
    for (var i in tareas) {
        buttonEliminar = "<button class='btn-floating button-small green waves-effect waves-light' onclick='removerTarea(" + i + ")'><i class='material-icons white-text'>check</i></button>"
        grillaDeTareas += "<tr id='tarea" + i + "'><td>" + tareas[i] + "</td><td class='center'>" + buttonEliminar + "</td></tr>"
    }
    listadotareas.html(grillaDeTareas)
    grillaDeTareas = ""
}

function removerTarea(i) {
    let tareaid = $("#tarea" + i)
        tareaid.fadeOut(1000, function() {
            eliminarTareaReal(i)
        })       
}

function eliminarTareaReal(i) {
        tareas.splice(i, 1)
        localStorage.setItem("tareas", JSON.stringify(tareas))
        actualizoGrilla()
}

$(window).ready(function() {inicioTaskIt()})

function inicioTaskIt() {
    actualizoGrilla()
    tablaDeTareas.show(3000)
}














// let efecto = setInterval(() => {
//     $('h4').fadeOut(2000, function() {
//         $('h4').fadeIn(2000)
//         })
// }, 4000);
