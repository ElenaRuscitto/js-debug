DEBUG JS
===
nome repo: js-debug

Dentro ai file ZIP allegati troverete diversi files contenenti del codice javascript. Piccolo problema: sono sbagliati! All’interno di ogni esercizio c’è un errore nascosto che non permette al codice di funzionare correttamente.


### SVOLGIMENTO
- bundle 1:
--- 1 ---
1. cicla partendo da 0 per 5 volte l'indice
2. si è presente un errore. "i deve essere < di 5", non >.
3. essendo un errore di sintassi, dal mio punto di vista corrisponde anche ad un errore di logica poichè il ciclo For si scrive con il <. se si scrive >=  va in loop

--- 2 ---
1. la condizione accetta il numero se è pari, lo somma a 5. se è dispari ritorna il numero originario
2. si, alla condizione mancano 2 uguali poichè ce ne sta solo 1
3. no


--- 3 ---
1. cicla partendo da 0 per 5 volte l'indice
2. nella consizione i parametri sono separati da "," e non da ";"
3. no


--- 4 ---
1. pusha in un array (evenNumbers) i numeri pari dell'arry (numbers)
2. si, sono 4:
  - i l' array devono essere "const"
  - il ";" dopo l'indice incrementato
  - manca un "=" nell' if
  - c'è un  ";" tra la ) e l'apertura della { nell'if

3. si, sono 3:
  - nell'if bisogna prendere l'indice di numbers
  - bisogna levare il "-1" a numbers.length, altrimenti ci restituisce solo 2, 4, 6. altrimenti si poteva scrivere <=
  - il push deve essere dell'indice di numbers
  - il return deve essere fuori dal For
