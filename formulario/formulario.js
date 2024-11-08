        // Función para procesar el formulario
        function procesarFormulario() {
            // Obtener valores de los campos
            var nombre = document.getElementById("nombre").value;
            var edad = document.getElementById("edad").value;
            var genero = document.querySelector('input[name="genero"]:checked').value;
            var suscripcion = document.getElementById("suscripcion").checked ? "Sí" : "No";
            var pais = document.getElementById("pais").value;

            // Mostrar los valores procesados en el div de resultado
            document.getElementById("resultado").innerText = 
                "Nombre: " + nombre + "\n" +
                "Edad: " + edad + "\n" +
                "Género: " + genero + "\n" +
                "Suscripción: " + suscripcion + "\n" +
                "País: " + pais;
        }


                // Función para limpiar el formulario
                function limpiarFormulario() {
                    // Limpiar todos los campos
                    document.getElementById("nombre").value = "";
                    document.getElementById("edad").value = "";
                    document.getElementById("masculino").checked = false;
                    document.getElementById("femenino").checked = false;
                    document.getElementById("suscripcion").checked = false;
                    document.getElementById("pais").selectedIndex = 0;
        
                    // Limpiar el resultado mostrado
                    document.getElementById("resultado").innerText = "";
                }