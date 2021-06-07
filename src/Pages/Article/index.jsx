import Markdown from "markdown-to-jsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container } from "./style";

const input = `
# bio353's Pokédex (WIP)

### Projeto de Banco de Dados II

This Pokédex is being created as the final project for a specific subject at my college. I'm planning to also use it, however, alongside my **custom ruleset** for [Pokerole RPG](https://www.pokeroleproject.com/).

### What this project aims to do?

This will be a database containing information about all Pokémon, its moves and abilities, held items and pretty much everything you need to know to play like a true gamer.

Later on, I will create an entire new database exclusively for my ruleset and maybe a dice roller.

### Let's get started!

> "Are you a boy? Or are you a girl?" - Prof. Oak
Sample text.

###  What technologies will be used?

  * [MongoDB](https://www.mongodb.com/)
  * [Python](https://www.python.org/)

### My special thanks to...

  * [PokéAPI](https://pokeapi.co/)
  * [Pokerole Project](https://www.pokeroleproject.com/)
  * reserved
  * reserved
  * 
# bio353's Pokédex (WIP)

### Projeto de Banco de Dados II

This Pokédex is being created as the final project for a specific subject at my college. I'm planning to also use it, however, alongside my **custom ruleset** for [Pokerole RPG](https://www.pokeroleproject.com/).

### What this project aims to do?

This will be a database containing information about all Pokémon, its moves and abilities, held items and pretty much everything you need to know to play like a true gamer.

Later on, I will create an entire new database exclusively for my ruleset and maybe a dice roller.

### Let's get started!

> "Are you a boy? Or are you a girl?" - Prof. Oak
Sample text.

###  What technologies will be used?

  * [MongoDB](https://www.mongodb.com/)
  * [Python](https://www.python.org/)

### My special thanks to...

  * [PokéAPI](https://pokeapi.co/)
  * [Pokerole Project](https://www.pokeroleproject.com/)
  * reserved
  * reserved

# bio353's Pokédex (WIP)

### Projeto de Banco de Dados II

This Pokédex is being created as the final project for a specific subject at my college. I'm planning to also use it, however, alongside my **custom ruleset** for [Pokerole RPG](https://www.pokeroleproject.com/).

### What this project aims to do?

This will be a database containing information about all Pokémon, its moves and abilities, held items and pretty much everything you need to know to play like a true gamer.

Later on, I will create an entire new database exclusively for my ruleset and maybe a dice roller.

### Let's get started!

> "Are you a boy? Or are you a girl?" - Prof. Oak
Sample text.

###  What technologies will be used?

  * [MongoDB](https://www.mongodb.com/)
  * [Python](https://www.python.org/)

### My special thanks to...

  * [PokéAPI](https://pokeapi.co/)
  * [Pokerole Project](https://www.pokeroleproject.com/)
  * reserved
  * reserved

# bio353's Pokédex (WIP)

### Projeto de Banco de Dados II

This Pokédex is being created as the final project for a specific subject at my college. I'm planning to also use it, however, alongside my **custom ruleset** for [Pokerole RPG](https://www.pokeroleproject.com/).

### What this project aims to do?

This will be a database containing information about all Pokémon, its moves and abilities, held items and pretty much everything you need to know to play like a true gamer.

Later on, I will create an entire new database exclusively for my ruleset and maybe a dice roller.

### Let's get started!

> "Are you a boy? Or are you a girl?" - Prof. Oak
Sample text.

###  What technologies will be used?

  * [MongoDB](https://www.mongodb.com/)
  * [Python](https://www.python.org/)

### My special thanks to...

  * [PokéAPI](https://pokeapi.co/)
  * [Pokerole Project](https://www.pokeroleproject.com/)
  * reserved
  * reserved



`;

export default function Article() {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        <Markdown>{input}</Markdown>
      </Wrapper>
    </Container>
  );
}
