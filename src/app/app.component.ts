import { Component } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'animalspagination';
  displayedColumns: string[] = ['number', 'animal', 'botanical name', 'group'];
  dataSource = new MatTableDataSource<AnimalElement>(ANIMAL_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


}

export interface AnimalElement {
  number: number;
  animal: string;
  botanicalName: string;
  group: string;
}

const ANIMAL_DATA: AnimalElement[] = [
  { number: 1, animal: 'Dog', botanicalName: 'Canis lupus familiaris', group: 'Mammals' },
  { number: 2, animal: 'Cat', botanicalName: 'Felis catus', group: 'Mammals' },
  { number: 3, animal: 'Elephant', botanicalName: 'Loxodonta africana', group: 'Mammals' },
  { number: 4, animal: 'Giraffe', botanicalName: 'Giraffa camelopardalis', group: 'Mammals' },
  { number: 5, animal: 'Horse', botanicalName: 'Equus ferus caballus', group: 'Mammals' },
  { number: 6, animal: 'Frog', botanicalName: 'Lithobates catesbeianus', group: 'Amphibians' },
  { number: 7, animal: 'Toad', botanicalName: 'Bufonidae', group: 'Amphibians' },
  { number: 8, animal: 'Salamander', botanicalName: 'Salamandridae', group: 'Amphibians' },
  { number: 9, animal: 'Lizard', botanicalName: 'Squamata', group: 'Reptiles' },
  { number: 10, animal: 'Snake', botanicalName: 'Serpentes', group: 'Reptiles' },
  { number: 11, animal: 'Turtle', botanicalName: 'Testudines', group: 'Reptiles' },
  { number: 12, animal: 'Crocodile', botanicalName: 'Crocodylinae', group: 'Reptiles' },
  { number: 13, animal: 'Parrot', botanicalName: 'Psittacoidea', group: 'Birds' },
  { number: 14, animal: 'Penguin', botanicalName: 'Spheniscidae', group: 'Birds' },
  { number: 15, animal: 'Eagle', botanicalName: 'Accipitridae', group: 'Birds' },
  { number: 16, animal: 'Owl', botanicalName: 'Strigiformes', group: 'Birds' },
  { number: 17, animal: 'Fish', botanicalName: 'Actinopterygii', group: 'Fish' },
  { number: 18, animal: 'Shark', botanicalName: 'Selachimorpha', group: 'Fish' },
  { number: 19, animal: 'Octopus', botanicalName: 'Octopoda', group: 'Fish' },
  { number: 20, animal: 'Dolphin', botanicalName: 'Delphinidae', group: 'Mammals' },
  
    { number: 21, animal: 'Panda', botanicalName: 'Ailuropoda melanoleuca', group: 'Mammals' },
    { number: 22, animal: 'Tiger', botanicalName: 'Panthera tigris', group: 'Mammals' },
    { number: 23, animal: 'Gorilla', botanicalName: 'Gorilla beringei', group: 'Mammals' },
    { number: 24, animal: 'Kangaroo', botanicalName: 'Macropodidae', group: 'Mammals' },
    { number: 25, animal: 'Polar Bear', botanicalName: 'Ursus maritimus', group: 'Mammals' },
    { number: 26, animal: 'Frog', botanicalName: 'Dendrobatidae', group: 'Amphibians' },
    { number: 27, animal: 'Salamander', botanicalName: 'Ambystomatidae', group: 'Amphibians' },
    { number: 28, animal: 'Toad', botanicalName: 'Bufonidae', group: 'Amphibians' },
    { number: 29, animal: 'Iguana', botanicalName: 'Iguanidae', group: 'Reptiles' },
    { number: 30, animal: 'Gecko', botanicalName: 'Gekkota', group: 'Reptiles' },
    { number: 31, animal: 'Chameleon', botanicalName: 'Chamaeleonidae', group: 'Reptiles' },
    { number: 32, animal: 'Komodo Dragon', botanicalName: 'Varanus komodoensis', group: 'Reptiles' },
    { number: 33, animal: 'Eagle', botanicalName: 'Aquila', group: 'Birds' },
    { number: 34, animal: 'Ostrich', botanicalName: 'Struthio camelus', group: 'Birds' },
    { number: 35, animal: 'Penguin', botanicalName: 'Aptenodytes', group: 'Birds' },
    { number: 36, animal: 'Peacock', botanicalName: 'Pavo cristatus', group: 'Birds' },
    { number: 37, animal: 'Goldfish', botanicalName: 'Carassius auratus', group: 'Fish' },
    { number: 38, animal: 'Clownfish', botanicalName: 'Amphiprioninae', group: 'Fish' },
    { number: 39, animal: 'Salmon', botanicalName: 'Salmo', group: 'Fish' },
    { number: 40, animal: 'Whale', botanicalName: 'Cetacea', group: 'Mammals' },
    { number: 41, animal: 'Seal', botanicalName: 'Pinnipedia', group: 'Mammals' },
    { number: 42, animal: 'Otter', botanicalName: 'Lutrinae', group: 'Mammals' },
    { number: 43, animal: 'Penguin', botanicalName: 'Spheniscus', group: 'Birds' },
    { number: 44, animal: 'Crow', botanicalName: 'Corvus', group: 'Birds' },
    { number: 45, animal: 'Swan', botanicalName: 'Cygnus', group: 'Birds' },
 
  // Add more entries as needed
];

