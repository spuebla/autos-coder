import React from 'react'
import "../componentes/css/NavBar.css"
import CartWidget from './CartWidget'
export default function NavBar() {
    return (
       <header className="HeaderNav">
        <nav className="Menu">
            <h2 className="logo">LOGO</h2>
    <div class="input-group buscador">
        <input
          type="text"
          placeholder="Escribe aqui el vehiculo que buscas"
          class="form-control"
          onkeypress="capturarEnter(event)"
          aria-label="Text input with segmented dropdown button"
        ></input>
        <div class="input-group-append"></div>
        <button type="submit" value="enviar" class="btn btn-outline-primary">
          BUSCAR
        </button>
        <button
          type="button"
          class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="sr-only">TIPO</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">
            Autos
          </a></li>
          <li><a className="dropdown-item" href="#">
            Camionetas
          </a></li>
        </ul>
      </div>
            <ul>
                <li>
                  <div ClassName="CartWidget">
                    <CartWidget/>
                  </div>
                </li>
            </ul>
        </nav>
        <nav className="Menu2">
      <ul>
        <li className="Menu">
          <h3>AUTOS</h3>
        </li>
        <li className="Menu">
          <h3>CAMIONETAS</h3>
        </li>
      </ul>
    </nav>

       </header>
    
    )
}
