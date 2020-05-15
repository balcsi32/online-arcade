import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list'; 


export interface PeriodicElement {
  name: string;
  imageUrl: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Mario', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/1200px-Mario_Series_Logo.svg.png'},
  {name: 'Tetris', imageUrl: 'https://hirado.hu/wp-content/uploads/sites/7/2016/10/tetris.jpg'},
  {name: 'Space Invaders', imageUrl: 'https://www.mobygames.com/images/covers/l/19650-space-invaders-atari-2600-front-cover.jpg'},
  {name: 'Pac Man', imageUrl: 'https://i.pinimg.com/474x/0e/c1/bb/0ec1bbe5baa3da4696cc50c968e96a9a--pac-man-video-game.jpg'},
  {name: 'Galaga', imageUrl: 'https://www.mobygames.com/images/covers/l/18699-galaga-nes-front-cover.jpg'},
  {name: 'Frogger', imageUrl: 'https://www.mobygames.com/images/covers/l/102317-frogger-pc-booter-front-cover.jpg'},
  {name: 'Pong', imageUrl: 'https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/7465/817419-atari___pong_1973.jpg'},
  {name: 'And more coming soon...', imageUrl: ''},
];
@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {
  displayedColumns: string[] = [ 'name', 'imageUrl'];
  dataSource = ELEMENT_DATA;
}
