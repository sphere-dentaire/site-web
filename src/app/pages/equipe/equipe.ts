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
      university: 'Université de Bordeaux et Paris Evry',
      img: 'assets/img/dr_belinchon.PNG'
    },
    {
      name: 'Dr Aurore Daoudi',
      role: 'Chirurgien-dentiste',
      university: 'Université de Paris Cité',
      img: 'assets/img/dr_daoudi.PNG'
    },
    {
      name: 'Dr Jenny Ye',
      role: 'Chirurgien-dentiste',
      university: 'Université de Paris Cité',
      img: 'assets/img/dr_ye.PNG'
    },
    {
      name: 'Dr Marine Evrard',
      role: 'Chirurgien-dentiste',
      university: 'Université de Lisbonne',
      img: 'assets/img/dr_evrard.PNG'
    },
    {
      name: 'Dr Clémence Kuntz',
      role: 'Chirurgien-dentiste',
      university: 'Université de Valencia',
      img: 'assets/img/dr_kuntz.PNG'
    },
    {
      name: 'Dr Matthieu Juillet',
      role: 'Chirurgien-dentiste',
      university: 'Université de Paris Garancière',
      img: 'assets/img/dr_juillet.PNG'
    },
    {
      name: 'Stéphanie',
      role: 'Assistante dentaire',
      img: 'assets/img/assistante_stephanie.PNG'
    },
    {
      name: 'Iman',
      role: 'Assistante dentaire',
      img: 'assets/img/assistante_iman.PNG'
    },
    {
      name: 'Camille',
      role: 'Assistante dentaire',
      img: 'assets/img/assistante_camille.PNG'
    },
    {
      name: 'Mélissa',
      role: 'Assistante dentaire',
      img: 'assets/img/assistante_melissa.PNG'
    }
  ];
}

