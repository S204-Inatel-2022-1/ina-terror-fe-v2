import Markdown from "markdown-to-jsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container } from "./style";

const input = `
# Ghosts


## Banshee
"A Banshee is a natural hunter and will attack anything. It has been known to stalk its prey one at a time until making its kill.

Unique Strengths: A Banshee will only target one person at a time.

Weaknesses: Banshees fear the Crucifix and will be less aggressive when near one.

Evidence: EMF Level 5, Fingerprints, Freezing Temperatures"

## Demon
"A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.

Unique Strengths: Demons will attack more often than any other Ghost.

Weaknesses: Asking a Demon successful questions on the Ouija Board won't lower the user's sanity.

Evidence: Freezing Temperatures, Ghost Writing, Spirit Box"

## Jinn
"A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed.

Unique Strengths: A Jinn will travel at a faster speed if its victim is far away.

Weaknesses: Turning off the locations power source will prevent the Jinn from using its ability.

Evidence: EMF Level 5, Ghost Orb, Spirit Box"

## Mare
"A Mare is the source of all nightmares, making it most powerful in the dark.

Unique Strengths: A Mare will have an increased chance to attack in the dark.

Weaknesses: Turning the lights on around the Mare will lower its chance to attack.

Evidence: Freezing Temperatures, Ghost Orb, Spirit Box"

## Oni
"Oni's are a cousin to the Demon and possess extreme strength. There have been rumours that they become more active around their prey.

Unique Strengths: Oni's are more active when people are nearby and have been seen moving objects at great speed.

Weaknesses: Being more active make the Oni easier to find and identify

Evidence: EMF Level 5, Ghost Writing, Spirit Box"



## Phantom
"A Phantom is a ghost that can possess the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.

Unique Strengths: Looking at a Phantom will considerably drop your sanity.

Weaknesses: Taking a photo of the Phantom will make it temporarily disappear.

Evidence: EMF Level 5, Freezing Temperatures, Ghost Orb"


## Poltergeist
"One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into its victims.

Unique Strengths: A Poltergeist can throw huge amounts of objects at once.

Weaknesses: A Poltergeist is almost ineffective in an empty room.

Evidence: Fingerprints, Ghost Orb, Spirit Box"


## Revenant
"A Revenant is a slow but violent ghost that will attack indiscriminately. It has been rumoured to travel at a significantly high speed when hunting.

Unique Strengths: A Revenant will travel at a significantly faster speed when hunting a victim.

Weaknesses: Hiding from the Revenant will cause it to move very slowly.

Evidence: EMF Level 5, Fingerprints, Ghost Writing"


## Shade
"A Shade is known to be a Shy Ghost. There is evidence that a Shade will stop all paranormal activity if there are multiple people nearby.

Unique Strengths: Being shy means the Ghost will be harder to find.

Weaknesses: The Ghost will not enter hunting mode if there is multiple people nearby.

Evidence: EMF Level 5, Ghost Orb, Ghost Writing"


## Spirit
"A Spirit is the most common Ghost you will come across however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.

Unique Strengths: Nothing

Weaknesses: Using Smudge Sticks on a spirit will stop it attacking for a long period of time.

Evidence: Fingerprints, Ghost Writing, Spirit Box"


## Wraith
"A wraith is one of the most dangerous ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.

Unique Strengths: Wraiths almost never touch the ground meaning it can't be tracked by footsteps.

Weaknesses: Wraiths have a toxic reaction to Salt.

Evidence: Fingerprints, Freezing Temperatures, Spirit Box"


## Yurei
"A Yurei is a Ghost that has returned to the physical world, usually for the purpose of revenge or hatred.

Unique Strengths: Yurei's have been known to have a stronger effect on people sanity.

Weaknesses: Smudging the Yurei's room will cause it to not wander around the location for a long time.

Evidence: Freezing Temperatures, Ghost Orb, Ghost Writing"
`;

export default function Article() {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        <Markdown>{input}</Markdown>

        <button onClick={() => history.push("/menu")} className="goback">Go Back</button>
      </Wrapper>
    </Container>
  );
}
