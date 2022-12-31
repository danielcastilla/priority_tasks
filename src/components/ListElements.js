import React from 'react';

function ListElements(props) {
    return (
        <div>
            <div class="elemento text-limited">
          <div class="linea1">
            <div class="seguir">Sigue este tema</div>
            <div class="creado">Creado el 23 de diciembre</div>
            <div class="actualizado">Actualizado hace 1 hora</div>
          </div>
          <div class="titular text-limited">Titular de la tarea</div>
          <div class="lineaTags">
            <div class="tag">tag1</div>
            <div class="tag">tag2</div>
            <div class="tag">tag3</div>
          </div>
          <div class="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. A asperiores recusandae, repellat excepturi commodi enim ducimus libero labore officia dicta soluta laborum velit quasi distinctio doloribus ipsum obcaecati omnis unde rem minus necessitatibus minima officiis! Officiis, architecto. Explicabo blanditiis ut voluptate iste nemo omnis voluptas quo, tempore velit voluptatem doloribus. In optio ex, cumque tempore, totam, sunt iusto ipsam ab magni accusantium quae atque voluptas hic incidunt vero dolore illo earum autem. Harum soluta illum labore repellendus placeat, aliquam reiciendis error nam ullam deserunt architecto aliquid quidem quaerat dolorem quibusdam autem suscipit et minus quod optio est, nulla provident? Incidunt.</div>
        </div>
        <div class="elemento">Elemento 2</div>
        <div class="elemento">Elemento 3</div>
        </div>
    );
}

export default ListElements;