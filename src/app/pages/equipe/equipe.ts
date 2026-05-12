import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipe.html',
  styleUrl: './equipe.css'
})
export class Equipe {
  members = [
    {
      name: 'Dr Amélie Belinchon Sanchez',
      role: 'Chirurgien-dentiste',
      img: 'assets/img/dr_belinchon.PNG'
    },
    {
      name: 'Dr Aurore Daoudi',
      role: 'Chirurgien-dentiste',
      img: 'assets/img/dr_daoudi.PNG'
    },
    {
      name: 'Dr Jenny Ye',
      role: 'Chirurgien-dentiste',
      img: 'assets/img/dr_ye.PNG'
    },
    {
      name: 'Dr Marine Evrard',
      role: 'Chirurgien-dentiste',
      img: 'assets/img/dr_evrard.PNG'
    },
    {
      name: 'Dr Clémence Kuntz',
      role: 'Chirurgien-dentiste',
      img: 'assets/img/dr_kuntz.PNG'
    },
    {
      name: 'Dr Matthieu Juillet',
      role: 'Chirurgien-dentiste',
      img: 'assets/img/dr_juillet.PNG'
    },
    {
      name: 'Stéphanie',
      role: 'Assistante dentaire',
      img: 'assets/img/assistante_stephanie.png'
    },
    {
      name: 'Iman',
      role: 'Assistante dentaire',
      img: 'assets/img/assistante_iman.png'
    },
    {
      name: 'Camille',
      role: 'Assistante dentaire',
      img: 'assets/img/assistante_camille.png'
    },
    {
      name: 'Mélissa',
      role: 'Assistante dentaire',
      img: 'assets/img/assistante_melissa.png'
    }
  ];
}

