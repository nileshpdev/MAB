import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';
import { Result } from '../interface/result';
import { Player } from '../player';
import { PLAYERS } from '../players';
import { CombinedData } from '../interface/combined-data';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  players: Player[] = PLAYERS;
  results: Result[] = [];
  display: CombinedData[] = [];


  constructor(private resultsService: ResultsService) { }

  ngOnInit() {


    this.resultsService.getData()
      .subscribe(data => this.results = data)




    // this.players.map(player => {
    //   let totalResults = this.results.find(result => result.PlayerId === player.PlayerId)
    //   return { ...player, ...totalResults }
    // })


  }
}

