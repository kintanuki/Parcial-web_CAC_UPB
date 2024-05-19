const routes: { [key: string]: string} = {
  '/': `
  <section class="text-person">
            <article class="container">
                <p>En CAC-UPB, nos dedicamos a brindarle una experiencia rápida, eficiente y sin complicaciones 
                    para agendar sus citas. Sabemos lo valioso que es su tiempo y por eso hemos creado una 
                    plataforma que le permite gestionar sus citas de manera sencilla y conveniente desde 
                    cualquier lugar y en cualquier momento. Nuestra misión es facilitar su vida, 
                    permitiéndole enfocarse en lo que realmente importa, mientras nosotros nos 
                    encargamos de que su agenda esté siempre organizada y al día.</p>
                <img src="../imagenes/hombre.png" alt="">    
            </article>
        </section>
  `,
  '/agendar': `
  <section class="container">
  <article class="date">
      <h1>Agenta tu cita</h1>
      <form action="">
          <div class="date1">
              <div class="inf">
                  <input type="text" placeholder="Ingresa tu nombre">
                  <label for="">Nombre</label>
              </div>
              <div class="inf">
                  <input type="text" placeholder="Ingresa tu identificación">
                  <label for="">Identificación</label>
              </div>
          </div>
          <div class="date1">
              <div class="inf">
                  <input type="date">
                  <label for="">Fecha de nacimiento</label>
              </div>
              <div class="inf">
                  <input type="date">
                  <label for="">Fecha de la cita</label>
              </div>
          </div>
          <div class="date1">
              <div class="inf">
                  <input type="text" placeholder="Dirección">
                  <label for="">Dirección</label>
              </div>
              <div class="inf">
                  <input type="time" placeholder="Hora">
                  <label for="">Hora de la cita</label>
              </div>
          </div>
          <div class="date1">
              <div class="inf">
                  <select name="" id="">
                      <option value="">Selecciona el tipo de cita</option>
                      <option value="">Devoluciones</option>
                      <option value="">Reclamos</option>
                      <option value="">Asesorias</option>
                  </select>
                  <label for="">Tipo de cita</label>
              </div>
              <div class="inf">
                  <select name="" id="">
                      <option value="">Selecciona el lugara de la cita</option>
                      <option value="">Campus UPB seccional Bucaramanga</option>
                  </select>                
                  <label for="">Lugar de la cita</label>
              </div>
          </div>
          <div class="inf">
              <textarea name="" id="" placeholder="Ingresa la descripcion de la cita"></textarea>
              <label for="">Descripción de la cita</label>
          </div>
          <a class="agendar"id="agendar">Agendar cita</a>
      </form>
  </article>
</section>
<div id="agendar_cita" class="modal">
  <div class="modal-content">
      <span class="cerrar" onclick="cerrar()">&times;</span>
      <p>Seguro que quieres agendar esta cita?</p>
  </div>
</div>
  `,
  '/citas': `
  <section class="container">
                <article class="search">
                    <h1>Ingresa tu número de identifiación</h1>
                    <form action="">
                        <input type="text" placeholder="Ingresa tu número de identificación" class="busca">
                        <input type="submit" value="Buscar cita" class="buscar">
                    </form>
                    
                </article>
                    <article class="cita">
                        <i class="bi bi-person-circle user"></i>
                        <p>Juan Diego Quintana Reyes</p>
                        <p>8:00 AM</p>
                        <div class="button">
                            <a href="modificar.html" class="modificar">Modificar cita</a>
                            <a href="modificar.html" class="cancelar">Cancelar cita</a>    
                        </div>
                    </article>
                    <article class="cita">
                        <i class="bi bi-person-circle user"></i>
                        <p>Juan Diego Quintana Reyes</p>
                        <p>8:00 AM</p>
                        <div class="button">
                            <a class="modificar">Modificar cita</a>
                            <a class="cancelar">Cancelar cita</a>    
                        </div>
                    </article>
                    <article class="cita">
                        <i class="bi bi-person-circle user"></i>
                        <p>Juan Diego Quintana Reyes</p>
                        <p>8:00 AM</p>
                        <div class="button">
                            <a class="modificar">Modificar cita</a>
                            <a class="cancelar">Cancelar cita</a>    
                        </div>
                    </article>
        </section>
  `,
  '/cola': `
  <section class="container">
            <h1>Cola</h1>
            <article class="cola">
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
                <div class="numero">
                    <i class="bi bi-ticket icon-ticket"></i> 
                    <p>Turno</p>
                    <p>J-20</p>
                    <p>Banco F</p>
                </div>
            </article>
        </section>
  `,
  '/ticket': `
  <section class="container">
  <article class="info-ticket">
      <h1>Obten tu ticket</h1>
      <p>En este apartado puedes obtener tu ticket para estar en la cola de las personas que van llegando
          . Ingresa tu númeor de identificación y dale al boton “obtener ticket” y este se generara automaticamente</p>
          <h2>Ingresa tu número de identificación</h2>
          <form action="">
              <input type="number" placeholder="Número de identificación">
              <button>Obtener ticket</button>    
          </form>
  </article>
  <article class="ticket">
      <i class="bi bi-ticket icon-ticket" ></i>
      <p>Tu turno</p>
      <p>J-20</p>
      <p>Banco F</p>
  </article>
</section>
  `,
  '/login': `
  <section class="container">
                <article>
                    <h1>Inicia Sesión</h1>
                    <form action="">
                        <input type="text" placeholder="Ingresa el usuario">
                        <input type="password" name="" id="" placeholder="Ingresa la contraseña">
                        <input type="submit" value="Iniciar" class="iniciar">
                    </form>
                </article>
        </section>
  `
}

export default routes;