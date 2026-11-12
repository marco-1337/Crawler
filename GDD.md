# Crawler - GDD

## Concepto

*Crawler* es un juego del género de acción-aventura 2D, en el que encarnas a un aventurero abriéndose paso entre distintos monstruos en busca de un tesoro. El juego está inspirado por juegos retro como Zelda: Oracle of Ages/Seasons y la fantasía pulp.

## Objetivos de diseño

- Se busca evocar una nostalgia cultural, es decir nostalgia por algo que no necesariamente haya sido vivido si no que ha quedado idealizado en el imaginario colectivo.
- El control y mecánicas se plantean como sencillos, no hay profundidad mecánica excesiva ya que el objetivo no es ser un reto pesado de reflejos si no más bien plantear una aventura arquetípica que pueda ser igualmente interesante.
- La narrativa se plantea con una gran carencia expositiva, queriendo narrar a través de el estilo artístico del juego así como del diseño. Esto da pie a una narrativa de interpretación abierta.

## Estructura del mundo

EL mundo del juego está físicamente estructurado a nivel macro por salas mientras que a nivel "atómico" el elemento unitario son las tiles. 

Una sala está compuesta de 20 x 13 tiles.

Las salas están conectadas entre sí por entradas disponibles en las dos baldosas centrales de cada lado, con un máximo de 4 conexiones por sala.

![](./gdd%20resources/pantallas.png)

### Jugador

El jugador interactua con el juego y el mundo a través de un personaje que puede moverse, atacar e interactuar con los elementos del mapa.

### Moviemiento

...